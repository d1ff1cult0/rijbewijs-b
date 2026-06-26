import { prisma } from "@/lib/prisma";
import { sample, shuffle } from "@/lib/utils";
import { EXAM_TOTAL_QUESTIONS } from "@/lib/exam";

export interface RunnerOption {
  id: number;
  text: string;
}

export interface RunnerQuestion {
  id: number;
  text: string;
  imageUrl: string | null;
  imageAlt: string | null;
  categoryName: string;
  options: RunnerOption[];
  // Enkel meegegeven bij directe-feedbackmodi (niet in EXAM):
  correctOptionId?: number;
  explanation?: string;
}

type Mode = "EXAM" | "PRACTICE" | "MISTAKES";

function toRunnerQuestion(
  q: {
    id: number;
    text: string;
    imageUrl: string | null;
    imageAlt: string | null;
    explanation: string;
    category: { name: string };
    options: { id: number; text: string; isCorrect: boolean }[];
  },
  withAnswers: boolean
): RunnerQuestion {
  const options = shuffle(q.options).map((o) => ({ id: o.id, text: o.text }));
  const base: RunnerQuestion = {
    id: q.id,
    text: q.text,
    imageUrl: q.imageUrl,
    imageAlt: q.imageAlt,
    categoryName: q.category.name,
    options,
  };
  if (withAnswers) {
    base.correctOptionId = q.options.find((o) => o.isCorrect)?.id;
    base.explanation = q.explanation;
  }
  return base;
}

const fullSelect = {
  id: true,
  text: true,
  imageUrl: true,
  imageAlt: true,
  explanation: true,
  isSevere: true,
  category: { select: { name: true } },
  options: { select: { id: true, text: true, isCorrect: true } },
} as const;

/** Selecteer ~50 vragen voor een proefexamen, gewogen per categorie. */
export async function selectExamQuestions(): Promise<RunnerQuestion[]> {
  const categories = await prisma.category.findMany({
    select: { id: true, examWeight: true },
  });

  const chosenIds: number[] = [];
  for (const c of categories) {
    const ids = await prisma.question.findMany({
      where: { categoryId: c.id, type: "EXAM" },
      select: { id: true },
    });
    chosenIds.push(...sample(ids.map((q) => q.id), c.examWeight));
  }

  // Aanvullen of bijschaven tot exact EXAM_TOTAL_QUESTIONS
  let pool = chosenIds;
  if (pool.length < EXAM_TOTAL_QUESTIONS) {
    const extra = await prisma.question.findMany({
      where: { type: "EXAM", id: { notIn: pool } },
      select: { id: true },
    });
    pool.push(...sample(extra.map((q) => q.id), EXAM_TOTAL_QUESTIONS - pool.length));
  }
  pool = sample(pool, EXAM_TOTAL_QUESTIONS);

  const questions = await prisma.question.findMany({
    where: { id: { in: pool } },
    select: fullSelect,
  });
  return shuffle(questions).map((q) => toRunnerQuestion(q, false));
}

/** Vrije oefening: vragen uit één categorie (of alle), met directe feedback. */
export async function selectPracticeQuestions(
  categorySlug: string | null,
  count = 15
): Promise<RunnerQuestion[]> {
  const ids = await prisma.question.findMany({
    where: {
      type: "EXAM",
      ...(categorySlug ? { category: { slug: categorySlug } } : {}),
    },
    select: { id: true },
  });
  const pool = sample(ids.map((q) => q.id), count);
  const questions = await prisma.question.findMany({
    where: { id: { in: pool } },
    select: fullSelect,
  });
  return shuffle(questions).map((q) => toRunnerQuestion(q, true));
}

/** Adaptief oefenen: meer vragen uit categorieën waar de gebruiker zwak scoort. */
export async function selectAdaptiveQuestions(
  sessionKey: string,
  count = 20
): Promise<RunnerQuestion[]> {
  const answers = await prisma.userAnswer.findMany({
    where: { attempt: { sessionKey } },
    select: { isCorrect: true, question: { select: { categoryId: true } } },
  });

  const stat = new Map<number, { total: number; correct: number }>();
  for (const a of answers) {
    const s = stat.get(a.question.categoryId) ?? { total: 0, correct: 0 };
    s.total++;
    if (a.isCorrect) s.correct++;
    stat.set(a.question.categoryId, s);
  }

  const categories = await prisma.category.findMany({ select: { id: true } });
  // Gewicht = foutratio (zwakke categorieën krijgen meer gewicht). Onbekend = gemiddeld.
  const weights = categories.map((c) => {
    const s = stat.get(c.id);
    const wrongRate = s && s.total > 0 ? 1 - s.correct / s.total : 0.5;
    return { id: c.id, weight: 0.15 + wrongRate };
  });
  const totalWeight = weights.reduce((sum, w) => sum + w.weight, 0);

  const chosenIds: number[] = [];
  for (const w of weights) {
    const n = Math.max(1, Math.round((w.weight / totalWeight) * count));
    const ids = await prisma.question.findMany({
      where: { categoryId: w.id, type: "EXAM" },
      select: { id: true },
    });
    chosenIds.push(...sample(ids.map((q) => q.id), n));
  }
  const pool = sample(chosenIds, count);
  const questions = await prisma.question.findMany({
    where: { id: { in: pool } },
    select: fullSelect,
  });
  return shuffle(questions).map((q) => toRunnerQuestion(q, true));
}

/** Foutenboek: vragen die de gebruiker eerder fout had. */
export async function selectMistakeQuestions(
  sessionKey: string,
  count = 20
): Promise<RunnerQuestion[]> {
  const wrong = await prisma.userAnswer.findMany({
    where: { attempt: { sessionKey }, isCorrect: false },
    select: { questionId: true },
    orderBy: { answeredAt: "desc" },
  });
  const uniqueIds = Array.from(new Set(wrong.map((w) => w.questionId)));
  if (uniqueIds.length === 0) return [];
  const pool = sample(uniqueIds, count);
  const questions = await prisma.question.findMany({
    where: { id: { in: pool } },
    select: fullSelect,
  });
  return shuffle(questions).map((q) => toRunnerQuestion(q, true));
}

export type { Mode };

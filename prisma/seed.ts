import { PrismaClient } from "@prisma/client";
import { categories } from "./seed-data/categories";
import { lessons } from "./seed-data/lessons";
import { examQuestions } from "./seed-data/questions";
import { signs } from "./seed-data/signs";
import type { Difficulty, QuestionType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱  Seed gestart...");

  // Idempotent: sla over als de database al inhoud heeft (zo blijft de
  // voortgang van de gebruiker bewaard bij een herstart). Forceer met FORCE_SEED=1.
  const existing = await prisma.category.count();
  if (existing > 0 && process.env.FORCE_SEED !== "1") {
    console.log(
      `ℹ️  Database bevat al ${existing} categorieën — seed overgeslagen. ` +
        "Gebruik FORCE_SEED=1 om opnieuw te seeden."
    );
    return;
  }

  // Schone lei (in juiste volgorde i.v.m. relaties)
  await prisma.userAnswer.deleteMany();
  await prisma.examAttempt.deleteMany();
  await prisma.option.deleteMany();
  await prisma.question.deleteMany();
  await prisma.theorySection.deleteMany();
  await prisma.theoryLesson.deleteMany();
  await prisma.trafficSign.deleteMany();
  await prisma.category.deleteMany();

  // 1) Categorieën
  const categoryIdBySlug = new Map<string, number>();
  for (const c of categories) {
    const created = await prisma.category.create({
      data: {
        slug: c.slug,
        name: c.name,
        description: c.description,
        examWeight: c.examWeight,
        order: c.order,
        icon: c.icon,
        color: c.color,
      },
    });
    categoryIdBySlug.set(c.slug, created.id);
  }
  console.log(`✓ ${categories.length} categorieën`);

  // 2) Theorielessen + secties + mini-quizvragen
  let sectionCount = 0;
  let miniQuizCount = 0;
  for (const lesson of lessons) {
    const categoryId = categoryIdBySlug.get(lesson.category);
    if (!categoryId) throw new Error(`Onbekende categorie: ${lesson.category}`);

    const createdLesson = await prisma.theoryLesson.create({
      data: {
        slug: lesson.slug,
        title: lesson.title,
        intro: lesson.intro,
        estMinutes: lesson.estMinutes,
        order: lesson.order,
        categoryId,
      },
    });

    for (let i = 0; i < lesson.sections.length; i++) {
      const section = lesson.sections[i];
      const createdSection = await prisma.theorySection.create({
        data: {
          heading: section.heading,
          body: section.body,
          imageUrl: section.imageUrl ?? null,
          imageAlt: section.imageAlt ?? null,
          order: i,
          lessonId: createdLesson.id,
        },
      });
      sectionCount++;

      for (const q of section.quiz ?? []) {
        await prisma.question.create({
          data: {
            text: q.text,
            explanation: q.explanation,
            type: "THEORY" as QuestionType,
            difficulty: "EASY" as Difficulty,
            isSevere: q.isSevere ?? false,
            categoryId,
            sectionId: createdSection.id,
            options: {
              create: q.options.map((o, idx) => ({
                text: o.text,
                isCorrect: o.correct ?? false,
                order: idx,
              })),
            },
          },
        });
        miniQuizCount++;
      }
    }
  }
  console.log(`✓ ${lessons.length} theorielessen, ${sectionCount} secties, ${miniQuizCount} mini-quizvragen`);

  // 3) Examenvragen
  for (const q of examQuestions) {
    const categoryId = categoryIdBySlug.get(q.category);
    if (!categoryId) throw new Error(`Onbekende categorie bij vraag: ${q.category}`);
    await prisma.question.create({
      data: {
        text: q.text,
        explanation: q.explanation,
        type: "EXAM" as QuestionType,
        difficulty: (q.difficulty ?? "MEDIUM") as Difficulty,
        isSevere: q.isSevere ?? false,
        imageUrl: q.imageUrl ?? null,
        imageAlt: q.imageAlt ?? null,
        categoryId,
        options: {
          create: q.options.map((o, idx) => ({
            text: o.text,
            isCorrect: o.correct ?? false,
            order: idx,
          })),
        },
      },
    });
  }
  console.log(`✓ ${examQuestions.length} examenvragen`);

  // 4) Verkeersborden (borden-trainer)
  for (let i = 0; i < signs.length; i++) {
    const s = signs[i];
    await prisma.trafficSign.create({
      data: {
        code: s.code,
        name: s.name,
        group: s.group,
        meaning: s.meaning,
        imageUrl: s.imageUrl,
        order: i,
      },
    });
  }
  console.log(`✓ ${signs.length} verkeersborden`);

  const totalQuestions = miniQuizCount + examQuestions.length;
  console.log(`🌱  Seed klaar! In totaal ${totalQuestions} vragen.`);
}

main()
  .catch((e) => {
    console.error("Seed mislukt:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

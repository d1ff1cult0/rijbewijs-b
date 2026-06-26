import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { scoreExam, EXAM_PASS_SCORE } from "@/lib/exam";

export const dynamic = "force-dynamic";

interface SubmittedAnswer {
  questionId: number;
  selectedOptionId: number | null;
  timeSpentSec?: number;
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json().catch(() => ({}));
  const submitted: SubmittedAnswer[] = body.answers ?? [];
  const durationSec: number = body.durationSec ?? 0;

  const attempt = await prisma.examAttempt.findUnique({
    where: { id },
    select: { id: true, mode: true, finishedAt: true },
  });
  if (!attempt) {
    return NextResponse.json({ error: "Poging niet gevonden." }, { status: 404 });
  }

  const questionIds = submitted.map((a) => a.questionId);
  const questions = await prisma.question.findMany({
    where: { id: { in: questionIds } },
    select: {
      id: true,
      text: true,
      imageUrl: true,
      imageAlt: true,
      explanation: true,
      isSevere: true,
      category: { select: { name: true } },
      options: { select: { id: true, text: true, isCorrect: true } },
    },
  });
  const qById = new Map(questions.map((q) => [q.id, q]));

  // Beoordeel elk antwoord
  const graded = submitted.map((a) => {
    const q = qById.get(a.questionId);
    const correctOption = q?.options.find((o) => o.isCorrect);
    const isCorrect = !!correctOption && correctOption.id === a.selectedOptionId;
    return {
      questionId: a.questionId,
      selectedOptionId: a.selectedOptionId,
      correctOptionId: correctOption?.id ?? null,
      isCorrect,
      isSevere: q?.isSevere ?? false,
      timeSpentSec: a.timeSpentSec ?? 0,
    };
  });

  // Bewaar antwoorden
  await prisma.userAnswer.createMany({
    data: graded.map((g) => ({
      examAttemptId: attempt.id,
      questionId: g.questionId,
      selectedOptionId: g.selectedOptionId,
      isCorrect: g.isCorrect,
      isSevere: g.isSevere && !g.isCorrect,
      timeSpentSec: g.timeSpentSec,
    })),
  });

  // Score berekenen
  let result;
  if (attempt.mode === "EXAM") {
    const r = scoreExam(graded.map((g) => ({ isCorrect: g.isCorrect, isSevere: g.isSevere })));
    result = {
      mode: "EXAM" as const,
      total: graded.length,
      correctCount: r.correctCount,
      score: r.score,
      maxScore: 50,
      passScore: EXAM_PASS_SCORE,
      lightErrors: r.lightErrors,
      severeErrors: r.severeErrors,
      passed: r.passed,
      failedBySevere: r.failedBySevere,
    };
  } else {
    const correctCount = graded.filter((g) => g.isCorrect).length;
    const passed = graded.length > 0 && correctCount / graded.length >= 0.8;
    result = {
      mode: attempt.mode,
      total: graded.length,
      correctCount,
      score: correctCount,
      maxScore: graded.length,
      passScore: Math.ceil(graded.length * 0.8),
      lightErrors: graded.length - correctCount,
      severeErrors: 0,
      passed,
      failedBySevere: false,
    };
  }

  await prisma.examAttempt.update({
    where: { id: attempt.id },
    data: {
      finishedAt: new Date(),
      totalQuestions: graded.length,
      correctCount: result.correctCount,
      score: result.score,
      passed: result.passed,
      severeErrors: result.severeErrors,
      lightErrors: result.lightErrors,
      durationSec,
    },
  });

  // Volledig overzicht voor de gebruiker
  const review = graded.map((g) => {
    const q = qById.get(g.questionId)!;
    return {
      questionId: g.questionId,
      text: q.text,
      imageUrl: q.imageUrl,
      imageAlt: q.imageAlt,
      categoryName: q.category.name,
      explanation: q.explanation,
      isSevere: q.isSevere,
      isCorrect: g.isCorrect,
      selectedOptionId: g.selectedOptionId,
      correctOptionId: g.correctOptionId,
      options: q.options.map((o) => ({ id: o.id, text: o.text, isCorrect: o.isCorrect })),
    };
  });

  return NextResponse.json({ result, review });
}

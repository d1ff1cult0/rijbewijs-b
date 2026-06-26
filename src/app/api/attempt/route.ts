import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionKey } from "@/lib/session";
import {
  selectExamQuestions,
  selectPracticeQuestions,
  selectAdaptiveQuestions,
  selectMistakeQuestions,
} from "@/lib/questions";
import { EXAM_DURATION_SEC } from "@/lib/exam";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const sessionKey = await getSessionKey();
  const body = await req.json().catch(() => ({}));
  const mode: string = body.mode ?? "EXAM";
  const categorySlug: string | null = body.categorySlug ?? null;
  const count: number = body.count ?? 15;

  let questions;
  let attemptMode: "EXAM" | "PRACTICE" | "MISTAKES" = "PRACTICE";
  let durationSec = 0;
  let immediateFeedback = true;

  switch (mode) {
    case "EXAM":
      questions = await selectExamQuestions();
      attemptMode = "EXAM";
      durationSec = EXAM_DURATION_SEC;
      immediateFeedback = false;
      break;
    case "ADAPTIVE":
      questions = await selectAdaptiveQuestions(sessionKey, count);
      attemptMode = "PRACTICE";
      break;
    case "MISTAKES":
      questions = await selectMistakeQuestions(sessionKey, count);
      attemptMode = "MISTAKES";
      break;
    case "PRACTICE":
    default:
      questions = await selectPracticeQuestions(categorySlug, count);
      attemptMode = "PRACTICE";
      break;
  }

  if (!questions || questions.length === 0) {
    return NextResponse.json(
      { error: "Geen vragen beschikbaar voor deze modus." },
      { status: 400 }
    );
  }

  const attempt = await prisma.examAttempt.create({
    data: {
      sessionKey,
      mode: attemptMode,
      totalQuestions: questions.length,
    },
    select: { id: true },
  });

  return NextResponse.json({
    attemptId: attempt.id,
    mode: attemptMode,
    durationSec,
    immediateFeedback,
    questions,
  });
}

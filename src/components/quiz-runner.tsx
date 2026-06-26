"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  XCircle,
  Timer,
  AlertTriangle,
  Trophy,
  RotateCcw,
  ChevronRight,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn, formatTime, pct } from "@/lib/utils";
import { SignImage } from "@/components/sign-image";

type Mode = "EXAM" | "PRACTICE" | "ADAPTIVE" | "MISTAKES";

interface RunnerOption {
  id: number;
  text: string;
}
interface RunnerQuestion {
  id: number;
  text: string;
  imageUrl: string | null;
  imageAlt: string | null;
  categoryName: string;
  options: RunnerOption[];
  correctOptionId?: number;
  explanation?: string;
}
interface ReviewItem {
  questionId: number;
  text: string;
  imageUrl: string | null;
  imageAlt: string | null;
  categoryName: string;
  explanation: string;
  isSevere: boolean;
  isCorrect: boolean;
  selectedOptionId: number | null;
  correctOptionId: number | null;
  options: { id: number; text: string; isCorrect: boolean }[];
}
interface RunResult {
  mode: string;
  total: number;
  correctCount: number;
  score: number;
  maxScore: number;
  passScore: number;
  lightErrors: number;
  severeErrors: number;
  passed: boolean;
  failedBySevere: boolean;
}

interface Props {
  mode: Mode;
  categorySlug?: string | null;
  count?: number;
  title: string;
  description?: string;
  startLabel?: string;
}

type Phase = "idle" | "loading" | "running" | "submitting" | "result" | "empty";

export function QuizRunner({
  mode,
  categorySlug = null,
  count,
  title,
  description,
  startLabel = "Start",
}: Props) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [error, setError] = useState<string | null>(null);
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [questions, setQuestions] = useState<RunnerQuestion[]>([]);
  const [immediate, setImmediate] = useState(true);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [current, setCurrent] = useState(0);
  const [revealed, setRevealed] = useState(false); // immediate mode: toon feedback
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [result, setResult] = useState<RunResult | null>(null);
  const [review, setReview] = useState<ReviewItem[]>([]);
  const startTimeRef = useRef<number>(0);

  const start = useCallback(async () => {
    setPhase("loading");
    setError(null);
    try {
      const res = await fetch("/api/attempt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode, categorySlug, count }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        if (res.status === 400) {
          setPhase("empty");
          return;
        }
        throw new Error(j.error ?? "Er ging iets mis.");
      }
      const data = await res.json();
      setAttemptId(data.attemptId);
      setQuestions(data.questions);
      setImmediate(data.immediateFeedback);
      setAnswers({});
      setCurrent(0);
      setRevealed(false);
      setResult(null);
      setReview([]);
      startTimeRef.current = Date.now();
      if (data.durationSec > 0) setSecondsLeft(data.durationSec);
      setPhase("running");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Onbekende fout.");
      setPhase("idle");
    }
  }, [mode, categorySlug, count]);

  const submit = useCallback(async () => {
    if (!attemptId) return;
    setPhase("submitting");
    const elapsed = Math.round((Date.now() - startTimeRef.current) / 1000);
    try {
      const res = await fetch(`/api/attempt/${attemptId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          durationSec: elapsed,
          answers: questions.map((q) => ({
            questionId: q.id,
            selectedOptionId: answers[q.id] ?? null,
          })),
        }),
      });
      if (!res.ok) throw new Error("Indienen mislukt.");
      const data = await res.json();
      setResult(data.result);
      setReview(data.review);
      setPhase("result");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Indienen mislukt.");
      setPhase("running");
    }
  }, [attemptId, answers, questions]);

  // Timer voor het examen
  useEffect(() => {
    if (phase !== "running" || secondsLeft <= 0) return;
    const t = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [phase, secondsLeft]);

  useEffect(() => {
    if (phase === "running" && secondsLeft === 0 && questions.length > 0 && !immediate) {
      // tijd op → automatisch indienen (alleen examen heeft een timer)
      void submit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft, phase]);

  function selectOption(optionId: number) {
    const q = questions[current];
    if (immediate && revealed) return; // al beantwoord
    setAnswers((a) => ({ ...a, [q.id]: optionId }));
    if (immediate) setRevealed(true);
  }

  function next() {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setRevealed(false);
    } else {
      void submit();
    }
  }

  // -------------------------------------------------------------- RENDER
  if (phase === "idle" || phase === "loading") {
    return (
      <Card className="animate-fade-in">
        <CardContent className="flex flex-col items-center gap-4 py-10 text-center">
          <h2 className="text-2xl font-bold">{title}</h2>
          {description && <p className="max-w-md text-muted-foreground">{description}</p>}
          {error && <p className="text-sm text-danger">{error}</p>}
          <Button size="lg" onClick={start} disabled={phase === "loading"}>
            {phase === "loading" ? (
              <>
                <Loader2 className="animate-spin" /> Laden...
              </>
            ) : (
              startLabel
            )}
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (phase === "empty") {
    return (
      <Card>
        <CardContent className="flex flex-col items-center gap-3 py-10 text-center">
          <Trophy className="h-10 w-10 text-success" />
          <h2 className="text-xl font-bold">Niets om te oefenen</h2>
          <p className="max-w-md text-muted-foreground">
            {mode === "MISTAKES"
              ? "Je foutenboek is leeg. Maak eerst een proefexamen of oefening; vragen die je fout had, verschijnen hier."
              : "Er zijn momenteel geen vragen beschikbaar."}
          </p>
        </CardContent>
      </Card>
    );
  }

  if (phase === "result" && result) {
    return <ResultView result={result} review={review} onRestart={() => setPhase("idle")} />;
  }

  // running / submitting
  const q = questions[current];
  const selected = answers[q.id];
  const correctId = q.correctOptionId;

  return (
    <div className="animate-fade-in space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{q.categoryName}</Badge>
          <span className="text-sm text-muted-foreground">
            Vraag {current + 1} / {questions.length}
          </span>
        </div>
        {secondsLeft > 0 && (
          <Badge variant={secondsLeft < 60 ? "danger" : "outline"} className="tabular-nums">
            <Timer className="h-3.5 w-3.5" /> {formatTime(secondsLeft)}
          </Badge>
        )}
      </div>
      <Progress value={pct(current + (revealed || selected !== undefined ? 1 : 0), questions.length)} />

      <Card>
        <CardContent className="space-y-5 p-6">
          {q.imageUrl && (
            <div className="flex justify-center rounded-lg bg-muted/50 p-4">
              <SignImage
                src={q.imageUrl}
                alt={q.imageAlt ?? "Verkeerssituatie"}
                className="max-h-48 w-auto"
              />
            </div>
          )}
          <h3 className="text-lg font-semibold leading-snug">{q.text}</h3>

          <div className="grid gap-2.5">
            {q.options.map((o, idx) => {
              const isSelected = selected === o.id;
              const showCorrect = immediate && revealed && correctId === o.id;
              const showWrong = immediate && revealed && isSelected && correctId !== o.id;
              return (
                <button
                  key={o.id}
                  onClick={() => selectOption(o.id)}
                  disabled={immediate && revealed}
                  className={cn(
                    "flex items-center gap-3 rounded-lg border p-3.5 text-left text-sm transition-colors",
                    "hover:border-primary/60 hover:bg-secondary/60 disabled:cursor-default",
                    isSelected && !immediate && "border-primary bg-primary/5",
                    showCorrect && "border-success bg-success/10 text-success",
                    showWrong && "border-danger bg-danger/10 text-danger",
                    !isSelected && !showCorrect && "border-border"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold",
                      isSelected && !immediate && "border-primary text-primary",
                      showCorrect && "border-success text-success",
                      showWrong && "border-danger text-danger"
                    )}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1">{o.text}</span>
                  {showCorrect && <CheckCircle2 className="h-5 w-5 text-success" />}
                  {showWrong && <XCircle className="h-5 w-5 text-danger" />}
                </button>
              );
            })}
          </div>

          {immediate && revealed && q.explanation && (
            <div
              className={cn(
                "rounded-lg border p-4 text-sm",
                selected === correctId
                  ? "border-success/30 bg-success/5"
                  : "border-amber-500/30 bg-amber-500/5"
              )}
            >
              <p className="mb-1 font-semibold">
                {selected === correctId ? "Juist!" : "Niet juist."}
              </p>
              <p className="text-muted-foreground">{q.explanation}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex items-center justify-between gap-3">
        {!immediate ? (
          <>
            <Button
              variant="outline"
              onClick={() => {
                setCurrent((c) => Math.max(0, c - 1));
              }}
              disabled={current === 0}
            >
              Vorige
            </Button>
            {current < questions.length - 1 ? (
              <Button onClick={() => setCurrent((c) => c + 1)}>
                Volgende <ChevronRight />
              </Button>
            ) : (
              <Button
                variant="success"
                onClick={submit}
                disabled={phase === "submitting"}
              >
                {phase === "submitting" ? <Loader2 className="animate-spin" /> : "Examen beëindigen"}
              </Button>
            )}
          </>
        ) : (
          <>
            <span className="text-sm text-muted-foreground">
              {revealed ? "" : "Kies een antwoord"}
            </span>
            <Button onClick={next} disabled={!revealed && selected === undefined}>
              {current < questions.length - 1 ? (
                <>
                  Volgende <ChevronRight />
                </>
              ) : phase === "submitting" ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Resultaat bekijken"
              )}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

// ------------------------------------------------------------------ RESULT
function ResultView({
  result,
  review,
  onRestart,
}: {
  result: RunResult;
  review: ReviewItem[];
  onRestart: () => void;
}) {
  const isExam = result.mode === "EXAM";
  return (
    <div className="animate-fade-in space-y-6">
      <Card className={cn("border-2", result.passed ? "border-success/40" : "border-danger/40")}>
        <CardContent className="flex flex-col items-center gap-3 py-8 text-center">
          {result.passed ? (
            <Trophy className="h-12 w-12 text-success" />
          ) : (
            <AlertTriangle className="h-12 w-12 text-danger" />
          )}
          <h2 className="text-2xl font-bold">
            {result.passed ? "Geslaagd!" : "Niet geslaagd"}
          </h2>
          <div className="text-4xl font-extrabold tabular-nums">
            {isExam ? (
              <>
                {result.score}
                <span className="text-xl text-muted-foreground">/{result.maxScore}</span>
              </>
            ) : (
              <>
                {result.correctCount}
                <span className="text-xl text-muted-foreground">/{result.total}</span>
              </>
            )}
          </div>
          {isExam && (
            <p className="text-sm text-muted-foreground">
              Geslaagd vanaf {result.passScore}/{result.maxScore} punten.
            </p>
          )}
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            <Badge variant="success">{result.correctCount} juist</Badge>
            <Badge variant="danger">{result.total - result.correctCount} fout</Badge>
            {isExam && result.severeErrors > 0 && (
              <Badge variant="warning">{result.severeErrors} zware fout(en)</Badge>
            )}
          </div>
          {isExam && result.failedBySevere && (
            <p className="mt-1 max-w-md text-sm text-danger">
              Je maakte 2 of meer zware fouten. In het echte examen betekent dit
              automatisch buizen, ongeacht je puntentotaal.
            </p>
          )}
          <Button className="mt-3" onClick={onRestart}>
            <RotateCcw /> Opnieuw
          </Button>
        </CardContent>
      </Card>

      <div>
        <h3 className="mb-3 text-lg font-semibold">Overzicht van je antwoorden</h3>
        <div className="space-y-3">
          {review.map((r, i) => (
            <Card key={r.questionId} className={cn(r.isCorrect ? "" : "border-danger/30")}>
              <CardContent className="space-y-3 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {r.isCorrect ? (
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                    ) : (
                      <XCircle className="h-5 w-5 shrink-0 text-danger" />
                    )}
                    <span className="text-xs text-muted-foreground">
                      {i + 1}. {r.categoryName}
                    </span>
                  </div>
                  {r.isSevere && <Badge variant="warning">Zware fout</Badge>}
                </div>
                {r.imageUrl && (
                  <div className="flex justify-center rounded bg-muted/50 p-2">
                    <SignImage src={r.imageUrl} alt={r.imageAlt ?? ""} className="max-h-28 w-auto" />
                  </div>
                )}
                <p className="font-medium">{r.text}</p>
                <div className="grid gap-1.5 text-sm">
                  {r.options.map((o) => {
                    const isCorrect = o.isCorrect;
                    const isChosen = o.id === r.selectedOptionId;
                    return (
                      <div
                        key={o.id}
                        className={cn(
                          "flex items-center gap-2 rounded-md border px-3 py-2",
                          isCorrect && "border-success/40 bg-success/5 text-success",
                          isChosen && !isCorrect && "border-danger/40 bg-danger/5 text-danger",
                          !isCorrect && !isChosen && "border-border text-muted-foreground"
                        )}
                      >
                        {isCorrect ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : isChosen ? (
                          <XCircle className="h-4 w-4" />
                        ) : (
                          <span className="h-4 w-4" />
                        )}
                        <span>{o.text}</span>
                      </div>
                    );
                  })}
                </div>
                <p className="rounded-md bg-muted/50 p-3 text-sm text-muted-foreground">
                  <strong className="text-foreground">Uitleg: </strong>
                  {r.explanation}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface Option {
  id: number;
  text: string;
  isCorrect: boolean;
}
interface MiniQuizQuestion {
  id: number;
  text: string;
  explanation: string;
  options: Option[];
}

export function MiniQuiz({ questions }: { questions: MiniQuizQuestion[] }) {
  if (questions.length === 0) return null;
  return (
    <div className="my-6 space-y-4 rounded-xl border border-primary/20 bg-primary/5 p-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
        <HelpCircle className="h-4 w-4" />
        Snelle controle
      </div>
      {questions.map((q) => (
        <MiniQuizItem key={q.id} q={q} />
      ))}
    </div>
  );
}

function MiniQuizItem({ q }: { q: MiniQuizQuestion }) {
  const [chosen, setChosen] = useState<number | null>(null);
  const correctId = q.options.find((o) => o.isCorrect)?.id;
  const answered = chosen !== null;

  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <p className="mb-3 font-medium">{q.text}</p>
      <div className="grid gap-2">
        {q.options.map((o, idx) => {
          const showCorrect = answered && o.id === correctId;
          const showWrong = answered && o.id === chosen && o.id !== correctId;
          return (
            <button
              key={o.id}
              disabled={answered}
              onClick={() => setChosen(o.id)}
              className={cn(
                "flex items-center gap-3 rounded-md border p-3 text-left text-sm transition-colors",
                !answered && "hover:border-primary/60 hover:bg-secondary/60",
                showCorrect && "border-success bg-success/10 text-success",
                showWrong && "border-danger bg-danger/10 text-danger",
                !showCorrect && !showWrong && "border-border"
              )}
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="flex-1">{o.text}</span>
              {showCorrect && <CheckCircle2 className="h-4 w-4" />}
              {showWrong && <XCircle className="h-4 w-4" />}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="mt-3 flex items-start gap-2 rounded-md bg-muted/60 p-3 text-sm text-muted-foreground">
          <Badge variant={chosen === correctId ? "success" : "warning"} className="shrink-0">
            {chosen === correctId ? "Juist" : "Fout"}
          </Badge>
          <span>{q.explanation}</span>
        </div>
      )}
    </div>
  );
}

import { ClipboardCheck, Timer, AlertTriangle, ListChecks } from "lucide-react";
import { QuizRunner } from "@/components/quiz-runner";
import { Card, CardContent } from "@/components/ui/card";
import {
  EXAM_TOTAL_QUESTIONS,
  EXAM_PASS_SCORE,
  EXAM_DURATION_SEC,
} from "@/lib/exam";

export const metadata = { title: "Proefexamen — Rijbewijs B" };

export default function ExamenPage() {
  return (
    <div className="container max-w-3xl py-10">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <ClipboardCheck className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-3xl font-bold">Proefexamen</h1>
          <p className="text-muted-foreground">Officieel Belgisch format</p>
        </div>
      </div>

      <Card className="mb-6 bg-secondary/40">
        <CardContent className="grid gap-4 p-6 sm:grid-cols-3">
          <Fact icon={ListChecks} title={`${EXAM_TOTAL_QUESTIONS} vragen`} text="willekeurig uit de vragenpool" />
          <Fact icon={Timer} title={`${Math.round(EXAM_DURATION_SEC / 60)} minuten`} text="met aftellende timer" />
          <Fact icon={AlertTriangle} title={`Vanaf ${EXAM_PASS_SCORE}/50`} text="geslaagd; zware fouten tellen zwaar" />
        </CardContent>
      </Card>

      <QuizRunner
        mode="EXAM"
        title="Klaar voor je proefexamen?"
        description="Je krijgt 50 willekeurige vragen. Je start op 50 punten: elke lichte fout kost 1 punt, elke zware fout 5 punten. Vanaf 41 punten ben je geslaagd, maar 2 zware fouten betekenen automatisch buizen. Pas na het indienen zie je de juiste antwoorden."
        startLabel="Start het proefexamen"
      />
    </div>
  );
}

function Fact({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
      <div>
        <p className="font-semibold leading-tight">{title}</p>
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

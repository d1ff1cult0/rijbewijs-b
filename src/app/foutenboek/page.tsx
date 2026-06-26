import { NotebookPen } from "lucide-react";
import { QuizRunner } from "@/components/quiz-runner";

export const metadata = { title: "Foutenboek — Rijbewijs B" };

export default function FoutenboekPage() {
  return (
    <div className="container max-w-3xl py-10">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <NotebookPen className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-3xl font-bold">Foutenboek</h1>
          <p className="text-muted-foreground">
            Herhaal gericht de vragen die je eerder fout had.
          </p>
        </div>
      </div>

      <QuizRunner
        mode="MISTAKES"
        count={20}
        title="Herhaal je fouten"
        description="We verzamelen de vragen die je in eerdere examens en oefeningen fout beantwoordde. Door ze opnieuw te maken (met uitleg) onthoud je ze beter."
        startLabel="Start foutenboek"
      />
    </div>
  );
}

"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { QuizRunner } from "@/components/quiz-runner";
import { Button } from "@/components/ui/button";

interface Category {
  slug: string;
  name: string;
  color: string;
}

type Selection =
  | { kind: "category"; slug: string; name: string }
  | { kind: "adaptive" };

export function PracticePanel({
  categories,
  initialCategory,
}: {
  categories: Category[];
  initialCategory?: string;
}) {
  const initial = categories.find((c) => c.slug === initialCategory);
  const [selection, setSelection] = useState<Selection>(
    initial ? { kind: "category", slug: initial.slug, name: initial.name } : { kind: "adaptive" }
  );

  const key =
    selection.kind === "adaptive" ? "adaptive" : `cat-${selection.slug}`;

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selection.kind === "adaptive" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelection({ kind: "adaptive" })}
          >
            <Sparkles className="h-4 w-4" /> Adaptief (jouw zwakke punten)
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => {
            const active = selection.kind === "category" && selection.slug === c.slug;
            return (
              <Button
                key={c.slug}
                variant={active ? "default" : "outline"}
                size="sm"
                onClick={() => setSelection({ kind: "category", slug: c.slug, name: c.name })}
              >
                {c.name}
              </Button>
            );
          })}
        </div>
      </div>

      {selection.kind === "adaptive" ? (
        <QuizRunner
          key={key}
          mode="ADAPTIVE"
          count={20}
          title="Adaptief oefenen"
          description="De app kiest meer vragen uit de categorieën waarin je tot nu toe zwakker scoort. Je krijgt directe feedback met uitleg bij elk antwoord."
          startLabel="Start adaptieve oefening"
        />
      ) : (
        <QuizRunner
          key={key}
          mode="PRACTICE"
          categorySlug={selection.slug}
          count={15}
          title={`Oefenen: ${selection.name}`}
          description="Oefen deze categorie met directe feedback en uitleg bij elk antwoord. Geen timer, neem gerust je tijd."
          startLabel="Start oefening"
        />
      )}
    </div>
  );
}

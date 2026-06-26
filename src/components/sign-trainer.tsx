"use client";

import { useMemo, useState } from "react";
import { Eye, RotateCcw, ChevronLeft, ChevronRight, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SignImage } from "@/components/sign-image";
import { shuffle as shuffleArr, cn } from "@/lib/utils";

interface Sign {
  id: number;
  code: string;
  name: string;
  group: string;
  meaning: string;
  imageUrl: string;
}

const GROUP_LABELS: Record<string, string> = {
  GEVAAR: "Gevaarsborden",
  VERBOD: "Verbodsborden",
  GEBOD: "Gebodsborden",
  VOORRANG: "Voorrangsborden",
  AANWIJZING: "Aanwijzingsborden",
  ONDERBORD: "Onderborden",
};

export function SignTrainer({ signs }: { signs: Sign[] }) {
  const groups = useMemo(
    () => Array.from(new Set(signs.map((s) => s.group))),
    [signs]
  );
  const [activeGroup, setActiveGroup] = useState<string | "ALL">("ALL");
  const [order, setOrder] = useState<Sign[]>(signs);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const filtered = useMemo(() => {
    const base = activeGroup === "ALL" ? order : order.filter((s) => s.group === activeGroup);
    return base;
  }, [order, activeGroup]);

  const card = filtered[index];

  function go(delta: number) {
    setFlipped(false);
    setIndex((i) => {
      const n = filtered.length;
      return ((i + delta) % n + n) % n;
    });
  }

  function pickGroup(g: string | "ALL") {
    setActiveGroup(g);
    setIndex(0);
    setFlipped(false);
  }

  function reshuffle() {
    setOrder((o) => shuffleArr(o));
    setIndex(0);
    setFlipped(false);
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-2">
        <Button
          size="sm"
          variant={activeGroup === "ALL" ? "default" : "outline"}
          onClick={() => pickGroup("ALL")}
        >
          Alle ({signs.length})
        </Button>
        {groups.map((g) => (
          <Button
            key={g}
            size="sm"
            variant={activeGroup === g ? "default" : "outline"}
            onClick={() => pickGroup(g)}
          >
            {GROUP_LABELS[g] ?? g}
          </Button>
        ))}
        <Button size="sm" variant="ghost" onClick={reshuffle} className="ml-auto">
          <Shuffle className="h-4 w-4" /> Schud
        </Button>
      </div>

      {card ? (
        <>
          <Card
            className="mx-auto max-w-xl cursor-pointer select-none transition-shadow hover:shadow-md"
            onClick={() => setFlipped((f) => !f)}
          >
            <CardContent className="flex min-h-[20rem] flex-col items-center justify-center gap-4 p-8 text-center">
              <Badge variant="secondary">{GROUP_LABELS[card.group] ?? card.group}</Badge>
              <SignImage src={card.imageUrl} alt={card.name} className="max-h-40 w-auto" />
              {flipped ? (
                <div className="animate-fade-in space-y-2">
                  <p className="text-lg font-bold">{card.name}</p>
                  <p className="text-sm text-muted-foreground">{card.meaning}</p>
                </div>
              ) : (
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Eye className="h-4 w-4" /> Klik om de betekenis te tonen
                </p>
              )}
            </CardContent>
          </Card>

          <div className="flex items-center justify-center gap-3">
            <Button variant="outline" size="icon" onClick={() => go(-1)} aria-label="Vorige">
              <ChevronLeft />
            </Button>
            <span className="min-w-[5rem] text-center text-sm tabular-nums text-muted-foreground">
              {index + 1} / {filtered.length}
            </span>
            <Button variant="outline" size="icon" onClick={() => go(1)} aria-label="Volgende">
              <ChevronRight />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setFlipped((f) => !f)}>
              <RotateCcw className="h-4 w-4" /> Omdraaien
            </Button>
          </div>
        </>
      ) : (
        <p className="text-center text-muted-foreground">Geen borden in deze categorie.</p>
      )}
    </div>
  );
}

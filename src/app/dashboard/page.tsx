import Link from "next/link";
import { BarChart3, Trophy, Target, TrendingUp, History } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { getSessionKey } from "@/lib/session";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { buttonVariants } from "@/components/ui/button";
import { pct, formatTime } from "@/lib/utils";

export const dynamic = "force-dynamic";
export const metadata = { title: "Voortgang — Rijbewijs B" };

const MODE_LABEL: Record<string, string> = {
  EXAM: "Proefexamen",
  PRACTICE: "Oefening",
  MISTAKES: "Foutenboek",
};

export default async function DashboardPage() {
  const sessionKey = await getSessionKey();

  const [attempts, answers, categories] = await Promise.all([
    prisma.examAttempt.findMany({
      where: { sessionKey, finishedAt: { not: null } },
      orderBy: { startedAt: "desc" },
      take: 50,
    }),
    prisma.userAnswer.findMany({
      where: { attempt: { sessionKey } },
      select: { isCorrect: true, question: { select: { categoryId: true } } },
    }),
    prisma.category.findMany({ orderBy: { order: "asc" } }),
  ]);

  const examAttempts = attempts.filter((a) => a.mode === "EXAM");
  const bestScore = examAttempts.reduce((m, a) => Math.max(m, a.score), 0);
  const passedExams = examAttempts.filter((a) => a.passed).length;
  const totalAnswered = answers.length;
  const totalCorrect = answers.filter((a) => a.isCorrect).length;

  const statByCat = new Map<number, { total: number; correct: number }>();
  for (const a of answers) {
    const s = statByCat.get(a.question.categoryId) ?? { total: 0, correct: 0 };
    s.total++;
    if (a.isCorrect) s.correct++;
    statByCat.set(a.question.categoryId, s);
  }

  const catStats = categories
    .map((c) => {
      const s = statByCat.get(c.id) ?? { total: 0, correct: 0 };
      return { ...c, total: s.total, correct: s.correct, accuracy: pct(s.correct, s.total) };
    });

  const hasData = totalAnswered > 0;

  return (
    <div className="container max-w-4xl py-10">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <BarChart3 className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-3xl font-bold">Jouw voortgang</h1>
          <p className="text-muted-foreground">
            Je resultaten worden lokaal in deze browser bijgehouden (geen account nodig).
          </p>
        </div>
      </div>

      {!hasData ? (
        <Card>
          <CardContent className="flex flex-col items-center gap-3 py-12 text-center">
            <Target className="h-10 w-10 text-muted-foreground" />
            <p className="font-medium">Nog geen resultaten</p>
            <p className="max-w-md text-muted-foreground">
              Maak een proefexamen of oefening om je voortgang hier te zien
              verschijnen.
            </p>
            <Link href="/examen" className={buttonVariants({})}>
              Start een proefexamen
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-8">
          {/* Kerncijfers */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <StatCard icon={Trophy} label="Beste examenscore" value={`${bestScore}/50`} />
            <StatCard icon={TrendingUp} label="Examens geslaagd" value={`${passedExams}/${examAttempts.length || 0}`} />
            <StatCard icon={Target} label="Juist beantwoord" value={`${pct(totalCorrect, totalAnswered)}%`} />
            <StatCard icon={History} label="Vragen gemaakt" value={String(totalAnswered)} />
          </div>

          {/* Per categorie */}
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-lg font-semibold">Score per categorie</h2>
              <div className="space-y-4">
                {catStats.map((c) => (
                  <div key={c.id}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium">{c.name}</span>
                      <span className="flex items-center gap-2 text-muted-foreground">
                        {c.total === 0 ? (
                          <span>nog niet geoefend</span>
                        ) : (
                          <>
                            <span className="tabular-nums">{c.correct}/{c.total}</span>
                            {c.total >= 4 && c.accuracy < 70 && (
                              <Badge variant="warning">zwak punt</Badge>
                            )}
                            {c.total >= 4 && c.accuracy >= 85 && (
                              <Badge variant="success">sterk</Badge>
                            )}
                          </>
                        )}
                      </span>
                    </div>
                    <Progress
                      value={c.accuracy}
                      indicatorClassName={
                        c.total === 0
                          ? "bg-muted-foreground/30"
                          : c.accuracy < 70
                          ? "bg-danger"
                          : c.accuracy < 85
                          ? "bg-amber-500"
                          : "bg-success"
                      }
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-end">
                <Link href="/oefenen" className={buttonVariants({ variant: "outline", size: "sm" })}>
                  Oefen je zwakke punten
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Recente pogingen */}
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-lg font-semibold">Recente pogingen</h2>
              <div className="divide-y divide-border">
                {attempts.slice(0, 10).map((a) => (
                  <div key={a.id} className="flex items-center justify-between gap-3 py-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{MODE_LABEL[a.mode] ?? a.mode}</Badge>
                      <span className="text-muted-foreground">
                        {new Date(a.startedAt).toLocaleDateString("nl-BE", {
                          day: "numeric",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {a.mode === "EXAM" && a.durationSec > 0 && (
                        <span className="hidden text-muted-foreground sm:inline">
                          {formatTime(a.durationSec)}
                        </span>
                      )}
                      <span className="tabular-nums font-medium">
                        {a.mode === "EXAM" ? `${a.score}/50` : `${a.correctCount}/${a.totalQuestions}`}
                      </span>
                      <Badge variant={a.passed ? "success" : "danger"}>
                        {a.passed ? "geslaagd" : "gebuisd"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <Card>
      <CardContent className="p-4">
        <Icon className="mb-2 h-5 w-5 text-primary" />
        <div className="text-2xl font-bold tabular-nums">{value}</div>
        <div className="text-xs text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
}

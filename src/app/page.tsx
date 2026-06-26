import Link from "next/link";
import {
  BookOpen,
  ClipboardCheck,
  Dumbbell,
  Octagon,
  NotebookPen,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { prisma } from "@/lib/prisma";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  EXAM_TOTAL_QUESTIONS,
  EXAM_PASS_SCORE,
} from "@/lib/exam";

export const dynamic = "force-dynamic";

const features = [
  {
    href: "/theorie",
    icon: BookOpen,
    title: "Theorielessen",
    desc: "Alle 11 hoofdstukken met heldere uitleg, afbeeldingen en tussentijdse quizjes.",
  },
  {
    href: "/examen",
    icon: ClipboardCheck,
    title: "Proefexamen",
    desc: "50 vragen in het officiële Belgische format, met timer en zware fouten.",
  },
  {
    href: "/oefenen",
    icon: Dumbbell,
    title: "Oefenen",
    desc: "Oefen per categorie of laat de app adaptief je zwakke punten aanpakken.",
  },
  {
    href: "/borden",
    icon: Octagon,
    title: "Borden-trainer",
    desc: "Leer alle verkeersborden met flashcards, per categorie of door elkaar.",
  },
  {
    href: "/foutenboek",
    icon: NotebookPen,
    title: "Foutenboek",
    desc: "Herhaal gericht de vragen die je eerder fout had.",
  },
  {
    href: "/dashboard",
    icon: BarChart3,
    title: "Voortgang",
    desc: "Volg je scores per categorie en zie waar je nog moet bijbenen.",
  },
];

export default async function HomePage() {
  const [questionCount, lessonCount, signCount, categoryCount] = await Promise.all([
    prisma.question.count().catch(() => 0),
    prisma.theoryLesson.count().catch(() => 0),
    prisma.trafficSign.count().catch(() => 0),
    prisma.category.count().catch(() => 0),
  ]);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container py-16 text-center md:py-24">
          <Badge className="mb-4" variant="default">
            <CheckCircle2 className="h-3.5 w-3.5" /> Gebaseerd op de Belgische wegcode
          </Badge>
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-extrabold tracking-tight md:text-5xl">
            Slaag in één keer voor je <span className="text-primary">theorie-examen rijbewijs B</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Studeer de theorie, oefen met honderden vragen en doe realistische
            proefexamens — helemaal gratis en volledig in het Nederlands.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/examen" className={buttonVariants({ size: "lg" })}>
              Start een proefexamen <ArrowRight />
            </Link>
            <Link href="/theorie" className={buttonVariants({ size: "lg", variant: "outline" })}>
              Bekijk de theorie
            </Link>
          </div>

          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat value={`${questionCount}+`} label="Oefenvragen" />
            <Stat value={String(lessonCount)} label="Theorielessen" />
            <Stat value={String(signCount)} label="Verkeersborden" />
            <Stat value={String(categoryCount)} label="Categorieën" />
          </div>
        </div>
      </section>

      {/* Hoe werkt het examen */}
      <section className="container py-12">
        <Card className="bg-secondary/40">
          <CardContent className="grid gap-6 p-6 md:grid-cols-3 md:p-8">
            <ExamFact title={`${EXAM_TOTAL_QUESTIONS} vragen`} text="Het officiële theorie-examen telt 50 meerkeuzevragen." />
            <ExamFact title={`Geslaagd vanaf ${EXAM_PASS_SCORE}/50`} text="Je start op 50 punten; elke lichte fout kost 1 punt." />
            <ExamFact title="Zware fouten" text="Een zware fout kost 5 punten; 2 zware fouten = direct buizen." />
          </CardContent>
        </Card>
      </section>

      {/* Features */}
      <section className="container pb-16">
        <h2 className="mb-6 text-2xl font-bold">Alles wat je nodig hebt</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Link key={f.href} href={f.href} className="group">
              <Card className="h-full transition-all group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:shadow-md">
                <CardContent className="space-y-3 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="text-2xl font-bold text-primary">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function ExamFact({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <p className="text-lg font-bold">{title}</p>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

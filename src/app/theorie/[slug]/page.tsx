import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Dumbbell } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Prose } from "@/components/prose";
import { MiniQuiz } from "@/components/mini-quiz";
import { SignImage } from "@/components/sign-image";
import { CategoryIcon } from "@/components/icon";

export const dynamic = "force-dynamic";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = await prisma.theoryLesson.findUnique({
    where: { slug },
    include: {
      category: true,
      sections: {
        orderBy: { order: "asc" },
        include: {
          questions: {
            include: { options: { orderBy: { order: "asc" } } },
          },
        },
      },
    },
  });

  if (!lesson) notFound();

  // Volgende les (op volgorde van categorie)
  const categories = await prisma.category.findMany({
    orderBy: { order: "asc" },
    include: { lessons: { orderBy: { order: "asc" } } },
  });
  const flatLessons = categories.flatMap((c) => c.lessons);
  const idx = flatLessons.findIndex((l) => l.slug === slug);
  const prev = idx > 0 ? flatLessons[idx - 1] : null;
  const nextLesson = idx < flatLessons.length - 1 ? flatLessons[idx + 1] : null;

  return (
    <div className="container max-w-3xl py-10">
      <Link
        href="/theorie"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Terug naar theorie
      </Link>

      <div className="mb-6 flex items-center gap-3">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white"
          style={{ backgroundColor: lesson.category.color }}
        >
          <CategoryIcon name={lesson.category.icon} className="h-6 w-6" />
        </span>
        <div>
          <Badge variant="secondary">Hoofdstuk {lesson.category.order}</Badge>
          <h1 className="mt-1 text-3xl font-bold">{lesson.title}</h1>
        </div>
      </div>

      <p className="mb-8 text-lg text-muted-foreground">{lesson.intro}</p>

      <article className="space-y-8">
        {lesson.sections.map((section) => (
          <section key={section.id}>
            <h2 className="mb-3 text-xl font-semibold">{section.heading}</h2>
            {section.imageUrl && (
              <div className="mb-4 flex justify-center rounded-lg bg-muted/50 p-4">
                <SignImage
                  src={section.imageUrl}
                  alt={section.imageAlt ?? section.heading}
                  className="max-h-40 w-auto"
                />
              </div>
            )}
            <Prose text={section.body} />
            {section.questions.length > 0 && (
              <MiniQuiz
                questions={section.questions.map((q) => ({
                  id: q.id,
                  text: q.text,
                  explanation: q.explanation,
                  options: q.options.map((o) => ({
                    id: o.id,
                    text: o.text,
                    isCorrect: o.isCorrect,
                  })),
                }))}
              />
            )}
          </section>
        ))}
      </article>

      <Card className="mt-10 bg-secondary/40">
        <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
          <Dumbbell className="h-7 w-7 text-primary" />
          <p className="font-medium">Klaar om dit hoofdstuk te testen?</p>
          <Link
            href={`/oefenen?categorie=${lesson.category.slug}`}
            className={buttonVariants({})}
          >
            Oefen {lesson.category.name.toLowerCase()}
          </Link>
        </CardContent>
      </Card>

      <nav className="mt-8 flex items-center justify-between gap-3">
        {prev ? (
          <Link
            href={`/theorie/${prev.slug}`}
            className={buttonVariants({ variant: "outline" })}
          >
            <ArrowLeft /> Vorige
          </Link>
        ) : (
          <span />
        )}
        {nextLesson ? (
          <Link
            href={`/theorie/${nextLesson.slug}`}
            className={buttonVariants({ variant: "outline" })}
          >
            Volgende <ArrowRight />
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}

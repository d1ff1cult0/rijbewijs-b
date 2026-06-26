import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CategoryIcon } from "@/components/icon";

export const dynamic = "force-dynamic";

export default async function TheorieOverzicht() {
  const categories = await prisma.category.findMany({
    orderBy: { order: "asc" },
    include: {
      lessons: { orderBy: { order: "asc" } },
      _count: { select: { questions: true } },
    },
  });

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Theorie</h1>
        <p className="mt-2 text-muted-foreground">
          De 11 hoofdstukken van het Belgische theorie-examen rijbewijs B. Elke
          les bevat uitleg, afbeeldingen en korte controlevraagjes.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {categories.map((c) => {
          const lesson = c.lessons[0];
          const href = lesson ? `/theorie/${lesson.slug}` : "/theorie";
          return (
            <Link key={c.id} href={href} className="group">
              <Card className="h-full transition-all group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:shadow-md">
                <CardContent className="flex items-start gap-4 p-5">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: c.color }}
                  >
                    <CategoryIcon name={c.icon} className="h-6 w-6" />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-muted-foreground">
                        Hoofdstuk {c.order}
                      </span>
                    </div>
                    <h2 className="font-semibold">{c.name}</h2>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {c.description}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {lesson && (
                        <Badge variant="secondary">
                          <Clock className="h-3 w-3" /> {lesson.estMinutes} min
                        </Badge>
                      )}
                      <Badge variant="outline">{c._count.questions} vragen</Badge>
                      <span className="ml-auto flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        Lezen <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

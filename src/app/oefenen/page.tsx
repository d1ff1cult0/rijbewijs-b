import { Dumbbell } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { PracticePanel } from "@/components/practice-panel";

export const dynamic = "force-dynamic";
export const metadata = { title: "Oefenen — Rijbewijs B" };

export default async function OefenenPage({
  searchParams,
}: {
  searchParams: Promise<{ categorie?: string }>;
}) {
  const { categorie } = await searchParams;
  const categories = await prisma.category.findMany({
    orderBy: { order: "asc" },
    select: { slug: true, name: true, color: true },
  });

  return (
    <div className="container max-w-3xl py-10">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Dumbbell className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-3xl font-bold">Oefenen</h1>
          <p className="text-muted-foreground">
            Kies een categorie of laat de app je zwakke punten aanpakken.
          </p>
        </div>
      </div>

      <PracticePanel categories={categories} initialCategory={categorie} />
    </div>
  );
}

import { Octagon } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { SignTrainer } from "@/components/sign-trainer";

export const dynamic = "force-dynamic";
export const metadata = { title: "Borden-trainer — Rijbewijs B" };

export default async function BordenPage() {
  const signs = await prisma.trafficSign.findMany({
    orderBy: { order: "asc" },
    select: { id: true, code: true, name: true, group: true, meaning: true, imageUrl: true },
  });

  return (
    <div className="container max-w-3xl py-10">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Octagon className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-3xl font-bold">Borden-trainer</h1>
          <p className="text-muted-foreground">
            Leer alle verkeersborden met flashcards. Klik op een kaart om de
            betekenis te tonen.
          </p>
        </div>
      </div>

      <SignTrainer signs={signs} />
    </div>
  );
}

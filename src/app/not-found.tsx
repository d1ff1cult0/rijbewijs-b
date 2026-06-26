import Link from "next/link";
import { Compass } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <Compass className="h-12 w-12 text-primary" />
      <h1 className="text-3xl font-bold">Pagina niet gevonden</h1>
      <p className="max-w-md text-muted-foreground">
        Deze pagina bestaat niet (meer). Keer terug naar de startpagina om verder
        te studeren of te oefenen.
      </p>
      <Link href="/" className={buttonVariants({})}>
        Naar de startpagina
      </Link>
    </div>
  );
}

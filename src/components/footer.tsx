import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-muted/40">
      <div className="container py-8">
        <div className="flex items-start gap-3 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 text-sm">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
          <p className="text-muted-foreground">
            <strong className="text-foreground">Disclaimer:</strong> dit is
            onafhankelijk oefenmateriaal om je voor te bereiden op het theorie-examen
            rijbewijs B in België. Het is geen officiële examensimulatie. De officiële
            examenstof en het examen zelf bij{" "}
            <a
              href="https://www.goca.be"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              GOCA
            </a>{" "}
            (de erkende examencentra) blijven steeds leidend. Verkeersregels kunnen
            wijzigen — raadpleeg bij twijfel{" "}
            <a
              href="https://www.wegcode.be"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              wegcode.be
            </a>{" "}
            en{" "}
            <a
              href="https://www.vlaanderen.be"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              vlaanderen.be
            </a>
            .
          </p>
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Rijbewijs B Oefenplatform — gebaseerd op de Belgische wegcode.</p>
          <div className="flex gap-4">
            <Link href="/theorie" className="hover:text-foreground">Theorie</Link>
            <Link href="/examen" className="hover:text-foreground">Proefexamen</Link>
            <Link href="/borden" className="hover:text-foreground">Borden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

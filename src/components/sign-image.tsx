"use client";

import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Toont een (Wikimedia-)afbeelding met nette fallback als die niet laadt.
 * Verkeersborden zijn SVG's; we gebruiken een gewone <img> voor maximale
 * compatibiliteit met externe bronnen.
 */
export function SignImage({ src, alt, className }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-1 rounded-md border border-dashed border-border bg-muted p-4 text-center text-xs text-muted-foreground",
          className
        )}
        style={{ minWidth: "5rem", minHeight: "5rem" }}
      >
        <ImageOff className="h-5 w-5" />
        <span>{alt || "Afbeelding"}</span>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={cn("object-contain", className)}
    />
  );
}

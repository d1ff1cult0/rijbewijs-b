import { Fragment } from "react";

/** Render inline **vet** binnen een tekstregel. */
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

/**
 * Eenvoudige tekst-renderer voor lesinhoud.
 * Ondersteunt paragrafen (gescheiden door lege regel), **vet** en
 * lijsten (regels die met "- " beginnen).
 */
export function Prose({ text }: { text: string }) {
  const blocks = text.split(/\n\n+/);
  return (
    <div className="prose-rb">
      {blocks.map((block, bi) => {
        const lines = block.split("\n");
        const isList = lines.every((l) => l.trim().startsWith("- "));
        if (isList) {
          return (
            <ul key={bi}>
              {lines.map((l, li) => (
                <li key={li}>{renderInline(l.trim().replace(/^- /, ""))}</li>
              ))}
            </ul>
          );
        }
        return <p key={bi}>{renderInline(block)}</p>;
      })}
    </div>
  );
}

// Standalone validatie van de seed-data (geen database nodig).
// Run: npx tsx scripts/validate-seed.ts
import { categories } from "../prisma/seed-data/categories";
import { lessons } from "../prisma/seed-data/lessons";
import { examQuestions } from "../prisma/seed-data/questions";
import { signs } from "../prisma/seed-data/signs";
import type { OptionSeed } from "../prisma/seed-data/types";

let errors = 0;
const err = (m: string) => {
  console.error("✗ " + m);
  errors++;
};

const slugs = new Set(categories.map((c) => c.slug));

function checkOptions(label: string, options: OptionSeed[]) {
  if (options.length < 2) err(`${label}: minder dan 2 antwoorden`);
  const correct = options.filter((o) => o.correct).length;
  if (correct !== 1) err(`${label}: heeft ${correct} juiste antwoorden (verwacht 1)`);
  const texts = new Set(options.map((o) => o.text.trim()));
  if (texts.size !== options.length) err(`${label}: dubbele antwoordteksten`);
}

// Categorieën
if (slugs.size !== categories.length) err("Dubbele categorie-slugs");
const weightSum = categories.reduce((s, c) => s + c.examWeight, 0);
console.log(`Categorieën: ${categories.length} (som examWeight = ${weightSum})`);

// Examenvragen
const perCat = new Map<string, number>();
let severeCount = 0;
let imageCount = 0;
examQuestions.forEach((q, i) => {
  const label = `Examenvraag #${i + 1} [${q.category}]`;
  if (!slugs.has(q.category)) err(`${label}: onbekende categorie`);
  if (!q.text?.trim()) err(`${label}: lege vraagtekst`);
  if (!q.explanation?.trim()) err(`${label}: lege uitleg`);
  checkOptions(label, q.options);
  perCat.set(q.category, (perCat.get(q.category) ?? 0) + 1);
  if (q.isSevere) severeCount++;
  if (q.imageUrl) imageCount++;
});

// Mini-quizvragen in lessen
let miniQuiz = 0;
const lessonSlugs = new Set<string>();
lessons.forEach((l) => {
  if (!slugs.has(l.category)) err(`Les ${l.slug}: onbekende categorie`);
  if (lessonSlugs.has(l.slug)) err(`Dubbele les-slug: ${l.slug}`);
  lessonSlugs.add(l.slug);
  if (l.sections.length === 0) err(`Les ${l.slug}: geen secties`);
  l.sections.forEach((s, si) => {
    if (!s.heading?.trim()) err(`Les ${l.slug} sectie ${si}: geen titel`);
    if (!s.body?.trim()) err(`Les ${l.slug} sectie ${si}: geen inhoud`);
    (s.quiz ?? []).forEach((q, qi) => {
      checkOptions(`Les ${l.slug} mini-quiz ${si}.${qi}`, q.options);
      miniQuiz++;
    });
  });
});

// Borden
const signCodes = new Set<string>();
signs.forEach((s) => {
  if (signCodes.has(s.code)) err(`Dubbele bordcode: ${s.code}`);
  signCodes.add(s.code);
  if (!s.imageUrl.startsWith("https://")) err(`Bord ${s.code}: ongeldige imageUrl`);
  if (!s.meaning?.trim()) err(`Bord ${s.code}: geen betekenis`);
});

console.log("\n— Examenvragen per categorie —");
for (const c of categories) {
  console.log(`  ${c.slug.padEnd(20)} ${perCat.get(c.slug) ?? 0}  (examWeight ${c.examWeight})`);
  if (!perCat.get(c.slug)) err(`Categorie ${c.slug} heeft geen examenvragen`);
}

console.log("\n— Totalen —");
console.log(`  Examenvragen:      ${examQuestions.length}`);
console.log(`  Mini-quizvragen:   ${miniQuiz}`);
console.log(`  Totaal vragen:     ${examQuestions.length + miniQuiz}`);
console.log(`  Zware fouten:      ${severeCount}`);
console.log(`  Vragen met beeld:  ${imageCount}`);
console.log(`  Theorielessen:     ${lessons.length}`);
console.log(`  Verkeersborden:    ${signs.length}`);

if (errors > 0) {
  console.error(`\n❌ ${errors} fout(en) gevonden in de seed-data.`);
  process.exit(1);
} else {
  console.log("\n✅ Seed-data is geldig.");
}

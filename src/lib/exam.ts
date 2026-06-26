// Centrale constanten en logica voor het officiële Belgische examenformat.
// Bron: GOCA / vlaanderen.be. Zie README en de disclaimer.

export const EXAM_TOTAL_QUESTIONS = 50;
export const EXAM_START_POINTS = 50;
export const EXAM_PASS_SCORE = 41; // Geslaagd vanaf 41/50
export const EXAM_LIGHT_PENALTY = 1; // -1 punt per lichte fout
export const EXAM_SEVERE_PENALTY = 5; // -5 punten per zware fout
export const EXAM_MAX_SEVERE_BEFORE_FAIL = 2; // 2 zware fouten = direct buizen
// Officieel examen: 15 seconden per vraag wordt voorgelezen; wij geven
// een ruime totaaltijd zodat lezen op het scherm comfortabel kan.
export const EXAM_DURATION_SEC = 50 * 25; // ~21 min

export interface ScoredAnswer {
  isCorrect: boolean;
  isSevere: boolean; // is dit een "zware fout"-vraag?
}

export interface ExamResult {
  score: number;
  correctCount: number;
  lightErrors: number;
  severeErrors: number;
  passed: boolean;
  failedBySevere: boolean;
}

/**
 * Bereken de examenuitslag volgens het Belgische puntensysteem.
 * Start op 50 punten; elke lichte fout -1, elke zware fout -5.
 * Geslaagd vanaf 41 punten, behalve bij 2 of meer zware fouten (direct buizen).
 */
export function scoreExam(answers: ScoredAnswer[]): ExamResult {
  let score = EXAM_START_POINTS;
  let correctCount = 0;
  let lightErrors = 0;
  let severeErrors = 0;

  for (const a of answers) {
    if (a.isCorrect) {
      correctCount++;
      continue;
    }
    if (a.isSevere) {
      severeErrors++;
      score -= EXAM_SEVERE_PENALTY;
    } else {
      lightErrors++;
      score -= EXAM_LIGHT_PENALTY;
    }
  }

  if (score < 0) score = 0;

  const failedBySevere = severeErrors >= EXAM_MAX_SEVERE_BEFORE_FAIL;
  const passed = score >= EXAM_PASS_SCORE && !failedBySevere;

  return { score, correctCount, lightErrors, severeErrors, passed, failedBySevere };
}

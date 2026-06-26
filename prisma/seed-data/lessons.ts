import type { LessonSeed } from "./types";
import { lessons1 } from "./lessons-1";
import { lessons2 } from "./lessons-2";
import { lessons3 } from "./lessons-3";

// Volledige, uitgebreide theoriecursus: 11 hoofdstukken.
export const lessons: LessonSeed[] = [...lessons1, ...lessons2, ...lessons3];

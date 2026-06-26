// Gedeelde types voor de seed-data.

export type DifficultySeed = "EASY" | "MEDIUM" | "HARD";

export type SignGroupSeed =
  | "GEVAAR"
  | "VERBOD"
  | "GEBOD"
  | "VOORRANG"
  | "AANWIJZING"
  | "ONDERBORD";

export interface OptionSeed {
  text: string;
  correct?: boolean;
}

export interface CategorySeed {
  slug: string;
  name: string;
  description: string;
  examWeight: number; // aantal vragen in een proefexamen
  order: number;
  icon: string; // lucide-react icoonnaam
  color: string;
}

export interface QuestionSeed {
  category: string; // category slug
  text: string;
  explanation: string;
  options: OptionSeed[];
  difficulty?: DifficultySeed;
  isSevere?: boolean;
  imageUrl?: string;
  imageAlt?: string;
}

export interface MiniQuizSeed {
  text: string;
  explanation: string;
  options: OptionSeed[];
  isSevere?: boolean;
}

export interface SectionSeed {
  heading: string;
  body: string;
  imageUrl?: string;
  imageAlt?: string;
  quiz?: MiniQuizSeed[];
}

export interface LessonSeed {
  category: string; // category slug
  slug: string;
  title: string;
  intro: string;
  estMinutes: number;
  order: number;
  sections: SectionSeed[];
}

export interface SignSeed {
  code: string;
  name: string;
  group: SignGroupSeed;
  meaning: string;
  imageUrl: string;
}

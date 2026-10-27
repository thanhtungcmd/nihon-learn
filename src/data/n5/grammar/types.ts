export interface N5GrammarSentence {
  vietnamese: string[];
  japanese: string[];
  grammar: string;
}

export interface GrammarLessonItem {
  japanese?: string[];
  vietnamese?: string[];
}

export type UnitGrammarData = Record<string, GrammarLessonItem[]>;

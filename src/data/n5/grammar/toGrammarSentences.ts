import type { N5GrammarSentence, UnitGrammarData } from './types';

export function toGrammarSentences(unit: number, grammarData: UnitGrammarData): N5GrammarSentence[] {
  return Object.values(grammarData).flatMap((items) =>
    items
      .filter(({ japanese = [], vietnamese = [] }) => japanese.length > 0 && japanese.length === vietnamese.length)
      .map(({ japanese = [], vietnamese = [] }) => ({
        japanese,
        vietnamese,
        grammar: `Câu mẫu Bài ${unit}`,
      })),
  );
}

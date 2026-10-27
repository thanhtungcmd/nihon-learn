import type { PracticeVocabularyItem, UnitVocabularyItem } from './types';

export function toPracticeVocabulary(vocabulary: UnitVocabularyItem[]): PracticeVocabularyItem[] {
  return vocabulary
    .filter((item) => item.japanese.length > 0 && item.vietnamese?.length)
    .map((item) => ({ japanese: item.japanese[0]!, meanings: item.vietnamese ?? [] }));
}

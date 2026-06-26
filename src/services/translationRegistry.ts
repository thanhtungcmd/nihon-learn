type TranslationEntry = {
  japanese?: string[];
  vietnamese?: string[];
};

const registeredEntries: TranslationEntry[] = [];

function normalizeText(value: string) {
  return value.replace(/\s+/g, '').trim();
}

export function registerTranslationEntries(entries: TranslationEntry[]) {
  registeredEntries.push(...entries);
}

export function findTranslationForText(text: string) {
  const normalizedText = normalizeText(text);
  if (!normalizedText) return '';

  for (const entry of registeredEntries) {
    const japaneseLines = entry.japanese ?? [];
    const vietnameseLines = entry.vietnamese ?? [];

    const matched = japaneseLines.some((line) => normalizeText(line) === normalizedText);
    if (matched) {
      return vietnameseLines.join(' / ');
    }

    const joinedJapanese = normalizeText(japaneseLines.join(''));
    if (joinedJapanese === normalizedText) {
      return vietnameseLines.join(' / ');
    }
  }

  return '';
}

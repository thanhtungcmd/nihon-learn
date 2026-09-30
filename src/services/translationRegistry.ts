type TranslationEntry = {
  japanese?: string[];
  vietnamese?: string[];
};

const translations = new Map<string, string>();

function normalizeText(value: string) {
  return value.replace(/\s+/g, '').trim();
}

export function registerTranslationEntries(entries: TranslationEntry[]) {
  for (const entry of entries) {
    const vietnamese = (entry.vietnamese ?? []).join(' / ');
    if (!vietnamese) continue;

    const japaneseLines = entry.japanese ?? [];
    for (const line of japaneseLines) {
      const key = normalizeText(line);
      if (key) translations.set(key, vietnamese);
    }

    const combinedKey = normalizeText(japaneseLines.join(''));
    if (combinedKey) translations.set(combinedKey, vietnamese);
  }
}

export function findTranslationForText(text: string) {
  const normalizedText = normalizeText(text);
  if (!normalizedText) return '';

  return translations.get(normalizedText) ?? '';
}

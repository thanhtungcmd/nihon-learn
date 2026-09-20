export type VocabularySearchResult = {
  japanese: string[];
  vietnamese: string[];
  route: string;
  source: string;
  score: number;
};

type VocabularyEntry = Omit<VocabularySearchResult, 'score'>;

// The lessons keep their vocabulary beside the lesson markup. Loading their source
// as text lets the command palette search every lesson, even one not visited yet.
const lessonSources = import.meta.glob('../views/**/*.vue', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

function stringsFromArray(source: string) {
  return [...source.matchAll(/(['"])((?:\\.|(?!\1)[\s\S])*)\1/g)].map((match) =>
    (match[2] ?? '').replace(/\\'/g, "'").replace(/\\"/g, '"'),
  );
}

function lessonDetails(path: string) {
  const unitMatch = path.match(/n5\/Unit(\d+)\.vue$/);
  if (unitMatch) {
    const unit = unitMatch[1]!;
    return { route: `/n5/unit${unit}`, source: `Bài N5 ${unit}` };
  }

  const simpleMatch = path.match(/simple\/([^/]+)\.vue$/);
  if (!simpleMatch) return null;
  const name = simpleMatch[1]!;
  const sources: Record<string, { route: string; source: string }> = {
    Hello: { route: '/hello', source: 'Cách chào hỏi' },
  };
  return sources[name] ?? null;
}

function buildIndex(): VocabularyEntry[] {
  const entries: VocabularyEntry[] = [];
  const itemPattern = /\{\s*japanese:\s*\[([\s\S]*?)\]\s*,\s*vietnamese:\s*\[([\s\S]*?)\]\s*\}/g;

  for (const [path, content] of Object.entries(lessonSources)) {
    const details = lessonDetails(path);
    if (!details) continue;
    for (const match of content.matchAll(itemPattern)) {
      const japanese = stringsFromArray(match[1] ?? '');
      const vietnamese = stringsFromArray(match[2] ?? '');
      if (japanese.length && vietnamese.length) entries.push({ ...details, japanese, vietnamese });
    }
  }
  return entries;
}

const vocabularyIndex = buildIndex();

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

function editDistance(first: string, second: string) {
  let previous = Array.from({ length: second.length + 1 }, (_, index) => index);
  for (let row = 1; row <= first.length; row += 1) {
    const current = [row];
    for (let column = 1; column <= second.length; column += 1) {
      current[column] = Math.min(
        current[column - 1]! + 1,
        previous[column]! + 1,
        previous[column - 1]! + Number(first[row - 1] !== second[column - 1]),
      );
    }
    previous = current;
  }
  return previous[second.length]!;
}

function matchScore(query: string, candidate: string) {
  if (candidate === query) return 0;
  if (candidate.includes(query)) return 0.08 + (candidate.length - query.length) / Math.max(candidate.length, 1) * 0.12;
  return editDistance(query, candidate) / Math.max(query.length, candidate.length, 1);
}

export function searchVocabulary(query: string, limit = 20): VocabularySearchResult[] {
  const term = normalize(query);
  if (!term) return [];

  return vocabularyIndex
    .map((entry) => {
      const searchable = [...entry.japanese, entry.japanese.join(''), ...entry.vietnamese];
      const score = Math.min(...searchable.map((value) => matchScore(term, normalize(value))));
      return { ...entry, score };
    })
    .filter((entry) => entry.score <= (term.length < 3 ? 0.15 : 0.46))
    .sort((first, second) => first.score - second.score || first.japanese.join('').localeCompare(second.japanese.join('')))
    .slice(0, limit);
}

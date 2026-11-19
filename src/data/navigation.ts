export const basicLinks = [
  { to: '/hiragana', label: 'Hiragana' },
  { to: '/yoon', label: 'Âm ghép (Yoon)' },
  { to: '/katakana', label: 'Katakana' },
  { to: '/vowel', label: 'Quy tắc âm' },
  { to: '/hello', label: 'Chào hỏi cơ bản' },
  { to: '/pronunciation', label: 'Đọc câu tiếng Nhật' },
  { to: '/polite-verb-forms', label: 'Chia động từ (ます形)' },
  { to: '/vi-ja', label: 'Tra từ Việt → Nhật' },
];

export const kanjiLinks = [
  { to: '/kanji/n5/unit1', label: 'Bài 1 – Số đếm' },
];

// Add the next unit number here, together with its route and data files.
export const n5Units = [1, 2, 3, 4, 5, 6];

export const unitLinks = (unit: number) => [
  { to: `/n5/unit${unit}`, label: 'Bài học' },
  { to: `/n5/unit${unit}/vocabulary-quiz`, label: 'Ôn từ vựng' },
  { to: `/n5/unit${unit}/grammar-quiz`, label: 'Ôn ngữ pháp' },
];

export interface Breadcrumb {
  label: string;
  to?: string;
}

export function breadcrumbsFor(path: string): Breadcrumb[] {
  const basic = basicLinks.find((link) => link.to === path);
  if (basic) return [{ label: 'Trang chủ', to: '/' }, { label: 'Cơ bản' }, { label: basic.label }];

  const kanji = kanjiLinks.find((link) => link.to === path);
  if (kanji) return [{ label: 'Trang chủ', to: '/' }, { label: 'Kanji N5' }, { label: kanji.label }];

  const unit = Number(path.match(/^\/n5\/unit(\d+)/)?.[1]);
  const link = unitLinks(unit).find((item) => item.to === path);
  if (!link) return [];

  const lesson = { label: `Bài ${unit}`, to: `/n5/unit${unit}` };
  return [
    { label: 'Trang chủ', to: '/' },
    { label: 'JLPT N5' },
    ...(path === lesson.to ? [{ label: lesson.label }] : [lesson, { label: link.label }]),
  ];
}

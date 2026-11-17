export interface KanjiExample {
  word: string;
  reading: string;
  sentence: string;
}

export interface KanjiItem {
  kanji: string;
  meaning: string;
  kun: string[];
  on: string[];
  strokes: number;
  examples: KanjiExample[];
}

// Source: Kanji Master N5, chapter 1 (すうじ). A "-" marks okurigana or a counter suffix.
export const unit1Kanji: KanjiItem[] = [
  {
    kanji: '一', meaning: 'một', kun: ['ひと-つ'], on: ['イチ', 'イッ-'], strokes: 1,
    examples: [
      { word: '一つ', reading: 'ひとつ', sentence: 'サンドイッチを 一つと コーヒーを 二つ おねがいします。' },
      { word: '一まい', reading: 'いちまい', sentence: '80えんの きってを 一まい ください。' },
      { word: '一がつ', reading: 'いちがつ', sentence: '一がつは なんにち ありますか。' },
      { word: '一にち', reading: 'いちにち', sentence: '一にちに ビールを 一ぽん のみます。' },
      { word: '一ぽん', reading: 'いっぽん', sentence: '一にちに ビールを 一ぽん のみます。' },
    ],
  },
  {
    kanji: '二', meaning: 'hai', kun: ['ふた-つ'], on: ['ニ'], strokes: 2,
    examples: [
      { word: '二つ', reading: 'ふたつ', sentence: 'サンドイッチを 一つと コーヒーを 二つ おねがいします。' },
      { word: '二だい', reading: 'にだい', sentence: 'うちに パソコンが 二だい あります。' },
    ],
  },
  {
    kanji: '三', meaning: 'ba', kun: ['みっ-つ'], on: ['サン'], strokes: 3,
    examples: [
      { word: '三つ', reading: 'みっつ', sentence: 'レモンを 三つと りんごを 四つ かいます。' },
      { word: '三まい', reading: 'さんまい', sentence: 'さいふに 一まんえんさつが 三まい あります。' },
    ],
  },
  {
    kanji: '四', meaning: 'bốn', kun: ['よっ-つ', 'よ', 'よん'], on: ['シ'], strokes: 5,
    examples: [
      { word: '四つ', reading: 'よっつ', sentence: 'レモンを 三つと りんごを 四つ かいます。' },
      { word: '四じかん', reading: 'よじかん', sentence: '一にちに 四じかん べんきょうを します。' },
      { word: '四ほん', reading: 'よんほん', sentence: 'えんぴつを 四ほん かいました。' },
      { word: '四がつ', reading: 'しがつ', sentence: '四がつに にゅうがくしきが あります。' },
    ],
  },
  {
    kanji: '五', meaning: 'năm', kun: ['いつ-つ'], on: ['ゴ'], strokes: 4,
    examples: [
      { word: '五つ', reading: 'いつつ', sentence: 'スーパーで トマトを 五つと たまごを 六つ かいました。' },
      { word: '五にん', reading: 'ごにん', sentence: 'A：なんにん かぞくですか。 B：五にん かぞくです。' },
      { word: '五がつ', reading: 'ごがつ', sentence: '五がつは やすみが たくさん あります。' },
    ],
  },
  {
    kanji: '六', meaning: 'sáu', kun: ['むっ-つ'], on: ['ロク', 'ロッ-'], strokes: 4,
    examples: [
      { word: '六つ', reading: 'むっつ', sentence: 'スーパーで トマトを 五つと たまごを 六つ かいました。' },
      { word: '六がつ', reading: 'ろくがつ', sentence: '六がつは あめが おおいです。' },
      { word: '六ぽん', reading: 'ろっぽん', sentence: 'A：そこに ワインが なんぼん ありますか。 B：六ぽん あります。' },
    ],
  },
  {
    kanji: '七', meaning: 'bảy', kun: ['なな-つ'], on: ['シチ'], strokes: 2,
    examples: [
      { word: '七つ', reading: 'ななつ', sentence: 'みかんを 七つ ください。' },
      { word: '七がつ', reading: 'しちがつ', sentence: '七がつに たなばたが あります。' },
      { word: '七五三', reading: 'しちごさん', sentence: '「七五三」は こどもの おいわいです。' },
    ],
  },
  {
    kanji: '八', meaning: 'tám', kun: ['やっ-つ'], on: ['ハチ', 'ハッ-'], strokes: 2,
    examples: [
      { word: '八がつ', reading: 'はちがつ', sentence: 'にほんの 八がつは あついです。' },
      { word: '八つ', reading: 'やっつ', sentence: 'シュークリームを 八つと ジュースを 八ぽん かいましょう。' },
      { word: '八ぽん', reading: 'はっぽん', sentence: 'シュークリームを 八つと ジュースを 八ぽん かいましょう。' },
    ],
  },
  {
    kanji: '九', meaning: 'chín', kun: ['ここの-つ'], on: ['キュウ', 'ク'], strokes: 2,
    examples: [
      { word: '九つ', reading: 'ここのつ', sentence: 'きょうは パーティーです。ケーキを 九つ かいました。' },
      { word: '九じ', reading: 'くじ', sentence: 'きのう 九じから 十じまで テレビを みました。' },
      { word: '九にん', reading: 'きゅうにん', sentence: 'やきゅうは 九にんで 一つの チームです。' },
      { word: '九がつ', reading: 'くがつ', sentence: 'A：たんじょうびは いつですか。 B：九がつ 十かです。' },
    ],
  },
  {
    kanji: '十', meaning: 'mười', kun: ['とお'], on: ['ジュウ', 'ジッ'], strokes: 2,
    examples: [
      { word: '十じ', reading: 'じゅうじ', sentence: 'きのう 九じから 十じまで テレビを みました。' },
      { word: '十か', reading: 'とおか', sentence: 'A：たんじょうびは いつですか。 B：九がつ 十かです。' },
      { word: '二十ぷん', reading: 'にじっぷん', sentence: 'うちから がっこうまで でんしゃで 二十ぷんです。' },
    ],
  },
  {
    kanji: '百', meaning: 'trăm', kun: [], on: ['ヒャク', 'ヒャッ-', '-ビャク', '-ピャク'], strokes: 6,
    examples: [
      { word: '百にん', reading: 'ひゃくにん', sentence: 'アークアカデミーに あたらしい がくせいが 百にん きました。' },
      { word: '三百六十五にち', reading: 'さんびゃくろくじゅうごにち', sentence: '一ねんは 三百六十五にちです。' },
      { word: '八百えん', reading: 'はっぴゃくえん', sentence: 'このかばんは 九千八百えんでした。' },
    ],
  },
  {
    kanji: '千', meaning: 'nghìn', kun: [], on: ['セン', '-ゼン'], strokes: 3,
    examples: [
      { word: '千えんさつ', reading: 'せんえんさつ', sentence: 'いま さいふに 千えんさつが ありません。' },
      { word: '九千八百えん', reading: 'きゅうせんはっぴゃくえん', sentence: 'このかばんは 九千八百えんでした。' },
      { word: '三千えん', reading: 'さんぜんえん', sentence: '三千えんの くつを かいました。' },
    ],
  },
  {
    kanji: '万', meaning: 'vạn (mười nghìn)', kun: [], on: ['マン'], strokes: 3,
    examples: [
      { word: '一万九千にん', reading: 'いちまんきゅうせんにん', sentence: '○○だいがくは がくせいが 一万九千にん います。' },
      { word: '七百万にん', reading: 'ななひゃくまんにん', sentence: 'わたしの まちは 七百万にんの ひとが すんでいます。' },
      { word: '一万円さつ', reading: 'いちまんえんさつ', sentence: 'いま 一万円さつを もっていますか。' },
    ],
  },
  {
    kanji: '円', meaning: 'yên', kun: [], on: ['エン'], strokes: 4,
    examples: [
      { word: '三百万円', reading: 'さんびゃくまんえん', sentence: 'A：このくるまは いくらですか。 B：三百万円です。' },
      { word: '円', reading: 'えん', sentence: '五百ドルを 円に かえてください。' },
    ],
  },
];

export const unit1DayReadings = [
  'ついたち', 'ふつか', 'みっか', 'よっか', 'いつか', 'むいか', 'なのか', 'ようか', 'ここのか', 'とおか',
  'じゅういちにち', 'じゅうににち', 'じゅうさんにち', 'じゅうよっか', 'じゅうごにち', 'じゅうろくにち', 'じゅうしちにち', 'じゅうはちにち', 'じゅうくにち', 'はつか',
  'にじゅういちにち', 'にじゅうににち', 'にじゅうさんにち', 'にじゅうよっか', 'にじゅうごにち', 'にじゅうろくにち', 'にじゅうしちにち', 'にじゅうはちにち', 'にじゅうくにち',
  'さんじゅうにち', 'さんじゅういちにち',
];

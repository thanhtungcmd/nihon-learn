export interface KanjiExample {
  word: string;
  reading: string;
  sentence: string;
  type: 'on' | 'kun';
  note: string;
}

export interface KanjiItem {
  kanji: string;
  meaning: string;
  kun: string[];
  on: string[];
  strokes: number;
  guide: string;
  examples: KanjiExample[];
}

// Source: Kanji Master N5, chapter 1 (すうじ). A "-" marks okurigana or a counter suffix.
export const unit1Kanji: KanjiItem[] = [
  {
    kanji: '一', meaning: 'một', kun: ['ひと-つ'], on: ['イチ', 'イッ-'], strokes: 1,
    guide: 'Đếm "1 cái" (không kèm đơn vị đếm) → đọc ひとつ. Đi kèm đơn vị đếm, tháng, ngày → đọc いち. Riêng trước ほん/かい… thì いち bị rút ngắn thành いっ.',
    examples: [
      { word: '一つ', reading: 'ひとつ', type: 'kun', note: 'Đây là cách đếm đồ vật kiểu thuần Nhật: 1 cái, 2 cái… đến 10 cái, không có đơn vị đếm đi kèm. Với cách đếm này 一 đọc là ひと, thêm つ phía sau → ひとつ (1 cái).', sentence: 'サンドイッチを 一つと コーヒーを 二つ おねがいします。' },
      { word: '一まい', reading: 'いちまい', type: 'on', note: 'まい (枚) là đơn vị đếm vật mỏng, phẳng như tem, giấy. Khi số đi kèm một đơn vị đếm kiểu Hán như まい, ta đọc số theo On: 一 = いち → いちまい (1 tờ).', sentence: '80えんの きってを 一まい ください。' },
      { word: '一がつ', reading: 'いちがつ', type: 'on', note: 'がつ (月) nghĩa là tháng. Tên tháng luôn là "số đọc On + がつ": いち + がつ = いちがつ (tháng 1).', sentence: '一がつは なんにち ありますか。' },
      { word: '一にち', reading: 'いちにち', type: 'on', note: 'にち (日) nghĩa là ngày. "Một ngày" (khoảng thời gian 24 giờ) = いち + にち. Cẩn thận: ngày mùng 1 trên lịch lại đọc khác là ついたち.', sentence: '一にちに ビールを 一ぽん のみます。' },
      { word: '一ぽん', reading: 'いっぽん', type: 'on', note: 'ほん (本) là đơn vị đếm vật dài như chai, bút. いち + ほん nếu đọc nguyên thì khó nói liền, nên người Nhật đổi hai chỗ: (1) いち rút ngắn thành いっ (chữ っ nhỏ = dừng một nhịp); (2) ほ đổi thành ぽ. Kết quả: いっぽん (1 chai/1 cây). Quy tắc này lặp lại với 六, 八, 十.', sentence: '一にちに ビールを 一ぽん のみます。' },
    ],
  },
  {
    kanji: '二', meaning: 'hai', kun: ['ふた-つ'], on: ['ニ'], strokes: 2,
    guide: 'Đếm "2 cái" (không kèm đơn vị đếm) → đọc ふたつ. Đi kèm đơn vị đếm, tháng, ngày → đọc に.',
    examples: [
      { word: '二つ', reading: 'ふたつ', type: 'kun', note: 'Cách đếm đồ vật thuần Nhật, không có đơn vị đếm: 二 đọc là ふた, thêm つ → ふたつ (2 cái).', sentence: 'サンドイッチを 一つと コーヒーを 二つ おねがいします。' },
      { word: '二だい', reading: 'にだい', type: 'on', note: 'だい (台) là đơn vị đếm máy móc, xe cộ. Số đi kèm đơn vị đếm kiểu Hán thì đọc On: 二 = に → にだい (2 cái máy tính). Âm không bị biến đổi gì cả.', sentence: 'うちに パソコンが 二だい あります。' },
    ],
  },
  {
    kanji: '三', meaning: 'ba', kun: ['みっ-つ'], on: ['サン'], strokes: 3,
    guide: 'Đếm "3 cái" (không kèm đơn vị đếm) → đọc みっつ. Đi kèm đơn vị đếm, tháng, ngày → đọc さん.',
    examples: [
      { word: '三つ', reading: 'みっつ', type: 'kun', note: 'Cách đếm đồ vật thuần Nhật, không có đơn vị đếm: 三 đọc là みっ (chữ っ nhỏ = dừng một nhịp) rồi thêm つ → みっつ (3 cái). Không đọc là さんつ.', sentence: 'レモンを 三つと りんごを 四つ かいます。' },
      { word: '三まい', reading: 'さんまい', type: 'on', note: 'まい (枚) là đơn vị đếm vật mỏng, phẳng như tem, giấy. Số đi kèm đơn vị đếm kiểu Hán thì đọc On: 三 = さん → さんまい (3 tờ).', sentence: 'さいふに 一まんえんさつが 三まい あります。' },
    ],
  },
  {
    kanji: '四', meaning: 'bốn', kun: ['よっ-つ', 'よ', 'よん'], on: ['シ'], strokes: 5,
    guide: 'Số 4 có nhiều cách đọc nên phải học theo từng từ: đếm đồ vật → よっつ; giờ → よじ; đếm bằng đơn vị đếm → よん (よんほん); tháng → しがつ. Người Nhật thường tránh đọc し vì trùng âm với 死 (chết).',
    examples: [
      { word: '四つ', reading: 'よっつ', type: 'kun', note: 'Cách đếm đồ vật thuần Nhật, không có đơn vị đếm: 四 đọc là よっ (っ nhỏ = dừng một nhịp) rồi thêm つ → よっつ (4 cái).', sentence: 'レモンを 三つと りんごを 四つ かいます。' },
      { word: '四じかん', reading: 'よじかん', type: 'kun', note: 'じかん (時間) là "khoảng thời gian tính bằng giờ". Với giờ, số 4 đọc là よ, không đọc し: よ + じかん = よじかん (4 tiếng). 4 giờ trên đồng hồ cũng là よじ.', sentence: '一にちに 四じかん べんきょうを します。' },
      { word: '四ほん', reading: 'よんほん', type: 'kun', note: 'ほん (本) là đơn vị đếm vật dài như bút, chai. Đứng trước đơn vị đếm, số 4 thường đọc là よん (không đọc し để tránh nghe như "chết"): よん + ほん = よんほん (4 cây). Khác với 一, 六, 八, ở đây ほ giữ nguyên, không đổi thành ぽ.', sentence: 'えんぴつを 四ほん かいました。' },
      { word: '四がつ', reading: 'しがつ', type: 'on', note: 'Tên tháng là trường hợp phải học thuộc: tháng 4 đọc theo On し + がつ = しがつ. Không đọc よんがつ hay よがつ.', sentence: '四がつに にゅうがくしきが あります。' },
    ],
  },
  {
    kanji: '五', meaning: 'năm', kun: ['いつ-つ'], on: ['ゴ'], strokes: 4,
    guide: 'Đếm "5 cái" (không kèm đơn vị đếm) → đọc いつつ. Đi kèm đơn vị đếm, tháng → đọc ご. Số 5 không bị biến âm.',
    examples: [
      { word: '五つ', reading: 'いつつ', type: 'kun', note: 'Cách đếm đồ vật thuần Nhật, không có đơn vị đếm: 五 đọc là いつ, thêm つ → いつつ (5 cái).', sentence: 'スーパーで トマトを 五つと たまごを 六つ かいました。' },
      { word: '五にん', reading: 'ごにん', type: 'on', note: 'にん (人) là đơn vị đếm người. Số đi kèm đơn vị đếm kiểu Hán thì đọc On: 五 = ご → ごにん (5 người).', sentence: 'A：なんにん かぞくですか。 B：五にん かぞくです。' },
      { word: '五がつ', reading: 'ごがつ', type: 'on', note: 'Tên tháng luôn là "số đọc On + がつ": ご + がつ = ごがつ (tháng 5).', sentence: '五がつは やすみが たくさん あります。' },
    ],
  },
  {
    kanji: '六', meaning: 'sáu', kun: ['むっ-つ'], on: ['ロク', 'ロッ-'], strokes: 4,
    guide: 'Đếm "6 cái" (không kèm đơn vị đếm) → đọc むっつ. Đi kèm đơn vị đếm, tháng → đọc ろく. Trước ほん/かい… thì ろく rút ngắn thành ろっ (ろっぽん, ろっかい).',
    examples: [
      { word: '六つ', reading: 'むっつ', type: 'kun', note: 'Cách đếm đồ vật thuần Nhật, không có đơn vị đếm: 六 đọc là むっ (っ nhỏ = dừng một nhịp) rồi thêm つ → むっつ (6 cái).', sentence: 'スーパーで トマトを 五つと たまごを 六つ かいました。' },
      { word: '六がつ', reading: 'ろくがつ', type: 'on', note: 'Tên tháng luôn là "số đọc On + がつ": ろく + がつ = ろくがつ (tháng 6). がつ không làm ろく biến đổi.', sentence: '六がつは あめが おおいです。' },
      { word: '六ぽん', reading: 'ろっぽん', type: 'on', note: 'ほん (本) là đơn vị đếm vật dài như chai, bút. ろく + ほん nếu đọc nguyên thì khó nói liền, nên đổi hai chỗ: (1) ろく rút ngắn thành ろっ (っ nhỏ = dừng một nhịp); (2) ほ đổi thành ぽ. Kết quả: ろっぽん (6 chai).', sentence: 'A：そこに ワインが なんぼん ありますか。 B：六ぽん あります。' },
    ],
  },
  {
    kanji: '七', meaning: 'bảy', kun: ['なな-つ'], on: ['シチ'], strokes: 2,
    guide: 'Đếm "7 cái" (không kèm đơn vị đếm) → đọc ななつ. Tháng và từ ghép Hán tự → đọc しち. (Số 7 còn có cách đọc なな khi đếm số bình thường, sách N5 chương này chỉ dạy しち và ななつ.)',
    examples: [
      { word: '七つ', reading: 'ななつ', type: 'kun', note: 'Cách đếm đồ vật thuần Nhật, không có đơn vị đếm: 七 đọc là なな, thêm つ → ななつ (7 cái).', sentence: 'みかんを 七つ ください。' },
      { word: '七がつ', reading: 'しちがつ', type: 'on', note: 'Tên tháng luôn là "số đọc On + がつ": しち + がつ = しちがつ (tháng 7). Không đọc なながつ.', sentence: '七がつに たなばたが あります。' },
      { word: '七五三', reading: 'しちごさん', type: 'on', note: 'Đây là tên ngày lễ cho trẻ 7, 5, 3 tuổi. Khi nhiều chữ Hán đứng liền nhau tạo thành một từ ghép thì thường đọc On cả: 七 = しち, 五 = ご, 三 = さん → しちごさん.', sentence: '「七五三」は こどもの おいわいです。' },
    ],
  },
  {
    kanji: '八', meaning: 'tám', kun: ['やっ-つ'], on: ['ハチ', 'ハッ-'], strokes: 2,
    guide: 'Đếm "8 cái" (không kèm đơn vị đếm) → đọc やっつ. Đi kèm đơn vị đếm, tháng → đọc はち. Trước ほん/かい… thì はち rút ngắn thành はっ (はっぽん, はっかい).',
    examples: [
      { word: '八がつ', reading: 'はちがつ', type: 'on', note: 'Tên tháng luôn là "số đọc On + がつ": はち + がつ = はちがつ (tháng 8). がつ không làm はち biến đổi.', sentence: 'にほんの 八がつは あついです。' },
      { word: '八つ', reading: 'やっつ', type: 'kun', note: 'Cách đếm đồ vật thuần Nhật, không có đơn vị đếm: 八 đọc là やっ (っ nhỏ = dừng một nhịp) rồi thêm つ → やっつ (8 cái).', sentence: 'シュークリームを 八つと ジュースを 八ぽん かいましょう。' },
      { word: '八ぽん', reading: 'はっぽん', type: 'on', note: 'ほん (本) là đơn vị đếm vật dài như chai, bút. はち + ほん nếu đọc nguyên thì khó nói liền, nên đổi hai chỗ: (1) はち rút ngắn thành はっ (っ nhỏ = dừng một nhịp); (2) ほ đổi thành ぽ. Kết quả: はっぽん (8 chai).', sentence: 'シュークリームを 八つと ジュースを 八ぽん かいましょう。' },
    ],
  },
  {
    kanji: '九', meaning: 'chín', kun: ['ここの-つ'], on: ['キュウ', 'ク'], strokes: 2,
    guide: 'Đếm "9 cái" (không kèm đơn vị đếm) → đọc ここのつ. Giờ và tháng → đọc く (くじ, くがつ). Đếm người, đếm số thông thường → đọc きゅう (きゅうにん). Phải học thuộc theo từng từ.',
    examples: [
      { word: '九つ', reading: 'ここのつ', type: 'kun', note: 'Cách đếm đồ vật thuần Nhật, không có đơn vị đếm: 九 đọc là ここの, thêm つ → ここのつ (9 cái).', sentence: 'きょうは パーティーです。ケーキを 九つ かいました。' },
      { word: '九じ', reading: 'くじ', type: 'on', note: 'じ (時) là "giờ" trên đồng hồ. 9 giờ là cách đọc phải học thuộc: く + じ = くじ. Không đọc きゅうじ.', sentence: 'きのう 九じから 十じまで テレビを みました。' },
      { word: '九にん', reading: 'きゅうにん', type: 'on', note: 'にん (人) là đơn vị đếm người. 9 người đọc On きゅう + にん = きゅうにん. Không đọc くにん.', sentence: 'やきゅうは 九にんで 一つの チームです。' },
      { word: '九がつ', reading: 'くがつ', type: 'on', note: 'Tên tháng là trường hợp phải học thuộc: tháng 9 đọc く + がつ = くがつ. Không đọc きゅうがつ.', sentence: 'A：たんじょうびは いつですか。 B：九がつ 十かです。' },
    ],
  },
  {
    kanji: '十', meaning: 'mười', kun: ['とお'], on: ['ジュウ', 'ジッ'], strokes: 2,
    guide: 'Đếm "10 cái" hoặc ngày mùng 10 → đọc とお. Đi kèm đơn vị đếm, giờ → đọc じゅう. Trước ぷん/かい… thì じゅう rút ngắn thành じっ (hoặc じゅっ).',
    examples: [
      { word: '十じ', reading: 'じゅうじ', type: 'on', note: 'じ (時) là "giờ" trên đồng hồ. Số đi kèm giờ thì đọc On: 十 = じゅう → じゅうじ (10 giờ).', sentence: 'きのう 九じから 十じまで テレビを みました。' },
      { word: '十か', reading: 'とおか', type: 'kun', note: 'Ngày 1 đến 10 trong tháng có cách đọc riêng, phải học thuộc (ふつか, みっか, よっか…). Ngày mùng 10 là とお (cách đọc Kun của 十) + か (日) = とおか.', sentence: 'A：たんじょうびは いつですか。 B：九がつ 十かです。' },
      { word: '二十ぷん', reading: 'にじっぷん', type: 'on', note: 'Tách từng phần: 二十 = 20 = に (2) + じゅう (10); ぷん (分) là "phút". Khi じゅう đứng trước ふん/ぷん thì đọc liền khó nên đổi hai chỗ: (1) じゅう rút ngắn thành じっ (っ nhỏ = dừng một nhịp); (2) ふ đổi thành ぷ. Kết quả: に + じっ + ぷん = にじっぷん (20 phút). Cũng có thể đọc là にじゅっぷん.', sentence: 'うちから がっこうまで でんしゃで 二十ぷんです。' },
    ],
  },
  {
    kanji: '百', meaning: 'trăm', kun: [], on: ['ヒャク', 'ヒャッ-', '-ビャク', '-ピャク'], strokes: 6,
    guide: 'Chữ này chỉ có On. Thường đọc ひゃく. Sau số 3 đổi thành びゃく (三百 = さんびゃく). Sau số 6 và 8 đổi thành ぴゃく kèm ngắt âm (六百 = ろっぴゃく, 八百 = はっぴゃく).',
    examples: [
      { word: '百にん', reading: 'ひゃくにん', type: 'on', note: '百 = ひゃく (100), にん (人) = người. Ghép lại: ひゃく + にん = ひゃくにん (100 người). Không có biến âm nào.', sentence: 'アークアカデミーに あたらしい がくせいが 百にん きました。' },
      { word: '三百六十五にち', reading: 'さんびゃくろくじゅうごにち', type: 'on', note: 'Tách từng phần: 三百 = 300 = さん + びゃく (ひゃく đổi thành びゃく vì đứng sau さん); 六十 = 60 = ろく + じゅう; 五 = ご; にち (日) = ngày. Ghép lại: さんびゃく + ろくじゅう + ご + にち = 365 ngày.', sentence: '一ねんは 三百六十五にちです。' },
      { word: '八百えん', reading: 'はっぴゃくえん', type: 'on', note: 'Tách từng phần: 八百 = 800. Hai chỗ đổi: (1) はち rút ngắn thành はっ (っ nhỏ = dừng một nhịp); (2) ひゃく đổi thành ぴゃく. Ghép lại: はっぴゃく + えん = 800 yên.', sentence: 'このかばんは 九千八百えんでした。' },
    ],
  },
  {
    kanji: '千', meaning: 'nghìn', kun: [], on: ['セン', '-ゼン'], strokes: 3,
    guide: 'Chữ này chỉ có On. Thường đọc せん. Sau số 3 đổi thành ぜん (三千 = さんぜん).',
    examples: [
      { word: '千えんさつ', reading: 'せんえんさつ', type: 'on', note: 'Tách từng phần: 千 = せん (1000), えん = yên, さつ (札) = tờ tiền giấy. Ghép lại: せんえんさつ (tờ 1000 yên). Không có biến âm.', sentence: 'いま さいふに 千えんさつが ありません。' },
      { word: '九千八百えん', reading: 'きゅうせんはっぴゃくえん', type: 'on', note: 'Đọc từ số lớn đến số nhỏ: 九千 = きゅう + せん (9000); 八百 = はっぴゃく (800, xem chữ 百); えん = yên. Ghép lại: 9800 yên.', sentence: 'このかばんは 九千八百えんでした。' },
      { word: '三千えん', reading: 'さんぜんえん', type: 'on', note: 'Tách từng phần: 三 = さん; 千 = せん nhưng đứng sau さん nên đổi thành ぜん (せ → ぜ). Ghép lại: さん + ぜん + えん = 3000 yên.', sentence: '三千えんの くつを かいました。' },
    ],
  },
  {
    kanji: '万', meaning: 'vạn (mười nghìn)', kun: [], on: ['マン'], strokes: 3,
    guide: 'Chữ này chỉ có On まん, không biến âm. 万 = 10.000. Khác với 百 và 千 (có thể đọc một mình), 万 luôn cần có số đứng trước: 一万 = いちまん.',
    examples: [
      { word: '一万九千にん', reading: 'いちまんきゅうせんにん', type: 'on', note: 'Đọc từ số lớn đến số nhỏ: 一万 = いちまん (10.000); 九千 = きゅうせん (9.000); にん (人) = người. Ghép lại: 19.000 người. Chú ý 一万 phải đọc đủ いち, không bỏ.', sentence: '○○だいがくは がくせいが 一万九千にん います。' },
      { word: '七百万にん', reading: 'ななひゃくまんにん', type: 'on', note: 'Tách từng phần: 七百 = ななひゃく (700); 万 = まん (10.000); 700 × 10.000 = 7.000.000. Ghép lại: ななひゃくまん + にん = 7 triệu người.', sentence: 'わたしの まちは 七百万にんの ひとが すんでいます。' },
      { word: '一万円さつ', reading: 'いちまんえんさつ', type: 'on', note: 'Tách từng phần: 一万 = いちまん (10.000); 円 = えん (yên); さつ (札) = tờ tiền giấy. Ghép lại: いちまんえんさつ (tờ 10.000 yên).', sentence: 'いま 一万円さつを もっていますか。' },
    ],
  },
  {
    kanji: '円', meaning: 'yên', kun: [], on: ['エン'], strokes: 4,
    guide: 'Chữ này chỉ có On えん, không biến âm. Luôn đứng sau số tiền: 百円 = ひゃくえん, 千円 = せんえん, 一万円 = いちまんえん.',
    examples: [
      { word: '三百万円', reading: 'さんびゃくまんえん', type: 'on', note: 'Tách từng phần: 三百 = さんびゃく (300); 万 = まん (10.000); 円 = えん. 300 × 10.000 = 3.000.000. Ghép lại: さんびゃくまんえん = 3 triệu yên.', sentence: 'A：このくるまは いくらですか。 B：三百万円です。' },
      { word: '円', reading: 'えん', type: 'on', note: 'Đứng một mình, 円 vẫn đọc On là えん. Đây là tên đơn vị tiền tệ của Nhật.', sentence: '五百ドルを 円に かえてください。' },
    ],
  },
];

export const unit1DayReadings = [
  'ついたち', 'ふつか', 'みっか', 'よっか', 'いつか', 'むいか', 'なのか', 'ようか', 'ここのか', 'とおか',
  'じゅういちにち', 'じゅうににち', 'じゅうさんにち', 'じゅうよっか', 'じゅうごにち', 'じゅうろくにち', 'じゅうしちにち', 'じゅうはちにち', 'じゅうくにち', 'はつか',
  'にじゅういちにち', 'にじゅうににち', 'にじゅうさんにち', 'にじゅうよっか', 'にじゅうごにち', 'にじゅうろくにち', 'にじゅうしちにち', 'にじゅうはちにち', 'にじゅうくにち',
  'さんじゅうにち', 'さんじゅういちにち',
];

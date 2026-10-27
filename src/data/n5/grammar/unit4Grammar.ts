import type { UnitGrammarData } from './types';

export const unit4Grammar = {
  timeList: [
    { japanese: ['７ じ はん です。'], vietnamese: ['7h30'] },
    { japanese: ['１２ じ １５ ぷん です。'], vietnamese: ['12h15p'] },
    { japanese: ['２ じ ４５ ぷん です。'], vietnamese: ['2h45p'] },
    { japanese: ['１０ じ ２０ ぷん です。'], vietnamese: ['10h20p'] },
  ],
  whereTimeQuestionList: [
    { japanese: [
      'ペキン は いま なんじ です か。',
      'ごご ６ じ です。'
    ], vietnamese: ['Bắc Kinh bây giờ mấy giờ?', '6 giờ chiều.'] },
    { japanese: [
      'バンコク は いま なんじ です か。',
      'ごご ４ じ です。'
    ], vietnamese: ['Bangkok bây giờ mấy giờ?', '4 giờ chiều.'] },
    { japanese: [
      'ロンドン は いま なんじ です か。',
      'ごぜん ９ じ です。'
    ], vietnamese: ['Luân Đôn bây giờ mấy giờ?', '9 giờ sáng.'] },
    { japanese: [
      'ロサンゼルス は いま なんじ です か。',
      'ごぜん １ じ です。'
    ], vietnamese: ['Los Angeles bây giờ mấy giờ?', '1 giờ sáng.'] },
  ],
  dateQuestionList: [
    { japanese: [
      'あした は なんようび です か。',
      'すいようび です。'
    ], vietnamese: ['Ngày mai là thứ mấy?', 'Thứ tư.'] },
    { japanese: [
      'かいぎ は なんようび です か。',
      'きんようび です。'
    ], vietnamese: ['Cuộc họp vào thứ mấy?', 'Thứ sáu.'] },
    { japanese: [
      'しけん は なんようび です か。',
      'もくようび です。'
    ], vietnamese: ['Kỳ thi vào thứ mấy?', 'Thứ năm.'] },
    { japanese: [
      'やすみ は なんようび です か。',
      'どようび です。'
    ], vietnamese: ['Ngày nghỉ là thứ mấy?', 'Thứ bảy.'] },
  ],
  fromtoQuestionList: [
    { japanese: [
      'ゆうびんきょく は なんじ から なんじ まで です か。',
      '９ じ から ３ じ まで です。'
    ], vietnamese: ['Bưu điện mở từ mấy giờ đến mấy giờ?', 'Từ 9 giờ đến 3 giờ.'] },
    { japanese: [
      'デパート は なんじ から なんじ まで です か。',
      '１０ じ から ８ じ はん まで です。'
    ], vietnamese: ['Cửa hàng bách hóa mở từ mấy giờ đến mấy giờ?', 'Từ 10 giờ đến 8 giờ 30.'] },
    { japanese: [
      'としょかん は なんじ から なんじ まで です か。',
      '９ じ から ６ じ はん まで です。'
    ], vietnamese: ['Thư viện mở từ mấy giờ đến mấy giờ?', 'Từ 9 giờ đến 6 giờ 30.'] },
    { japanese: [
      'かいしゃ は なんじ から なんじ まで です か。',
      '９ じ １５ ぷん から ５ じ ４５ ぷん まで です。'
    ], vietnamese: ['Công ty làm việc từ mấy giờ đến mấy giờ?', 'Từ 9 giờ 15 đến 5 giờ 45.'] },
  ],
  actionQuestionTimeList: [
    { japanese: [
      'まいばん なんじ に ねます か。',
      '１１ じ に ねます。'
    ], vietnamese: ['Mỗi tối ngủ lúc mấy giờ?', '11 giờ.'] },
    { japanese: [
      'あした なんじ に おきます か。',
      '６ じ はん に おきます。'
    ], vietnamese: ['Ngày mai thức dậy lúc mấy giờ?', '6 giờ 30.'] },
    { japanese: [
      'こんばん なんじ に ねます か。',
      '１２ じ に ねます。'
    ], vietnamese: ['Tối nay ngủ lúc mấy giờ?', '12 giờ.'] },
    { japanese: [
      'にちようび なんじ に おきます か。',
      '１０ じ に おきます。'
    ], vietnamese: ['Ngày chủ nhật thức dậy lúc mấy giờ?', '10 giờ.'] },
  ],
  fromtoActionQuestionList: [
    { japanese: [
      'まいにち なんじ から なんじ まで はたらきます か。',
      '９ じ はん から ５ じ はん まで はたらきます。'
    ], vietnamese: ['Mỗi ngày làm việc từ mấy giờ đến mấy giờ?', 'Từ 9 giờ 30 đến 5 giờ 30.'] },
    { japanese: [
      'ひる なんじ から なんじ まで やすみます か。',
      '１２ じ から １ じ まで やすみます。'
    ], vietnamese: ['Buổi trưa nghỉ từ mấy giờ đến mấy giờ?', 'Từ 12 giờ đến 1 giờ.'] },
    { japanese: [
      'どようび なんじ から なんじ まで はたらきます か。',
      '９ じ から ２ じ まで はたらきます。'
    ], vietnamese: ['Ngày thứ bảy làm việc từ mấy giờ đến mấy giờ?', 'Từ 9 giờ đến 2 giờ.'] },
    { japanese: [
      'まいあさ なんじ から なんじ まで べんきょうします か。',
      '７ じ から ８ じ まで べんきょうします。'
    ], vietnamese: ['Mỗi sáng học từ mấy giờ đến mấy giờ?', 'Từ 7 giờ đến 8 giờ.'] },
  ],
  stateActionList: [
    { japanese: [
      'まいにち べんきょうします。',
    ], vietnamese: ['Mỗi ngày học.'] },
    { japanese: [
      'きのう の ばん はたらきました。',
    ], vietnamese: ['Tối qua làm việc.'] },
    { japanese: [
      'あさって べんきょうします。',
    ], vietnamese: ['Ngày kia học.'] },
    { japanese: [
      'おととい はたらきました。',
    ], vietnamese: ['Hôm kia làm việc.'] },
  ],
  actionYesNoQuestionList: [
    { japanese: [
      'あさって はたらきます か。',
      'いいえ、 はたらきません。'
    ], vietnamese: ['Ngày kia có làm việc không?', 'Không, không làm việc.'] },
    { japanese: [
      'まいばん べんきょうします か。',
      'はい、 べんきょうします。'
    ], vietnamese: ['Mỗi tối có học không?', 'Có, học.'] },
    { japanese: [
      'きのう の ばん べんきょうしました か。',
      'はい、 べんきょうしました。'
    ], vietnamese: ['Tối qua có học không?', 'Có, đã học.'] },
    { japanese: [
      'きのう はたらきました か。',
      'いいえ、 はたらきませんでした。'
    ], vietnamese: ['Hôm qua có làm việc không?', 'Không, không làm việc.'] },
  ],
} satisfies UnitGrammarData;

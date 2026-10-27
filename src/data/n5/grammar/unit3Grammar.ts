import type { UnitGrammarData } from './types';

export const unit3Grammar = {
  presentList: [
    { japanese: ['ここ は うけつけ です。'], vietnamese: ['Đây là quầy lễ tân.'] },
    { japanese: ['ここ は じむしょ です。'], vietnamese: ['Đây là văn phòng.'] },
    { japanese: ['ここ は かいぎしつ です。'], vietnamese: ['Đây là văn phòng.'] },
    { japanese: ['ここ は トイレ です。'], vietnamese: ['Đây là toilet.'] },
  ],
  questionList: [
    {
      japanese: [
        'かいぎしつ は どこ です か。',
        'ここ です。',
      ], vietnamese: [
        'Phòng họp ở đâu?',
        'Ở đây.',
      ]
    },
    {
      japanese: [
        'じどうはんばいき は どこ です か。',
        'そこ です。',
      ], vietnamese: [
        'Máy bán hàng tự động ở đâu?',
        'Ở đây.',
      ]
    },
    {
      japanese: [
        'やまだ さん は どこ です か。',
        'あそこ です。',
      ], vietnamese: [
        'Yamada ở đâu?',
        'Ở kia.',
      ]
    },
    {
      japanese: [
        'トイレ は どこ です か。',
        '1 かい です。',
      ], vietnamese: [
        'Nhà vệ sinh ở đâu?',
        'Ở tầng 1.',
      ]
    },
    {
      japanese: [
        'しょくどう は どこ です か。',
        'ちか です。',
      ], vietnamese: [
        'Yamada ở đâu?',
        'Ở đây.',
      ]
    },
    {
      japanese: [
        'ミラー さん の おくに は どちら です か。',
        'アメリカ です。',
      ], vietnamese: [
        'Miller là người nước nào?',
        'Mỹ.',
      ]
    },
    {
      japanese: [
        'ミラー さん の だいがく は どちら です か。',
        'さくら だいがく です。',
      ], vietnamese: [
        'Miller là người nước nào?',
        'Mỹ.',
      ]
    },
  ],
  questionTwoList: [
    {
      japanese: [
        'あれ は どこ の かばん です か。',
        'かんこく の かばん です。',
      ], vietnamese: [
        'Kia là cặp của nước nào?',
        'Cặp của Hàn Quốc..',
      ]
    },
  ],
  questionThreeList: [
    {
      japanese: [
        'この かばん は いくら です か。',
        '7300 えん です。',
      ], vietnamese: [
        'Cái cặp này giá bao nhiêu?',
        '7300 yên',
      ]
    },
  ],
} satisfies UnitGrammarData;

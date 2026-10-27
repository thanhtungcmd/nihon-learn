import type { UnitGrammarData } from './types';

export const unit2Grammar = {
  presentList: [
    { japanese: ['これ は ほん です。'], vietnamese: ['Đây là cuốn sách.'] },
    { japanese: ['それ は かぎ です。'], vietnamese: ['Cái đó là chìa khóa.'] },
    { japanese: ['あれ は テレビ です。'], vietnamese: ['Kia là chiếc tivi.'] },
  ],
  questionList: [
    { japanese: [
      'これ は とけい です か。',
      'はい、 とけい です。',
    ], vietnamese: [
      'Đây là đồng hồ phải không?',
      'Vâng, là đồng hồ.',
    ] },
    { japanese: [
      'これ は ラジオ です か。',
      'いいえ、 カメラ です。',
    ], vietnamese: [
      'Đây là radio phải không?',
      'Không, là máy ảnh.',
    ] },
    { japanese: [
      'これ は えんぴつ です か。',
      'いいえ、 ボールペン です。',
    ], vietnamese: [
      'Đây là bút chì phải không?',
      'Không, là bút bi.',
    ] },
    { japanese: [
      'これ は いす です か。',
      'はい、 いす です。',
    ], vietnamese: [
      'Đây là ghế phải không?',
      'Vâng, là ghế.',
    ] },
  ],
  questionWhatList: [
    { japanese: [
      'これ は なん です か。',
      'とけい です。',
    ], vietnamese: [
      'Đây là cái gì?',
      'Là đồng hồ.',
    ] },
    { japanese: [
      'これ は なん です か。',
      'カメラ です。',
    ], vietnamese: [
      'Đây là cái gì?',
      'Là máy ảnh.',
    ] },
    { japanese: [
      'これ は なん です か。',
      'ボールペン です。',
    ], vietnamese: [
      'Đây là cái gì?',
      'Là bút bi.',
    ] },
    { japanese: [
      'これ は なん です か。',
      'いす です。',
    ], vietnamese: [
      'Đây là cái gì?',
      'Là ghế.',
    ] },
  ],
  questionOrList: [
    { japanese: [
      'これ は ほん です か、 ざつし です か。',
      'ほん です。',
    ], vietnamese: [
      'Đây là sách hay tạp chí?',
      'Là sách.',
    ] },
  ],
  questionWhatContentList: [
    { japanese: [
      'これ は なん の ざつし です か。',
      'くるま の ざつし です。',
    ], vietnamese: [
      'Đây là tạp chí gì?',
      'Là tạp chí về ô tô.',
    ] },
    { japanese: [
      'これ は なん の ほん です か。',
      'にほんご の ほん です。',
    ], vietnamese: [
      'Đây là cuốn sách gì?',
      'Là cuốn sách tiếng Nhật.',
    ] },
  ],
  questionWhomList: [
    { japanese: [
      'これ は だれ の かばん です か。',
      'やまだ さん の かばん です。',
    ], vietnamese: [
      'Cái cặp này của ai?',
      'Là cặp của anh Yamada.',
    ] },
    { japanese: [
      'これ は だれ の かさ です か。',
      'さとう さん の かさ です。',
    ], vietnamese: [
      'Chiếc ô này của ai?',
      'Là ô của anh Sato.',
    ] },
  ],
  questionWhomYesNoList: [
    { japanese: [
      'これ は さとう さん の です か。',
      'はい、 さとう さん の です。',
    ], vietnamese: [
      'Đây có phải của anh Sato không?',
      'Có, là của anh Sato.',
    ] },
  ],
  questionWhomTwoList: [
    { japanese: [
      'この かばん は だれ の です か。',
      'やまだ さん の です。',
    ], vietnamese: [
      'Chiếc cặp này của ai?',
      'Của anh Yamada.',
    ] },
  ],
} satisfies UnitGrammarData;

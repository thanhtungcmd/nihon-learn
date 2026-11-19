import type { UnitGrammarData } from './types';

export const unit6Grammar = {
  objectStatement: [
    { japanese: [
      'ごはん を たべます。',
    ], vietnamese: [
      'Tôi ăn cơm.',
    ] },
    { japanese: [
      'ジュース を のみます。',
    ], vietnamese: [
      'Tôi uống nước hoa quả.',
    ] },
    { japanese: [
      'えいが を みます。',
    ], vietnamese: [
      'Tôi xem phim.',
    ] },
    { japanese: [
      'てがみ を かきます。',
    ], vietnamese: [
      'Tôi viết thư.',
    ] },
  ],
  whatQuestion: [
    { japanese: [
      'あさ なに を たべます か。',
      'パン と たまご を たべます。',
    ], vietnamese: [
      'Buổi sáng bạn ăn gì?',
      'Tôi ăn bánh mì và trứng.',
    ] },
    { japanese: [
      'きのう なに を しました か。',
      'しゅくだい を しました。',
    ], vietnamese: [
      'Hôm qua bạn đã làm gì?',
      'Tôi đã làm bài tập về nhà.',
    ] },
    { japanese: [
      'あした なに を します か。',
      'テニス を します。',
    ], vietnamese: [
      'Ngày mai bạn sẽ làm gì?',
      'Tôi sẽ chơi quần vợt.',
    ] },
    { japanese: [
      'どようび なに を しました か。',
      'なに も しませんでした。',
    ], vietnamese: [
      'Thứ Bảy bạn đã làm gì?',
      'Tôi đã không làm gì cả.',
    ] },
  ],
  placeQuestion: [
    { japanese: [
      'どこ で ひるごはん を たべます か。',
      'レストラン で たべます。',
    ], vietnamese: [
      'Bạn ăn bữa trưa ở đâu?',
      'Tôi ăn ở nhà hàng.',
    ] },
    { japanese: [
      'どこ で しゃしん を とりました か。',
      'にわ で とりました。',
    ], vietnamese: [
      'Bạn đã chụp ảnh ở đâu?',
      'Tôi đã chụp ở trong vườn.',
    ] },
    { japanese: [
      'どこ で くだもの を かいます か。',
      'スーパー で かいます。',
    ], vietnamese: [
      'Bạn mua trái cây ở đâu?',
      'Tôi mua ở siêu thị.',
    ] },
    { japanese: [
      'どこ で ともだち に あいました か。',
      'えき で あいました。',
    ], vietnamese: [
      'Bạn đã gặp bạn bè ở đâu?',
      'Tôi đã gặp ở nhà ga.',
    ] },
  ],
  invitation: [
    { japanese: [
      'いっしょに ビール を のみません か。',
      'ええ、 のみましょう。',
    ], vietnamese: [
      'Bạn cùng uống bia với tôi không?',
      'Vâng, cùng uống nào.',
    ] },
    { japanese: [
      'いっしょに ひるごはん を たべません か。',
      'ええ、 いいですね。',
    ], vietnamese: [
      'Bạn cùng ăn trưa với tôi không?',
      'Vâng, hay quá nhỉ.',
    ] },
    { japanese: [
      'いっしょに おはなみ を しません か。',
      'ええ、 しましょう。',
    ], vietnamese: [
      'Bạn cùng đi ngắm hoa anh đào với tôi không?',
      'Vâng, cùng đi nào.',
    ] },
    { japanese: [
      'いっしょに サッカー を しません か。',
      'すみません、 ちょっと…。',
    ], vietnamese: [
      'Bạn cùng chơi bóng đá với tôi không?',
      'Xin lỗi, tôi hơi bận một chút…',
    ] },
  ],
  practice: [
    { japanese: [
      'いつも どこ で ばんごはん を たべます か。',
      'いつも うち で たべます。',
    ], vietnamese: [
      'Bạn luôn ăn bữa tối ở đâu?',
      'Tôi luôn ăn ở nhà.',
    ] },
    { japanese: [
      'ときどき なに を のみます か。',
      'ときどき ビール を のみます。',
    ], vietnamese: [
      'Thỉnh thoảng bạn uống gì?',
      'Thỉnh thoảng tôi uống bia.',
    ] },
    { japanese: [
      'けさ なに を たべました か。',
      'なに も たべませんでした。',
    ], vietnamese: [
      'Sáng nay bạn đã ăn gì?',
      'Tôi đã không ăn gì cả.',
    ] },
    { japanese: [
      'あした いっしょに えいが を みません か。',
      'ええ、 みましょう。',
    ], vietnamese: [
      'Ngày mai bạn cùng xem phim với tôi không?',
      'Vâng, cùng xem nào.',
    ] },
  ],
} satisfies UnitGrammarData;

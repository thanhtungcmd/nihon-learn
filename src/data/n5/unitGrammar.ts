export interface N5GrammarSentence {
  vietnamese: string[];
  japanese: string[];
  grammar: string;
}

export interface GrammarLessonItem {
  japanese?: string[];
  vietnamese?: string[];
}

export type UnitGrammarData = Record<string, GrammarLessonItem[]>;

export function toGrammarSentences(unit: number, grammarData: UnitGrammarData): N5GrammarSentence[] {
  return Object.values(grammarData).flatMap((items) =>
    items
      .filter(({ japanese = [], vietnamese = [] }) => japanese.length > 0 && japanese.length === vietnamese.length)
      .map(({ japanese = [], vietnamese = [] }) => ({
        japanese,
        vietnamese,
        grammar: `Câu mẫu Bài ${unit}`,
      })),
  );
}

export const unit1Grammar = {
  questionList: [
    { japanese: ['はじめまして。'], vietnamese: ['Rất vui được gặp bạn'] },
    { japanese: ['おなまえ は？'], vietnamese: ['Tên của bạn là gì?'] },
    { japanese: ['わたし は トゥン です'], vietnamese: ['Tên tôi là Tùng'] },
    { japanese: ['おしごと は？'], vietnamese: ['Công việc của bạn là gì?'] },
    { japanese: ['わたし は エンジニア です'], vietnamese: ['Công việc của tôi là kỹ sư'] },
    { japanese: ['ことし は にじゅうなな さい です'], vietnamese: ['Năm nay tôi 27 tuổi'] },
    { japanese: ['ベトナム から きました'], vietnamese: ['Tôi đến từ việt nam'] },
    { japanese: ['どうぞ よろしく おねがい します。'], vietnamese: ['Rất mong được giúp đỡ'] },
  ],
  grammarPositiveList: [
    { japanese: ['やまだ さん は にほんじん です。'], vietnamese: ['Yamada-san là người Nhật'] },
    { japanese: ['ワット さん は イギリスじん です。'], vietnamese: ['Watt-san là người Anh'] },
    { japanese: ['タワボン さん は タイじん です。'], vietnamese: ['Tawabon-san là người Thái'] },
    { japanese: ['シュミット さん は ドイツじん です。'], vietnamese: ['Schmitt-san là người Đức'] },
    { japanese: ['やまだ さん は ぎんこういん です。'], vietnamese: ['Yamada-san là nhân viên ngân hàng'] },
    { japanese: ['ワット さん は せんせい です。'], vietnamese: ['Watt-san là giáo viên'] },
    { japanese: ['タワボン さん は がくせい です。'], vietnamese: ['Tawabon-san là học sinh'] },
    { japanese: ['シュミット さん は かいしゃいん です。'], vietnamese: ['Schmitt-san là nhân viên công ty'] },
  ],
  grammarNegativeList: [
    { japanese: ['やまだ さん は がくせい じゃありません。'], vietnamese: ['Yamada-san không phải là học sinh'] },
    { japanese: ['ワット さん は ドイツじん じゃありません。'], vietnamese: ['Watt-san không phải là người Đức'] },
    { japanese: ['タワボン さん は せんせい じゃありません。'], vietnamese: ['Tawabon-san không phải là giáo viên'] },
    { japanese: ['シュミット さん は アメリカじん じゃありません。'], vietnamese: ['Schmitt-san không phải là người Mỹ'] },
  ],
  grammarYesNoList: [
    { japanese: [
      'やまだ さん は ぎんこういん です か。',
      'はい、 ぎんこういん です。',
    ], vietnamese: [
      'Anh Yamada là nhân viên ngân hàng phải không?',
      'Có, anh ấy là nhân viên ngân hàng.',
    ] },
    { japanese: [
      'ワット さん は かいしゃいん です か。',
      'いいえ、 かいしゃいん じゃありません。',
    ], vietnamese: [
      'Anh Watt là nhân viên công ty phải không?',
      'Không, anh ấy không phải nhân viên công ty.',
    ] },
    { japanese: [
      'タワボン さん は せんせい です か。',
      'いいえ、 せんせい じゃありません。',
    ], vietnamese: [
      'Anh Tawabon là giáo viên phải không?',
      'Không, anh ấy không phải giáo viên.',
    ] },
    { japanese: [
      'シュミット さん は ドイツじん です か。',
      'はい、 ドイツじん です。',
    ], vietnamese: [
      'Anh Schmitt là người Đức phải không?',
      'Có, anh ấy là người Đức.',
    ] },
  ],
  grammarWhoList: [
    { japanese: [
      'あの かた は どなた です か。',
      'イー さん です。 AKC の けんきゅうしゃ です。',
    ], vietnamese: [
      'Người kia là ai vậy?',
      'Anh ấy là anh I. Anh ấy là nhà nghiên cứu của AKC.',
    ] },
    { japanese: [
      'あの かた は どなた です か。',
      'ワット さん です。 こうべ びょういん の いしゃ です。',
    ], vietnamese: [
      'Người kia là ai vậy?',
      'Anh ấy là anh Watt. Anh ấy là bác sĩ của bệnh viện Kobe.',
    ] },
    { japanese: [
      'あの かた は どなた です か。',
      'カリナ さん です。 ふじ だいがく の がくせい です。',
    ], vietnamese: [
      'Người kia là ai vậy?',
      'Cô ấy là chị Karina. Cô ấy là sinh viên của trường đại học Fuji.',
    ] },
    { japanese: [
      'あの かた は どなた です か。',
      'サントス さん です。 ブラジルエアー の しゃいん です。',
    ], vietnamese: [
      'Người kia là ai vậy?',
      'Anh ấy là anh Santos. Anh ấy là nhân viên của hãng hàng không Brazil Air.',
    ] },
  ],
  grammarAgeList: [
    { japanese: [
      'やまだ さん は なんさい です か。',
      'さんじゅうはつ さい です。',
    ], vietnamese: [
      'Anh/chị Yamada bao nhiêu tuổi?',
      '33 tuổi.',
    ] },
    { japanese: [
      'ワット さん は なんさい です か。',
      'よんじゅうご さい です。',
    ], vietnamese: [
      'Anh Watt bao nhiêu tuổi?',
      '45 tuổi.',
    ] },
    { japanese: [
      'タワボン さん は なんさい です か。',
      'じゅうきゅう さい です。',
    ], vietnamese: [
      'Anh Tawabon bao nhiêu tuổi?',
      '19 tuổi.',
    ] },
    { japanese: [
      'シュミット さん は なんさい です か。',
      'はたち です。',
    ], vietnamese: [
      'Anh Schmitt bao nhiêu tuổi?',
      '20 tuổi.',
    ] },
  ],
} satisfies UnitGrammarData;

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

export const unit5Grammar = {
  whereFromStatement: [
    { japanese: [
      'ゆうびんきょく へ いきます。',
    ], vietnamese: [
      'Tôi đi đến bưu điện.',
    ] },
    { japanese: [
      'デパート へ いきます。',
    ], vietnamese: [
      'Tôi đi đến bách hóa.',
    ] },
  ],
  whereDayQuestion: [
    { japanese: [
      'せんげつ どこ へ いきました か。',
      'アメリカ へ いきました。',
    ], vietnamese: [
      'Tháng trước bạn đã đi đâu?',
      'Tôi đã đi Mỹ.',
    ] },
    { japanese: [
      'きのう の ごご どこ へ いきました か。',
      'としょかん へ いきました。',
    ], vietnamese: [
      'Chiều hôm qua bạn đã đi đâu?',
      'Tôi đã đi thư viện.',
    ] },
    { japanese: [
      'らいしゅう の げつようび どこ へ いきます か。',
      'パワーでんき へ いきます。',
    ], vietnamese: [
      'Chiều hôm qua bạn đã đi đâu?',
      'Tôi đi đến Power Denki.',
    ] },
    { japanese: [
      'せんしゅう の にちようび どこ へ いきました か。',
      'どこ へ も いきませんでした。',
    ], vietnamese: [
      'Chủ nhật tuần trước, bạn đã đi đâu?',
      'Tôi đã không đi đâu cả.',
    ] },
  ],
  whereTransportQuestion: [
    { japanese: [
      'なんで がつこう へ いきます か。',
      'じてんしゃ で いきます。'
    ], vietnamese: [
      'Bạn đi đến trường bằng phương tiện gì.',
      'Tôi đi bằng xe đạp.'
    ] },
    { japanese: [
      'なんで とうきょう へ いきます か。',
      'ひこうき で いきます。'
    ], vietnamese: [
      'Bạn đi Tokyo bằng phương tiện gì?',
      'Tôi đi bằng máy bay.'
    ] },
    { japanese: [
      'なんで きゅうしゅう へ いきます か。',
      'ふね で いきます。'
    ], vietnamese: [
      'Bạn đi đến Kyushu bằng phương tiện gì.',
      'Tôi đi bằng thuyền.'
    ] },
    { japanese: [
      'なんで えき へ いきます か。',
      'あるいて いきます。'
    ], vietnamese: [
      'Bạn đi đến nhà ga bằng phương tiện gì.',
      'Tôi đi bộ.'
    ] },
  ],
  wherePersonQuestion: [
    { japanese: [
      'だれ と びじゅつかん へ いきます か。',
      'かのじょ と いきます。'
    ], vietnamese: [
      'Bạn đi đến bảo tàng mỹ thuật cùng với ai.',
      'Tôi đi cùng bạn gái.'
    ] },
    { japanese: [
      'だれ と ひろしま へ いきます か。',
      'かいしゃ の ひと と いきます。'
    ], vietnamese: [
      'Bạn đi đến bảo tàng mỹ thuật cùng với ai.',
      'Tôi đi cùng người của công ty.'
    ] },
    { japanese: [
      'だれ と ほつかいどう へ いきます か。',
      'かぞく と いきます。'
    ], vietnamese: [
      'Bạn đi Hokkaido cùng với ai.',
      'Tôi đi với gia đình.'
    ] },
    { japanese: [
      'だれ と フランス へ いきます か。',
      'ひとりで いきます。'
    ], vietnamese: [
      'Bạn đi Pháp với ai.',
      'Tôi đi một mình.'
    ] },
  ],
  whereWhenQuestion: [
    { japanese: [
      'いつ さくら だいがく へ いきます か。',
      '９ がつ じゅうよっか に いきます。'
    ], vietnamese: [
      'Bạn đi đến Đại học Sakura khi nào.',
      'Tôi đi vào ngày 14 tháng 9.'
    ] },
    { japanese: [
      'いつ アメリカ へ いきます か。',
      'らいねん の ３ がつ に いきます。'
    ], vietnamese: [
      'Bạn đi Mỹ khi nào.',
      'Tôi sẽ đi vào tháng 3 năm sau.'
    ] },
    { japanese: [
      'いつ ひろしま へ いきます か。',
      'らいげつ いきます。',
    ], vietnamese: [
      'Khi nào bạn đi Hiroshima.',
      'Tôi sẽ đi vào tháng sau.'
    ] },
    { japanese: [
      'いつ びょういん へ いきます か。',
      'こんしゅう の すいようび に いきます。'
    ], vietnamese: [
      'Khi nào bạn đi đến bệnh viện.',
      'Tôi sẽ đi vào thứ Tư tuần này.'
    ] },
  ],
  wherePractice: [
    { japanese: [
      'だれ と にほん へ いきます か。',
      'ひとりで きました。',
    ], vietnamese: [
      'Bạn đi Nhật Bản cùng với ai',
      'Tôi đã đến một mình.'
    ] },
    { japanese: [
      'せんげつ どこ へ いきました か。',
      'かんこく へ いきました。',
    ], vietnamese: [
      'Tháng trước bạn đã đi đâu.',
      'Tôi đã đi Hàn Quốc.'
    ] },
    { japanese: [
      'なんで かんこく へ いきました か。',
      'ふね で いきました。',
    ], vietnamese: [
      'Bạn đi Hàn Quốc bằng phương tiện gì.',
      'Tôi đã đi bằng tàu thủy.'
    ] },
     { japanese: [
      'いつ くに へ かえります か。',
      'らいねん の １２ がつ に かえります。',
    ], vietnamese: [
      'Khi nào bạn về nước?',
      'Tôi sẽ về nước vào tháng 12 năm sau.'
    ] },
  ],
  wherePracticeTwo: [
    { japanese: [
      'まいあさ なんじ に かいしゃ へ いきます か。',
      '７ じ はん に いきます。',
    ], vietnamese: [
      'Mỗi sáng bạn đi đến công ty lúc mấy giờ?',
      'Tôi đi lúc 7 giờ rưỡi.'
    ] },
    { japanese: [
      'まいあさ なんで かいしゃ へ いきます か。',
      'バス と でんしゃ で いきます。',
    ], vietnamese: [
      'Mỗi sáng bạn đi đến công ty bằng gì.',
      'Tôi đi bằng xe buýt và tàu điện.'
    ] },
    { japanese: [
      'おととい だれ と おおさかじょう へ いきました か。',
      'きむら さん と いきました。',
    ], vietnamese: [
      'Hôm kia bạn đã đi đến lâu đài Osaka với ai.',
      'Tôi đã đi cùng anh Kimura.'
    ] },
    { japanese: [
      'どようび どこ へ いきます か。',
      'どこ へ も いきません。'
    ], vietnamese: [
      'Thứ Bảy bạn sẽ đi đâu.',
      'Tôi không đi đâu cả.'
    ] },
  ],
} satisfies UnitGrammarData;


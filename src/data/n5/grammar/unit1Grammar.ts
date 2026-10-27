import type { UnitGrammarData } from './types';

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

<template>
  <section class="card shadow-sm border-0">
    <div class="card-body p-4 p-md-5">
      <h1 class="mt-3 mb-3">Lesson 5</h1>

      <div class="text"><ruby>語彙<rt>ごい</rt></ruby></div>
      <PronunciationTable :items="vocabularyList" />

      <PronunciationTable title="Tôi đi đâu đó" :items="whereFromStatement" />

      <PronunciationTable title="Câu hỏi hôm nào bạn đi đâu?" :items="whereDayQuestion" />

      <PronunciationTable title="Câu hỏi bạn đi đến đâu bằng gì?" :items="whereTransportQuestion" />

      <PronunciationTable title="Câu hỏi bạn đi đến đâu với ai?" :items="wherePersonQuestion" />

      <PronunciationTable title="Câu hỏi bạn đi đến đâu khi nào?" :items="whereWhenQuestion" />

      <PronunciationTable title="Luyện tập tổng hợp" :items="wherePractice" />

      <PronunciationTable title="Bạn đến đâu lúc mấy giờ?" :items="whereTimeQuestion" />

    </div>
  </section>
</template>

<script setup lang="ts">
import PronunciationTable from '@/components/PronunciationTable.vue';
import { useSelectionActions } from '@/composables/useSelectionActions';
import { playJapanesePronunciation } from '@/services/pollyService';
import { registerTranslationEntries } from '@/services/translationRegistry';

interface VocabularyItem {
  japanese: string[];
  vietnamese?: string[];
}

const vocabularyList: VocabularyItem[] = [
  { japanese: ['いきます'], vietnamese: ['đi'] },
  { japanese: ['きます'], vietnamese: ['đến'] },
  { japanese: ['かえります'], vietnamese: ['về'] },
  { japanese: ['がっこう'], vietnamese: ['trường học'] },
  { japanese: ['スーパー'], vietnamese: ['siêu thị'] },
  { japanese: ['えき'], vietnamese: ['ga, nhà ga'] },
  { japanese: ['ひこうき'], vietnamese: ['máy bay'] },
  { japanese: ['ふね'], vietnamese: ['thuyền'] },
  { japanese: ['でんしゃ'], vietnamese: ['tàu điện'] },
  { japanese: ['ちかてつ'], vietnamese: ['tàu điện ngầm'] },
  { japanese: ['しんかんせん'], vietnamese: ['tàu điện shinkansen'] },
  { japanese: ['バス'], vietnamese: ['xe buýt'] },
  { japanese: ['タクシー'], vietnamese: ['tắc xi'] },
  { japanese: ['じてんしゃ'], vietnamese: ['xe đạp'] },
  { japanese: ['あるいて'], vietnamese: ['đi bộ'] },
  { japanese: ['ひと'], vietnamese: ['người'] },
  { japanese: ['ともだち'], vietnamese: ['bạn bè'] },
  { japanese: ['かれ'], vietnamese: ['bạn trai'] },
  { japanese: ['かのじょ'], vietnamese: ['bạn gái'] },
  { japanese: ['かぞく'], vietnamese: ['gia đình'] },
  { japanese: ['ひとりで'], vietnamese: ['một mình'] },
  { japanese: ['せんしゅう'], vietnamese: ['tuần trước'] },
  { japanese: ['こんしゅう'], vietnamese: ['tuần này'] },
  { japanese: ['らいしゅう'], vietnamese: ['tuần sau'] },
  { japanese: ['せんげつ'], vietnamese: ['tháng trước'] },
  { japanese: ['こんげつ'], vietnamese: ['tháng này'] },
  { japanese: ['らいげつ'], vietnamese: ['tháng sau'] },
  { japanese: ['きょねん'], vietnamese: ['năm ngoái'] },
  { japanese: ['ことし'], vietnamese: ['năm nay'] },
  { japanese: ['らいねん'], vietnamese: ['năm sau'] },
  { japanese: ['ーねん*'], vietnamese: ['nămー'] },
  { japanese: ['なんねん*'], vietnamese: ['mấy năm'] },
  { japanese: ['ーがつ'], vietnamese: ['thángー'] },
  { japanese: ['なんがつ'], vietnamese: ['tháng mấy'] },
  { japanese: ['ついたち'], vietnamese: ['ngày mùng 1'] },
  { japanese: ['ふつか*'], vietnamese: ['ngày mùng 2'] },
  { japanese: ['みっか*'], vietnamese: ['ngày mùng 3'] },
  { japanese: ['よっか*'], vietnamese: ['ngày mùng 4'] },
  { japanese: ['いつか*'], vietnamese: ['ngày mùng 5'] },
  { japanese: ['むいか*'], vietnamese: ['ngày mùng 6'] },
  { japanese: ['なのか*'], vietnamese: ['ngày mùng 7'] },
  { japanese: ['ようか*'], vietnamese: ['ngày mùng 8'] },
  { japanese: ['ここのか*'], vietnamese: ['ngày mùng 9'] },
  { japanese: ['とおか*'], vietnamese: ['ngày mùng 10'] },
  { japanese: ['じゅうよっか*'], vietnamese: ['ngày 14'] },
  { japanese: ['はつか*'], vietnamese: ['ngày 20'] },
  { japanese: ['にじゅうよっか*'], vietnamese: ['ngày 24'] },
]

const whereFromStatement: VocabularyItem[] = [
  { japanese: [
    'ゆうびんきょくへいきます。',
  ], vietnamese: [
    'Tôi đi đến bưu điện.',
  ] },
  { japanese: [
    'デパートへ いきます。',
  ], vietnamese: [
    'Tôi đi đến bách hóa.',
  ] },
]

const whereDayQuestion: VocabularyItem[] = [
  { japanese: [
    'せんげつどこへいきましたか。',
    'アメリカへ いきました。',
  ], vietnamese: [
    'Tháng trước bạn đã đi đâu?',
    'Tôi đã đi Mỹ.',
  ] },
  { japanese: [
    'きのうのごごどこへいきましたか。',
    'としょかんへ いきました。',
  ], vietnamese: [
    'Chiều hôm qua bạn đã đi đâu?',
    'Tôi đã đi thư viện.',
  ] },
  { japanese: [
    'らいしゅうのげつようびどこへいきますか。',
    'パワーでんきへいきます。',
  ], vietnamese: [
    'Chiều hôm qua bạn đã đi đâu?',
    'Tôi đi đến Power Denki.',
  ] },
  { japanese: [
    'せんしゅうのにちようびどこへいきましたか。',
    'どこへもいきませんでした。',
  ], vietnamese: [
    'Chủ nhật tuần trước, bạn đã đi đâu?',
    'Tôi đã không đi đâu cả.',
  ] },
]

const whereTransportQuestion: VocabularyItem[] = [
  { japanese: [
    'なんでがつこうへいきますか。',
    'じてんしゃでいきます。'
  ], vietnamese: [
    'Bạn đi đến trường bằng phương tiện gì.',
    'Tôi đi bằng xe đạp.'
  ] },
  { japanese: [
    'なんでとうきょうへいきますか。',
    'ひこうきでいきます。'
  ], vietnamese: [
    'Bạn đi Tokyo bằng phương tiện gì?',
    'Tôi đi bằng máy bay.'
  ] },
  { japanese: [
    'なんできゅうしゅうへいきますか。',
    'ふねでいきます。'
  ], vietnamese: [
    'Bạn đi đến Kyushu bằng phương tiện gì.',
    'Tôi đi bằng thuyền.'
  ] },
  { japanese: [
    'なんでえきへいきますか。',
    'あるいていきます。'
  ], vietnamese: [
    'Bạn đi đến nhà ga bằng phương tiện gì.',
    'Tôi đi bộ.'
  ] },
]

const wherePersonQuestion: VocabularyItem[] = [
  { japanese: [
    'だれとびじゅつかんへいきますか。',
    'かのじょといきます。'
  ], vietnamese: [
    'Bạn đi đến bảo tàng mỹ thuật cùng với ai.',
    'Tôi đi cùng bạn gái.'
  ] },
  { japanese: [
    'だれとひろしまへいきますか。',
    'かいしゃのひとといきます。'
  ], vietnamese: [
    'Bạn đi đến bảo tàng mỹ thuật cùng với ai.',
    'Tôi đi cùng người của công ty.'
  ] },
  { japanese: [
    'だれとほつかいどうへいきますか。',
    'かぞくといきます。'
  ], vietnamese: [
    'Bạn đi Hokkaido cùng với ai.',
    'Tôi đi với gia đình.'
  ] },
  { japanese: [
    'だれとフランスへいきますか。',
    'ひとりでいきます。'
  ], vietnamese: [
    'Bạn đi Pháp với ai.',
    'Tôi đi một mình.'
  ] },
]

const whereWhenQuestion: VocabularyItem[] = [
  { japanese: [
    'いつさくらだいがくへいきますか。',
    '９がつじゅうよっかにいきます。'
  ], vietnamese: [
    'Bạn đi đến Đại học Sakura khi nào.',
    'Tôi đi vào ngày 14 tháng 9.'
  ] },
  { japanese: [
    'いつアメリカへいきますか。',
    'らいねんの３がつにいきます。'
  ], vietnamese: [
    'Bạn đi Mỹ khi nào.',
    'Tôi sẽ đi vào tháng 3 năm sau.'
  ] },
  { japanese: [
    'いつひろしまへいきますか。',
    'らいげついきます。'
  ], vietnamese: [
    'Khi nào bạn đi Hiroshima.',
    'Tôi sẽ đi vào tháng sau.'
  ] },
  { japanese: [
    'いつびょういんへいきますか。',
    'こんしゅうのすいようびにいきます。'
  ], vietnamese: [
    'Khi nào bạn đi đến bệnh viện.',
    'Tôi sẽ đi vào thứ Tư tuần này.'
  ] },
]

const wherePractice: VocabularyItem[] = [
  { japanese: [
    'だれとにほんへいきますか。',
    'ひとりできました。'
  ], vietnamese: [
    'Bạn đi Nhật Bản cùng với ai',
    'Tôi đã đến một mình.'
  ] },
  { japanese: [
    'せんげつどこへいきましたか。',
    'かんこくへいきました。'
  ], vietnamese: [
    'Tháng trước bạn đã đi đâu.',
    'Tôi đã đi Hàn Quốc.'
  ] },
  { japanese: [
    'なんでかんこくへいきましたか。',
    'ふねでいきました。'
  ], vietnamese: [
    'Bạn đi Hàn Quốc bằng phương tiện gì.',
    'Tôi đã đi bằng tàu thủy.'
  ] },
   { japanese: [
    'いつ くにへ かえりますか。',
    'らいねんの１２がつにかえります。'
  ], vietnamese: [
    'Khi nào bạn về nước?',
    'Tôi sẽ về nước vào tháng 12 năm sau.'
  ] },
]

const whereTimeQuestion: VocabularyItem[] = [
  { japanese: [
    'まいあさなんじにかいしゃへいきますか。',
    '７じはんにいきます。'
  ], vietnamese: [
    'Mỗi sáng bạn đi đến công ty lúc mấy giờ?',
    'Tôi đi lúc 7 giờ rưỡi.'
  ] },
  { japanese: [
    'まいあさなんでかいしゃへいきますか。',
    'バスとでんしゃでいきます。'
  ], vietnamese: [
    'Mỗi sáng bạn đi đến công ty bằng gì.',
    'Tôi đi bằng xe buýt và tàu điện.'
  ] },
  { japanese: [
    'おとといだれとおおさかじょうへいきましたか。',
    'きむらさんといきました。'
  ], vietnamese: [
    'Hôm kia bạn đã đi đến lâu đài Osaka với ai.',
    'Tôi đã đi cùng anh Kimura.'
  ] },
  { japanese: [
    '',
    ''
  ], vietnamese: [
    '',
    ''
  ] },
]

registerTranslationEntries([
  ...vocabularyList,
  ...whereDayQuestion,
  ...whereTransportQuestion,
  ...wherePersonQuestion,
  ...whereWhenQuestion,
  ...wherePractice,
  ...whereTimeQuestion
]);

useSelectionActions({
  onAction: (selectedText) => void playPronunciation(selectedText),
  shortcutKey: 'k',
});

async function playPronunciation(text: string) {
  try {
    await playJapanesePronunciation(text);
  } catch (error) {
    console.error('Failed to play pronunciation:', error);
  }
}

</script>

<style scoped>
rt {
  font-size: 24px;
}

</style>

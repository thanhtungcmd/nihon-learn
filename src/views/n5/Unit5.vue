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

      <PronunciationTable title="Luyện tập tổng hợp 2" :items="wherePracticeTwo" />

    </div>
  </section>
</template>

<script setup lang="ts">
import PronunciationTable from '@/components/PronunciationTable.vue';
import { useSelectionActions } from '@/composables/useSelectionActions';
import { playJapanesePronunciation } from '@/services/pollyService';
import { registerTranslationEntries } from '@/services/translationRegistry';
import { unit5Vocabulary } from '@/data/n5/unitVocabulary';

interface VocabularyItem {
  japanese: string[];
  vietnamese?: string[];
}

const vocabularyList: VocabularyItem[] = unit5Vocabulary;

const whereFromStatement: VocabularyItem[] = [
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
]

const whereDayQuestion: VocabularyItem[] = [
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
]

const whereTransportQuestion: VocabularyItem[] = [
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
]

const wherePersonQuestion: VocabularyItem[] = [
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
]

const whereWhenQuestion: VocabularyItem[] = [
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
]

const wherePractice: VocabularyItem[] = [
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
]

const wherePracticeTwo: VocabularyItem[] = [
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
]

registerTranslationEntries([
  ...vocabularyList,
  ...whereDayQuestion,
  ...whereTransportQuestion,
  ...wherePersonQuestion,
  ...whereWhenQuestion,
  ...wherePractice,
  ...wherePracticeTwo
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

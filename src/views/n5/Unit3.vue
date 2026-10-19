<template>
  <section class="card shadow-sm border-0">
    <div class="card-body p-4 p-md-5">
      <h1 class="mt-3 mb-3">Lesson 3</h1>

      <div class="text"><ruby>語彙<rt>ごい</rt></ruby></div>

      <PronunciationTable :items="vocabularyList" />

      <PronunciationTable title="Hội thoại" :items="presentList" />

      <PronunciationTable title="Câu hỏi ở đâu?" :items="questionList" />

      <PronunciationTable title="Vật này sản xuất ở đâu?" :items="questionTwoList" />

      <PronunciationTable title="Vật này bao nhiêu tiền?" :items="questionThreeList" />

    </div>

  </section>
</template>

<script setup lang="ts">
import PronunciationTable from '@/components/PronunciationTable.vue';
import { useSelectionActions } from '@/composables/useSelectionActions';
import { playJapanesePronunciation } from '@/services/pollyService';
import { registerTranslationEntries } from '@/services/translationRegistry';
import { unit3Vocabulary } from '@/data/n5/unitVocabulary';

interface VocabularyItem {
  japanese?: string[];
  vietnamese?: string[];
}

const vocabularyList: VocabularyItem[] = unit3Vocabulary;

const presentList: VocabularyItem[] = [
  { japanese: ['ここ は うけつけ です。'], vietnamese: ['Đây là quầy lễ tân.'] },
  { japanese: ['ここ は じむしょ です。'], vietnamese: ['Đây là văn phòng.'] },
  { japanese: ['ここ は かいぎしつ です。'], vietnamese: ['Đây là văn phòng.'] },
  { japanese: ['ここ は トイレ です。'], vietnamese: ['Đây là toilet.'] },
];

const questionList: VocabularyItem[] = [
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
      'Phòng họp ở đâu?',
      'Ở đây.',
    ]
  },
  {
    japanese: [
      'やまだ さん は どこ です か。',
      'あそこ です。',
    ], vietnamese: [
      'Yamada ở đâu?',
      'Ở đây.',
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
];

const questionTwoList: VocabularyItem[] = [
  {
    japanese: [
      'あれ は どこ の かばん です か。',
      'かんこく の かばん です。',
    ], vietnamese: [
      'Kia là cặp của nước nào?',
      'Cặp của Hàn Quốc..',
    ]
  },
]

const questionThreeList: VocabularyItem[] = [
  {
    japanese: [
      'この かばん は いくら です か。',
      '7300 えん です。',
    ], vietnamese: [
      'Cái cặp này giá bao nhiêu?',
      '7300 yên',
    ]
  },
]

registerTranslationEntries([
  ...vocabularyList,
  ...presentList,
  ...questionList,
  ...questionTwoList,
]);

useSelectionActions({
  onAction: (selectedText) => void playPronunciation(selectedText),
  shortcutKey: 'k',
});

async function playPronunciation(text: string | string[]) {
  try {
    const textToPlay = Array.isArray(text) ? text.join('') : text;
    await playJapanesePronunciation(textToPlay);
  } catch (error) {
    console.error('Failed to play pronunciation:', error);
  }
}
</script>

<style scoped>
rt {
  font-size: 24px;
}

.icon-volume {
  cursor: pointer;
}
</style>

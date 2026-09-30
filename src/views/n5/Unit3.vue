<template>
  <section class="card shadow-sm border-0">
    <div class="card-body p-4 p-md-5">
      <h1 class="mt-3 mb-3">Lesson 3</h1>

      <div class="text"><ruby>語彙<rt>ごい</rt></ruby></div>

      <PronunciationTable :items="vocabularyList" />

      <PronunciationTable title="Hội thoại" :items="presentList" />

      <PronunciationTable title="Câu hỏi ở đâu" :items="questionList" />

      <PronunciationTable title="Vật này sản xuất ở đâu" :items="questionTwoList" />

      <PronunciationTable title="Vật này bao nhiêu tiền?" :items="questionThreeList" />

    </div>

  </section>
</template>

<script setup lang="ts">
import PronunciationTable from '@/components/PronunciationTable.vue';
import { useSelectionActions } from '@/composables/useSelectionActions';
import { playJapanesePronunciation } from '@/services/pollyService';
import { registerTranslationEntries } from '@/services/translationRegistry';

interface VocabularyItem {
  japanese?: string[];
  vietnamese?: string[];
}

const vocabularyList: VocabularyItem[] = [
  { japanese: ['ここ'], vietnamese: ['chỗ này'] },
  { japanese: ['そこ'], vietnamese: ['chỗ đó'] },
  { japanese: ['あそこ'], vietnamese: ['chỗ kia'] },
  { japanese: ['どご'], vietnamese: ['chỗ nào'] },
  { japanese: ['こちら'], vietnamese: ['chỗ này lịch sự'] },
  { japanese: ['そちら'], vietnamese: ['chỗ đó lịch sự'] },
  { japanese: ['あちら'], vietnamese: ['chỗ kia lịch sự'] },
  { japanese: ['どちら'], vietnamese: ['chỗ nào lịch sự'] },
  { japanese: ['きょうしつ'], vietnamese: ['lớp học'] },
  { japanese: ['しょくどう'], vietnamese: ['nhà ăn'] },
  { japanese: ['じむしょ'], vietnamese: ['văn phòng'] },
  { japanese: ['かいぎしつ'], vietnamese: ['phòng họp'] },
  { japanese: ['うけつけ'], vietnamese: ['quầy lễ tân'] },
  { japanese: ['ロビー'], vietnamese: ['hành lang'] },
  { japanese: ['へや'], vietnamese: ['căn phòng'] },
  { japanese: ['トイレ'], vietnamese: ['nhà vệ sinh'] },
  { japanese: ['かいだん'], vietnamese: ['cầu thang'] },
  { japanese: ['じどうはんばいき'], vietnamese: ['máy bán hàng tự động'] },
  { japanese: ['うち'], vietnamese: ['nhà'] },
  { japanese: ['えん'], vietnamese: ['đồng yên'] },
  { japanese: ['ひゃく'], vietnamese: ['trăm'] },
  { japanese: ['せん'], vietnamese: ['nghìn'] },
  { japanese: ['まん'], vietnamese: ['vạn'] },
];

const presentList: VocabularyItem[] = [
  { japanese: ['ここはうけつけです。'], vietnamese: ['Đây là quầy lễ tân.'] },
  { japanese: ['ここはじむしょです。'], vietnamese: ['Đây là văn phòng.'] },
  { japanese: ['ここはかいぎしつです。'], vietnamese: ['Đây là văn phòng.'] },
  { japanese: ['ここはトイレです。'], vietnamese: ['Đây là toilet.'] },
];

const questionList: VocabularyItem[] = [
  {
    japanese: [
      'かいぎしつはどこですか。',
      'ここです。',
    ], vietnamese: [
      'Phòng họp ở đâu?',
      'Ở đây.',
    ]
  },
  {
    japanese: [
      'じどうはんばいきはどこですか。',
      'そこです。',
    ], vietnamese: [
      'Phòng họp ở đâu?',
      'Ở đây.',
    ]
  },
  {
    japanese: [
      'やまださんはどこですか。',
      'あそこです。',
    ], vietnamese: [
      'Yamada ở đâu?',
      'Ở đây.',
    ]
  },
  {
    japanese: [
      'トイレはどこですか。',
      '1かいです。',
    ], vietnamese: [
      'Nhà vệ sinh ở đâu?',
      'Ở tầng 1.',
    ]
  },
  {
    japanese: [
      'しょくどうはどこですか。',
      'ちかです。',
    ], vietnamese: [
      'Yamada ở đâu?',
      'Ở đây.',
    ]
  },
  {
    japanese: [
      'ミラーさんのおくにどちらですか。',
      'アメリカです。',
    ], vietnamese: [
      'Miller là người nước nào?',
      'Mỹ.',
    ]
  },
  {
    japanese: [
      'ミラーさんのだいがくはどちらですか。',
      'さくらだいがくです。',
    ], vietnamese: [
      'Miller là người nước nào?',
      'Mỹ.',
    ]
  },
];

const questionTwoList: VocabularyItem[] = [
  {
    japanese: [
      'あれはどこのかばんですか。',
      'かんこくのかばんです。',
    ], vietnamese: [
      'Kia là cặp của nước nào?',
      'Cặp của Hàn Quốc..',
    ]
  },
]

const questionThreeList: VocabularyItem[] = [
  {
    japanese: [
      'このかばんはいくらですか。',
      '7300えんです。',
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

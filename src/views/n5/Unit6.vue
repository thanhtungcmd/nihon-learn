<template>
  <section class="card shadow-sm border-0">
    <div class="card-body p-4 p-md-5">
      <h1 class="mt-3 mb-3">Bài 6</h1>

      <div class="text"><ruby>語彙<rt>ごい</rt></ruby></div>
      <PronunciationTable :items="vocabularyList" show-vietnamese />

      <PronunciationTable title="Tôi làm gì (N を V ます)" :items="objectStatement" />

      <PronunciationTable title="Câu hỏi bạn làm gì?" :items="whatQuestion" />

      <PronunciationTable title="Câu hỏi bạn làm ở đâu?" :items="placeQuestion" />

      <PronunciationTable title="Rủ rê cùng làm (V ませんか / V ましょう)" :items="invitation" />

      <PronunciationTable title="Luyện tập tổng hợp" :items="practice" />
    </div>
  </section>
</template>

<script setup lang="ts">
import PronunciationTable from '@/components/PronunciationTable.vue';
import { useSelectionActions } from '@/composables/useSelectionActions';
import { playJapanesePronunciation } from '@/services/pollyService';
import { registerTranslationEntries } from '@/services/translationRegistry';
import { unit6Vocabulary } from '@/data/n5/unitVocabulary';
import { unit6Grammar } from '@/data/n5/unitGrammar';

const vocabularyList = unit6Vocabulary;

const { objectStatement, whatQuestion, placeQuestion, invitation, practice } = unit6Grammar;

registerTranslationEntries([
  ...vocabularyList,
  ...objectStatement,
  ...whatQuestion,
  ...placeQuestion,
  ...invitation,
  ...practice
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

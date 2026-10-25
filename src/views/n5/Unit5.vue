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
import { unit5Grammar } from '@/data/n5/unitGrammar';

interface VocabularyItem {
  japanese: string[];
  vietnamese?: string[];
}

const vocabularyList: VocabularyItem[] = unit5Vocabulary;

const { whereFromStatement, whereDayQuestion, whereTransportQuestion, wherePersonQuestion, whereWhenQuestion, wherePractice, wherePracticeTwo } = unit5Grammar;

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

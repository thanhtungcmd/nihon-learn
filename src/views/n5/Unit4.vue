<template>
  <section class="card shadow-sm border-0">
    <div class="card-body p-4 p-md-5">
      <h1 class="mt-3 mb-3">Lesson 4</h1>

      <div class="text"><ruby>語彙<rt>ごい</rt></ruby></div>

      <PronunciationTable :items="vocabularyList" />

      <PronunciationTable title="Cách nói giờ" :items="timeList" />

      <PronunciationTable title="Câu hỏi ở đâu mấy giờ?" :items="whereTimeQuestionList" />

      <PronunciationTable title="Câu hỏi hôm nay là thứ mấy?" :items="dateQuestionList" />

      <PronunciationTable title="Câu hỏi sự kiện từ mấy giờ đến mấy giờ?" :items="fromtoQuestionList" />

      <PronunciationTable title="Câu hỏi bạn làm gì lúc mấy giờ?" :items="actionQuestionTimeList" />

      <PronunciationTable title="Câu hỏi bạn làm gì từ mấy giờ đến mấy giờ?" :items="fromtoActionQuestionList" />

      <PronunciationTable title="Tôi đang làm gì?" :items="stateActionList" />

      <PronunciationTable title="Câu hỏi có không bạn đang làm gì?" :items="actionYesNoQuestionList" />

    </div>
  </section>
</template>

<script setup lang="ts">
import PronunciationTable from '@/components/PronunciationTable.vue';
import { useSelectionActions } from '@/composables/useSelectionActions';
import { playJapanesePronunciation } from '@/services/pollyService';
import { registerTranslationEntries } from '@/services/translationRegistry';
import { unit4Vocabulary } from '@/data/n5/unitVocabulary';
import { unit4Grammar } from '@/data/n5/unitGrammar';

interface VocabularyItem {
  japanese?: string[];
  vietnamese?: string[];
}

const vocabularyList: VocabularyItem[] = unit4Vocabulary;

const { timeList, whereTimeQuestionList, dateQuestionList, fromtoQuestionList, actionQuestionTimeList, fromtoActionQuestionList, stateActionList, actionYesNoQuestionList } = unit4Grammar;

















registerTranslationEntries([
  ...vocabularyList,
  ...timeList,
  ...whereTimeQuestionList,
  ...dateQuestionList,
  ...fromtoQuestionList,
  ...actionQuestionTimeList,
  ...fromtoActionQuestionList,
  ...stateActionList,
  ...actionYesNoQuestionList,
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

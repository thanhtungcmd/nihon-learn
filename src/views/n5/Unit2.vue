<template>
  <section class="card shadow-sm border-0">
		<div class="card-body p-4 p-md-5">
			<h1 class="mt-3 mb-3">Lesson 1</h1>

      <div class="text"><ruby>語彙<rt>ごい</rt></ruby></div>

      <PronunciationTable :items="vocabularyList" />

      <PronunciationTable title="Hội thoại" :items="presentList" />

      <PronunciationTable title="Câu hỏi có không?" :items="questionList" />

      <PronunciationTable title="Câu hỏi cái gì đây?" :items="questionWhatList" />

      <PronunciationTable title="Câu hỏi cái này hay cái kia?" :items="questionOrList" />

      <PronunciationTable title="Câu hỏi cái này nói về nội dung gì?" :items="questionWhatContentList" />

      <PronunciationTable title="Câu hỏi cái này của ai?" :items="questionWhomList" />

      <PronunciationTable title="Câu hỏi có hay không phải của ai đó?" :items="questionWhomYesNoList" />

      <PronunciationTable title="Câu hỏi đồ vật này của ai (loại 2)?" :items="questionWhomTwoList" />

    </div>

  </section>
</template>

<script setup lang="ts">
import PronunciationTable from '@/components/PronunciationTable.vue';
import { useSelectionActions } from '@/composables/useSelectionActions';
import { playJapanesePronunciation } from '@/services/pollyService';
import { registerTranslationEntries } from '@/services/translationRegistry';
import { unit2Vocabulary } from '@/data/n5/unitVocabulary';
import { unit2Grammar } from '@/data/n5/unitGrammar';

interface VocabularyItem {
  japanese?: string[];
  vietnamese?: string[];
}

const vocabularyList: VocabularyItem[] = unit2Vocabulary;

const { presentList, questionList, questionWhatList, questionOrList, questionWhatContentList, questionWhomList, questionWhomYesNoList, questionWhomTwoList } = unit2Grammar;

registerTranslationEntries([
  ...vocabularyList,
  ...questionWhomTwoList,
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

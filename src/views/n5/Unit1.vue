<template>
	<section class="card shadow-sm border-0">
		<div class="card-body p-4 p-md-5">
			<h1 class="mt-3 mb-3">Lesson 1</h1>

			<div class="text"><ruby>語彙<rt>ごい</rt></ruby></div>

			<PronunciationTable :items="vocabularyList" />

      <PronunciationTable title="Hội thoại cơ bản" :items="questionList" />

      <PronunciationTable title="Câu khẳng định" :items="grammarPositiveList" />

      <PronunciationTable title="Câu phủ định" :items="grammarNegativeList" />

      <PronunciationTable title="Câu hỏi có / không?" :items="grammarYesNoList" />

      <PronunciationTable title="Câu hỏi ai đấy?" :items="grammarWhoList" />

      <PronunciationTable title="Câu hỏi tuổi ai đấy?" :items="grammarAgeList" />

		</div>
	</section>
</template>

<script setup lang="ts">
import PronunciationTable from '@/components/PronunciationTable.vue';
import { useSelectionActions } from '@/composables/useSelectionActions';
import { playJapanesePronunciation } from '@/services/pollyService';
import { registerTranslationEntries } from '@/services/translationRegistry';
import { unit1Vocabulary } from '@/data/n5/unitVocabulary';
import { unit1Grammar } from '@/data/n5/unitGrammar';

interface VocabularyItem {
  japanese?: string[];
  vietnamese?: string[];
}

useSelectionActions({
  onAction: (selectedText) => void playPronunciation(selectedText),
  shortcutKey: 'k',
});

const vocabularyList: VocabularyItem[] = unit1Vocabulary;

const { questionList, grammarPositiveList, grammarNegativeList, grammarYesNoList, grammarWhoList, grammarAgeList } = unit1Grammar;

registerTranslationEntries([
  ...vocabularyList,
  ...questionList,
  ...grammarPositiveList,
  ...grammarNegativeList,
  ...grammarYesNoList,
  ...grammarWhoList,
  ...grammarAgeList,
]);

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

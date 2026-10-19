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

interface VocabularyItem {
  japanese?: string[];
  vietnamese?: string[];
}

useSelectionActions({
  onAction: (selectedText) => void playPronunciation(selectedText),
  shortcutKey: 'k',
});

const vocabularyList: VocabularyItem[] = unit1Vocabulary;

const questionList: VocabularyItem[] = [
  { japanese: ['はじめまして。'], vietnamese: ['Rất vui được gặp bạn'] },
  { japanese: ['おなまえ は？'], vietnamese: ['Tên của bạn là gì?'] },
  { japanese: ['(わたし は) トゥン です'], vietnamese: ['Tên tôi là Tùng'] },
  { japanese: ['おしごと は？'], vietnamese: ['Công việc của bạn là gì?'] },
  { japanese: ['(わたし は) エンジニア です'], vietnamese: ['Công việc của tôi là kỹ sư'] },
  { japanese: ['ことし は にじゅうなな さい です'], vietnamese: ['Năm nay tôi 27 tuổi'] },
  { japanese: ['ベトナム から きました'], vietnamese: ['Tôi đến từ việt nam'] },
  { japanese: ['どうぞ よろしく おねがい します。'], vietnamese: ['Rất mong được giúp đỡ'] },
]

const grammarPositiveList: VocabularyItem[] = [
  { japanese: ['やまだ さん は にほんじん です。'], vietnamese: ['Yamada-san là người Nhật'] },
  { japanese: ['ワット さん は イギリスじん です。'], vietnamese: ['Watt-san là người Anh'] },
  { japanese: ['タワボン さん は タイじん です。'], vietnamese: ['Tawabon-san là người Thái'] },
  { japanese: ['シュミット さん は ドイツじん です。'], vietnamese: ['Schmitt-san là người Đức'] },
  { japanese: ['やまだ さん は ぎんこういん です。'], vietnamese: ['Yamada-san là nhân viên ngân hàng'] },
  { japanese: ['ワット さん は せんせい です。'], vietnamese: ['Watt-san là giáo viên'] },
  { japanese: ['タワボン さん は がくせい です。'], vietnamese: ['Tawabon-san là học sinh'] },
  { japanese: ['シュミット さん は かいしゃいん です。'], vietnamese: ['Schmitt-san là nhân viên công ty'] },
]

const grammarNegativeList: VocabularyItem[] = [
  { japanese: ['やまだ さん は がくせい じゃありません。'], vietnamese: ['Yamada-san không phải là học sinh'] },
  { japanese: ['ワット さん は ドイツじん じゃありません。'], vietnamese: ['Watt-san không phải là người Đức'] },
  { japanese: ['タワボン さん は せんせい じゃありません。'], vietnamese: ['Tawabon-san không phải là giáo viên'] },
  { japanese: ['シュミット さん は アメリカじん じゃありません。'], vietnamese: ['Schmitt-san không phải là người Mỹ'] },
]

const grammarYesNoList: VocabularyItem[] = [
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
]

const grammarWhoList: VocabularyItem[] = [
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
]

const grammarAgeList: VocabularyItem[] = [
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
]

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

<template>
  <section class="card shadow-sm border-0">
		<div class="card-body p-4 p-md-5">
			<h1 class="mt-3 mb-3">Lesson 1</h1>

      <div class="text"><ruby>語彙<rt>ごい</rt></ruby></div>

      <PronunciationTable :items="vocabularyList" @pronounce="playPronunciation" />

      <div class="mt-5 text">Hội thoại</div>

      <PronunciationTable :items="presentList" @pronounce="playPronunciation" />

      <div class="mt-5 text">Câu hỏi có không</div>

      <PronunciationTable :items="questionList" @pronounce="playPronunciation" />

      <div class="mt-5 text">Câu hỏi cái gì đây?</div>

      <PronunciationTable :items="questionWhatList" @pronounce="playPronunciation" />

      <div class="mt-5 text">Câu hỏi cái này hay cái kia?</div>

      <PronunciationTable :items="questionOrList" @pronounce="playPronunciation" />

      <div class="mt-5 text">Câu hỏi cái này nói về nội dung gì?</div>

      <PronunciationTable :items="questionWhatContentList" @pronounce="playPronunciation" />

      <div class="mt-5 text">Câu hỏi cái này của ai?</div>

      <PronunciationTable :items="questionWhomList" @pronounce="playPronunciation" />

      <div class="mt-5 text">Câu hỏi có hay không phải của ai đó?</div>

      <PronunciationTable :items="questionWhomYesNoList" @pronounce="playPronunciation" />

      <div class="mt-5 text">Câu hỏi đồ vật này của ai (loại 2)?</div>

      <PronunciationTable :items="questionWhomTwoList" @pronounce="playPronunciation" />

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
  { japanese: ['これ'], vietnamese: ['cái này'] },
  { japanese: ['それ'], vietnamese: ['cái đó'] },
  { japanese: ['あれ'], vietnamese: ['cái kia'] },
  { japanese: ['ほん'], vietnamese: ['sách'] },
  { japanese: ['じしょ'], vietnamese: ['từ điển'] },
  { japanese: ['ざつし'], vietnamese: ['tạp chí'] },
  { japanese: ['しんぶん'], vietnamese: ['báo'] },
  { japanese: ['ノート'], vietnamese: ['vở ghi chép'] },
  { japanese: ['てちょう'], vietnamese: ['thẻ'] },
  { japanese: ['めいし'], vietnamese: ['thẻ tên'] },
  { japanese: ['カード'], vietnamese: ['thẻ'] },
  { japanese: ['えんぴつ'], vietnamese: ['bút chì'] },
  { japanese: ['ボールペン'], vietnamese: ['bút bi'] },
  { japanese: ['シャープペンシル'], vietnamese: ['bút chì kim'] },
  { japanese: ['かぎ'], vietnamese: ['chìa khóa'] },
  { japanese: ['とけい'], vietnamese: ['đồng hồ'] },
  { japanese: ['かさ'], vietnamese: ['cái ô'] },
  { japanese: ['かばん'], vietnamese: ['cặp sách'] },
  { japanese: ['テレビ'], vietnamese: ['tivi'] },
  { japanese: ['ラジオ'], vietnamese: ['radio'] },
  { japanese: ['カメラ'], vietnamese: ['máy ảnh'] },
  { japanese: ['コンピューター'], vietnamese: ['máy tính'] },
  { japanese: ['つくえ'], vietnamese: ['cái bàn'] },
  { japanese: ['いす'], vietnamese: ['cái ghế'] },
  { japanese: ['チョコレート'], vietnamese: ['sô cô la'] },
  { japanese: ['コーヒー'], vietnamese: ['cà phê'] },
  { japanese: ['おみやげ'], vietnamese: ['quà lưu niệm'] },
  { japanese: ['えいご'], vietnamese: ['tiếng Anh'] },
  { japanese: ['にほんご'], vietnamese: ['tiếng Nhật'] },
  { japanese: ['そう'], vietnamese: ['đúng rồi'] },
  { japanese: ['あのう'], vietnamese: ['ừm/à'] },
  { japanese: ['えつ'], vietnamese: ['đúng rồi'] },
  { japanese: ['どうぞ'], vietnamese: ['xin mời'] },
  { japanese: ['そうですか'], vietnamese: ['thế à'] },
  { japanese: ['ちがいます'], vietnamese: ['không đúng'] },
]

const presentList: VocabularyItem[] = [
  { japanese: ['これはほんです。'], vietnamese: ['Đây là cuốn sách.'] },
  { japanese: ['それはかぎです。'], vietnamese: ['Cái đó là chìa khóa.'] },
  { japanese: ['あれはテレビです。'], vietnamese: ['Kia là chiếc tivi.'] },
]

const questionList: VocabularyItem[] = [
  { japanese: [
    'これはとけいですか。',
    'はい、とけいです。',
  ], vietnamese: [
    'Đây là đồng hồ phải không?',
    'Vâng, là đồng hồ.',
  ] },
  { japanese: [
    'これはラジオですか。',
    'いいえ、カメラです。',
  ], vietnamese: [
    'Đây là radio phải không?',
    'Không, là máy ảnh.',
  ] },
  { japanese: [
    'これはえんぴつですか。',
    'いいえ、ボールペンです。',
  ], vietnamese: [
    'Đây là bút chì phải không?',
    'Không, là bút bi.',
  ] },
  { japanese: [
    'これはいすですか。',
    'はい、いすです。',
  ], vietnamese: [
    'Đây là ghế phải không?',
    'Vâng, là ghế.',
  ] },
]

const questionWhatList: VocabularyItem[] = [
  { japanese: [
    'これはなんですか。',
    'とけいです。',
  ], vietnamese: [
    'Đây là cái gì?',
    'Là đồng hồ.',
  ] },
  { japanese: [
    'これはなんですか。',
    'カメラです。',
  ], vietnamese: [
    'Đây là cái gì?',
    'Là máy ảnh.',
  ] },
  { japanese: [
    'これはなんですか。',
    'ボールペンです。',
  ], vietnamese: [
    'Đây là cái gì?',
    'Là bút bi.',
  ] },
  { japanese: [
    'これはなんですか。',
    'いすです。',
  ], vietnamese: [
    'Đây là cái gì?',
    'Là ghế.',
  ] },
]

const questionOrList: VocabularyItem[] = [
  { japanese: [
    'これはほんですか、ざつしですか。',
    'ほんです。',
  ], vietnamese: [
    'Đây là sách hay tạp chí?',
    'Là sách.',
  ] },
]

const questionWhatContentList: VocabularyItem[] = [
  { japanese: [
    'これはなんのざつしですか。',
    'くるまのざつしです。',
  ], vietnamese: [
    'Đây là tạp chí gì?',
    'Là tạp chí về ô tô.',
  ] },
  { japanese: [
    'これはなんのほんですか。',
    'にほんごのほんです。',
  ], vietnamese: [
    'Đây là cuốn sách gì?',
    'Là cuốn sách tiếng Nhật.',
  ] },
]

const questionWhomList: VocabularyItem[] = [
  { japanese: [
    'これはだれのかばんですか。',
    'やまださんのかばんです。',
  ], vietnamese: [
    'Cái cặp này của ai?',
    'Là cặp của anh Yamada.',
  ] },
  { japanese: [
    'これはだれのかさですか。',
    'さとうさんのかさです。',
  ], vietnamese: [
    'Chiếc ô này của ai?',
    'Là ô của anh Sato.',
  ] },
]

const questionWhomYesNoList: VocabularyItem[] = [
  { japanese: [
    'これはさとうさんのですか。',
    'はい、さとうさんのです。',
  ], vietnamese: [
    'Đây có phải của anh Sato không?',
    'Có, là của anh Sato.',
  ] },
]

const questionWhomTwoList: VocabularyItem[] = [
  { japanese: [
    'このかばんはだれのですか。',
    'やまださんのです。',
  ], vietnamese: [
    'Chiếc cặp này của ai?',
    'Của anh Yamada.',
  ] },
]


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

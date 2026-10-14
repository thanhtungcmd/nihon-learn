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
  { japanese: ['これ は ほん です。'], vietnamese: ['Đây là cuốn sách.'] },
  { japanese: ['それ は かぎ です。'], vietnamese: ['Cái đó là chìa khóa.'] },
  { japanese: ['あれ は テレビ です。'], vietnamese: ['Kia là chiếc tivi.'] },
]

const questionList: VocabularyItem[] = [
  { japanese: [
    'これ は とけい です か。',
    'はい、 とけい です。',
  ], vietnamese: [
    'Đây là đồng hồ phải không?',
    'Vâng, là đồng hồ.',
  ] },
  { japanese: [
    'これ は ラジオ です か。',
    'いいえ、 カメラ です。',
  ], vietnamese: [
    'Đây là radio phải không?',
    'Không, là máy ảnh.',
  ] },
  { japanese: [
    'これ は えんぴつ です か。',
    'いいえ、 ボールペン です。',
  ], vietnamese: [
    'Đây là bút chì phải không?',
    'Không, là bút bi.',
  ] },
  { japanese: [
    'これ は いす です か。',
    'はい、 いす です。',
  ], vietnamese: [
    'Đây là ghế phải không?',
    'Vâng, là ghế.',
  ] },
]

const questionWhatList: VocabularyItem[] = [
  { japanese: [
    'これ は なん です か。',
    'とけい です。',
  ], vietnamese: [
    'Đây là cái gì?',
    'Là đồng hồ.',
  ] },
  { japanese: [
    'これ は なん です か。',
    'カメラ です。',
  ], vietnamese: [
    'Đây là cái gì?',
    'Là máy ảnh.',
  ] },
  { japanese: [
    'これ は なん です か。',
    'ボールペン です。',
  ], vietnamese: [
    'Đây là cái gì?',
    'Là bút bi.',
  ] },
  { japanese: [
    'これ は なん です か。',
    'いす です。',
  ], vietnamese: [
    'Đây là cái gì?',
    'Là ghế.',
  ] },
]

const questionOrList: VocabularyItem[] = [
  { japanese: [
    'これ は ほん です か、 ざつし です か。',
    'ほん です。',
  ], vietnamese: [
    'Đây là sách hay tạp chí?',
    'Là sách.',
  ] },
]

const questionWhatContentList: VocabularyItem[] = [
  { japanese: [
    'これ は なん の ざつし です か。',
    'くるま の ざつし です。',
  ], vietnamese: [
    'Đây là tạp chí gì?',
    'Là tạp chí về ô tô.',
  ] },
  { japanese: [
    'これ は なん の ほん です か。',
    'にほんご の ほん です。',
  ], vietnamese: [
    'Đây là cuốn sách gì?',
    'Là cuốn sách tiếng Nhật.',
  ] },
]

const questionWhomList: VocabularyItem[] = [
  { japanese: [
    'これ は だれ の かばん です か。',
    'やまだ さん の かばん です。',
  ], vietnamese: [
    'Cái cặp này của ai?',
    'Là cặp của anh Yamada.',
  ] },
  { japanese: [
    'これ は だれ の かさ です か。',
    'さとう さん の かさ です。',
  ], vietnamese: [
    'Chiếc ô này của ai?',
    'Là ô của anh Sato.',
  ] },
]

const questionWhomYesNoList: VocabularyItem[] = [
  { japanese: [
    'これ は さとう さん の です か。',
    'はい、 さとう さん の です。',
  ], vietnamese: [
    'Đây có phải của anh Sato không?',
    'Có, là của anh Sato.',
  ] },
]

const questionWhomTwoList: VocabularyItem[] = [
  { japanese: [
    'この かばん は だれ の です か。',
    'やまだ さん の です。',
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

<template>
  <section class="card shadow-sm border-0">
		<div class="card-body p-4 p-md-5">
			<h1 class="mt-3 mb-3">Lesson 1</h1>

      <div class="text"><ruby>語彙<rt>ごい</rt></ruby></div>

      <div class="mt-5 table-responsive">
        <table class="table table-bordered table-hover mb-0 align-middle rounded-3"
          style="max-width: 1200px; table-layout: fixed; width: 100%;">
          <thead>
            <tr>
              <th scope="col" style="width: 90%;"></th>
              <th scope="col" style="width: 10%;"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in vocabularyList" :key="item.japanese?.join('-')">
              <td>
                <div v-for="(line, idx) in item.japanese" :key="idx">{{ line }}</div>
              </td>
              <td>
                <IconVolume stroke="2" class="icon-volume" @click="playPronunciation(item.japanese ?? '')" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-5 text">Hội thoại</div>

      <div class="mt-5 table-responsive">
        <table class="table table-bordered table-hover mb-0 align-middle rounded-3"
					style="max-width: 1200px; table-layout: fixed; width: 100%;">
          <thead>
            <tr>
              <th scope="col" style="width: 90%;"></th>
              <th scope="col" style="width: 10%;"></th>
            </tr>
          </thead>
          <tbody>
						<tr v-for="item in presentList" :key="item.japanese?.join('-')">
							<td>
								<div v-for="(line, idx) in item.japanese" :key="idx">{{ line }}</div>
							</td>
							<td>
								<IconVolume stroke="2" class="icon-volume" @click="playPronunciation(item.japanese ?? '')" />
							</td>
						</tr>
					</tbody>
        </table>
      </div>

      <div class="mt-5 text">Câu hỏi có không</div>

      <div class="mt-5 table-responsive">
        <table class="table table-bordered table-hover mb-0 align-middle rounded-3"
					style="max-width: 1200px; table-layout: fixed; width: 100%;">
          <thead>
            <tr>
              <th scope="col" style="width: 90%;"></th>
              <th scope="col" style="width: 10%;"></th>
            </tr>
          </thead>
          <tbody>
						<tr v-for="item in questionList" :key="item.japanese?.join('-')">
							<td>
								<div v-for="(line, idx) in item.japanese" :key="idx">{{ line }}</div>
							</td>
							<td>
								<IconVolume stroke="2" class="icon-volume" @click="playPronunciation(item.japanese ?? '')" />
							</td>
						</tr>
					</tbody>
        </table>
      </div>

      <div class="mt-5 text">Câu hỏi cái gì đây?</div>

      <div class="mt-5 table-responsive">
        <table class="table table-bordered table-hover mb-0 align-middle rounded-3"
					style="max-width: 1200px; table-layout: fixed; width: 100%;">
          <thead>
            <tr>
              <th scope="col" style="width: 90%;"></th>
              <th scope="col" style="width: 10%;"></th>
            </tr>
          </thead>
          <tbody>
						<tr v-for="item in questionWhatList" :key="item.japanese?.join('-')">
							<td>
								<div v-for="(line, idx) in item.japanese" :key="idx">{{ line }}</div>
							</td>
							<td>
								<IconVolume stroke="2" class="icon-volume" @click="playPronunciation(item.japanese ?? '')" />
							</td>
						</tr>
					</tbody>
        </table>
      </div>

      <div class="mt-5 text">Câu hỏi cái này hay cái kia?</div>

    </div>

  </section>
</template>

<script setup lang="ts">
import { IconVolume } from '@tabler/icons-vue';
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
  { japanese: ['これはほんです。'] },
  { japanese: ['それはかぎです。'] },
  { japanese: ['あれはテレビです。'] },
]

const questionList: VocabularyItem[] = [
  { japanese: [
    'これはとけいですか。',
    'はい、とけいです。',
  ] },
  { japanese: [
    'これはラジオですか。',
    'いいえ、カメラです。',
  ] },
  { japanese: [
    'これはえんぴつですか。',
    'いいえ、ボールペンです。',
  ] },
  { japanese: [
    'これはいすですか。',
    'はい、いすです。',
  ] },
]

const questionWhatList: VocabularyItem[] = [
  { japanese: [
    'これはなんですか。',
    'とけいです。',
  ] },
  { japanese: [
    'これはなんですか。',
    'カメラです。',
  ] },
  { japanese: [
    'これはなんですか。',
    'ボールペンです。',
  ] },
  { japanese: [
    'これはなんですか。',
    'いすです。',
  ] },
]

registerTranslationEntries([
  ...vocabularyList,
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
<template>
  <section class="card shadow-sm border-0">
    <div class="card-body p-4 p-md-5">
      <h1 class="mt-3 mb-3">Lesson 4</h1>

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

      <div class="mt-5 text">Cách nói giờ</div>
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
            <tr v-for="item in timeList" :key="item.japanese?.join('-')">
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

      <div class="mt-5 text">Câu hỏi ở đâu mấy giờ?</div>
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
            <tr v-for="item in whereTimeQuestionList" :key="item.japanese?.join('-')">
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

      <div class="mt-5 text">Câu hỏi hôm nay là thứ mấy?</div>
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
            <tr v-for="item in dateQuestionList" :key="item.japanese?.join('-')">
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

      <div class="mt-5 text">Câu hỏi sự kiện từ mấy giờ đến mấy giờ?</div>
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
            <tr v-for="item in fromtoQuestionList" :key="item.japanese?.join('-')">
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

      <div class="mt-5 text">Câu hỏi hành động từ mấy giờ đến mấy giờ?</div>
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
            <tr v-for="item in fromtoActionQuestionList" :key="item.japanese?.join('-')">
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
  { japanese: ['おきます'], vietnamese: ['dậy, thức dậy'] },
  { japanese: ['ねます'], vietnamese: ['ngủ, đi ngủ'] },
  { japanese: ['はたらきます'], vietnamese: ['làm việc'] },
  { japanese: ['やすみます'], vietnamese: ['nghỉ ngơi'] },
  { japanese: ['べんきょうします'], vietnamese: ['học'] },
  { japanese: ['おわります'], vietnamese: ['kết thúc'] },
  { japanese: ['デパート'], vietnamese: ['bách hóa'] },
  { japanese: ['ぎんこう'], vietnamese: ['ngân hàng'] },
  { japanese: ['ゆうびんきょく'], vietnamese: ['bưu điện'] },
  { japanese: ['びじゅつかん'], vietnamese: ['bảo tàng mỹ thuật'] },
  { japanese: ['としょかん'], vietnamese: ['thư viện'] },
  { japanese: ['いま'], vietnamese: ['bây giờ'] },
  { japanese: ['ーじ'], vietnamese: ['giờ'] },
  { japanese: ['ーぷん'], vietnamese: ['phút'] },
  { japanese: ['はん'], vietnamese: ['rưỡi, nửa'] },
  { japanese: ['なんじ'], vietnamese: ['mấy giờ'] },
  { japanese: ['なんぷん'], vietnamese: ['mấy phút'] },
  { japanese: ['ごぜん'], vietnamese: ['AM'] },
  { japanese: ['ごご'], vietnamese: ['PM'] },
  { japanese: ['あさ'], vietnamese: ['sáng'] },
  { japanese: ['ひる'], vietnamese: ['trưa'] },
  { japanese: ['ばん'], vietnamese: ['tối'] },
  { japanese: ['あととい'], vietnamese: ['hôm kia'] },
  { japanese: ['きのう'], vietnamese: ['hôm qua'] },
  { japanese: ['きょう'], vietnamese: ['hôm nay'] },
  { japanese: ['あした'], vietnamese: ['ngày mai'] },
  { japanese: ['あさって'], vietnamese: ['ngày kia'] },
  { japanese: ['けさ'], vietnamese: ['sáng nay'] },
  { japanese: ['こんばん'], vietnamese: ['tối nay'] },
  { japanese: ['やすみ'], vietnamese: ['nghỉ phép'] },
  { japanese: ['ひるやすみ'], vietnamese: ['nghỉ trưa'] },
  { japanese: ['まいあさ'], vietnamese: ['mỗi sáng'] },
  { japanese: ['まいばん'], vietnamese: ['mỗi tối'] },
  { japanese: ['まいにち'], vietnamese: ['hằng ngày'] },
  { japanese: ['ばつようび'], vietnamese: ['thứ 2'] },
  { japanese: ['かようび'], vietnamese: ['thứ 3'] },
  { japanese: ['すいようび'], vietnamese: ['thứ 4'] },
  { japanese: ['もくようび'], vietnamese: ['thứ 5'] },
  { japanese: ['きんようび'], vietnamese: ['thứ 6'] },
  { japanese: ['どようび'], vietnamese: ['thứ 7'] },
  { japanese: ['にちようび'], vietnamese: ['chủ nhật'] },
  { japanese: ['なんようび'], vietnamese: ['thứ mấy'] },
];

const timeList: VocabularyItem[] = [
  { japanese: ['７じはんです。'], vietnamese: ['7h30'] },
  { japanese: ['１２じ１５ぷんです。'], vietnamese: ['12h15p'] },
  { japanese: ['２じ４５ぷんです。'], vietnamese: ['2h45p'] },
  { japanese: ['１０じ２０ぷんです。'], vietnamese: ['10h20p'] },
];

const whereTimeQuestionList: VocabularyItem[] = [
  { japanese: [
    'ペキンはいまなんじですか。',
    'ごご６じです。'
  ], vietnamese: [''] },
  { japanese: [
    'バンコクはいまなんじですか。',
    'ごご４じです。'
  ], vietnamese: [''] },
  { japanese: [
    'ロンドンはいまなんじですか。',
    'ごぜん９じです。'
  ], vietnamese: [''] },
  { japanese: [
    'ロサンゼルスはいまなんじですか。',
    'ごぜん１じです。'
  ], vietnamese: [''] },
];

const dateQuestionList: VocabularyItem[] = [
  { japanese: [
    'あしたはなんようびですか。',
    'すいようびです。'
  ], vietnamese: [''] },
  { japanese: [
    'かいぎはなんようびですか。',
    'きんようびです。'
  ], vietnamese: [''] },
  { japanese: [
    'しけんはなんようびですか。',
    'もくようびです。'
  ], vietnamese: [''] },
  { japanese: [
    'やすみはなんようびですか。',
    'どようびです。'
  ], vietnamese: [''] },
];

const fromtoQuestionList: VocabularyItem[] = [
  { japanese: [
    'ゆうびんきょくはなんじからなんじまでですか。',
    '９じから３じまでです。'
  ], vietnamese: [''] },
  { japanese: [
    'デパートはなんじからなんじまでですか。',
    '１０じから８じはんまでです。'
  ], vietnamese: [''] },
  { japanese: [
    'としょかんはなんじからなんじまでですか。',
    '９じから６じはんまでです。'
  ], vietnamese: [''] },
  { japanese: [
    'かいしゃはなんじからなんじまでですか。',
    '９じ１５ぷんから５じ４５ぷんまでです。'
  ], vietnamese: [''] },
];

const fromtoActionQuestionList: VocabularyItem[] = [
  { japanese: [
    'まいばんなんじにねますか。',
    '１１じにねます。'
  ], vietnamese: [''] },
  { japanese: [
    'あしたなんじにおきますか。',
    '６じはんにおきます。'
  ], vietnamese: [''] },
  { japanese: [
    'こんばんなんじにねますか。',
    '１２じにねます。'
  ], vietnamese: [''] },
  { japanese: [
    'にちようびなんじにおきますか。',
    '１０じにおきます。'
  ], vietnamese: [''] },
];

registerTranslationEntries([
  ...vocabularyList,
  ...timeList,
  ...whereTimeQuestionList,
  ...dateQuestionList,
  ...fromtoQuestionList,
  ...fromtoActionQuestionList,
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

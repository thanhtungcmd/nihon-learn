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
  { japanese: ['いきます'], vietnamese: ['đi'] },
  { japanese: ['きます'], vietnamese: ['đến'] },
  { japanese: ['かえります'], vietnamese: ['về'] },
  { japanese: ['がっこう'], vietnamese: ['trường học'] },
  { japanese: ['スーパー'], vietnamese: ['siêu thị'] },
  { japanese: ['えき'], vietnamese: ['ga, nhà ga'] },
  { japanese: ['ひこうき'], vietnamese: ['máy bay'] },
  { japanese: ['ふね'], vietnamese: ['thuyền'] },
  { japanese: ['でんしゃ'], vietnamese: ['tàu điện'] },
  { japanese: ['ちかてつ'], vietnamese: ['tàu điện ngầm'] },
  { japanese: ['しんかんせん'], vietnamese: ['tàu điện shinkansen'] },
  { japanese: ['バス'], vietnamese: ['xe buýt'] },
  { japanese: ['タクシー'], vietnamese: ['tắc xi'] },
  { japanese: ['じてんしゃ'], vietnamese: ['xe đạp'] },
  { japanese: ['あるいて'], vietnamese: ['đi bộ'] },
  { japanese: ['ひと'], vietnamese: ['người'] },
  { japanese: ['ともだち'], vietnamese: ['bạn bè'] },
  { japanese: ['かれ'], vietnamese: ['bạn trai'] },
  { japanese: ['かのじょ'], vietnamese: ['bạn gái'] },
  { japanese: ['かぞく'], vietnamese: ['gia đình'] },
  { japanese: ['ひとりで'], vietnamese: ['một mình'] },
  { japanese: ['せんしゅう'], vietnamese: ['tuần trước'] },
  { japanese: ['こんしゅう'], vietnamese: ['tuần này'] },
  { japanese: ['らいしゅう'], vietnamese: ['tuần sau'] },
  { japanese: ['せんげつ'], vietnamese: ['tháng trước'] },
  { japanese: ['こんげつ'], vietnamese: ['tháng này'] },
  { japanese: ['らいげつ'], vietnamese: ['tháng sau'] },
  { japanese: ['きょねん'], vietnamese: ['năm ngoái'] },
  { japanese: ['ことし'], vietnamese: ['năm nay'] },
  { japanese: ['らいねん'], vietnamese: ['năm sau'] },
  { japanese: ['ーねん*'], vietnamese: ['nămー'] },
  { japanese: ['なんねん*'], vietnamese: ['mấy năm'] },
  { japanese: ['ーがつ'], vietnamese: ['thángー'] },
  { japanese: ['なんがつ'], vietnamese: ['tháng mấy'] },
  { japanese: ['ついたち'], vietnamese: ['ngày mùng 1'] },
  { japanese: ['ふつか*'], vietnamese: ['ngày mùng 2'] },
  { japanese: ['みっか*'], vietnamese: ['ngày mùng 3'] },
  { japanese: ['よっか*'], vietnamese: ['ngày mùng 4'] },
  { japanese: ['いつか*'], vietnamese: ['ngày mùng 5'] },
  { japanese: ['むいか*'], vietnamese: ['ngày mùng 6'] },
  { japanese: ['なのか*'], vietnamese: ['ngày mùng 7'] },
  { japanese: ['ようか*'], vietnamese: ['ngày mùng 8'] },
  { japanese: ['ここのか*'], vietnamese: ['ngày mùng 9'] },
  { japanese: ['とおか*'], vietnamese: ['ngày mùng 10'] },
  { japanese: ['じゅうよっか*'], vietnamese: ['ngày 14'] },
  { japanese: ['はつか*'], vietnamese: ['ngày 20'] },
  { japanese: ['にじゅうよっか*'], vietnamese: ['ngày 24'] },
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
<template>
  <section class="card shadow-sm border-0">
    <div class="card-body p-4 p-md-5">
      <h1 class="mt-3 mb-3">Cách chào hỏi</h1>

      <div class="table-responsive">
        <table class="table table-bordered table-hover mb-0 align-middle rounded-3" style="max-width: 1200px; table-layout: fixed; width: 100%;">
          <thead class="table-light">
            <tr>
              <th scope="col" style="width: 40%;">Từ vựng</th>
              <th scope="col" style="width: 45%;">nghĩa</th>
              <th scope="col" style="width: 15%;"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in greetingList" :key="item.japanese.join('-')">
              <td>
                <div v-for="(line, idx) in item.japanese" :key="idx">{{ line }}</div>
              </td>
              <td>
                <div v-for="(line, idx) in item.vietnamese" :key="idx">{{ line }}</div>
              </td>
              <td>
                <IconVolume stroke="2" class="icon-volume" @click="playPronunciation(item.japanese)" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 class="mt-3 mb-3">Số đếm</h1>

      <div class="table-responsive">
        <table class="table table-bordered table-hover mb-0 align-middle rounded-3" style="max-width: 1200px; table-layout: fixed; width: 100%;">
          <thead class="table-light">
            <tr>
              <th scope="col" style="width: 40%;">Từ vựng</th>
              <th scope="col" style="width: 45%;">nghĩa</th>
              <th scope="col" style="width: 15%;"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in numberList" :key="item.japanese.join('-')">
              <td>
                <div v-for="(line, idx) in item.japanese" :key="idx">{{ line }}</div>
              </td>
              <td>
                <div v-for="(line, idx) in item.vietnamese" :key="idx">{{ line }}</div>
              </td>
              <td>
                <IconVolume stroke="2" class="icon-volume" @click="playPronunciation(item.japanese)" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </section>
  <router-link class="btn btn-outline-primary mt-4" to="/">Back</router-link>
</template>

<script setup lang="ts">
import { IconVolume } from '@tabler/icons-vue';
import { playJapanesePronunciation } from '@/services/pollyService';

interface VocabularyItem {
  japanese: string[];
  vietnamese: string[];
}

const greetingList: VocabularyItem[] = [
  { japanese: ['おはよう　ございます'], vietnamese: ['chào buổi sáng'] },
  { japanese: ['こんにちは'], vietnamese: ['chào buổi trưa và chiều'] },
  { japanese: ['こんばんわ'], vietnamese: ['chào buổi tối'] },
  { japanese: ['お', '休みなさい'], vietnamese: ['chúc ngủ ngon'] },
  { japanese: ['さようなら'], vietnamese: ['tạm biệt'] },
  { japanese: ['ありがとう　ございます'], vietnamese: ['cám ơn'] },
  { japanese: ['すみません'], vietnamese: ['xin lỗi'] },
  { japanese: ['お', '願いします'], vietnamese: ['làm phiền anh chị'] },
];

const numberList: VocabularyItem[] = [
  { japanese: ['れい', '(ゼロ)'], vietnamese: ['số 0'] },
  { japanese: ['いち'], vietnamese: ['số 1'] },
  { japanese: ['に'], vietnamese: ['số 2'] },
  { japanese: ['さん'], vietnamese: ['số 3'] },
  { japanese: ['よん', '(し)'], vietnamese: ['số 4'] },
  { japanese: ['ご'], vietnamese: ['số 5'] },
  { japanese: ['ろく'], vietnamese: ['số 6'] },
  { japanese: ['なな', '(しち)'], vietnamese: ['số 7'] },
  { japanese: ['はち'], vietnamese: ['số 8'] },
  { japanese: ['きゅうく'], vietnamese: ['số 9'] },
  { japanese: ['じゅう'], vietnamese: ['số 10'] },
  { japanese: ['じゅうよん'], vietnamese: ['số 14'] },
  { japanese: ['にじゅうなな'], vietnamese: ['số 27'] },
  { japanese: ['さんじゅう'], vietnamese: ['số 30'] },
  { japanese: ['よんじゅうさん'], vietnamese: ['số 43'] },
  { japanese: ['はちじゅうなな'], vietnamese: ['số 87'] },
  { japanese: ['きゅうじゅうきゅう'], vietnamese: ['số 99'] },
  { japanese: ['ろくじゅうろく'], vietnamese: ['số 66'] },
  { japanese: ['ななじゅうさん'], vietnamese: ['số 73'] },
  { japanese: ['ごじゅうはち'], vietnamese: ['số 58'] },
  { japanese: ['ひゃく'], vietnamese: ['số 100'] },
];

async function playPronunciation(text: string | string[]) {
  try {
    const textToPlay = Array.isArray(text) ? text.join('') : text;
    await playJapanesePronunciation(textToPlay);
  } catch (error) {
    console.error('Failed to play pronunciation:', error);
  }
}
</script>
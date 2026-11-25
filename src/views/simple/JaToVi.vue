<script setup lang="ts">
import { computed, ref } from 'vue';
import { IconVolume } from '@tabler/icons-vue';
import { useSelectionActions } from '@/composables/useSelectionActions';
import { unit1Kanji } from '@/data/n5/kanji/unit1Kanji';
import { unit1Vocabulary, unit2Vocabulary, unit3Vocabulary, unit4Vocabulary, unit5Vocabulary, unit6Vocabulary, type UnitVocabularyItem } from '@/data/n5/unitVocabulary';
import { playJapanesePronunciation } from '@/services/pollyService';

interface Entry { japanese: string; speak: string; vietnamese: string; source: string; searchable: string[] }

const play = (text: string) => playJapanesePronunciation(text).catch(console.error);
useSelectionActions({ onAction: play, shortcutKey: 'k' });

// Ignore width, hiragana/katakana, case, spaces and the ～ / - markers so "ニホン" finds "にほん".
const normalize = (value: string) => value.normalize('NFKC').replace(/[\u30a1-\u30f6]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60)).toLocaleLowerCase().replace(/[\s~\-・·]+/g, '');

const units: UnitVocabularyItem[][] = [unit1Vocabulary, unit2Vocabulary, unit3Vocabulary, unit4Vocabulary, unit5Vocabulary, unit6Vocabulary];
const entries: Entry[] = [
  ...units.flatMap((items, index) => items.flatMap((item) => {
    if (!item.vietnamese?.length) return [];
    return [{ japanese: item.japanese.join(' · '), speak: item.japanese[0]!, vietnamese: item.vietnamese.join(' · '), source: `Từ vựng bài ${index + 1}`, searchable: item.japanese.map(normalize) }];
  })),
  ...unit1Kanji.map((item) => ({
    japanese: `${item.kanji}（${[...item.kun, ...item.on].join('・')}）`,
    speak: (item.kun[0] ?? item.on[0]!).replace(/-/g, ''),
    vietnamese: item.meaning,
    source: 'Kanji bài 1',
    searchable: [item.kanji, ...item.kun, ...item.on].map(normalize),
  })),
];

const query = ref('');
const results = computed(() => {
  const term = normalize(query.value);
  if (!term) return [];
  // Exact matches first, then prefixes, then anything that contains the term.
  const rank = (entry: Entry) => entry.searchable.includes(term) ? 0 : entry.searchable.some((value) => value.startsWith(term)) ? 1 : 2;
  return entries
    .filter((entry) => entry.searchable.some((value) => value.includes(term)))
    .sort((first, second) => rank(first) - rank(second))
    .slice(0, 50);
});
</script>

<template>
  <section class="card shadow-sm border-0">
    <div class="card-body p-4 p-md-5">
      <h1 class="mb-3">Tra từ: tiếng Nhật → tiếng Việt</h1>
      <input v-model="query" class="form-control form-control-lg mb-3" type="search" placeholder="Nhập từ khóa tiếng Nhật, ví dụ: せんせい" aria-label="Từ khóa tiếng Nhật" autofocus />

      <p v-if="!query.trim()" class="text-secondary mb-0">Tìm trong từ vựng bài 1–6 và kanji bài 1. Hiragana và katakana được coi là như nhau.</p>
      <p v-else-if="!results.length" class="text-secondary mb-0">Không tìm thấy kết quả phù hợp.</p>
      <template v-else>
        <p class="text-secondary">{{ results.length }} kết quả{{ results.length === 50 ? ' (hiển thị 50 đầu tiên)' : '' }}</p>
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead>
              <tr><th scope="col">Tiếng Nhật</th><th scope="col">Nghĩa</th><th scope="col">Nguồn</th></tr>
            </thead>
            <tbody>
              <tr v-for="entry in results" :key="entry.source + entry.japanese + entry.vietnamese">
                <td class="text-nowrap">
                  <button type="button" class="play-button" :aria-label="`Phát âm ${entry.japanese}`" @click="play(entry.speak)"><IconVolume :size="18" /></button>
                  {{ entry.japanese }}
                </td>
                <td>{{ entry.vietnamese }}</td>
                <td class="text-secondary text-nowrap">{{ entry.source }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
td, th { font-size: 18px; }
.play-button { display: inline-grid; width: 28px; height: 28px; place-items: center; margin-right: 4px; border: 0; border-radius: 6px; background: transparent; color: var(--tblr-primary); cursor: pointer; }
.play-button:hover, .play-button:focus-visible { background: rgba(59, 130, 246, .15); }
</style>

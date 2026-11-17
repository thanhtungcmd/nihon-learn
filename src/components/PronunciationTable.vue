<template>
  <section class="lesson-section" :data-section-title="title || 'Từ vựng'">
    <div v-if="title || $slots.title" class="mt-5 text">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="mt-5 table-responsive">
      <table class="table table-bordered table-hover mb-0 align-middle rounded-3 pronunciation-table" :class="{ 'with-vietnamese': showVietnamese }">
        <thead>
          <tr>
            <th scope="col"></th>
            <th v-if="showVietnamese" scope="col">Tiếng Việt</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="`${item.japanese?.join('-')}-${index}`">
            <td>
              <div v-for="(line, lineIndex) in item.japanese" :key="lineIndex">{{ line }}</div>
            </td>
            <td v-if="showVietnamese">
              <div v-for="(line, lineIndex) in item.vietnamese" :key="lineIndex">{{ line }}</div>
            </td>
            <td class="play-cell">
              <button type="button" class="play-button" aria-label="Phát âm" @click="playPronunciation(item.japanese?.join('') ?? '')">
                <IconVolume stroke="2" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IconVolume } from '@tabler/icons-vue';
import { playJapanesePronunciation } from '@/services/pollyService';

export type PronunciationItem = {
  japanese?: string[];
  vietnamese?: string[];
};

defineProps<{
  items: PronunciationItem[];
  title?: string;
  showVietnamese?: boolean;
}>();
async function playPronunciation(text: string) {
  try {
    await playJapanesePronunciation(text);
  } catch (error) {
    console.error('Failed to play pronunciation:', error);
  }
}
</script>

<style scoped>
.pronunciation-table {
  max-width: 1200px;
  table-layout: fixed;
  width: 100%;
}

.pronunciation-table th:first-child { width: 90%; }
.pronunciation-table th:last-child { width: 10%; }
.pronunciation-table.with-vietnamese th:first-child { width: 45%; }

.play-cell { text-align: center; }
.play-button { display: inline-grid; width: 44px; height: 44px; place-items: center; border: 0; border-radius: 50%; background: transparent; color: var(--tblr-secondary-color); cursor: pointer; }
.play-button:hover, .play-button:focus-visible { background: rgba(59, 130, 246, .15); color: var(--tblr-primary); }

@media (max-width: 767px) {
  .pronunciation-table th:first-child { width: auto; }
  .pronunciation-table th:last-child { width: 56px; }
  .pronunciation-table.with-vietnamese th:first-child { width: 45%; }
}
</style>

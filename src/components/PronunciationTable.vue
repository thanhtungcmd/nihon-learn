<template>
  <div v-if="title || $slots.title" class="mt-5 text">
    <slot name="title">{{ title }}</slot>
  </div>
  <div class="mt-5 table-responsive">
    <table class="table table-bordered table-hover mb-0 align-middle rounded-3 pronunciation-table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="`${item.japanese?.join('-')}-${index}`">
          <td>
            <div v-for="(line, lineIndex) in item.japanese" :key="lineIndex">{{ line }}</div>
          </td>
          <td>
            <IconVolume
              stroke="2"
              class="icon-volume"
              aria-label="Phát âm"
              @click="playPronunciation(item.japanese?.join('') ?? '')"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { IconVolume } from '@tabler/icons-vue';
import { playJapanesePronunciation } from '@/services/pollyService';

export type PronunciationItem = {
  japanese?: string[];
};

defineProps<{
  items: PronunciationItem[];
  title?: string;
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

.icon-volume { cursor: pointer; }
</style>

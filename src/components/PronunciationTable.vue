<template>
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
              @click="emit('pronounce', item.japanese?.join('') ?? '')"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { IconVolume } from '@tabler/icons-vue';

export type PronunciationItem = {
  japanese?: string[];
};

defineProps<{ items: PronunciationItem[] }>();
const emit = defineEmits<{ pronounce: [text: string] }>();
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

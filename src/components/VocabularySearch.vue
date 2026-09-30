<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { searchVocabulary, type VocabularySearchResult } from '@/services/globalVocabularySearch';

const router = useRouter();
const isOpen = ref(false);
const query = ref('');
const input = ref<HTMLInputElement | null>(null);
const results = computed(() => searchVocabulary(query.value));

function open() {
  isOpen.value = true;
  nextTick(() => input.value?.focus());
}

function close() {
  isOpen.value = false;
  query.value = '';
}

function normalizeText(value: string) {
  return value.replace(/\s+/g, '').trim();
}

async function openResult(result: VocabularySearchResult) {
  close();
  await router.push(result.route);
  await nextTick();

  const targetText = normalizeText(result.japanese.join(''));
  const row = [...document.querySelectorAll('tr')].find((element) =>
    normalizeText(element.textContent ?? '').includes(targetText),
  );
  if (!row) return;

  row.scrollIntoView({ behavior: 'smooth', block: 'center' });
  row.classList.add('vocabulary-search-target');
  window.setTimeout(() => row.classList.remove('vocabulary-search-target'), 1800);
}

function handleShortcut(event: KeyboardEvent) {
  if (event.ctrlKey && event.code === 'Space') {
    event.preventDefault();
    isOpen.value ? close() : open();
  }
  if (event.key === 'Escape' && isOpen.value) close();
}

onMounted(() => window.addEventListener('keydown', handleShortcut));
onBeforeUnmount(() => window.removeEventListener('keydown', handleShortcut));
</script>

<template>
  <div v-if="isOpen" class="vocabulary-search-backdrop" @click.self="close">
    <section class="vocabulary-search" role="dialog" aria-modal="true" aria-label="Tìm từ vựng">
      <div class="d-flex align-items-center gap-2 px-3 pt-3">
        <input
          ref="input"
          v-model="query"
          class="form-control form-control-lg"
          type="search"
          placeholder="Tìm tiếng Nhật hoặc tiếng Việt…"
          aria-label="Từ khóa tìm kiếm"
          @keydown.enter="results[0] && openResult(results[0])"
        />
        <button type="button" class="btn btn-outline-secondary" aria-label="Đóng tìm kiếm" @click="close">Esc</button>
      </div>
      <div class="px-3 pt-2 text-secondary small">Tìm gần đúng trong toàn bộ từ vựng · Ctrl + Space để đóng</div>
      <div class="vocabulary-search-results p-3">
        <p v-if="!query.trim()" class="text-secondary mb-0">Nhập từ vựng, cách đọc hoặc nghĩa tiếng Việt.</p>
        <p v-else-if="!results.length" class="text-secondary mb-0">Không tìm thấy kết quả phù hợp.</p>
        <button v-for="result in results" :key="`${result.route}-${result.japanese.join('')}`" type="button" class="vocabulary-result" @click="openResult(result)">
          <span class="vocabulary-result-japanese">{{ result.japanese.join(' · ') }}</span>
          <span class="vocabulary-result-vietnamese">{{ result.vietnamese.join(' · ') }}</span>
          <small>{{ result.source }}</small>
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.vocabulary-search-backdrop { position: fixed; inset: 0; z-index: 3000; display: grid; place-items: start center; padding: min(12vh, 100px) 16px 16px; background: rgba(15, 23, 42, 0.45); }
.vocabulary-search { width: min(680px, 100%); overflow: hidden; border-radius: 12px; background: white; box-shadow: 0 20px 50px rgba(15, 23, 42, 0.3); }
.vocabulary-search-results { max-height: min(55vh, 480px); overflow-y: auto; }
.vocabulary-result { display: grid; width: 100%; grid-template-columns: minmax(0, 1fr) auto; gap: 2px 16px; padding: 12px; border: 0; border-radius: 8px; background: transparent; text-align: left; }
.vocabulary-result:hover, .vocabulary-result:focus-visible { background: #f1f5f9; }
.vocabulary-result-japanese { font-size: 20px; font-weight: 600; }
.vocabulary-result-vietnamese { grid-column: 1; color: #475569; }
.vocabulary-result small { grid-column: 2; grid-row: 1 / span 2; align-self: center; color: #64748b; }
:global(.vocabulary-search-target) { animation: vocabulary-search-flash 1.8s ease-out; }
@keyframes vocabulary-search-flash { 0%, 60% { background-color: #fef3c7; } 100% { background-color: transparent; } }
</style>

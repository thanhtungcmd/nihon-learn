<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useSelectionActions } from '@/composables/useSelectionActions';
import { findTranslationForText } from '@/services/translationRegistry';
import { searchVocabulary, type VocabularySearchResult } from '@/services/globalVocabularySearch';

const { showContextMenu, contextMenuStyle, selectedText, runSelectedAction } = useSelectionActions();
const showTranslation = ref(false);
const translationText = ref('');
const router = useRouter();
const searchOpen = ref(false);
const searchQuery = ref('');
const searchInput = ref<HTMLInputElement | null>(null);
const searchResults = computed(() => searchVocabulary(searchQuery.value));

function openSearch() {
  searchOpen.value = true;
  nextTick(() => searchInput.value?.focus());
}

function closeSearch() {
  searchOpen.value = false;
  searchQuery.value = '';
}

function normalizeVocabularyText(value: string) {
  return value.replace(/\s+/g, '').trim();
}

async function openResult(result: VocabularySearchResult) {
  closeSearch();
  await router.push(result.route);
  await nextTick();

  const targetText = normalizeVocabularyText(result.japanese.join(''));
  const row = [...document.querySelectorAll('tr')].find((element) =>
    normalizeVocabularyText(element.textContent ?? '').includes(targetText),
  );
  if (!row) return;

  row.scrollIntoView({ behavior: 'smooth', block: 'center' });
  row.classList.add('vocabulary-search-target');
  window.setTimeout(() => row.classList.remove('vocabulary-search-target'), 1800);
}

function handleShortcut(event: KeyboardEvent) {
  if (event.ctrlKey && event.code === 'Space') {
    event.preventDefault();
    if (searchOpen.value) closeSearch(); else openSearch();
  }
  if (event.key === 'Escape' && searchOpen.value) closeSearch();
}

onMounted(() => window.addEventListener('keydown', handleShortcut));
onBeforeUnmount(() => window.removeEventListener('keydown', handleShortcut));

function showVietnameseMeaning() {
  const selection = selectedText.value || window.getSelection()?.toString().trim() || '';
  if (!selection) return;

  const translatedMeaning = findTranslationForText(selection);
  translationText.value = translatedMeaning || selection;
  showTranslation.value = true;
  showContextMenu.value = false;
}
</script>

<template>
  <main class="container py-4 py-md-5">
    <div v-if="searchOpen" class="vocabulary-search-backdrop" @click.self="closeSearch">
      <section class="vocabulary-search" role="dialog" aria-modal="true" aria-label="Tìm từ vựng">
        <div class="d-flex align-items-center gap-2 px-3 pt-3">
          <input
            ref="searchInput"
            v-model="searchQuery"
            class="form-control form-control-lg"
            type="search"
            placeholder="Tìm tiếng Nhật hoặc tiếng Việt…"
            aria-label="Từ khóa tìm kiếm"
            @keydown.enter="searchResults[0] && openResult(searchResults[0])"
          />
          <button type="button" class="btn btn-outline-secondary" aria-label="Đóng tìm kiếm" @click="closeSearch">Esc</button>
        </div>
        <div class="px-3 pt-2 text-secondary small">Tìm gần đúng trong toàn bộ từ vựng · Ctrl + Space để đóng</div>
        <div class="vocabulary-search-results p-3">
          <p v-if="!searchQuery.trim()" class="text-secondary mb-0">Nhập từ vựng, cách đọc hoặc nghĩa tiếng Việt.</p>
          <p v-else-if="!searchResults.length" class="text-secondary mb-0">Không tìm thấy kết quả phù hợp.</p>
          <button v-for="result in searchResults" :key="`${result.route}-${result.japanese.join('')}`" type="button" class="vocabulary-result" @click="openResult(result)">
            <span class="vocabulary-result-japanese">{{ result.japanese.join(' · ') }}</span>
            <span class="vocabulary-result-vietnamese">{{ result.vietnamese.join(' · ') }}</span>
            <small>{{ result.source }}</small>
          </button>
        </div>
      </section>
    </div>

    <div v-if="showContextMenu" class="context-menu" :style="contextMenuStyle">
      <button type="button" class="btn btn-sm btn-outline-primary w-100 mb-2" @click="() => runSelectedAction()">
        Phát âm
      </button>
      <button type="button" class="btn btn-sm btn-outline-success w-100" @click="showVietnameseMeaning">
        Hiện tiếng Việt
      </button>
    </div>

    <div v-if="showTranslation" class="translation-card">
      <div class="fw-semibold mb-1">Tiếng Việt</div>
      <div>{{ translationText }}</div>
    </div>

    <router-view />
  </main>
</template>

<style>
  /* @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap'); */
  /* @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;700&display=swap'); */
  @import url('https://fonts.googleapis.com/css2?family=Klee+One:wght@400;600&display=swap');

  body {
    /* font-family: 'Noto Sans JP', sans-serif !important; */
    /* font-family: 'Noto Serif JP', serif !important; */
    font-family: "Klee One", serif;
  }

  table td {
    font-size: 32px;
  }

  .text {
    font-size: 36px;
    line-height: 170%;
  }

  rt {
    font-size: 22px;
  }

  .context-menu {
    position: fixed;
    z-index: 2000;
    background: white;
    border: 1px solid #d0d7de;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);
    padding: 6px;
    min-width: 150px;
  }

  .context-menu .btn {
    text-align: left;
  }

  .translation-card {
    position: fixed;
    right: 16px;
    bottom: 16px;
    z-index: 2100;
    max-width: 320px;
    background: white;
    border: 1px solid #d0d7de;
    border-radius: 10px;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.16);
    padding: 12px 14px;
    font-size: 16px;
    line-height: 1.5;
  }

  .vocabulary-search-backdrop {
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: start center;
    padding: min(12vh, 100px) 16px 16px;
    background: rgba(15, 23, 42, 0.45);
  }

  .vocabulary-search {
    width: min(680px, 100%);
    overflow: hidden;
    border-radius: 12px;
    background: white;
    box-shadow: 0 20px 50px rgba(15, 23, 42, 0.3);
  }

  .vocabulary-search-results {
    max-height: min(55vh, 480px);
    overflow-y: auto;
  }

  .vocabulary-result {
    display: grid;
    width: 100%;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 2px 16px;
    padding: 12px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    text-align: left;
  }

  .vocabulary-result:hover,
  .vocabulary-result:focus-visible { background: #f1f5f9; }

  .vocabulary-result-japanese { font-size: 20px; font-weight: 600; }
  .vocabulary-result-vietnamese { grid-column: 1; color: #475569; }
  .vocabulary-result small { grid-column: 2; grid-row: 1 / span 2; align-self: center; color: #64748b; }

  .vocabulary-search-target {
    animation: vocabulary-search-flash 1.8s ease-out;
  }

  @keyframes vocabulary-search-flash {
    0%, 60% { background-color: #fef3c7; }
    100% { background-color: transparent; }
  }
</style>

<script setup lang="ts">
import { ref } from 'vue';
import SideNavigation from '@/components/SideNavigation.vue';
import VocabularySearch from '@/components/VocabularySearch.vue';
import { useSelectionActions } from '@/composables/useSelectionActions';
import { findTranslationForText } from '@/services/translationRegistry';

const { showContextMenu, contextMenuStyle, selectedText, runSelectedAction } = useSelectionActions();
const showTranslation = ref(false);
const translationText = ref('');

function showVietnameseMeaning() {
  const selection = selectedText.value || window.getSelection()?.toString().trim() || '';
  if (!selection) return;

  translationText.value = findTranslationForText(selection) || selection;
  showTranslation.value = true;
  showContextMenu.value = false;
}
</script>

<template>
  <div class="app-shell">
    <SideNavigation />
    <main class="app-content py-4 py-md-5">
      <VocabularySearch />

    <div v-if="showContextMenu" class="context-menu" :style="contextMenuStyle">
      <button type="button" class="btn btn-sm btn-outline-primary w-100 mb-2" @click="runSelectedAction()">Phát âm</button>
      <button type="button" class="btn btn-sm btn-outline-success w-100" @click="showVietnameseMeaning">Hiện tiếng Việt</button>
    </div>

    <div v-if="showTranslation" class="translation-card">
      <div class="fw-semibold mb-1">Tiếng Việt</div>
      <div>{{ translationText }}</div>
    </div>

      <router-view />
    </main>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Klee+One:wght@400;600&display=swap');

html { scrollbar-gutter: stable; }
body { margin: 0; background: #f8fafc; font-family: "Klee One", serif; }
.app-shell { display: flex; min-height: 100vh; }
.app-content { width: min(100%, 1280px); min-width: 0; margin: 0 auto; padding-right: 24px; padding-left: 24px; }
table td { font-size: 32px; }
.text { font-size: 36px; line-height: 170%; }
rt { font-size: 22px; }
.context-menu { position: fixed; z-index: 2000; min-width: 150px; padding: 6px; border: 1px solid #d0d7de; border-radius: 8px; background: white; box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12); }
.context-menu .btn { text-align: left; }
.translation-card { position: fixed; right: 16px; bottom: 16px; z-index: 2100; max-width: 320px; padding: 12px 14px; border: 1px solid #d0d7de; border-radius: 10px; background: white; box-shadow: 0 10px 24px rgba(15, 23, 42, 0.16); font-size: 16px; line-height: 1.5; }

@media (max-width: 767px) {
  .app-shell { display: block; }
  .app-content { padding-right: 16px; padding-left: 16px; }
}
</style>

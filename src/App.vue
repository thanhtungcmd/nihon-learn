<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import LessonTableOfContents from '@/components/LessonTableOfContents.vue';
import SideNavigation from '@/components/SideNavigation.vue';
import AwsLogin from '@/components/AwsLogin.vue';
import { awsClients } from '@/services/awsSession';
import VocabularySearch from '@/components/VocabularySearch.vue';
import { useSelectionActions } from '@/composables/useSelectionActions';
import { findTranslationForText } from '@/services/translationRegistry';
import { breadcrumbsFor } from '@/data/navigation';
import { playJapanesePronunciation } from '@/services/pollyService';
import { translateJapaneseToVietnamese } from '@/services/translateService';

const { showContextMenu, contextMenuStyle, selectedText, runSelectedAction } = useSelectionActions();
const showTranslation = ref(false);
const translationText = ref('');
const route = useRoute();
const isN5Lesson = computed(() => route.path.startsWith('/n5/'));
const breadcrumbs = computed(() => breadcrumbsFor(route.path));

watch(breadcrumbs, (crumbs) => {
  const title = crumbs.slice(1).map((crumb) => crumb.label).reverse().join(' · ');
  document.title = title ? `${title} – Nihon Learn` : 'Nihon Learn';
}, { immediate: true });

function getSelection() {
  return selectedText.value || window.getSelection()?.toString().trim() || '';
}

async function showVietnameseMeaning() {
  const selection = getSelection();
  if (!selection) return;

  showContextMenu.value = false;
  translationText.value = findTranslationForText(selection);
  if (!translationText.value) {
    translationText.value = 'Đang dịch…';
    showTranslation.value = true;
    try {
      translationText.value = (await translateJapaneseToVietnamese(selection)) || selection;
    } catch (error) {
      console.error('Translation failed:', error);
      translationText.value = selection;
    }
  }
  showTranslation.value = true;
}

function playNormalSpeed() {
  showContextMenu.value = false;
  void playJapanesePronunciation(getSelection(), undefined, 100).catch(console.error);
}

async function copySelection() {
  showContextMenu.value = false;
  await navigator.clipboard.writeText(getSelection());
}

function searchSelection() {
  showContextMenu.value = false;
  window.dispatchEvent(new CustomEvent('open-vocabulary-search', { detail: getSelection() }));
}
</script>

<template>
  <AwsLogin v-if="!awsClients" />
  <div v-else class="app-shell">
    <SideNavigation />
    <main class="app-content py-4 py-md-5">
      <div class="lesson-layout" :class="{ 'has-toc': isN5Lesson }">
        <div class="lesson-content">
          <VocabularySearch />

          <div v-if="showContextMenu" class="context-menu" :style="contextMenuStyle">
            <div class="context-menu-row">
              <button type="button" class="context-menu-item" @click="runSelectedAction()">🔊 Chậm</button>
              <button type="button" class="context-menu-item" @click="playNormalSpeed">🔊 Thường</button>
            </div>
            <button type="button" class="context-menu-item" @click="showVietnameseMeaning">Hiện tiếng Việt</button>
            <button type="button" class="context-menu-item" @click="searchSelection">Tìm trong từ vựng</button>
            <button type="button" class="context-menu-item" @click="copySelection">Sao chép</button>
          </div>

          <div v-if="showTranslation" class="translation-card">
            <div class="fw-semibold mb-1">Tiếng Việt</div>
            <div>{{ translationText }}</div>
          </div>

          <nav v-if="breadcrumbs.length" aria-label="Breadcrumb">
            <ol class="breadcrumb mb-3">
              <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item" :class="{ active: index === breadcrumbs.length - 1 }" :aria-current="index === breadcrumbs.length - 1 ? 'page' : undefined">
                <RouterLink v-if="crumb.to && index < breadcrumbs.length - 1" :to="crumb.to">{{ crumb.label }}</RouterLink>
                <template v-else>{{ crumb.label }}</template>
              </li>
            </ol>
          </nav>

          <router-view />
        </div>
        <LessonTableOfContents v-if="isN5Lesson" />
      </div>
    </main>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Klee+One:wght@400;600&display=swap');

html { scrollbar-gutter: stable; }
body { margin: 0; background: var(--tblr-body-bg); font-family: "Klee One", serif; }
.app-shell { display: flex; min-height: 100vh; }
.app-content { width: min(100%, 1440px); min-width: 0; margin: 0 auto; padding-right: 24px; padding-left: 24px; }
.lesson-layout { min-width: 0; }
.lesson-layout.has-toc { display: flex; align-items: flex-start; gap: 24px; }
.lesson-content { min-width: 0; flex: 1 1 auto; }
.lesson-section { scroll-margin-top: 24px; }
table td { font-size: clamp(20px, 4.5vw, 32px); }
.text { font-size: clamp(24px, 5vw, 36px); line-height: 170%; }
rt { font-size: 22px; }
.context-menu { position: fixed; z-index: 2000; min-width: 170px; padding: 4px; border: 1px solid var(--tblr-border-color); border-radius: 8px; background: var(--tblr-bg-surface); box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12); }
.context-menu-row { display: flex; border-bottom: 1px solid var(--tblr-border-color); margin-bottom: 4px; padding-bottom: 4px; }
.context-menu-item { display: block; flex: 1 1 0; padding: 5px 10px; border: 0; border-radius: 6px; background: transparent; color: var(--tblr-body-color); font-size: 14px; line-height: 1.4; text-align: left; white-space: nowrap; cursor: pointer; }
.context-menu-item:hover, .context-menu-item:focus-visible { background: rgba(59, 130, 246, .15); color: var(--tblr-primary); outline: none; }
.context-menu > .context-menu-item { width: 100%; }
.translation-card { position: fixed; right: 16px; bottom: 16px; z-index: 2100; max-width: 320px; padding: 12px 14px; border: 1px solid var(--tblr-border-color); border-radius: 10px; background: var(--tblr-bg-surface); box-shadow: 0 10px 24px rgba(15, 23, 42, 0.16); font-size: 16px; line-height: 1.5; }

@media (max-width: 767px) {
  .app-shell { display: block; }
  .app-content { padding-right: 16px; padding-left: 16px; }
  .lesson-layout.has-toc { display: block; }
  .lesson-toc { display: none; }
}
</style>

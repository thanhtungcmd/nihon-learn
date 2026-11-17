<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

type SectionLink = {
  element: HTMLElement;
  title: string;
};

const route = useRoute();
const sections = ref<SectionLink[]>([]);

function refreshSections() {
  sections.value = Array.from(document.querySelectorAll<HTMLElement>('.lesson-section'))
    .map((element) => ({
      element,
      title: element.dataset.sectionTitle || 'Nội dung',
    }));
}

function scrollToSection(section: SectionLink) {
  section.element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

let frameId = 0;
function scheduleRefresh() {
  cancelAnimationFrame(frameId);
  nextTick(() => {
    frameId = requestAnimationFrame(refreshSections);
  });
}

onMounted(scheduleRefresh);
watch(() => route.fullPath, scheduleRefresh);
onBeforeUnmount(() => cancelAnimationFrame(frameId));
</script>

<template>
  <aside v-if="sections.length" class="lesson-toc" aria-label="Mục lục bài học">
    <div class="lesson-toc-title">Trong bài này</div>
    <nav>
      <button v-for="section in sections" :key="section.title" type="button" @click="scrollToSection(section)">
        {{ section.title }}
      </button>
    </nav>
  </aside>
</template>

<style scoped>
.lesson-toc {
  position: sticky;
  top: 24px;
  flex: 0 0 240px;
  align-self: start;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  padding: 16px;
  border: 1px solid var(--tblr-border-color);
  border-radius: 12px;
  background: var(--tblr-bg-surface);
}

.lesson-toc-title {
  margin-bottom: 8px;
  color: var(--tblr-secondary-color);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
}

.lesson-toc button {
  display: block;
  width: 100%;
  padding: 8px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--tblr-secondary-color);
  font: inherit;
  font-size: 15px;
  line-height: 1.35;
  text-align: left;
  cursor: pointer;
}

.lesson-toc button:hover,
.lesson-toc button:focus-visible {
  background: rgba(59, 130, 246, .15);
  color: var(--tblr-primary);
  outline: none;
}
</style>

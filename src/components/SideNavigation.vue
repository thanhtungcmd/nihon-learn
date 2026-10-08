<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';

const isCollapsed = ref(false);
const isResizing = ref(false);
const minimumWidth = 180;
const maximumWidth = 420;
const savedWidth = Number(window.localStorage.getItem('sidebar-width'));
const width = ref(Number.isFinite(savedWidth) && savedWidth >= minimumWidth && savedWidth <= maximumWidth ? savedWidth : 240);

function resize(event: PointerEvent) {
  width.value = Math.min(maximumWidth, Math.max(minimumWidth, event.clientX));
}

function stopResize() {
  window.removeEventListener('pointermove', resize);
  window.removeEventListener('pointerup', stopResize);
  isResizing.value = false;
  window.localStorage.setItem('sidebar-width', String(width.value));
}

function startResize(event: PointerEvent) {
  if (isCollapsed.value) return;
  event.preventDefault();
  isResizing.value = true;
  (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  window.addEventListener('pointermove', resize);
  window.addEventListener('pointerup', stopResize, { once: true });
}

onBeforeUnmount(stopResize);

const navigationGroups = [
  {
    label: 'Cơ bản',
    links: [
      { to: '/', label: 'Trang chủ' },
      { to: '/hiragana', label: 'Hiragana' },
      { to: '/yoon', label: 'Yoon' },
      { to: '/katakana', label: 'Katakana' },
      { to: '/vowel', label: 'Nguyên âm' },
      { to: '/hello', label: 'Chào hỏi' },
      { to: '/polite-verb-forms', label: 'Chia động từ (ます形)' },
    ],
  },
  {
    label: 'JLPT N5',
    links: Array.from({ length: 5 }, (_, index) => ({
      to: `/n5/unit${index + 1}`,
      label: `Bài ${index + 1}`,
    })),
  },
];
</script>

<template>
  <aside class="side-navigation" :class="{ 'is-collapsed': isCollapsed, 'is-resizing': isResizing }" :style="{ '--sidebar-width': `${width}px` }">
    <div class="navigation-header">
      <RouterLink v-show="!isCollapsed" to="/" class="brand">Nihon Learn</RouterLink>
      <button
        type="button"
        class="menu-toggle"
        :aria-label="isCollapsed ? 'Mở menu' : 'Thu gọn menu'"
        :aria-expanded="!isCollapsed"
        @click="isCollapsed = !isCollapsed"
      >
        ☰
      </button>
    </div>
    <nav v-show="!isCollapsed" aria-label="Điều hướng bài học">
      <section v-for="group in navigationGroups" :key="group.label" class="navigation-group">
        <h2>{{ group.label }}</h2>
        <RouterLink v-for="link in group.links" :key="link.to" :to="link.to" class="navigation-link">
          {{ link.label }}
        </RouterLink>
      </section>
    </nav>
    <div class="resize-handle" role="separator" aria-orientation="vertical" aria-label="Kéo để đổi độ rộng menu" @pointerdown="startResize" />
  </aside>
</template>

<style scoped>
.side-navigation { position: sticky; top: 0; align-self: start; width: var(--sidebar-width); min-height: 100vh; padding: 20px 16px; border-right: 1px solid #e2e8f0; background: #fff; transition: width .2s ease, padding .2s ease; }
.side-navigation.is-collapsed { width: 64px; padding-right: 8px; padding-left: 8px; }
.side-navigation.is-resizing { transition: none; user-select: none; }
.navigation-header { display: flex; align-items: center; justify-content: space-between; margin: 0 0 28px; }
.brand { display: block; margin: 0 8px; color: #0f172a; font-size: 22px; font-weight: 700; text-decoration: none; white-space: nowrap; }
.menu-toggle { display: grid; flex: 0 0 auto; width: 36px; height: 36px; place-items: center; border: 0; border-radius: 8px; background: transparent; color: #475569; font-size: 20px; cursor: pointer; }
.menu-toggle:hover, .menu-toggle:focus-visible { background: #f1f5f9; color: #0f172a; }
.resize-handle { position: absolute; top: 0; right: -4px; width: 8px; height: 100%; cursor: col-resize; touch-action: none; }
.resize-handle:hover, .resize-handle:active { background: rgba(59, 130, 246, .3); }
.navigation-group + .navigation-group { margin-top: 24px; }
.navigation-group h2 { margin: 0 8px 8px; color: #64748b; font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
.navigation-link { display: block; padding: 9px 12px; border-radius: 8px; color: #475569; text-decoration: none; }
.navigation-link:hover { background: #f1f5f9; color: #0f172a; }
.navigation-link.router-link-exact-active { background: #dbeafe; color: #1d4ed8; font-weight: 700; }

@media (max-width: 767px) {
  .side-navigation, .side-navigation.is-collapsed { position: static; display: flex; width: 100%; min-height: auto; align-items: center; gap: 16px; padding: 12px 16px; overflow-x: auto; border-right: 0; border-bottom: 1px solid #e2e8f0; }
  .navigation-header { flex: 0 0 auto; margin: 0; }
  .brand { margin: 0; font-size: 18px; }
  .menu-toggle { display: none; }
  .resize-handle { display: none; }
  .side-navigation nav { display: flex; gap: 16px; }
  .navigation-group { display: flex; gap: 4px; align-items: center; white-space: nowrap; }
  .navigation-group + .navigation-group { margin-top: 0; }
  .navigation-group h2 { display: none; }
  .navigation-link { padding: 7px 10px; }
}
</style>

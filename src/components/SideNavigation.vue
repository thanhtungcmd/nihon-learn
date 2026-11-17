<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { IconMoon, IconSun } from '@tabler/icons-vue';
import { useTheme } from '@/composables/useTheme';
import { basicLinks, n5Units, unitLinks } from '@/data/navigation';

const { theme, toggleTheme } = useTheme();
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
  { label: 'Cơ bản', links: [{ to: '/', label: 'Trang chủ' }, ...basicLinks] },
];

const route = useRoute();
const isActiveUnit = (unit: number) => route.path.startsWith(`/n5/unit${unit}`);
const isMobile = () => window.matchMedia('(max-width: 767px)').matches;

isCollapsed.value = isMobile();
watch(() => route.path, () => {
  if (isMobile()) isCollapsed.value = true;
});
</script>

<template>
  <aside class="side-navigation" :class="{ 'is-collapsed': isCollapsed, 'is-resizing': isResizing }" :style="{ '--sidebar-width': `${width}px` }">
    <div class="navigation-header">
      <RouterLink v-show="!isCollapsed" to="/" class="brand">Nihon Learn</RouterLink>
      <div class="header-actions">
        <button
          v-show="!isCollapsed"
          type="button"
          class="menu-toggle"
          :aria-label="theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'"
          @click="toggleTheme"
        >
          <IconSun v-if="theme === 'dark'" :size="20" />
          <IconMoon v-else :size="20" />
        </button>
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
    </div>
    <nav v-show="!isCollapsed" aria-label="Điều hướng bài học">
      <details v-for="group in navigationGroups" :key="group.label" class="navigation-group" open>
        <summary>{{ group.label }}</summary>
        <div class="navigation-links">
          <RouterLink v-for="link in group.links" :key="link.to" :to="link.to" class="navigation-link">
            {{ link.label }}
          </RouterLink>
        </div>
      </details>
      <details class="navigation-group" open>
        <summary>JLPT N5</summary>
        <details v-for="unit in n5Units" :key="unit" class="unit-group" :open="isActiveUnit(unit)">
          <summary class="unit-summary">Bài {{ unit }}</summary>
          <div class="navigation-links unit-links">
            <RouterLink v-for="link in unitLinks(unit)" :key="link.to" :to="link.to" class="navigation-link">
              {{ link.label }}
            </RouterLink>
          </div>
        </details>
      </details>
    </nav>
    <div class="resize-handle" role="separator" aria-orientation="vertical" aria-label="Kéo để đổi độ rộng menu" @pointerdown="startResize" />
  </aside>
</template>

<style scoped>
.side-navigation { position: sticky; top: 0; z-index: 10; display: flex; flex-direction: column; align-self: start; width: var(--sidebar-width); height: 100vh; padding: 20px 16px; border-right: 1px solid var(--tblr-border-color); background: var(--tblr-bg-surface); transition: width .2s ease, padding .2s ease; }
.side-navigation.is-collapsed { width: 64px; padding-right: 8px; padding-left: 8px; }
.side-navigation.is-resizing { transition: none; user-select: none; }
.navigation-header { display: flex; align-items: center; justify-content: space-between; margin: 0 0 24px; }
.header-actions { display: flex; align-items: center; gap: 2px; }
.side-navigation.is-collapsed .navigation-header { flex-direction: column; gap: 8px; }
.side-navigation nav { min-height: 0; overflow-y: auto; }
.brand { display: block; margin: 0 8px; color: var(--tblr-body-color); font-size: 22px; font-weight: 700; text-decoration: none; white-space: nowrap; }
.menu-toggle { display: grid; flex: 0 0 auto; width: 36px; height: 36px; place-items: center; border: 0; border-radius: 8px; background: transparent; color: var(--tblr-secondary-color); font-size: 20px; cursor: pointer; }
.menu-toggle:hover, .menu-toggle:focus-visible { background: var(--tblr-bg-surface-secondary); color: var(--tblr-body-color); }
.resize-handle { position: absolute; top: 0; right: -4px; width: 8px; height: 100%; cursor: col-resize; touch-action: none; }
.resize-handle:hover, .resize-handle:active { background: rgba(59, 130, 246, .3); }
.navigation-group + .navigation-group { margin-top: 20px; }
.navigation-group summary { margin: 0 8px 8px; color: var(--tblr-secondary-color); font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; cursor: pointer; }
.unit-group { margin-bottom: 2px; }
.unit-summary { display: block; margin: 0 !important; padding: 8px 12px; border-radius: 8px; color: var(--tblr-body-color) !important; font-size: 15px !important; font-weight: 600 !important; letter-spacing: 0 !important; text-transform: none !important; }
.unit-summary:hover { background: var(--tblr-bg-surface-secondary); }
.unit-links { margin: 2px 0 6px 12px; padding-left: 8px; border-left: 2px solid var(--tblr-border-color); }
.navigation-link { display: block; padding: 8px 12px; border-radius: 8px; color: var(--tblr-secondary-color); text-decoration: none; }
.navigation-link:hover { background: var(--tblr-bg-surface-secondary); color: var(--tblr-body-color); }
.navigation-link.router-link-exact-active { background: rgba(59, 130, 246, .15); color: var(--tblr-primary); font-weight: 700; }

@media (max-width: 767px) {
  .side-navigation, .side-navigation.is-collapsed { position: sticky; top: 0; width: 100%; height: auto; max-height: 100vh; padding: 10px 16px; border-right: 0; border-bottom: 1px solid var(--tblr-border-color); }
  .navigation-header, .side-navigation.is-collapsed .navigation-header { flex-direction: row; margin: 0; }
  .side-navigation:not(.is-collapsed) .navigation-header { margin-bottom: 12px; }
  .brand { margin: 0; font-size: 18px; }
  .resize-handle { display: none; }
}
</style>

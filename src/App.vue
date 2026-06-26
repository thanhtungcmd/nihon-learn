<script setup lang="ts">
import { useSelectionActions } from '@/composables/useSelectionActions';

const { showContextMenu, contextMenuStyle, runSelectedAction } = useSelectionActions();
</script>

<template>
  <main class="container py-4 py-md-5">
    <div v-if="showContextMenu" class="context-menu" :style="contextMenuStyle">
      <button type="button" class="btn btn-sm btn-outline-primary w-100" @click="() => runSelectedAction()">
        Phát âm
      </button>
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
</style>

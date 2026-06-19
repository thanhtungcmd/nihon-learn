<script setup lang="ts"></script>

<template>
  <main class="container py-4 py-md-5">
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
</style>

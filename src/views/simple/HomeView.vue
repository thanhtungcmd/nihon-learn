<script setup lang="ts"></script>

<template>
  <section class="card shadow-sm border-0">
    <div class="card-body p-4 p-md-5">
      <span class="badge bg-primary-subtle text-primary-emphasis">Main Page</span>
      <h1 class="mt-3 mb-3">Nihon Learning</h1>
      <div class="d-flex flex-column gap-3">
        <span>Simple</span>
        <router-link class="ms-5" to="/hiragana">- Hiragana</router-link>
        <router-link class="ms-5" to="/yoon">- Âm ghép</router-link>
        <router-link class="ms-5" to="/katakana">- Katakana</router-link>
        <router-link class="ms-5" to="/vowel">- Quy tắc âm</router-link>
        <router-link class="ms-5" to="/hello">- Chào hỏi cơ bản</router-link>
        <span>N5</span>
        <router-link class="ms-5" to="/n5/unit1">- Unit 1</router-link>
      </div>
    </div>
  </section>
</template>

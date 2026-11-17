<script setup lang="ts">
import { basicLinks, n5Units, unitLinks } from '@/data/navigation';
</script>

<template>
  <section>
    <div class="mb-5">
      <h1 class="mb-2">Nihon Learning</h1>
      <p class="text-secondary mb-0">Chọn một bài để bắt đầu. Nhấn <kbd>Ctrl</kbd> + <kbd>Space</kbd> để tìm từ vựng ở bất kỳ trang nào.</p>
    </div>

    <h2 class="h3 mb-3">Cơ bản</h2>
    <div class="row g-3 mb-5">
      <div v-for="link in basicLinks" :key="link.to" class="col-6 col-md-4 col-xl-3">
        <RouterLink :to="link.to" class="card card-link h-100">
          <div class="card-body fw-semibold">{{ link.label }}</div>
        </RouterLink>
      </div>
    </div>

    <h2 class="h3 mb-3">JLPT N5</h2>
    <div class="row g-3">
      <div v-for="unit in n5Units" :key="unit" class="col-12 col-md-6 col-xl-4">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="card-title mb-3">Bài {{ unit }}</h3>
            <div class="d-flex flex-wrap gap-2">
              <RouterLink v-for="(link, index) in unitLinks(unit)" :key="link.to" :to="link.to" class="btn" :class="index === 0 ? 'btn-primary' : 'btn-outline-secondary'">
                {{ link.label }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

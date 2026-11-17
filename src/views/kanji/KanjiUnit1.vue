<script setup lang="ts">
import { useSelectionActions } from '@/composables/useSelectionActions';
import { unit1DayReadings, unit1Kanji } from '@/data/n5/kanji/unit1Kanji';
import { playJapanesePronunciation } from '@/services/pollyService';

useSelectionActions({
  onAction: (text) => playJapanesePronunciation(text).catch(console.error),
  shortcutKey: 'k',
});
</script>

<template>
  <section>
    <h1 class="mb-1">Kanji N5 – Bài 1: すうじ (Số đếm)</h1>
    <p class="text-secondary mb-4">{{ unit1Kanji.length }} chữ Hán. Kun-yomi viết bằng hiragana, On-yomi viết bằng katakana; dấu “-” là phần okurigana hoặc hậu tố đếm.</p>

    <div class="row g-3 mb-5">
      <div v-for="item in unit1Kanji" :key="item.kanji" class="col-12 col-xl-6">
        <article class="card h-100">
          <div class="card-body">
            <div class="d-flex gap-4 align-items-center mb-3">
              <div class="kanji-glyph">{{ item.kanji }}</div>
              <dl class="mb-0">
                <dt class="visually-hidden">Nghĩa</dt>
                <dd class="fw-semibold mb-1">{{ item.meaning }}</dd>
                <dt class="d-inline text-secondary fw-normal">Kun: </dt>
                <dd class="d-inline">{{ item.kun.join('、') || '—' }}</dd><br>
                <dt class="d-inline text-secondary fw-normal">On: </dt>
                <dd class="d-inline">{{ item.on.join('、') }}</dd><br>
                <dt class="d-inline text-secondary fw-normal">Số nét: </dt>
                <dd class="d-inline">{{ item.strokes }}</dd>
              </dl>
            </div>
            <table class="table table-sm mb-0">
              <thead>
                <tr><th scope="col">Từ</th><th scope="col">Cách đọc</th><th scope="col">Ví dụ</th></tr>
              </thead>
              <tbody>
                <tr v-for="example in item.examples" :key="example.word + example.sentence">
                  <td class="text-nowrap">{{ example.word }}</td>
                  <td class="text-nowrap">{{ example.reading }}</td>
                  <td class="example-sentence">{{ example.sentence }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </div>

    <h2 class="h3 mb-3">ひにちの よみかた – Cách đọc ngày trong tháng</h2>
    <div class="row g-2">
      <div v-for="(reading, index) in unit1DayReadings" :key="reading" class="col-6 col-md-4 col-xl-3">
        <div class="border rounded p-2 h-100"><span class="text-secondary">{{ index + 1 }}</span> · {{ reading }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.kanji-glyph { flex: 0 0 auto; min-width: 96px; font-size: 80px; line-height: 1.1; text-align: center; }
.example-sentence { font-size: 16px; }
td, th { font-size: 16px; }
</style>

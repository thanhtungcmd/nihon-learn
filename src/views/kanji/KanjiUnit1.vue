<script setup lang="ts">
import { IconVolume } from '@tabler/icons-vue';
import { useSelectionActions } from '@/composables/useSelectionActions';
import { unit1DayReadings, unit1Kanji } from '@/data/n5/kanji/unit1Kanji';
import { playJapanesePronunciation } from '@/services/pollyService';

const play = (text: string) => playJapanesePronunciation(text).catch(console.error);

useSelectionActions({
  onAction: play,
  shortcutKey: 'k',
});
</script>

<template>
  <section>
    <h1 class="mb-1">Kanji N5 – Bài 1: すうじ (Số đếm)</h1>
    <p class="text-secondary mb-3">{{ unit1Kanji.length }} chữ Hán. Kun-yomi viết bằng hiragana, On-yomi viết bằng katakana; dấu “-” là phần okurigana hoặc hậu tố đếm.</p>

    <div class="card mb-4">
      <div class="card-body">
        <h2 class="h4 mb-2">Đọc trước: vài khái niệm dùng trong giải thích</h2>
        <ul class="mb-0">
          <li><strong>Đơn vị đếm</strong> (まい, ほん, にん, だい…): chữ đứng sau số để chỉ loại vật được đếm. Số đi cùng đơn vị đếm kiểu Hán thường đọc <strong>On</strong>.</li>
          <li><strong>Đếm kiểu “…つ”</strong> (ひとつ, ふたつ… とお): cách đếm thuần Nhật từ 1 đến 10, không cần đơn vị đếm. Số ở đây đọc <strong>Kun</strong>.</li>
          <li><strong>Ngắt âm</strong> (chữ っ nhỏ): dừng một nhịp trước phụ âm kế tiếp, như いっぽん (<em>ip-pon</em>).</li>
          <li><strong>Đổi âm cho dễ nói</strong>: sau khi ngắt âm, ほ/ふ/ひ thường đổi thành ぽ/ぷ/ぴ (ほん → ぽん, ふん → ぷん, ひゃく → ぴゃく); sau số 3, ひゃく → びゃく và せん → ぜん.</li>
        </ul>
      </div>
    </div>

    <div class="row g-3 mb-5">
      <div v-for="item in unit1Kanji" :key="item.kanji" class="col-12">
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
            <div class="alert alert-info py-2 mb-3"><strong>Cách chọn âm đọc:</strong> {{ item.guide }}</div>
            <div class="table-responsive">
              <table class="table table-sm mb-0">
                <thead>
                  <tr><th scope="col">Từ</th><th scope="col">Cách đọc</th><th scope="col">Âm</th><th scope="col">Vì sao đọc như vậy</th><th scope="col">Ví dụ</th></tr>
                </thead>
                <tbody>
                  <tr v-for="example in item.examples" :key="example.word + example.sentence">
                    <td class="text-nowrap">{{ example.word }}</td>
                    <td class="text-nowrap">
                      <button type="button" class="play-button" :aria-label="`Phát âm ${example.reading}`" @click="play(example.reading)"><IconVolume :size="18" /></button>
                      {{ example.reading }}
                    </td>
                    <td><span class="badge" :class="example.type === 'on' ? 'bg-blue-lt' : 'bg-green-lt'">{{ example.type === 'on' ? 'On' : 'Kun' }}</span></td>
                    <td class="example-sentence note-cell">{{ example.note }}</td>
                    <td class="example-sentence">
                      <button type="button" class="play-button" aria-label="Phát âm câu ví dụ" @click="play(example.sentence)"><IconVolume :size="18" /></button>
                      {{ example.sentence }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </article>
      </div>
    </div>

    <h2 class="h3 mb-3">ひにちの よみかた – Cách đọc ngày trong tháng</h2>
    <p class="text-secondary">Ngày 1–10 và ngày 14, 20, 24 đọc kiểu Kun đặc biệt (ついたち, ふつか… はつか, じゅうよっか, にじゅうよっか). Các ngày còn lại: số (On) + にち, ví dụ じゅう + いち + にち; riêng 17 và 27 đọc しち, 19 và 29 đọc く.</p>
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
.note-cell { min-width: 360px; line-height: 1.6; }
.play-button { display: inline-grid; width: 28px; height: 28px; place-items: center; margin-right: 4px; border: 0; border-radius: 6px; background: transparent; color: var(--tblr-primary); cursor: pointer; }
.play-button:hover, .play-button:focus-visible { background: rgba(59, 130, 246, .15); }
td, th { font-size: 16px; }
</style>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { playJapanesePronunciation } from '@/services/pollyService';
import { translateJapaneseToVietnamese } from '@/services/translateService';

const sentence = ref('');
const isLoading = ref(false);
const error = ref('');
const translation = ref('');
const translationError = ref('');
const isTranslating = ref(false);

watch(sentence, () => {
  translation.value = '';
  translationError.value = '';
});

async function translateSentence() {
  const text = sentence.value.trim();
  if (!text || isTranslating.value) return;
  translation.value = '';
  translationError.value = '';
  isTranslating.value = true;
  try {
    const result = await translateJapaneseToVietnamese(text);
    if (sentence.value.trim() === text) translation.value = result;
  } catch {
    if (sentence.value.trim() === text) translationError.value = 'Không thể dịch câu. Vui lòng thử lại.';
  } finally {
    isTranslating.value = false;
  }
}

async function playSentence() {
  if (!sentence.value.trim() || isLoading.value) return;
  error.value = '';
  isLoading.value = true;
  try {
    await playJapanesePronunciation(sentence.value);
  } catch {
    error.value = 'Không thể phát âm thanh. Vui lòng thử lại.';
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <section class="card shadow-sm border-0">
    <div class="card-body p-4 p-md-5">
      <h1 class="mb-3">Đọc câu tiếng Nhật</h1>
      <form @submit.prevent="playSentence">
        <label for="japanese-sentence" class="form-label">Câu tiếng Nhật</label>
        <textarea id="japanese-sentence" v-model="sentence" class="form-control mb-3 p-3" style="font-size: 2rem" rows="4" lang="ja" placeholder="Nhập câu tiếng Nhật"></textarea>
        <button type="submit" class="btn btn-primary" :disabled="!sentence.trim() || isLoading">
          {{ isLoading ? 'Đang tải...' : 'Đọc câu' }}
        </button>
        <button type="button" class="btn btn-outline-primary ms-2" :disabled="!sentence.trim() || isTranslating" @click="translateSentence">
          {{ isTranslating ? 'Đang dịch...' : 'Dịch sang tiếng Việt' }}
        </button>
        <p v-if="error" class="text-danger mt-3 mb-0" role="alert">{{ error }}</p>
        <p v-if="translationError" class="text-danger mt-3 mb-0" role="alert">{{ translationError }}</p>
        <div v-if="translation" class="mt-4" aria-live="polite">
          <h2 class="h5">Bản dịch tiếng Việt</h2>
          <p class="mb-0">{{ translation }}</p>
        </div>
      </form>
    </div>
  </section>
</template>

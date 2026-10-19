<script setup lang="ts">
import { computed, nextTick, ref } from 'vue';
import { useSelectionActions } from '@/composables/useSelectionActions';
import { playJapanesePronunciation } from '@/services/pollyService';

export interface PracticeVocabularyItem {
  japanese: string;
  meanings: string[];
}

const props = defineProps<{
  unit: number;
  vocabulary: PracticeVocabularyItem[];
}>();

const currentItem = ref<PracticeVocabularyItem>();
const remainingItems = ref<PracticeVocabularyItem[]>([]);
const answer = ref('');
const feedback = ref<{ item: PracticeVocabularyItem; correct: boolean } | null>(null);
const correctCount = ref(0);
const incorrectCount = ref(0);
const input = ref<HTMLInputElement | null>(null);
const totalAnswered = computed(() => correctCount.value + incorrectCount.value);

useSelectionActions({ onAction: (text) => void pronounce(text), shortcutKey: 'k' });

function normalize(value: string) {
  return value.toLocaleLowerCase('vi').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim();
}

function isCorrect(value: string, meanings: string[]) {
  const normalizedAnswer = normalize(value);
  return meanings.some((meaning) => normalizedAnswer === normalize(meaning) || normalizedAnswer.includes(normalize(meaning)));
}

async function pronounce(text: string) {
  try { await playJapanesePronunciation(text); } catch (error) { console.error('Failed to play Japanese pronunciation:', error); }
}

function createCycle() {
  const cycle = [...props.vocabulary];
  for (let index = cycle.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [cycle[index], cycle[randomIndex]] = [cycle[randomIndex]!, cycle[index]!];
  }
  if (cycle.length > 1 && cycle[0]!.japanese === currentItem.value?.japanese) {
    [cycle[0], cycle[cycle.length - 1]] = [cycle[cycle.length - 1]!, cycle[0]!];
  }
  return cycle;
}

function nextQuestion() {
  if (!remainingItems.value.length) remainingItems.value = createCycle();
  currentItem.value = remainingItems.value.shift();
  answer.value = '';
  feedback.value = null;
  nextTick(() => input.value?.focus());
}

function record(correct: boolean) {
  if (!currentItem.value || feedback.value) return;
  feedback.value = { item: currentItem.value, correct };
  if (correct) correctCount.value += 1;
  else incorrectCount.value += 1;
}

function submitAnswer() {
  if (!answer.value.trim() || !currentItem.value) return;
  record(isCorrect(answer.value, currentItem.value.meanings));
}

nextQuestion();
</script>

<template>
  <section class="quiz-page card shadow-sm border-0">
    <div class="card-body p-4 p-md-5">
      <div class="d-flex flex-wrap align-items-start justify-content-between gap-3 mb-4">
        <div><span class="badge text-bg-primary">JLPT N5 · Bài {{ unit }}</span><h1 class="mt-3 mb-1">Kiểm tra từ vựng</h1><p class="text-secondary mb-0">Gõ nghĩa tiếng Việt phù hợp với từ tiếng Nhật.</p></div>
        <div class="scoreboard" aria-label="Kết quả hiện tại"><span class="score-correct">Đúng: {{ correctCount }}</span><span class="score-incorrect">Sai: {{ incorrectCount }}</span><span class="score-total">Đã trả lời: {{ totalAnswered }}</span></div>
      </div>
      <div class="question-card text-center mx-auto">
        <p class="text-uppercase question-label">Từ tiếng Nhật</p><div class="japanese-word">{{ currentItem?.japanese }}</div>
        <form class="mt-5" @submit.prevent="submitAnswer">
          <label class="visually-hidden" for="meaning">Nghĩa tiếng Việt</label>
          <input id="meaning" ref="input" v-model="answer" class="form-control form-control-lg text-center" type="text" autocomplete="off" placeholder="Nhập nghĩa tiếng Việt…" :readonly="Boolean(feedback)">
          <div v-if="!feedback" class="d-flex flex-wrap justify-content-center gap-2 mt-3"><button class="btn btn-primary btn-lg px-4" type="submit" :disabled="!answer.trim()">Kiểm tra đáp án</button><button class="btn btn-outline-secondary btn-lg px-4" type="button" @click="record(false)">Không nhớ</button></div>
        </form>
        <div v-if="feedback" class="feedback mt-4" :class="feedback.correct ? 'is-correct' : 'is-incorrect'" role="status"><strong>{{ feedback.correct ? '✓ Chính xác!' : '✕ Chưa đúng' }}</strong><span>{{ feedback.correct ? 'Bạn đã trả lời đúng.' : `Đáp án đúng: ${feedback.item.meanings.join(' / ')}` }}</span></div>
        <button v-if="feedback" class="btn btn-primary btn-lg mt-3 px-5" type="button" @click="nextQuestion">Câu tiếp theo</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.quiz-page { max-width: 900px; margin: 0 auto; }.scoreboard { display: flex; flex-wrap: wrap; gap: 8px; font-weight: 700; }.scoreboard span { padding: 7px 10px; border-radius: 999px; }.score-correct { background: #f0fdf4; color: #166534; }.score-incorrect { background: #fef2f2; color: #991b1b; }.score-total { background: #eff6ff; color: #1d4ed8; }.question-card { max-width: 620px; padding: 36px 24px; border: 1px solid #dbeafe; border-radius: 18px; background: linear-gradient(145deg, #f8fbff, #eff6ff); }.question-label { margin: 0; color: #64748b; font-size: 13px; font-weight: 700; letter-spacing: .12em; }.japanese-word { margin-top: 18px; color: #0f172a; font-size: clamp(48px, 10vw, 76px); font-weight: 600; line-height: 1.2; }.feedback { display: flex; flex-direction: column; gap: 4px; padding: 14px 18px; border-radius: 12px; text-align: left; }.feedback.is-correct { background: #f0fdf4; color: #166534; }.feedback.is-incorrect { background: #fef2f2; color: #991b1b; }
</style>

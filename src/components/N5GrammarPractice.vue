<script setup lang="ts">
import { computed, nextTick, ref } from 'vue';
import type { N5GrammarSentence } from '@/data/n5/unitGrammar';
import { useSelectionActions } from '@/composables/useSelectionActions';
import { playJapanesePronunciation } from '@/services/pollyService';

const props = defineProps<{ unit: number; sentences: N5GrammarSentence[] }>();
const currentSentence = ref<N5GrammarSentence>();
const remainingSentences = ref<N5GrammarSentence[]>([]);
const answer = ref('');
const feedback = ref<{ sentence: N5GrammarSentence; correct: boolean } | null>(null);
const correctCount = ref(0);
const incorrectCount = ref(0);
const input = ref<HTMLTextAreaElement | null>(null);
const totalAnswered = computed(() => correctCount.value + incorrectCount.value);

useSelectionActions({ onAction: (text) => void pronounce(text), shortcutKey: 'k' });

async function pronounce(text: string) {
  try {
    await playJapanesePronunciation(text);
  } catch (error) {
    console.error('Failed to play Japanese pronunciation:', error);
  }
}

function normalizeJapanese(value: string) {
  return value.normalize('NFKC').replace(/[\s　]+/g, '').replace(/[、。，．・!！?？「」『』（）()]/g, '').trim();
}

function createCycle() {
  const cycle = [...props.sentences];
  for (let index = cycle.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [cycle[index], cycle[randomIndex]] = [cycle[randomIndex]!, cycle[index]!];
  }
  if (cycle.length > 1 && cycle[0]!.japanese === currentSentence.value?.japanese) {
    [cycle[0], cycle[cycle.length - 1]] = [cycle[cycle.length - 1]!, cycle[0]!];
  }
  return cycle;
}

function nextQuestion() {
  if (!remainingSentences.value.length) remainingSentences.value = createCycle();
  currentSentence.value = remainingSentences.value.shift();
  answer.value = '';
  feedback.value = null;
  nextTick(() => input.value?.focus());
}

function record(correct: boolean) {
  if (!currentSentence.value || feedback.value) return;
  feedback.value = { sentence: currentSentence.value, correct };
  if (correct) correctCount.value += 1;
  else incorrectCount.value += 1;
}

function submitAnswer() {
  if (!answer.value.trim() || !currentSentence.value) return;
  record(normalizeJapanese(answer.value) === normalizeJapanese(currentSentence.value.japanese));
}

nextQuestion();
</script>

<template>
  <section class="grammar-practice card shadow-sm border-0">
    <div class="card-body p-4 p-md-5">
      <div class="d-flex flex-wrap align-items-start justify-content-between gap-3 mb-4">
        <div>
          <span class="badge text-bg-primary">JLPT N5 · Bài {{ unit }}</span>
          <h1 class="mt-3 mb-1">Kiểm tra ngữ pháp</h1>
          <p class="text-secondary mb-0">Đọc câu tiếng Việt và gõ lại câu tiếng Nhật tương ứng.</p>
        </div>
        <div class="scoreboard" aria-label="Kết quả hiện tại">
          <span class="score-correct">Đúng: {{ correctCount }}</span>
          <span class="score-incorrect">Sai: {{ incorrectCount }}</span>
          <span class="score-total">Đã trả lời: {{ totalAnswered }}</span>
        </div>
      </div>
      <div class="question-card mx-auto">
        <p class="text-uppercase question-label">Dịch sang tiếng Nhật</p>
        <p class="vietnamese-sentence">{{ currentSentence?.vietnamese }}</p>
        <p class="grammar-hint">Mẫu ngữ pháp: <strong>{{ currentSentence?.grammar }}</strong></p>
        <form class="mt-4" @submit.prevent="submitAnswer">
          <label class="form-label fw-semibold" for="japanese-answer">Câu tiếng Nhật của bạn</label>
          <textarea id="japanese-answer" ref="input" v-model="answer" class="form-control answer-input" rows="3" lang="ja" autocomplete="off" placeholder="Nhập câu tiếng Nhật…" :readonly="Boolean(feedback)" />
          <div v-if="!feedback" class="d-flex flex-wrap gap-2 mt-3">
            <button class="btn btn-primary btn-lg px-4" type="submit" :disabled="!answer.trim()">Kiểm tra đáp án</button>
            <button class="btn btn-outline-secondary btn-lg px-4" type="button" @click="record(false)">Không nhớ</button>
          </div>
        </form>
        <div v-if="feedback" class="feedback mt-4" :class="feedback.correct ? 'is-correct' : 'is-incorrect'" role="status">
          <strong>{{ feedback.correct ? '✓ Chính xác!' : '✕ Chưa đúng' }}</strong>
          <span v-if="feedback.correct">Bạn đã viết đúng câu tiếng Nhật.</span>
          <template v-else><span>Đáp án tham khảo:</span><span class="correct-answer" lang="ja">{{ feedback.sentence.japanese }}</span></template>
        </div>
        <button v-if="feedback" class="btn btn-primary btn-lg mt-3 px-5" type="button" @click="nextQuestion">Câu tiếp theo</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grammar-practice { max-width: 900px; margin: 0 auto; }
.scoreboard { display: flex; flex-wrap: wrap; gap: 8px; font-weight: 700; }.scoreboard span { padding: 7px 10px; border-radius: 999px; }
.score-correct { background: #f0fdf4; color: #166534; }.score-incorrect { background: #fef2f2; color: #991b1b; }.score-total { background: #eff6ff; color: #1d4ed8; }
.question-card { max-width: 680px; padding: 32px 24px; border: 1px solid #dbeafe; border-radius: 18px; background: linear-gradient(145deg, #f8fbff, #eff6ff); }
.question-label { margin: 0; color: #64748b; font-size: 13px; font-weight: 700; letter-spacing: .12em; }.vietnamese-sentence { margin: 18px 0 12px; color: #0f172a; font-size: clamp(24px, 4vw, 34px); font-weight: 600; line-height: 1.55; }
.grammar-hint { display: inline-block; margin: 0; padding: 6px 10px; border-radius: 8px; background: #dbeafe; color: #1e40af; }.answer-input { font-family: system-ui, sans-serif; font-size: 20px; line-height: 1.6; }
.feedback { display: flex; flex-direction: column; gap: 4px; padding: 14px 18px; border-radius: 12px; }.feedback.is-correct { background: #f0fdf4; color: #166534; }.feedback.is-incorrect { background: #fef2f2; color: #991b1b; }.correct-answer { font-size: 20px; font-weight: 700; }
</style>

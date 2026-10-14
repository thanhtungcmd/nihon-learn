<script setup lang="ts">
import { computed, nextTick, ref } from 'vue';
import { useSelectionActions } from '@/composables/useSelectionActions';
import { playJapanesePronunciation } from '@/services/pollyService';

interface VocabularyItem {
  japanese: string;
  meanings: string[];
}

interface Answer {
  item: VocabularyItem;
  answer: string;
  correct: boolean;
}

const QUESTIONS_PER_ROUND = 10;

// Vocabulary taken from N5 - Bài 1 (Unit1.vue).
const vocabulary: VocabularyItem[] = [
  { japanese: 'わたし', meanings: ['tôi'] },
  { japanese: 'あなた', meanings: ['bạn'] },
  { japanese: 'あのひと', meanings: ['người kia', 'người đó'] },
  { japanese: '～さん', meanings: ['hậu tố thêm phía sau để lịch sự', 'hậu tố lịch sự'] },
  { japanese: '～ちゃん', meanings: ['hậu tố thêm phía sau tên trẻ em', 'hậu tố phía sau tên trẻ em'] },
  { japanese: '～じん', meanings: ['hậu tố chỉ người'] },
  { japanese: 'せんせい', meanings: ['giáo viên trang trọng'] },
  { japanese: 'きょうし', meanings: ['giáo viên'] },
  { japanese: 'がくせい', meanings: ['học sinh', 'sinh viên'] },
  { japanese: 'かいしゃいん', meanings: ['nhân viên công ty'] },
  { japanese: 'しゃいん', meanings: ['nhân viên công ty'] },
  { japanese: 'ぎんこういん', meanings: ['nhân viên ngân hàng'] },
  { japanese: 'いしゃ', meanings: ['bác sĩ'] },
  { japanese: 'けんきゅうしゃ', meanings: ['nhà nghiên cứu'] },
  { japanese: 'エンジニア', meanings: ['kỹ sư'] },
  { japanese: 'だいがく', meanings: ['đại học'] },
  { japanese: 'びょういん', meanings: ['bệnh viện'] },
  { japanese: 'だれ', meanings: ['ai'] },
  { japanese: 'どなた', meanings: ['ai', 'ai vậy'] },
  { japanese: '～さい', meanings: ['tuổi'] },
  { japanese: 'なんさい', meanings: ['bao nhiêu tuổi'] },
  { japanese: 'おいくつ', meanings: ['bao nhiêu tuổi'] },
  { japanese: 'はい', meanings: ['vâng'] },
  { japanese: 'いいえ', meanings: ['không'] },
  { japanese: 'はじめまして', meanings: ['rất hân hạnh được gặp anh chị', 'rất vui được làm quen'] },
  { japanese: '～から きました', meanings: ['tôi đến từ'] },
  { japanese: 'どうぞ よろしく', meanings: ['rất vui được làm quen'] },
  { japanese: 'しつれい です が', meanings: ['xin lỗi khi muốn hỏi thông tin', 'xin lỗi'] },
  { japanese: 'おなまえ は？', meanings: ['tên anh chị là gì', 'tên bạn là gì'] },
  { japanese: 'こちら は ～さん です', meanings: ['đây là anh chị'] },
  { japanese: 'アメリカ', meanings: ['nước Mỹ', 'Mỹ'] },
  { japanese: 'イギリス', meanings: ['nước Anh', 'Anh'] },
  { japanese: 'インド', meanings: ['Ấn Độ'] },
  { japanese: 'インドネシア', meanings: ['Indonesia'] },
];

const currentIndex = ref(0);
const round = ref<VocabularyItem[]>([]);
const answer = ref('');
const answers = ref<Answer[]>([]);
const input = ref<HTMLInputElement | null>(null);
const feedback = ref<Answer | null>(null);
const showResults = ref(false);

useSelectionActions({
  onAction: (selectedText) => void pronounceSelectedText(selectedText),
  shortcutKey: 'k',
});

const currentItem = computed(() => round.value[currentIndex.value]);
const isLastAnswer = computed(() => answers.value.length === QUESTIONS_PER_ROUND);
const score = computed(() => answers.value.filter((item) => item.correct).length);

async function pronounceSelectedText(text: string) {
  try {
    await playJapanesePronunciation(text);
  } catch (error) {
    console.error('Failed to play Japanese pronunciation:', error);
  }
}

function shuffled<T>(items: T[]) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
}

function normalize(value: string) {
  return value
    .toLocaleLowerCase('vi')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function isCorrect(givenAnswer: string, meanings: string[]) {
  const normalizedAnswer = normalize(givenAnswer);
  return meanings.some((meaning) => {
    const normalizedMeaning = normalize(meaning);
    return normalizedAnswer === normalizedMeaning || normalizedAnswer.includes(normalizedMeaning);
  });
}

function beginRound() {
  round.value = shuffled(vocabulary).slice(0, QUESTIONS_PER_ROUND);
  currentIndex.value = 0;
  answer.value = '';
  answers.value = [];
  feedback.value = null;
  showResults.value = false;
  nextTick(() => input.value?.focus());
}

function submitAnswer() {
  if (!currentItem.value || !answer.value.trim() || feedback.value) return;

  const result = {
    item: currentItem.value,
    answer: answer.value.trim(),
    correct: isCorrect(answer.value, currentItem.value.meanings),
  };
  answers.value.push(result);
  feedback.value = result;
}

function continueQuiz() {
  if (!feedback.value) return;

  if (isLastAnswer.value) {
    showResults.value = true;
    return;
  }

  answer.value = '';
  feedback.value = null;
  currentIndex.value += 1;
  nextTick(() => input.value?.focus());
}

beginRound();
</script>

<template>
  <section class="quiz-page card shadow-sm border-0">
    <div class="card-body p-4 p-md-5">
      <template v-if="!showResults">
        <div class="d-flex flex-wrap align-items-start justify-content-between gap-3 mb-4">
          <div>
            <span class="badge text-bg-primary">JLPT N5 · Bài 1</span>
            <h1 class="mt-3 mb-1">Kiểm tra từ vựng</h1>
            <p class="text-secondary mb-0">Gõ nghĩa tiếng Việt phù hợp với từ tiếng Nhật.</p>
          </div>
          <span class="progress-label">Câu {{ currentIndex + 1 }} / {{ QUESTIONS_PER_ROUND }}</span>
        </div>

        <div class="progress mb-5" role="progressbar" :aria-valuenow="currentIndex" aria-valuemin="0" :aria-valuemax="QUESTIONS_PER_ROUND">
          <div class="progress-bar" :style="{ width: `${(currentIndex / QUESTIONS_PER_ROUND) * 100}%` }" />
        </div>

        <div class="question-card text-center mx-auto">
          <p class="text-uppercase question-label">Từ tiếng Nhật</p>
          <div class="japanese-word">{{ currentItem?.japanese }}</div>

          <form class="mt-5" @submit.prevent="submitAnswer">
            <label class="visually-hidden" for="meaning">Nghĩa tiếng Việt</label>
            <input id="meaning" ref="input" v-model="answer" class="form-control form-control-lg text-center" type="text" autocomplete="off" placeholder="Nhập nghĩa tiếng Việt…" :readonly="Boolean(feedback)" />
            <button v-if="!feedback" class="btn btn-primary btn-lg mt-3 px-5" type="submit" :disabled="!answer.trim()">Kiểm tra đáp án</button>
          </form>

          <div v-if="feedback" class="feedback mt-4" :class="feedback.correct ? 'is-correct' : 'is-incorrect'" role="status">
            <strong>{{ feedback.correct ? '✓ Chính xác!' : '✕ Chưa đúng' }}</strong>
            <span>{{ feedback.correct ? 'Bạn đã trả lời đúng.' : `Đáp án đúng: ${feedback.item.meanings.join(' / ')}` }}</span>
          </div>
          <button v-if="feedback" class="btn btn-primary btn-lg mt-3 px-5" type="button" @click="continueQuiz">{{ isLastAnswer ? 'Xem kết quả' : 'Câu tiếp theo' }}</button>
        </div>
      </template>

      <template v-else>
        <div class="text-center result-summary">
          <span class="badge text-bg-success">Hoàn thành</span>
          <h1 class="mt-3">Kết quả của bạn</h1>
          <p class="score"><strong>{{ score }}</strong> / {{ QUESTIONS_PER_ROUND }}</p>
          <p class="text-secondary">{{ score >= 8 ? 'Rất tốt! Bạn đã nắm chắc phần lớn từ vựng.' : 'Hãy xem lại đáp án và thử thêm một lượt nữa nhé.' }}</p>
          <button class="btn btn-primary mt-2 px-4" type="button" @click="beginRound">Làm bài mới</button>
        </div>

        <div class="answer-list mt-5">
          <h2 class="h4 mb-3">Chi tiết đáp án</h2>
          <article v-for="(result, index) in answers" :key="`${result.item.japanese}-${index}`" class="answer-item" :class="result.correct ? 'is-correct' : 'is-incorrect'">
            <div class="answer-number">{{ index + 1 }}</div>
            <div class="flex-grow-1">
              <div class="answer-word">{{ result.item.japanese }}</div>
              <div class="small text-secondary">Bạn trả lời: <strong>{{ result.answer }}</strong></div>
              <div v-if="!result.correct" class="small mt-1">Đáp án: {{ result.item.meanings.join(' / ') }}</div>
            </div>
            <span class="result-icon" :aria-label="result.correct ? 'Đúng' : 'Chưa đúng'">{{ result.correct ? '✓' : '✕' }}</span>
          </article>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
.quiz-page { max-width: 900px; margin: 0 auto; }
.progress { height: 8px; border-radius: 999px; background: #e2e8f0; }
.progress-bar { background: #2563eb; transition: width .25s ease; }
.progress-label { padding: 7px 12px; border-radius: 999px; background: #eff6ff; color: #1d4ed8; font-weight: 700; }
.question-card { max-width: 620px; padding: 36px 24px; border: 1px solid #dbeafe; border-radius: 18px; background: linear-gradient(145deg, #f8fbff, #eff6ff); }
.question-label { margin: 0; color: #64748b; font-size: 13px; font-weight: 700; letter-spacing: .12em; }
.japanese-word { margin-top: 18px; color: #0f172a; font-size: clamp(48px, 10vw, 76px); font-weight: 600; line-height: 1.2; }
.feedback { display: flex; flex-direction: column; gap: 4px; padding: 14px 18px; border-radius: 12px; text-align: left; }.feedback.is-correct { background: #f0fdf4; color: #166534; }.feedback.is-incorrect { background: #fef2f2; color: #991b1b; }
.result-summary { max-width: 600px; margin: 0 auto; }
.score { color: #1d4ed8; font-size: 30px; }.score strong { font-size: 68px; line-height: 1; }
.answer-item { display: flex; align-items: center; gap: 14px; padding: 16px; border: 1px solid #e2e8f0; border-radius: 12px; background: #fff; }.answer-item + .answer-item { margin-top: 10px; }
.answer-item.is-correct { border-left: 4px solid #16a34a; }.answer-item.is-incorrect { border-left: 4px solid #dc2626; }
.answer-number { display: grid; width: 30px; height: 30px; flex: 0 0 auto; place-items: center; border-radius: 50%; background: #f1f5f9; color: #475569; font-weight: 700; }
.answer-word { color: #0f172a; font-size: 21px; font-weight: 700; }
.result-icon { font-size: 24px; font-weight: 700; }.is-correct .result-icon { color: #16a34a; }.is-incorrect .result-icon { color: #dc2626; }
</style>

<script setup lang="ts">
import VocabularyPractice from '@/components/VocabularyPractice.vue';
import { toPracticeVocabulary, unit5Vocabulary } from '@/data/n5/unitVocabulary';

const vocabulary = toPracticeVocabulary(unit5Vocabulary);
</script>

<template>
  <VocabularyPractice :unit="5" :vocabulary="vocabulary" />
</template>

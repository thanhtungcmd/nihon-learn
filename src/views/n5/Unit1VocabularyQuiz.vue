<script setup lang="ts">
import VocabularyPractice from '@/components/VocabularyPractice.vue';
import { toPracticeVocabulary, unit1Vocabulary } from '@/data/n5/unitVocabulary';

const vocabulary = toPracticeVocabulary(unit1Vocabulary);
</script>

<template>
  <VocabularyPractice :unit="1" :vocabulary="vocabulary" />
</template>

<script setup lang="ts">
import VocabularyPractice from '@/components/VocabularyPractice.vue';
import { toPracticeVocabulary, unit3Vocabulary } from '@/data/n5/unitVocabulary';

const vocabulary = toPracticeVocabulary(unit3Vocabulary);
</script>

<template>
  <VocabularyPractice :unit="3" :vocabulary="vocabulary" />
</template>

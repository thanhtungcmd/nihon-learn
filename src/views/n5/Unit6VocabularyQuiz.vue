<script setup lang="ts">
import VocabularyPractice from '@/components/VocabularyPractice.vue';
import { toPracticeVocabulary, unit6Vocabulary } from '@/data/n5/unitVocabulary';

const vocabulary = toPracticeVocabulary(unit6Vocabulary);
</script>

<template>
  <VocabularyPractice :unit="6" :vocabulary="vocabulary" />
</template>

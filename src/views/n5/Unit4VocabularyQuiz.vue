<script setup lang="ts">
import VocabularyPractice from '@/components/VocabularyPractice.vue';
import { toPracticeVocabulary, unit4Vocabulary } from '@/data/n5/unitVocabulary';

const vocabulary = toPracticeVocabulary(unit4Vocabulary);
</script>

<template>
  <VocabularyPractice :unit="4" :vocabulary="vocabulary" />
</template>

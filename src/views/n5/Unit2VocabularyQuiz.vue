<script setup lang="ts">
import VocabularyPractice from '@/components/VocabularyPractice.vue';
import { toPracticeVocabulary, unit2Vocabulary } from '@/data/n5/unitVocabulary';

const vocabulary = toPracticeVocabulary(unit2Vocabulary);
</script>

<template>
  <VocabularyPractice :unit="2" :vocabulary="vocabulary" />
</template>

<script setup lang="ts">
import N5GrammarPractice from '@/components/N5GrammarPractice.vue';
import { toGrammarSentences, unit1Grammar } from '@/data/n5/unitGrammar';

const sentences = toGrammarSentences(1, unit1Grammar);
</script>
<template><N5GrammarPractice :unit="1" :sentences="sentences" /></template>

<script setup lang="ts">
import N5GrammarPractice from '@/components/N5GrammarPractice.vue';
import { toGrammarSentences, unit4Grammar } from '@/data/n5/unitGrammar';

const sentences = toGrammarSentences(4, unit4Grammar);
</script>
<template><N5GrammarPractice :unit="4" :sentences="sentences" /></template>

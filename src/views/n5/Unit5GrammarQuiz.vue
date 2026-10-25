<script setup lang="ts">
import N5GrammarPractice from '@/components/N5GrammarPractice.vue';
import { toGrammarSentences, unit5Grammar } from '@/data/n5/unitGrammar';

const sentences = toGrammarSentences(5, unit5Grammar);
</script>
<template><N5GrammarPractice :unit="5" :sentences="sentences" /></template>

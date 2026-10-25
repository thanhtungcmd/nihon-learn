<script setup lang="ts">
import N5GrammarPractice from '@/components/N5GrammarPractice.vue';
import { toGrammarSentences, unit3Grammar } from '@/data/n5/unitGrammar';

const sentences = toGrammarSentences(3, unit3Grammar);
</script>
<template><N5GrammarPractice :unit="3" :sentences="sentences" /></template>

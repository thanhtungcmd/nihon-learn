<script setup lang="ts">
import N5GrammarPractice from '@/components/N5GrammarPractice.vue';
import { toGrammarSentences, unit2Grammar } from '@/data/n5/unitGrammar';

const sentences = toGrammarSentences(2, unit2Grammar);
</script>
<template><N5GrammarPractice :unit="2" :sentences="sentences" /></template>

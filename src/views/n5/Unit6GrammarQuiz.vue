<script setup lang="ts">
import N5GrammarPractice from '@/components/N5GrammarPractice.vue';
import { toGrammarSentences, unit6Grammar } from '@/data/n5/unitGrammar';

const sentences = toGrammarSentences(6, unit6Grammar);
</script>
<template><N5GrammarPractice :unit="6" :sentences="sentences" /></template>

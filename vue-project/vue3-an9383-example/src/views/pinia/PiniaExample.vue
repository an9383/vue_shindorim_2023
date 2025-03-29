<template>
  <h2>Hello Pinia!(피니아 예제)</h2>
  <h4>{{ counter.count  }}</h4>
  <h4>더블 카운트: {{ counter.getDoubleCount  }}</h4>
  <button type="button" @click="counter.increment()">increment</button>
</template>

<script setup>
import {useCouterStore} from '@/stores/counter'
const counter = useCouterStore()
</script>

<style scoped></style>
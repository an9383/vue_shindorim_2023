<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>파라미터로 넘어온값 : {{ route.params.username }}</h1>
  </div>
</template>
<script setup>
import {  useRoute } from 'vue-router'
const route = useRoute()

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
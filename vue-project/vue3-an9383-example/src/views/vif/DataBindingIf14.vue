<template>
  <div>
    <h1 v-if=" type.toUpperCase() =='A'">A</h1>
    <h1 v-else-if=" type.toLowerCase() =='B'">B</h1>
    <h1 v-else>C</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type:'a',
    };
  },
};
</script>

<style scoped>

</style>
<template>
  <!-- // 키보드의 키를 눌렀다 뗐을 때
  // 키보드의 키를  눌렀을 때
  // 키보드의 키를 누르고 있을 때 -->
  <!-- <input
    @keyup="printEvent('keyup')"
    @keydown="printEvent('keydown')"
    @keypress="printEvent('keypress')"
    v-model="name"
  /> -->

  <!-- // tap키를 눌렀다 뗐을 때
  // space키를   눌렀을 때
  // left 키를 누르고 있을 때 -->
  <input
    @keydown.tab="printEvent('탭 keyup')" 
    @keydown.space="printEvent('스페이스 key down')"
    v-model="name"
  />
</template>

<script>
//클릭 이벤트
//v-on:click 또는 @click="메소드명"

export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    printEvent(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped></style>
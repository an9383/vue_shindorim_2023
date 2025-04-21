<template>
  <div>
  <button type="button" @click="one()">클릭이벤트</button>
  </div>
  <hr>
  <button type="button" @click="one(),two()">여러개 함수 호출하고</button>
  <div>
  <button type="button" @click="increaseCounter()">Add 1</button>
  <p>The counter is :{{ counter }}</p>
  </div>

  <hr>
  <div>
  <button type="button" @click="setCount(7)">Set 7</button>
  <p>The counter is :{{ count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter:0,
      count:0,
    };
  },
  methods: {
    setCount(count){
      this.count = count;
    },
    increaseCounter(){
      this.counter = this.counter + 1;
    },
    one(){
      alert('1입니다.');
    },
    two(){
      alert('2입니다.');
    },

  }
};
</script>

<style scoped>

</style>
<template>
  <div>
    <button type="button" @click="childFunc" ref="btn">클릭</button>
  </div>
</template>

<script>
export default {
  methods:{
    childFunc(){
      console.log('부모에서 직접 발생시킨 이벤트');
    }    
  }
};
</script>

<style scoped></style>
<template>
<div>
  <textarea v-model="message"></textarea>
  <!-- <div>{{ message }} </div> -->
</div>
</template>


<script>
//https://velog.io/@kungsboy/Vue-3.0-v-model-%EC%9D%98-%EC%9D%B4%ED%95%B4
//v-model 의 이해?
// v-model 은 data + event 를 동시에 담고 있다고 생각 하면된다.

//https://v2.ko.vuejs.org/v2/guide/components.html#%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%A0%95%EC%9D%98-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%ED%8F%BC-%EC%9E%85%EB%A0%A5-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0
export default {
  data(){
    return{
      message: "여러줄을 입력할 수 있는 textarea 입니다."
    };
  }
}
</script>

<style scoped>


</style>
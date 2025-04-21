<template>
  <h2>Axios: 포스트 방식 예제</h2>
</template>

<script>
import axios from "axios";  //axios는 라이브러리

export default {
  data() {
    return {
    };
  },
  mounted() {
    axios.post("https://jsonplaceholder.typicode.com/posts",{
      userId:'1',
      title:'타이틀',
      body:'바디 부문',
    })
      .then((response) => {
        console.log(response);
      // console.log(response.data);
      // this.posts = response.data;
    });
  },
};
</script>

<style scoped>


</style>
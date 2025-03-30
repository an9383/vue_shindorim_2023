<template>
  <div>
    <button class="btn btn-primary" @click="testMethod1">비동기 예제 버튼</button>
    <button class="btn btn-primary" @click="testMethod2">동기 예제 테스트버튼</button> 
  </div>
</template>

<script>

export default {
  data() {
    return {
      data1:[],
      data2:{},
      data3:[],
      data4:[],

    };
  },
  methods: {
    testMethod1(){
      
      this.data1 = this.$axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        console.log("data1 결과")
        console.log(res)
      })
      this.data2 = this.$axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => {
        console.log("data2 결과")
        console.log(res)
      })
      this.data3 = this.$axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then(res => {
        console.log("data3 결과")
        console.log(res)
      })
      this.data4 = this.$axios.get("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then(res => {
        console.log("data4 결과")
        console.log(res)
      })
      console.log("============================")
    },
    async testMethod2(){ //동기 통신
      
      this.data1 = await this.$axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        console.log('data1 결과')
        console.log(res)
      })

      this.data2 = await this.$axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        console.log('data2 결과')
        console.log(res)
      })

      this.data3 = await this.$axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        console.log('data3 결과')
        console.log(res)
      })

      this.data4 = await this.$axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        console.log('data4 결과')
        console.log(res)
      })

      console.log("============================")
    }


  },
};
</script>

<style scoped></style>
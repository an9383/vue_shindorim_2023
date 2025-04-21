<template>
  <h1> 안녕하세요.</h1>
  <h1> 제목: {{title}} </h1>
  <h1> 이름: {{name}} </h1>
  <h1> 나이: {{age}} </h1>

</template>

<script>
export default {
  data(){
    return{
      title:"안녕하세요.2",
      name:"홍길동",
      age: 29,
    }
  }
}
</script>

<style scoped>


</style>
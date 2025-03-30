<template>
  <input type="text" v-model="firstName">
  <input type="text" v-model="lastName">
  <div>
    <h1>full name : {{ fullName }}</h1>
    <!-- <h1>full name : {{ getFullName() }}</h1> -->
    <!-- <h1>full name : {{ fullName }}</h1>
    <h1>full name : {{ fullName }}</h1> -->
  </div>
  <hr />
</template>

<script>
export default {
  data() {
    return {
      firstName: "길동",
      lastName: "홍",
    };
  },
  methods: {
    getFullName() {
      console.log("메써드 함수 호출");
      return this.firstName + " " + this.lastName;
    },
  },
  computed: {
    // fullName: 길동홍
    fullName() {
      console.log("컴퓨티드 함수 호출");
      return this.firstName + " " + this.lastName;
    },
  },
};
</script>

<style scoped></style>
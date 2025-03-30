<template>
  <div>
    <h1>full name : {{ fullName }}</h1>
    <button type="button" @click="changeName">변경</button>
    <button type="button" @click="changeLastName">라스트 이름 변경</button>
  </div>
  <hr />
</template>

<script>
export default {
  data() {
    return {
      firstName: "길동",
      lastName: "홍",
      fullName:'',
    };
  },
  methods: {
    changeName() {
      this.firstName='Sooooooooo'
    },
    changeLastName() {
      this.lastName='Son'
    },
  },
  watch: {
    firstName() {  //함수이름이 data이름과 동일해야 함.
      //alert('변경감지 퍼스트네임')
      console.log('변경감지 퍼스트네임')
      this.fullName= this.firstName + " " + this.lastName;
    },
    lastName() {  //함수이름이 data이름과 동일해야 함.
      //alert('변경감지 라스트네임')
      console.log('변경감지 라스트네임')
      this.fullName= this.firstName + " " + this.lastName;
    },
  },
};
</script>

<style scoped></style>
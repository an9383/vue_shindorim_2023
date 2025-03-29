<template>
  <div><h1>{{ readersNumber }} {{ book.title }}</h1></div>
  <br>
  <button @click="incresement">incresement</button>
</template>

<script setup>
import {ref, reactive } from 'vue'
const readersNumber = ref(0)
const book = reactive({title:',스크립트 셋업'})

const incresement = () =>{
  readersNumber.value +=1
}

</script>
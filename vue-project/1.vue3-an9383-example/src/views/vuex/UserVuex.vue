<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1> getters 함수에 의한 호출</h1>
    <div v-for="user in getUsers" :key="user.id">{{ user.id }}  :{{ user.name }} : {{ user.address }}
    </div>

    <h1> state를 그대로 접근(읽기)  state 변수는 직접 변경 못함</h1>
    <div v-for="user in users" :key="user.id">{{ user.id }} {{ user.name }} {{ user.address }}</div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue'
import { useStore } from 'vuex';

const store = useStore();
const msg = ref('뷰 예제 샘플 입니다.')

const getUsers = computed( () => {
  console.log('함수 : getUsers 전')
  return store.getters.getUsers
} )

const users = computed( () => {
  return store.state.users
} )

//$store.dispatch()은 actions에 부탁하는 것이고, $store.commit은 mutations에 부탁한다.
onMounted(()=>{
  store.dispatch('fetchUsers')
  console.log('온마운트 함수 실행')
})
</script>

<style scoped></style>
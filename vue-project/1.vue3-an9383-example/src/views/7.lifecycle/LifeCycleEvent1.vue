<template>
  <div>
    <input type="text" @keydown.tab.prevent="callTab" placeholder='aaa'>
    <p>{{ sampleData }}</p>
  </div>
  <hr />
</template>

<script>
export default {
  components: [],
  data() {
    return {
      sampleData: ''
    }
  },
  beforeCreate() {
    console.log('beforeCreate() ..')
  },
  created() { //메모리에 올라갔을때 this.는 올라갔을때 부터 사용가능함.
    console.log('created() ..') 
  },
  beforeMount() {
    console.log('beforeMount() ..')
  },
  mounted() { //화면에 붙였을때
    console.log('mounted() ..')
  },
  beforeUpdate() {
    console.log('beforeUpdate() ..')
  },
  updated() { //화면에 수정할때
    console.log('updated() ..')
  },
  beforeUnmount() {
    console.log('beforeUnmount() ..')
  },
  unmounted() {
    console.log('unmounted() ..')
  },
  methods: {
    callTab() {
      console.log('tab event')
    }
  }
}
</script>

<style scoped></style>
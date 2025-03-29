<template>
  <div class="home">
    <input type="text" v-model="search" />
    <p>{{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
  </div>
</template>
<script>
/*
  함수 : method, computed, watch
*/
import { computed, watch, ref } from 'vue'

export default {
  setup() {
    const search = ref('')
    const names = ref(['qq','aa','zz','dd'])

    const matchingNames = computed( () => {
      return names.value.filter( (name)=>name.includes(search.value))
     })

     watch(search,()=>{console.log("와치함수 실행")})

    return {
      search,
      names,
      matchingNames
    }
  }
}
</script>
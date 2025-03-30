<template>
  <div class="comp comp-tcolor">
    <p class="comp-name">Third Component</p>
    <p>props : {{ name }}</p>

    <ThirdComponent :name="name"></ThirdComponent>
  </div>
</template>

<script>
import ThirdComponent from './ThirdComponent.vue';  //자식으로 사용하겠다는 의미

export default {
  components:{ ThirdComponent},
  props: {
    name: String
  },
  
}
</script>

<style>

</style>
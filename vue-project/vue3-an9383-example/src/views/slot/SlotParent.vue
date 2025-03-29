<template>
  <slot-child>
    <h1>슬롯 자식입니다.</h1>
    <h1>슬롯 자식2입니다.</h1>
    <h1>슬롯 자식3입니다.</h1>
  </slot-child>
</template>

<script>
import SlotChild from './SlotChild.vue';


export default {
  components: {SlotChild}
  };

</script>

<style scoped></style>
<template>
<div>
  <div>{{ checked }} </div>
  <div>
    <input type="checkbox" 
    v-model="checked" 
    true-value="yes" 
    false-value="no"/>  
  </div>
</div>
</template>


<script>

export default {
  data(){
    return{
     checked: true,
    };
  }
}
</script>

<style scoped> </style>
<template>
  <!-- <PageTitle title="부모 컴포넌트에서 자식 컴포넌트로 데이터 전달"/>
  <page-title/> -->

  <page-title :level="2" :isBool="true"/>
  <hr>
  <page-title :arrNum="[1,2,3,4]"/>
  <hr>
  <page-title :objTitle="{
          id:2, title:'abcd'
        }"/>
  
</template>

<script>
import PageTitle from '@/views/compo/PageTitle.vue'

export default {
  components:{PageTitle}  
};
</script>

<style scoped></style>
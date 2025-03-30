<template>
  <div>
    <ChildCompo1 ref="child_compnent"/>
    <hr>
    <ChildCompo2 ref="child_compnent2" />
  </div>

</template>

<script>
import ChildCompo1 from './ChildCompo1.vue';
import ChildCompo2 from './ChildCompo2.vue';

//부모컴포넌트에서 자식 컴포넌트 이벤트 직접 발생 시키기
//this.$refs 를 통해 ref="id"를 직접 접근
//ref 는 html 태그에서 id 와 비슷한 기능을 함

export default {
  components:{ChildCompo1,ChildCompo2},
  mounted(){
   console.log('마운트 시작')
   
   this.$refs.child_compnent.$refs.btn.click()
   this.$refs.child_compnent2.callFromParent()
  }
};
</script>

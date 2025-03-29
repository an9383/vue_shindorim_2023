<template>
  <div></div>
</template>
<script>
  //$emit 이란 이벤트를 보내는것
  //v-on 은 이벤트를 감지 하는것
  //.$emit('send-message') 첫번째 인자는 부모의 커스텀 이벤트 두번째 파라미터부터는 전달할값
export default {
  data(){
    return{
      msg:'자식 컴포넌트로 부터 보내는 메세지'
    }
  },
  mounted() {
    this.$emit('send-message',this.msg);
  }
}
</script>
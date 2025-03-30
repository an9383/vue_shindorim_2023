<template>
  <div>
    <h2>믹스인을 사용한 에제</h2>
    <input type="text" />
    <div>시간:{{ $callTime() }}</div>
    <div>시간2:{{ time }}</div>
  </div>
</template>
<script>
//https://hdevstudy.tistory.com/191

//import ApiMixin from '@/mixins/mixins.js'  //@는 src라는 의미

export default {
//  mixins: [ApiMixin]

  data() {
    return {
      time: ''
    }
  },
   mounted() {
      this.time=this.$callTime()
    }

}
</script>
<template>
  <div class="lotto">
    <HeaderCommon></HeaderCommon>
    <rsp-main></rsp-main>
    <FooterCommon></FooterCommon>
  </div>
</template>

<script>
import HeaderCommon from '../components/common/HeaderCommon.vue';
import FooterCommon from '../components/common/FooterCommon.vue';
import RspMain from '@/components/rsp/RspMain.vue'

export default {
  name: 'LottoMainView',
  components: {
    HeaderCommon,
    RspMain,
    FooterCommon
  },
}
</script>

<style scoped>
</style>


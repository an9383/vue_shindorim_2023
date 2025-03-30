<template>
  <div class="lotto">
    <HeaderCommon></HeaderCommon>
    <div>가위바위보 메인</div>
    <FooterCommon></FooterCommon>

  </div>
</template>

<script>
import HeaderCommon from '../components/common/HeaderCommon.vue';
import FooterCommon from '../components/common/FooterCommon.vue';
// eslint-disable-next-line no-unused-vars
import LottoMain from '../components/lotto/LottoMain.vue';

export default {
  name: 'LottoMainView',
  components: {
    HeaderCommon,
    FooterCommon
  },
}
</script>

<style scoped>
.lotto {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>

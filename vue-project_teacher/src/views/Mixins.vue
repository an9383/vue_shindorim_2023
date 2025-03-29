<template>
  <div></div>
</template>

<script>
import ApiMixin from '../api.js';
export default {
  mixins: [ApiMixin], //사용할 믹스인 파일을 배열로 등록
  data() {
    return {
      productList: []
    };
  },
  async mounted() {
    this.productList = await this.$callAPI("https://b0bd6982-184d-47a1-ae39-68354215efa1.mock.pstmn.io/list","get");
    console.log(this.productList);
  }
}
</script>
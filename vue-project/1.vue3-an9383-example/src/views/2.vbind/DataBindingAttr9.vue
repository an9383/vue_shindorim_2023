<template>
  <div>
    <img :alt="altStr" v-bind:src="imgSrc2" />
    <hr />
    <img :alt="altStr2" :src="imgSrc" />
  </div>
</template>

<script>
//v-bind는 제이쿼리의 attr과 비슷한 역할
//html 의 속성인 id,class,style 등에 model data 와 연결

export default {
  data() {
    return {
      imgSrc2: "https://kr.vuejs.org/images/logo.pngㅁㄴㅇㄻㅇㄴㄹ",
      imgSrc:
        "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpgㅁㄴㅇㄹㄴㅇㅁㄹ",
      altStr: "잘못된 주소입니다.",
      altStr2: "액박입니다.",
    };
  },
};
</script>

<style scoped></style>
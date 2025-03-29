<template>
  <!-- 네비게이션을 위해 router-link 컴포넌트를 사용합니다. -->
  <!-- 구체적인 속성은 `to` prop을 이용합니다. -->
  <!-- 기본적으로 `<router-link>`는 `<a>` 태그로 렌더링됩니다.-->
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link :to="'/about/' +  '홍길동'">링크 파라미터 전달 예제</router-link> |
  <!-- 현재 라우트에 맞는 컴포넌트가 렌더링됩니다. -->
  <router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

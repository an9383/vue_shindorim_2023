<template>
  <p class="comp-name">가장 큰 부모(Big Component)</p>

  <span class="inject-text"
    >provide :
    <span class="inject-value">'inject props'</span>
  </span>

  <FirstComponent name="first" />
</template>

<script>
//provdie/ inject
//컴포넌트 계증 구조가 복잡해 지면  부모에서 자식으로 넘기기가 pops 로 계속해서 전달하게 되면 복잡해 질수 있는 코드를 양산
//부모코드에서는 provide 를 자식 에서는 Inject 옵션을 제공하여 값을 전달 할수 있음
//자식 컴포넌트로 전달 하고자 하는 데이터를 provide()에 전달 함

//provide/inject : 자식 또는 자손이 쓸 key:value 형식
//data() : 자기잣신한텔 쓸 key:value 형식

import FirstComponent from '@/views/12.provideinject/FirstComponent.vue'

export default {
  components: { FirstComponent },
  props: {
    name: String
  },
  provide() {
    return {
      injectProps: 'inject value'
    }
  }
}
</script>

<style>
.comp {
  text-align: left;
  border: 1px solid #444444;
  padding: 30px;
}

.comp.comp-fcolor {
  background: #f5acac96;
}

.comp.comp-scolor {
  background: #0000ff30;
}

.comp.comp-tcolor {
  background: #ffff0052;
}

.comp-name {
  color: #0020f8;
}
</style>
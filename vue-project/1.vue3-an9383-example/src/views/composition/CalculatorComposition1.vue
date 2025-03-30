<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="state.num1" @keyup="plusNumbers" />
      <span> + </span>
      <input type="text" v-model="state.num2" @keyup="plusNumbers" />
      <span> = </span>
      <span>{{ state.result }}</span>
    </div>
    <hr>
    컴포지션 에서의 바인딩: {{ num }}
  </div>
</template>


<script>
/*
Composition API 와 setup 함수의 등장
컴포지션 API에서 첫번째 특징이 setup() 함수 이다.

setup() 함수에 관하여
  - setup 함수는, Vue 3 에서 새로 나온 Composition API 이다.
  - 기존에 data, methods 등으로 흩어져있던것을, 하나의 장소로 모으게 해준다.
  - template 에서 사용하고자하는 변수, 함수등을 정의한뒤,
  - 객체에 하나씩 골라담아, return 해주면 template 에서 해당 변수와 함수를 접근할수있다.. 
 */

import {reactive, ref} from 'vue'
//import {reactive} from 'vue'

export default {
  
  setup(){
    const num = ref((0));
    //const num = 2;

    let state = reactive({
      num1:0,
      num2:0,
      result:0      
    })

    function plusNumbers(){
      state.result = parseInt(state.num1) + parseInt(state.num2)
    }

    return {
      //reactive로 선언된 state와 plusNumbers 함수를 반환함으로써 기존 data, methods 옵션 처럼 사용이 가능해짐
      num,
      state,
      plusNumbers
    }
  }
}
</script>
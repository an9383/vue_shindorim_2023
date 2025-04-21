<template>
  <div>
  <h1>{{ reverseMessage() }}</h1>
  <h1>{{ reverseMessage() }}</h1>
  <h1>{{ reverseMessage() }}</h1>
  <h1>{{ reverseMessage() }}</h1>
</div>
<hr>
<div>
  <h1>{{ computedMessage }}</h1>
  <h1>{{ computedMessage }}</h1>
  <h1>{{ computedMessage }}</h1>
  <h1>{{ computedMessage }}</h1>
</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello Computed",
    };
  },
  methods: {
    reverseMessage() {
      console.log("이것은 메소드 입니다.");
      //split() 메서드는 받은 문자열을 인수에 있는 문자열로 나눠서 배열 - split('') 는 문자 하나하나를 배열로 만들고
      //reverse() 메서드는 배열의 순서를 반대로 만들어 줍니다.
      //join() 메서드는 배열의 값 사이에 인자값을 넣은 문자열을 만들어 줍니다.
      //https://kpbro.tistory.com/3
      return this.msg.split("").reverse().join("");
    },
    computed:{
      /*데이타
      문법적으로 methods와의 차이?
      - 파라미터가 없음 = 호출할때 괄호를 적지 않음      
      언제 호출되는가?
      한번 호출을 함 -> 캐쉬공간에 저장을 함.
      해당 데이타가 변화가 없으면, 함수를 호출하는게 아니고,
      캐쉬에 있는 값을 그냥 호출함.

      computedMessage: Hello Computed;

      */
      computedMessage(){
        console.log("이것은 computed 입니다.");
      return this.msg.split("").reverse().join("");
      }
    }
  },
};
</script>

<style scoped></style>
<template>
  <h1>{{ title }}</h1>
  <h1>{{ msg }}</h1>
  <h1>{{ level }}</h1>
  <h2 v-if="isBool">{{ isBool }}</h2>
  <h2 >{{ arrNum }}</h2>
  <h2 >{{ objTitle.id }} :: {{ objTitle.title }}</h2>

</template>

<script>


export default {
  data() {
    return {
      msg:"메세지 입니다."
    };
  },
  props:{ //태그의 속성을 만드는 거임.
    title:{
      type:String, //문자형 태그 정의
      default:'페이지 제목입니다'
    },
    level:{
      type:Number, // 숫자형 태그 정의
      default:1
    },
    isBool:{
      type:Boolean, //boolean 태그 정의
      default:false
    },
    arrNum:{
      type:Array, //Array 태그 정의
      default:function(){
        return [1,2]
      }
    },
    objTitle:{
      type:Object, //Object 태그 정의
      default:function(){
        return {
          id:1, title:'디폴트'
        }
      }
    }
  } 
};
</script>

<style scoped></style>
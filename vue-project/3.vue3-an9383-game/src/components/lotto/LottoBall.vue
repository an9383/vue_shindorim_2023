<template>
  <div class="col-lg-2 mt-3 d-flex justify-content-around">
    <svg class="rounded-circle" margin="30" width="140" height="140" focusable="false">
      <rect width="100%" height="100%" :fill="getColor()" />
      <text text-anchor="middle" x="50%" y="50%" fill="white" dy=".3em" font-size="60">
        {{ lottoNum }}
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'LottoBall',
  props: {
    lottoNum: Number
  },
  create(){
    console.log('생성된숫자'+this.lottoNum)
  },
  methods:{
    getColor(){
    let color = 'black'

    if (this.lottoNum > 0 && this.lottoNum <= 10) {
        color = 'gold'
      } else if (this.lottoNum > 10 && this.lottoNum <= 20) {
        color = 'green'
      } else if (this.lottoNum > 20 && this.lottoNum <= 30) {
        color = 'gray'
      } else if (this.lottoNum > 30 && this.lottoNum <= 40) {
        color = 'blue'
      } else {
        // eslint-disable-next-line no-unused-vars
        color = 'black'
      }
  },
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

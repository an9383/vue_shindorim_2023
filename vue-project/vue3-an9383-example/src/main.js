import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import axios from "axios";
import mixin from '@/mixins/mixins'
//import store from './store'
import { createPinia } from 'pinia'

//createApp(App).use(router).mount('#app')

const app = createApp(App)                      // createApp는 객체생성하는 수준.

// [axios / http 통신]
app.config.globalProperties.$axios = axios      //$의 의미는 전역변수라는 의미임.

// [라우터 사용 설정]
app.use(router)

//믹스인 추가
app.mixin(mixin)

//[Vuex 사용법]
//app.use(store)

//[Pinia 사용법]
app.use(createPinia())

// [main 아이디 : 렌더링 시작점]
app.mount('#app')

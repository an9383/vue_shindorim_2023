import { createApp } from 'vue'
import App from './App.vue'
import router from './router'   //폴더이름. ./의미는 현재폴더

createApp(App).use(router).mount('#app')    //전역변수 설정

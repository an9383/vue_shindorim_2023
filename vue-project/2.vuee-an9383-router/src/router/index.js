import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from "../views/HelloView.vue";
// import AboutView from "../views/AboutView.vue";
//
//
// const routes = [
//     {
//         path: '/',
//         name: 'home',
//         component: HomeView,
//     },
//     {
//         path: '/about',
//         name: 'about',
//         component: AboutView,
//     },
//     {
//         path: '/about/:username',
//         name: 'about2',
//         component: AboutView,
//     },
// ]

//lazy loading 사용시

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
        import(
            /* webpackChunkName: "home" */ /*webpackPrefetch: true*/ "../views/HelloView.vue"
            ),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
        import(
            /* webpackChunkName: "about" */ /*webpackPrefetch: true*/ "../views/AboutView.vue"
            ),
  },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router


/*
라우터
1. 라이팅의 의미
특정 URL을 특정 컴포넌트로 연결(라이팅) 한다는 의미

정적라우팅: 동적라우팅

*/

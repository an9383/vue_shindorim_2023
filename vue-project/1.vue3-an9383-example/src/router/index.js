import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { title: 'HOME' },
    component: HomeView
  },
  {
    path: "/data",
    name: 'DataBinding1',
    meta: { title: '데이터바인딩' },
    children:[
      {
        path: 'binding1',
        meta: { title: '데이터바인딩' },
        component: () => import(/* webpackChunkName: "databing1" */ '../views/1.directives/DataBinding1.vue')
      },
      {
        path: 'binding2',
        meta: { title: '데이터바인딩(html)' },
        component: () => import(/* webpackChunkName: "databing2" */ '../views/1.directives/DataBindingHtml2.vue')
      },
      {
        path: 'binding3',
        meta: { title: '데이터바인딩(InputText)' },
        component: () => import(/* webpackChunkName: "databing3" */ '../views/1.directives/DataBindingInputText3.vue')
      },
      {
        path: 'binding4',
        meta: { title: '데이터바인딩(TextArea)' },
        component: () => import(/* webpackChunkName: "databing4" */ '../views/1.directives/DataBindingTextArea4.vue')
      },
      {
        path: 'binding5',
        meta: { title: '데이터바인딩(Select)' },
        component: () => import(/* webpackChunkName: "databing5" */ '../views/1.directives/DataBindingSelect5.vue')
      },
      {
        path: 'binding6',
        meta: { title: '데이터바인딩(CheckBox)' },
        component: () => import(/* webpackChunkName: "databing6" */ '../views/1.directives/DataBindingCheckBox6.vue')
      },
      {
        path: 'binding7',
        meta: { title: '데이터바인딩(CheckBox2)' },
        component: () => import(/* webpackChunkName: "databing7" */ '../views/1.directives/DataBindingCheckBox7.vue')
      },
      {
        path: 'binding8',
        meta: { title: '데이터바인딩(라디오버튼)' },
        component: () => import(/* webpackChunkName: "databing8" */ '../views/1.directives/DataBindingRadio8.vue')
      },
    ] 
  },
  {
    path: "/vbind",
    name: "home",
    meta: { title: "바인딩(v-bind)" },
    children: [
      {
        path: "binding9",
        meta: { title: "데이터바인딩-Attr(속성)" },
        component: () =>
          import(
            /* webpackChunkName: "databing9" */ "../views/2.vbind/DataBindingAttr9.vue"
          ),
      },
      {
        path: "binding10",
        meta: { title: "데이터바인딩-버튼(속성)" },
        component: () =>
          import(
            /* webpackChunkName: "databing10" */ "../views/2.vbind/DataBindingButton10.vue"
          ),
      },
      {
        path: "binding11",
        meta: { title: "데이터바인딩-클래스(속성)" },
        component: () =>
          import(
            /* webpackChunkName: "databing11" */ "../views/2.vbind/DataBindingClass11.vue"
          ),
      },
      {
        path: "binding12",
        meta: { title: "데이터바인딩-클래스2(속성)" },
        component: () =>
          import(
            /* webpackChunkName: "databing12" */ "../views/2.vbind/DataBindingClass12.vue"
          ),
      },
      {
        path: "binding13",
        meta: { title: "데이터바인딩-for문" },
        component: () =>
          import(
            /* webpackChunkName: "databing13" */ "../views/3.vfor/DataBindingList13.vue"
          ),
      },
      {
        path: "binding14",
        meta: { title: "데이터바인딩-IF문" },
        component: () =>
          import(
            /* webpackChunkName: "databing14" */ "../views/4.vif/DataBindingIf14.vue"
            
          ),
      },
      {
        path: "binding15",
        meta: { title: "이벤트클릭-von" },
        component: () =>
          import(
            /* webpackChunkName: "databing15" */ "../views/5.von/EventClick15.vue"
            
          ),
      },
      {
        path: "binding16",
        meta: { title: "이벤트 체인지" },
        component: () =>
          import(
            /* webpackChunkName: "databing16" */ "../views/5.von/EventChange16.vue"
            
          ),
      },
      {
        path: "binding17",
        meta: { title: "이벤트 Key" },
        component: () =>
          import(
            /* webpackChunkName: "databing17" */ "../views/5.von/EventKey17.vue"
            
          ),
      },
      {
        path: "binding18",
        meta: { title: "함수학습-1" },
        component: () =>
          import(
            /* webpackChunkName: "databing18" */ "../views/6.functions/MethodVSComputed1.vue"
            
          ),
      },
      {
        path: "binding19",
        meta: { title: "함수학습-2(Computed 예제)" },
        component: () =>
          import(
            /* webpackChunkName: "databing19" */ "../views/6.functions/MethodVSComputed2.vue"
            
          ),
      },
      {
        path: "binding20",
        meta: { title: "함수학습-3(Watch 예제)" },
        component: () =>
          import(
            /* webpackChunkName: "databing20" */ "../views/6.functions/MethodVSWatch3.vue"
            
          ),
      },
      {
        path: "binding21",
        meta: { title: "라이프 사이클 예제" },
        component: () =>
          import(
            /* webpackChunkName: "databing21" */ "../views/7.lifecycle/LifeCycleEvent1.vue"
            
          ),
      },
      {
        path: "binding22",
        meta: { title: "Axios-Get방식 예제" },
        component: () =>
          import(
            /* webpackChunkName: "databing22" */ "../views/8.axios/AxiosGet1.vue"
            
          ),
      },
      {
        path: "binding23",
        meta: { title: "Axios-Post방식 예제" },
        component: () =>
          import(
            /* webpackChunkName: "databing23" */ "../views/8.axios/AxiosPost2.vue"
            
          ),
      },
      {
        path: "binding24",
        meta: { title: "Axios-html바인딩 예제" },
        component: () =>
          import(
            /* webpackChunkName: "databing24" */ "../views/8.axios/AxiosPost3.vue"
            
          ),
      },
      {
        path: "binding25",
        meta: { title: "Axios-전역객체 예제" },
        component: () =>
          import(
            /* webpackChunkName: "databing25" */ "../views/8.axios/AxiosGlobal4.vue"
            
          ),
      },
      {
        path: "binding26",
        meta: { title: "Axios-동기화 예제" },
        component: () =>
          import(
            /* webpackChunkName: "databing26" */ "../views/8.axios/AxiosSync5.vue"
            
          ),
      },
      {
        path: "binding27",
        meta: { title: "컴포넌트 개념" },
        component: () =>
          import(
            /* webpackChunkName: "databing26" */ "../views/9.compo/ParentComponent.vue"
            
          ),
      },
      {
        path: "binding28",
        meta: { title: "컴포넌트 부모-자식 이벤트 호출" },
        component: () =>
          import(
            /* webpackChunkName: "databing28" */ "../views/10.props/ParentCompo1.vue"
            
          ),
      },
      {
        path: "binding29",
        meta: { title: "컴포넌트 자식-부모 Emit 호출" },
        component: () =>
          import(
            /* webpackChunkName: "databing29" */ "../views/10.props/ParentCompoEmit3.vue"
            
          ),
      },
      {
        path: "binding30",
        meta: { title: "슬롯 => 기본개념" },
        component: () =>
          import(
            /* webpackChunkName: "databing29" */ "../views/11.slot/SlotParent.vue"
            
          ),
      },
      {
        path: "binding31",
        meta: { title: "슬롯 => 응용" },
        component: () =>
          import(
            /* webpackChunkName: "databing31" */ "../views/11.slot/SlotUseModalLayout.vue"
            
          ),
      },
      {
        path: "binding32",
        meta: { title: "Provide-Inject" },
        component: () =>
          import(
            /* webpackChunkName: "databing32" */ "../views/12.provideinject/BigComponent.vue"
            
          ),
      },
      {
        path: "binding33",
        meta: { title: "Mixin - mixed in" },
        component: () =>
          import(
            /* webpackChunkName: "databing33" */ "../views/13.mixin/UseMixinExample3.vue"
            
          ),
      },
      {
        path: "binding34",
        meta: { title: "계산기-옵셔널 예제" },
        component: () =>
          import(
            /* webpackChunkName: "databing34" */ "../views/14.composition/CalculatorOptional.vue"
            
          ),
      },
    ]
  },
  {
    path: "/compo",
    name: "CompositionApi1",
    meta: { title: "컴포지션 API" },
    children: [
      {
        path: "compo1",
        meta: { title: "컴포지션 API - 계산기" },
        component: () =>
          import(
            /* webpackChunkName: "compo1" */ "../views/14.composition/CalculatorComposition1.vue"
          ),
      },
      {
        path: "compo2",
        meta: { title: "컴포지션 API - Ref예제" },
        component: () =>
          import(
            /* webpackChunkName: "compo2" */ "../views/14.composition/CompositionRef2.vue"
          ),
      },
      {
        path: "compo3",
        meta: { title: "컴포지션 API - 함수 처리" },
        component: () =>
          import(
            /* webpackChunkName: "compo3" */ "../views/14.composition/CompositionFunction3.vue"
          ),
      },
      {
        path: "compo4",
        meta: { title: "컴포지션 API - 생명주기(Life Cycle)" },
        component: () =>
          import(
            /* webpackChunkName: "compo4" */ "../views/14.composition/CompositionLifeCycle4.vue"
          ),
      },
      {
        path: "compo5",
        meta: { title: "컴포지션 API - Props 예제" },
        component: () =>
          import(
            /* webpackChunkName: "compo5" */ "../views/14.composition/CompositionParent5.vue"
          ),
      },
      {
        path: "compo6",
        meta: { title: "컴포지션 API - ProvideInject" },
        component: () =>
          import(
            /* webpackChunkName: "compo6" */ "../views/14.composition/CompositionProvide6.vue"
          ),
      },
      {
        path: "compo7",
        meta: { title: "컴포지션 API - 스크립트 셋업" },
        component: () =>
            import(
                /* webpackChunkName: "compo7" */ "../views/14.composition/CompositionSetup.vue"
                ),
      },
      {
        path: "compo8",
        meta: { title: "컴포지션 API - Vuex예제" },
        component: () =>
            import(
                /* webpackChunkName: "compo8" */ "../views/15.vuex/UserVuex.vue"
                ),
      },
      {
        path: "compo9",
        meta: { title: "컴포지션 API - Pinia예제" },
        component: () =>
            import(
                /* webpackChunkName: "compo9" */ "../views/16.pinia/PiniaExample.vue"
                ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
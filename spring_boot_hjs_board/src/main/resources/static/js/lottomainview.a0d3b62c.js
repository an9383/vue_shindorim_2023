"use strict";(self["webpackChunkvue3_hjs_project"]=self["webpackChunkvue3_hjs_project"]||[]).push([[138],{9119:function(t,o,e){e.r(o),e.d(o,{default:function(){return S}});var l=e(3396);function n(t,o,e,n,s,i){const r=(0,l.up)("lotto-main");return(0,l.wg)(),(0,l.j4)(r)}const s={class:"container"},i={class:"row mt-sm-5"};function r(t,o,e,n,r,u){const c=(0,l.up)("lotto-ball");return(0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",i,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.lottoSet,(t=>((0,l.wg)(),(0,l.j4)(c,{key:t,lottoNum:t},null,8,["lottoNum"])))),128))])])}var u=e(7139);const c={class:"col-lg-2 mt-3 d-flex justify-content-around"},a={class:"rounded-circle",margin:"30",width:"140",height:"140",focusable:"false"},h=["fill"],m={"text-anchor":"middle",x:"50%",y:"50%",fill:"white",dy:".3em","font-size":"60"};function d(t,o,e,n,s,i){return(0,l.wg)(),(0,l.iD)("div",c,[((0,l.wg)(),(0,l.iD)("svg",a,[(0,l._)("rect",{width:"100%",height:"100%",fill:i.getColor()},null,8,h),(0,l._)("text",m,(0,u.zw)(e.lottoNum),1)]))])}var g={name:"LottoBall",props:{lottoNum:Number},created(){console.log("생성된 숫자"+this.lottoNum)},methods:{getColor(){let t="black";return t=this.lottoNum>0&&this.lottoNum<=10?"gold":this.lottoNum>10&&this.lottoNum<=20?"green":this.lottoNum>20&&this.lottoNum<=30?"gray":this.lottoNum>30&&this.lottoNum<=40?"blue":"black",console.log(t),t}}},f=e(89);const w=(0,f.Z)(g,[["render",d]]);var N=w,p={components:{LottoBall:N},data(){return{lottoSet:new Set}},created(){console.log(typeof this.lottoSet);while(6!=this.lottoSet.size){const t=Math.ceil(45*Math.random()+1);this.lottoSet.add(t)}for(let t of this.lottoSet)console.log(t)},methods:{}};const v=(0,f.Z)(p,[["render",r]]);var b=v,j={name:"MainView",components:{LottoMain:b}};const k=(0,f.Z)(j,[["render",n]]);var S=k}}]);
//# sourceMappingURL=lottomainview.a0d3b62c.js.map
import{u as f}from"./composables.33663728.js";import{_ as c,o as l,c as _,L as m,a as e,z as h,b as i,p as x,e as v,x as w,r as y,M as $,N as g,O as C}from"./entry.9868f8da.js";const k={},b={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"#fff",stroke:"#fff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-sun"},T=m('<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',9),M=[T];function I(o,t){return l(),_("svg",b,M)}const S=c(k,[["render",I]]),B={},E={width:"24",height:"24",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L=e("path",{d:"M24.0445 4L22.3413 6.86813C20.877 6.38481 18.697 6.4794 17.3256 6.86813L15.6849 4.04054C12.9904 9.16629 13.753 12.4057 15.809 14.0162C15.4944 14.2165 15.1705 14.4367 14.8356 14.6784C6.26603 7.71553 -1.44886 15.5576 3.61218 22.5641H3.65121C4.55898 23.9052 5.60491 24.7351 6.73436 25.1691C8.33447 25.7836 9.98064 25.6072 11.6018 25.3734C13.223 25.1397 14.8091 24.8464 16.321 24.9561C17.8329 25.0658 19.3448 25.4609 20.7287 26.9983C21.6724 28.046 23.0126 26.918 21.8886 25.8003C20.1831 24.1039 18.3567 23.4481 16.5614 23.3185C14.7662 23.189 13.0451 23.5514 11.4863 23.7764C9.92756 24.0014 8.55068 24.1015 7.36816 23.6468C6.81319 23.4338 6.27306 23.0983 5.75243 22.5657H23.3225C24.153 19.5799 24.2412 16.4209 23.2967 14.428C26.134 12.92 27.2751 9.35946 24.0445 4.00159V4ZM18.7758 11.7125C16.9681 12.6004 16.1477 11.881 15.7965 10.3961C17.5706 9.27519 18.6267 10.1751 18.7758 11.7125ZM21.0324 11.7125C21.1814 10.1751 22.2375 9.2744 24.0117 10.3961C23.6604 11.881 22.8393 12.6012 21.0324 11.7125Z",fill:"white"},null,-1),H=[L];function N(o,t){return l(),_("svg",E,H)}const V=c(B,[["render",N]]);const F={class:"color-mode"},Z={for:"colormode-switch",class:"color-mode-switch"},A={__name:"index",setup(o){const t=f(),n=()=>{t.preference="dark",document.getElementById("colormode-switch").checked=!0},r=()=>{t.preference="light",document.getElementById("colormode-switch").checked=!1};console.log("setup",t);const d=p=>{let s=t.preference,a=t.value;switch(p){case void 0:s==="system"&&a==="light"?r():s==="system"&&a==="dark"||s==="dark"&&a==="dark"?n():r();break;case"switch":console.log("switch"),s==="dark"&&a==="dark"?r():n();break}};return h(()=>{d()}),(p,s)=>(l(),_("div",F,[e("input",{type:"checkbox",id:"colormode-switch",onClick:s[0]||(s[0]=a=>d("switch"))}),e("label",Z,[i(S,{class:"icon-light"}),i(V,{class:"icon-dark"})])]))}},O=c(A,[["__scopeId","data-v-40624e59"]]);const j={},u=o=>(x("data-v-de2a3461"),o=o(),v(),o),z={class:"header"},D={class:"navagationbar"},P=u(()=>e("img",{class:"logo",src:"https://d2h0caecvn34a3.cloudfront.net/prod/2021/06/HeroMAMA-logo_工作區域-1.png",alt:"這是logo"},null,-1)),U=u(()=>e("ul",{class:"main-menu"},[e("li",null,"認識喵星人"),e("li",null,"喵的未來"),e("li",null,"喵的足跡"),e("li",null,"支持本喵"),e("li",null,"喵電感應")],-1)),Y={class:"action-menu"},q=u(()=>e("li",null,[e("button",{class:"no-border"},"中文")],-1)),G=u(()=>e("li",null,[e("button",{class:"no-border"},"喵語")],-1)),J=u(()=>e("ul",{class:"mobile-menu"},[e("li",null,"認識喵星人"),e("li",null,"喵的未來"),e("li",null,"喵的足跡"),e("li",null,"支持本喵"),e("li",null,"喵電感應")],-1));function K(o,t){const n=O;return l(),_("div",z,[e("div",D,[P,U,e("ul",Y,[q,G,e("li",null,[i(n)])])]),J])}const Q=c(j,[["render",K],["__scopeId","data-v-de2a3461"]]);const R={},W={class:"footer"};function X(o,t){return l(),_("div",W,"Footer")}const ee=c(R,[["render",X],["__scopeId","data-v-62202079"]]),oe=()=>{if(!document||!window)return;(document.documentElement.scrollTop||document.body.scrollTop)>0&&window.scrollTo({behavior:"smooth",top:0,left:0})},te=oe,ne=w({setup(){const o=y(!1),t=()=>{const n=window.scrollY;o.value=n>100};return h(()=>{document.addEventListener("scroll",t)}),$(()=>{document.removeEventListener("scroll",t)}),{scrollToTop:te,isShowTop:o}}});function se(o,t,n,r,d,p){return o.isShowTop?(l(),_("button",{key:0,class:"button-to-top",onClick:t[0]||(t[0]=(...s)=>o.scrollToTop&&o.scrollToTop(...s))}," TOP ")):g("",!0)}const ce=c(ne,[["render",se],["__scopeId","data-v-bba1e41c"]]),le={},_e={class:"wrapper"},re={class:"layout"};function ie(o,t){const n=Q,r=ee,d=ce;return l(),_("html",null,[e("body",_e,[e("div",re,[i(n),C(o.$slots,"default"),i(r),i(d)])])])}const ue=c(le,[["render",ie]]);export{ue as default};

import{_ as n,o as s,c,y as p,r as u,A as i,M as m,N as f,a as d,b as _,O as T}from"./entry.1b00468d.js";const v={},$={class:"header"};function b(o,e){return s(),c("div",$,"Header")}const h=n(v,[["render",b],["__scopeId","data-v-0aa4d880"]]);const y={},w={class:"footer"};function x(o,e){return s(),c("div",w,"Footer")}const k=n(y,[["render",x],["__scopeId","data-v-62202079"]]),E=()=>{if(!document||!window)return;(document.documentElement.scrollTop||document.body.scrollTop)>0&&window.scrollTo({behavior:"smooth",top:0,left:0})},N=E,S=p({setup(){const o=u(!1),e=()=>{const t=window.scrollY;o.value=t>100};return i(()=>{document.addEventListener("scroll",e)}),m(()=>{document.removeEventListener("scroll",e)}),{scrollToTop:N,isShowTop:o}}});function g(o,e,t,r,a,V){return o.isShowTop?(s(),c("button",{key:0,class:"button-to-top",onClick:e[0]||(e[0]=(...l)=>o.scrollToTop&&o.scrollToTop(...l))}," TOP ")):f("",!0)}const B=n(S,[["render",g],["__scopeId","data-v-bba1e41c"]]),C={},F={class:"wrapper"},H={class:"layout"};function I(o,e){const t=h,r=k,a=B;return s(),c("html",null,[d("body",F,[d("div",H,[_(t),T(o.$slots,"default"),_(r),_(a)])])])}const M=n(C,[["render",I]]);export{M as default};

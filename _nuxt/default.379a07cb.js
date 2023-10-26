import{u as v}from"./composables.ae4c474a.js";import{_ as a,m as d,q as _,G as x,s as t,o as h,v as i,z as S,A as w,d as m,r as b,H as $,I as k,B as C,x as f,J as T}from"./entry.91ba9b25.js";import{u as B}from"./vue.f36acd1f.2d52a9d1.js";const M={},I={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"#fff",stroke:"#fff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-sun"},H=x('<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',9),E=[H];function A(e,o){return d(),_("svg",I,E)}const N=a(M,[["render",A]]),L={},P={width:"24",height:"24",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},V=t("path",{d:"M24.0445 4L22.3413 6.86813C20.877 6.38481 18.697 6.4794 17.3256 6.86813L15.6849 4.04054C12.9904 9.16629 13.753 12.4057 15.809 14.0162C15.4944 14.2165 15.1705 14.4367 14.8356 14.6784C6.26603 7.71553 -1.44886 15.5576 3.61218 22.5641H3.65121C4.55898 23.9052 5.60491 24.7351 6.73436 25.1691C8.33447 25.7836 9.98064 25.6072 11.6018 25.3734C13.223 25.1397 14.8091 24.8464 16.321 24.9561C17.8329 25.0658 19.3448 25.4609 20.7287 26.9983C21.6724 28.046 23.0126 26.918 21.8886 25.8003C20.1831 24.1039 18.3567 23.4481 16.5614 23.3185C14.7662 23.189 13.0451 23.5514 11.4863 23.7764C9.92756 24.0014 8.55068 24.1015 7.36816 23.6468C6.81319 23.4338 6.27306 23.0983 5.75243 22.5657H23.3225C24.153 19.5799 24.2412 16.4209 23.2967 14.428C26.134 12.92 27.2751 9.35946 24.0445 4.00159V4ZM18.7758 11.7125C16.9681 12.6004 16.1477 11.881 15.7965 10.3961C17.5706 9.27519 18.6267 10.1751 18.7758 11.7125ZM21.0324 11.7125C21.1814 10.1751 22.2375 9.2744 24.0117 10.3961C23.6604 11.881 22.8393 12.6012 21.0324 11.7125Z",fill:"white"},null,-1),j=[V];function F(e,o){return d(),_("svg",P,j)}const O=a(L,[["render",F]]);const Z={class:"color-mode"},U={for:"colormode-switch",class:"color-mode-switch"},z={__name:"index",setup(e){const o=v(),n=()=>{o.preference="dark",document.getElementById("colormode-switch").checked=!0},c=()=>{o.preference="light",document.getElementById("colormode-switch").checked=!1},r=l=>{let s=o.preference,u=o.value;switch(l){case void 0:s==="system"&&u==="light"?c():s==="system"&&u==="dark"||s==="dark"&&u==="dark"?n():c();break;case"switch":s==="dark"&&u==="dark"?c():n();break}};return h(()=>{r()}),(l,s)=>(d(),_("div",Z,[t("input",{type:"checkbox",id:"colormode-switch",onClick:s[0]||(s[0]=u=>r("switch"))}),t("label",U,[i(N,{class:"icon-light"}),i(O,{class:"icon-dark"})])]))}},q=a(z,[["__scopeId","data-v-1288a164"]]);const D={},p=e=>(S("data-v-b5bc7bac"),e=e(),w(),e),G={class:"header"},J={class:"navagationbar"},Y=p(()=>t("img",{class:"logo",src:"https://d2h0caecvn34a3.cloudfront.net/prod/2021/06/HeroMAMA-logo_工作區域-1.png",alt:"這是logo"},null,-1)),K=p(()=>t("ul",{class:"main-menu"},[t("li",null,"認識喵星人"),t("li",null,"喵的未來"),t("li",null,"喵的足跡"),t("li",null,"支持本喵"),t("li",null,"喵電感應")],-1)),Q={class:"action-menu"},R=p(()=>t("li",null,[t("select",{class:"no-border"},[t("option",{value:"Zh"},"中文"),t("option",{value:"Meow"},"喵語")])],-1)),W=p(()=>t("ul",{class:"mobile-menu"},[t("li",null,"認識喵星人"),t("li",null,"喵的未來"),t("li",null,"喵的足跡"),t("li",null,"支持本喵"),t("li",null,"喵電感應")],-1));function X(e,o){const n=q;return d(),_("div",G,[t("div",J,[Y,K,t("ul",Q,[R,t("li",null,[i(n)])])]),W])}const ee=a(D,[["render",X],["__scopeId","data-v-b5bc7bac"]]);const te={},oe={class:"footer"};function ne(e,o){return d(),_("div",oe,"Footer")}const se=a(te,[["render",ne],["__scopeId","data-v-62202079"]]),ce=()=>{if(!document||!window)return;(document.documentElement.scrollTop||document.body.scrollTop)>0&&window.scrollTo({behavior:"smooth",top:0,left:0})},re=ce,le=m({setup(){const e=b(!1),o=()=>{const n=window.scrollY;e.value=n>100};return h(()=>{document.addEventListener("scroll",o)}),$(()=>{document.removeEventListener("scroll",o)}),{scrollToTop:re,isShowTop:e}}});function ie(e,o,n,c,r,l){return e.isShowTop?(d(),_("button",{key:0,class:"button-to-top",onClick:o[0]||(o[0]=(...s)=>e.scrollToTop&&e.scrollToTop(...s))}," TOP ")):k("",!0)}const ae=a(le,[["render",ie],["__scopeId","data-v-bba1e41c"]]),de=e=>Object.fromEntries(Object.entries(e).filter(([,o])=>o!==void 0)),g=(e,o)=>(n,c)=>(B(()=>e({...de(n),...c.attrs},c)),()=>{var r,l;return o?(l=(r=c.slots).default)==null?void 0:l.call(r):null}),y={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},_e=m({name:"Html",inheritAttrs:!1,props:{...y,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:g(e=>({htmlAttrs:e}),!0)}),ue=m({name:"Body",inheritAttrs:!1,props:{...y,renderPriority:[String,Number]},setup:g(e=>({bodyAttrs:e}),!0)}),pe={},me={class:"layout"};function fe(e,o){const n=ee,c=se,r=ae,l=ue,s=_e;return d(),C(s,null,{default:f(()=>[i(l,{class:"wrapper"},{default:f(()=>[t("div",me,[i(n),T(e.$slots,"default"),i(c),i(r)])]),_:3})]),_:3})}const ve=a(pe,[["render",fe]]);export{ve as default};

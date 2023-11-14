import{u as b,_ as v}from"./composables.a9cb0701.js";import{_ as m}from"./nuxt-link.85a1ac60.js";import{_ as i,o as _,c as d,n as k,a as e,s as w,b as c,w as u,t as a,q as T,u as M,p as $,e as x,x as V,d as Z,y as H,r as I,z as E,A as S,B as L}from"./entry.2fc0aa38.js";const B={},N={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"#fff",stroke:"#fff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-sun"},D=k('<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',9),z=[D];function F(o,t){return _(),d("svg",N,z)}const A=i(B,[["render",F]]),j={},U={width:"24",height:"24",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},W=e("path",{d:"M24.0445 4L22.3413 6.86813C20.877 6.38481 18.697 6.4794 17.3256 6.86813L15.6849 4.04054C12.9904 9.16629 13.753 12.4057 15.809 14.0162C15.4944 14.2165 15.1705 14.4367 14.8356 14.6784C6.26603 7.71553 -1.44886 15.5576 3.61218 22.5641H3.65121C4.55898 23.9052 5.60491 24.7351 6.73436 25.1691C8.33447 25.7836 9.98064 25.6072 11.6018 25.3734C13.223 25.1397 14.8091 24.8464 16.321 24.9561C17.8329 25.0658 19.3448 25.4609 20.7287 26.9983C21.6724 28.046 23.0126 26.918 21.8886 25.8003C20.1831 24.1039 18.3567 23.4481 16.5614 23.3185C14.7662 23.189 13.0451 23.5514 11.4863 23.7764C9.92756 24.0014 8.55068 24.1015 7.36816 23.6468C6.81319 23.4338 6.27306 23.0983 5.75243 22.5657H23.3225C24.153 19.5799 24.2412 16.4209 23.2967 14.428C26.134 12.92 27.2751 9.35946 24.0445 4.00159V4ZM18.7758 11.7125C16.9681 12.6004 16.1477 11.881 15.7965 10.3961C17.5706 9.27519 18.6267 10.1751 18.7758 11.7125ZM21.0324 11.7125C21.1814 10.1751 22.2375 9.2744 24.0117 10.3961C23.6604 11.881 22.8393 12.6012 21.0324 11.7125Z",fill:"white"},null,-1),q=[W];function G(o,t){return _(),d("svg",U,q)}const J=i(j,[["render",G]]);const K={class:"color-mode"},O={for:"colormode-switch",class:"color-mode-switch"},P={__name:"index",setup(o){const t=b(),n=()=>{t.preference="dark",document.getElementById("colormode-switch").checked=!0},s=()=>{t.preference="light",document.getElementById("colormode-switch").checked=!1},h=l=>{let r=20;if(l<=1||l<=8||l>=r)return n();s()},f=()=>{let l=t.preference,r=t.value;l==="dark"&&r==="dark"?s():n()};return w(()=>{let l=new Date().getHours();h(l)}),(l,r)=>(_(),d("div",K,[e("input",{type:"checkbox",id:"colormode-switch",onClick:f}),e("label",O,[c(A,{class:"icon-light"}),c(J,{class:"icon-dark"})])]))}},Y=i(P,[["__scopeId","data-v-d585025c"]]);const Q={},p=o=>($("data-v-e56d97c7"),o=o(),x(),o),R={class:"header"},X={class:"navagationbar"},e1=p(()=>e("svg",{class:"logo",width:"140",height:"48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{class:"logo-text",fill:"#232323",d:"M91.716 21.2h9.234c.252 0 .431-.052.538-.156.119-.116.179-.298.179-.544v-2.275c0-.246-.06-.421-.179-.525-.107-.117-.286-.175-.538-.175h-5.492v-1.672h3.88c.252 0 .431-.052.538-.156.119-.116.179-.298.179-.544v-2.08c0-.247-.06-.422-.18-.526-.106-.117-.285-.175-.537-.175h-3.88v-1.497h5.492c.252 0 .431-.052.538-.156.119-.116.179-.298.179-.544V7.9c0-.246-.06-.421-.179-.525-.107-.117-.286-.175-.538-.175h-9.234c-.252 0-.437.058-.557.175-.106.104-.159.279-.159.525v12.6c0 .246.053.428.16.544.119.104.304.156.556.156ZM52.643 38.533h-2.934c-.25 0-.433-.054-.552-.163-.104-.122-.157-.312-.157-.57V24.6c0-.258.053-.441.157-.55.119-.122.302-.183.552-.183h3.17c.21 0 .38.047.512.142.144.095.276.252.394.469l1.772 3.32c.066.122.118.21.157.265a.263.263 0 0 0 .197.081h.178c.078 0 .137-.027.177-.081.052-.054.111-.143.177-.265l1.753-3.32c.118-.218.242-.374.374-.469a.947.947 0 0 1 .531-.142h3.19c.25 0 .427.06.532.183.118.109.177.292.177.55v13.2c0 .258-.06.448-.177.57-.105.109-.282.163-.532.163H59.26c-.25 0-.433-.054-.551-.163-.106-.122-.158-.312-.158-.57v-7.17l-1.162 2.22c-.118.23-.262.4-.433.51-.157.094-.361.142-.61.142h-.788c-.25 0-.46-.048-.63-.143-.158-.108-.295-.278-.414-.509l-1.161-2.22v7.17c0 .258-.06.448-.178.57-.105.109-.282.163-.531.163ZM66.383 38.533h9.234c.252 0 .431-.054.537-.163.12-.122.18-.312.18-.57v-2.383c0-.258-.06-.442-.18-.55-.106-.123-.285-.184-.537-.184h-5.493v-1.752h3.881c.252 0 .431-.054.537-.162.12-.123.18-.313.18-.57v-2.18c0-.258-.06-.442-.18-.55-.106-.123-.285-.184-.537-.184h-3.88v-1.568h5.492c.252 0 .431-.055.537-.163.12-.123.18-.313.18-.57V24.6c0-.258-.06-.441-.18-.55-.106-.122-.285-.183-.537-.183h-9.234c-.252 0-.438.06-.557.183-.106.109-.16.292-.16.55v13.2c0 .258.054.448.16.57.12.109.305.163.557.163Z"}),e("path",{class:"logo-text",fill:"#232323","fill-rule":"evenodd","clip-rule":"evenodd",d:"M91 34.544c0 .6-.09 1.147-.27 1.643-.168.482-.477.9-.928 1.251-.438.34-1.05.606-1.836.802-.773.195-1.758.293-2.956.293s-2.19-.098-2.976-.293c-.786-.196-1.404-.463-1.855-.802a2.894 2.894 0 0 1-.928-1.251A5.103 5.103 0 0 1 79 34.544v-6.668c0-.6.084-1.141.251-1.624.18-.495.49-.919.928-1.27.45-.353 1.069-.627 1.855-.822.786-.196 1.778-.293 2.976-.293s2.183.097 2.956.293c.786.195 1.398.47 1.836.821.45.352.76.776.927 1.271.18.483.271 1.024.271 1.623v6.669Zm-7.614-.704c0 .26.097.482.29.665.194.17.638.254 1.334.254.695 0 1.14-.085 1.333-.254a.88.88 0 0 0 .29-.665v-5.26a.8.8 0 0 0-.29-.626c-.193-.183-.638-.274-1.333-.274-.696 0-1.14.091-1.334.274a.8.8 0 0 0-.29.625v5.261Z"}),e("path",{class:"logo-text",fill:"#232323",d:"M104.024 23.867h2.934c.249 0 .426.06.531.183.119.109.178.292.178.55v7.904c0 .434-.02.842-.059 1.222-.027.367-.125.801-.296 1.304l-.984 2.77c-.066.204-.164.38-.296.53-.118.135-.282.203-.492.203h-2.619c-.21 0-.4-.047-.571-.142a.695.695 0 0 1-.335-.469l-.905-3.32c-.04-.136-.092-.224-.158-.265a.262.262 0 0 0-.197-.082h-.177a.334.334 0 0 0-.217.082c-.052.04-.098.129-.137.265l-.926 3.32a.819.819 0 0 1-.295.469.946.946 0 0 1-.532.142h-2.599a.818.818 0 0 1-.551-.203 1.178 1.178 0 0 1-.315-.53l-.985-2.811c-.17-.503-.276-.937-.315-1.304-.026-.38-.04-.788-.04-1.222V24.6c0-.258.053-.441.158-.55.118-.122.302-.183.552-.183h3.032c.25 0 .427.06.531.183.119.109.178.292.178.55v7.496l1.142-2.566c.105-.231.243-.394.413-.49.171-.094.381-.142.63-.142h.827c.25 0 .46.048.631.143.17.095.308.258.413.489l1.142 2.566V24.6c0-.258.053-.441.158-.55.118-.122.302-.183.551-.183ZM85.314 21.2H80.02c-.258 0-.475-.045-.651-.136-.163-.09-.292-.26-.387-.506l-1.996-4.764a26.843 26.843 0 0 1-.305-.739 8.077 8.077 0 0 1-.204-.622 4.335 4.335 0 0 1-.122-.602c-.014-.22-.02-.487-.02-.798V7.9c0-.246.054-.421.162-.525.122-.117.313-.175.57-.175h3.238c.258 0 .455.058.591.175.136.104.204.279.204.525v5.367c0 .13.013.259.04.389.028.13.068.265.123.408l.957 2.722c.04.13.088.22.142.272a.42.42 0 0 0 .245.059h.224a.42.42 0 0 0 .244-.059.649.649 0 0 0 .142-.272l.958-2.742a2.7 2.7 0 0 0 .122-.408c.027-.13.04-.26.04-.389V7.9c0-.246.055-.421.163-.525.123-.117.313-.175.57-.175h3.198c.258 0 .441.058.55.175.122.104.183.279.183.525v5.133c0 .311-.014.577-.04.798a2.954 2.954 0 0 1-.102.602 8.036 8.036 0 0 1-.204.623c-.082.207-.183.453-.306.738l-1.995 4.764c-.095.247-.231.415-.408.506-.163.09-.373.136-.63.136Z"}),e("path",{class:"logo-text",fill:"#232323","fill-rule":"evenodd","clip-rule":"evenodd",d:"M66.385 21.044c.115-.116.173-.298.173-.544v-2.722h3.415V20.5c0 .246.058.428.174.544.128.104.321.156.579.156h2.913c.244 0 .418-.052.52-.156.116-.116.174-.298.174-.544v-5.133c0-.39-.064-.837-.193-1.342a13.557 13.557 0 0 0-.56-1.77l-1.677-4.413a.894.894 0 0 0-.367-.486c-.154-.104-.354-.156-.598-.156h-5.19c-.257 0-.47.052-.636.156-.155.103-.27.265-.348.486l-1.678 4.413c-.258.675-.45 1.264-.579 1.77a6.095 6.095 0 0 0-.174 1.342V20.5c0 .246.052.428.155.544.115.104.295.156.54.156h2.836c.244 0 .418-.052.52-.156Zm.366-6.805.907-2.956a.856.856 0 0 1 .154-.252.33.33 0 0 1 .213-.078h.482a.26.26 0 0 1 .193.078.663.663 0 0 1 .174.252l.906 2.956h-3.029Z"}),e("path",{class:"logo-text",fill:"#232323",d:"M56.137 21.2H49.73c-.257 0-.446-.052-.568-.156-.108-.116-.162-.298-.162-.544v-2.275c0-.246.054-.421.162-.525.122-.117.311-.175.568-.175h5.454c.175 0 .304-.052.385-.156a.63.63 0 0 0 .142-.408c0-.22-.047-.382-.142-.486-.081-.104-.21-.162-.385-.175l-3.041-.408c-.947-.13-1.71-.428-2.291-.895-.568-.466-.852-1.244-.852-2.333v-2.042c0-1.102.372-1.944 1.115-2.528.743-.596 1.77-.894 3.082-.894h5.677c.256 0 .439.058.547.175.122.104.182.279.182.525v2.314c0 .246-.06.428-.182.544-.108.104-.29.156-.547.156H54.15a.492.492 0 0 0-.406.175.583.583 0 0 0-.142.408c0 .169.048.311.142.428.095.117.23.181.406.194l3.02.39c.947.129 1.71.427 2.291.894.582.466.872 1.244.872 2.333v2.042c0 1.102-.378 1.95-1.135 2.547-.743.583-1.764.875-3.061.875ZM109.35 26.533h4.633c.123 0 .211-.024.263-.074.058-.055.087-.142.087-.259v-1.083c0-.118-.029-.201-.087-.25-.052-.056-.14-.084-.263-.084h-2.774v-.194c0-.099.016-.164.049-.195a.573.573 0 0 1 .204-.083l1.324-.398c.467-.136.837-.327 1.109-.574.273-.247.409-.602.409-1.065v-.87c0-.5-.149-.88-.448-1.14-.291-.265-.713-.397-1.265-.397h-2.871c-.123 0-.214.027-.272.083-.052.05-.078.133-.078.25v1.083c0 .118.026.204.078.26.058.049.149.074.272.074h2.112c.097 0 .166.018.205.055.038.031.058.093.058.185 0 .1-.02.173-.058.223-.033.049-.101.086-.205.11l-1.304.39a4.115 4.115 0 0 0-.613.222 1.52 1.52 0 0 0-.487.352c-.136.148-.243.34-.321.574-.071.228-.107.521-.107.88V26.2c0 .117.026.204.078.26.058.049.149.073.272.073Z"}),e("path",{fill:"#FF8E31",d:"M26.776 16.732 21 31.955l6.939 7.245H38.8l6.866-7.245-5.522-15.223-2.107 4.5h-8.9l-2.362-4.5Z"}),e("path",{fill:"#DA4134",d:"m28.883 23.705.325-2.583h8.83l-9.155 2.583Z"}),e("path",{fill:"#fff",d:"M33.333 33.604c-.49.58-1.218.947-2.03.947-1.477 0-2.674-1.214-2.674-2.711 0-1.498 1.197-2.712 2.674-2.712.812 0 1.54.367 2.03.947a2.653 2.653 0 0 1 2.03-.947c1.478 0 2.675 1.214 2.675 2.712 0 1.497-1.197 2.711-2.674 2.711-.813 0-1.54-.367-2.03-.947Z"}),e("ellipse",{fill:"#232323",cx:"31.299",cy:"32.356",rx:"1.399",ry:"1.42"}),e("ellipse",{fill:"#232323",cx:"35.368",cy:"32.356",rx:"1.399",ry:"1.42"})],-1)),o1=p(()=>e("div",null,null,-1)),t1={class:"main-menu"},c1={href:"#"},n1={href:"#"},l1={href:"#"},s1={href:"#"},a1={href:"#"},i1={class:"action-menu"},_1=p(()=>e("option",{value:"zhTW"},"中文",-1)),d1=p(()=>e("option",{value:"meow"},"喵語",-1)),r1=[_1,d1],h1={class:"mobile-menu"},u1={href:"#"},p1={href:"#"},f1={href:"#"},v1={href:"#"},m1={href:"#"};function w1(o,t){const n=m,s=Y;return _(),d("div",R,[e("div",X,[c(n,{to:"/",title:"回到首頁"},{default:u(()=>[e1]),_:1}),o1,e("ul",t1,[e("li",null,[e("a",c1,a(o.$t("nav[0]")),1)]),e("li",null,[e("a",n1,a(o.$t("nav[1]")),1)]),e("li",null,[e("a",l1,a(o.$t("nav[2]")),1)]),e("li",null,[e("a",s1,a(o.$t("nav[3]")),1)]),e("li",null,[e("a",a1,a(o.$t("nav[4]")),1)])]),e("ul",i1,[e("li",null,[T(e("select",{class:"no-border","onUpdate:modelValue":t[0]||(t[0]=h=>o.$i18n.locale=h)},r1,512),[[M,o.$i18n.locale]])]),e("li",null,[c(s)])])]),e("ul",h1,[e("li",null,[e("a",u1,a(o.$t("nav[0]")),1)]),e("li",null,[e("a",p1,a(o.$t("nav[1]")),1)]),e("li",null,[e("a",f1,a(o.$t("nav[2]")),1)]),e("li",null,[e("a",v1,a(o.$t("nav[3]")),1)]),e("li",null,[e("a",m1,a(o.$t("nav[4]")),1)])])])}const $1=i(Q,[["render",w1],["__scopeId","data-v-e56d97c7"]]);const x1={},y=o=>($("data-v-0ea8ce3d"),o=o(),x(),o),y1={class:"footer"},g1={class:"footer-container"},C1=y(()=>e("ul",{class:"footer-info"},[e("li",null,"競選總部：喵星路9487巷87號空紙箱"),e("li",null,"服務電話：02-2222222"),e("li",null,[Z(" E-mail信箱："),e("a",{href:"mailto: meowmeow@catparty.com?subject=我有話跟喵喵說"},"meowmeow@catparty.com")])],-1)),b1={class:"social-media"},k1=y(()=>e("div",{class:"copyright"},"©2023 喵立翰｜2024不分區立委競選官方網站",-1));function T1(o,t){const n=V("font-awesome-icon"),s=m;return _(),d("div",y1,[e("div",g1,[C1,e("ul",b1,[e("li",null,[c(s,{to:"https://store.line.me/stickershop/product/24123123/zh-Hant",title:"另開新視窗 前往喵立翰的instagram",target:"_blank",external:""},{default:u(()=>[c(n,{icon:["fab","instagram"]})]),_:1})]),e("li",null,[c(s,{to:"https://www.facebook.com/CatMemeJustTest?locale=zh_TW",title:"另開新視窗 前往貓咪迷因facebook粉絲專頁",target:"_blank",external:""},{default:u(()=>[c(n,{icon:["fab","facebook"]})]),_:1})]),e("li",null,[c(s,{to:"https://youtu.be/5LrG333wKy8?si=-3EnE2ClVnCZDEH2",title:"另開新視窗 前往youtube觀看搞笑貓咪",target:"_blank",external:""},{default:u(()=>[c(n,{icon:["fab","youtube"]})]),_:1})])])]),k1])}const M1=i(x1,[["render",T1],["__scopeId","data-v-0ea8ce3d"]]),V1=()=>{if(!document||!window)return;(document.documentElement.scrollTop||document.body.scrollTop)>0&&window.scrollTo({behavior:"smooth",top:0,left:0})},Z1=V1,H1=H({setup(){const o=I(!1),t=()=>{const n=window.scrollY;o.value=n>100};return w(()=>{document.addEventListener("scroll",t)}),E(()=>{document.removeEventListener("scroll",t)}),{scrollToTop:Z1,isShowTop:o}}});function I1(o,t,n,s,h,f){return o.isShowTop?(_(),d("button",{key:0,class:"button-to-top",onClick:t[0]||(t[0]=(...l)=>o.scrollToTop&&o.scrollToTop(...l))}," TOP ")):S("",!0)}const E1=i(H1,[["render",I1],["__scopeId","data-v-849b91d8"]]),S1={components:{Loading:v}},L1={class:"wrapper"},B1={class:"layout"};function N1(o,t,n,s,h,f){const l=v,r=$1,g=M1,C=E1;return _(),d("div",null,[c(l),e("html",null,[e("body",L1,[e("div",B1,[c(r),L(o.$slots,"default"),c(g),c(C)])])])])}const A1=i(S1,[["render",N1]]);export{A1 as default};

import{d as p,b as r,f as y,V as O,p as E,h as M,l as q,a as x,r as _,z,W as A,X as H,Y as j,Z as L,_ as U,j as X,$ as Y}from"./index.1e135cbc.js";import{k as Z,l as G,u as W}from"./ssrBoot.e6ae72c6.js";function J(e){return{aspectStyles:y(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const K=p({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...Z()},setup(e,l){let{slots:i}=l;const{aspectStyles:n}=J(e),{dimensionStyles:v}=G(e);return W(()=>{var a;return r("div",{class:"v-responsive",style:v.value},[r("div",{class:"v-responsive__sizer",style:n.value},null),(a=i.additional)==null?void 0:a.call(i),i.default&&r("div",{class:["v-responsive__content",e.contentClass]},[i.default()])])}),{}}});function Q(e,l){if(!O)return;const i=l.modifiers||{},n=l.value,{handler:v,options:a}=typeof n=="object"?n:{handler:n,options:{}},s=new IntersectionObserver(function(){var d;let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const c=(d=e._observe)==null?void 0:d[l.instance.$.uid];if(!c)return;const f=g.some(S=>S.isIntersecting);v&&(!i.quiet||c.init)&&(!i.once||f||c.init)&&v(f,g,u),f&&i.once?B(e,l):c.init=!0},a);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:s},s.observe(e)}function B(e,l){var i;const n=(i=e._observe)==null?void 0:i[l.instance.$.uid];!n||(n.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const ee={mounted:Q,unmounted:B},te=ee,ne=E({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),h=(e,l)=>{let{slots:i}=l;const{transition:n,...v}=e,{component:a=x,...s}=typeof n=="object"?n:{};return M(a,q(typeof n=="string"?{name:n}:s,v),i)},se=p({name:"VImg",directives:{intersect:te},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...ne()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:i,slots:n}=l;const v=_(""),a=_(),s=_(e.eager?"loading":"idle"),d=_(),g=_(),u=y(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),c=y(()=>u.value.aspect||d.value/g.value||0);z(()=>e.src,()=>{f(s.value!=="idle")}),z(c,(t,o)=>{!t&&o&&a.value&&b(a.value)}),A(()=>f());function f(t){if(!(e.eager&&t)&&!(O&&!t&&!e.eager)){if(s.value="loading",u.value.lazySrc){const o=new Image;o.src=u.value.lazySrc,b(o,null)}!u.value.src||H(()=>{var o,m;if(i("loadstart",((o=a.value)==null?void 0:o.currentSrc)||u.value.src),(m=a.value)!=null&&m.complete){if(a.value.naturalWidth||$(),s.value==="error")return;c.value||b(a.value,null),S()}else c.value||b(a.value),R()})}}function S(){var t;R(),s.value="loaded",i("load",((t=a.value)==null?void 0:t.currentSrc)||u.value.src)}function $(){var t;s.value="error",i("error",((t=a.value)==null?void 0:t.currentSrc)||u.value.src)}function R(){const t=a.value;t&&(v.value=t.currentSrc||t.src)}let I=-1;function b(t){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{clearTimeout(I);const{naturalHeight:N,naturalWidth:V}=t;N||V?(d.value=V,g.value=N):!t.complete&&s.value==="loading"&&o!=null?I=window.setTimeout(m,o):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,g.value=1)};m()}const w=y(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),P=()=>{var t;if(!u.value.src||s.value==="idle")return null;const o=r("img",{class:["v-img__img",w.value],src:u.value.src,srcset:u.value.srcset,alt:"",sizes:e.sizes,ref:a,onLoad:S,onError:$},null),m=(t=n.sources)==null?void 0:t.call(n);return r(h,{transition:e.transition,appear:!0},{default:()=>[j(m?r("picture",{class:"v-img__picture"},[m,o]):o,[[Y,s.value==="loaded"]])]})},k=()=>r(h,{transition:e.transition},{default:()=>[u.value.lazySrc&&s.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",w.value],src:u.value.lazySrc,alt:""},null)]}),C=()=>n.placeholder?r(h,{transition:e.transition,appear:!0},{default:()=>[(s.value==="loading"||s.value==="error"&&!n.error)&&r("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,F=()=>n.error?r(h,{transition:e.transition,appear:!0},{default:()=>[s.value==="error"&&r("div",{class:"v-img__error"},[n.error()])]}):null,D=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,T=_(!1);{const t=z(c,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{T.value=!0})}),t())})}return W(()=>j(r(K,{class:["v-img",{"v-img--booting":!T.value}],style:{width:X(e.width==="auto"?d.value:e.width)},aspectRatio:c.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>r(U,null,[r(P,null,null),r(k,null,null),r(D,null,null),r(C,null,null),r(F,null,null)]),default:n.default}),[[L("intersect"),{handler:f,options:e.options},null,{once:!0}]])),{currentSrc:v,image:a,state:s,naturalWidth:d,naturalHeight:g}}});export{h as M,se as V};

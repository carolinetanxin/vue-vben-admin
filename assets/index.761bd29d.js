import{au as C,a as _,cD as v,v as y,fs as F,aw as a,o as B,j as g,z as n,n as s,i as h,B as w,k as i,E as b}from"./index.e610cdad.js";import{P as k}from"./index.4b0a3a78.js";import"./index.96bdb240.js";import"./index.5a37f488.js";import"./useSize.d18d2730.js";import"./eagerComputed.42110f62.js";import"./useWindowSizeFn.a2d28282.js";import"./useContentViewHeight.6e637be8.js";import"./ArrowLeftOutlined.e3c09a2a.js";import"./index.fa8bdbf5.js";import"./transButton.e7ac5c8d.js";const x=_({name:"Copy",components:{CollapseContainer:v,PageWrapper:k},setup(){const e=y(""),{createMessage:o}=b(),{clipboardRef:r,copiedRef:u}=F();function p(){const t=i(e);if(!t){o.warning("\u8BF7\u8F93\u5165\u8981\u62F7\u8D1D\u7684\u5185\u5BB9\uFF01");return}r.value=t,i(u)&&o.warning("copy success\uFF01")}return{handleCopy:p,value:e}}}),D={class:"flex justify-center"};function P(e,o,r,u,p,t){const l=a("a-input"),c=a("a-button"),m=a("CollapseContainer"),d=a("PageWrapper");return B(),g(d,{title:"\u6587\u672C\u590D\u5236\u793A\u4F8B"},{default:n(()=>[s(m,{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:n(()=>[h("div",D,[s(l,{placeholder:"\u8BF7\u8F93\u5165",value:e.value,"onUpdate:value":o[0]||(o[0]=f=>e.value=f)},null,8,["value"]),s(c,{type:"primary",onClick:e.handleCopy},{default:n(()=>[w(" Copy ")]),_:1},8,["onClick"])])]),_:1})]),_:1})}var U=C(x,[["render",P]]);export{U as default};
import{au as y,a as _,aw as t,o as E,j as A,z as n,n as r,B as m}from"./index.e610cdad.js";import{A as R}from"./index.67c0d62c.js";import{u as a}from"./index.a7a21bff.js";import k from"./Drawer1.cceb8c0d.js";import B from"./Drawer2.9d238156.js";import $ from"./Drawer3.47922c77.js";import v from"./Drawer4.cbe500a9.js";import P from"./Drawer5.aec4fe5b.js";import{P as W}from"./index.4b0a3a78.js";import"./index.1a2b903f.js";import"./ArrowLeftOutlined.e3c09a2a.js";import"./BasicForm.b44ed29e.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.982ba678.js";import"./index.561840e8.js";import"./componentMap.0c42f2df.js";import"./index.ee6487ab.js";import"./Checkbox.57c553c3.js";import"./index.f7818f6d.js";import"./index.1287a138.js";import"./index.795c132c.js";import"./index.f149cdb6.js";import"./index.e625390f.js";import"./index.b36cdad3.js";import"./useFormItem.181f865d.js";import"./RadioButtonGroup.b6150d5f.js";import"./get.20ee0b3c.js";import"./index.346452b7.js";import"./eagerComputed.42110f62.js";import"./index.a18a5c5f.js";import"./_baseIteratee.0814df48.js";import"./DeleteOutlined.3a3f5b10.js";import"./index.4856bb33.js";import"./useRefs.e2dab0a5.js";import"./Form.a9206812.js";import"./Col.a2ca4cdc.js";import"./useFlexGapSupport.9531a834.js";import"./useSize.d18d2730.js";import"./transButton.e7ac5c8d.js";import"./index.4a73be23.js";import"./index.ee59d8ff.js";import"./useWindowSizeFn.a2d28282.js";import"./FullscreenOutlined.eda13d23.js";import"./index.5e35eee6.js";import"./isNumber.f77a5e16.js";import"./uuid.2b29000c.js";import"./download.f65e51e5.js";import"./base64Conver.08b9f4ec.js";import"./index.88bc2140.js";import"./index.f9623dfb.js";import"./index.bceeeead.js";import"./uniqBy.dc790d9f.js";import"./index.ce67bc38.js";import"./useForm.90a70aa6.js";import"./index.96bdb240.js";import"./index.5a37f488.js";import"./useContentViewHeight.6e637be8.js";import"./index.fa8bdbf5.js";const b=_({components:{Alert:R,PageWrapper:W,Drawer1:k,Drawer2:B,Drawer3:$,Drawer4:v,Drawer5:P},setup(){const[e,{openDrawer:o,setDrawerProps:u}]=a(),[g,{openDrawer:f}]=a(),[d,{openDrawer:i}]=a(),[p,{openDrawer:s}]=a(),[w,{openDrawer:D}]=a();function l(){s(!0,{data:"content",info:"Info"})}function c(){o(),u({loading:!0}),setTimeout(()=>{u({loading:!1})},2e3)}return{register1:e,openDrawer1:o,register2:g,openDrawer2:f,register3:d,openDrawer3:i,register4:p,register5:w,openDrawer5:D,send:l,openDrawerLoading:c}}});function L(e,o,u,g,f,d){const i=t("Alert"),p=t("a-button"),s=t("Drawer1"),w=t("Drawer2"),D=t("Drawer3"),l=t("Drawer4"),c=t("Drawer5"),F=t("PageWrapper");return E(),A(F,{title:"\u62BD\u5C49\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:n(()=>[r(i,{message:"\u4F7F\u7528 useDrawer \u8FDB\u884C\u62BD\u5C49\u64CD\u4F5C","show-icon":""}),r(p,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:n(()=>[m(" \u6253\u5F00Drawer ")]),_:1},8,["onClick"]),r(i,{message:"\u5185\u5916\u540C\u65F6\u63A7\u5236\u663E\u793A\u9690\u85CF","show-icon":""}),r(p,{type:"primary",class:"my-4",onClick:o[0]||(o[0]=C=>e.openDrawer2(!0))},{default:n(()=>[m(" \u6253\u5F00Drawer ")]),_:1}),r(i,{message:"\u81EA\u9002\u5E94\u9AD8\u5EA6/\u663E\u793Afooter","show-icon":""}),r(p,{type:"primary",class:"my-4",onClick:o[1]||(o[1]=C=>e.openDrawer3(!0))},{default:n(()=>[m(" \u6253\u5F00Drawer ")]),_:1}),r(i,{message:"\u5185\u5916\u6570\u636E\u4EA4\u4E92","show-icon":""}),r(p,{type:"primary",class:"my-4",onClick:e.send},{default:n(()=>[m(" \u6253\u5F00Drawer\u5E76\u4F20\u9012\u6570\u636E ")]),_:1},8,["onClick"]),r(i,{message:"\u8BE6\u60C5\u9875\u6A21\u5F0F","show-icon":""}),r(p,{type:"primary",class:"my-4",onClick:o[2]||(o[2]=C=>e.openDrawer5(!0))},{default:n(()=>[m(" \u6253\u5F00\u8BE6\u60C5Drawer ")]),_:1}),r(s,{onRegister:e.register1},null,8,["onRegister"]),r(w,{onRegister:e.register2},null,8,["onRegister"]),r(D,{onRegister:e.register3},null,8,["onRegister"]),r(l,{onRegister:e.register4},null,8,["onRegister"]),r(c,{onRegister:e.register5},null,8,["onRegister"])]),_:1})}var zr=y(b,[["render",L]]);export{zr as default};
import{b as U,a as S,c as A,d as E}from"./formItemPropsConfig.8fcda530.js";import{a as _,ec as B,I as R,cV as q,a7 as D,f as G,au as L,aW as V,aw as a,o as r,h as n,j as t,z as m,F as c,az as f,aG as d,ax as C,l as p,n as I,B as $,t as z,q as N}from"./index.e610cdad.js";/* empty css              *//* empty css              */import{S as j}from"./index.e625390f.js";import{C as T}from"./index.f7818f6d.js";import{S as W}from"./index.b36cdad3.js";import"./index.ee6487ab.js";import H from"./RuleProps.cb795405.js";import{u as J}from"./useFormDesignState.c4bdfc4a.js";import{R as K}from"./RadioButtonGroup.b6150d5f.js";import"./componentMap.0c42f2df.js";import{F as M,a as O}from"./Form.a9206812.js";import{C as Q}from"./index.bceeeead.js";import"./formItemConfig.05355064.js";import"./index.1287a138.js";import"./index.795c132c.js";import"./index.f149cdb6.js";import"./index.561840e8.js";import"./_baseIteratee.0814df48.js";import"./get.20ee0b3c.js";import"./Checkbox.57c553c3.js";import"./index.a7d301e3.js";import"./isNumber.f77a5e16.js";import"./useFormItem.181f865d.js";import"./index.346452b7.js";import"./eagerComputed.42110f62.js";import"./index.a18a5c5f.js";import"./DeleteOutlined.3a3f5b10.js";import"./index.4856bb33.js";import"./useRefs.e2dab0a5.js";import"./transButton.e7ac5c8d.js";import"./index.4a73be23.js";import"./useFlexGapSupport.9531a834.js";import"./index.ee59d8ff.js";import"./useWindowSizeFn.a2d28282.js";import"./FullscreenOutlined.eda13d23.js";import"./index.67c0d62c.js";import"./index.5e35eee6.js";import"./uuid.2b29000c.js";import"./download.f65e51e5.js";import"./base64Conver.08b9f4ec.js";import"./index.88bc2140.js";import"./index.f9623dfb.js";import"./Col.a2ca4cdc.js";import"./useSize.d18d2730.js";const X=_({name:"FormItemProps",components:{RuleProps:H,Empty:B,Input:R,Form:M,FormItem:O,Switch:j,Checkbox:T,Select:q,Slider:W,Col:Q,RadioGroup:K},setup(){const{formConfig:e}=J();D(()=>e.value,()=>{e.value.currentItem&&(e.value.currentItem.itemProps=e.value.currentItem.itemProps||{},e.value.currentItem.itemProps.labelCol=e.value.currentItem.itemProps.labelCol||{},e.value.currentItem.itemProps.wrapperCol=e.value.currentItem.itemProps.wrapperCol||{})},{deep:!0,immediate:!0});const s=l=>l&&V(l)?!l.includes(e.value.currentItem.component):!0,P=G(()=>U.filter(l=>s(l.exclude)));return{baseFormItemProps:S,advanceFormItemProps:A,advanceFormItemColProps:E,formConfig:e,controlPropsList:P,showProps:s}}}),Y={class:"properties-content"},Z={key:0,class:"properties-body"};function x(e,s,P,l,ee,oe){var v;const k=a("Empty"),i=a("FormItem"),g=a("Checkbox"),b=a("Col"),F=a("Switch"),y=a("Input"),h=a("RuleProps"),w=a("Form");return r(),n("div",Y,[(v=e.formConfig.currentItem)!=null&&v.itemProps?(r(),n("div",Z,[e.formConfig.currentItem.key?(r(),t(w,{key:1,"label-align":"left",layout:"vertical"},{default:m(()=>[(r(!0),n(c,null,f(e.baseFormItemProps,o=>(r(),n("div",{key:o.name},[e.showProps(o.exclude)?(r(),t(i,{key:0,label:o.label},{default:m(()=>[(r(),t(d(o.component),C({class:"component-props"},o.componentProps,{value:e.formConfig.currentItem[o.name],"onUpdate:value":u=>e.formConfig.currentItem[o.name]=u}),null,16,["value","onUpdate:value"]))]),_:2},1032,["label"])):p("",!0)]))),128)),(r(!0),n(c,null,f(e.advanceFormItemProps,o=>(r(),n("div",{key:o.name},[e.showProps(o.exclude)?(r(),t(i,{key:0,label:o.label},{default:m(()=>[(r(),t(d(o.component),C({class:"component-props"},o.componentProps,{value:e.formConfig.currentItem.itemProps[o.name],"onUpdate:value":u=>e.formConfig.currentItem.itemProps[o.name]=u}),null,16,["value","onUpdate:value"]))]),_:2},1032,["label"])):p("",!0)]))),128)),(r(!0),n(c,null,f(e.advanceFormItemColProps,o=>(r(),n("div",{key:o.name},[e.showProps(o.exclude)?(r(),t(i,{key:0,label:o.label},{default:m(()=>[(r(),t(d(o.component),C({class:"component-props"},o.componentProps,{value:e.formConfig.currentItem.itemProps[o.name].span,"onUpdate:value":u=>e.formConfig.currentItem.itemProps[o.name].span=u}),null,16,["value","onUpdate:value"]))]),_:2},1032,["label"])):p("",!0)]))),128)),e.controlPropsList.length?(r(),t(i,{key:0,label:"\u63A7\u5236\u5C5E\u6027"},{default:m(()=>[(r(!0),n(c,null,f(e.controlPropsList,o=>(r(),t(b,{key:o.name},{default:m(()=>[I(g,{checked:e.formConfig.currentItem.itemProps[o.name],"onUpdate:checked":u=>e.formConfig.currentItem.itemProps[o.name]=u},{default:m(()=>[$(z(o.label),1)]),_:2},1032,["checked","onUpdate:checked"])]),_:2},1024))),128))]),_:1})):p("",!0),["Grid"].includes(e.formConfig.currentItem.component)?p("",!0):(r(),t(i,{key:1,label:"\u662F\u5426\u5FC5\u9009"},{default:m(()=>[I(F,{checked:e.formConfig.currentItem.itemProps.required,"onUpdate:checked":s[0]||(s[0]=o=>e.formConfig.currentItem.itemProps.required=o)},null,8,["checked"]),e.formConfig.currentItem.itemProps.required?(r(),t(y,{key:0,value:e.formConfig.currentItem.itemProps.message,"onUpdate:value":s[1]||(s[1]=o=>e.formConfig.currentItem.itemProps.message=o),placeholder:"\u8BF7\u8F93\u5165\u5FC5\u9009\u63D0\u793A"},null,8,["value"])):p("",!0)]),_:1})),["Grid"].includes(e.formConfig.currentItem.component)?p("",!0):(r(),t(i,{key:2,label:"\u6821\u9A8C\u89C4\u5219",class:N({"form-rule-props":!!e.formConfig.currentItem.itemProps.rules})},{default:m(()=>[I(h)]),_:1},8,["class"]))]),_:1})):(r(),t(k,{key:0,class:"hint-box",description:"\u672A\u9009\u62E9\u63A7\u4EF6"}))])):p("",!0)])}var Oe=L(X,[["render",x]]);export{Oe as default};
var _=Object.defineProperty,h=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var v=(t,o,r)=>o in t?_(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,C=(t,o)=>{for(var r in o||(o={}))V.call(o,r)&&v(t,r,o[r]);if(c)for(var r of c(o))g.call(o,r)&&v(t,r,o[r]);return t},M=(t,o)=>h(t,A(o));var b=(t,o,r)=>new Promise((l,n)=>{var u=i=>{try{e(r.next(i))}catch(p){n(p)}},a=i=>{try{e(r.throw(i))}catch(p){n(p)}},e=i=>i.done?l(i.value):Promise.resolve(i.value).then(u,a);e((r=r.apply(t,o)).next())});import k from"./index.583eca85.js";import{a as D}from"./index.a7d301e3.js";import S from"./JsonModal.f0b6393c.js";import{a as U,dG as $,v as y,w as B,bc as E,au as G,aw as f,o as J,j as O,z as F,n as d}from"./index.e610cdad.js";import"./FormRender.9ff2fb53.js";import"./index.292d6693.js";import"./formItemConfig.05355064.js";import"./componentMap.0c42f2df.js";import"./index.ee6487ab.js";import"./Checkbox.57c553c3.js";import"./index.f7818f6d.js";import"./index.1287a138.js";import"./index.795c132c.js";import"./index.f149cdb6.js";import"./index.e625390f.js";import"./index.b36cdad3.js";import"./index.561840e8.js";import"./useFormItem.181f865d.js";import"./RadioButtonGroup.b6150d5f.js";import"./get.20ee0b3c.js";import"./index.346452b7.js";import"./eagerComputed.42110f62.js";import"./index.a18a5c5f.js";import"./_baseIteratee.0814df48.js";import"./DeleteOutlined.3a3f5b10.js";import"./index.4856bb33.js";import"./useRefs.e2dab0a5.js";import"./Form.a9206812.js";import"./Col.a2ca4cdc.js";import"./useFlexGapSupport.9531a834.js";import"./useSize.d18d2730.js";import"./transButton.e7ac5c8d.js";import"./index.4a73be23.js";import"./index.ee59d8ff.js";import"./useWindowSizeFn.a2d28282.js";import"./FullscreenOutlined.eda13d23.js";import"./index.67c0d62c.js";import"./index.5e35eee6.js";import"./isNumber.f77a5e16.js";import"./uuid.2b29000c.js";import"./download.f65e51e5.js";import"./base64Conver.08b9f4ec.js";import"./index.88bc2140.js";import"./index.f9623dfb.js";/* empty css              */import"./useFormDesignState.c4bdfc4a.js";import"./index.bceeeead.js";import"./index.ce67bc38.js";/* empty css              */import"./PreviewCode.25de1551.js";import"./index.11639af5.js";const j=U({name:"VFormPreview",components:{JsonModal:S,VFormCreate:k,Modal:$},setup(){const t=y(null),o=B({formModel:{},formConfig:{},visible:!1,fApi:{}}),r=e=>{D(e.schemas),o.formConfig=e,o.visible=!0},l=()=>{o.visible=!1,o.formModel={}},n=()=>b(this,null,function*(){var i,p,m,s;const e=yield(p=(i=o.fApi).submit)==null?void 0:p.call(i);(s=(m=t.value)==null?void 0:m.showModal)==null||s.call(m,e)}),u=e=>{},a=()=>{o.formModel={}};return M(C({handleGetData:n,handleCancel:l},E(o)),{showModal:r,jsonModal:t,onSubmit:u,onCancel:a})}});function N(t,o,r,l,n,u){const a=f("a-input"),e=f("VFormCreate"),i=f("JsonModal"),p=f("Modal");return J(),O(p,{title:"\u9884\u89C8(\u652F\u6301\u5E03\u5C40)",visible:t.visible,onOk:t.handleGetData,onCancel:t.handleCancel,okText:"\u83B7\u53D6\u6570\u636E",cancelText:"\u5173\u95ED",style:{top:"20px"},destroyOnClose:!0,width:900},{default:F(()=>[d(e,{"form-config":t.formConfig,fApi:t.fApi,"onUpdate:fApi":o[0]||(o[0]=m=>t.fApi=m),formModel:t.formModel,"onUpdate:formModel":o[1]||(o[1]=m=>t.formModel=m),onSubmit:t.onSubmit},{slotName:F(({formModel:m,field:s})=>[d(a,{value:m[s],"onUpdate:value":w=>m[s]=w,placeholder:"\u6211\u662F\u63D2\u69FD\u4F20\u9012\u7684\u8F93\u5165\u6846"},null,8,["value","onUpdate:value"])]),_:1},8,["form-config","fApi","formModel","onSubmit"]),d(i,{ref:"jsonModal"},null,512)]),_:1},8,["visible","onOk","onCancel"])}var No=G(j,[["render",N]]);export{No as default};

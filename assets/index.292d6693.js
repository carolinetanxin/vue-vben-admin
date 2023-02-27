var Q=Object.defineProperty,U=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var L=(e,t,a)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))O.call(t,a)&&L(e,a,t[a]);if(P)for(var a of P(t))_.call(t,a)&&L(e,a,t[a]);return e},M=(e,t)=>U(e,X(t));var q=(e,t)=>{var a={};for(var s in e)O.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(e!=null&&P)for(var s of P(e))t.indexOf(s)<0&&_.call(e,s)&&(a[s]=e[s]);return a};var R=(e,t,a)=>new Promise((s,C)=>{var g=r=>{try{p(a.next(r))}catch(d){C(d)}},y=r=>{try{p(a.throw(r))}catch(d){C(d)}},p=r=>r.done?s(r.value):Promise.resolve(r.value).then(g,y);p((a=a.apply(e,t)).next())});import{a as T}from"./formItemConfig.05355064.js";import{a as Y,bk as Z,b6 as x,w as ee,f as I,k as $,fK as oe,ao as te,bc as ae,au as ne,aw as b,o as v,j as D,z as f,n as A,aB as N,aC as E,ay as G,aA as se,ax as K,B as me,t as B,l as S,i as V,aG as re,h as le}from"./index.e610cdad.js";import{h as W}from"./index.a7d301e3.js";import{D as ie}from"./index.561840e8.js";/* empty css              */import{a as ce}from"./useFormDesignState.c4bdfc4a.js";import{a as pe}from"./Form.a9206812.js";import"./index.a18a5c5f.js";import{C as de}from"./index.bceeeead.js";import"./componentMap.0c42f2df.js";import"./index.ee6487ab.js";import"./Checkbox.57c553c3.js";import"./index.f7818f6d.js";import"./index.1287a138.js";import"./index.795c132c.js";import"./index.f149cdb6.js";import"./index.e625390f.js";import"./index.b36cdad3.js";import"./useFormItem.181f865d.js";import"./RadioButtonGroup.b6150d5f.js";import"./get.20ee0b3c.js";import"./index.346452b7.js";import"./eagerComputed.42110f62.js";import"./DeleteOutlined.3a3f5b10.js";import"./transButton.e7ac5c8d.js";import"./index.4a73be23.js";import"./useFlexGapSupport.9531a834.js";import"./index.ee59d8ff.js";import"./useWindowSizeFn.a2d28282.js";import"./FullscreenOutlined.eda13d23.js";import"./index.4856bb33.js";import"./useRefs.e2dab0a5.js";import"./index.67c0d62c.js";import"./index.5e35eee6.js";import"./isNumber.f77a5e16.js";import"./uuid.2b29000c.js";import"./download.f65e51e5.js";import"./base64Conver.08b9f4ec.js";import"./index.88bc2140.js";import"./index.f9623dfb.js";import"./_baseIteratee.0814df48.js";import"./Col.a2ca4cdc.js";import"./useSize.d18d2730.js";const he=Y({name:"VFormItem",components:{Tooltip:Z,Icon:x,FormItem:pe,Divider:ie,Col:de},props:{formData:{type:Object,default:()=>({})},schema:{type:Object,required:!0},formConfig:{type:Object,required:!0}},emits:["update:form-data","change"],setup(e,{emit:t}){const a=ee({componentMap:T}),{formModel:s,setFormModel:C}=ce(),g=I(()=>{const{colProps:o={}}=e.schema;return o}),y=I(()=>{var j,z;const{formConfig:o}=$(e);let{field:m,required:n,rules:h,labelCol:i,wrapperCol:c}=$(e.schema);const{colon:H}=e.formConfig,{itemProps:l}=$(e.schema);i=i||(o.layout==="horizontal"?o.labelLayout==="flex"?{style:`width:${o.labelWidth}px`}:o.labelCol:{}),c=c||(o.layout==="horizontal"?o.labelLayout==="flex"?{style:"width:auto;flex:1"}:o.wrapperCol:{});const J=o.layout==="horizontal"&&o.labelLayout==="flex"?{display:"flex"}:{},w=Object.assign({},{name:m,style:u({},J),colon:H,required:n,rules:h,labelCol:i,wrapperCol:c},l);return(j=l==null?void 0:l.labelCol)!=null&&j.span||(w.labelCol=i),(z=l==null?void 0:l.wrapperCol)!=null&&z.span||(w.wrapperCol=c),l!=null&&l.rules||(w.rules=h),w}),p=I(()=>T.get(e.schema.component)),r=o=>{var m,n;o.component==="Button"&&((m=o.componentProps)==null?void 0:m.handle)&&t((n=o.componentProps)==null?void 0:n.handle)},d=oe(()=>R(this,null,function*(){var n;let{options:o,treeData:m}=(n=e.schema.componentProps)!=null?n:{};return o&&(o=yield W(o)),m&&(m=yield W(m)),{options:o,treeData:m}})),F=I(()=>{var i;const o=e.schema&&["Switch","Checkbox","Radio"].includes(e.schema.component);let{field:m}=e.schema,c=(i=te(e.schema.componentProps,["options","treeData"]))!=null?i:{},{disabled:n}=c,h=q(c,["disabled"]);return n=e.formConfig.disabled||n,M(u({},h),{disabled:n,[o?"checked":"value"]:s.value[m]})}),k=function(o){const m=["Switch","Checkbox","Radio"].includes(e.schema.component),n=o?o.target:null,h=n?m?n.checked:n.value:o;C(e.schema.field,h),t("change",h)};return M(u({},ae(a)),{componentItem:p,formItemProps:y,handleClick:r,asyncProps:d,cmpProps:F,handleChange:k,colPropsComputed:g})}}),ue={key:2};function fe(e,t,a,s,C,g){const y=b("Icon"),p=b("Tooltip"),r=b("Divider"),d=b("FormItem"),F=b("Col");return v(),D(F,N(E(e.colPropsComputed)),{default:f(()=>[A(d,N(E(u({},e.formItemProps))),G({default:f(()=>{var k;return[e.schema.componentProps&&((k=e.schema.componentProps)==null?void 0:k.slotName)?se(e.$slots,e.schema.componentProps.slotName,N(K({key:0},e.schema)),void 0,!0):e.schema.component=="Divider"&&e.schema.label&&!e.formItemProps.hiddenLabel?(v(),D(r,{key:1},{default:f(()=>[me(B(e.schema.label),1)]),_:1})):S("",!0),V("div",null,[(v(),D(re(e.componentItem),K({class:"v-form-item-wrapper"},u(u({},e.cmpProps),e.asyncProps),{schema:e.schema,style:e.schema.width?{width:e.schema.width}:{},onChange:e.handleChange,onClick:t[0]||(t[0]=o=>e.handleClick(e.schema))}),null,16,["schema","style","onChange"]))]),["Button"].includes(e.schema.component)?(v(),le("span",ue,B(e.schema.label),1)):S("",!0)]}),_:2},[!e.formItemProps.hiddenLabel&&e.schema.component!=="Divider"?{name:"label",fn:f(()=>[A(p,null,G({default:f(()=>[V("span",null,B(e.schema.label),1),e.schema.helpMessage?(v(),D(y,{key:0,class:"ml-5",icon:"ant-design:question-circle-outlined"})):S("",!0)]),_:2},[e.schema.helpMessage?{name:"title",fn:f(()=>[V("span",null,B(e.schema.helpMessage),1)]),key:"0"}:void 0]),1024)]),key:"0"}:void 0]),1040)]),_:3},16)}var mo=ne(he,[["render",fe],["__scopeId","data-v-a8d8a2d6"]]);export{mo as default};

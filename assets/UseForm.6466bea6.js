var d=(e,o,p)=>new Promise((f,c)=>{var b=l=>{try{s(p.next(l))}catch(r){c(r)}},i=l=>{try{s(p.throw(l))}catch(r){c(r)}},s=l=>l.done?f(l.value):Promise.resolve(l.value).then(b,i);s((p=p.apply(e,o)).next())});import{au as y,a as k,cD as _,v as C,aw as u,o as R,j as z,z as n,n as a,B as m}from"./index.e610cdad.js";import{D as V}from"./index.1a2b903f.js";import{S as T}from"./index.4a73be23.js";import{B as W}from"./BasicForm.b44ed29e.js";import"./componentMap.0c42f2df.js";import{u as F}from"./useForm.90a70aa6.js";import"./RadioButtonGroup.b6150d5f.js";import{P as $}from"./index.4b0a3a78.js";import{a as v}from"./cascader.be78b18b.js";import"./useFlexGapSupport.9531a834.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.982ba678.js";import"./index.561840e8.js";import"./index.a18a5c5f.js";import"./_baseIteratee.0814df48.js";import"./get.20ee0b3c.js";import"./DeleteOutlined.3a3f5b10.js";import"./index.4856bb33.js";import"./useRefs.e2dab0a5.js";import"./Form.a9206812.js";import"./Col.a2ca4cdc.js";import"./useSize.d18d2730.js";import"./index.bceeeead.js";import"./uniqBy.dc790d9f.js";import"./index.ee59d8ff.js";import"./useWindowSizeFn.a2d28282.js";import"./FullscreenOutlined.eda13d23.js";import"./index.ce67bc38.js";import"./index.ee6487ab.js";import"./Checkbox.57c553c3.js";import"./index.f7818f6d.js";import"./index.1287a138.js";import"./index.795c132c.js";import"./index.f149cdb6.js";import"./index.e625390f.js";import"./index.b36cdad3.js";import"./useFormItem.181f865d.js";import"./index.346452b7.js";import"./eagerComputed.42110f62.js";import"./transButton.e7ac5c8d.js";import"./index.67c0d62c.js";import"./index.5e35eee6.js";import"./isNumber.f77a5e16.js";import"./uuid.2b29000c.js";import"./download.f65e51e5.js";import"./base64Conver.08b9f4ec.js";import"./index.88bc2140.js";import"./index.f9623dfb.js";import"./index.96bdb240.js";import"./index.5a37f488.js";import"./useContentViewHeight.6e637be8.js";import"./ArrowLeftOutlined.e3c09a2a.js";import"./index.fa8bdbf5.js";const L=[{value:"large",label:"large"},{value:"middle",label:"middle"},{value:"small",label:"small"},{value:"default",label:"defualt"}],E=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"fieldTime",component:"RangePicker",label:"\u65F6\u95F4\u5B57\u6BB5",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field8",component:"ApiCascader",label:"\u8054\u52A8",colProps:{span:8},componentProps:{api:v,apiParamKey:"parentCode",dataField:"data",labelField:"name",valueField:"code",initFetchParams:{parentCode:""},isLeaf:e=>!(e.levelType<3)}},{field:"field9",component:"ApiCascader",label:"\u8054\u52A8\u56DE\u663E",colProps:{span:8},componentProps:{api:v,apiParamKey:"parentCode",dataField:"data",labelField:"name",valueField:"code",initFetchParams:{parentCode:""},isLeaf:e=>!(e.levelType<3)}}],O=[{field:"",component:"Divider",label:"\u57FA\u7840\u5C5E\u6027",colProps:{span:24},componentProps:{orientation:"center"}},{field:"labelWidth",defaultValue:120,component:"InputNumber",label:"labelWidth",colProps:{span:24},componentProps:{size:"small"}},{field:"size",defaultValue:"default",component:"Select",label:"size",colProps:{span:24},componentProps:{options:L,size:"small"}},{field:"disabled",defaultValue:!1,component:"Switch",label:"disabled",colProps:{span:24},componentProps:{size:"small"}},{field:"compact",defaultValue:!1,component:"Switch",label:"compact",colProps:{span:24},componentProps:{size:"small"}},{field:"",component:"Divider",label:"\u7F51\u683C\u5E03\u5C40",colProps:{span:24},componentProps:{orientation:"center"}},{field:"actionColOptions.span",component:"Slider",defaultValue:24,label:"span",colProps:{span:24},componentProps:{min:1,max:24}},{field:"",component:"Divider",label:"\u64CD\u4F5C\u6309\u94AE",colProps:{span:24},componentProps:{orientation:"center"}},{field:"showActionButtonGroup",defaultValue:!0,component:"Switch",label:"\u64CD\u4F5C\u6309\u94AE",colProps:{span:24},componentProps:({formActionType:e})=>({size:"small",onChange:o=>d(void 0,null,function*(){e.updateSchema([{field:"showResetButton",componentProps:{disabled:!o}},{field:"showSubmitButton",componentProps:{disabled:!o}}])})})},{field:"showResetButton",defaultValue:!0,component:"Switch",label:"\u91CD\u7F6E\u6309\u94AE",colProps:{span:24},componentProps:{size:"small"}},{field:"showSubmitButton",defaultValue:!0,component:"Switch",label:"\u63D0\u4EA4\u6309\u94AE",colProps:{span:24},componentProps:{size:"small"}}],G=k({components:{BasicForm:W,CollapseContainer:_,PageWrapper:$,Drawer:V,Space:T},setup(){const e=C(!1),o=C(),[p]=F({labelWidth:80,schemas:O,compact:!0,actionColOptions:{span:24},showActionButtonGroup:!1}),f=()=>d(this,null,function*(){var t;yield(t=o.value)==null?void 0:t.resetFields()}),c=t=>d(this,null,function*(){yield i(t),e.value=!1}),[b,{setProps:i,setFieldsValue:s,updateSchema:l}]=F({labelWidth:120,schemas:E,actionColOptions:{span:24},fieldMapToTime:[["fieldTime",["startTime","endTime"],"YYYY-MM"]]});function r(){return d(this,null,function*(){const S=yield function(){return new Promise(A=>{setTimeout(()=>{A({field9:["430000","430100","430102"],province:"\u6E56\u5357\u7701",city:"\u957F\u6C99\u5E02",district:"\u5CB3\u9E93\u533A"})},1e3)})}(),{field9:h,province:g,city:w,district:D}=S;yield l({field:"field9",componentProps:{displayRenderArray:[g,w,D]}}),yield s({field9:h})})}return{register:b,schemas:E,handleSubmit:t=>{},setProps:i,handleLoad:r,visible:e,showDrawer:()=>{e.value=!0},settingFormRef:o,onSettings:()=>{var t;(t=o.value)==null||t.submit()},resetSettings:f,registerSetting:p,handleSubmitSetting:c}}});function N(e,o,p,f,c,b){const i=u("a-button"),s=u("Space"),l=u("BasicForm"),r=u("Drawer"),P=u("CollapseContainer"),B=u("PageWrapper");return R(),z(B,{title:"UseForm\u64CD\u4F5C\u793A\u4F8B"},{default:n(()=>[a(s,{class:"mb-4"},{default:n(()=>[a(i,{type:"primary",onClick:e.showDrawer},{default:n(()=>[m(" \u66F4\u6539\u8BBE\u7F6E ")]),_:1},8,["onClick"]),a(i,{onClick:o[0]||(o[0]=t=>e.setProps({resetButtonOptions:{disabled:!0,text:"\u91CD\u7F6ENew"}}))},{default:n(()=>[m(" \u4FEE\u6539\u91CD\u7F6E\u6309\u94AE ")]),_:1}),a(i,{onClick:o[1]||(o[1]=t=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}}))},{default:n(()=>[m(" \u4FEE\u6539\u67E5\u8BE2\u6309\u94AE ")]),_:1}),a(i,{onClick:e.handleLoad,class:"mr-2"},{default:n(()=>[m(" \u8054\u52A8\u56DE\u663E ")]),_:1},8,["onClick"])]),_:1}),a(r,{visible:e.visible,"onUpdate:visible":o[2]||(o[2]=t=>e.visible=t),title:"\u66F4\u6539\u8BBE\u7F6E",placement:"right"},{extra:n(()=>[a(s,null,{default:n(()=>[a(i,{onClick:e.resetSettings},{default:n(()=>[m("\u91CD\u7F6E\u8BBE\u7F6E")]),_:1},8,["onClick"]),a(i,{type:"primary",onClick:e.onSettings},{default:n(()=>[m("\u5E94\u7528")]),_:1},8,["onClick"])]),_:1})]),default:n(()=>[a(l,{ref:"settingFormRef",onRegister:e.registerSetting,onSubmit:e.handleSubmitSetting},null,8,["onRegister","onSubmit"])]),_:1},8,["visible"]),a(P,{title:"useForm\u793A\u4F8B"},{default:n(()=>[a(l,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])]),_:1})]),_:1})}var Ie=y(G,[["render",N]]);export{Ie as default};

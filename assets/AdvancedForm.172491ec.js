import{B as c}from"./BasicForm.b44ed29e.js";import"./componentMap.0c42f2df.js";import{u as a}from"./useForm.90a70aa6.js";import"./RadioButtonGroup.b6150d5f.js";import{au as B,a as d,cD as f,aw as r,o as b,j as P,z as n,n as t}from"./index.e610cdad.js";import{P as h}from"./index.4b0a3a78.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.982ba678.js";import"./index.561840e8.js";import"./index.a18a5c5f.js";import"./_baseIteratee.0814df48.js";import"./get.20ee0b3c.js";import"./DeleteOutlined.3a3f5b10.js";import"./index.4856bb33.js";import"./useRefs.e2dab0a5.js";import"./Form.a9206812.js";import"./Col.a2ca4cdc.js";import"./useFlexGapSupport.9531a834.js";import"./useSize.d18d2730.js";import"./index.bceeeead.js";import"./uniqBy.dc790d9f.js";import"./index.ee59d8ff.js";import"./useWindowSizeFn.a2d28282.js";import"./FullscreenOutlined.eda13d23.js";import"./index.ce67bc38.js";import"./index.ee6487ab.js";import"./Checkbox.57c553c3.js";import"./index.f7818f6d.js";import"./index.1287a138.js";import"./index.795c132c.js";import"./index.f149cdb6.js";import"./index.e625390f.js";import"./index.b36cdad3.js";import"./useFormItem.181f865d.js";import"./index.346452b7.js";import"./eagerComputed.42110f62.js";import"./transButton.e7ac5c8d.js";import"./index.4a73be23.js";import"./index.67c0d62c.js";import"./index.5e35eee6.js";import"./isNumber.f77a5e16.js";import"./uuid.2b29000c.js";import"./download.f65e51e5.js";import"./base64Conver.08b9f4ec.js";import"./index.88bc2140.js";import"./index.f9623dfb.js";import"./index.96bdb240.js";import"./index.5a37f488.js";import"./useContentViewHeight.6e637be8.js";import"./ArrowLeftOutlined.e3c09a2a.js";import"./index.fa8bdbf5.js";const m=()=>[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:o=>{}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}];function C(){return[{field:"field10",component:"Input",label:"\u5B57\u6BB510",colProps:{span:8}},{field:"field11",component:"Input",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"field12",component:"Input",label:"\u5B57\u6BB512",colProps:{span:8}},{field:"field13",component:"Input",label:"\u5B57\u6BB513",colProps:{span:8}}]}const F=d({components:{BasicForm:c,CollapseContainer:f,PageWrapper:h},setup(){const[o]=a({labelWidth:120,schemas:m(),actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),p=[];for(let e=14;e<30;e++)p.push({field:"field"+e,component:"Input",label:"\u5B57\u6BB5"+e,colProps:{span:8}});const[i]=a({labelWidth:120,schemas:[...m(),...C(),{field:"",component:"Divider",label:"\u66F4\u591A\u5B57\u6BB5"},...p],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0,alwaysShowLines:2});return{register:o,register1:i}}});function g(o,p,i,e,_,A){const l=r("BasicForm"),u=r("CollapseContainer"),s=r("PageWrapper");return b(),P(s,{title:"\u53EF\u6298\u53E0\u8868\u5355\u793A\u4F8B"},{default:n(()=>[t(u,{title:"\u57FA\u7840\u6536\u7F29\u793A\u4F8B"},{default:n(()=>[t(l,{onRegister:o.register},null,8,["onRegister"])]),_:1}),t(u,{title:"\u8D85\u8FC73\u884C\u81EA\u52A8\u6536\u8D77\uFF0C\u6298\u53E0\u65F6\u4FDD\u75592\u884C",class:"mt-4"},{default:n(()=>[t(l,{onRegister:o.register1},null,8,["onRegister"])]),_:1})]),_:1})}var Ao=B(F,[["render",g]]);export{Ao as default};

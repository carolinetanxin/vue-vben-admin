import{B as b}from"./TableImg.10cbd40e.js";import{k as C}from"./componentMap.0c42f2df.js";import{u as g}from"./useTable.71516b86.js";import{d as T}from"./system.a35665eb.js";import{u as w}from"./index.a7a21bff.js";import{M as D,c as _,s as S}from"./MenuDrawer.ab9556ef.js";import{au as k,a as B,aw as t,o as h,h as F,n as p,z as s,B as M,j as y,l as A,al as E}from"./index.e610cdad.js";import"./index.ee6487ab.js";import"./Checkbox.57c553c3.js";import"./index.f7818f6d.js";import"./index.346452b7.js";import"./eagerComputed.42110f62.js";import"./BasicForm.b44ed29e.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.982ba678.js";import"./index.561840e8.js";import"./index.a18a5c5f.js";import"./_baseIteratee.0814df48.js";import"./get.20ee0b3c.js";import"./DeleteOutlined.3a3f5b10.js";import"./index.4856bb33.js";import"./useRefs.e2dab0a5.js";import"./Form.a9206812.js";import"./Col.a2ca4cdc.js";import"./useFlexGapSupport.9531a834.js";import"./useSize.d18d2730.js";import"./index.bceeeead.js";import"./uniqBy.dc790d9f.js";import"./index.ee59d8ff.js";import"./useWindowSizeFn.a2d28282.js";import"./FullscreenOutlined.eda13d23.js";import"./index.ce67bc38.js";import"./useForm.90a70aa6.js";import"./RadioButtonGroup.b6150d5f.js";import"./useFormItem.181f865d.js";import"./index.4b0a3a78.js";import"./index.96bdb240.js";import"./index.5a37f488.js";import"./useContentViewHeight.6e637be8.js";import"./ArrowLeftOutlined.e3c09a2a.js";import"./index.fa8bdbf5.js";import"./transButton.e7ac5c8d.js";import"./index.f149cdb6.js";import"./index.e625390f.js";import"./index.795c132c.js";import"./index.1287a138.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.098abec3.js";import"./index.5e35eee6.js";import"./isNumber.f77a5e16.js";import"./fromPairs.84aabb58.js";import"./scrollTo.5a18c286.js";import"./index.d1483f71.js";import"./index.b36cdad3.js";import"./index.4a73be23.js";import"./index.67c0d62c.js";import"./download.f65e51e5.js";import"./base64Conver.08b9f4ec.js";import"./index.88bc2140.js";import"./index.f9623dfb.js";import"./index.1a2b903f.js";const R=B({name:"MenuManagement",components:{BasicTable:b,MenuDrawer:D,TableAction:C},setup(){const[e,{openDrawer:r}]=w(),[c,{reload:l,expandAll:u}]=g({title:"\u83DC\u5355\u5217\u8868",api:T,columns:_,formConfig:{labelWidth:120,schemas:S},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function d(){r(!0,{isUpdate:!1})}function i(o){r(!0,{record:o,isUpdate:!0})}function n(o){}function a(){l()}function m(){E(u)}return{registerTable:c,registerDrawer:e,handleCreate:d,handleEdit:i,handleDelete:n,handleSuccess:a,onFetchSuccess:m}}});function v(e,r,c,l,u,d){const i=t("a-button"),n=t("TableAction"),a=t("BasicTable"),m=t("MenuDrawer");return h(),F("div",null,[p(a,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:s(()=>[p(i,{type:"primary",onClick:e.handleCreate},{default:s(()=>[M(" \u65B0\u589E\u83DC\u5355 ")]),_:1},8,["onClick"])]),bodyCell:s(({column:o,record:f})=>[o.key==="action"?(h(),y(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,f)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,f)}}]},null,8,["actions"])):A("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),p(m,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var We=k(R,[["render",v]]);export{We as default};

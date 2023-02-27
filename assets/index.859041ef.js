import{B as T}from"./TableImg.10cbd40e.js";import{k as S}from"./componentMap.0c42f2df.js";import{u as w}from"./useTable.71516b86.js";import{g as B}from"./system.a35665eb.js";import{P as F}from"./index.4b0a3a78.js";import D from"./DeptTree.bc7877e8.js";import{b as A}from"./index.ee59d8ff.js";import{A as k,c as y,s as I}from"./AccountModal.dadfb059.js";import{au as M,a as E,aZ as R,w as V,aw as t,o as C,j as _,z as r,n,B as P,l as W}from"./index.e610cdad.js";import"./index.ee6487ab.js";import"./Checkbox.57c553c3.js";import"./index.f7818f6d.js";import"./index.346452b7.js";import"./eagerComputed.42110f62.js";import"./BasicForm.b44ed29e.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.982ba678.js";import"./index.561840e8.js";import"./index.a18a5c5f.js";import"./_baseIteratee.0814df48.js";import"./get.20ee0b3c.js";import"./DeleteOutlined.3a3f5b10.js";import"./index.4856bb33.js";import"./useRefs.e2dab0a5.js";import"./Form.a9206812.js";import"./Col.a2ca4cdc.js";import"./useFlexGapSupport.9531a834.js";import"./useSize.d18d2730.js";import"./index.bceeeead.js";import"./uniqBy.dc790d9f.js";import"./index.ce67bc38.js";import"./useForm.90a70aa6.js";import"./RadioButtonGroup.b6150d5f.js";import"./useFormItem.181f865d.js";import"./index.f149cdb6.js";import"./index.e625390f.js";import"./index.795c132c.js";import"./index.1287a138.js";import"./uuid.2b29000c.js";import"./useWindowSizeFn.a2d28282.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.098abec3.js";import"./FullscreenOutlined.eda13d23.js";import"./index.5e35eee6.js";import"./isNumber.f77a5e16.js";import"./fromPairs.84aabb58.js";import"./scrollTo.5a18c286.js";import"./index.d1483f71.js";import"./index.b36cdad3.js";import"./transButton.e7ac5c8d.js";import"./index.4a73be23.js";import"./index.67c0d62c.js";import"./download.f65e51e5.js";import"./base64Conver.08b9f4ec.js";import"./index.88bc2140.js";import"./index.f9623dfb.js";import"./index.96bdb240.js";import"./index.5a37f488.js";import"./useContentViewHeight.6e637be8.js";import"./ArrowLeftOutlined.e3c09a2a.js";import"./index.fa8bdbf5.js";import"./index.d6b92a71.js";import"./useContextMenu.dfe9f40a.js";const $=E({name:"AccountManagement",components:{BasicTable:T,PageWrapper:F,DeptTree:D,AccountModal:k,TableAction:S},setup(){const e=R(),[h,{openModal:i}]=A(),a=V({}),[g,{reload:l,updateTableDataRecord:p}]=w({title:"\u8D26\u53F7\u5217\u8868",api:B,rowKey:"id",columns:y,formConfig:{labelWidth:120,schemas:I,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(o){return o},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action"}});function m(){i(!0,{isUpdate:!1})}function c(o){i(!0,{record:o,isUpdate:!0})}function s(o){}function u({isUpdate:o,values:b}){if(o){const v=p(b.id,b)}else l()}function d(o=""){a.deptId=o,l()}function f(o){e("/system/account_detail/"+o.id)}return{registerTable:g,registerModal:h,handleCreate:m,handleEdit:c,handleDelete:s,handleSuccess:u,handleSelect:d,handleView:f,searchInfo:a}}});function N(e,h,i,a,g,l){const p=t("DeptTree"),m=t("a-button"),c=t("TableAction"),s=t("BasicTable"),u=t("AccountModal"),d=t("PageWrapper");return C(),_(d,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:r(()=>[n(p,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),n(s,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5",searchInfo:e.searchInfo},{toolbar:r(()=>[n(m,{type:"primary",onClick:e.handleCreate},{default:r(()=>[P("\u65B0\u589E\u8D26\u53F7")]),_:1},8,["onClick"])]),bodyCell:r(({column:f,record:o})=>[f.key==="action"?(C(),_(c,{key:0,actions:[{icon:"clarity:info-standard-line",tooltip:"\u67E5\u770B\u7528\u6237\u8BE6\u60C5",onClick:e.handleView.bind(null,o)},{icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91\u7528\u6237\u8D44\u6599",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"\u5220\u9664\u6B64\u8D26\u53F7",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])):W("",!0)]),_:1},8,["onRegister","searchInfo"]),n(u,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var Jo=M($,[["render",N]]);export{Jo as default};
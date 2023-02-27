import{B as b}from"./TableImg.10cbd40e.js";import{k as C}from"./componentMap.0c42f2df.js";import{u as g}from"./useTable.71516b86.js";import{c as _}from"./system.a35665eb.js";import{u as w}from"./index.a7a21bff.js";import{R as D,c as B,s as T}from"./RoleDrawer.8608b4ad.js";import{au as R,a as k,aw as e,o as d,h as y,n as m,z as a,B as S,j as E,l as v}from"./index.e610cdad.js";import"./index.ee6487ab.js";import"./Checkbox.57c553c3.js";import"./index.f7818f6d.js";import"./index.346452b7.js";import"./eagerComputed.42110f62.js";import"./BasicForm.b44ed29e.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.982ba678.js";import"./index.561840e8.js";import"./index.a18a5c5f.js";import"./_baseIteratee.0814df48.js";import"./get.20ee0b3c.js";import"./DeleteOutlined.3a3f5b10.js";import"./index.4856bb33.js";import"./useRefs.e2dab0a5.js";import"./Form.a9206812.js";import"./Col.a2ca4cdc.js";import"./useFlexGapSupport.9531a834.js";import"./useSize.d18d2730.js";import"./index.bceeeead.js";import"./uniqBy.dc790d9f.js";import"./index.ee59d8ff.js";import"./useWindowSizeFn.a2d28282.js";import"./FullscreenOutlined.eda13d23.js";import"./index.ce67bc38.js";import"./useForm.90a70aa6.js";import"./RadioButtonGroup.b6150d5f.js";import"./useFormItem.181f865d.js";import"./index.4b0a3a78.js";import"./index.96bdb240.js";import"./index.5a37f488.js";import"./useContentViewHeight.6e637be8.js";import"./ArrowLeftOutlined.e3c09a2a.js";import"./index.fa8bdbf5.js";import"./transButton.e7ac5c8d.js";import"./index.f149cdb6.js";import"./index.e625390f.js";import"./index.795c132c.js";import"./index.1287a138.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.098abec3.js";import"./index.5e35eee6.js";import"./isNumber.f77a5e16.js";import"./fromPairs.84aabb58.js";import"./scrollTo.5a18c286.js";import"./index.d1483f71.js";import"./index.b36cdad3.js";import"./index.4a73be23.js";import"./index.67c0d62c.js";import"./download.f65e51e5.js";import"./base64Conver.08b9f4ec.js";import"./index.88bc2140.js";import"./index.f9623dfb.js";import"./index.1a2b903f.js";import"./index.d6b92a71.js";import"./useContextMenu.dfe9f40a.js";const A=k({name:"RoleManagement",components:{BasicTable:b,RoleDrawer:D,TableAction:C},setup(){const[o,{openDrawer:r}]=w(),[p,{reload:s}]=g({title:"\u89D2\u8272\u5217\u8868",api:_,columns:B,formConfig:{labelWidth:120,schemas:T},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function l(){r(!0,{isUpdate:!1})}function c(t){r(!0,{record:t,isUpdate:!0})}function i(t){}function n(){s()}return{registerTable:p,registerDrawer:o,handleCreate:l,handleEdit:c,handleDelete:i,handleSuccess:n}}});function F(o,r,p,s,l,c){const i=e("a-button"),n=e("TableAction"),t=e("BasicTable"),f=e("RoleDrawer");return d(),y("div",null,[m(t,{onRegister:o.registerTable},{toolbar:a(()=>[m(i,{type:"primary",onClick:o.handleCreate},{default:a(()=>[S(" \u65B0\u589E\u89D2\u8272 ")]),_:1},8,["onClick"])]),bodyCell:a(({column:h,record:u})=>[h.key==="action"?(d(),E(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])):v("",!0)]),_:1},8,["onRegister"]),m(f,{onRegister:o.registerDrawer,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var qo=R(A,[["render",F]]);export{qo as default};

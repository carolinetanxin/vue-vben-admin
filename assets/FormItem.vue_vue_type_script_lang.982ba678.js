var Z=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var E=(e,n,f)=>n in e?Z(e,n,{enumerable:!0,configurable:!0,writable:!0,value:f}):e[n]=f,m=(e,n)=>{for(var f in n||(n={}))ne.call(n,f)&&E(e,f,n[f]);if($)for(var f of $(n))se.call(n,f)&&E(e,f,n[f]);return e},H=(e,n)=>ee(e,te(n));import{c as Y,cz as Q,f as F,k as i,a as oe,bc as re,x as le,y as ae,n as g,cC as J,cB as ce,bq as v,av as P,ax as z,ah as ie,dC as ue,B as de,dD as fe,dE as me}from"./index.e610cdad.js";/* empty css              */import{D as he}from"./index.561840e8.js";/* empty css              */import{c as G}from"./componentMap.0c42f2df.js";import"./index.a18a5c5f.js";import{C as K}from"./index.bceeeead.js";import{F as pe}from"./Form.a9206812.js";const{t:B}=Y();function U(e){return e.includes("Input")||e.includes("Complete")?B("common.inputText"):e.includes("Picker")||e.includes("Select")||e.includes("Cascader")||e.includes("Checkbox")||e.includes("Radio")||e.includes("Switch")?B("common.chooseText"):""}const be=["DatePicker","MonthPicker","WeekPicker","TimePicker"];function ge(){return[...be,"RangePicker"]}function Ce(e,n,f){["DatePicker","MonthPicker","WeekPicker","TimePicker"].includes(n)?e.type=f?"string":"object":["RangePicker","Upload","CheckboxGroup","TimePicker"].includes(n)?e.type="array":["InputNumber"].includes(n)&&(e.type="number")}function Me(e,n){return e&&["Input","InputPassword","InputSearch","InputTextArea"].includes(e)&&n&&Q(n)?`${n}`:n}const Te=ge(),je=["Input","InputPassword","InputSearch","InputTextArea"];function ye(e,n){return F(()=>{const f=i(e),{labelCol:S={},wrapperCol:R={}}=f.itemProps||{},{labelWidth:M,disabledLabelWidth:h}=f,{labelWidth:x,labelCol:T,wrapperCol:j,layout:q}=i(n);if(!x&&!M&&!T||h)return S.style={textAlign:"left"},{labelCol:S,wrapperCol:R};let y=M||x;const L=m(m({},T),S),V=m(m({},j),R);return y&&(y=Q(y)?`${y}px`:y),{labelCol:m({style:{width:y}},L),wrapperCol:m({style:{width:q==="vertical"?"100%":`calc(100% - ${y})`}},V)}})}function _(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ce(e)}var Le=oe({name:"BasicFormItem",inheritAttrs:!1,props:{schema:{type:Object,default:()=>({})},formProps:{type:Object,default:()=>({})},allDefaultValues:{type:Object,default:()=>({})},formModel:{type:Object,default:()=>({})},setFormModel:{type:Function,default:null},tableAction:{type:Object},formActionType:{type:Object},isAdvanced:{type:Boolean}},setup(e,{slots:n}){const{t:f}=Y(),{schema:S,formProps:R}=re(e),M=ye(S,R),h=F(()=>{const{allDefaultValues:s,formModel:t,schema:r}=e,{mergeDynamicData:a}=e.formProps;return{field:r.field,model:t,values:m(m(m({},a),s),t),schema:r}}),x=F(()=>{var l;const{schema:s,tableAction:t,formModel:r,formActionType:a}=e;let{componentProps:o={}}=s;return P(o)&&(o=(l=o({schema:s,tableAction:t,formModel:r,formActionType:a}))!=null?l:{}),s.component==="Divider"&&(o=Object.assign({type:"horizontal"},{orientation:"left",plain:!0},o)),o}),T=F(()=>{const{disabled:s}=e.formProps,{dynamicDisabled:t}=e.schema,{disabled:r=!1}=i(x);let a=!!s||r;return v(t)&&(a=t),P(t)&&(a=t(i(h))),a});function j(){const{show:s,ifShow:t}=e.schema,{showAdvancedButton:r}=e.formProps,a=r&&v(e.isAdvanced)?e.isAdvanced:!0;let o=!0,l=!0;return v(s)&&(o=s),v(t)&&(l=t),P(s)&&(o=s(i(h))),P(t)&&(l=t(i(h))),o=o&&a,{isShow:o,isIfShow:l}}function q(){var D;const{rules:s=[],component:t,rulesMessageJoinLabel:r,label:a,dynamicRules:o,required:l}=e.schema;if(P(o))return o(i(h));let c=ie(s);const{rulesMessageJoinLabel:w}=e.formProps,I=Reflect.has(e.schema,"rulesMessageJoinLabel")?r:w,p=U(t)+`${I?a:""}`;function k(d,u){const C=d.message||p;return u===void 0||me(u)||Array.isArray(u)&&u.length===0||typeof u=="string"&&u.trim()===""||typeof u=="object"&&Reflect.has(u,"checked")&&Reflect.has(u,"halfChecked")&&Array.isArray(u.checked)&&Array.isArray(u.halfChecked)&&u.checked.length===0&&u.halfChecked.length===0?Promise.reject(C):Promise.resolve()}const b=P(l)?l(i(h)):l;b&&(!c||c.length===0?c=[{required:b,validator:k}]:c.findIndex(u=>Reflect.has(u,"required"))===-1&&c.push({required:b,validator:k}));const N=c.findIndex(d=>Reflect.has(d,"required")&&!Reflect.has(d,"validator"));if(N!==-1){const d=c[N],{isShow:u}=j();if(u||(d.required=!1),t){Reflect.has(d,"type")||(d.type=t==="InputNumber"?"number":"string"),d.message=d.message||p,(t.includes("Input")||t.includes("Textarea"))&&(d.whitespace=!0);const C=(D=i(x))==null?void 0:D.valueFormat;Ce(d,t,C)}}const A=c.findIndex(d=>d.max);return A!==-1&&!c[A].validator&&(c[A].message=c[A].message||f("component.form.maxTip",[c[A].max])),c}function y(){var u;const{renderComponentContent:s,component:t,field:r,changeEvent:a="change",valueField:o}=e.schema,l=t&&["Switch","Checkbox"].includes(t),c=`on${ue(a)}`,w={[c]:(...C)=>{const[O]=C;b[c]&&b[c](...C);const W=O?O.target:null,X=W?l?W.checked:W.value:O;e.setFormModel(r,X,e.schema)}},I=G.get(t),{autoSetPlaceHolder:p,size:k}=e.formProps,b=H(m({allowClear:!0,getPopupContainer:C=>C.parentNode,size:k},i(x)),{disabled:i(T)});!b.disabled&&p&&t!=="RangePicker"&&t&&(b.placeholder=((u=i(x))==null?void 0:u.placeholder)||U(t)),b.codeField=r,b.formValues=i(h);const A={[o||(l?"checked":"value")]:e.formModel[r]},D=m(m(m({},b),w),A);if(!s)return g(I,D,null);const d=P(s)?m({},s(i(h))):{default:()=>s};return g(I,D,_(d)?d:{default:()=>[d]})}function L(){const{label:s,helpMessage:t,helpComponentProps:r,subLabel:a}=e.schema,o=a?g("span",null,[s,de(" "),g("span",{class:"text-secondary"},[a])]):s,l=P(t)?t(i(h)):t;return!l||Array.isArray(l)&&l.length===0?o:g("span",null,[o,g(fe,z({placement:"top",class:"mx-1",text:l},r),null)])}function V(){const{itemProps:s,slot:t,render:r,field:a,suffix:o,component:l}=e.schema,{labelCol:c,wrapperCol:w}=i(M),{colon:I}=e.formProps;if(l==="Divider"){let p;return g(K,{span:24},{default:()=>[g(he,i(x),_(p=L())?p:{default:()=>[p]})]})}else{const p=()=>t?J(n,t,i(h)):r?r(i(h)):y(),k=!!o,b=P(o)?o(i(h)):o;return g(pe.Item,z({name:a,colon:I,class:{"suffix-item":k}},s,{label:L(),rules:q(),labelCol:c,wrapperCol:w}),{default:()=>[g("div",{style:"display:flex"},[g("div",{style:"flex:1;"},[p()]),k&&g("span",{class:"suffix"},[b])])]})}}return()=>{let s;const{colProps:t={},colSlot:r,renderColContent:a,component:o}=e.schema;if(!G.has(o))return null;const{baseColProps:l={}}=e.formProps,c=m(m({},l),t),{isIfShow:w,isShow:I}=j(),p=i(h);return w&&le(g(K,c,_(s=(()=>r?J(n,r,p):a?a(p):V())())?s:{default:()=>[s]}),[[ae,I]])}}});export{Le as _,Te as a,je as d,Me as h};

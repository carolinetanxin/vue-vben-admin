import{au as b,a as k,bw as h,b as v,bM as R,s as M,bG as O,aw as c,o as T,h as B,n as o,z as i,B as d,t as u,q as w,c as x,fs as A,k as m,bZ as C,fS as $,fT as F,E as N}from"./index.e610cdad.js";import{C as P}from"./CopyOutlined.231c4311.js";import{R as j}from"./RedoOutlined.098abec3.js";const z=k({name:"SettingFooter",components:{CopyOutlined:P,RedoOutlined:j},setup(){const e=h(),{prefixCls:p}=v("setting-footer"),{t:s}=x(),{createSuccessModal:f,createMessage:r}=N(),g=R(),l=M(),t=O();function a(){const{isSuccessRef:n}=A(JSON.stringify(m(t.getProjectConfig),null,2));m(n)&&f({title:s("layout.setting.operatingTitle"),content:s("layout.setting.operatingContent")})}function S(){try{t.setProjectConfig(C);const{colorWeak:n,grayMode:_}=C;$(n),F(_),r.success(s("layout.setting.resetSuccess"))}catch(n){r.error(n)}}function y(){localStorage.clear(),t.resetAllState(),e.resetState(),g.resetState(),l.resetState(),location.reload()}return{prefixCls:p,t:s,handleCopy:a,handleResetSetting:S,handleClearAndRedo:y}}});function D(e,p,s,f,r,g){const l=c("CopyOutlined"),t=c("a-button"),a=c("RedoOutlined");return T(),B("div",{class:w(e.prefixCls)},[o(t,{type:"primary",block:"",onClick:e.handleCopy},{default:i(()=>[o(l,{class:"mr-2"}),d(" "+u(e.t("layout.setting.copyBtn")),1)]),_:1},8,["onClick"]),o(t,{color:"warning",block:"",onClick:e.handleResetSetting,class:"my-3"},{default:i(()=>[o(a,{class:"mr-2"}),d(" "+u(e.t("common.resetText")),1)]),_:1},8,["onClick"]),o(t,{color:"error",block:"",onClick:e.handleClearAndRedo},{default:i(()=>[o(a,{class:"mr-2"}),d(" "+u(e.t("layout.setting.clearBtn")),1)]),_:1},8,["onClick"])],2)}var V=b(z,[["render",D],["__scopeId","data-v-2d4de409"]]);export{V as default};

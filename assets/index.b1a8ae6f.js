import{a as W,J as X,n as i,G as I,K as ut,v as D,Q as lt,ck as vt,T as H,R as mt,S as C,cT as gt,cO as ft,ar as pt,a4 as xt,bD as at,f as z,a7 as ht,cH as yt,_ as K,cU as bt,b1 as _t,Y as et,X as it,aJ as nt}from"./index.e610cdad.js";import{C as St,R as Ct}from"./Col.a2ca4cdc.js";import{e as It}from"./eagerComputed.42110f62.js";var wt=function(){return{avatar:I.any,description:I.any,prefixCls:String,title:I.any}},zt=W({name:"AListItemMeta",props:wt(),displayName:"AListItemMeta",__ANT_LIST_ITEM_META:!0,slots:["avatar","description","title"],setup:function(t,x){var a=x.slots,d=X("list",t),m=d.prefixCls;return function(){var w,h,n,j,L,c,g="".concat(m.value,"-item-meta"),l=(w=t.title)!==null&&w!==void 0?w:(h=a.title)===null||h===void 0?void 0:h.call(a),s=(n=t.description)!==null&&n!==void 0?n:(j=a.description)===null||j===void 0?void 0:j.call(a),u=(L=t.avatar)!==null&&L!==void 0?L:(c=a.avatar)===null||c===void 0?void 0:c.call(a),y=i("div",{class:"".concat(m.value,"-item-meta-content")},[l&&i("h4",{class:"".concat(m.value,"-item-meta-title")},[l]),s&&i("div",{class:"".concat(m.value,"-item-meta-description")},[s])]);return i("div",{class:g},[u&&i("div",{class:"".concat(m.value,"-item-meta-avatar")},[u]),(l||s)&&y])}}}),rt=Symbol("ListContextKey"),Pt=globalThis&&globalThis.__rest||function(o,t){var x={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&t.indexOf(a)<0&&(x[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,a=Object.getOwnPropertySymbols(o);d<a.length;d++)t.indexOf(a[d])<0&&Object.prototype.propertyIsEnumerable.call(o,a[d])&&(x[a[d]]=o[a[d]]);return x},jt=function(){return{prefixCls:String,extra:I.any,actions:I.array,grid:Object,colStyle:{type:Object,default:void 0}}},Lt=W({name:"AListItem",inheritAttrs:!1,Meta:zt,props:jt(),slots:["actions","extra"],setup:function(t,x){var a=x.slots,d=x.attrs,m=ut(rt,{grid:D(),itemLayout:D()}),w=m.itemLayout,h=m.grid,n=X("list",t),j=n.prefixCls,L=function(){var l,s=((l=a.default)===null||l===void 0?void 0:l.call(a))||[],u;return s.forEach(function(y){gt(y)&&!ft(y)&&(u=!0)}),u&&s.length>1},c=function(){var l,s,u=(l=t.extra)!==null&&l!==void 0?l:(s=a.extra)===null||s===void 0?void 0:s.call(a);return w.value==="vertical"?!!u:!L()};return function(){var g,l,s,u,y,J=d.class,V=Pt(d,["class"]),f=j.value,k=(g=t.extra)!==null&&g!==void 0?g:(l=a.extra)===null||l===void 0?void 0:l.call(a),E=(s=a.default)===null||s===void 0?void 0:s.call(a),p=(u=t.actions)!==null&&u!==void 0?u:lt((y=a.actions)===null||y===void 0?void 0:y.call(a));p=p&&!Array.isArray(p)?[p]:p;var b=p&&p.length>0&&i("ul",{class:"".concat(f,"-item-action"),key:"actions"},[p.map(function(M,F){return i("li",{key:"".concat(f,"-item-action-").concat(F)},[M,F!==p.length-1&&i("em",{class:"".concat(f,"-item-action-split")},null)])})]),N=h.value?"div":"li",B=i(N,H(H({},V),{},{class:mt("".concat(f,"-item"),C({},"".concat(f,"-item-no-flex"),!c()),J)}),{default:function(){return[w.value==="vertical"&&k?[i("div",{class:"".concat(f,"-item-main"),key:"content"},[E,b]),i("div",{class:"".concat(f,"-item-extra"),key:"extra"},[k])]:[E,b,vt(k,{key:"extra"})]]}});return h.value?i(St,{flex:1,style:t.colStyle},{default:function(){return[B]}}):B}}}),kt=function(){return{bordered:{type:Boolean,default:void 0},dataSource:I.array,extra:I.any,grid:{type:Object,default:void 0},itemLayout:String,loading:{type:[Boolean,Object],default:void 0},loadMore:I.any,pagination:{type:[Boolean,Object],default:void 0},prefixCls:String,rowKey:[String,Number,Function],renderItem:Function,size:String,split:{type:Boolean,default:void 0},header:I.any,footer:I.any,locale:{type:Object}}},P=W({name:"AList",Item:Lt,props:pt(kt(),{dataSource:[],bordered:!1,split:!0,loading:!1,pagination:!1}),slots:["extra","loadMore","renderItem","header","footer"],setup:function(t,x){var a=x.slots,d,m;xt(rt,{grid:at(t,"grid"),itemLayout:at(t,"itemLayout")});var w={current:1,total:0},h=X("list",t),n=h.prefixCls,j=h.direction,L=h.renderEmpty,c=z(function(){return t.pagination&&et(t.pagination)==="object"?t.pagination:{}}),g=D((d=c.value.defaultCurrent)!==null&&d!==void 0?d:1),l=D((m=c.value.defaultPageSize)!==null&&m!==void 0?m:10);ht(c,function(){"current"in c.value&&(g.value=c.value.current),"pageSize"in c.value&&(l.value=c.value.pageSize)});var s=[],u=function(r){return function(v,_){g.value=v,l.value=_,c.value[r]&&c.value[r](v,_)}},y=u("onChange"),J=u("onShowSizeChange"),V=function(r){var v;return i("div",{class:"".concat(n.value,"-empty-text")},[((v=t.locale)===null||v===void 0?void 0:v.emptyText)||r("List")])},f=z(function(){return typeof t.loading=="boolean"?{spinning:t.loading}:t.loading}),k=z(function(){return f.value&&f.value.spinning}),E=z(function(){var e="";switch(t.size){case"large":e="lg";break;case"small":e="sm";break}return e}),p=z(function(){var e;return e={},C(e,"".concat(n.value),!0),C(e,"".concat(n.value,"-vertical"),t.itemLayout==="vertical"),C(e,"".concat(n.value,"-").concat(E.value),E.value),C(e,"".concat(n.value,"-split"),t.split),C(e,"".concat(n.value,"-bordered"),t.bordered),C(e,"".concat(n.value,"-loading"),k.value),C(e,"".concat(n.value,"-grid"),!!t.grid),C(e,"".concat(n.value,"-rtl"),j.value==="rtl"),e}),b=z(function(){var e=K(K(K({},w),{total:t.dataSource.length,current:g.value,pageSize:l.value}),t.pagination||{}),r=Math.ceil(e.total/e.pageSize);return e.current>r&&(e.current=r),e}),N=z(function(){var e=it(t.dataSource);return t.pagination&&t.dataSource.length>(b.value.current-1)*b.value.pageSize&&(e=it(t.dataSource).splice((b.value.current-1)*b.value.pageSize,b.value.pageSize)),e}),B=yt(),M=It(function(){for(var e=0;e<nt.length;e+=1){var r=nt[e];if(B.value[r])return r}}),F=z(function(){if(!!t.grid){var e=M.value&&t.grid[M.value]?t.grid[M.value]:t.grid.column;if(e)return{width:"".concat(100/e,"%"),maxWidth:"".concat(100/e,"%")}}}),ot=function(r,v){var _,A=(_=t.renderItem)!==null&&_!==void 0?_:a.renderItem;if(!A)return null;var S,O=et(t.rowKey);return O==="function"?S=t.rowKey(r):O==="string"||O==="number"?S=r[t.rowKey]:S=r.key,S||(S="list-item-".concat(v)),s[v]=S,A({item:r,index:v})};return function(){var e,r,v,_,A,S,O,Y=(e=t.loadMore)!==null&&e!==void 0?e:(r=a.loadMore)===null||r===void 0?void 0:r.call(a),G=(v=t.footer)!==null&&v!==void 0?v:(_=a.footer)===null||_===void 0?void 0:_.call(a),$=(A=t.header)!==null&&A!==void 0?A:(S=a.header)===null||S===void 0?void 0:S.call(a),q=lt((O=a.default)===null||O===void 0?void 0:O.call(a)),st=!!(Y||t.pagination||G),dt=K(K({},p.value),C({},"".concat(n.value,"-something-after-last-item"),st)),Z=t.pagination?i("div",{class:"".concat(n.value,"-pagination")},[i(bt,H(H({},b.value),{},{onChange:y,onShowSizeChange:J}),null)]):null,Q=k.value&&i("div",{style:{minHeight:"53px"}},null);if(N.value.length>0){s.length=0;var tt=N.value.map(function(T,U){return ot(T,U)}),ct=tt.map(function(T,U){return i("div",{key:s[U],style:F.value},[T])});Q=t.grid?i(Ct,{gutter:t.grid.gutter},{default:function(){return[ct]}}):i("ul",{class:"".concat(n.value,"-items")},[tt])}else!q.length&&!k.value&&(Q=V(L.value));var R=b.value.position||"bottom";return i("div",{class:dt},[(R==="top"||R==="both")&&Z,$&&i("div",{class:"".concat(n.value,"-header")},[$]),i(_t,f.value,{default:function(){return[Q,q]}}),G&&i("div",{class:"".concat(n.value,"-footer")},[G]),Y||(R==="bottom"||R==="both")&&Z])}}});P.install=function(o){return o.component(P.name,P),o.component(P.Item.name,P.Item),o.component(P.Item.Meta.name,P.Item.Meta),o};var Et=P;export{Et as L};

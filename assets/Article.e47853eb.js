import{a as I,b6 as L,au as h,aw as c,o as a,j as l,z as r,h as _,az as p,F as d,q as o,n as y,i as s,t as i,B as u,l as $}from"./index.e610cdad.js";import{L as m}from"./index.b1a8ae6f.js";/* empty css              */import{T as k}from"./index.795c132c.js";import{articleList as b,actions as B}from"./data.53a0f0fb.js";import"./Col.a2ca4cdc.js";import"./useFlexGapSupport.9531a834.js";import"./eagerComputed.42110f62.js";const T=I({components:{List:m,ListItem:m.Item,ListItemMeta:m.Item.Meta,Tag:k,Icon:L},setup(){return{prefixCls:"account-center-article",list:b,actions:B}}});function z(t,M,N,V,w,A){const f=c("Tag"),v=c("ListItemMeta"),x=c("Icon"),g=c("ListItem"),C=c("List");return a(),l(C,{"item-layout":"vertical",class:o(t.prefixCls)},{default:r(()=>[(a(!0),_(d,null,p(t.list,n=>(a(),l(g,{key:n.title},{default:r(()=>[y(v,null,{description:r(()=>[s("div",{class:o(`${t.prefixCls}__content`)},i(n.content),3)]),title:r(()=>[s("p",{class:o(`${t.prefixCls}__title`)},i(n.title),3),s("div",null,[(a(!0),_(d,null,p(n.description,e=>(a(),l(f,{key:e,class:"mb-2"},{default:r(()=>[u(i(e),1)]),_:2},1024))),128))])]),_:2},1024),s("div",null,[(a(!0),_(d,null,p(t.actions,e=>(a(),_("div",{key:e.text,class:o(`${t.prefixCls}__action`)},[e.icon?(a(),l(x,{key:0,class:o(`${t.prefixCls}__action-icon`),icon:e.icon,color:e.color},null,8,["class","icon","color"])):$("",!0),u(" "+i(e.text),1)],2))),128)),s("span",{class:o(`${t.prefixCls}__time`)},i(n.time),3)])]),_:2},1024))),128))]),_:1},8,["class"])}var J=h(T,[["render",z],["__scopeId","data-v-67062fde"]]);export{J as default};

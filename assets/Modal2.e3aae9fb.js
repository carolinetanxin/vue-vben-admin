import{B as i,a as c}from"./index.ee59d8ff.js";import{a as p,au as d,aw as r,o as m,j as M,z as o,n,B as l}from"./index.e610cdad.js";import"./useWindowSizeFn.a2d28282.js";import"./FullscreenOutlined.eda13d23.js";const _=p({components:{BasicModal:i},setup(){const[e,{closeModal:t,setModalProps:a}]=c();return{register:e,closeModal:t,setModalProps:()=>{a({title:"Modal New Title"})}}}});function f(e,t,a,C,E,B){const s=r("a-button"),u=r("BasicModal");return m(),M(u,{onRegister:e.register,title:"Modal Title",helpMessage:["\u63D0\u793A1","\u63D0\u793A2"],okButtonProps:{disabled:!0}},{default:o(()=>[n(s,{type:"primary",onClick:e.closeModal,class:"mr-2"},{default:o(()=>[l(" \u4ECE\u5185\u90E8\u5173\u95ED\u5F39\u7A97 ")]),_:1},8,["onClick"]),n(s,{type:"primary",onClick:e.setModalProps},{default:o(()=>[l(" \u4ECE\u5185\u90E8\u4FEE\u6539title ")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}var $=d(_,[["render",f]]);export{$ as default};

var c=(e,r,t)=>new Promise((n,o)=>{var s=a=>{try{p(t.next(a))}catch(l){o(l)}},i=a=>{try{p(t.throw(a))}catch(l){o(l)}},p=a=>a.done?n(a.value):Promise.resolve(a.value).then(s,i);p((t=t.apply(e,r)).next())});import{u as f}from"./useScript.8b9618e0.js";import{au as g,a as m,v as u,N as d,o as w,h,bm as _,al as y,k}from"./index.e610cdad.js";const M="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQWrGwj4gAzKndcbwD5favT9K0wgty_0&signed_in=true",v=m({name:"GoogleMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=u(null),{toPromise:r}=f({src:M});function t(){return c(this,null,function*(){yield r(),yield y();const n=k(e);if(!n)return;const o=window.google,s={lat:116.404,lng:39.915},i=new o.maps.Map(n,{zoom:4,center:s});new o.maps.Marker({position:s,map:i,title:"Hello World!"})})}return d(()=>{t()}),{wrapRef:e}}});function S(e,r,t,n,o,s){return w(),h("div",{ref:"wrapRef",style:_({height:e.height,width:e.width})},null,4)}var A=g(v,[["render",S]]);export{A as default};

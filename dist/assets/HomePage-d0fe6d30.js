import{j as h,o as l,e as u,w as t,i as n,n as x,f as a,u as e,k as v,g as r,t as m,l as k,m as L,q as b,s as _,v as w,p as y,h as C,_ as q,x as N,y as B,z as R,F as z,I as p,a as I,b as g,c as M,A as S,B as T,C as V,d as j}from"./index-cceb9ac0.js";import{g as F}from"./messages-f311902d.js";const D=s=>(y("data-v-c3c90674"),s=s(),C(),s),E={class:"date"},H=D(()=>n("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)),P=h({__name:"MessageListItem",props:{message:Object},setup(s){const d=()=>{const o=window;return o&&o.Ionic&&o.Ionic.mode==="ios"};return(o,c)=>s.message?(l(),u(e(w),{key:0,routerLink:"/message/"+s.message.id,detail:!1,class:"list-item"},{default:t(()=>[n("div",{slot:"start",class:x(s.message.read?"dot":"dot dot-unread")},null,2),a(e(v),{class:"ion-text-wrap"},{default:t(()=>[n("h2",null,[r(m(s.message.fromName)+" ",1),n("span",E,[a(e(k),null,{default:t(()=>[r(m(s.message.date),1)]),_:1}),d()?(l(),u(e(L),{key:0,"aria-hidden":"true",icon:e(b),size:"small"},null,8,["icon"])):_("",!0)])]),n("h3",null,m(s.message.subject),1),H]),_:1})]),_:1},8,["routerLink"])):_("",!0)}});const A=q(P,[["__scopeId","data-v-c3c90674"]]),$=h({__name:"HomePage",setup(s){const d=N(F()),o=c=>{setTimeout(()=>{c.detail.complete()},3e3)};return(c,f)=>(l(),u(e(j),null,{default:t(()=>[a(e(p),{translucent:!0},{default:t(()=>[a(e(I),null,{default:t(()=>[a(e(g),null,{default:t(()=>[r("Recommended")]),_:1})]),_:1})]),_:1}),a(e(M),{fullscreen:!0},{default:t(()=>[a(e(S),{slot:"fixed",onIonRefresh:f[0]||(f[0]=i=>o(i))},{default:t(()=>[a(e(T))]),_:1}),a(e(p),{collapse:"condense"},{default:t(()=>[a(e(I),null,{default:t(()=>[a(e(g),{size:"large"},{default:t(()=>[r("Recommended")]),_:1})]),_:1})]),_:1}),a(e(V),null,{default:t(()=>[(l(!0),B(z,null,R(d.value,i=>(l(),u(A,{key:i.id,message:i},null,8,["message"]))),128))]),_:1})]),_:1})]),_:1}))}});export{$ as default};
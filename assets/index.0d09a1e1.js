import{y as h,t as k,H as a,C as t,L as p,a1 as H,a2 as O,F as V,_ as A,ac as L,I as U,o as W,D as X,S as c,q as o,a5 as Y,a6 as G}from"./index.7718df77.js";var x=h({name:"resizer",props:{split:{type:String,required:!0},className:{type:String,default:""}},setup(e){const l=k(()=>["splitter-pane-resizer",e.split,e.className].join(" "));return()=>a("div",{class:t(l)},null)}});var T=h({name:"splitPane",components:{resizer:x},props:{splitSet:{type:Object,require:!0}},emits:["resize"],setup(e,l){var m,S,g,y,w;const i=p(!1),u=p(!1),n=p((m=e.splitSet)==null?void 0:m.defaultPercent),d=((S=e.splitSet)==null?void 0:S.split)==="vertical"?"width":"height",B=((g=e.splitSet)==null?void 0:g.split)==="vertical"?"left":"top",I=p(["splitter-pane splitter-paneL",(y=e.splitSet)==null?void 0:y.split]),R=p(["splitter-pane splitter-paneR",(w=e.splitSet)==null?void 0:w.split]),F=k(()=>{var s;return i.value?((s=e.splitSet)==null?void 0:s.split)==="vertical"?{cursor:"col-resize"}:{cursor:"row-resize"}:{cursor:"default"}}),N=()=>{u.value||(n.value=50,l.emit("resize",n.value))},$=()=>{i.value=!0,u.value=!1},q=()=>{i.value=!1},D=s=>{var z,P,C,b,M;if((s.buttons===0||s.which===0)&&(i.value=!1),i.value){let f=0,r=s.currentTarget;if(((z=e.splitSet)==null?void 0:z.split)==="vertical")for(;r;)f+=r.offsetLeft,r=r.offsetParent;else for(;r;)f+=r.offsetTop,r=r.offsetParent;const j=((P=e.splitSet)==null?void 0:P.split)==="vertical"?s.pageX:s.pageY,E=((C=e.splitSet)==null?void 0:C.split)==="vertical"?s.currentTarget.offsetWidth:s.currentTarget.offsetHeight,_=Math.floor((j-f)/E*1e4)/100;_>((b=e.splitSet)==null?void 0:b.minPercent)&&_<100-((M=e.splitSet)==null?void 0:M.minPercent)&&(n.value=_),l.emit("resize",n.value),u.value=!0}};return()=>{var s;return a(V,null,[a("div",{class:"vue-splitter-container clearfix",style:t(F),onMouseup:()=>q(),onMousemove:()=>D(event)},[a("div",{class:t(I),style:{[t(d)]:t(n)+"%"}},[l.slots.paneL()]),a(x,{style:`${t([B])}:${t(n)}%`,split:(s=e.splitSet)==null?void 0:s.split,onMousedown:()=>$(),onClick:()=>N()},null),a("div",{class:t(R),style:{[t(d)]:100-t(n)+"%"}},[l.slots.paneR()]),H(a("div",{class:"vue-splitter-container-mask"},null),[[O,t(i)]])])])}}});const v=e=>(Y("data-v-4bdb9b15"),e=e(),G(),e),J=v(()=>o("div",{class:"card-header"},[o("span",{class:"font-medium"},"\u5207\u5272\u9762\u677F\u7EC4\u4EF6")],-1)),K={class:"split-pane"},Q=v(()=>o("div",{class:"dv-a"},"A",-1)),Z=v(()=>o("div",{class:"dv-b"},"B",-1)),ee=v(()=>o("div",{class:"dv-c"},"C",-1)),te=h({setup(e){const l=L({minPercent:20,defaultPercent:40,split:"vertical"}),i=L({minPercent:20,defaultPercent:40,split:"horizontal"});return(u,n)=>{const d=U("el-card");return W(),X(d,null,{header:c(()=>[J]),default:c(()=>[o("div",K,[a(t(T),{splitSet:t(l)},{paneL:c(()=>[Q]),paneR:c(()=>[a(t(T),{splitSet:t(i)},{paneL:c(()=>[Z]),paneR:c(()=>[ee]),_:1},8,["splitSet"])]),_:1},8,["splitSet"])])]),_:1})}}});var ae=A(te,[["__scopeId","data-v-4bdb9b15"]]);export{ae as default};

import{D as s,S as a,i as e,s as t,e as c,k as r,E as l,t as o,c as i,a as f,d as v,n as h,g as n,b as d,F as p,f as u,G as m,H as g,I as b,J as k,j as w,m as E,o as $,K as x,L as A,v as I,r as L,w as _,M as D,C as M}from"../chunks/vendor-dfa05b06.js";const B={subscribe:a=>(()=>{const a=s("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session}})().page.subscribe(a)};function H(s){let a,e,t,b,k,w,E,$,x,A,I,L,_,D,M,B,H,V,C,j,G,K,N,S,T,Z,F;return{c(){a=c("header"),e=c("div"),t=c("a"),b=c("img"),w=r(),E=c("nav"),$=l("svg"),x=l("path"),A=r(),I=c("ul"),L=c("li"),_=c("a"),D=o("Home"),M=r(),B=c("li"),H=c("a"),V=o("About"),C=r(),j=c("li"),G=c("a"),K=o("Todos"),N=r(),S=l("svg"),T=l("path"),Z=r(),F=c("div"),this.h()},l(s){a=i(s,"HEADER",{class:!0});var c=f(a);e=i(c,"DIV",{class:!0});var r=f(e);t=i(r,"A",{href:!0,class:!0});var l=f(t);b=i(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(v),r.forEach(v),w=h(c),E=i(c,"NAV",{class:!0});var o=f(E);$=i(o,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var d=f($);x=i(d,"path",{d:!0,class:!0},1),f(x).forEach(v),d.forEach(v),A=h(o),I=i(o,"UL",{class:!0});var p=f(I);L=i(p,"LI",{class:!0});var u=f(L);_=i(u,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var m=f(_);D=n(m,"Home"),m.forEach(v),u.forEach(v),M=h(p),B=i(p,"LI",{class:!0});var g=f(B);H=i(g,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var k=f(H);V=n(k,"About"),k.forEach(v),g.forEach(v),C=h(p),j=i(p,"LI",{class:!0});var J=f(j);G=i(J,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var R=f(G);K=n(R,"Todos"),R.forEach(v),J.forEach(v),p.forEach(v),N=h(o),S=i(o,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var U=f(S);T=i(U,"path",{d:!0,class:!0},1),f(T).forEach(v),U.forEach(v),o.forEach(v),Z=h(c),F=i(c,"DIV",{class:!0}),f(F).forEach(v),c.forEach(v),this.h()},h(){b.src!==(k="/_app/assets/svelte-logo.87df40b8.svg")&&d(b,"src","/_app/assets/svelte-logo.87df40b8.svg"),d(b,"alt","SvelteKit"),d(b,"class","svelte-1twf6mk"),d(t,"href","https://kit.svelte.dev"),d(t,"class","svelte-1twf6mk"),d(e,"class","corner svelte-1twf6mk"),d(x,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),d(x,"class","svelte-1twf6mk"),d($,"viewBox","0 0 2 3"),d($,"aria-hidden","true"),d($,"class","svelte-1twf6mk"),d(_,"sveltekit:prefetch",""),d(_,"href","/"),d(_,"class","svelte-1twf6mk"),d(L,"class","svelte-1twf6mk"),p(L,"active","/"===s[0].path),d(H,"sveltekit:prefetch",""),d(H,"href","/about"),d(H,"class","svelte-1twf6mk"),d(B,"class","svelte-1twf6mk"),p(B,"active","/about"===s[0].path),d(G,"sveltekit:prefetch",""),d(G,"href","/todos"),d(G,"class","svelte-1twf6mk"),d(j,"class","svelte-1twf6mk"),p(j,"active","/todos"===s[0].path),d(I,"class","svelte-1twf6mk"),d(T,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),d(T,"class","svelte-1twf6mk"),d(S,"viewBox","0 0 2 3"),d(S,"aria-hidden","true"),d(S,"class","svelte-1twf6mk"),d(E,"class","svelte-1twf6mk"),d(F,"class","corner svelte-1twf6mk"),d(a,"class","svelte-1twf6mk")},m(s,c){u(s,a,c),m(a,e),m(e,t),m(t,b),m(a,w),m(a,E),m(E,$),m($,x),m(E,A),m(E,I),m(I,L),m(L,_),m(_,D),m(I,M),m(I,B),m(B,H),m(H,V),m(I,C),m(I,j),m(j,G),m(G,K),m(E,N),m(E,S),m(S,T),m(a,Z),m(a,F)},p(s,[a]){1&a&&p(L,"active","/"===s[0].path),1&a&&p(B,"active","/about"===s[0].path),1&a&&p(j,"active","/todos"===s[0].path)},i:g,o:g,d(s){s&&v(a)}}}function V(s,a,e){let t;return b(s,B,(s=>e(0,t=s))),[t]}class C extends a{constructor(s){super(),e(this,s,V,H,t,{})}}const j=s=>({}),G=s=>({scoped:{width:s[1]}});function K(s){let a,e,t,l,o,n;e=new C({});const p=s[3].default,g=k(p,s,s[2],G);return{c(){a=c("div"),w(e.$$.fragment),t=r(),l=c("main"),g&&g.c(),this.h()},l(s){a=i(s,"DIV",{class:!0});var c=f(a);E(e.$$.fragment,c),t=h(c),l=i(c,"MAIN",{class:!0});var r=f(l);g&&g.l(r),r.forEach(v),c.forEach(v),this.h()},h(){d(l,"class","container mx-auto px-5 flex-grow font-overpass"),d(a,"class","flex flex-col h-screen"),D((()=>s[4].call(a)))},m(c,r){u(c,a,r),$(e,a,null),m(a,t),m(a,l),g&&g.m(l,null),o=x(a,s[4].bind(a)),n=!0},p(s,[a]){g&&g.p&&(!n||4&a)&&A(g,p,s,s[2],a,j,G)},i(s){n||(I(e.$$.fragment,s),I(g,s),n=!0)},o(s){L(e.$$.fragment,s),L(g,s),n=!1},d(s){s&&v(a),_(e),g&&g.d(s),o()}}}function N(s,a,e){let t,{$$slots:c={},$$scope:r}=a;const l=M();return b(s,l,(s=>e(0,t=s))),s.$$set=s=>{"$$scope"in s&&e(2,r=s.$$scope)},[t,l,r,c,function(){t=this.offsetWidth,l.set(t)}]}export default class extends a{constructor(s){super(),e(this,s,N,K,t,{})}}

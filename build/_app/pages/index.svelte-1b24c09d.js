import{S as s,i as a,s as e,e as t,E as r,k as l,t as c,c as o,a as n,d as i,n as v,g as h,b as d,N as m,f,G as u,O as p,h as g,H as E,P as w,I as b,Q as $,j as y,R as x,m as I,o as T,v as k,r as M,w as O}from"../chunks/vendor-dfa05b06.js";function S(s){let a,e,b,$,y,x,I,T,k,M,O,S,B,N,R,j,D,G,H=Math.floor(s[1]+1)+"",U=Math.floor(s[1])+"";return{c(){a=t("div"),e=t("button"),b=r("svg"),$=r("path"),y=l(),x=t("div"),I=t("div"),T=t("strong"),k=c(H),M=l(),O=t("strong"),S=c(U),B=l(),N=t("button"),R=r("svg"),j=r("path"),this.h()},l(s){a=o(s,"DIV",{class:!0});var t=n(a);e=o(t,"BUTTON",{"aria-label":!0,class:!0});var r=n(e);b=o(r,"svg",{"aria-hidden":!0,viewBox:!0,class:!0},1);var l=n(b);$=o(l,"path",{d:!0,class:!0},1),n($).forEach(i),l.forEach(i),r.forEach(i),y=v(t),x=o(t,"DIV",{class:!0});var c=n(x);I=o(c,"DIV",{class:!0,style:!0});var d=n(I);T=o(d,"STRONG",{style:!0,"aria-hidden":!0,class:!0});var m=n(T);k=h(m,H),m.forEach(i),M=v(d),O=o(d,"STRONG",{class:!0});var f=n(O);S=h(f,U),f.forEach(i),d.forEach(i),c.forEach(i),B=v(t),N=o(t,"BUTTON",{"aria-label":!0,class:!0});var u=n(N);R=o(u,"svg",{"aria-hidden":!0,viewBox:!0,class:!0},1);var p=n(R);j=o(p,"path",{d:!0,class:!0},1),n(j).forEach(i),p.forEach(i),u.forEach(i),t.forEach(i),this.h()},h(){d($,"d","M0,0.5 L1,0.5"),d($,"class","svelte-ltn89m"),d(b,"aria-hidden","true"),d(b,"viewBox","0 0 1 1"),d(b,"class","svelte-ltn89m"),d(e,"aria-label","Decrease the counter by one"),d(e,"class","svelte-ltn89m"),m(T,"top","-100%"),d(T,"aria-hidden","true"),d(T,"class","svelte-ltn89m"),d(O,"class","svelte-ltn89m"),d(I,"class","counter-digits svelte-ltn89m"),m(I,"transform","translate(0, "+100*s[2]+"%)"),d(x,"class","counter-viewport svelte-ltn89m"),d(j,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),d(j,"class","svelte-ltn89m"),d(R,"aria-hidden","true"),d(R,"viewBox","0 0 1 1"),d(R,"class","svelte-ltn89m"),d(N,"aria-label","Increase the counter by one"),d(N,"class","svelte-ltn89m"),d(a,"class","counter svelte-ltn89m")},m(t,r){f(t,a,r),u(a,e),u(e,b),u(b,$),u(a,y),u(a,x),u(x,I),u(I,T),u(T,k),u(I,M),u(I,O),u(O,S),u(a,B),u(a,N),u(N,R),u(R,j),D||(G=[p(e,"click",s[4]),p(N,"click",s[5])],D=!0)},p(s,[a]){2&a&&H!==(H=Math.floor(s[1]+1)+"")&&g(k,H),2&a&&U!==(U=Math.floor(s[1])+"")&&g(S,U),4&a&&m(I,"transform","translate(0, "+100*s[2]+"%)")},i:E,o:E,d(s){s&&i(a),D=!1,w(G)}}}function B(s,a,e){let t,r,l=0;const c=$();b(s,c,(s=>e(1,r=s)));return s.$$.update=()=>{var a;1&s.$$.dirty&&c.set(l),2&s.$$.dirty&&e(2,t=(r%(a=1)+a)%a)},[l,r,t,c,()=>e(0,l-=1),()=>e(0,l+=1)]}class N extends s{constructor(s){super(),a(this,s,B,S,e,{})}}function R(s){let a,e,r,m,p,g,w,b,$,S,B,R,j,D,G,H,U,V,C,L;return C=new N({}),{c(){a=l(),e=t("section"),r=t("h1"),m=t("div"),p=t("picture"),g=t("source"),w=l(),b=t("img"),S=c("\n\n\t\tto your new"),B=t("br"),R=c("SvelteKit app"),j=l(),D=t("h2"),G=c("try editing "),H=t("strong"),U=c("src/routes/index.svelte"),V=l(),y(C.$$.fragment),this.h()},l(s){x('[data-svelte="svelte-1anpopb"]',document.head).forEach(i),a=v(s),e=o(s,"SECTION",{class:!0});var t=n(e);r=o(t,"H1",{class:!0});var l=n(r);m=o(l,"DIV",{class:!0});var c=n(m);p=o(c,"PICTURE",{});var d=n(p);g=o(d,"SOURCE",{srcset:!0,type:!0}),w=v(d),b=o(d,"IMG",{src:!0,alt:!0,class:!0}),d.forEach(i),c.forEach(i),S=h(l,"\n\n\t\tto your new"),B=o(l,"BR",{}),R=h(l,"SvelteKit app"),l.forEach(i),j=v(t),D=o(t,"H2",{});var f=n(D);G=h(f,"try editing "),H=o(f,"STRONG",{});var u=n(H);U=h(u,"src/routes/index.svelte"),u.forEach(i),f.forEach(i),V=v(t),I(C.$$.fragment,t),t.forEach(i),this.h()},h(){document.title="Home",d(g,"srcset","svelte-welcome.webp"),d(g,"type","image/webp"),b.src!==($="svelte-welcome.png")&&d(b,"src","svelte-welcome.png"),d(b,"alt","Welcome"),d(b,"class","svelte-mjk9ig"),d(m,"class","welcome svelte-mjk9ig"),d(r,"class","svelte-mjk9ig"),d(e,"class","svelte-mjk9ig")},m(s,t){f(s,a,t),f(s,e,t),u(e,r),u(r,m),u(m,p),u(p,g),u(p,w),u(p,b),u(r,S),u(r,B),u(r,R),u(e,j),u(e,D),u(D,G),u(D,H),u(H,U),u(e,V),T(C,e,null),L=!0},p:E,i(s){L||(k(C.$$.fragment,s),L=!0)},o(s){M(C.$$.fragment,s),L=!1},d(s){s&&i(a),s&&i(e),O(C)}}}const j=!0;export default class extends s{constructor(s){super(),a(this,s,null,R,e,{})}}export{j as prerender};

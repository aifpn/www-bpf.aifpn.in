import{S as w,i as y,s as z,e as d,t as v,c as E,a as b,g as N,d as n,f as u,G as P,h as R,j,k as q,l as S,N as C}from"./chunks/vendor-dece7a2b.js";function G(r){let f,t=r[1].frame+"",a;return{c(){f=d("pre"),a=v(t)},l(l){f=E(l,"PRE",{});var s=b(f);a=N(s,t),s.forEach(n)},m(l,s){u(l,f,s),P(f,a)},p(l,s){s&2&&t!==(t=l[1].frame+"")&&R(a,t)},d(l){l&&n(f)}}}function H(r){let f,t=r[1].stack+"",a;return{c(){f=d("pre"),a=v(t)},l(l){f=E(l,"PRE",{});var s=b(f);a=N(s,t),s.forEach(n)},m(l,s){u(l,f,s),P(f,a)},p(l,s){s&2&&t!==(t=l[1].stack+"")&&R(a,t)},d(l){l&&n(f)}}}function A(r){let f,t,a,l,s=r[1].message+"",c,k,m,p,i=r[1].frame&&G(r),o=r[1].stack&&H(r);return{c(){f=d("h1"),t=v(r[0]),a=j(),l=d("pre"),c=v(s),k=j(),i&&i.c(),m=j(),o&&o.c(),p=q()},l(e){f=E(e,"H1",{});var _=b(f);t=N(_,r[0]),_.forEach(n),a=S(e),l=E(e,"PRE",{});var h=b(l);c=N(h,s),h.forEach(n),k=S(e),i&&i.l(e),m=S(e),o&&o.l(e),p=q()},m(e,_){u(e,f,_),P(f,t),u(e,a,_),u(e,l,_),P(l,c),u(e,k,_),i&&i.m(e,_),u(e,m,_),o&&o.m(e,_),u(e,p,_)},p(e,[_]){_&1&&R(t,e[0]),_&2&&s!==(s=e[1].message+"")&&R(c,s),e[1].frame?i?i.p(e,_):(i=G(e),i.c(),i.m(m.parentNode,m)):i&&(i.d(1),i=null),e[1].stack?o?o.p(e,_):(o=H(e),o.c(),o.m(p.parentNode,p)):o&&(o.d(1),o=null)},i:C,o:C,d(e){e&&n(f),e&&n(a),e&&n(l),e&&n(k),i&&i.d(e),e&&n(m),o&&o.d(e),e&&n(p)}}}function F({error:r,status:f}){return{props:{error:r,status:f}}}function B(r,f,t){let{status:a}=f,{error:l}=f;return r.$$set=s=>{"status"in s&&t(0,a=s.status),"error"in s&&t(1,l=s.error)},[a,l]}class I extends w{constructor(f){super();y(this,f,B,A,z,{status:0,error:1})}}export{I as default,F as load};

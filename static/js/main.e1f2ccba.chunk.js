(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var c,i,a,r,o=t(0),s=t(14),b=t.n(s),j=t(5),d=t(3),l=t(2),u=t(7),x=t(4),p="token",O=function(n){localStorage.setItem(p,n)},h=function(){return localStorage.getItem(p)},f="https://student-json-api.lidemy.me",g=function(n,e){return fetch("".concat(f,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:n,password:e})}).then((function(n){return n.json()}))},m=function(){var n=h();return fetch("".concat(f,"/me"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()}))},v=Object(o.createContext)(null),y=Object(o.createContext)(null),w=t(1),k=l.b.form(c||(c=Object(d.a)(["\npadding:20px;\ntext-align:center;\n\n"]))),S=l.b.div(i||(i=Object(d.a)(["\nborder: 1px solid rgba(236, 109, 81, 0.5);\nwidth: 26%;\nmargin: 0px auto;\npadding:15px 1px;\nborder-radius: 5px\n"]))),C=l.b.input(a||(a=Object(d.a)(["\n  height:30px;\n  padding: 5px;\n  margin: 16px 0;\n"]))),z=l.b.div(r||(r=Object(d.a)(["\n  color:red\n"])));function N(){var n=Object(o.useContext)(v).setUser,e=Object(o.useState)(""),t=Object(j.a)(e,2),c=t[0],i=t[1],a=Object(o.useState)(""),r=Object(j.a)(a,2),s=r[0],b=r[1],d=Object(o.useState)(),l=Object(j.a)(d,2),u=l[0],p=l[1],h=Object(x.f)();return Object(w.jsx)(k,{onSubmit:function(e){p(null),g(c,s).then((function(e){if(0===e.ok)return p(e.message);O(e.token),m().then((function(e){if(1!==e.ok)return O(null),p(e.toString());n(e.data),console.log(e,"\u56de\u61c9"),h("/")}))}))},children:Object(w.jsxs)(S,{children:[Object(w.jsxs)("div",{children:["username: "," ",Object(w.jsx)(C,{value:c,onChange:function(n){i(n.target.value)}})]}),Object(w.jsxs)("div",{children:["password: "," ",Object(w.jsx)(C,{type:"password",value:s,onChange:function(n){return b(n.target.value)}})]}),Object(w.jsx)("button",{className:"btn btn-outline-dark btn-sm",children:"\u767b\u5165"}),u&&Object(w.jsx)(z,{children:u})]})})}t(13);var _,F,L,P,E,B,T,D,J,$=l.b.div(_||(_=Object(d.a)(["\n  text-align: center;\n"]))),A=l.b.button(F||(F=Object(d.a)(["\n  font-size: 8px;\n  border-radius: 5px;\n  padding: 12px;\n  background: transparent;\n  color: black;\n  border: 1px solid #00BFFF;\n  cursor: pointer;\n  &:active {\n    background: #00BFFF;\n  }\n  & + & {\n    margin-left: 10px;\n  }\n"]))),I=l.b.div(L||(L=Object(d.a)(["\n  padding-top: 36px;\n"])));function U(n){var e=n.page,t=n.handlePageClick;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)($,{children:[Object(w.jsx)(A,{onClick:function(){t("First")},children:"\u7b2c\u4e00\u9801"}),Object(w.jsx)(A,{onClick:function(){t("Prev")},children:"\u4e0a\u4e00\u9801"}),e,Object(w.jsx)(A,{onClick:function(){t("Next")},children:"\u4e0b\u4e00\u9801"}),Object(w.jsx)(A,{onClick:function(){t("Last")},children:"\u6700\u672b\u9801"})]}),Object(w.jsx)(I,{})]})}var M,q,G,R,W,Y,H,K,Q=l.b.div(P||(P=Object(d.a)(["\n  width: 80%;\n  margin: 0 auto;\n"]))),V=l.b.div(E||(E=Object(d.a)(["\n  \n  padding: 20px 40px 30px 40px;\n  max-width: 800px;\n  margin: 30px auto;\n  font-size: 20px;\n  @media screen and (max-width: 768px) {\n    margin: 100px auto;\n    overflow: hidden;\n  }\n"]))),X=l.b.div(B||(B=Object(d.a)(["\n  border-bottom: 1px solid rgba(0, 12, 34, 0.2);\n  padding: 16px;\n \n"]))),Z=Object(l.b)(u.b)(T||(T=Object(d.a)(["\n  margin: 3px 20px;\n  font-size: 28px;\n  font-weight: 600;\n  color: #333;\n  text-decoration: none;\n"]))),nn=l.b.p(D||(D=Object(d.a)(["\n  color: rgba(0, 0, 0, 0.8);\n  margin-left: 10px;\n  font-size: 16px;\n"]))),en=l.b.div(J||(J=Object(d.a)(["\n  width: 700px; \n  display: flex;\n  align-items: center;\n  margin: 3px 30px;\n  padding-left: 5px;\n"]))),tn={paddingLeft:"10px"};function cn(n){var e=n.post;return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(V,{children:[Object(w.jsx)(X,{children:Object(w.jsx)(Z,{to:"/posts/".concat(e.id),children:e.title})}),Object(w.jsxs)(en,{children:[Object(w.jsx)("p",{children:"Posted by"})," ",Object(w.jsx)("p",{style:tn,children:e.user.nickname}),Object(w.jsx)("p",{style:tn,children:"on"}),Object(w.jsx)(nn,{children:new Date(e.createdAt).toLocaleString()})]})]})})}function an(){var n=Object(o.useState)([]),e=Object(j.a)(n,2),t=e[0],c=e[1],i=Object(o.useState)(),a=Object(j.a)(i,2),r=a[0],s=a[1],b=Object(o.useState)(1),d=Object(j.a)(b,2),l=d[0],u=d[1];fetch("".concat(f,"/posts?_expand=user&_sort=createdAt&_order=desc")).then((function(n){return n.json()})).then((function(n){var e=Number(n.length);s(Math.ceil(e/5))})),Object(o.useEffect)((function(){(function(n){return fetch("".concat(f,"/posts?_expand=user&_sort=createdAt&_order=desc&_page=").concat(n,"&_limit=5")).then((function(n){return n.json()}))})(l).then((function(n){c(n)})),window.scrollTo({top:0,behavior:"smooth"})}),[l]);return Object(w.jsxs)(Q,{children:[t.map((function(n){return Object(w.jsx)(cn,{post:n},n.id)})),Object(w.jsx)(U,{page:l,handlePageClick:function(n){return"First"===n?u(1):"Prev"===n&&l>1?u(l-1):"Next"===n&&l<r?u(l+1):"Last"===n?u(r):void 0}})]})}var rn,on,sn,bn,jn=l.b.div(M||(M=Object(d.a)(["\n  width: 80%;\n  margin: 0 auto;\n"]))),dn=l.b.div(q||(q=Object(d.a)(["\n  width: 80%;\n  margin: 0 auto;\n  border-bottom: 1px solid rgba(0, 12, 34, 0.2);\n  padding: 16px;\n"]))),ln=l.b.h3(G||(G=Object(d.a)(["\n  text-align:center;\n  font-weight: 500;\n  font-family: cursive;\n"]))),un=l.b.div(R||(R=Object(d.a)(["\n  text-align:center;\n"]))),xn=l.b.p(W||(W=Object(d.a)(["\n  margin-right:12px;\n  display:inline;;\n  font-weight: 600;\n  color: cadetblue;\n  font-family: 'Lora', 'Times New Roman', serif;\n  font-style: italic;\n"]))),pn=l.b.div(Y||(Y=Object(d.a)(["\n  font-size: 14px;\n  color: #127436;\n  font-style: oblique;\n  display:inline;\n"]))),On=l.b.p(H||(H=Object(d.a)(["\n  white-space: pre-wrap;\n  text-align:left;\n  margin-top: 20px;\n"]))),hn=l.b.div(K||(K=Object(d.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  font-size: 24px;\n  background: rgba(0, 0, 0, 0.3);\n"])));function fn(n){var e=n.post,t=n.onDelete,c=Object(o.useContext)(v).user;return e?Object(w.jsxs)(dn,{children:[Object(w.jsx)(ln,{children:e.title}),Object(w.jsxs)(un,{children:[Object(w.jsxs)(xn,{children:["Posted by ",e.user.nickname," on"]}),Object(w.jsx)(pn,{children:new Date(e.createdAt).toLocaleString()}),Object(w.jsx)(On,{children:e.body}),c&&c.nickname===e.user.nickname?Object(w.jsx)("button",{className:"btn btn-dark btn-sm",onClick:t,children:"\u522a\u9664"}):""]})]}):null}function gn(){var n=Object(o.useState)(),e=Object(j.a)(n,2),t=e[0],c=e[1],i=Object(o.useState)(!1),a=Object(j.a)(i,2),r=a[0],s=a[1],b=Object(x.f)(),d=Object(x.g)().id;return Object(o.useEffect)((function(){s(!0),function(n){return fetch("".concat(f,"/posts/").concat(n,"?_expand=user")).then((function(n){return n.json()}))}(d).then((function(n){s(!1),c(n)})).catch((function(n){s(!1)}))}),[d]),Object(w.jsxs)(jn,{children:[Object(w.jsx)(fn,{post:t,onDelete:function(){(function(n){var e=h();return fetch("".concat(f,"/posts/").concat(n),{method:"DELETE",headers:{authorization:"Bearer ".concat(e),"content-type":"application/json"}}).then((function(n){return n.json()}))})(d).then((function(){b("/")}))}}),r&&Object(w.jsx)(hn,{children:"\u8f09\u5165\u4e2d"})]})}var mn,vn,yn,wn,kn=l.b.form(rn||(rn=Object(d.a)(["\n  border: solid 3px black;\n  padding: 20px 40px 60px 40px;\n  max-width: 800px;\n  margin: 30px auto;\n  font-size: 20px;\n  @media screen and (max-width: 768px) {\n    margin: 100px auto;\n    overflow: hidden;\n  }\n"]))),Sn=l.b.input(on||(on=Object(d.a)(["\n  margin-bottom: 12px;\n  width: 100%;\n  font-size: 16px;\n  padding: 10px;\n"]))),Cn=l.b.textarea(sn||(sn=Object(d.a)(["\n  width: 100%;\n  font-size: 16px;\n  padding: 12px;\n"]))),zn=l.b.button(bn||(bn=Object(d.a)(["\n  padding: 12px;\n  background: #ff8100;\n  color: white;\n  border: solid 1px #ff8100;\n  cursor: pointer;\n  float: right;\n  &:hover {\n    background: #ff8100;\n  }\n  & + & {\n    margin-left: 5px;\n  }\n"])));function Nn(){var n=Object(o.useState)(""),e=Object(j.a)(n,2),t=e[0],c=e[1],i=Object(o.useState)(""),a=Object(j.a)(i,2),r=a[0],s=a[1],b=Object(x.f)();return Object(w.jsxs)(kn,{onSubmit:function(n){(function(n,e){var t=h();return fetch("".concat(f,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(t)},body:JSON.stringify({title:n,body:e})}).then((function(n){return n.json()}))})(t,r).then((function(n){if(0===n.ok)return alert("\u8acb\u8f38\u5165\u6a19\u984c\u53ca\u5167\u6587");n.id&&b("/")}))},children:["Title:"," ",Object(w.jsx)(Sn,{value:t,onChange:function(n){return c(n.target.value)}}),"Content:"," ",Object(w.jsx)(Cn,{rows:"20",value:r,onChange:function(n){return s(n.target.value)}}),Object(w.jsx)(zn,{children:"submit"})]})}var _n=l.b.form(mn||(mn=Object(d.a)(["\nmargin:0px auto;\npadding:20px;\ntext-align:center;\n"]))),Fn=l.b.input(vn||(vn=Object(d.a)(["\n  height:26px;\n  padding: 5px;\n  margin: 16px 0;\n"]))),Ln=l.b.div(yn||(yn=Object(d.a)(["\n  color:red\n"]))),Pn=l.b.div(wn||(wn=Object(d.a)(["\nborder: 1px solid rgba(236, 109, 81, 0.5);\nwidth: 26%;\nmargin: 0px auto;\npadding:15px 1px;\nborder-radius: 5px\n"])));function En(){var n=Object(o.useContext)(v).setUser,e=Object(o.useState)(""),t=Object(j.a)(e,2),c=t[0],i=t[1],a=Object(o.useState)(""),r=Object(j.a)(a,2),s=r[0],b=r[1],d=Object(o.useState)("Lidemy"),l=Object(j.a)(d,2),u=l[0],p=l[1],h=Object(o.useState)(),y=Object(j.a)(h,2),k=y[0],S=y[1],C=Object(x.f)();return Object(w.jsx)(_n,{onSubmit:function(e){S(null),function(n,e,t){return fetch("".concat(f,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:n,username:e,password:t})}).then((function(n){return n.json()}))}(c,s,u).then((function(e){if(console.log(e),0===e.ok)return S(e.message);g(s,u).then((function(e){if(0===e.ok)return S(e.message);O(e.token),m().then((function(e){if(1!==e.ok)return O(null),S(e.toString());n(e.data),C("/")}))}))}))},children:Object(w.jsxs)(Pn,{children:[Object(w.jsxs)("div",{children:["nickname: "," ",Object(w.jsx)(Fn,{value:c,onChange:function(n){return i(n.target.value)}})]}),Object(w.jsxs)("div",{children:["username: "," ",Object(w.jsx)(Fn,{value:s,onChange:function(n){return b(n.target.value)}})]}),Object(w.jsxs)("div",{children:["password: "," ",Object(w.jsx)(Fn,{type:"password",value:u,onChange:function(n){return p(n.target.value)}})]}),Object(w.jsx)("button",{className:"btn btn-outline-dark btn-sm",children:"\u8a3b\u518a"}),k&&Object(w.jsx)(Ln,{children:k})]})})}t(25);var Bn,Tn,Dn,Jn,$n,An,In,Un=l.b.div(Bn||(Bn=Object(d.a)([""]))),Mn=l.b.div(Tn||(Tn=Object(d.a)(["\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding:0px 32px;\n  box-sizing: border-box;\n  background:\t#F5F5F5;\n"]))),qn=l.b.div(Dn||(Dn=Object(d.a)(["\nfont-style:oblique;\nfont-size:32px;\nfont-weight: bold;\ncolor:red;\n"]))),Gn=l.b.div(Jn||(Jn=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  height: 80px;\n"]))),Rn=Object(l.b)(u.b)($n||($n=Object(d.a)([" \n  font-size: 20px;\n  font-weight: 600;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  box-sizing: border-box;\n  width: 100px;\n  cursor: pointer;\n  color: black;\n  text-decoration: none;\n  "," \n"])),(function(n){return n.$active&&"\n    background: \t#B0C4DE;\n  "})),Wn=l.b.div(An||(An=Object(d.a)(["\n  display: flex;\n  align-items: center;\n\n  "," {\n    margin-left: 64px;\n  }\n"])),Gn);function Yn(){var n=Object(o.useContext)(y).isLoading,e=Object(x.e)(),t=Object(x.f)(),c=Object(o.useContext)(v),i=c.user,a=c.setUser;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(Mn,{className:"navbar fixed-top navbar-light",children:[Object(w.jsxs)(Wn,{children:[Object(w.jsx)(qn,{to:"/",children:"Blog"}),Object(w.jsxs)(Gn,{className:"navbar-fixed-top",children:[Object(w.jsx)(Rn,{to:"/",$active:"/"===e.pathname,children:"\u9996\u9801"}),i&&Object(w.jsx)(Rn,{to:"/new-post",$active:"/new-post"===e.pathname,children:"\u767c\u5e03\u6587\u7ae0"})]})]}),!n&&Object(w.jsxs)(Gn,{className:"navbar-fixed-top",children:[!i&&Object(w.jsx)(Rn,{to:"/register",$active:"/register"===e.pathname,children:"\u8a3b\u518a"}),!i&&Object(w.jsx)(Rn,{to:"/login",$active:"/login"===e.pathname,children:"\u767b\u5165"}),i&&Object(w.jsx)(Rn,{to:"/login",onClick:function(){O(""),a(null),t("/")},children:"\u767b\u51fa"})]})]}),Object(w.jsx)(Un,{children:Object(w.jsx)("div",{className:"top-banner",children:Object(w.jsx)("div",{className:"top-banner__info",children:Object(w.jsx)("h1",{className:"top-banner__sub-title",children:"WELCOME TO MY BLOG"})})})})]})}var Hn=l.b.div(In||(In=Object(d.a)(["\n  padding-top: 64px;\n"])));var Kn=function(){var n=Object(o.useState)(null),e=Object(j.a)(n,2),t=e[0],c=e[1],i=Object(o.useState)(!0),a=Object(j.a)(i,2),r=a[0],s=a[1];return Object(o.useEffect)((function(){h()?m().then((function(n){s(!1),n.ok&&(c(n.data),s(!1))})):s(!1)}),[]),Object(w.jsx)(v.Provider,{value:{user:t,setUser:c},children:Object(w.jsx)(y.Provider,{value:{isLoading:r,setIsLoading:s},children:Object(w.jsx)(Hn,{children:Object(w.jsxs)(u.a,{children:[Object(w.jsx)(Yn,{}),Object(w.jsxs)(x.c,{children:[Object(w.jsx)(x.a,{path:"/",element:Object(w.jsx)(an,{})}),Object(w.jsx)(x.a,{path:"/login",element:Object(w.jsx)(N,{})}),Object(w.jsx)(x.a,{path:"/register",element:Object(w.jsx)(En,{})}),Object(w.jsx)(x.a,{path:"/posts/:id",element:Object(w.jsx)(gn,{})}),Object(w.jsx)(x.a,{path:"/new-post",element:Object(w.jsx)(Nn,{})})]})]})})})})};b.a.render(Object(w.jsx)(l.a,{theme:{colors:{primary_300:"#3333dd",primary_400:"#e33e3e",primary_500:"#af0505"}},children:Object(w.jsx)(Kn,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.e1f2ccba.chunk.js.map
(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{17:function(n,t,e){},21:function(n,t,e){"use strict";e.r(t);var i,o,a,r,c,s,l,d,x,u,p,b,j,g,f,h=e(0),O=e.n(h),m=e(9),w=e.n(m),v=(e(17),e(4)),k=[{min:1,max:200,url:!1,text:"Congratulations you won 3rd prize!",altText:"alt text"},{min:201,max:400,url:!1,text:"Congratulations you won 2nd prize!",altText:"alt text"},{min:401,max:600,url:!1,text:"Congratulations you won 1st prize!",altText:"alt text"}],y=e(2),C=e(3),F=C.a.div(i||(i=Object(y.a)(["\n  display: block;\n  background-color: #fff;\n  position: fixed;\n  background-color: rgba(0, 0, 0, .4);\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n"]))),S=C.a.div(o||(o=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-width: 75%;\n  min-height: 75%;\n  background-color: #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 22px;\n"]))),T=C.a.p(a||(a=Object(y.a)(["\n  font-size: 22px;\n  color: #000;\n  font-weight: 600;\n  margin-bottom: 20px;\n"]))),z=C.a.p(r||(r=Object(y.a)(["\n  font-size: 28px;\n  color: ",";\n"])),(function(n){return n.winner?"#0f0":"#f00"})),I=C.a.button(c||(c=Object(y.a)(["\n  background: #D15D5B;\n  border: 0;\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n  color: #fff;\n  margin: 24px 0;\n  padding: 12px 32px;\n  font-weight: 100;\n  font-size: 18px;\n  transition: all .3s ease-in-out;\n  cursor: pointer;\n  opacity: .8;\n\n  &:hover {\n    padding: 12px 42px;\n    box-shadow: 0 10px 20px rgba(0,0,0,0.3), 0 6px 6px rgba(0,0,0,0.6);\n    opacity: 1;\n  }\n"]))),A=C.a.img(s||(s=Object(y.a)(["\n  max-width: 100%;\n  max-height: 320px;\n  padding: 22px;\n"]))),B=C.a.p(l||(l=Object(y.a)(["\n  color: #000;\n"]))),L=e(1),D=function(n){var t,e=n.gameState,i=n.points,o=null===(t=function(n,t){return n.filter((function(n){return t>=n.min&&t<=n.max&&n}))}(k,i))||void 0===t?void 0:t[0];return!e&&Object(L.jsx)(F,{children:Object(L.jsxs)(S,{children:[Object(L.jsx)(T,{children:i?"YOU WIN":"YOU LOOSE"}),Object(L.jsxs)(z,{winner:i,children:["Your score is ",i," points"]}),(null===o||void 0===o?void 0:o.url)&&(null===o||void 0===o?void 0:o.altText)&&Object(L.jsx)(A,{src:null===o||void 0===o?void 0:o.url,alt:null===o||void 0===o?void 0:o.altText}),(null===o||void 0===o?void 0:o.text)&&Object(L.jsx)(B,{children:null===o||void 0===o?void 0:o.text}),Object(L.jsx)(I,{onClick:function(){window.location.reload()},children:"RESET"})]})})},E=C.a.p(d||(d=Object(y.a)(["\n  font-size: 22px;\n  font-weight: 600;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 12px 0;\n  background: #2C415A;\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n  position: sticky;\n  top: 0;\n"]))),P=function(n){var t=n.points;return Object(L.jsxs)(E,{children:["Score: ",t]})},Y=[{title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1",answers:["False","False","True","False"],correctAnswerIndex:3},{title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2",answers:["False","True","False","False"],correctAnswerIndex:2},{title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3",answers:["False","False","False","True"],correctAnswerIndex:4}],q=C.a.div(x||(x=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  max-width: 700px;\n  padding: 44px 22px;\n"]))),J=C.a.h2(u||(u=Object(y.a)(["\n  margin-bottom: 32px;\n  font-weight: 600;\n  text-shadow: 2px 2px 4px rgba(50, 50, 50, .8);\n"]))),N=C.a.ul(p||(p=Object(y.a)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),U=C.a.li(b||(b=Object(y.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]))),M=C.a.button(j||(j=Object(y.a)(["\n  border: 0;\n  cursor: pointer;\n  padding: 16px 24px;\n  background-color: #fff;\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n  color: #000;\n  width: 100%;\n  margin: 0 auto;\n  margin-bottom: 32px;\n  max-width: 320px;\n  font-size: 18px;\n  text-align: left;\n  opacity: 1;\n  transition: all .3s ease-in-out;\n  background: #fff;\n\n  &:hover {\n    opacity: .6;\n  }\n"]))),R=C.a.p(g||(g=Object(y.a)(["\n  text-align: center;\n  font-weight: 600;\n"]))),W=function(n){var t=n.setPointsClick,e=n.setSlideClick,i=n.slideIndex,o=n.setBackgroundColor,a=Y;return Object(L.jsx)(q,{children:a.map((function(n,r){var c=n.title,s=n.answers,l=n.correctAnswerIndex;return r===i&&Object(L.jsxs)(N,{children:[Object(L.jsxs)(J,{children:[r+1,". ",c]}),s.map((function(n,i){return Object(L.jsx)(U,{children:Object(L.jsxs)(M,{onClick:function(){return function(n,i,r){o(n+1===i?"#4EC290":"#D15D5B"),setTimeout((function(){n+1===i?(t(),e(r,a.length)):e(r,a.length),o(!1)}),1e3)}(i,l,r)},children:[i+1,". ",n]})},n+i)})),Object(L.jsxs)(R,{children:[r+1,"/",a.length]})]},c+r)}))})},G=C.a.div(f||(f=Object(y.a)(["\n   background: ",";\n   min-height: 100vh;\n   transition: all .3s ease-in-out;\n"])),(function(n){return n.color})),H=function(){var n=Object(h.useState)(0),t=Object(v.a)(n,2),e=t[0],i=t[1],o=Object(h.useState)(0),a=Object(v.a)(o,2),r=a[0],c=a[1],s=Object(h.useState)(!0),l=Object(v.a)(s,2),d=l[0],x=l[1],u=Object(h.useState)(!1),p=Object(v.a)(u,2),b=p[0],j=p[1],g=Object(h.useState)("#252A3F"),f=Object(v.a)(g,2),O=f[0],m=f[1];return Object(L.jsxs)(G,{color:O,children:[Object(L.jsx)(P,{points:e}),Object(L.jsx)(W,{setPointsClick:function(){i(e+100)},setSlideClick:function(n,t){n+1===t?(j(!0),x(!1)):c(n+1)},slideIndex:r,setBackgroundColor:function(n){m(n||"#252A3F")}}),Object(L.jsx)(D,{gameState:d,points:e,winner:b})]})};var K=function(){return Object(L.jsx)("div",{className:"App",children:Object(L.jsx)(H,{})})},Q=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,22)).then((function(t){var e=t.getCLS,i=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;e(n),i(n),o(n),a(n),r(n)}))};w.a.render(Object(L.jsx)(O.a.StrictMode,{children:Object(L.jsx)(K,{})}),document.getElementById("root")),Q()}},[[21,1,2]]]);
//# sourceMappingURL=main.f05a91e6.chunk.js.map
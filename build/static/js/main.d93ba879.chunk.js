(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var i=n(0),a=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,49)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),c(e),o(e)}))},c=n(3),o=n(4),r=n(6),l=n(5),s=n(11),d=n(1),u=n.n(d),p=n(2),b=n.n(p),j=(n(23),n(10)),h=n(8),m=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).App=Object(s.a)((function(){return Promise.all([n.e(5),n.e(3)]).then(n.bind(null,50))})),e.loadApp=function(){this.load().then((function(e){b.a.render(Object(i.jsx)(u.a.StrictMode,{children:Object(i.jsx)(e.BottomScrollbar,{})}),document.getElementById("scrollbar")),b.a.render(Object(i.jsx)(u.a.StrictMode,{children:Object(i.jsx)(e.App,{})}),document.getElementById("root"))}))}.bind(e.App),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.loadApp();var e=2e3;h.a.timeline({}).add({delay:e/3,targets:"#name-underline",easing:"cubicBezier(.16,.69,.21,.99)",width:["0vw","46.77083vw"],duration:e/3}).add({targets:".bchoiletter",easing:"cubicBezier(.16,.69,.21,.99)",delay:h.a.stagger(41),translateY:["20vw","0vw"],duration:e/3},e/3).add({targets:"#intropage-inner",easing:"cubicBezier(.16,.69,.21,.99)","padding-left":["26.614585vw","3.4375vw"],duration:e/3}).add({targets:"#scrollbar",easing:"cubicBezier(.16,.69,.21,.99)",bottom:["-80px","0px"],duration:e/3}).add({targets:"#loading",easing:"cubicBezier(.16,.69,.21,.99)",opacity:[1,0],duration:e/3,complete:function(e){document.getElementById("loading").style.pointerEvents="none"}},"-="+e/3)}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"loading",children:[Object(i.jsx)(j.a,{url:"https://fonts.googleapis.com/css2?family=Scheherazade&family=Secular+One&family=Sen:wght@400;700&family=Staatliches&display=swap"}),Object(i.jsx)("div",{className:"intropage",children:Object(i.jsxs)("div",{id:"intropage-inner",children:[Object(i.jsx)("span",{className:"big-name",children:Object(i.jsx)(g,{children:"Brandon Choi"})}),Object(i.jsx)("div",{id:"name-underline"}),Object(i.jsx)("div",{className:"desc",children:"I am a Front-end developer, looking for a full time position."})]})})]})}}]),a}(u.a.Component),g=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(c.a)(this,n),i=t.call(this,e),console.log(i.props.children.split("")),i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(i.jsx)("div",{className:this.props.children,children:this.props.children.split("").map((function(e,t){return" "===e?Object(i.jsx)("div",{style:{float:"left"},className:"bchoiletter",children:" \xa0"},t):Object(i.jsxs)("div",{style:{float:"left"},className:"bchoiletter",children:[e," "]},t)}))})}}]),n}(u.a.Component),f=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.App=Object(s.a)((function(){return n.e(4).then(n.bind(null,51))})),this.loadApp=function(){this.load().then((function(e){b.a.render(Object(i.jsx)(u.a.StrictMode,{children:Object(i.jsx)(e.App,{})}),document.getElementById("root"))}))}.bind(this.App),this.loadApp()}},{key:"render",value:function(){return Object(i.jsx)("div",{className:"mobileloading",children:Object(i.jsx)(j.a,{url:"https://fonts.googleapis.com/css2?family=Scheherazade&family=Secular+One&family=Sen:wght@400;700&family=Staatliches&display=swap"})})}}]),a}(u.a.Component),O=n(16),v=new(n.n(O).a)(window.navigator.userAgent);console.log(v.mobile()),v.mobile()?b.a.render(Object(i.jsx)(u.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("loading")):b.a.render(Object(i.jsx)(u.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("loading")),a()}},[[27,1,2]]]);
//# sourceMappingURL=main.d93ba879.chunk.js.map
(this.webpackJsonpcollage=this.webpackJsonpcollage||[]).push([[0],[,function(e,t,a){e.exports={Src:"srcTxt_Src__Tp1Fn",Text:"srcTxt_Text__3jD7r",BtnContainer:"srcTxt_BtnContainer__3Ymd3",Btn:"srcTxt_Btn__sEVsy"}},,,,function(e,t,a){e.exports={Card:"collage_Card__2Ioxg",Collage:"collage_Collage__2bORZ"}},,,,function(e,t,a){e.exports={App:"App_App__5mxAT"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3nZ4N"}},function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__eWmaY"}},function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),l=(a(17),a(6)),s=a(4),u=a(9),i=a.n(u),m=a(5),p=a.n(m),d=a(10),f=a.n(d),x=function(e){return e.show?r.a.createElement("div",{className:f.a.Backdrop,onClick:e.clicked}):null},h=function(e){for(var t=e.cutup1.concat(e.cutup2).map((function(e){return{sort:Math.random(),value:e}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value})),a=[],n=0;n<t.length;n+=2){var o=t[n].concat(" ",t[n+1]," ");a.push(o)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{show:e.show,clicked:e.closed}),r.a.createElement("div",{className:p.a.Card,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},r.a.createElement("p",{className:p.a.Collage},a)))},_=a(1),b=a.n(_),g=function(e){return r.a.createElement("form",{onSubmit:e.submitted},r.a.createElement("div",{className:b.a.Src},r.a.createElement("textarea",{className:b.a.Text,name:"userTxt1",id:"userTxt1",placeholder:"Copy/paste or type text here. For best results, fill the box!",rows:"15",cols:"30",maxLength:"700"}),r.a.createElement("textarea",{className:b.a.Text,name:"userTxt2",id:"userTxt2",placeholder:"Copy/paste or type text here. For best results, fill the box!",rows:"15",cols:"30",maxLength:"700"})),r.a.createElement("div",{className:b.a.BtnContainer},r.a.createElement("button",{className:b.a.Btn,type:"submit"},"Submit")))},v=a(11),E=a.n(v),T=function(e){return r.a.createElement("div",{className:E.a.Toolbar},r.a.createElement("div",null,"New User"),r.a.createElement("div",null,"Log in"),r.a.createElement("div",null,"My Collages"))},w=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)([]),u=Object(s.a)(c,2),m=u[0],p=u[1],d=Object(n.useState)(!1),f=Object(s.a)(d,2),x=f[0],_=f[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement("div",{className:i.a.App},r.a.createElement("div",{style:{fontSize:"22px"}},"Create a Text Collage!"),r.a.createElement("p",null,"Tip - try combining a poem with a news article."),r.a.createElement(g,{submitted:function(e){e.preventDefault(),o([]),p([]);for(var t=e.target.userTxt1.value,a=e.target.userTxt2.value,n=function(e){o((function(a){return[].concat(Object(l.a)(a),[t.slice(e,e+31)])}))},r=0;r<t.length-31;r+=31)n(r);for(var c=function(e){p((function(t){return[].concat(Object(l.a)(t),[a.slice(e,e+31)])}))},s=0;s<a.length-31;s+=31)c(s);_(!0)}}),r.a.createElement(h,{show:x,closed:function(){_(!1)},cutup1:a,cutup2:m})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.6f901ed6.chunk.js.map
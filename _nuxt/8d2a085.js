(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{192:function(t,e,r){"use strict";var o=r(0),n=r(193),l=r.n(n);o.a.use(l.a),o.a.component("vue-pdf-embed",l.a)},247:function(t,e,r){var content=r(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("4d6a2e0f",content,!0,{sourceMap:!1})},262:function(t,e,r){"use strict";var o=r(390),n=r(395),l=r(391),c=r(396),d=r(187),f=r(185),m=r(125),_=r(186),v=r(88),x=r(393),h=r(394),w=r(392),k=r(260),y={name:"DefaultLayout",data:function(){return{drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-timetable",title:"Spielplan",to:"/Spielplan"},{icon:"mdi-heart-multiple",title:"Spirit",to:"/spirit"},{icon:"mdi-map",title:"Lageplan",to:"/lageplan"},{icon:"mdi-food",title:"Restaurantliste",to:"/restaurantliste"}],title:"Mixed DM 2022 - Freiburg"}}},C=r(90),component=Object(C.a)(y,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{dark:""}},[e(h.a,{attrs:{fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(f.a,t._l(t.items,(function(r,i){return e(m.a,{key:i,attrs:{to:r.to,router:"",exact:""}},[e(_.a,[e(d.a,[t._v(t._s(r.icon))])],1),t._v(" "),e(v.a,[e(v.b,{domProps:{textContent:t._s(r.title)}})],1)],1)})),1)],1),t._v(" "),e(n.a,{attrs:{fixed:"",app:""}},[e(l.a,{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e(k.a,{domProps:{textContent:t._s(t.title)}}),t._v(" "),e(w.a)],1),t._v(" "),e(x.a,[e(c.a,{staticClass:"mb-5"},[e("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},270:function(t,e,r){r(271),t.exports=r(272)},321:function(t,e,r){"use strict";r(247)},322:function(t,e,r){var o=r(22)(!1);o.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=o},78:function(t,e,r){"use strict";var o=r(390),n={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},l=(r(321),r(90)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports}},[[270,10,2,11]]]);
(function(e){function t(t){for(var a,o,i=t[0],l=t[1],c=t[2],d=0,u=[];d<i.length;d++)o=i[d],s[o]&&u.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(u.length)u.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==s[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var p=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01b2":function(e,t,n){},"038d":function(e,t,n){e.exports=n.p+"img/vue.976452fa.svg"},"08e1":function(e,t,n){e.exports=n.p+"img/problem-solved.ca40937e.jpg"},1589:function(e,t,n){"use strict";var a=n("7479"),s=n.n(a);s.a},2186:function(e,t,n){},"21fe":function(e,t,n){},"24f0":function(e,t,n){"use strict";var a=n("01b2"),s=n.n(a);s.a},3701:function(e,t,n){},"387e":function(e,t,n){e.exports=n.p+"img/github.21d620ef.svg"},"397f":function(e,t,n){},"3c81":function(e,t,n){e.exports=n.p+"img/logos.23ab0842.png"},"4ed7":function(e,t,n){"use strict";var a=n("f5a8"),s=n.n(a);s.a},"54e6":function(e,t,n){e.exports=n.p+"img/instagram.7b13d22c.svg"},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("a026"),s=n("d973"),r=n("a70e"),o=n.n(r),i=n("4dd1"),l=n.n(i),c=n("8dcb"),p=n.n(c),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"eg-slideshow"},[n("slide",{attrs:{leave:"fadeOut",steps:2}},[n("slide-home",{attrs:{step:e.step}})],1),n("slide",{attrs:{enter:"fadeIn",leave:"fadeOut"}},[n("slide-presentation")],1),n("slide",{attrs:{enter:"fadeIn",leave:"fadeOut",steps:4}},[n("slide-legacy",{attrs:{step:e.step}})],1),n("slide",{attrs:{enter:"fadeIn",leave:"fadeOut",steps:5}},[n("slide-choice",{attrs:{step:e.step}})],1),n("slide",{attrs:{enter:"fadeIn",leave:"fadeOut",steps:3}},[n("slide-architecture",{attrs:{step:e.step}})],1),n("slide",{attrs:{enter:"fadeIn",leave:"fadeOut",steps:1}},[n("slide-example",{attrs:{step:e.step}})],1),n("slide",{attrs:{enter:"fadeIn",leave:"fadeOut",steps:1}},[n("slide-finished",{attrs:{step:e.step}})],1)],1)},u=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("content-slide",{attrs:{title:"Arquitetura de uma aplicação mista"}},[n("slide-box",{attrs:{size:35}},[n("text-step",{attrs:{current:e.step,step:1,text:"Webpack: O gerador e orquestrador de bundlers."}}),n("text-step",{attrs:{current:e.step,step:2,text:"ngVue: O responsável pela mágica."}}),n("text-step",{attrs:{current:e.step,step:3,text:"Sopa de letrinha no Frontend."}}),e.step>=3?n("image-slide",{staticClass:"photo",attrs:{path:e.images.logos,name:"Sopa de Letrinhas"}}):e._e()],1)],1)},f=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"eg-slide-content"},[n("h3",{domProps:{textContent:e._s(e.title)}}),e._t("default")],2)},g=[],b={name:"ContentSlide",props:{title:String}},x=b,h=(n("a33f"),n("2877")),_=Object(h["a"])(x,v,g,!1,null,"faa3208c",null);_.options.__file="ContentSlide.vue";var S=_.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("eg-transition",{attrs:{enter:"fadeIn"}},[n("img",{attrs:{src:e.path,alt:e.name}})])},C=[],w={name:"ImageSlide",props:{name:String,path:String}},O=w,j=(n("6e71"),Object(h["a"])(O,y,C,!1,null,"5ffbf4f5",null));j.options.__file="ImageSlide.vue";var $=j.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box",style:e.style},[e._t("default")],2)},L=[],E={name:"SlideBox",props:{size:Number},computed:{style(){return{width:`${this.size}em`}}}},F=E,I=(n("24f0"),Object(h["a"])(F,k,L,!1,null,"fbd31704",null));I.options.__file="SlideBox.vue";var A=I.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isShow?n("p",{domProps:{textContent:e._s(e.text)}}):e._e()},V=[],N={name:"TextStep",props:{current:{required:!0,type:Number},step:{required:!0,type:Number},text:{required:!0,type:String}},computed:{isShow(){return this.current>=this.step}}},P=N,B=Object(h["a"])(P,T,V,!1,null,null,null);B.options.__file="TextStep.vue";var D=B.exports,M=n("3c81"),q=n.n(M),z={name:"SlideArchitecture",components:{ContentSlide:S,ImageSlide:$,SlideBox:A,TextStep:D},props:{step:Number},data:()=>({images:{logos:q.a}})},J=z,H=(n("b827"),Object(h["a"])(J,m,f,!1,null,"297c2c3b",null));H.options.__file="SlideArchitecture.vue";var R=H.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("content-slide",{attrs:{title:"Por que escolhemos Vue.js?"}},[n("slide-box",{attrs:{size:35}},[n("text-step",{attrs:{current:e.step,step:1,text:"Estrutura sintática."}}),n("text-step",{attrs:{current:e.step,step:2,text:"Facilidade no aprendizado."}}),n("text-step",{attrs:{current:e.step,step:3,text:"Leveza dos elementos."}}),n("text-step",{attrs:{current:e.step,step:4,text:"Facilidade em compor os componentes."}}),n("text-step",{attrs:{current:e.step,step:5,text:"Comunidade ativa e crescente."}}),e.step>=5?n("image-slide",{staticClass:"photo",attrs:{path:e.images.awesome,name:"Fantástico"}}):e._e()],1)],1)},U=[],W=n("eaf7"),Y=n.n(W),K={name:"SlideChoice",components:{ContentSlide:S,ImageSlide:$,SlideBox:A,TextStep:D},props:{step:Number},data:()=>({images:{awesome:Y.a}})},Q=K,X=(n("ecd7"),Object(h["a"])(Q,G,U,!1,null,"220abf25",null));X.options.__file="SlideChoice.vue";var Z=X.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("content-slide",{attrs:{title:"E como ficou..."}},[n("slide-box",{attrs:{width:100}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("eg-code-block",{attrs:{lang:"javascript"}},[e._v(e._s(e.text.indexJS))]),n("eg-code-block",{attrs:{lang:"xml"}},[e._v(e._s(e.text.indexHTML))])],1),n("div",{staticClass:"col"},[n("eg-code-block",{attrs:{lang:"xml"}},[e._v(e._s(e.text.vue))])],1),n("div",{staticClass:"col"},[n("eg-code-block",{attrs:{lang:"javascript"}},[e._v(e._s(e.text.ctrl))])],1)])])],1)},te=[];const ne="// index.js\n\nimport angular from 'angular'\nimport Vue from 'vue'\nimport VueElement from './VueElement.vue'\n\nimport 'ngVue'\nimport 'bootstrap/dist/css/bootstrap.min.css'\n\nimport ctrl from './ctrl'\n\nconst app = angular.module('app', ['ngVue'])\n\napp.controller('AppCtrl', ctrl)\n\napp.directive('appTable', ['createVueComponent', (createVueComponent) => {\n  return createVueComponent(Vue.component('AppTable', VueElement))\n}])\n\nwindow.addEventListener('load', () => {\n  angular.bootstrap(window.document.body, ['app'])\n})",ae='\x3c!-- index.html --\x3e\n\n<!DOCTYPE html>\n<html lang="pt-BR">\n<head>[...]</head>\n<body>\n  <div ng-controller="AppCtrl">\n    <div class="container">\n      <div class="row mt-5">\n        <div class="col-12">\n          <form ng-submit="addList($event, entity)">[...]</form>\n        </div>\n      </div>\n      <div class="row mt-3">\n        <div class="col-12">\n          <app-table\n            v-props-list="list"\n            v-props-date-format="dataFormat"\n            v-props-value-format="valueFormat"\n            v-on-remove="removeItem">\n          </app-table>\n        </div>\n      </div>\n      <code>\n        <pre style="background-color: #eee; border: 1px solid #000;padding: 1em;">{{ list | json }}</pre>\n      </code>\n    </div>\n  </div>\n</body>\n</html>',se='<template>\n  <table class="table table-striped table-bordered table-hover table-sm">\n    <caption>\n      <span>Total de registros</span>\n      <span v-text="totalItens" />\n    </caption>\n    <thead class="thead-dark">\n      <tr>\n        <th scope="col" />\n        <th scope="col">Nome</th>\n        <th scope="col">Data</th>\n        <th scope="col">Valor</th>\n      </tr>\n    </thead>\n    <tbody v-if="totalItens">\n      <tr v-for="(item, index) in formatedList" :key="index">\n        <td>\n          <button class="btn btn-danger btn-sm" @click="remove(index)">\n            x\n          </button>\n        </td>\n        <td v-text="item.name" />\n        <td v-text="item.date" />\n        <td v-text="item.value" />\n      </tr>\n    </tbody>\n    <tbody v-else>\n      <tr>\n        <td colspan="4">\n          Sem registros...\n        </td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <td colspan="3"></td>\n        <td v-text="total" />\n      </tr>\n    </tfoot>\n  </table>\n</template>\n\n<script>\nimport \'bootstrap/dist/css/bootstrap.min.css\'\n\nexport default {\n  name: \'VueElement\',\n  props: {\n    list: {\n      type: Array,\n      default: () => []\n    },\n    dateFormat: {\n      type: Function,\n      required: true\n    },\n    valueFormat: {\n      type: Function,\n      required: true\n    }\n  },\n  computed: {\n    formatedList () {\n      return this.list.map((item) => ({\n        ...item,\n        date: this.dateFormat(item.date),\n        value: this.valueFormat(item.value)\n      }))\n    },\n\n    totalItens () {\n      return this.list.length\n    },\n\n    total () {\n      return this.valueFormat(\n        this.list.reduce((prev, curr) => prev + curr.value, 0)\n      )\n    }\n  },\n  methods: {\n    remove (index) {\n      this.$emit(\'remove\', index)\n    }\n  }\n}\n<\/script>\n\n<style scoped>[...]</style>',re="function appCtrl ($scope) {\n  $scope.entity = {}\n\n  $scope.list = [\n    {\n      name: 'João da Silva',\n      date: Date.now(),\n      value: 150.50\n    }\n  ]\n\n  $scope.addList = function ($event, entity) {\n    $event.preventDefault()\n    $scope.list.push(entity)\n    $scope.entity = {}\n  }\n\n  $scope.removeItem = function (index) {\n    $scope.list.splice(index, 1)\n  }\n\n  /**\n   * @param {Date} date\n   */\n  $scope.dataFormat = function (date) {\n    return new Intl.DateTimeFormat('pt-BR').format(new Date(date))\n  }\n\n  /**\n   * @param {number} value\n   */\n  $scope.valueFormat = function (value) {\n    const opt = { style: 'currency', currency: 'BRL' }\n    return new Intl.NumberFormat('pt-BR', opt).format(value)\n  }\n}\n\nappCtrl.$inject = ['$scope']\n\nexport default appCtrl";var oe={name:"SlideArchitecture",components:{ContentSlide:S,SlideBox:A},props:{step:Number},data:()=>({text:{ctrl:re,indexHTML:ae,indexJS:ne,vue:se}})},ie=oe,le=(n("a90b"),Object(h["a"])(ie,ee,te,!1,null,"3741d963",null));le.options.__file="SlideExample.vue";var ce=le.exports,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("content-slide",{attrs:{title:"...E é isso. Obrigado!"}},[n("slide-box",{attrs:{size:35}},[n("div",{staticClass:"box"},[n("image-slide",{staticClass:"photo",attrs:{path:e.images.solved,name:"Problema resolvido"}})],1)]),n("div",{staticClass:"text-footer"},[n("span",[n("span",[e._v("Feito com")]),n("img",{staticClass:"logo",attrs:{src:e.images.heart,alt:"Coração"}}),n("span",[e._v("e")]),n("img",{staticClass:"logo",attrs:{src:e.images.vue,alt:"Logo do Vue.js"}}),n("span",[e._v("...")])])])],1)},de=[],ue=n("fbe8"),me=n.n(ue),fe=n("08e1"),ve=n.n(fe),ge=n("038d"),be=n.n(ge),xe={name:"SlideArchitecture",components:{ContentSlide:S,ImageSlide:$,SlideBox:A},props:{step:Number},data:()=>({images:{heart:me.a,solved:ve.a,vue:be.a}})},he=xe,_e=(n("7fa3"),Object(h["a"])(he,pe,de,!1,null,"199d5fd4",null));_e.options.__file="SlideFinished.vue";var Se=_e.exports,ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"eg-slide-content"},[n("h1",[e._v("O Desafio do Legado")]),n("h3",[n("span",[e._v("Migrando do")]),n("span",[n("img",{staticClass:"logo",attrs:{src:e.images.ng,alt:"Logo do AngularJS"}}),n("span",[e._v("para")]),n("img",{staticClass:"logo",attrs:{src:e.images.vue,alt:"Logo do Vue.js"}})])]),n("eg-transition",{attrs:{enter:"fadeIn"}},[e.step>=2?n("img",{staticClass:"photo-challenge",attrs:{src:e.images.challenge,alt:"Challenge Accepted"}}):e._e()])],1)},Ce=[],we=n("f0db"),Oe=n.n(we),je=n("b932"),$e=n.n(je),ke={name:"SlideHome",props:{step:Number},data:()=>({images:{challenge:Oe.a,ng:$e.a,vue:be.a}})},Le=ke,Ee=(n("a900"),Object(h["a"])(Le,ye,Ce,!1,null,"7198dae6",null));Ee.options.__file="SlideHome.vue";var Fe=Ee.exports,Ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("content-slide",{attrs:{title:"O Legado: Performance e Dados"}},[n("slide-box",{attrs:{size:35}},[n("text-step",{attrs:{current:e.step,step:1,text:"O ciclo de vida AngularJS."}}),n("text-step",{attrs:{current:e.step,step:2,text:"Componente de montagem dinâmica."}}),n("text-step",{attrs:{current:e.step,step:3,text:"Massa de dados em exibição."}}),n("text-step",{attrs:{current:e.step,step:4,text:"Usuários exigentes."}}),e.step>=4?n("image-slide",{staticClass:"photo",attrs:{path:e.images.desespero,name:"Desespero"}}):e._e()],1)],1)},Ae=[],Te=n("da3c"),Ve=n.n(Te),Ne={name:"SlideLegacy",components:{ContentSlide:S,ImageSlide:$,SlideBox:A,TextStep:D},props:{step:Number},data:()=>({images:{desespero:Ve.a}})},Pe=Ne,Be=(n("1589"),Object(h["a"])(Pe,Ie,Ae,!1,null,"4e4e02b1",null));Be.options.__file="SlideLegacy.vue";var De=Be.exports,Me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("content-slide",{attrs:{title:"Olá..."}},[n("slide-box",{attrs:{size:28}},[n("image-slide",{staticClass:"photo",attrs:{path:"https://avatars3.githubusercontent.com/u/5412367?s=460&v=4",name:"Foto"}}),n("address-text")],1)],1)},qe=[],ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h4",[e._v("Marcelo H M Dias")]),n("p",[e._v("@marcelohmdias")]),n("div",{staticClass:"box"},[n("img",{attrs:{src:e.facebook,alt:"Facebook Logo"}}),n("img",{attrs:{src:e.github,alt:"Github Logo"}}),n("img",{attrs:{src:e.instagram,alt:"Instagram Logo"}}),n("img",{attrs:{src:e.linkedin,alt:"Linkedin Logo"}}),n("img",{attrs:{src:e.twitter,alt:"Twitter Logo"}})])])},Je=[],He=n("aaa3"),Re=n.n(He),Ge=n("387e"),Ue=n.n(Ge),We=n("54e6"),Ye=n.n(We),Ke=n("953d"),Qe=n.n(Ke),Xe=n("a3df"),Ze=n.n(Xe),et={name:"AddressText",data:()=>({facebook:Re.a,github:Ue.a,instagram:Ye.a,linkedin:Qe.a,twitter:Ze.a})},tt=et,nt=(n("4ed7"),Object(h["a"])(tt,ze,Je,!1,null,"43f65baa",null));nt.options.__file="AddressText.vue";var at=nt.exports,st={name:"SlidePresentation",components:{AddressText:at,ContentSlide:S,ImageSlide:$,SlideBox:A},props:{step:Number}},rt=st,ot=(n("b576"),Object(h["a"])(rt,Me,qe,!1,null,"5cd5a1c0",null));ot.options.__file="SlidePresentation.vue";var it=ot.exports,lt={name:"App",mixins:[s["b"]],components:{SlideArchitecture:R,SlideChoice:Z,SlideExample:ce,SlideFinished:Se,SlideHome:Fe,SlideLegacy:De,SlidePresentation:it}},ct=lt,pt=(n("5c0b"),Object(h["a"])(ct,d,u,!1,null,null,null));pt.options.__file="App.vue";var dt=pt.exports,ut=n("9483");Object(ut["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});n("b159"),n("9f21"),n("77ed");o.a.registerLanguage("javascript",l.a),o.a.registerLanguage("xml",p.a),s["a"].hljs=o.a,a["a"].use(s["c"]);const mt=!1;a["a"].config.debug=mt,a["a"].config.devtools=mt,a["a"].config.performance=mt,a["a"].config.productionTip=!1,a["a"].config.silent=!mt;const ft=e=>e(dt),vt=new a["a"]({render:ft});vt.$mount("[data-app]")},"57bd":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),s=n.n(a);s.a},"5e27":function(e,t,n){},"6e71":function(e,t,n){"use strict";var a=n("21fe"),s=n.n(a);s.a},7479:function(e,t,n){},"7bf2":function(e,t,n){},"7fa3":function(e,t,n){"use strict";var a=n("7bf2"),s=n.n(a);s.a},"953d":function(e,t,n){e.exports=n.p+"img/linkedin.00f7bf1d.svg"},a33f:function(e,t,n){"use strict";var a=n("57bd"),s=n.n(a);s.a},a3df:function(e,t,n){e.exports=n.p+"img/twitter.671881e3.svg"},a900:function(e,t,n){"use strict";var a=n("397f"),s=n.n(a);s.a},a90b:function(e,t,n){"use strict";var a=n("d5a9"),s=n.n(a);s.a},aaa3:function(e,t,n){e.exports=n.p+"img/facebook.d17dce57.svg"},ad46:function(e,t,n){},b576:function(e,t,n){"use strict";var a=n("ad46"),s=n.n(a);s.a},b827:function(e,t,n){"use strict";var a=n("3701"),s=n.n(a);s.a},b932:function(e,t,n){e.exports=n.p+"img/ng.4c732369.svg"},d5a9:function(e,t,n){},da3c:function(e,t,n){e.exports=n.p+"img/desespero.347fa229.jpg"},eaf7:function(e,t,n){e.exports=n.p+"img/chuck-norris-awesome-meme.2ea839fd.png"},ecd7:function(e,t,n){"use strict";var a=n("2186"),s=n.n(a);s.a},f0db:function(e,t,n){e.exports=n.p+"img/challenge-accepted.b9d0eb1c.png"},f5a8:function(e,t,n){},fbe8:function(e,t,n){e.exports=n.p+"img/heart.e87899ae.svg"}});
//# sourceMappingURL=app.c646362a.js.map
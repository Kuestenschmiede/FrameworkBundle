/*! For license information please see 7619.bundle.02f05cf94ed84e74695e.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[7619],{25650:(e,t,n)=>{var a=n(24994),r=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.DetailAnchorMenu=void 0;var l=a(n(17383)),o=a(n(34579)),u=a(n(28452)),c=a(n(63072)),i=a(n(29511)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(96540));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}t.DetailAnchorMenu=function(e){function t(e){return(0,l.default)(this,t),n=this,a=t,r=[e],a=(0,c.default)(a),(0,u.default)(n,d()?Reflect.construct(a,r||[],(0,c.default)(n).constructor):a.apply(n,r));var n,a,r}return(0,i.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props.sections,t=[];return Object.keys(e).forEach((function(n,a){var r=e[n];if(r.showInSectionMenu){var l=window.location.href;-1!==l.indexOf("#")&&(l=l.substr(0,l.indexOf("#"))),l+="#detail-section-"+n,t.push(s.default.createElement("li",{key:n},s.default.createElement("a",{href:l},r.name)))}})),this.props.page.additionalLinks&&this.props.page.additionalLinks.length>0&&this.props.page.additionalLinks.map((function(e,n){var a=window.location.href;-1!==a.indexOf("#")&&(a=a.substr(0,a.indexOf("#"))),a+=e.href,t.push(s.default.createElement("li",{key:t.length+n},s.default.createElement("a",{href:a},e.label)))})),this.props.menuSection.container?s.default.createElement("div",{id:"anchor-menu"},s.default.createElement("div",{className:"anchor-menu__inner"},s.default.createElement("ul",{className:"anchor-menu__list"},t),s.default.createElement("div",{className:"anchor-menu__share"}))):s.default.createElement("ul",{id:"anchor-menu",className:"anchor-menu__list"},t)}}])}(s.Component)},67619:(e,t,n)=>{var a=n(24994),r=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(17383)),o=a(n(34579)),u=a(n(28452)),c=a(n(63072)),i=a(n(29511)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(96540)),f=n(25650);function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var m=s.default.lazy((function(){return n.e(3709).then(n.bind(n,13709))}));t.default=function(e){function t(e){return(0,l.default)(this,t),n=this,a=t,r=[e],a=(0,c.default)(a),(0,u.default)(n,p()?Reflect.construct(a,r||[],(0,c.default)(n).constructor):a.apply(n,r));var n,a,r}return(0,i.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this,t=[],n=this.props.component.sections;if(Object.keys(n).length>0){var a={};this.props.fields.forEach((function(e,t){var n=e.section;a[n]||(a[n]=[]),a[n].push(e)}));for(var r=Object.keys(n).length,l=0,o=1;o<=r;o++){var u=null;if(this.props.component.showAnchorMenu&&this.props.component.menuSectionIndex===o)u=s.default.createElement(f.DetailAnchorMenu,{key:o,sections:n,menuSection:n[o],page:this.props.component});else{if(!a[o])continue;var c="";n[o].className&&(c=n[o].className);var i=null;if(!(i=n[o].rowForEachField?a[o].map((function(t,n){return s.default.createElement("div",{key:n,className:"c4g-row"},s.default.createElement(m,{data:e.props.data,field:t,fields:e.props.fields,key:n,detail:e,languageRefs:e.props.languageRefs}))})):a[o].map((function(t,n){return s.default.createElement(m,{data:e.props.data,field:t,fields:e.props.fields,key:l++,detail:e,languageRefs:e.props.languageRefs})}))))continue;u=n[o].container?n[o].rowForEachField?s.default.createElement("div",{key:o,className:c,id:"detail-section-"+o},s.default.createElement("div",{className:"c4g-container"},i)):s.default.createElement("div",{key:o,className:c,id:"detail-section-"+o},s.default.createElement("div",{className:"c4g-container"},s.default.createElement("div",{className:"c4g-row"},i))):s.default.createElement("div",{key:o,className:c,id:"detail-section-"+o},i)}t.push(u)}return s.default.createElement("div",{className:"detail-view"},t)}return s.default.createElement("div",{className:"detail-view"},s.default.createElement("div",{className:"c4g-container"},s.default.createElement("div",{className:"c4g-row"},s.default.createElement("div",{className:"c4g-col"},this.props.fields.map((function(t,n){return s.default.createElement(m,{data:e.props.data,field:t,fields:e.props.fields,key:n,detail:e,languageRefs:e.languageRefs})}))))))}}])}(s.Component)}}]);
/*! For license information please see 3902.bundle.483e6417b05e1f0fac40.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[3902],{73902:(e,t,a)=>{var n=a(24994),r=a(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(17383)),u=n(a(34579)),f=n(a(28452)),i=n(a(63072)),c=n(a(29511)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var f=l?Object.getOwnPropertyDescriptor(e,u):null;f&&(f.get||f.set)?Object.defineProperty(n,u,f):n[u]=e[u]}return n.default=e,a&&a.set(e,n),n}(a(96540));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}function s(e,t,a){return t=(0,i.default)(t),(0,f.default)(e,p()?Reflect.construct(t,a||[],(0,i.default)(e).constructor):t.apply(e,a))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var h=o.default.lazy((function(){return a.e(3755).then(a.bind(a,83755))})),v=o.default.lazy((function(){return a.e(8799).then(a.bind(a,58799))})),m=o.default.lazy((function(){return Promise.resolve().then(a.bind(a,13709))}));t.default=function(e){function t(e){return(0,l.default)(this,t),s(this,t,[e])}return(0,c.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this,t=[],a=this.props.data[this.props.field.name];if(!a||!a.length||0===a.length)return null;var n=null;this.props.field.label&&(n=o.default.createElement("h4",null,this.props.field.label));for(var r=[],l=function(n){var l=null;a[n].image&&(l=o.default.createElement(v,{field:{name:"image",withPopover:!0,popoverField:"name"},data:a[n]})),a[n].fields&&r.push(a[n].fields.map((function(t,r){return t.class=t.class||a[n].technicalKey||"",o.default.createElement(m,{key:r,field:t,data:e.props.data,class:t.class||a[n].technicalKey||"",tagType:a[n].technicalKey})})));var u=o.default.createElement("div",{className:"tag-entry "+a[n].technicalKey,key:n},l,o.default.createElement(h,{field:{name:"name",class:a[n].technicalKey||""},data:a[n]}));t.push(u)},u=0;u<a.length;u++)l(u);return o.default.createElement("div",{className:"detail-field-wrapper"},n,o.default.createElement("div",{className:"detail-field-wrapper__tags"},t),o.default.createElement("div",{className:"detail-field-wrapper__tag-fields"},r))}}])}(o.Component)}}]);
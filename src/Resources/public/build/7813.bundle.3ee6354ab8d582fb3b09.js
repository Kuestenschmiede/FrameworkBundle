/*! For license information please see 7813.bundle.3ee6354ab8d582fb3b09.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[7813],{17813:(e,t,r)=>{var n=r(24994),a=r(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(17383)),u=n(r(34579)),o=n(r(28452)),f=n(r(63072)),i=n(r(29511)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var o=l?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}(r(96540));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function p(e,t,r){return t=(0,f.default)(t),(0,o.default)(e,d()?Reflect.construct(t,r||[],(0,f.default)(e).constructor):t.apply(e,r))}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}t.default=function(e){function t(e){return(0,l.default)(this,t),p(this,t,[e])}return(0,i.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){if(this.props.data[this.props.field.name]){var e=new Date(1e3*this.props.data[this.props.field.name]),t=String(e.getUTCDate())+"."+String(e.getMonth()+1)+"."+String(e.getUTCFullYear()),r=null;return this.props.field.label&&(r=s.default.createElement("span",{className:"entry-label"},this.props.field.label)),s.default.createElement("div",{className:this.props.field.wrapperClass},r,s.default.createElement("span",{className:this.props.field.class},t))}return""}}])}(s.Component)}}]);
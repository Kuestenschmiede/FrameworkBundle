/*! For license information please see 1254.bundle.6c71e6c51509add73cd2.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[1254],{11254:(e,t,r)=>{var a=r(24994),n=r(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(17383)),s=a(r(34579)),u=a(r(28452)),f=a(r(63072)),o=a(r(29511)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&{}.hasOwnProperty.call(e,s)){var u=l?Object.getOwnPropertyDescriptor(e,s):null;u&&(u.get||u.set)?Object.defineProperty(a,s,u):a[s]=e[s]}return a.default=e,r&&r.set(e,a),a}(r(96540));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function c(e,t,r){return t=(0,f.default)(t),(0,u.default)(e,d()?Reflect.construct(t,r||[],(0,f.default)(e).constructor):t.apply(e,r))}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}t.default=function(e){function t(e){return(0,l.default)(this,t),c(this,t,[e])}return(0,o.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){if(this.props.data[this.props.field.streetName]){var e=null;this.props.data[this.props.field.streetNumberName]&&(e=p.default.createElement("span",{className:"streetNumber"},this.props.data[this.props.field.streetNumberName]));var t=null;return this.props.field.label&&(t=p.default.createElement("span",{className:"entry-label"},this.props.field.label)),p.default.createElement("div",{className:this.props.field.wrapperClass},t,p.default.createElement("span",{className:this.props.field.class},p.default.createElement("span",{className:"street"},this.props.data[this.props.field.streetName]),'" "',e))}return""}}])}(p.Component)}}]);
/*! For license information please see 2353.bundle.8175e927db9332460c8f.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[2353],{12353:(e,t,r)=>{var a=r(24994),l=r(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(17383)),f=a(r(34579)),s=a(r(28452)),o=a(r(63072)),p=a(r(29511)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in e)if("default"!==f&&{}.hasOwnProperty.call(e,f)){var s=n?Object.getOwnPropertyDescriptor(e,f):null;s&&(s.get||s.set)?Object.defineProperty(a,f,s):a[f]=e[f]}return a.default=e,r&&r.set(e,a),a}(r(96540));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}function c(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(c=function(){return!!e})()}t.default=function(e){function t(e){return(0,n.default)(this,t),r=this,a=t,l=[e],a=(0,o.default)(a),(0,s.default)(r,c()?Reflect.construct(a,l||[],(0,o.default)(r).constructor):a.apply(r,l));var r,a,l}return(0,p.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){if(this.props.field.href||this.props.data[this.props.field.hrefName]){var e=null;this.props.field.label&&(e=i.default.createElement("span",{className:"entry-label"},this.props.field.label));var t=this.props.field.href;return this.props.field.hrefName&&this.props.data[this.props.field.hrefName]&&(t=t.replace(this.props.field.hrefName,this.props.data[this.props.field.hrefName])),i.default.createElement("div",{className:this.props.field.wrapperClass},e,i.default.createElement("a",{className:this.props.field.class,href:t,rel:"noreferrer noopener",target:this.props.field.newTab?"_blank":null},this.props.data[this.props.field.linkTextName]||this.props.field.linkText||t))}return""}}])}(i.Component)}}]);
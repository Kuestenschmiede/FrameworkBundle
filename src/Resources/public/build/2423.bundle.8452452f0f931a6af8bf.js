/*! For license information please see 2423.bundle.8452452f0f931a6af8bf.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[2423],{62423:(e,t,r)=>{var n=r(64836),a=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(56690)),u=n(r(89728)),f=n(r(61655)),o=n(r(94993)),i=n(r(73808)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var f=l?Object.getOwnPropertyDescriptor(e,u):null;f&&(f.get||f.set)?Object.defineProperty(n,u,f):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}(r(67294));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,i.default)(e);if(t){var a=(0,i.default)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,o.default)(this,r)}}t.default=function(e){(0,f.default)(r,e);var t=p(r);function r(e){return(0,l.default)(this,r),t.call(this,e)}return(0,u.default)(r,[{key:"render",value:function(){if(this.props.data[this.props.field.name]){var e=new Date(1e3*this.props.data[this.props.field.name]),t=String(e.getUTCDate())+"."+String(e.getMonth()+1)+"."+String(e.getUTCFullYear()),r=null;return this.props.field.label&&(r=s.default.createElement("span",{className:"entry-label"},this.props.field.label)),s.default.createElement("div",{className:this.props.field.wrapperClass},r,s.default.createElement("span",{className:this.props.field.class},t))}return""}}]),r}(s.Component)}}]);
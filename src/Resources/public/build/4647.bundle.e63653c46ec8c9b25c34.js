/*! For license information please see 4647.bundle.e63653c46ec8c9b25c34.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[4647],{24647:(e,t,r)=>{var a=r(64836),n=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(56690)),s=a(r(89728)),u=a(r(61655)),f=a(r(94993)),o=a(r(73808)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var u=l?Object.getOwnPropertyDescriptor(e,s):null;u&&(u.get||u.set)?Object.defineProperty(a,s,u):a[s]=e[s]}return a.default=e,r&&r.set(e,a),a}(r(67294));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,o.default)(e);if(t){var n=(0,o.default)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,f.default)(this,r)}}t.default=function(e){(0,u.default)(r,e);var t=p(r);function r(e){return(0,l.default)(this,r),t.call(this,e)}return(0,s.default)(r,[{key:"render",value:function(){if(this.props.data[this.props.field.postalName]&&this.props.data[this.props.field.cityName]){var e=null;return this.props.field.label&&(e=i.default.createElement("span",{className:"entry-label"},this.props.field.label)),i.default.createElement("div",{className:this.props.field.wrapperClass},e,i.default.createElement("span",{className:this.props.field.class},i.default.createElement("span",{className:"postal"},this.props.data[this.props.field.postalName]),i.default.createElement("span",{className:"city"},this.props.data[this.props.field.cityName])))}return""}}]),r}(i.Component)}}]);
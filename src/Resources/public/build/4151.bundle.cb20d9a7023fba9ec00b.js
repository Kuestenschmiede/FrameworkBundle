/*! For license information please see 4151.bundle.cb20d9a7023fba9ec00b.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[4151],{64151:(e,t,r)=>{var n=r(64836),a=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(56690)),f=n(r(89728)),i=n(r(61655)),o=n(r(94993)),s=n(r(73808)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in e)if("default"!==f&&Object.prototype.hasOwnProperty.call(e,f)){var i=l?Object.getOwnPropertyDescriptor(e,f):null;i&&(i.get||i.set)?Object.defineProperty(n,f,i):n[f]=e[f]}return n.default=e,r&&r.set(e,n),n}(r(67294));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,s.default)(e);if(t){var a=(0,s.default)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,o.default)(this,r)}}t.default=function(e){(0,i.default)(r,e);var t=c(r);function r(e){return(0,l.default)(this,r),t.call(this,e)}return(0,f.default)(r,[{key:"render",value:function(){if(this.props.field.href||this.props.data[this.props.field.hrefName]){var e=null;this.props.field.label&&(e=u.default.createElement("span",{className:"entry-label"},this.props.field.label));var t=this.props.field.href;return this.props.field.hrefName&&this.props.data[this.props.field.hrefName]&&(t=t.replace(this.props.field.hrefName,this.props.data[this.props.field.hrefName])),u.default.createElement("div",{className:this.props.field.wrapperClass},e,u.default.createElement("a",{className:this.props.field.class,href:t,rel:"noreferrer noopener",target:this.props.field.newTab?"_blank":null},this.props.data[this.props.field.linkTextName]||this.props.field.linkText||t))}return""}}]),r}(u.Component)}}]);
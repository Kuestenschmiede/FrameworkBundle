/*! For license information please see 5436.bundle.689c17697a977890f666.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[5436],{45436:(e,t,r)=>{var n=r(24994),a=r(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(17383)),u=n(r(34579)),o=n(r(28452)),i=n(r(63072)),f=n(r(29511)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var o=l?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}(r(96540));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function c(e,t,r){return t=(0,i.default)(t),(0,o.default)(e,d()?Reflect.construct(t,r||[],(0,i.default)(e).constructor):t.apply(e,r))}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}t.default=function(e){function t(e){return(0,l.default)(this,t),c(this,t,[e])}return(0,f.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){if(this.props.data[this.props.field.name]){var e=null;this.props.field.icon&&(e=s.default.createElement("i",{className:this.props.field.icon}));var t="";this.props.field.class&&(t=this.props.field.class),this.props.tagType&&(t+=" "+this.props.tagType);var r=" ";return this.props.targetBlank&&(r="_blank"),s.default.createElement("div",{className:t},e,s.default.createElement("a",{target:r,href:this.props.data[this.props.field.name]},this.props.data[this.props.field.linkTextName]||this.props.field.linkText))}return null}}])}(s.Component)}}]);
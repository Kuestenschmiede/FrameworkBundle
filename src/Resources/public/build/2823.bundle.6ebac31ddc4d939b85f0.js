/*! For license information please see 2823.bundle.6ebac31ddc4d939b85f0.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[2823],{72823:(e,t,r)=>{var a=r(24994),n=r(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(17383)),u=a(r(34579)),f=a(r(28452)),s=a(r(63072)),c=a(r(29511)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var f=l?Object.getOwnPropertyDescriptor(e,u):null;f&&(f.get||f.set)?Object.defineProperty(a,u,f):a[u]=e[u]}return a.default=e,r&&r.set(e,a),a}(r(96540));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}t.default=function(e){function t(e){return(0,l.default)(this,t),r=this,a=t,n=[e],a=(0,s.default)(a),(0,f.default)(r,p()?Reflect.construct(a,n||[],(0,s.default)(r).constructor):a.apply(r,n));var r,a,n}return(0,c.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e,t=this,r=this.props.data[this.props.field.name];return r?(e=Array.isArray(r)?r.map((function(e,r){return o.default.createElement("a",{href:e.href,className:t.props.field.class,key:r},o.default.createElement("img",{src:e.src,alt:e.alt,className:t.props.field.innerClass}))})):o.default.createElement("a",{href:r.href,className:this.props.field.class},o.default.createElement("img",{src:r.src,alt:r.alt,className:this.props.field.innerClass})),o.default.createElement("div",{className:this.props.field.wrapperClass},e)):null}}])}(o.Component)}}]);
/*! For license information please see 6109.bundle.ef9cfeda7f7ceef84f61.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[6109],{66109:(t,e,n)=>{var r=n(24994),u=n(73738);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n(17383)),a=r(n(34579)),l=r(n(28452)),c=r(n(63072)),i=r(n(29511)),f=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=u(t)&&"function"!=typeof t)return{default:t};var n=s(e);if(n&&n.has(t))return n.get(t);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&{}.hasOwnProperty.call(t,a)){var l=o?Object.getOwnPropertyDescriptor(t,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=t[a]}return r.default=t,n&&n.set(t,r),r}(n(96540));function s(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(s=function(t){return t?n:e})(t)}function p(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(p=function(){return!!t})()}e.default=function(t){function e(t){var n,r,u,a;return(0,o.default)(this,e),r=this,u=e,a=[t],u=(0,c.default)(u),(n=(0,l.default)(r,p()?Reflect.construct(u,a||[],(0,c.default)(r).constructor):u.apply(r,a))).clickButton=n.clickButton.bind(n),n.submitCallback=n.submitCallback.bind(n),n}return(0,i.default)(e,t),(0,a.default)(e,[{key:"clickButton",value:function(){this.props.form.activeButton=this}},{key:"submitCallback",value:function(t,e){this.props.form.activeButton=null}},{key:"render",value:function(){return f.default.createElement("button",{className:this.props.button.className+" btn btn-primary",type:"submit",name:this.props.button.name,value:this.props.button.value,onClick:this.clickButton},this.props.button.caption)}}])}(f.Component)}}]);
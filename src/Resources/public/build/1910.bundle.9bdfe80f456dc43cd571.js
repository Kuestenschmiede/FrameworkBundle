/*! For license information please see 1910.bundle.9bdfe80f456dc43cd571.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[1910],{31910:(e,t,r)=>{var a=r(24994),n=r(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(17383)),o=a(r(34579)),i=a(r(28452)),s=a(r(63072)),f=a(r(29511)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,r&&r.set(e,a),a}(r(96540));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function c(e,t,r){return t=(0,s.default)(t),(0,i.default)(e,d()?Reflect.construct(t,r||[],(0,s.default)(e).constructor):t.apply(e,r))}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}var h=u.default.lazy((function(){return r.e(6992).then(r.bind(r,76992))}));t.default=function(e){function t(e){var r;return(0,l.default)(this,t),(r=c(this,t,[e])).format=r.format.bind(r),r}return(0,f.default)(t,e),(0,o.default)(t,[{key:"format",value:function(e){return this.props.field.format.replace(/%s/g,e)}},{key:"render",value:function(){if(this.props.data[this.props.field.name]){var e=null;this.props.field.label&&(e=u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{className:"entry-label"},this.props.field.label)," "));var t=null;this.props.field.itemProp&&(t=this.props.field.itemProp);var r=this.props.data[this.props.field.name];"string"==typeof this.props.field.format&&""!==this.props.field.format&&(r=this.format(r));var a="";return r&&this.props.field.generateValueClasses&&(a=(a=(a=(a=(a=r.toLowerCase().toString().replace(/[ |\&\(\)=>]/g,"")).toString().replace("ü","ue")).toString().replace("ö","oe")).toString().replace("ä","ae")).toString().replace("ß","ss"),a=" "+this.props.field.class+"--"+a),u.default.createElement(h,{data:this.props.data,conditions:this.props.field.conditions},u.default.createElement("div",{className:this.props.field.wrapperClass},e,u.default.createElement("span",{className:this.props.field.class+a,itemProp:t},r)))}return""}}])}(u.Component)}}]);
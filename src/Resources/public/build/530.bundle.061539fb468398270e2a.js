"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[530],{90530:(e,t,r)=>{var a=r(95318),n=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(34575)),s=a(r(93913)),u=a(r(2205)),f=a(r(78585)),o=a(r(29754)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var u=l?Object.getOwnPropertyDescriptor(e,s):null;u&&(u.get||u.set)?Object.defineProperty(a,s,u):a[s]=e[s]}a.default=e,r&&r.set(e,a);return a}(r(67294));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,o.default)(e);if(t){var n=(0,o.default)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,f.default)(this,r)}}var d=function(e){(0,u.default)(r,e);var t=p(r);function r(e){return(0,l.default)(this,r),t.call(this,e)}return(0,s.default)(r,[{key:"render",value:function(){if(this.props.data[this.props.field.streetName]){var e=null;this.props.data[this.props.field.streetNumberName]&&(e=i.default.createElement("span",{className:"streetNumber"},this.props.data[this.props.field.streetNumberName]));var t=null;return this.props.field.label&&(t=i.default.createElement("span",{className:"entry-label"},this.props.field.label)),i.default.createElement("div",{className:this.props.field.wrapperClass},t,i.default.createElement("span",{className:this.props.field.class},i.default.createElement("span",{className:"street"},this.props.data[this.props.field.streetName]),'" "',e))}return""}}]),r}(i.Component);t.default=d}}]);
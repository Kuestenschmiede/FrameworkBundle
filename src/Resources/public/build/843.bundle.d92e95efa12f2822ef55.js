"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[843],{20843:(e,t,r)=>{var n=r(64836),a=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(56690)),u=n(r(89728)),f=n(r(61655)),o=n(r(94993)),i=n(r(73808)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var f=l?Object.getOwnPropertyDescriptor(e,u):null;f&&(f.get||f.set)?Object.defineProperty(n,u,f):n[u]=e[u]}n.default=e,r&&r.set(e,n);return n}(r(67294));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,i.default)(e);if(t){var a=(0,i.default)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,o.default)(this,r)}}var d=function(e){(0,f.default)(r,e);var t=p(r);function r(e){return(0,l.default)(this,r),t.call(this,e)}return(0,u.default)(r,[{key:"render",value:function(){if(this.props.data[this.props.field.name]){var e=null;this.props.field.label&&(e=c.default.createElement("span",null,this.props.field.label));var t=new Date(1e3*this.props.data[this.props.field.name]),r=String(t.getUTCDate())+"."+String(t.getMonth()+1)+"."+String(t.getUTCFullYear());return c.default.createElement("div",{className:"detail-field-text"+(this.props.field.class?" "+this.props.field.class:"")},e,c.default.createElement("span",null,r))}return""}}]),r}(c.Component);t.default=d}}]);
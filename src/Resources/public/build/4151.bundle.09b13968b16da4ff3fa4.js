"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[4151],{64151:(e,t,r)=>{var a=r(95318),n=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(34575)),f=a(r(93913)),i=a(r(2205)),s=a(r(78585)),o=a(r(29754)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in e)if("default"!==f&&Object.prototype.hasOwnProperty.call(e,f)){var i=l?Object.getOwnPropertyDescriptor(e,f):null;i&&(i.get||i.set)?Object.defineProperty(a,f,i):a[f]=e[f]}a.default=e,r&&r.set(e,a);return a}(r(67294));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,o.default)(e);if(t){var n=(0,o.default)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,s.default)(this,r)}}var d=function(e){(0,i.default)(r,e);var t=c(r);function r(e){return(0,l.default)(this,r),t.call(this,e)}return(0,f.default)(r,[{key:"render",value:function(){if(this.props.field.href||this.props.data[this.props.field.hrefName]){var e=null;this.props.field.label&&(e=u.default.createElement("span",{className:"entry-label"},this.props.field.label));var t=this.props.field.href;return this.props.field.hrefName&&this.props.data[this.props.field.hrefName]&&(t=t.replace(this.props.field.hrefName,this.props.data[this.props.field.hrefName])),u.default.createElement("div",{className:this.props.field.wrapperClass},e,u.default.createElement("a",{className:this.props.field.class,href:t,rel:"noreferrer noopener",target:this.props.field.newTab?"_blank":null},this.props.data[this.props.field.linkTextName]||this.props.field.linkText||t))}return""}}]),r}(u.Component);t.default=d}}]);
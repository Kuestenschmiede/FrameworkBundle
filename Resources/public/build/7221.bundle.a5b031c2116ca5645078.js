(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[7221],{77221:(e,t,r)=>{"use strict";var n=r(95318),a=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(34575)),o=n(r(93913)),s=n(r(2205)),f=n(r(78585)),u=n(r(29754)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=l?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(n,o,s):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(67294));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.default)(e);if(t){var a=(0,u.default)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,f.default)(this,r)}}var d=i.default.lazy((function(){return Promise.resolve().then(r.bind(r,77279))})),h=function(e){(0,s.default)(r,e);var t=c(r);function r(e){return(0,l.default)(this,r),t.call(this,e)}return(0,o.default)(r,[{key:"render",value:function(){for(var e=this,t=[],r=this.props.fields,n=0;n<r.length;n++)this.props.field.wrappedFields.includes(r[n].name)&&t.push(r[n]);var a=null;return(this.props.fields.label||this.props.field.description)&&(a=i.default.createElement("hr",{className:"panel-hr"})),this.props.parentNode===this.props.form&&this.props.field.innerWrapper?null:i.default.createElement("div",{className:this.props.field.className,id:this.props.field.cssId},i.default.createElement("h4",{className:"panel-title"},this.props.field.label),i.default.createElement("div",{className:"panel-description"},this.props.field.description),a,t.map((function(t,r){return i.default.createElement(d,{key:r,field:t,data:e.props.data,form:e.props.form,errorText:e.props.errorTexts?e.props.errorTexts[t.name]:null,parentNode:e,fields:e.props.fields,languageRefs:e.props.languageRefs})})))}}]),r}(i.Component);t.default=h}}]);
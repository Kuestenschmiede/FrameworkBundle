(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[5039],{45039:(e,t,r)=>{"use strict";var n=r(95318),u=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(34575)),f=n(r(93913)),l=n(r(2205)),o=n(r(78585)),i=n(r(29754)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in e)if("default"!==f&&Object.prototype.hasOwnProperty.call(e,f)){var l=a?Object.getOwnPropertyDescriptor(e,f):null;l&&(l.get||l.set)?Object.defineProperty(n,f,l):n[f]=e[f]}n.default=e,r&&r.set(e,n);return n}(r(67294));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,i.default)(e);if(t){var u=(0,i.default)(this).constructor;r=Reflect.construct(n,arguments,u)}else r=n.apply(this,arguments);return(0,o.default)(this,r)}}var d=s.default.lazy((function(){return Promise.resolve().then(r.bind(r,8941))})),v=function(e){(0,l.default)(r,e);var t=p(r);function r(e){var n;return(0,a.default)(this,r),(n=t.call(this,e)).state={fields:[],setup:!1},n}return(0,f.default)(r,[{key:"render",value:function(){for(var e=this,t=[],r=this.props.fields,n=0;n<r.length;n++)this.props.field.wrappedFields.includes(r[n].name)&&t.push(r[n]);var u=[];return t.map((function(t,r){u.push(s.default.createElement(d,{key:r,field:t,data:e.props.data,list:e.props.list,fields:e.props.fields}))})),s.default.createElement("div",{className:this.props.field.class},u)}}]),r}(s.Component);t.default=v}}]);
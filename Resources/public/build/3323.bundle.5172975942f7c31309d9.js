"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[3323],{63323:(e,t,n)=>{var r=n(95318),a=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(34575)),o=r(n(93913)),u=r(n(81506)),i=r(n(2205)),c=r(n(78585)),f=r(n(29754)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,f.default)(e);if(t){var a=(0,f.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,c.default)(this,n)}}var m=function(e){(0,i.default)(n,e);var t=d(n);function n(e){var r;return(0,l.default)(this,n),(r=t.call(this,e)).onConfirm=r.onConfirm.bind((0,u.default)(r)),r}return(0,o.default)(n,[{key:"onConfirm",value:function(e){var t=e.target.parentNode.parentNode.children.item(2);if(t.checkValidity())this.props.onConfirm();else{for(var n=0,r={};n<t.elements.length;){var a=t.elements.item(n);r[a.name]=a.validationMessage,n+=1}this.props.onInvalid(r)}}},{key:"render",value:function(){return s.default.createElement("div",{className:this.props.className||"c4g-modal-content"},s.default.createElement("div",null,s.default.createElement("span",{className:"title"},this.props.title)),s.default.createElement("div",null,s.default.createElement("span",{className:"message"},this.props.message)),s.default.createElement("form",null,this.props.children),s.default.createElement("div",null,s.default.createElement("button",{className:"highlight",type:"button",onClick:this.onConfirm},this.props.confirmButtonText),s.default.createElement("button",{className:"",type:"button",onClick:this.props.onCancel},this.props.cancelButtonText)))}}]),n}(s.Component);t.default=m}}]);
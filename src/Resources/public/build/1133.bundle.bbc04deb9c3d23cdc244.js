"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[1133],{81133:(e,t,r)=>{var n=r(95318),a=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(34575)),u=n(r(93913)),s=n(r(81506)),l=n(r(2205)),c=n(r(78585)),i=n(r(29754)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var s=o?Object.getOwnPropertyDescriptor(e,u):null;s&&(s.get||s.set)?Object.defineProperty(n,u,s):n[u]=e[u]}n.default=e,r&&r.set(e,n);return n}(r(67294));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,i.default)(e);if(t){var a=(0,i.default)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,c.default)(this,r)}}var h=function(e){(0,l.default)(r,e);var t=d(r);function r(e){var n;return(0,o.default)(this,r),(n=t.call(this,e)).onChange=n.onChange.bind((0,s.default)(n)),n}return(0,u.default)(r,[{key:"onChange",value:function(e){this.props.onChange(e.target.value)}},{key:"render",value:function(){var e=[];return e.push("c4g-form-field c4g-form-group"),e.push(this.props.className?" "+this.props.className:""),e.push(this.props.error?" c4g-invalid":""),e.push(this.props.required?" c4g-required":""),f.default.createElement("div",{className:e.join("")},f.default.createElement("label",{className:"c4g-label-outer"},f.default.createElement("span",{className:"c4g-label-inner"},this.props.label),f.default.createElement("textarea",{name:this.props.name,value:this.props.value,maxLength:this.props.maxLength,className:"c4g-form-control c4g-textarea",onChange:this.onChange,required:this.props.required})),this.props.description&&f.default.createElement("span",{className:"c4g-description"},this.props.description),this.props.error&&f.default.createElement("span",{className:"c4g-error"},this.props.error))}}]),r}(f.Component);t.default=h}}]);
(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[4548],{34548:(e,t,r)=>{"use strict";var n=r(95318),a=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(34575)),l=n(r(93913)),f=n(r(2205)),u=n(r(78585)),c=n(r(29754)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var f=o?Object.getOwnPropertyDescriptor(e,l):null;f&&(f.get||f.set)?Object.defineProperty(n,l,f):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(67294));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,u.default)(this,r)}}var p=function(e){(0,f.default)(r,e);var t=d(r);function r(e){return(0,o.default)(this,r),t.call(this,e)}return(0,l.default)(r,[{key:"render",value:function(){var e=this,t=[];return this.props.field.footerButtons.forEach((function(r,n){t.push(i.default.createElement("a",{className:"btn "+r.class,href:e.props.data[r.linkField]},r.label))})),i.default.createElement("div",{className:"col-12 detail-footer-field-wrapper"},i.default.createElement("div",{className:"col-12 text-center detail-footer-inner-info"},i.default.createElement("p",{className:"mb-2 mt-2"+(this.props.field.footerTextClass?" "+this.props.field.footerTextClass:"")},this.props.field.footerText)),i.default.createElement("div",{className:"col-12 text-center detail-footer-buttons"},t))}}]),r}(i.Component);t.default=p}}]);
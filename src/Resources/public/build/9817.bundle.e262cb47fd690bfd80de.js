"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[9817],{75258:(e,t,r)=>{var a=r(95318),s=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(34575)),p=a(r(93913)),n=a(r(2205)),i=a(r(78585)),o=a(r(29754)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in e)if("default"!==p&&Object.prototype.hasOwnProperty.call(e,p)){var n=l?Object.getOwnPropertyDescriptor(e,p):null;n&&(n.get||n.set)?Object.defineProperty(a,p,n):a[p]=e[p]}a.default=e,r&&r.set(e,a);return a}(r(67294));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,o.default)(e);if(t){var s=(0,o.default)(this).constructor;r=Reflect.construct(a,arguments,s)}else r=a.apply(this,arguments);return(0,i.default)(this,r)}}var d=function(e){(0,n.default)(r,e);var t=c(r);function r(e){return(0,l.default)(this,r),t.call(this,e)}return(0,p.default)(r,[{key:"render",value:function(){if(this.props.data[this.props.field.postalName]&&this.props.data[this.props.field.cityName]){var e=null;this.props.field.label&&(e=u.default.createElement("span",{className:"entry-label"},this.props.field.label));var t=null;if(this.props.data[this.props.field.postalName]&&this.props.data[this.props.field.cityName]){var r=null,a=null;this.props.field.showSchema&&(r="postalCode",a="addressLocality"),t=u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{className:"postal",itemProp:r},this.props.data[this.props.field.postalName]),u.default.createElement("span",{className:"city",itemProp:a},this.props.data[this.props.field.cityName]))}var s=null;if(this.props.data[this.props.field.streetName]&&this.props.data[this.props.field.streetNumberName]){var l=null;this.props.field.showSchema&&(l="streetAddress"),s=u.default.createElement("span",{itemProp:l},u.default.createElement("span",{className:"street"},this.props.data[this.props.field.streetName]),u.default.createElement("span",{className:"streetNumber"},this.props.data[this.props.field.streetNumberName]))}var p=null,n=null;return this.props.field.showSchema&&(p="address",n="https://schema.org/PostalAddress"),u.default.createElement("div",{className:this.props.field.wrapperClass},e,u.default.createElement("span",{className:this.props.field.class,itemProp:p,itemType:n,itemScope:n},s,t))}return""}}]),r}(u.Component);t.default=d}}]);
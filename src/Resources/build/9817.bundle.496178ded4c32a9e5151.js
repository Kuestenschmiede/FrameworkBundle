"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[9817],{75258:(e,t,a)=>{var r=a(95318),s=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(34575)),p=r(a(93913)),n=r(a(2205)),i=r(a(78585)),o=r(a(29754)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in e)if("default"!==p&&Object.prototype.hasOwnProperty.call(e,p)){var n=l?Object.getOwnPropertyDescriptor(e,p):null;n&&(n.get||n.set)?Object.defineProperty(r,p,n):r[p]=e[p]}r.default=e,a&&a.set(e,r);return r}(a(67294));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=(0,o.default)(e);if(t){var s=(0,o.default)(this).constructor;a=Reflect.construct(r,arguments,s)}else a=r.apply(this,arguments);return(0,i.default)(this,a)}}var d=function(e){(0,n.default)(a,e);var t=c(a);function a(e){return(0,l.default)(this,a),t.call(this,e)}return(0,p.default)(a,[{key:"render",value:function(){if(this.props.data[this.props.field.postalName]&&this.props.data[this.props.field.cityName]){var e=null;this.props.field.label&&(e=u.default.createElement("span",{className:"entry-label"},this.props.field.label));var t=null;if(this.props.data[this.props.field.postalName]&&this.props.data[this.props.field.cityName]){var a=null,r=null;this.props.field.showSchema&&(a="postalCode",r="addressLocality"),t=u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{itemProp:p,className:"postal-city"},u.default.createElement("span",{className:"postal",itemProp:a},this.props.data[this.props.field.postalName]),u.default.createElement("span",{className:"city",itemProp:r},this.props.data[this.props.field.cityName])))}var s=null;if(this.props.data[this.props.field.streetName]&&this.props.data[this.props.field.streetNumberName]){var l=null;this.props.field.showSchema&&(l="streetAddress"),s=u.default.createElement("span",{itemProp:l,className:"street-address"},u.default.createElement("span",{className:"street"},this.props.data[this.props.field.streetName]),u.default.createElement("span",{className:"streetNumber"},this.props.data[this.props.field.streetNumberName]))}var p=null,n=null;return this.props.field.showSchema&&(p="address",n="https://schema.org/PostalAddress"),u.default.createElement("div",{className:this.props.field.wrapperClass},e,u.default.createElement("span",{className:this.props.field.class,itemProp:p,itemType:n,itemScope:n},s,t))}return""}}]),a}(u.Component);t.default=d}}]);
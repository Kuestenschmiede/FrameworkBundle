(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[3211],{83211:(e,t,r)=>{"use strict";var a=r(95318),n=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(34575)),u=a(r(93913)),f=a(r(2205)),s=a(r(78585)),c=a(r(29754)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var f=l?Object.getOwnPropertyDescriptor(e,u):null;f&&(f.get||f.set)?Object.defineProperty(a,u,f):a[u]=e[u]}a.default=e,r&&r.set(e,a);return a}(r(67294));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,c.default)(e);if(t){var n=(0,c.default)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,s.default)(this,r)}}var d=function(e){(0,f.default)(r,e);var t=p(r);function r(e){return(0,l.default)(this,r),t.call(this,e)}return(0,u.default)(r,[{key:"render",value:function(){var e,t=this,r=this.props.data[this.props.field.name];return r?(e=Array.isArray(r)?r.map((function(e,r){return o.default.createElement("a",{href:e.href,className:t.props.field.class,key:r},o.default.createElement("img",{src:e.src,alt:e.alt,className:t.props.field.innerClass}))})):o.default.createElement("a",{href:r.href,className:this.props.field.class},o.default.createElement("img",{src:r.src,alt:r.alt,className:this.props.field.innerClass})),o.default.createElement("div",{className:this.props.field.wrapperClass},e)):null}}]),r}(o.Component);t.default=d}}]);
(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[5612],{55612:(e,t,r)=>{"use strict";var a=r(95318),s=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(34575)),n=a(r(93913)),i=a(r(2205)),p=a(r(78585)),f=a(r(29754)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var i=l?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(a,n,i):a[n]=e[n]}a.default=e,r&&r.set(e,a);return a}(r(67294));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,f.default)(e);if(t){var s=(0,f.default)(this).constructor;r=Reflect.construct(a,arguments,s)}else r=a.apply(this,arguments);return(0,p.default)(this,r)}}var d=function(e){(0,i.default)(r,e);var t=u(r);function r(e){return(0,l.default)(this,r),t.call(this,e)}return(0,n.default)(r,[{key:"render",value:function(){if(this.props.data[this.props.field.name]){var e=null;this.props.field.label&&(e=o.default.createElement("span",{className:"entry-label"},this.props.field.label));this.props.field.itemProp&&this.props.field.itemProp;var t=null;switch(this.props.field.level){case 1:t=o.default.createElement("h1",{className:this.props.field.class},this.props.data[this.props.field.name]);break;case 2:t=o.default.createElement("h2",{className:this.props.field.class},this.props.data[this.props.field.name]);break;case 3:t=o.default.createElement("h3",{className:this.props.field.class},this.props.data[this.props.field.name]);break;case 4:t=o.default.createElement("h4",{className:this.props.field.class},this.props.data[this.props.field.name]);break;case 5:t=o.default.createElement("h5",{className:this.props.field.class},this.props.data[this.props.field.name]);break;case 6:t=o.default.createElement("h6",{className:this.props.field.class},this.props.data[this.props.field.name]);break;default:console.warn("unsupported headline level.")}return o.default.createElement("div",{className:this.props.field.wrapperClass},e,t)}return""}}]),r}(o.Component);t.default=d}}]);
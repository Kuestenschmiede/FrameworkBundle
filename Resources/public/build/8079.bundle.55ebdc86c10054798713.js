(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[8079],{38079:(e,t,r)=>{"use strict";var a=r(95318),l=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(34575)),s=a(r(93913)),i=a(r(2205)),u=a(r(78585)),f=a(r(29754)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var i=n?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(a,s,i):a[s]=e[s]}a.default=e,r&&r.set(e,a);return a}(r(67294));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,f.default)(e);if(t){var l=(0,f.default)(this).constructor;r=Reflect.construct(a,arguments,l)}else r=a.apply(this,arguments);return(0,u.default)(this,r)}}var d=function(e){(0,i.default)(r,e);var t=c(r);function r(e){return(0,n.default)(this,r),t.call(this,e)}return(0,s.default)(r,[{key:"render",value:function(){if(this.props.data[this.props.field.name]){var e=null;this.props.field.iconClass&&(e=o.default.createElement("i",{className:this.props.field.iconClass}));var t=null;this.props.field.label&&(t=o.default.createElement("span",{className:"entry-label"},this.props.field.label));this.props.field.itemProp&&this.props.field.itemProp;var r=null;switch(this.props.field.level){case 1:r=o.default.createElement("h1",null,this.props.data[this.props.field.name]);break;case 2:r=o.default.createElement("h2",null,this.props.data[this.props.field.name]);break;case 3:r=o.default.createElement("h3",null,this.props.data[this.props.field.name]);break;case 4:r=o.default.createElement("h4",null,this.props.data[this.props.field.name]);break;case 5:r=o.default.createElement("h5",null,this.props.data[this.props.field.name]);break;case 6:r=o.default.createElement("h6",null,this.props.data[this.props.field.name]);break;default:console.warn(this.props.languageRefs.UNSUPPORTED_HEADLINE_LEVEL)}return o.default.createElement("div",{className:"item "+this.props.field.name+(this.props.field.class?" "+this.props.field.class:"")},e,t,r)}return""}}]),r}(o.Component);t.default=d}}]);
/*! For license information please see 9068.bundle.82a5999caddc764e7cee.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[9068],{99068:(e,t,r)=>{var a=r(24994),l=r(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(17383)),s=a(r(34579)),i=a(r(28452)),p=a(r(63072)),u=a(r(29511)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&{}.hasOwnProperty.call(e,s)){var i=n?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(a,s,i):a[s]=e[s]}return a.default=e,r&&r.set(e,a),a}(r(96540));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function c(e,t,r){return t=(0,p.default)(t),(0,i.default)(e,d()?Reflect.construct(t,r||[],(0,p.default)(e).constructor):t.apply(e,r))}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}t.default=function(e){function t(e){return(0,n.default)(this,t),c(this,t,[e])}return(0,u.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){if(this.props.data[this.props.field.name]){var e=null;this.props.field.iconClass&&(e=o.default.createElement("i",{className:this.props.field.iconClass}));var t=null;this.props.field.label&&(t=o.default.createElement("span",{className:"entry-label"},this.props.field.label));this.props.field.itemProp&&this.props.field.itemProp;var r=null;switch(this.props.field.level){case 1:r=o.default.createElement("h1",null,this.props.data[this.props.field.name]);break;case 2:r=o.default.createElement("h2",null,this.props.data[this.props.field.name]);break;case 3:r=o.default.createElement("h3",null,this.props.data[this.props.field.name]);break;case 4:r=o.default.createElement("h4",null,this.props.data[this.props.field.name]);break;case 5:r=o.default.createElement("h5",null,this.props.data[this.props.field.name]);break;case 6:r=o.default.createElement("h6",null,this.props.data[this.props.field.name]);break;default:console.warn(this.props.languageRefs.UNSUPPORTED_HEADLINE_LEVEL)}return o.default.createElement("div",{className:"item "+this.props.field.name+(this.props.field.class?" "+this.props.field.class:"")},e,t,r)}return""}}])}(o.Component)}}]);
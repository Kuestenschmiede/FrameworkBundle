/*! For license information please see 8799.bundle.7c6406392ce953513d9e.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[8799],{58799:(e,t,r)=>{var l=r(24994),a=r(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(r(17383)),s=l(r(34579)),n=l(r(28452)),p=l(r(63072)),o=l(r(29511)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var l={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&{}.hasOwnProperty.call(e,s)){var n=i?Object.getOwnPropertyDescriptor(e,s):null;n&&(n.get||n.set)?Object.defineProperty(l,s,n):l[s]=e[s]}return l.default=e,r&&r.set(e,l),l}(r(96540));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function u(e,t,r){return t=(0,p.default)(t),(0,n.default)(e,c()?Reflect.construct(t,r||[],(0,p.default)(e).constructor):t.apply(e,r))}function c(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(c=function(){return!!e})()}t.default=function(e){function t(e){return(0,i.default)(this,t),u(this,t,[e])}return(0,o.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){if(this.props.data[this.props.field.name]){var e=null;this.props.field.label&&(e=d.default.createElement("span",null,this.props.field.label));var t=this.props.data[this.props.field.name].src,r=this.props.data[this.props.field.name].alt,l=this.props.data[this.props.field.name].width,a=this.props.data[this.props.field.name].height,i=null;if(i=this.props.field.withPopover&&this.props.field.popoverField&&this.props.data[this.props.field.popoverField]?d.default.createElement("img",{className:"img-fluid",src:t,alt:r,"data-toggle":"tooltip",width:l,height:a,"data-content":this.props.data[this.props.field.popoverField],title:this.props.data[this.props.field.popoverField]}):d.default.createElement("img",{className:"img-fluid",src:t,alt:r,title:r,width:l,height:a}),this.props.field.addWrappingDiv){var s="";this.props.field.wrappingDivClass&&(s=this.props.field.wrappingDivClass);var n=null;return n=this.props.field.renderAsFigure?d.default.createElement(d.default.Fragment,null,i,d.default.createElement("figcaption",null,r)):d.default.createElement(d.default.Fragment,null,e,i),d.default.createElement("div",{className:s},d.default.createElement("div",{className:this.props.field.class?this.props.field.class:"detail-field-image"},n))}return this.props.field.renderAsFigure?d.default.createElement("figure",null,i,d.default.createElement("figcaption",null,r)):d.default.createElement("div",{className:this.props.field.class?this.props.field.class:"detail-field-image"},e,i)}return""}}])}(d.Component)}}]);
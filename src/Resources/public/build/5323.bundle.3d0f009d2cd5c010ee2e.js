/*! For license information please see 5323.bundle.3d0f009d2cd5c010ee2e.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[5323],{45323:(e,t,r)=>{var a=r(64836),n=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(38416)),f=a(r(56690)),u=a(r(89728)),o=a(r(66115)),i=a(r(61655)),s=a(r(94993)),p=a(r(73808)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in e)if("default"!==f&&Object.prototype.hasOwnProperty.call(e,f)){var u=l?Object.getOwnPropertyDescriptor(e,f):null;u&&(u.get||u.set)?Object.defineProperty(a,f,u):a[f]=e[f]}return a.default=e,r&&r.set(e,a),a}(r(67294));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,p.default)(e);if(t){var n=(0,p.default)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,s.default)(this,r)}}var m=d.default.lazy((function(){return Promise.all([r.e(6455),r.e(2012),r.e(7605)]).then(r.bind(r,97605))}));t.default=function(e){(0,i.default)(r,e);var t=h(r);function r(e){var a;return(0,f.default)(this,r),(a=t.call(this,e)).handleChange=a.handleChange.bind((0,o.default)(a)),a}return(0,u.default)(r,[{key:"handleChange",value:function(e){this.props.form.props.updateFunction(this.props.form.props.name,(0,l.default)({},this.props.field.name,e.target.value),this.props.field)}},{key:"render",value:function(){var e=this,t=null;this.props.field.label&&(t=d.default.createElement(d.default.Fragment,null,d.default.createElement("label",{htmlFor:this.props.field.name,required:this.props.field.required},this.props.field.label)));var r=null;this.props.field.label&&(r=d.default.createElement("span",{className:"field-description"},this.props.field.description));for(var a=[],n=0;n<this.props.field.maxImages;n++)this.props.data[this.props.field.name+"_"+n]?a.push(this.props.data[this.props.field.name+"_"+n]):a.push({});return d.default.createElement("div",{className:(this.props.field.className?this.props.field.className+" ":"")+"c4g-form-field"},t,a.map((function(t,r){var a=JSON.parse(JSON.stringify(e.props.field));return a.label="",a.name=a.name+"_"+r,d.default.createElement(m,{key:r,data:e.props.data,field:a,form:e.props.form,languageRefs:e.props.languageRefs})})),r)}}]),r}(d.Component)}}]);
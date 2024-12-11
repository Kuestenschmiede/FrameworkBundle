/*! For license information please see 7410.bundle.f0c911a8cd552a5db62d.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[7410],{7410:(e,t,n)=>{var i=n(24994),l=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(43693)),o=i(n(17383)),a=i(n(34579)),u=i(n(28452)),d=i(n(63072)),f=i(n(29511)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var i={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(i,o,a):i[o]=e[o]}return i.default=e,n&&n.set(e,i),i}(n(96540)),c=i(n(40691));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}t.default=function(e){function t(e){var n,i,l,r;return(0,o.default)(this,t),i=this,l=t,r=[e],l=(0,d.default)(l),(n=(0,u.default)(i,h()?Reflect.construct(l,r||[],(0,d.default)(i).constructor):l.apply(i,r))).handleChange=n.handleChange.bind(n),n}return(0,f.default)(t,e),(0,a.default)(t,[{key:"handleChange",value:function(e){this.props.form.props.updateFunction(this.props.form.props.name,(0,r.default)({},this.props.field.name,e.target.value),this.props.field)}},{key:"render",value:function(){if(!(0,c.default)(this.props.field,this.props.data,this.props.fields))return null;var e=null;this.props.field.label&&(e=s.default.createElement(s.default.Fragment,null,s.default.createElement("label",{htmlFor:this.props.field.name,className:this.props.field.required?"c4g-required":""},this.props.field.label)));var t=null;return this.props.field.label&&(t=s.default.createElement("span",{className:"field-description"},this.props.field.description)),s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{className:(this.props.field.className?this.props.field.className+" ":"")+"c4g-form-field form-group"},e,this.props.errorText&&s.default.createElement("div",{className:"text-danger"},this.props.errorText),s.default.createElement("textarea",{id:this.props.field.name,name:this.props.field.name,required:this.props.field.required,defaultValue:this.props.data[this.props.field.name]||this.props.field.value,onChange:this.handleChange,maxLength:this.props.field.maxLength,className:"form-control"}),t))}}])}(s.Component)},40691:(e,t)=>{function n(e){if(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0){if(e.conditionField.length===e.conditionValue.length)return!0;if(e.conditionValue.length>1&&1===e.conditionField.length)return!0}return!1}function i(e,t){var n=!0;if(e.conditionField.length===e.conditionValue.length)e.conditionField.forEach((function(i,l){void 0===t[i]?n=!1:null===t[i]||t[i].value||String(t[i])===String(e.conditionValue[l])?(t[i]&&t[i].value&&String(t[i].value)!==String(e.conditionValue[l])||null===t[i]&&null!==e.conditionValue[l])&&(n=!1):n=!1}),this);else if(e.conditionValue.length>1&&1===e.conditionField.length){var i=e.conditionField[0];for(var l in n=!1,e.conditionValue)if(e.conditionValue.hasOwnProperty(l)){var r=e.conditionValue[l];if(t[i]&&t[i].value?t[i].value===r&&(n=!0):t[i]===r&&(n=!0),n)break}}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.checkConditions=i,t.default=function(e,t,l){if(n(e)){var r=null;if(l.forEach((function(t,n){1===e.conditionField.length&&t.name===e.conditionField[0]&&(r=t)})),null!==r){return n(r)?i(r,t)&&i(e,t):i(e,t)}return i(e,t)}return!0},t.hasConditions=n}}]);
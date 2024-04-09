/*! For license information please see 1145.bundle.5a88896673062070a9ff.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[1145],{1145:(e,t,n)=>{var i=n(24994),l=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(43693)),o=i(n(17383)),a=i(n(34579)),u=i(n(28452)),d=i(n(63072)),f=i(n(29511)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var i={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(i,o,a):i[o]=e[o]}return i.default=e,n&&n.set(e,i),i}(n(96540));i(n(40691));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function p(e,t,n){return t=(0,d.default)(t),(0,u.default)(e,h()?Reflect.construct(t,n||[],(0,d.default)(e).constructor):t.apply(e,n))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}var m=c.default.lazy((function(){return n.e(6992).then(n.bind(n,76992))}));t.default=function(e){function t(e){var n;return(0,o.default)(this,t),(n=p(this,t,[e])).handleChange=n.handleChange.bind(n),n}return(0,f.default)(t,e),(0,a.default)(t,[{key:"handleChange",value:function(e){this.props.form.props.updateFunction(this.props.form.props.name,(0,r.default)({},this.props.field.name,e.target.value),this.props.field)}},{key:"render",value:function(){var e=null;this.props.field.label&&(e=c.default.createElement(c.default.Fragment,null,c.default.createElement("label",{htmlFor:this.props.field.name,className:this.props.field.required?"c4g-required":""},this.props.field.label)));var t=null;return this.props.field.label&&(t=c.default.createElement("small",{className:"field-description form-text text-muted"},this.props.field.description)),c.default.createElement(c.default.Fragment,null,c.default.createElement(m,{data:this.props.data,conditions:this.props.field.conditions,field:this.props.field.name},c.default.createElement("div",{className:(this.props.field.className?this.props.field.className+" ":"")+"c4g-form-field form-group"},e,c.default.createElement("input",{type:"number",id:this.props.field.name,name:this.props.field.name,required:this.props.field.required,defaultValue:this.props.data[this.props.field.name]||this.props.field.value||null,onChange:this.handleChange,min:this.props.field.min,max:this.props.field.max,step:this.props.field.step,className:"form-control"}),t)))}}])}(c.Component)},40691:(e,t)=>{function n(e){if(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0){if(e.conditionField.length===e.conditionValue.length)return!0;if(e.conditionValue.length>1&&1===e.conditionField.length)return!0}return!1}function i(e,t){var n=!0;if(e.conditionField.length===e.conditionValue.length)e.conditionField.forEach((function(i,l){void 0===t[i]?n=!1:null===t[i]||t[i].value||String(t[i])===String(e.conditionValue[l])?(t[i]&&t[i].value&&String(t[i].value)!==String(e.conditionValue[l])||null===t[i]&&null!==e.conditionValue[l])&&(n=!1):n=!1}),this);else if(e.conditionValue.length>1&&1===e.conditionField.length){var i=e.conditionField[0];for(var l in n=!1,e.conditionValue)if(e.conditionValue.hasOwnProperty(l)){var r=e.conditionValue[l];if(t[i]&&t[i].value?t[i].value===r&&(n=!0):t[i]===r&&(n=!0),n)break}}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.checkConditions=i,t.default=function(e,t,l){if(n(e)){var r=null;if(l.forEach((function(t,n){1===e.conditionField.length&&t.name===e.conditionField[0]&&(r=t)})),null!==r){return n(r)?i(r,t)&&i(e,t):i(e,t)}return i(e,t)}return!0},t.hasConditions=n}}]);
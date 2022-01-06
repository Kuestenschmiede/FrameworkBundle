/*! For license information please see 7863.bundle.08d4f5c17c4772fe4324.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[7863],{97863:(e,t,n)=>{var i=n(95318),r=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(59713)),o=i(n(34575)),a=i(n(93913)),u=i(n(81506)),f=i(n(2205)),d=i(n(78585)),c=i(n(29754)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var i={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=l?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(i,o,a):i[o]=e[o]}i.default=e,n&&n.set(e,i);return i}(n(67294)),p=i(n(20349));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,c.default)(e);if(t){var r=(0,c.default)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,d.default)(this,n)}}var v=function(e){(0,f.default)(n,e);var t=m(n);function n(e){var i;return(0,o.default)(this,n),(i=t.call(this,e)).handleChange=i.handleChange.bind((0,u.default)(i)),i}return(0,a.default)(n,[{key:"handleChange",value:function(e){this.props.form.props.updateFunction(this.props.form.props.name,(0,l.default)({},this.props.field.name,e.target.value),this.props.field)}},{key:"render",value:function(){if(!(0,p.default)(this.props.field,this.props.data,this.props.fields))return null;var e=null;this.props.field.label&&(e=s.default.createElement(s.default.Fragment,null,s.default.createElement("label",{htmlFor:this.props.field.name,className:this.props.field.required?"c4g-required":""},this.props.field.label)));var t=null;return this.props.field.label&&(t=s.default.createElement("span",{className:"field-description"},this.props.field.description)),s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{className:(this.props.field.className?this.props.field.className+" ":"")+"c4g-form-field form-group"},e,this.props.errorText&&s.default.createElement("div",{className:"text-danger"},this.props.errorText),s.default.createElement("textarea",{id:this.props.field.name,name:this.props.field.name,required:this.props.field.required,defaultValue:this.props.data[this.props.field.name]||this.props.field.value,onChange:this.handleChange,maxLength:this.props.field.maxLength,className:"form-control"}),t))}}]),n}(s.Component);t.default=v},20349:(e,t)=>{function n(e){if(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0){if(e.conditionField.length===e.conditionValue.length)return!0;if(e.conditionValue.length>1&&1===e.conditionField.length)return!0}return!1}function i(e,t){var n=!0;if(e.conditionField.length===e.conditionValue.length)e.conditionField.forEach((function(i,r){void 0===t[i]?n=!1:null===t[i]||t[i].value||String(t[i])===String(e.conditionValue[r])?(t[i]&&t[i].value&&String(t[i].value)!==String(e.conditionValue[r])||null===t[i]&&null!==e.conditionValue[r])&&(n=!1):n=!1}),this);else if(e.conditionValue.length>1&&1===e.conditionField.length){var i=e.conditionField[0];for(var r in n=!1,e.conditionValue)if(e.conditionValue.hasOwnProperty(r)){var l=e.conditionValue[r];if(t[i]&&t[i].value?t[i].value===l&&(n=!0):t[i]===l&&(n=!0),n)break}}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.checkConditions=i,t.default=function(e,t,r){if(n(e)){var l=null;if(r.forEach((function(t,n){1===e.conditionField.length&&t.name===e.conditionField[0]&&(l=t)})),null!==l){return n(l)?i(l,t)&&i(e,t):i(e,t)}return i(e,t)}return!0},t.hasConditions=n}}]);
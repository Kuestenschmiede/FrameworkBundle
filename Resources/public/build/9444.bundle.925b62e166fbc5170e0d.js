/*! For license information please see 9444.bundle.925b62e166fbc5170e0d.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[9444],{49444:(e,t,n)=>{var r=n(95318),i=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(59713)),o=r(n(34575)),a=r(n(93913)),u=r(n(81506)),f=r(n(2205)),d=r(n(78585)),c=r(n(29754)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=l?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),p=r(n(6404));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,d.default)(this,n)}}var v=function(e){(0,f.default)(n,e);var t=m(n);function n(e){var r;return(0,o.default)(this,n),(r=t.call(this,e)).handleChange=r.handleChange.bind((0,u.default)(r)),r}return(0,a.default)(n,[{key:"handleChange",value:function(e){this.props.form.props.updateFunction(this.props.form.props.name,(0,l.default)({},this.props.field.name,e.target.value),this.props.field)}},{key:"render",value:function(){if(!(0,p.default)(this.props.field,this.props.data))return null;var e=null;this.props.field.label&&(e=s.default.createElement(s.default.Fragment,null,s.default.createElement("label",{htmlFor:this.props.field.name,className:this.props.field.required?"c4g-required":""},this.props.field.label)));var t=null;return this.props.field.label&&(t=s.default.createElement("span",{className:"field-description"},this.props.field.description)),s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{className:(this.props.field.className?this.props.field.className+" ":"")+"c4g-form-field form-group"},e,this.props.errorText&&s.default.createElement("div",{className:"text-danger"},this.props.errorText),s.default.createElement("textarea",{id:this.props.field.name,name:this.props.field.name,required:this.props.field.required,defaultValue:this.props.data[this.props.field.name]||this.props.field.value,onChange:this.handleChange,maxLength:this.props.field.maxLength,className:"form-control"}),t))}}]),n}(s.Component);t.default=v},6404:(e,t)=>{function n(e){if(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0){if(e.conditionField.length===e.conditionValue.length)return!0;if(e.conditionValue.length>1&&1===e.conditionField.length)return!0}return!1}function r(e,t){var n=!0;if(e.conditionField.length===e.conditionValue.length)e.conditionField.forEach((function(r,i){void 0===t[r]?n=!1:null===t[r]||t[r].value||String(t[r])===String(e.conditionValue[i])?(t[r]&&t[r].value&&String(t[r].value)!==String(e.conditionValue[i])||null===t[r]&&null!==e.conditionValue[i])&&(n=!1):n=!1}),this);else if(e.conditionValue.length>1&&1===e.conditionField.length){var r=e.conditionField[0];for(var i in n=!1,e.conditionValue)if(e.conditionValue.hasOwnProperty(i)){var l=e.conditionValue[i];if(t[r]&&t[r].value?t[r].value===l&&(n=!0):t[r]===l&&(n=!0),n)break}}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.hasConditions=n,t.checkConditions=r,t.default=function(e,t){return!n(e)||r(e,t)}}}]);
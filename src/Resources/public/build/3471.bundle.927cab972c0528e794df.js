/*! For license information please see 3471.bundle.927cab972c0528e794df.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[3471],{53471:(e,t,i)=>{var n=i(24994),l=i(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i(43693)),o=n(i(17383)),a=n(i(34579)),s=n(i(28452)),d=n(i(63072)),p=n(i(29511)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var i=c(t);if(i&&i.has(e))return i.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}return n.default=e,i&&i.set(e,n),n}(i(96540)),u=n(i(40691));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(c=function(e){return e?i:t})(e)}function h(e,t,i){return t=(0,d.default)(t),(0,s.default)(e,m()?Reflect.construct(t,i||[],(0,d.default)(e).constructor):t.apply(e,i))}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}t.default=function(e){function t(e){var i;return(0,o.default)(this,t),(i=h(this,t,[e])).handleChange=i.handleChange.bind(i),i}return(0,p.default)(t,e),(0,a.default)(t,[{key:"handleChange",value:function(e){var t=this;if(this.props.form.props.updateFunction(this.props.form.props.name,(0,r.default)({},this.props.field.name,e.target.value),this.props.field),this.props.field.cache&&this.props.field.entryPoint&&localStorage.setItem("form-text-"+this.props.field.entryPoint+"-"+this.props.field.name,e.target.value),this.props.field.dynamicFieldlist){var i=(0,r.default)({},this.props.field.name,e.target.value);if(this.props.field.dynamicFieldlistAdditionalFields&&this.props.field.dynamicFieldlistAdditionalFields.length>0)for(var n=this.props.field.dynamicFieldlistAdditionalFields,l=0;l<n.length;l++)i[n[l]]=this.props.data[n[l]];jQuery.post(this.props.field.dynamicFieldlistUrl,i).done((function(e){e&&e.matchingFields&&e.nonMatchingFields&&t.props.form.props.setFieldsFunction(t.props.form.props.name,e)}))}}},{key:"render",value:function(){if(!(0,u.default)(this.props.field,this.props.data,this.props.fields))return null;var e=null,t=null;if(this.props.field.label){var i="";this.props.field.required?(i="c4g-required",e=f.default.createElement("label",{className:i,htmlFor:this.props.field.name},this.props.field.label)):e=f.default.createElement("label",{htmlFor:this.props.field.name},this.props.field.label)}else this.props.field.placeholder&&(t=this.props.field.placeholder);var n=null,l=null;if(this.props.field.descriptionLink&&this.props.field.descriptionLinkLabel&&(l=f.default.createElement("a",{className:"form-description-link btn btn-info btn-sm",href:this.props.field.descriptionLink,target:"_blank"},f.default.createElement("i",{className:"fas fa-info-circle"})," ",this.props.field.descriptionLinkLabel)),this.props.field.label&&(n=f.default.createElement("small",{className:"field-description form-text text-muted"},this.props.field.description," ",l)),this.props.field.cache&&this.props.field.entryPoint){var r=localStorage.getItem("form-text-"+this.props.field.entryPoint+"-"+this.props.field.name);r&&(this.props.data[this.props.field.name]=r)}var o=f.default.createElement(f.default.Fragment,null,f.default.createElement("div",{className:(this.props.field.className?this.props.field.className+" ":"")+"c4g-form-field"},e,this.props.errorText&&"string"==typeof this.props.errorText&&f.default.createElement("div",{className:"text-danger"},this.props.errorText),f.default.createElement("input",{type:this.props.field.type,id:this.props.field.name,name:this.props.field.name,required:this.props.field.required,defaultValue:this.props.data[this.props.field.name]||this.props.field.value,pattern:this.props.field.pattern,onChange:this.handleChange,onFocus:this.handleChange,placeholder:this.props.field.placeholder,className:"c4g-form-control c4g-form-input"+(this.props.errorText&&"string"==typeof this.props.errorText?" is-invalid":""),maxLength:this.props.field.maxLength,"aria-label":t}),n));return this.props.field.wrappingDiv?f.default.createElement("div",{className:this.props.field.wrappingDivClass||""},o):o}}])}(f.Component)},40691:(e,t)=>{function i(e){if(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0){if(e.conditionField.length===e.conditionValue.length)return!0;if(e.conditionValue.length>1&&1===e.conditionField.length)return!0}return!1}function n(e,t){var i=!0;if(e.conditionField.length===e.conditionValue.length)e.conditionField.forEach((function(n,l){void 0===t[n]?i=!1:null===t[n]||t[n].value||String(t[n])===String(e.conditionValue[l])?(t[n]&&t[n].value&&String(t[n].value)!==String(e.conditionValue[l])||null===t[n]&&null!==e.conditionValue[l])&&(i=!1):i=!1}),this);else if(e.conditionValue.length>1&&1===e.conditionField.length){var n=e.conditionField[0];for(var l in i=!1,e.conditionValue)if(e.conditionValue.hasOwnProperty(l)){var r=e.conditionValue[l];if(t[n]&&t[n].value?t[n].value===r&&(i=!0):t[n]===r&&(i=!0),i)break}}return i}Object.defineProperty(t,"__esModule",{value:!0}),t.checkConditions=n,t.default=function(e,t,l){if(i(e)){var r=null;if(l.forEach((function(t,i){1===e.conditionField.length&&t.name===e.conditionField[0]&&(r=t)})),null!==r){return i(r)?n(r,t)&&n(e,t):n(e,t)}return n(e,t)}return!0},t.hasConditions=i}}]);
/*! For license information please see 4302.bundle.677d1786a6f691833a03.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[4302],{34302:(e,t,n)=>{var i=n(64836),o=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(56690)),l=i(n(89728)),a=i(n(66115)),c=i(n(61655)),u=i(n(94993)),f=i(n(73808)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var a=r?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(i,l,a):i[l]=e[l]}i.default=e,n&&n.set(e,i);return i}(n(67294));i(n(20349));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,f.default)(e);if(t){var o=(0,f.default)(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return(0,u.default)(this,n)}}var h=d.default.lazy((function(){return n.e(1732).then(n.bind(n,41732))})),m=function(e){(0,c.default)(n,e);var t=p(n);function n(e){var i;return(0,r.default)(this,n),(i=t.call(this,e)).clickCheckbox=i.clickCheckbox.bind((0,a.default)(i)),i}return(0,l.default)(n,[{key:"render",value:function(){var e=null;this.props.field.label&&(e=d.default.createElement("label",{htmlFor:this.props.field.name,className:"form-check-label c4g-form-check-label "},this.props.field.label));var t=null;return this.props.field.label&&(t=d.default.createElement("small",{className:"field-description text-muted"},this.props.field.description)),d.default.createElement(d.default.Fragment,null,d.default.createElement(h,{data:this.props.data,conditions:this.props.field.conditions,field:this.props.field.name},d.default.createElement("div",{className:(this.props.field.className?this.props.field.className+" ":"")+"c4g-form-field form-group form-check"},d.default.createElement("input",{type:"checkbox",id:this.props.field.name,name:this.props.field.name,defaultChecked:this.props.data[this.props.field.name]||this.props.field.checked,required:this.props.field.required,onClick:this.clickCheckbox,className:"form-check-input"}),e," ",t)))}},{key:"clickCheckbox",value:function(e){e.stopPropagation();var t=this.props.data;t[this.props.field.name]=e.target.checked?"1":"",this.props.form.props.updateFunction(this.props.form.props.name,t,this.props.field)}},{key:"componentDidMount",value:function(){if(!this.props.data[this.props.field.name]&&this.props.field.checked){var e=this.props.data;e[this.props.field.name]="1",this.props.form.props.updateFunction(this.props.form.props.name,e,this.props.field)}}}]),n}(d.Component);t.default=m},20349:(e,t)=>{function n(e){if(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0){if(e.conditionField.length===e.conditionValue.length)return!0;if(e.conditionValue.length>1&&1===e.conditionField.length)return!0}return!1}function i(e,t){var n=!0;if(e.conditionField.length===e.conditionValue.length)e.conditionField.forEach((function(i,o){void 0===t[i]?n=!1:null===t[i]||t[i].value||String(t[i])===String(e.conditionValue[o])?(t[i]&&t[i].value&&String(t[i].value)!==String(e.conditionValue[o])||null===t[i]&&null!==e.conditionValue[o])&&(n=!1):n=!1}),this);else if(e.conditionValue.length>1&&1===e.conditionField.length){var i=e.conditionField[0];for(var o in n=!1,e.conditionValue)if(e.conditionValue.hasOwnProperty(o)){var r=e.conditionValue[o];if(t[i]&&t[i].value?t[i].value===r&&(n=!0):t[i]===r&&(n=!0),n)break}}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.checkConditions=i,t.default=function(e,t,o){if(n(e)){var r=null;if(o.forEach((function(t,n){1===e.conditionField.length&&t.name===e.conditionField[0]&&(r=t)})),null!==r){return n(r)?i(r,t)&&i(e,t):i(e,t)}return i(e,t)}return!0},t.hasConditions=n}}]);
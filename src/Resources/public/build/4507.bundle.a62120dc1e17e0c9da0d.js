/*! For license information please see 4507.bundle.a62120dc1e17e0c9da0d.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[4507],{94507:(e,t,i)=>{var a=i(64836),n=i(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(i(18698)),r=a(i(38416)),o=a(i(56690)),s=a(i(89728)),p=a(i(66115)),d=a(i(61655)),u=a(i(94993)),f=a(i(73808)),h=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var i=v(t);if(i&&i.has(e))return i.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=l?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}a.default=e,i&&i.set(e,a);return a}(i(67294)),c=a(i(26294)),m=a(i(20349));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(v=function(e){return e?i:t})(e)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,a=(0,f.default)(e);if(t){var n=(0,f.default)(this).constructor;i=Reflect.construct(a,arguments,n)}else i=a.apply(this,arguments);return(0,u.default)(this,i)}}var b=function(e){(0,d.default)(i,e);var t=g(i);function i(e){var a;return(0,o.default)(this,i),(a=t.call(this,e)).handleValueChange=a.handleValueChange.bind((0,p.default)(a)),a.handleUnitChange=a.handleUnitChange.bind((0,p.default)(a)),a.handleChange=a.handleChange.bind((0,p.default)(a)),a}return(0,s.default)(i,[{key:"handleValueChange",value:function(e){var t={unit:null};this.props.data[this.props.field.name]&&this.props.data[this.props.field.name].unit&&(t.unit=this.props.data[this.props.field.name].unit),t.value=e.target.value,this.handleChange(t)}},{key:"handleUnitChange",value:function(e){var t={};t.unit=e,this.props.data[this.props.field.name]&&this.props.data[this.props.field.name].value?t.value=this.props.data[this.props.field.name].value:t.value=this.props.field.value,this.handleChange(t)}},{key:"handleChange",value:function(e){this.props.form.props.updateFunction(this.props.form.props.name,(0,r.default)({},this.props.field.name,e),this.props.field)}},{key:"handleChangeDummy",value:function(e){}},{key:"render",value:function(){var e=this;if(!(0,m.default)(this.props.field,this.props.data,this.props.fields))return null;var t=null,i=null;if(this.props.field.label){t=h.default.createElement(h.default.Fragment,null,h.default.createElement("label",{htmlFor:this.props.field.name,className:(this.props.field.required?"c4g-required ":"")+"col-12"},this.props.field.label))}else this.props.field.placeholder&&(i=this.props.field.placeholder);var a=null;this.props.field.label&&(a=h.default.createElement("small",{className:"field-description form-text text-muted col-12"},this.props.field.description));var n=[];if(this.props.field.options){if(this.props.field.grouped)n=this.props.field.options;else""!==this.props.field.emptyOptionLabel&&n.push({value:"",label:this.props.field.emptyOptionLabel}),Object.keys(this.props.field.options).forEach((function(t,i){n.push({value:e.props.field.options[t].value,label:e.props.field.options[t].label})}));var r="";this.props.field.hintText&&(r=h.default.createElement("div",{className:""},this.props.field.hintText));var o=null;if(this.props.field.required){var s="";this.props.data[this.props.field.name]&&(s=this.props.data[this.props.field.name].value?this.props.data[this.props.field.name].value:"object"===(0,l.default)(this.props.data[this.props.field.name])?"":this.props.data[this.props.field.name]);var p="";this.props.data[this.props.field.name]&&(p=this.props.data[this.props.field.name].value?this.props.data[this.props.field.name].value:"object"===(0,l.default)(this.props.data[this.props.field.name])?"":this.props.data[this.props.field.name]),o=h.default.createElement("select",{tabIndex:-1,autoComplete:"off",style:{opacity:0,height:0,pointerEvents:"none"},value:s,required:this.props.field.required,onChange:this.handleChangeDummy,"aria-label":i,className:"form-control"},h.default.createElement("option",{value:s},p))}var d=null;d=this.props.data[this.props.field.name]&&this.props.data[this.props.field.name].value?this.props.data[this.props.field.name].value:this.props.field.value;var u=null;return this.props.data[this.props.field.name]&&this.props.data[this.props.field.name].unit&&(u=this.props.data[this.props.field.name].unit),h.default.createElement(h.default.Fragment,null,h.default.createElement("div",{className:(this.props.field.className?this.props.field.className+" ":"")+"c4g-form-field form-row"},t,r,h.default.createElement("input",{type:"number",name:this.props.field.name+"[value]",required:this.props.field.required,defaultValue:d,min:this.props.field.min,max:this.props.field.max,step:this.props.field.step,onChange:this.handleValueChange,className:"form-control col-3 col-sm-2"}),h.default.createElement(c.default,{id:this.props.field.name,name:this.props.field.name+"[unit]",options:n,required:this.props.field.required,onChange:this.handleUnitChange,defaultValue:u,placeholder:this.props.field.placeholder,"aria-label":i,className:"col-9 col-sm-5"}),o,a))}return""}}]),i}(h.Component);t.default=b},20349:(e,t)=>{function i(e){if(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0){if(e.conditionField.length===e.conditionValue.length)return!0;if(e.conditionValue.length>1&&1===e.conditionField.length)return!0}return!1}function a(e,t){var i=!0;if(e.conditionField.length===e.conditionValue.length)e.conditionField.forEach((function(a,n){void 0===t[a]?i=!1:null===t[a]||t[a].value||String(t[a])===String(e.conditionValue[n])?(t[a]&&t[a].value&&String(t[a].value)!==String(e.conditionValue[n])||null===t[a]&&null!==e.conditionValue[n])&&(i=!1):i=!1}),this);else if(e.conditionValue.length>1&&1===e.conditionField.length){var a=e.conditionField[0];for(var n in i=!1,e.conditionValue)if(e.conditionValue.hasOwnProperty(n)){var l=e.conditionValue[n];if(t[a]&&t[a].value?t[a].value===l&&(i=!0):t[a]===l&&(i=!0),i)break}}return i}Object.defineProperty(t,"__esModule",{value:!0}),t.checkConditions=a,t.default=function(e,t,n){if(i(e)){var l=null;if(n.forEach((function(t,i){1===e.conditionField.length&&t.name===e.conditionField[0]&&(l=t)})),null!==l){return i(l)?a(l,t)&&a(e,t):a(e,t)}return a(e,t)}return!0},t.hasConditions=i}}]);
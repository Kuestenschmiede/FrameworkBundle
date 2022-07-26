/*! For license information please see 3374.bundle.65317fca052627d4eb45.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[3374],{93374:(e,t,n)=>{var i=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(38416)),o=i(n(56690)),a=i(n(89728)),u=i(n(66115)),s=i(n(61655)),f=i(n(94993)),p=i(n(73808)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var i={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=l?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(i,o,a):i[o]=e[o]}i.default=e,n&&n.set(e,i);return i}(n(67294)),c=i(n(20349));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,p.default)(e);if(t){var r=(0,p.default)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,f.default)(this,n)}}var v=function(e){(0,s.default)(n,e);var t=m(n);function n(e){var i;return(0,o.default)(this,n),(i=t.call(this,e)).regex={fullPattern:"^(([0-9])|([0-1][0-9])|(2[0-3])):([0-5][0-9])$",full:new RegExp("^(([0-9])|([0-1][0-9])|(2[0-3])):([0-5][0-9])$")},i.handleChange=i.handleChange.bind((0,u.default)(i)),i}return(0,a.default)(n,[{key:"handleChange",value:function(e){var t=e.target.value;if(!0===this.regex.full.test(t)){var n=t.split(":"),i=parseInt(n[0]),r=parseInt(n[1]);this.props.form.props.updateFunction(this.props.form.props.name,(0,l.default)({},this.props.field.name,3600*i+60*r),this.props.field)}else if(4===t.length){var o=t.split("");if(!0===this.regex.full.test(o[0]+o[1]+":"+o[2]+o[3])){var a=parseInt(o[0]+o[1]),u=parseInt(o[2]+o[3]);this.props.form.props.updateFunction(this.props.form.props.name,(0,l.default)({},this.props.field.name,3600*a+60*u),this.props.field)}}else if(3===t.length){var s=t.split("");if(!0===this.regex.full.test(s[0]+":"+s[1]+s[2])){var f=parseInt(s[0]),p=parseInt(s[1]+s[2]);this.props.form.props.updateFunction(this.props.form.props.name,(0,l.default)({},this.props.field.name,3600*f+60*p),this.props.field)}}else""===t&&this.props.form.props.updateFunction(this.props.form.props.name,(0,l.default)({},this.props.field.name,null),this.props.field)}},{key:"convertTimeToString",value:function(e){if(null==e)return"";var t=(e-e%3600)/3600,n=e%3600/60;return t<10&&(t="0"+t),n<10&&(n="0"+n),t+":"+n}},{key:"render",value:function(){if(!(0,c.default)(this.props.field,this.props.data,this.props.fields))return null;var e=null;this.props.field.label&&(e=this.props.field.label);var t,n=null;return this.props.field.description&&(n=this.props.field.description),t=this.props.field.className?this.props.field.name+" "+this.props.field.className:this.props.field.className,d.default.createElement("div",{className:"c4g-form-field form-group"},d.default.createElement("label",{className:this.props.field.required?"c4g-required":""},e),d.default.createElement("input",{type:"time",className:t+" form-control",required:this.props.field.required,defaultValue:this.convertTimeToString(this.props.data[this.props.field.name]),pattern:this.regex.fullPattern,placeholder:"HH:MM",onChange:this.handleChange,maxLength:5}),d.default.createElement("input",{type:"hidden",name:this.props.field.name,value:this.props.data[this.props.field.name]||""}),d.default.createElement("small",{className:"field-description form-text text-muted"},n))}}]),n}(d.Component);t.default=v},20349:(e,t)=>{function n(e){if(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0){if(e.conditionField.length===e.conditionValue.length)return!0;if(e.conditionValue.length>1&&1===e.conditionField.length)return!0}return!1}function i(e,t){var n=!0;if(e.conditionField.length===e.conditionValue.length)e.conditionField.forEach((function(i,r){void 0===t[i]?n=!1:null===t[i]||t[i].value||String(t[i])===String(e.conditionValue[r])?(t[i]&&t[i].value&&String(t[i].value)!==String(e.conditionValue[r])||null===t[i]&&null!==e.conditionValue[r])&&(n=!1):n=!1}),this);else if(e.conditionValue.length>1&&1===e.conditionField.length){var i=e.conditionField[0];for(var r in n=!1,e.conditionValue)if(e.conditionValue.hasOwnProperty(r)){var l=e.conditionValue[r];if(t[i]&&t[i].value?t[i].value===l&&(n=!0):t[i]===l&&(n=!0),n)break}}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.checkConditions=i,t.default=function(e,t,r){if(n(e)){var l=null;if(r.forEach((function(t,n){1===e.conditionField.length&&t.name===e.conditionField[0]&&(l=t)})),null!==l){return n(l)?i(l,t)&&i(e,t):i(e,t)}return i(e,t)}return!0},t.hasConditions=n}}]);
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[7160],{7160:(e,t,r)=>{var a=r(95318),o=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var p=a(r(34575)),n=a(r(93913)),l=a(r(81506)),s=a(r(2205)),i=a(r(78585)),f=a(r(29754)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var a={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var l=p?Object.getOwnPropertyDescriptor(e,n):null;l&&(l.get||l.set)?Object.defineProperty(a,n,l):a[n]=e[n]}a.default=e,r&&r.set(e,a);return a}(r(67294));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,f.default)(e);if(t){var o=(0,f.default)(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return(0,i.default)(this,r)}}var m=function(e){(0,s.default)(r,e);var t=d(r);function r(e){var a;return(0,p.default)(this,r),(a=t.call(this,e)).checkRadioButton=a.checkRadioButton.bind((0,l.default)(a)),a}return(0,n.default)(r,[{key:"render",value:function(){var e=this,t=null;this.props.field.label&&(t=u.default.createElement("span",{className:"custom-label",key:"label"},this.props.field.label));var r=[],a=localStorage.getItem("form-radiogroup-"+this.props.field.name);(a&&this.props.field.cache&&(this.props.data[this.props.field.name]=JSON.parse(a)),this.props.field.options)&&Object.keys(this.props.field.options).forEach((function(t,a){var o=e.props.field.checked===t;r.push(u.default.createElement(u.default.Fragment,{key:a},u.default.createElement("div",{className:e.props.field.optionsClass},u.default.createElement("input",{type:"radio",id:e.props.form.props.name+"_"+e.props.field.name+"_"+t,name:e.props.field.name,defaultChecked:o,value:t,required:e.props.field.required,onChange:e.checkRadioButton,className:"form-check-input "+e.props.field.name+"_"+t}),u.default.createElement("label",{className:"form-check-label c4g-form-check-label "+e.props.field.name+"_"+t,htmlFor:e.props.form.props.name+"_"+e.props.field.name+"_"+t},e.props.field.options[t]))))}),this);var o=null;return this.props.field.label&&(o=u.default.createElement("span",{className:"field-description",key:"description"},this.props.field.description)),u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{className:this.props.field.className},t,r,o))}},{key:"checkRadioButton",value:function(e){var t=e.target.value;this.props.data[this.props.field.name]=t,this.props.form.props.updateFunction(this.props.form.props.name,this.props.data,this.props.field)}},{key:"componentDidMount",value:function(){var e=this;Object.keys(this.props.field.options).forEach((function(t,r){if(e.props.field.checked===t){var a=document.getElementById(e.props.form.props.name+"_"+e.props.field.name+"_"+t).value;e.props.data[e.props.field.name]=a,e.props.form.props.updateFunction(e.props.form.props.name,e.props.data,e.props.field),e.props.field.cache&&localStorage.setItem("form-radiogroup-"+e.props.field.name,JSON.stringify(e.props.data))}}))}}]),r}(u.Component);t.default=m}}]);
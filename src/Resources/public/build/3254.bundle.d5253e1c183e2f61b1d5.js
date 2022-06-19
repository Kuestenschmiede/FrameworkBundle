/*! For license information please see 3254.bundle.d5253e1c183e2f61b1d5.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[3254],{23254:(e,t,i)=>{var l=i(95318),n=i(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(i(50008)),o=l(i(59713)),a=l(i(34575)),s=l(i(93913)),p=l(i(81506)),d=l(i(2205)),f=l(i(78585)),u=l(i(29754)),h=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var i=v(t);if(i&&i.has(e))return i.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(l,o,a):l[o]=e[o]}l.default=e,i&&i.set(e,l);return l}(i(67294)),c=l(i(26294)),m=l(i(20349));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(v=function(e){return e?i:t})(e)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,l=(0,u.default)(e);if(t){var n=(0,u.default)(this).constructor;i=Reflect.construct(l,arguments,n)}else i=l.apply(this,arguments);return(0,f.default)(this,i)}}var y=function(e){(0,d.default)(i,e);var t=g(i);function i(e){var l;return(0,a.default)(this,i),(l=t.call(this,e)).handleChange=l.handleChange.bind((0,p.default)(l)),l}return(0,s.default)(i,[{key:"handleChange",value:function(e,t){var i=this;if(this.props.form.props.updateFunction(this.props.form.props.name,(0,o.default)({},this.props.field.name,e),this.props.field),this.props.field.instantRedirectUrl&&(window.location=this.props.field.instantRedirectUrl.replace("{value}",e.value)),this.props.field.dynamicFieldlist){var l=(0,o.default)({},this.props.field.name,e);if(this.props.field.dynamicFieldlistAdditionalFields&&this.props.field.dynamicFieldlistAdditionalFields.length>0)for(var n=this.props.field.dynamicFieldlistAdditionalFields,r=0;r<n.length;r++)l[n[r]]=this.props.data[n[r]];jQuery.post(this.props.field.dynamicFieldlistUrl,l).done((function(e){e&&e.matchingFields&&e.nonMatchingFields&&i.props.form.props.setFieldsFunction(i.props.form.props.name,e)}))}}},{key:"handleChangeDummy",value:function(e){}},{key:"render",value:function(){var e=this,t=null,i=null;if(!(0,m.default)(this.props.field,this.props.data,this.props.fields))return null;if(this.props.field.hidden)return null;this.props.field.label?t=h.default.createElement(h.default.Fragment,null,h.default.createElement("label",{htmlFor:this.props.field.name,className:this.props.field.required?"c4g-required":""},this.props.field.label)):this.props.field.placeholder&&(i=this.props.field.placeholder);var l=null;this.props.field.description&&(l=h.default.createElement("small",{className:"field-description form-text text-muted"},this.props.field.description));var n=[],o=null;if(this.props.field.options){if(this.props.field.grouped)n=this.props.field.options;else if(""!==this.props.field.emptyOptionLabel&&n.push({value:"",label:this.props.field.emptyOptionLabel}),Object.keys(this.props.field.options).forEach((function(t,i){n.push({value:e.props.field.options[t].value,label:e.props.field.options[t].label}),e.props.data[e.props.field.name]===e.props.field.options[t].value&&(o={value:e.props.field.options[t].value,label:e.props.field.options[t].label})})),!o&&this.props.field.selected){var a=this.props.field.selected;o={value:this.props.field.options[a].value,label:this.props.field.options[a].label}}var s="";this.props.field.hintText&&(s=h.default.createElement("div",{className:""},this.props.field.hintText));var p=null;if(this.props.field.required){var d="";this.props.data[this.props.field.name]&&(d=this.props.data[this.props.field.name].value?this.props.data[this.props.field.name].value:"object"===(0,r.default)(this.props.data[this.props.field.name])?"":this.props.data[this.props.field.name]);var f="";this.props.data[this.props.field.name]&&(f=this.props.data[this.props.field.name].value?this.props.data[this.props.field.name].value:"object"===(0,r.default)(this.props.data[this.props.field.name])?"":this.props.data[this.props.field.name]),p=h.default.createElement("select",{tabIndex:-1,autoComplete:"off",style:{opacity:0,height:0,pointerEvents:"none"},value:d,required:this.props.field.required,onChange:this.handleChangeDummy,"aria-label":i},h.default.createElement("option",{value:d},f))}var u=this.props.field.name;return this.props.field.multiple&&this.props.field.synchronous&&(u+="[]"),h.default.createElement(h.default.Fragment,null,h.default.createElement("div",{className:(this.props.field.className?this.props.field.className+" ":"")+"c4g-form-field"},t,this.props.errorText&&"string"==typeof this.props.errorText&&h.default.createElement("div",{className:"text-danger"},this.props.errorText),s,h.default.createElement(h.default.Fragment,null,h.default.createElement(c.default,{id:this.props.field.name,name:u,options:n,isMulti:this.props.field.multiple,required:this.props.field.required,onChange:this.handleChange,defaultValue:this.props.field.multiple?this.props.data[this.props.field.name]:o,placeholder:this.props.field.placeholder,"aria-label":i}),p),l))}return""}},{key:"componentDidMount",value:function(){var e=!!this.props.data[this.props.field.name],t=this.props.field.selected,i=this.props.field.options[t]&&!!this.props.field.options[t].value;this.props.field.instantRedirectUrl||!e&&!i||this.handleChange(this.props.data[this.props.field.name],"")}}]),i}(h.Component);t.default=y},20349:(e,t)=>{function i(e){if(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0){if(e.conditionField.length===e.conditionValue.length)return!0;if(e.conditionValue.length>1&&1===e.conditionField.length)return!0}return!1}function l(e,t){var i=!0;if(e.conditionField.length===e.conditionValue.length)e.conditionField.forEach((function(l,n){void 0===t[l]?i=!1:null===t[l]||t[l].value||String(t[l])===String(e.conditionValue[n])?(t[l]&&t[l].value&&String(t[l].value)!==String(e.conditionValue[n])||null===t[l]&&null!==e.conditionValue[n])&&(i=!1):i=!1}),this);else if(e.conditionValue.length>1&&1===e.conditionField.length){var l=e.conditionField[0];for(var n in i=!1,e.conditionValue)if(e.conditionValue.hasOwnProperty(n)){var r=e.conditionValue[n];if(t[l]&&t[l].value?t[l].value===r&&(i=!0):t[l]===r&&(i=!0),i)break}}return i}Object.defineProperty(t,"__esModule",{value:!0}),t.checkConditions=l,t.default=function(e,t,n){if(i(e)){var r=null;if(n.forEach((function(t,i){1===e.conditionField.length&&t.name===e.conditionField[0]&&(r=t)})),null!==r){return i(r)?l(r,t)&&l(e,t):l(e,t)}return l(e,t)}return!0},t.hasConditions=i}}]);
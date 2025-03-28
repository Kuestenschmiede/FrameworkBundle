/*! For license information please see 6100.bundle.80411b0e65616a67f8f3.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[6100],{40691:(e,t)=>{function i(e){if(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0){if(e.conditionField.length===e.conditionValue.length)return!0;if(e.conditionValue.length>1&&1===e.conditionField.length)return!0}return!1}function l(e,t){var i=!0;if(e.conditionField.length===e.conditionValue.length)e.conditionField.forEach((function(l,o){void 0===t[l]?i=!1:null===t[l]||t[l].value||String(t[l])===String(e.conditionValue[o])?(t[l]&&t[l].value&&String(t[l].value)!==String(e.conditionValue[o])||null===t[l]&&null!==e.conditionValue[o])&&(i=!1):i=!1}),this);else if(e.conditionValue.length>1&&1===e.conditionField.length){var l=e.conditionField[0];for(var o in i=!1,e.conditionValue)if(e.conditionValue.hasOwnProperty(o)){var n=e.conditionValue[o];if(t[l]&&t[l].value?t[l].value===n&&(i=!0):t[l]===n&&(i=!0),i)break}}return i}Object.defineProperty(t,"__esModule",{value:!0}),t.checkConditions=l,t.default=function(e,t,o){if(i(e)){var n=null;if(o.forEach((function(t,i){1===e.conditionField.length&&t.name===e.conditionField[0]&&(n=t)})),null!==n){return i(n)?l(n,t)&&l(e,t):l(e,t)}return l(e,t)}return!0},t.hasConditions=i},96100:(e,t,i)=>{var l=i(24994),o=i(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(i(73738)),r=l(i(43693)),s=l(i(17383)),a=l(i(34579)),p=l(i(28452)),d=l(i(63072)),f=l(i(29511)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var i=m(t);if(i&&i.has(e))return i.get(e);var l={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&{}.hasOwnProperty.call(e,r)){var s=n?Object.getOwnPropertyDescriptor(e,r):null;s&&(s.get||s.set)?Object.defineProperty(l,r,s):l[r]=e[r]}return l.default=e,i&&i.set(e,l),l}(i(96540)),h=l(i(62029)),c=l(i(40691));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(m=function(e){return e?i:t})(e)}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}var g=u.default.lazy((function(){return i.e(6992).then(i.bind(i,76992))}));t.default=function(e){function t(e){var i,l,o,n;return(0,s.default)(this,t),l=this,o=t,n=[e],o=(0,d.default)(o),(i=(0,p.default)(l,v()?Reflect.construct(o,n||[],(0,d.default)(l).constructor):o.apply(l,n))).handleChange=i.handleChange.bind(i),i}return(0,f.default)(t,e),(0,a.default)(t,[{key:"handleChange",value:function(e,t){var i=this;if(this.props.form.props.updateFunction(this.props.form.props.name,(0,r.default)({},this.props.field.name,e),this.props.field),this.props.field.cache&&this.props.field.entryPoint&&localStorage.setItem("form-select-"+this.props.field.entryPoint+"-"+this.props.field.name,JSON.stringify(e)),this.props.field.instantRedirectUrl&&(window.location=this.props.field.instantRedirectUrl.replace("{value}",e.value)),this.props.field.dynamicFieldlist){var l=(0,r.default)({},this.props.field.name,e);if(this.props.field.dynamicFieldlistAdditionalFields&&this.props.field.dynamicFieldlistAdditionalFields.length>0)for(var o=this.props.field.dynamicFieldlistAdditionalFields,n=0;n<o.length;n++)l[o[n]]=this.props.data[o[n]];jQuery.post(this.props.field.dynamicFieldlistUrl,l).done((function(e){e&&e.matchingFields&&e.nonMatchingFields&&i.props.form.props.setFieldsFunction(i.props.form.props.name,e)}))}}},{key:"handleChangeDummy",value:function(e){}},{key:"render",value:function(){var e=this,t=null,i=null;if(!(0,c.default)(this.props.field,this.props.data,this.props.fields))return null;if(this.props.field.hidden)return null;this.props.field.label?t=u.default.createElement(u.default.Fragment,null,u.default.createElement("label",{htmlFor:this.props.field.name,className:this.props.field.required?"c4g-required":""},this.props.field.label)):this.props.field.placeholder&&(i=this.props.field.placeholder);var l=null;this.props.field.description&&(l=u.default.createElement("small",{className:"field-description form-text text-muted"},this.props.field.description));var o=[],r=null,s=null;if(this.props.field.options){if(this.props.field.cache&&this.props.field.entryPoint){var a=localStorage.getItem("form-select-"+this.props.field.entryPoint+"-"+this.props.field.name);!a||this.props.data[this.props.field.name]&&0!==this.props.data[this.props.field.name].length||(s=JSON.parse(a),this.props.data[this.props.field.name]=s)}if(this.props.field.grouped)o=this.props.field.options;else if(""!==this.props.field.emptyOptionLabel&&o.push({value:"",label:this.props.field.emptyOptionLabel}),Object.keys(this.props.field.options).forEach((function(t,i){o.push({value:e.props.field.options[t].value,label:e.props.field.options[t].label}),s?s.forEach((function(i,l){i.value===e.props.field.options[t].value&&(r={value:e.props.field.options[t].value,label:e.props.field.options[t].label})})):e.props.data[e.props.field.name]===e.props.field.options[t].value&&(r={value:e.props.field.options[t].value,label:e.props.field.options[t].label})})),!r&&this.props.field.selected){var p=this.props.field.selected;this.props.field.options.forEach((function(e){p===e.value&&(r={value:e.value,label:e.label})}),this)}var d="";this.props.field.hintText&&(d=u.default.createElement("div",{className:""},this.props.field.hintText));var f=null;if(this.props.field.required){var m="";this.props.data[this.props.field.name]&&(m=this.props.data[this.props.field.name].value?this.props.data[this.props.field.name].value:"object"===(0,n.default)(this.props.data[this.props.field.name])?"":this.props.data[this.props.field.name]);var v="";this.props.data[this.props.field.name]&&(v=this.props.data[this.props.field.name].value?this.props.data[this.props.field.name].value:"object"===(0,n.default)(this.props.data[this.props.field.name])?"":this.props.data[this.props.field.name]);var y=r||m;f=u.default.createElement("select",{tabIndex:-1,autoComplete:"off",style:{opacity:0,height:0,pointerEvents:"none"},value:y,required:this.props.field.required,onChange:this.handleChangeDummy,"aria-label":i},";",u.default.createElement("option",{value:y},v))}var b=this.props.field.name;return this.props.field.multiple&&this.props.field.synchronous&&(b+="[]"),u.default.createElement(u.default.Fragment,null,u.default.createElement(g,{data:this.props.data,conditions:this.props.field.conditions,field:this.props.field.name},u.default.createElement("div",{className:(this.props.field.className?this.props.field.className+" ":"")+"c4g-form-field"},t,this.props.errorText&&"string"==typeof this.props.errorText&&u.default.createElement("div",{className:"text-danger"},this.props.errorText),d,u.default.createElement(u.default.Fragment,null,u.default.createElement(h.default,{id:this.props.field.name,name:b,options:o,isMulti:this.props.field.multiple,required:this.props.field.required,onChange:this.handleChange,defaultValue:this.props.field.multiple?this.props.data[this.props.field.name]:r,placeholder:this.props.field.placeholder,"aria-label":i}),f),l)))}return""}},{key:"componentDidMount",value:function(){var e=!!this.props.data[this.props.field.name],t=this.props.field.selected,i=this.props.field.options[t]&&!!this.props.field.options[t].value;this.props.field.instantRedirectUrl||!e&&!i||this.handleChange(this.props.data[this.props.field.name],"")}}])}(u.Component)}}]);
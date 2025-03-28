/*! For license information please see 3143.bundle.ce4ff88446400614c0c1.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[658,3143],{40691:(e,t)=>{function i(e){if(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0){if(e.conditionField.length===e.conditionValue.length)return!0;if(e.conditionValue.length>1&&1===e.conditionField.length)return!0}return!1}function r(e,t){var i=!0;if(e.conditionField.length===e.conditionValue.length)e.conditionField.forEach((function(r,n){void 0===t[r]?i=!1:null===t[r]||t[r].value||String(t[r])===String(e.conditionValue[n])?(t[r]&&t[r].value&&String(t[r].value)!==String(e.conditionValue[n])||null===t[r]&&null!==e.conditionValue[n])&&(i=!1):i=!1}),this);else if(e.conditionValue.length>1&&1===e.conditionField.length){var r=e.conditionField[0];for(var n in i=!1,e.conditionValue)if(e.conditionValue.hasOwnProperty(n)){var o=e.conditionValue[n];if(t[r]&&t[r].value?t[r].value===o&&(i=!0):t[r]===o&&(i=!0),i)break}}return i}Object.defineProperty(t,"__esModule",{value:!0}),t.checkConditions=r,t.default=function(e,t,n){if(i(e)){var o=null;if(n.forEach((function(t,i){1===e.conditionField.length&&t.name===e.conditionField[0]&&(o=t)})),null!==o){return i(o)?r(o,t)&&r(e,t):r(e,t)}return r(e,t)}return!0},t.hasConditions=i},43143:(e,t,i)=>{var r=i(24994),n=i(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(i(43693)),l=r(i(17383)),a=r(i(34579)),s=r(i(28452)),p=r(i(63072)),d=r(i(29511)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var i=h(t);if(i&&i.has(e))return i.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var a=o?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(r,l,a):r[l]=e[l]}return r.default=e,i&&i.set(e,r),r}(i(96540)),u=r(i(40691)),c=r(i(70658));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(h=function(e){return e?i:t})(e)}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}t.default=function(e){function t(e){var i,r,n,o;return(0,l.default)(this,t),r=this,n=t,o=[e],n=(0,p.default)(n),(i=(0,s.default)(r,m()?Reflect.construct(n,o||[],(0,p.default)(r).constructor):n.apply(r,o))).cacheFromField=i.cacheFromField.bind(i),i.cacheUntilField=i.cacheUntilField.bind(i),i}return(0,d.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){if(!(0,u.default)(this.props.field,this.props.data,this.props.fields))return null;var e=this.createFromField(),t=this.createUntilField(),i=null,r=null;return this.props.field.descriptionLink&&this.props.field.descriptionLinkLabel&&(r=f.default.createElement("a",{className:"form-description-link btn btn-info btn-sm",href:this.props.field.descriptionLink,target:"_blank"}," ",this.props.field.descriptionLinkLabel)),this.props.field.description&&(i=f.default.createElement("span",{className:"c4g-field-description c4g-form-text"},this.props.field.description," ",r)),f.default.createElement("div",{className:this.props.field.className},f.default.createElement("div",{className:this.props.field.headline.headlineClass},this.props.field.headline),f.default.createElement(c.default,{field:e,data:this.props.data,form:this.props.form,errorText:this.props.errorText}),f.default.createElement(c.default,{field:t,data:this.props.data,form:this.props.form,errorText:this.props.errorText}),i)}},{key:"createFromField",value:function(){var e=JSON.parse(JSON.stringify(this.props.field));if(e.name=this.props.field.fromFieldname,e.placeholderText=this.props.field.fromPlaceholderText,this.props.field.cache&&this.props.field.entryPoint){e.onChange=this.cacheFromField;var t=localStorage.getItem("form-daterange-"+this.props.field.entryPoint+"-"+e.name);t&&(e.selected=new Date(1e3*t),e.fromFieldname=t)}return this.transformField(e)}},{key:"createUntilField",value:function(){var e=JSON.parse(JSON.stringify(this.props.field));if(e.name=this.props.field.untilFieldname,e.placeholderText=this.props.field.untilPlaceholderText,this.props.field.cache&&this.props.field.entryPoint){e.onChange=this.cacheUntilField;var t=localStorage.getItem("form-daterange-"+this.props.field.entryPoint+"-"+e.name);t&&(e.selected=new Date(1e3*t),e.untilFieldname=t)}return this.transformField(e)}},{key:"cacheFromField",value:function(e,t){null!==e?this.props.form.props.updateFunction(this.props.form.props.name,(0,o.default)({},this.props.field.fromFieldname,e.getTime()/1e3),JSON.parse(JSON.stringify(this.props.field))):this.props.form.props.updateFunction(this.props.form.props.name,(0,o.default)({},this.props.field.fromFieldname,""),JSON.parse(JSON.stringify(this.props.field)));var i="";this.props.field.cache&&this.props.field.entryPoint&&(null!==e&&(i=e.getTime()/1e3),localStorage.setItem("form-daterange-"+this.props.field.entryPoint+"-"+this.props.field.fromFieldname,i)),t.preventDefault()}},{key:"cacheUntilField",value:function(e,t){null!==e?this.props.form.props.updateFunction(this.props.form.props.name,(0,o.default)({},this.props.field.untilFieldname,e.getTime()/1e3),JSON.parse(JSON.stringify(this.props.field))):this.props.form.props.updateFunction(this.props.form.props.name,(0,o.default)({},this.props.field.untilFieldname,""),JSON.parse(JSON.stringify(this.props.field)));var i="";this.props.field.cache&&this.props.field.entryPoint&&(null!==e&&(i=e.getTime()/1e3),localStorage.setItem("form-daterange-"+this.props.field.entryPoint+"-"+this.props.field.untilFieldname,i)),t.preventDefault()}},{key:"transformField",value:function(e){return e.label="",e.description="",e}}])}(f.Component)},70658:(e,t,i)=>{var r=i(24994),n=i(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(i(43693)),l=r(i(17383)),a=r(i(34579)),s=r(i(28452)),p=r(i(63072)),d=r(i(29511)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var i=h(t);if(i&&i.has(e))return i.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var a=o?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(r,l,a):r[l]=e[l]}return r.default=e,i&&i.set(e,r),r}(i(96540)),u=r(i(59386));i(596);var c=r(i(40691));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(h=function(e){return e?i:t})(e)}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}var v=f.default.lazy((function(){return i.e(6992).then(i.bind(i,76992))}));t.default=function(e){function t(e){var i,r,n,o;return(0,l.default)(this,t),r=this,n=t,o=[e],n=(0,p.default)(n),(i=(0,s.default)(r,m()?Reflect.construct(n,o||[],(0,p.default)(r).constructor):n.apply(r,o))).pickerRef=null,i.handleChange=i.handleChange.bind(i),i.handleChangeRaw=i.handleChangeRaw.bind(i),i}return(0,d.default)(t,e),(0,a.default)(t,[{key:"handleChange",value:function(e,t){null!==e?this.props.form.props.updateFunction(this.props.form.props.name,(0,o.default)({},this.props.field.name,e.getTime()/1e3),this.props.field):this.props.form.props.updateFunction(this.props.form.props.name,(0,o.default)({},this.props.field.name,""),this.props.field),t.preventDefault()}},{key:"handleChangeRaw",value:function(e){e.preventDefault()}},{key:"render",value:function(){if(!(0,c.default)(this.props.field,this.props.data,this.props.fields))return null;var e=null;this.props.field.label&&(e=this.props.field.label);var t=null;this.props.field.description&&(t=this.props.field.description);var i,r="";this.props.field.className&&(r=this.props.field.className+(this.props.errorText&&"string"==typeof this.props.errorText?" is-invalid":"")),"Invalid Date"===(i=""===this.props.data[this.props.field.name]?null:this.props.data[this.props.field.name]?new Date(1e3*this.props.data[this.props.field.name]):this.props.field.value?new Date(1e3*this.props.field.value):null)&&(i=null);var n=this.props.field.locale;"de"===n&&(n=this.createDeLocale());var o=f.default.createElement("input",{type:"text",name:this.props.field.name,placeholder:this.props.field.placeholderText,autoComplete:"off",className:r+" react-datepicker-ignore-onclickoutside",value:"","aria-label":this.props.field.placeholderText,id:this.props.field.name});return f.default.createElement(v,{data:this.props.data,conditions:this.props.field.conditions,field:this.props.field.name},f.default.createElement("div",{className:"c4g-form-field form-group "+this.props.field.name},f.default.createElement("label",{className:this.props.field.required?"c4g-required":null},e),f.default.createElement(u.default,{customInput:o,selected:this.props.field.selected?this.props.field.selected:i,onChange:this.props.field.onChange?this.props.field.onChange:this.handleChange,onChangeRaw:this.handleChangeRaw,name:this.props.field.name,isClearable:!0,placeholderText:this.props.field.placeholderText,required:this.props.field.required,dateFormat:this.props.field.dateFormat,showTimeSelect:this.props.field.showTimeSelect,showMonthDropdown:!this.props.field.showTimeSelectOnly,showYearDropdown:!this.props.field.showTimeSelectOnly,scrollableYearDropdown:!this.props.field.showTimeSelectOnly,timeCaption:this.props.field.timeCaption,allowSameDay:!0,locale:n,popperPlacement:"bottom-end",customInputRef:"ref",ref:this.pickerRef,customRef:this.pickerRef,autoComplete:"off",shouldCloseOnSelect:!0,dropdownMode:"scroll",id:this.props.field.name}),f.default.createElement("small",{className:"field-description form-text text-muted"},t)))}},{key:"createDeLocale",value:function(){var e=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],t=["So","Mo","Di","Mi","Do","Fr","Sa"];return{localize:{month:function(t){return e[t]},day:function(e){return t[e]}},formatLong:{},options:{weekStartsOn:1},match:function(e){return!0}}}},{key:"componentDidMount",value:function(){null!==this.pickerRef&&jQuery(this.pickerRef).trigger("change")}}])}(f.Component)}}]);
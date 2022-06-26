/*! For license information please see 1031.bundle.3bbb7b8880344d2f9c5b.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[1031,6616],{61031:(e,t,i)=>{var r=i(95318),n=i(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(i(59713)),l=r(i(34575)),a=r(i(93913)),s=r(i(81506)),p=r(i(2205)),f=r(i(78585)),d=r(i(29754)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var i=m(t);if(i&&i.has(e))return i.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var a=o?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(r,l,a):r[l]=e[l]}r.default=e,i&&i.set(e,r);return r}(i(67294)),c=r(i(20349)),h=r(i(16616));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(m=function(e){return e?i:t})(e)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=(0,d.default)(e);if(t){var n=(0,d.default)(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return(0,f.default)(this,i)}}var g=function(e){(0,p.default)(i,e);var t=v(i);function i(e){var r;return(0,l.default)(this,i),(r=t.call(this,e)).cacheFromField=r.cacheFromField.bind((0,s.default)(r)),r.cacheUntilField=r.cacheUntilField.bind((0,s.default)(r)),r}return(0,a.default)(i,[{key:"render",value:function(){if(!(0,c.default)(this.props.field,this.props.data,this.props.fields))return null;var e=this.createFromField(),t=this.createUntilField(),i=null,r=null;return this.props.field.descriptionLink&&this.props.field.descriptionLinkLabel&&(r=u.default.createElement("a",{className:"form-description-link btn btn-info btn-sm",href:this.props.field.descriptionLink,target:"_blank"}," ",this.props.field.descriptionLinkLabel)),this.props.field.description&&(i=u.default.createElement("span",{className:"c4g-field-description c4g-form-text"},this.props.field.description," ",r)),u.default.createElement("div",{className:this.props.field.className},u.default.createElement("div",{className:this.props.field.headline.headlineClass},this.props.field.headline),u.default.createElement(h.default,{field:e,data:this.props.data,form:this.props.form,errorText:this.props.errorText}),u.default.createElement(h.default,{field:t,data:this.props.data,form:this.props.form,errorText:this.props.errorText}),i)}},{key:"createFromField",value:function(){var e=JSON.parse(JSON.stringify(this.props.field));if(e.name=this.props.field.fromFieldname,e.placeholderText=this.props.field.fromPlaceholderText,this.props.field.cache&&this.props.field.entryPoint){e.onChange=this.cacheFromField;var t=localStorage.getItem("form-daterange-"+this.props.field.entryPoint+"-"+e.name);t&&(e.selected=new Date(1e3*t),e.fromFieldname=t)}return this.transformField(e)}},{key:"createUntilField",value:function(){var e=JSON.parse(JSON.stringify(this.props.field));if(e.name=this.props.field.untilFieldname,e.placeholderText=this.props.field.untilPlaceholderText,this.props.field.cache&&this.props.field.entryPoint){e.onChange=this.cacheUntilField;var t=localStorage.getItem("form-daterange-"+this.props.field.entryPoint+"-"+e.name);t&&(e.selected=new Date(1e3*t),e.untilFieldname=t)}return this.transformField(e)}},{key:"cacheFromField",value:function(e,t){null!==e?this.props.form.props.updateFunction(this.props.form.props.name,(0,o.default)({},this.props.field.fromFieldname,e.getTime()/1e3),JSON.parse(JSON.stringify(this.props.field))):this.props.form.props.updateFunction(this.props.form.props.name,(0,o.default)({},this.props.field.fromFieldname,""),JSON.parse(JSON.stringify(this.props.field)));var i="";this.props.field.cache&&this.props.field.entryPoint&&(null!==e&&(i=e.getTime()/1e3),localStorage.setItem("form-daterange-"+this.props.field.entryPoint+"-"+this.props.field.fromFieldname,i)),t.preventDefault()}},{key:"cacheUntilField",value:function(e,t){null!==e?this.props.form.props.updateFunction(this.props.form.props.name,(0,o.default)({},this.props.field.untilFieldname,e.getTime()/1e3),JSON.parse(JSON.stringify(this.props.field))):this.props.form.props.updateFunction(this.props.form.props.name,(0,o.default)({},this.props.field.untilFieldname,""),JSON.parse(JSON.stringify(this.props.field)));var i="";this.props.field.cache&&this.props.field.entryPoint&&(null!==e&&(i=e.getTime()/1e3),localStorage.setItem("form-daterange-"+this.props.field.entryPoint+"-"+this.props.field.untilFieldname,i)),t.preventDefault()}},{key:"transformField",value:function(e){return e.label="",e.description="",e}}]),i}(u.Component);t.default=g},16616:(e,t,i)=>{var r=i(95318),n=i(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(i(59713)),l=r(i(34575)),a=r(i(93913)),s=r(i(81506)),p=r(i(2205)),f=r(i(78585)),d=r(i(29754)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var i=m(t);if(i&&i.has(e))return i.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var a=o?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(r,l,a):r[l]=e[l]}r.default=e,i&&i.set(e,r);return r}(i(67294)),c=r(i(9198));i(59339);var h=r(i(20349));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(m=function(e){return e?i:t})(e)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=(0,d.default)(e);if(t){var n=(0,d.default)(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return(0,f.default)(this,i)}}var g=function(e){(0,p.default)(i,e);var t=v(i);function i(e){var r;return(0,l.default)(this,i),(r=t.call(this,e)).pickerRef=null,r.handleChange=r.handleChange.bind((0,s.default)(r)),r.handleChangeRaw=r.handleChangeRaw.bind((0,s.default)(r)),r}return(0,a.default)(i,[{key:"handleChange",value:function(e,t){null!==e?this.props.form.props.updateFunction(this.props.form.props.name,(0,o.default)({},this.props.field.name,e.getTime()/1e3),this.props.field):this.props.form.props.updateFunction(this.props.form.props.name,(0,o.default)({},this.props.field.name,""),this.props.field),t.preventDefault()}},{key:"handleChangeRaw",value:function(e){e.preventDefault()}},{key:"render",value:function(){if(!(0,h.default)(this.props.field,this.props.data,this.props.fields))return null;var e=null;this.props.field.label&&(e=this.props.field.label);var t=null;this.props.field.description&&(t=this.props.field.description);var i,r="";this.props.field.className&&(r=this.props.field.className+(this.props.errorText&&"string"==typeof this.props.errorText?" is-invalid":"")),"Invalid Date"===(i=""===this.props.data[this.props.field.name]?null:this.props.data[this.props.field.name]?new Date(1e3*this.props.data[this.props.field.name]):this.props.field.value?new Date(1e3*this.props.field.value):null)&&(i=null);var n=this.props.field.locale;"de"===n&&(n=this.createDeLocale());var o=u.default.createElement("input",{type:"text",name:this.props.field.name,placeholder:this.props.field.placeholderText,autoComplete:"off",className:r+" react-datepicker-ignore-onclickoutside",value:"","aria-label":this.props.field.placeholderText,id:this.props.field.name});return u.default.createElement("div",{className:"c4g-form-field form-group "+this.props.field.name},u.default.createElement("label",{className:this.props.field.required?"c4g-required":null},e),u.default.createElement(c.default,{customInput:o,selected:this.props.field.selected?this.props.field.selected:i,onChange:this.props.field.onChange?this.props.field.onChange:this.handleChange,onChangeRaw:this.handleChangeRaw,name:this.props.field.name,isClearable:!0,placeholderText:this.props.field.placeholderText,required:this.props.field.required,dateFormat:this.props.field.dateFormat,showTimeSelect:this.props.field.showTimeSelect,showMonthDropdown:!this.props.field.showTimeSelectOnly,timeCaption:this.props.field.timeCaption,allowSameDay:!0,locale:n,popperPlacement:"bottom-end",customInputRef:"ref",ref:this.pickerRef,customRef:this.pickerRef,autoComplete:"off",shouldCloseOnSelect:!0,dropdownMode:"scroll",id:this.props.field.name}),u.default.createElement("small",{className:"field-description form-text text-muted"},t))}},{key:"createDeLocale",value:function(){var e=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],t=["So","Mo","Di","Mi","Do","Fr","Sa"];return{localize:{month:function(t){return e[t]},day:function(e){return t[e]}},formatLong:{},options:{weekStartsOn:1},match:function(e){return!0}}}},{key:"componentDidMount",value:function(){null!==this.pickerRef&&jQuery(this.pickerRef).trigger("change")}}]),i}(u.Component);t.default=g},20349:(e,t)=>{function i(e){if(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0){if(e.conditionField.length===e.conditionValue.length)return!0;if(e.conditionValue.length>1&&1===e.conditionField.length)return!0}return!1}function r(e,t){var i=!0;if(e.conditionField.length===e.conditionValue.length)e.conditionField.forEach((function(r,n){void 0===t[r]?i=!1:null===t[r]||t[r].value||String(t[r])===String(e.conditionValue[n])?(t[r]&&t[r].value&&String(t[r].value)!==String(e.conditionValue[n])||null===t[r]&&null!==e.conditionValue[n])&&(i=!1):i=!1}),this);else if(e.conditionValue.length>1&&1===e.conditionField.length){var r=e.conditionField[0];for(var n in i=!1,e.conditionValue)if(e.conditionValue.hasOwnProperty(n)){var o=e.conditionValue[n];if(t[r]&&t[r].value?t[r].value===o&&(i=!0):t[r]===o&&(i=!0),i)break}}return i}Object.defineProperty(t,"__esModule",{value:!0}),t.checkConditions=r,t.default=function(e,t,n){if(i(e)){var o=null;if(n.forEach((function(t,i){1===e.conditionField.length&&t.name===e.conditionField[0]&&(o=t)})),null!==o){return i(o)?r(o,t)&&r(e,t):r(e,t)}return r(e,t)}return!0},t.hasConditions=i}}]);
/*! For license information please see 1031.bundle.7e5192b31415a88e03a3.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[1031,6616],{61031:(e,t,r)=>{var i=r(95318),n=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(r(59713)),o=i(r(34575)),a=i(r(93913)),s=i(r(81506)),p=i(r(2205)),f=i(r(78585)),d=i(r(29754)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var i={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=l?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(i,o,a):i[o]=e[o]}i.default=e,r&&r.set(e,i);return i}(r(67294)),c=i(r(20349)),h=i(r(16616));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=(0,d.default)(e);if(t){var n=(0,d.default)(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return(0,f.default)(this,r)}}var g=function(e){(0,p.default)(r,e);var t=v(r);function r(e){var i;return(0,o.default)(this,r),(i=t.call(this,e)).cacheFromField=i.cacheFromField.bind((0,s.default)(i)),i.cacheUntilField=i.cacheUntilField.bind((0,s.default)(i)),i}return(0,a.default)(r,[{key:"render",value:function(){if(!(0,c.default)(this.props.field,this.props.data,this.props.fields))return null;var e=this.createFromField(),t=this.createUntilField(),r=null,i=null;return this.props.field.descriptionLink&&this.props.field.descriptionLinkLabel&&(i=u.default.createElement("a",{className:"form-description-link btn btn-info btn-sm",href:this.props.field.descriptionLink,target:"_blank"}," ",this.props.field.descriptionLinkLabel)),this.props.field.description&&(r=u.default.createElement("span",{className:"c4g-field-description c4g-form-text"},this.props.field.description," ",i)),u.default.createElement("div",{className:this.props.field.className},u.default.createElement("div",{className:this.props.field.headline.headlineClass},this.props.field.headline),u.default.createElement(h.default,{field:e,data:this.props.data,form:this.props.form,errorText:this.props.errorText}),u.default.createElement(h.default,{field:t,data:this.props.data,form:this.props.form,errorText:this.props.errorText}),r)}},{key:"createFromField",value:function(){var e=JSON.parse(JSON.stringify(this.props.field));if(e.name=this.props.field.fromFieldname,e.placeholderText=this.props.field.fromPlaceholderText,this.props.field.cache){e.onChange=this.cacheFromField;var t=localStorage.getItem("form-daterange-"+e.name);t&&(e.selected=new Date(1e3*t))}return this.transformField(e)}},{key:"createUntilField",value:function(){var e=JSON.parse(JSON.stringify(this.props.field));if(e.name=this.props.field.untilFieldname,e.placeholderText=this.props.field.untilPlaceholderText,this.props.field.cache){e.onChange=this.cacheUntilField;var t=localStorage.getItem("form-daterange-"+e.name);t&&(e.selected=new Date(1e3*t))}return this.transformField(e)}},{key:"cacheFromField",value:function(e,t){null!==e?this.props.form.props.updateFunction(this.props.form.props.name,(0,l.default)({},this.props.field.fromFieldname,e.getTime()/1e3),JSON.parse(JSON.stringify(this.props.field))):this.props.form.props.updateFunction(this.props.form.props.name,(0,l.default)({},this.props.field.fromFieldname,""),JSON.parse(JSON.stringify(this.props.field)));var r="";this.props.field.cache&&(null!==e&&(r=e.getTime()/1e3),localStorage.setItem("form-daterange-"+this.props.field.fromFieldname,r)),t.preventDefault()}},{key:"cacheUntilField",value:function(e,t){null!==e?this.props.form.props.updateFunction(this.props.form.props.name,(0,l.default)({},this.props.field.untilFieldname,e.getTime()/1e3),JSON.parse(JSON.stringify(this.props.field))):this.props.form.props.updateFunction(this.props.form.props.name,(0,l.default)({},this.props.field.untilFieldname,""),JSON.parse(JSON.stringify(this.props.field)));var r="";this.props.field.cache&&(null!==e&&(r=e.getTime()/1e3),localStorage.setItem("form-daterange-"+this.props.field.untilFieldname,r)),t.preventDefault()}},{key:"transformField",value:function(e){return e.label="",e.description="",e}}]),r}(u.Component);t.default=g},16616:(e,t,r)=>{var i=r(95318),n=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(r(59713)),o=i(r(34575)),a=i(r(93913)),s=i(r(81506)),p=i(r(2205)),f=i(r(78585)),d=i(r(29754)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var i={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=l?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(i,o,a):i[o]=e[o]}i.default=e,r&&r.set(e,i);return i}(r(67294)),c=i(r(9198));r(59339);var h=i(r(20349));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=(0,d.default)(e);if(t){var n=(0,d.default)(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return(0,f.default)(this,r)}}var g=function(e){(0,p.default)(r,e);var t=v(r);function r(e){var i;return(0,o.default)(this,r),(i=t.call(this,e)).pickerRef=null,i.handleChange=i.handleChange.bind((0,s.default)(i)),i.handleChangeRaw=i.handleChangeRaw.bind((0,s.default)(i)),i}return(0,a.default)(r,[{key:"handleChange",value:function(e,t){null!==e?this.props.form.props.updateFunction(this.props.form.props.name,(0,l.default)({},this.props.field.name,e.getTime()/1e3),this.props.field):this.props.form.props.updateFunction(this.props.form.props.name,(0,l.default)({},this.props.field.name,""),this.props.field),t.preventDefault()}},{key:"handleChangeRaw",value:function(e){e.preventDefault()}},{key:"render",value:function(){if(!(0,h.default)(this.props.field,this.props.data,this.props.fields))return null;var e=null;this.props.field.label&&(e=this.props.field.label);var t=null;this.props.field.description&&(t=this.props.field.description);var r,i="";this.props.field.className&&(i=this.props.field.className+(this.props.errorText&&"string"==typeof this.props.errorText?" is-invalid":"")),"Invalid Date"===(r=""===this.props.data[this.props.field.name]?null:this.props.data[this.props.field.name]?new Date(1e3*this.props.data[this.props.field.name]):this.props.field.value?new Date(1e3*this.props.field.value):null)&&(r=null);var n=this.props.field.locale;"de"===n&&(n=this.createDeLocale());var l=u.default.createElement("input",{type:"text",name:this.props.field.name,placeholder:this.props.field.placeholderText,autoComplete:"off",className:i+" react-datepicker-ignore-onclickoutside",value:"","aria-label":this.props.field.placeholderText,id:this.props.field.name});return u.default.createElement("div",{className:"c4g-form-field form-group "+this.props.field.name},u.default.createElement("label",{className:this.props.field.required?"c4g-required":null},e),u.default.createElement(c.default,{customInput:l,selected:this.props.field.selected?this.props.field.selected:r,onChange:this.props.field.onChange?this.props.field.onChange:this.handleChange,onChangeRaw:this.handleChangeRaw,name:this.props.field.name,isClearable:!0,placeholderText:this.props.field.placeholderText,required:this.props.field.required,dateFormat:this.props.field.dateFormat,showTimeSelect:this.props.field.showTimeSelect,showMonthDropdown:!this.props.field.showTimeSelectOnly,timeCaption:this.props.field.timeCaption,allowSameDay:!0,locale:n,popperPlacement:"bottom-end",customInputRef:"ref",ref:this.pickerRef,customRef:this.pickerRef,autoComplete:"off",shouldCloseOnSelect:!0,dropdownMode:"scroll",id:this.props.field.name}),u.default.createElement("small",{className:"field-description form-text text-muted"},t))}},{key:"createDeLocale",value:function(){var e=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],t=["So","Mo","Di","Mi","Do","Fr","Sa"];return{localize:{month:function(t){return e[t]},day:function(e){return t[e]}},formatLong:{},options:{weekStartsOn:1},match:function(e){return!0}}}},{key:"componentDidMount",value:function(){null!==this.pickerRef&&jQuery(this.pickerRef).trigger("change")}}]),r}(u.Component);t.default=g},20349:(e,t)=>{function r(e){if(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0){if(e.conditionField.length===e.conditionValue.length)return!0;if(e.conditionValue.length>1&&1===e.conditionField.length)return!0}return!1}function i(e,t){var r=!0;if(e.conditionField.length===e.conditionValue.length)e.conditionField.forEach((function(i,n){void 0===t[i]?r=!1:null===t[i]||t[i].value||String(t[i])===String(e.conditionValue[n])?(t[i]&&t[i].value&&String(t[i].value)!==String(e.conditionValue[n])||null===t[i]&&null!==e.conditionValue[n])&&(r=!1):r=!1}),this);else if(e.conditionValue.length>1&&1===e.conditionField.length){var i=e.conditionField[0];for(var n in r=!1,e.conditionValue)if(e.conditionValue.hasOwnProperty(n)){var l=e.conditionValue[n];if(t[i]&&t[i].value?t[i].value===l&&(r=!0):t[i]===l&&(r=!0),r)break}}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.checkConditions=i,t.default=function(e,t,n){if(r(e)){var l=null;if(n.forEach((function(t,r){1===e.conditionField.length&&t.name===e.conditionField[0]&&(l=t)})),null!==l){return r(l)?i(l,t)&&i(e,t):i(e,t)}return i(e,t)}return!0},t.hasConditions=r}}]);
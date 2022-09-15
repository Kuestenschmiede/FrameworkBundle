/*! For license information please see 6616.bundle.2927c491cca7def9eedd.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[6616],{16616:(e,t,n)=>{var i=n(64836),o=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(38416)),l=i(n(56690)),a=i(n(89728)),s=i(n(66115)),p=i(n(61655)),d=i(n(94993)),u=i(n(73808)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var a=r?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(i,l,a):i[l]=e[l]}i.default=e,n&&n.set(e,i);return i}(n(67294)),c=i(n(9198));n(59339);var h=i(n(20349));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,u.default)(e);if(t){var o=(0,u.default)(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return(0,d.default)(this,n)}}var g=f.default.lazy((function(){return n.e(1732).then(n.bind(n,41732))})),y=function(e){(0,p.default)(n,e);var t=v(n);function n(e){var i;return(0,l.default)(this,n),(i=t.call(this,e)).pickerRef=null,i.handleChange=i.handleChange.bind((0,s.default)(i)),i.handleChangeRaw=i.handleChangeRaw.bind((0,s.default)(i)),i}return(0,a.default)(n,[{key:"handleChange",value:function(e,t){null!==e?this.props.form.props.updateFunction(this.props.form.props.name,(0,r.default)({},this.props.field.name,e.getTime()/1e3),this.props.field):this.props.form.props.updateFunction(this.props.form.props.name,(0,r.default)({},this.props.field.name,""),this.props.field),t.preventDefault()}},{key:"handleChangeRaw",value:function(e){e.preventDefault()}},{key:"render",value:function(){if(!(0,h.default)(this.props.field,this.props.data,this.props.fields))return null;var e=null;this.props.field.label&&(e=this.props.field.label);var t=null;this.props.field.description&&(t=this.props.field.description);var n,i="";this.props.field.className&&(i=this.props.field.className+(this.props.errorText&&"string"==typeof this.props.errorText?" is-invalid":"")),"Invalid Date"===(n=""===this.props.data[this.props.field.name]?null:this.props.data[this.props.field.name]?new Date(1e3*this.props.data[this.props.field.name]):this.props.field.value?new Date(1e3*this.props.field.value):null)&&(n=null);var o=this.props.field.locale;"de"===o&&(o=this.createDeLocale());var r=f.default.createElement("input",{type:"text",name:this.props.field.name,placeholder:this.props.field.placeholderText,autoComplete:"off",className:i+" react-datepicker-ignore-onclickoutside",value:"","aria-label":this.props.field.placeholderText,id:this.props.field.name});return f.default.createElement(g,{data:this.props.data,conditions:this.props.field.conditions,field:this.props.field.name},f.default.createElement("div",{className:"c4g-form-field form-group "+this.props.field.name},f.default.createElement("label",{className:this.props.field.required?"c4g-required":null},e),f.default.createElement(c.default,{customInput:r,selected:this.props.field.selected?this.props.field.selected:n,onChange:this.props.field.onChange?this.props.field.onChange:this.handleChange,onChangeRaw:this.handleChangeRaw,name:this.props.field.name,isClearable:!0,placeholderText:this.props.field.placeholderText,required:this.props.field.required,dateFormat:this.props.field.dateFormat,showTimeSelect:this.props.field.showTimeSelect,showMonthDropdown:!this.props.field.showTimeSelectOnly,showYearDropdown:!this.props.field.showTimeSelectOnly,scrollableYearDropdown:!this.props.field.showTimeSelectOnly,timeCaption:this.props.field.timeCaption,allowSameDay:!0,locale:o,popperPlacement:"bottom-end",customInputRef:"ref",ref:this.pickerRef,customRef:this.pickerRef,autoComplete:"off",shouldCloseOnSelect:!0,dropdownMode:"scroll",id:this.props.field.name}),f.default.createElement("small",{className:"field-description form-text text-muted"},t)))}},{key:"createDeLocale",value:function(){var e=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],t=["So","Mo","Di","Mi","Do","Fr","Sa"];return{localize:{month:function(t){return e[t]},day:function(e){return t[e]}},formatLong:{},options:{weekStartsOn:1},match:function(e){return!0}}}},{key:"componentDidMount",value:function(){null!==this.pickerRef&&jQuery(this.pickerRef).trigger("change")}}]),n}(f.Component);t.default=y},20349:(e,t)=>{function n(e){if(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0){if(e.conditionField.length===e.conditionValue.length)return!0;if(e.conditionValue.length>1&&1===e.conditionField.length)return!0}return!1}function i(e,t){var n=!0;if(e.conditionField.length===e.conditionValue.length)e.conditionField.forEach((function(i,o){void 0===t[i]?n=!1:null===t[i]||t[i].value||String(t[i])===String(e.conditionValue[o])?(t[i]&&t[i].value&&String(t[i].value)!==String(e.conditionValue[o])||null===t[i]&&null!==e.conditionValue[o])&&(n=!1):n=!1}),this);else if(e.conditionValue.length>1&&1===e.conditionField.length){var i=e.conditionField[0];for(var o in n=!1,e.conditionValue)if(e.conditionValue.hasOwnProperty(o)){var r=e.conditionValue[o];if(t[i]&&t[i].value?t[i].value===r&&(n=!0):t[i]===r&&(n=!0),n)break}}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.checkConditions=i,t.default=function(e,t,o){if(n(e)){var r=null;if(o.forEach((function(t,n){1===e.conditionField.length&&t.name===e.conditionField[0]&&(r=t)})),null!==r){return n(r)?i(r,t)&&i(e,t):i(e,t)}return i(e,t)}return!0},t.hasConditions=n}}]);
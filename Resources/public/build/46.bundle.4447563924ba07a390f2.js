/*! For license information please see 46.bundle.4447563924ba07a390f2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1137:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var l=m(t(30)),s=m(t(52)),a=m(t(51)),o=m(t(45)),p=m(t(46)),n=m(t(47)),r=m(t(48)),d=m(t(49)),f=t(17),u=m(f),h=m(t(749)),c=m(t(128));function m(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function i(e){(0,p.default)(this,i);var t=(0,r.default)(this,(i.__proto__||(0,o.default)(i)).call(this,e));return t.handleChange=t.handleChange.bind(t),t}return(0,d.default)(i,e),(0,n.default)(i,[{key:"handleChange",value:function(e,i){var t=this;if(this.props.form.props.updateFunction(this.props.form.props.name,(0,a.default)({},this.props.field.name,e)),this.props.field.dynamicFieldlist){var l=(0,a.default)({},this.props.field.name,e);if(this.props.field.dynamicFieldlistAdditionalFields&&this.props.field.dynamicFieldlistAdditionalFields.length>0)for(var s=this.props.field.dynamicFieldlistAdditionalFields,o=0;o<s.length;o++)l[s[o]]=this.props.data[s[o]];jQuery.post(this.props.field.dynamicFieldlistUrl,l).done((function(e){e&&e.matchingFields&&e.nonMatchingFields&&t.props.form.props.setFieldsFunction(t.props.form.props.name,e)}))}}},{key:"handleChangeDummy",value:function(e){}},{key:"render",value:function(){var e=this,i=null,t=null;if(!(0,c.default)(this.props.field,this.props.data))return null;if(this.props.field.hidden)return null;this.props.field.label?i=u.default.createElement(u.default.Fragment,null,u.default.createElement("label",{htmlFor:this.props.field.name,className:this.props.field.required?"c4g-required":""},this.props.field.label)):this.props.field.placeholder&&(t=this.props.field.placeholder);var a=null;this.props.field.description&&(a=u.default.createElement("small",{className:"field-description form-text text-muted"},this.props.field.description));var o=[],p=null;if(this.props.field.options){if(this.props.field.grouped)o=this.props.field.options;else""!==this.props.field.emptyOptionLabel&&o.push({value:"",label:this.props.field.emptyOptionLabel}),(0,s.default)(this.props.field.options).forEach((function(i,t){o.push({value:e.props.field.options[i].value,label:e.props.field.options[i].label}),e.props.data[e.props.field.name]===e.props.field.options[i].value&&(p={value:e.props.field.options[i].value,label:e.props.field.options[i].label})}));var n="";this.props.field.hintText&&(n=u.default.createElement("div",{className:""},this.props.field.hintText));var r=null;if(this.props.field.required){var d="";this.props.data[this.props.field.name]&&(d=this.props.data[this.props.field.name].value?this.props.data[this.props.field.name].value:"object"===(0,l.default)(this.props.data[this.props.field.name])?"":this.props.data[this.props.field.name]);var f="";this.props.data[this.props.field.name]&&(f=this.props.data[this.props.field.name].value?this.props.data[this.props.field.name].value:"object"===(0,l.default)(this.props.data[this.props.field.name])?"":this.props.data[this.props.field.name]),r=u.default.createElement("select",{tabIndex:-1,autoComplete:"off",style:{opacity:0,height:0,pointerEvents:"none"},value:d,required:this.props.field.required,onChange:this.handleChangeDummy,"aria-label":t},u.default.createElement("option",{value:d},f))}var m=this.props.field.name;return this.props.field.multiple&&this.props.field.synchronous&&(m+="[]"),u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{className:(this.props.field.className?this.props.field.className+" ":"")+"c4g-form-field"},i,this.props.errorText&&"string"==typeof this.props.errorText&&u.default.createElement("div",{className:"text-danger"},this.props.errorText),n,u.default.createElement(u.default.Fragment,null,u.default.createElement(h.default,{id:this.props.field.name,name:m,options:o,isMulti:this.props.field.multiple,required:this.props.field.required,onChange:this.handleChange,defaultValue:this.props.field.multiple?this.props.data[this.props.field.name]:p,placeholder:this.props.field.placeholder,"aria-label":t}),r),a))}return""}},{key:"componentDidMount",value:function(){this.props.data[this.props.field.name]&&this.handleChange(this.props.data[this.props.field.name],"")}}]),i}(f.Component);i.default=v},128:function(e,i,t){"use strict";function l(e){return!!(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0&&e.conditionField.length===e.conditionValue.length)}function s(e,i){var t=!0;return e.conditionField.forEach((function(l,s){void 0===i[l]?t=!1:null===i[l]||i[l].value||String(i[l])===String(e.conditionValue[s])?(i[l]&&i[l].value&&String(i[l].value)!==String(e.conditionValue[s])||null===i[l]&&null!==e.conditionValue[s])&&(t=!1):t=!1}),this),t}Object.defineProperty(i,"__esModule",{value:!0}),i.hasConditions=l,i.checkConditions=s,i.default=function(e,i){return!l(e)||s(e,i)}}}]);
/*! For license information please see 49.bundle.48727d90a6ad418de753.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{130:function(e,t,i){"use strict";function n(e){return!!(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0&&e.conditionField.length===e.conditionValue.length)}function r(e,t){var i=!0;return e.conditionField.forEach((function(n,r){void 0===t[n]?i=!1:null===t[n]||t[n].value||String(t[n])===String(e.conditionValue[r])?(t[n]&&t[n].value&&String(t[n].value)!==String(e.conditionValue[r])||null===t[n]&&null!==e.conditionValue[r])&&(i=!1):i=!1}),this),i}Object.defineProperty(t,"__esModule",{value:!0}),t.hasConditions=n,t.checkConditions=r,t.default=function(e,t){return!n(e)||r(e,t)}},1470:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(i(51)),r=f(i(45)),l=f(i(46)),a=f(i(47)),o=f(i(48)),s=f(i(49)),p=i(17),u=f(p),d=f(i(130));function f(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){(0,l.default)(this,t);var i=(0,o.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return i.regex={fullPattern:"^(([0-9])|([0-1][0-9])|(2[0-3])):([0-5][0-9])$",full:new RegExp("^(([0-9])|([0-1][0-9])|(2[0-3])):([0-5][0-9])$")},i.handleChange=i.handleChange.bind(i),i}return(0,s.default)(t,e),(0,a.default)(t,[{key:"handleChange",value:function(e){var t=e.target.value;if(!0===this.regex.full.test(t)){var i=t.split(":"),r=parseInt(i[0]),l=parseInt(i[1]);this.props.form.props.updateFunction(this.props.form.props.name,(0,n.default)({},this.props.field.name,3600*r+60*l))}else if(4===t.length){var a=t.split("");if(!0===this.regex.full.test(a[0]+a[1]+":"+a[2]+a[3])){var o=parseInt(a[0]+a[1]),s=parseInt(a[2]+a[3]);this.props.form.props.updateFunction(this.props.form.props.name,(0,n.default)({},this.props.field.name,3600*o+60*s))}}else if(3===t.length){var p=t.split("");if(!0===this.regex.full.test(p[0]+":"+p[1]+p[2])){var u=parseInt(p[0]),d=parseInt(p[1]+p[2]);this.props.form.props.updateFunction(this.props.form.props.name,(0,n.default)({},this.props.field.name,3600*u+60*d))}}}},{key:"convertTimeToString",value:function(e){if(null==e)return"";var t=(e-e%3600)/3600,i=e%3600/60;return t<10&&(t="0"+t),i<10&&(i="0"+i),t+":"+i}},{key:"render",value:function(){if(!(0,d.default)(this.props.field,this.props.data))return null;var e=null;this.props.field.label&&(e=this.props.field.label);var t=null;this.props.field.description&&(t=this.props.field.description);var i=void 0;return i=this.props.field.className?this.props.field.name+" "+this.props.field.className:this.props.field.className,u.default.createElement("div",{className:"c4g-form-field form-group"},u.default.createElement("label",{className:this.props.field.required?"c4g-required":""},e),u.default.createElement("input",{type:"time",className:i+" form-control",required:this.props.field.required,defaultValue:this.convertTimeToString(this.props.data[this.props.field.name]),pattern:this.regex.fullPattern,placeholder:"HH:MM",onChange:this.handleChange,maxLength:5}),u.default.createElement("input",{type:"hidden",name:this.props.field.name,value:this.props.data[this.props.field.name]||""}),u.default.createElement("small",{className:"field-description form-text text-muted"},t))}}]),t}(p.Component);t.default=c}}]);
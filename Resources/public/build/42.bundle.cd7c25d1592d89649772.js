/*! For license information please see 42.bundle.cd7c25d1592d89649772.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{130:function(e,t,n){"use strict";function a(e){return!!(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0&&e.conditionField.length===e.conditionValue.length)}function i(e,t){var n=!0;return e.conditionField.forEach((function(a,i){void 0===t[a]?n=!1:null===t[a]||t[a].value||String(t[a])===String(e.conditionValue[i])?(t[a]&&t[a].value&&String(t[a].value)!==String(e.conditionValue[i])||null===t[a]&&null!==e.conditionValue[i])&&(n=!1):n=!1}),this),n}Object.defineProperty(t,"__esModule",{value:!0}),t.hasConditions=a,t.checkConditions=i,t.default=function(e,t){return!a(e)||i(e,t)}},1461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(n(51)),i=f(n(45)),r=f(n(46)),l=f(n(47)),o=f(n(48)),s=f(n(49)),u=n(17),p=f(u),d=f(n(130));function f(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){(0,r.default)(this,t);var n=(0,o.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e)),a=null;return n.props.data[n.props.field.name]&&(a=new Date(1e3*n.props.data[n.props.field.name])),n.state={date:a},n.regex={fullPattern:"^(([1-9])|(0[1-9])|(1[0-9])|(2[0-9])|(3[0-1])).(([1-9])|(0[1-9])|(1[0-2])).[1-2]([0-9]{3})$",full:new RegExp("^(([1-9])|(0[1-9])|(1[0-9])|(2[0-9])|(3[0-1])).(([1-9])|(0[1-9])|(1[0-2])).[1-2]([0-9]{3})$")},n.handleChange=n.handleChange.bind(n),n.convertDateToString=n.convertDateToString.bind(n),n.convertCompleteStringToDate=n.convertCompleteStringToDate.bind(n),n}return(0,s.default)(t,e),(0,l.default)(t,[{key:"handleChange",value:function(e){var t=e.target.value;if(!0===this.regex.full.test(t)){var n=t.split("."),i=parseInt(n[0]),r=parseInt(n[1])-1,l=parseInt(n[2]),o=new Date(l,r,i);this.props.form.props.updateFunction(this.props.form.props.name,(0,a.default)({},this.props.field.name,o.valueOf()/1e3)),i!==o.getDate()&&(e.target.value=this.convertDateToString(o))}else""===t&&this.props.form.props.updateFunction(this.props.form.props.name,(0,a.default)({},this.props.field.name,null))}},{key:"convertDateToString",value:function(e){var t=e.getDate();t<10&&(t="0"+t);var n=e.getMonth()+1;return n<10&&(n="0"+n),t+"."+n+"."+e.getFullYear()}},{key:"convertCompleteStringToDate",value:function(e){var t=e.split("."),n=parseInt(t[0]),a=parseInt(t[1])-1,i=parseInt(t[2]);return new Date(i,a,n)}},{key:"render",value:function(){if(!(0,d.default)(this.props.field,this.props.data))return null;var e=null;this.props.field.label&&(e=this.props.field.label);var t=null;this.props.field.description&&(t=this.props.field.description);var n=void 0;n=this.props.field.className?this.props.field.name+" "+this.props.field.className:this.props.field.className;var a=null;return null!==this.state.date&&(a=this.convertDateToString(this.state.date)),p.default.createElement("div",{className:"c4g-form-field form-group"},p.default.createElement("label",{className:this.props.field.required?"c4g-required":""},e),p.default.createElement("input",{type:"text",className:n+" form-control",required:this.props.field.required,defaultValue:a,pattern:this.regex.fullPattern,placeholder:"TT.MM.JJJJ",onChange:this.handleChange,maxLength:10}),p.default.createElement("input",{type:"hidden",name:this.props.field.name,value:this.props.data[this.props.field.name]||""}),p.default.createElement("small",{className:"field-description form-text text-muted"},t))}}]),t}(u.Component);t.default=c}}]);
/*! For license information please see 43.bundle.f690e21757cadadf8659.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1134:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(i(45)),l=u(i(46)),o=u(i(47)),a=u(i(48)),r=u(i(49)),c=i(17),d=u(c),s=u(i(133));function u(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){(0,l.default)(this,t);var i=(0,a.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return i.clickCheckbox=i.clickCheckbox.bind(i),i}return(0,r.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){if(!(0,s.default)(this.props.field,this.props.data))return null;var e=null;this.props.field.label&&(e=d.default.createElement("label",{htmlFor:this.props.field.name,className:"form-check-label c4g-form-check-label "},this.props.field.label));var t=null;return this.props.field.label&&(t=d.default.createElement("small",{className:"field-description text-muted"},this.props.field.description)),d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:(this.props.field.className?this.props.field.className+" ":"")+"c4g-form-field form-group form-check"},d.default.createElement("input",{type:"checkbox",id:this.props.field.name,name:this.props.field.name,defaultChecked:this.props.data[this.props.field.name]||this.props.field.checked,required:this.props.field.required,onClick:this.clickCheckbox,className:"form-check-input"}),e," ",t))}},{key:"clickCheckbox",value:function(e){e.stopPropagation();var t=this.props.data;t[this.props.field.name]=e.target.checked?"1":"",this.props.form.props.updateFunction(this.props.form.props.name,t)}}]),t}(c.Component);t.default=p},133:function(e,t,i){"use strict";function n(e){return!!(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0&&e.conditionField.length===e.conditionValue.length)}function l(e,t){var i=!0;return e.conditionField.forEach((function(n,l){void 0===t[n]?i=!1:null===t[n]||t[n].value||String(t[n])===String(e.conditionValue[l])?(t[n]&&t[n].value&&String(t[n].value)!==String(e.conditionValue[l])||null===t[n]&&null!==e.conditionValue[l])&&(i=!1):i=!1}),this),i}Object.defineProperty(t,"__esModule",{value:!0}),t.hasConditions=n,t.checkConditions=l,t.default=function(e,t){return!n(e)||l(e,t)}}}]);
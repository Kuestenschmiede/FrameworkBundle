/*! For license information please see 6553.bundle.7f418cc17ec535e0751c.js.LICENSE.txt */
(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[6553],{73837:(e,t,i)=>{"use strict";var n=i(95318),l=i(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i(34575)),o=n(i(93913)),a=n(i(81506)),s=n(i(2205)),p=n(i(78585)),f=n(i(29754)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var i=m(t);if(i&&i.has(e))return i.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,i&&i.set(e,n);return n}(i(67294)),c=n(i(20349)),d=n(i(86455)),h=i(98332);function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(m=function(e){return e?i:t})(e)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=(0,f.default)(e);if(t){var l=(0,f.default)(this).constructor;i=Reflect.construct(n,arguments,l)}else i=n.apply(this,arguments);return(0,p.default)(this,i)}}var g=function(e){(0,s.default)(i,e);var t=v(i);function i(e){var n;return(0,r.default)(this,i),(n=t.call(this,e)).inputRef=null,n.allowedFileTypes=["application/pdf"],n.onSelectFile=n.onSelectFile.bind((0,a.default)(n)),n.checkFileSize=n.checkFileSize.bind((0,a.default)(n)),n.processPdf=n.processPdf.bind((0,a.default)(n)),n.unsetFile=n.unsetFile.bind((0,a.default)(n)),n}return(0,o.default)(i,[{key:"onSelectFile",value:function(e){if(e.target.files&&e.target.files.length>0)if(this.checkFileSize(e.target.files[0]))if(this.allowedFileTypes.includes(e.target.files[0].type)){var t=e.target.files[0].name,i=e.target.files[0].type;this.processPdf(e.target.files[0],t,i)}else d.default.fire({icon:"error",title:this.props.field.titleFileTooBig,text:this.props.field.textFileTooBig}),e.target.value="";else d.default.fire({icon:"error",title:this.props.field.titleFileTooBig,text:this.props.field.textFileTooBig}),e.target.value=""}},{key:"checkFileSize",value:function(e){return-1===this.props.field.maxFileSize||e.size<=this.props.field.maxFileSize}},{key:"processPdf",value:function(e,t,i){var n=this,l=new FileReader;l.onload=function(){var e=l.result,i=e.replace(/^[^,]*,/,""),r={name:t,data:i,raw:e};n.props.field.setChangedFlag&&(r.changed=!0);var o=n.props.form.props.component.data;o[n.props.field.name]=r,n.props.form.props.updateFunction(n.props.form.props.name,o,n.props.field)},l.readAsDataURL(e)}},{key:"render",value:function(){var e=this;if(!(0,c.default)(this.props.field,this.props.data,this.props.fields))return null;var t=null;if(this.props.field.label){var i="";this.props.field.required?(i="c4g-required",t=u.default.createElement("label",{className:i,htmlFor:this.props.field.name},this.props.field.label)):t=u.default.createElement("label",{htmlFor:this.props.field.name},this.props.field.label)}else this.props.field.placeholder&&this.props.field.placeholder;var n=null,l=null;this.props.field.descriptionLink&&this.props.field.descriptionLinkLabel&&(l=u.default.createElement("a",{className:"form-description-link btn btn-info btn-sm",href:this.props.field.descriptionLink,target:"_blank"},u.default.createElement("i",{className:"fas fa-info-circle"})," ",this.props.field.descriptionLinkLabel)),this.props.field.label&&(n=u.default.createElement("small",{className:"field-description form-text text-muted"},this.props.field.description," ",l));var r="";this.props.field.className&&(r=this.props.field.className+" "+this.props.field.name);var o=this.props.field.name,a=this.props.field.noFileSelectedLabel||this.props.languageRefs.NO_FILE_SELECTED;this.props.data[o]&&this.props.data[o].name&&(a=this.props.data[o].name);var s=null;if(this.props.form.props.component.data[o]&&this.props.form.props.component.data[o].raw)s=u.default.createElement(h.Document,{className:"c4g-pdf-preview",file:this.props.form.props.component.data[o].raw},u.default.createElement(h.Page,{pageNumber:1}),u.default.createElement("button",{onClick:this.unsetFile,title:this.props.languageRefs.CLICK_TO_REMOVE_FILE,className:"btn btn-remove-rounded remove-file "+this.props.field.name},this.props.languageRefs.REMOVE_PDF));else if(this.props.form.props.component.data[o]&&this.props.form.props.component.data[o].path){var p=this.props.form.props.component.data[o].path;p="/"+p,s=u.default.createElement(h.Document,{className:"c4g-pdf-preview",file:p},u.default.createElement(h.Page,{pageNumber:1}),u.default.createElement("button",{onClick:this.unsetFile,title:this.props.languageRefs.CLICK_TO_REMOVE_FILE,className:"btn btn-remove-rounded remove-file "+this.props.field.name},this.props.languageRefs.REMOVE_PDF))}return u.default.createElement("div",{className:"c4g-form-field"},t,u.default.createElement("div",{className:r+" file-label"},a),u.default.createElement("input",{className:"form-control-file",ref:function(t){return e.inputElement=t},type:"file",accept:".pdf",onChange:this.onSelectFile,id:o,name:o+(this.props.field.max>1?"[]":""),style:{display:"none"}}),s,u.default.createElement("input",{type:"button",value:this.props.languageRefs.CHOOSE_FILE,onClick:function(t){t.preventDefault(),e.inputElement.click()},className:r+"btn btn-outline-primary",ref:function(t){e.inputRef=t}}),n)}},{key:"unsetFile",value:function(){var e=this.props.data;e[this.props.field.name]=null,null!==this.inputRef&&(this.inputRef.value=""),this.props.form.props.updateFunction(this.props.form.props.name,e,this.props.field)}}]),i}(u.Component);t.default=g},20349:(e,t)=>{"use strict";function i(e){if(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0){if(e.conditionField.length===e.conditionValue.length)return!0;if(e.conditionValue.length>1&&1===e.conditionField.length)return!0}return!1}function n(e,t){var i=!0;if(e.conditionField.length===e.conditionValue.length)e.conditionField.forEach((function(n,l){void 0===t[n]?i=!1:null===t[n]||t[n].value||String(t[n])===String(e.conditionValue[l])?(t[n]&&t[n].value&&String(t[n].value)!==String(e.conditionValue[l])||null===t[n]&&null!==e.conditionValue[l])&&(i=!1):i=!1}),this);else if(e.conditionValue.length>1&&1===e.conditionField.length){var n=e.conditionField[0];for(var l in i=!1,e.conditionValue)if(e.conditionValue.hasOwnProperty(l)){var r=e.conditionValue[l];if(t[n]&&t[n].value?t[n].value===r&&(i=!0):t[n]===r&&(i=!0),i)break}}return i}Object.defineProperty(t,"__esModule",{value:!0}),t.checkConditions=n,t.default=function(e,t,l){if(i(e)){var r=null;if(l.forEach((function(t,i){1===e.conditionField.length&&t.name===e.conditionField[0]&&(r=t)})),null!==r){return i(r)?n(r,t)&&n(e,t):n(e,t)}return n(e,t)}return!0},t.hasConditions=i},14601:()=>{},32767:()=>{},28251:()=>{},57677:()=>{},1543:()=>{},87324:()=>{}}]);
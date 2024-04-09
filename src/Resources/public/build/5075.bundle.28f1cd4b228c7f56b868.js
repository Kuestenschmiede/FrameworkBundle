/*! For license information please see 5075.bundle.28f1cd4b228c7f56b868.js.LICENSE.txt */
(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[5075],{39205:(e,t,i)=>{"use strict";var n=i(24994),l=i(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i(17383)),o=n(i(34579)),a=n(i(28452)),s=n(i(63072)),p=n(i(29511)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var i=h(t);if(i&&i.has(e))return i.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}return n.default=e,i&&i.set(e,n),n}(i(96540)),u=n(i(40691)),d=n(i(78465)),c=i(22517);function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(h=function(e){return e?i:t})(e)}function m(e,t,i){return t=(0,s.default)(t),(0,a.default)(e,g()?Reflect.construct(t,i||[],(0,s.default)(e).constructor):t.apply(e,i))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}t.default=function(e){function t(e){var i;return(0,r.default)(this,t),(i=m(this,t,[e])).inputRef=null,i.allowedFileTypes=["application/pdf"],i.onSelectFile=i.onSelectFile.bind(i),i.checkFileSize=i.checkFileSize.bind(i),i.processPdf=i.processPdf.bind(i),i.unsetFile=i.unsetFile.bind(i),i}return(0,p.default)(t,e),(0,o.default)(t,[{key:"onSelectFile",value:function(e){if(e.target.files&&e.target.files.length>0)if(this.checkFileSize(e.target.files[0]))if(this.allowedFileTypes.includes(e.target.files[0].type)){var t=e.target.files[0].name,i=e.target.files[0].type;this.processPdf(e.target.files[0],t,i)}else d.default.fire({icon:"error",title:this.props.field.titleFileTooBig,text:this.props.field.textFileTooBig}),e.target.value="";else d.default.fire({icon:"error",title:this.props.field.titleFileTooBig,text:this.props.field.textFileTooBig}),e.target.value=""}},{key:"checkFileSize",value:function(e){return-1===this.props.field.maxFileSize||e.size<=this.props.field.maxFileSize}},{key:"processPdf",value:function(e,t,i){var n=this,l=new FileReader;l.onload=function(){var e=l.result,i=e.replace(/^[^,]*,/,""),r={name:t,data:i,raw:e};n.props.field.setChangedFlag&&(r.changed=!0);var o=n.props.form.props.component.data;o[n.props.field.name]=r,n.props.form.props.updateFunction(n.props.form.props.name,o,n.props.field)},l.readAsDataURL(e)}},{key:"render",value:function(){var e=this;if(!(0,u.default)(this.props.field,this.props.data,this.props.fields))return null;var t=null;if(this.props.field.label){var i="";this.props.field.required?(i="c4g-required",t=f.default.createElement("label",{className:i,htmlFor:this.props.field.name},this.props.field.label)):t=f.default.createElement("label",{htmlFor:this.props.field.name},this.props.field.label)}else this.props.field.placeholder&&this.props.field.placeholder;var n=null,l=null;this.props.field.descriptionLink&&this.props.field.descriptionLinkLabel&&(l=f.default.createElement("a",{className:"form-description-link btn btn-info btn-sm",href:this.props.field.descriptionLink,target:"_blank"},f.default.createElement("i",{className:"fas fa-info-circle"})," ",this.props.field.descriptionLinkLabel)),this.props.field.label&&(n=f.default.createElement("small",{className:"field-description form-text text-muted"},this.props.field.description," ",l));var r="";this.props.field.className&&(r=this.props.field.className+" "+this.props.field.name);var o=this.props.field.name,a=this.props.field.noFileSelectedLabel||this.props.languageRefs.NO_FILE_SELECTED;this.props.data[o]&&this.props.data[o].name&&(a=this.props.data[o].name);var s=null;if(this.props.form.props.component.data[o]&&this.props.form.props.component.data[o].raw)s=f.default.createElement(c.Document,{className:"c4g-pdf-preview",file:this.props.form.props.component.data[o].raw},f.default.createElement(c.Page,{pageNumber:1}),f.default.createElement("button",{onClick:this.unsetFile,title:this.props.languageRefs.CLICK_TO_REMOVE_FILE,className:"btn btn-remove-rounded remove-file "+this.props.field.name},this.props.languageRefs.REMOVE_PDF));else if(this.props.form.props.component.data[o]&&this.props.form.props.component.data[o].path){var p=this.props.form.props.component.data[o].path;p="/"+p,s=f.default.createElement(c.Document,{className:"c4g-pdf-preview",file:p},f.default.createElement(c.Page,{pageNumber:1}),f.default.createElement("button",{onClick:this.unsetFile,title:this.props.languageRefs.CLICK_TO_REMOVE_FILE,className:"btn btn-remove-rounded remove-file "+this.props.field.name},this.props.languageRefs.REMOVE_PDF))}return f.default.createElement("div",{className:"c4g-form-field"},t,f.default.createElement("div",{className:r+" file-label"},a),f.default.createElement("input",{className:"form-control-file",ref:function(t){return e.inputElement=t},type:"file",accept:".pdf",onChange:this.onSelectFile,id:o,name:o+(this.props.field.max>1?"[]":""),style:{display:"none"}}),s,f.default.createElement("input",{type:"button",value:this.props.languageRefs.CHOOSE_FILE,onClick:function(t){t.preventDefault(),e.inputElement.click()},className:r+"btn btn-outline-primary",ref:function(t){e.inputRef=t}}),n)}},{key:"unsetFile",value:function(){var e=this.props.data;e[this.props.field.name]=null,null!==this.inputRef&&(this.inputRef.value=""),this.props.form.props.updateFunction(this.props.form.props.name,e,this.props.field)}}])}(f.Component)},40691:(e,t)=>{"use strict";function i(e){if(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0){if(e.conditionField.length===e.conditionValue.length)return!0;if(e.conditionValue.length>1&&1===e.conditionField.length)return!0}return!1}function n(e,t){var i=!0;if(e.conditionField.length===e.conditionValue.length)e.conditionField.forEach((function(n,l){void 0===t[n]?i=!1:null===t[n]||t[n].value||String(t[n])===String(e.conditionValue[l])?(t[n]&&t[n].value&&String(t[n].value)!==String(e.conditionValue[l])||null===t[n]&&null!==e.conditionValue[l])&&(i=!1):i=!1}),this);else if(e.conditionValue.length>1&&1===e.conditionField.length){var n=e.conditionField[0];for(var l in i=!1,e.conditionValue)if(e.conditionValue.hasOwnProperty(l)){var r=e.conditionValue[l];if(t[n]&&t[n].value?t[n].value===r&&(i=!0):t[n]===r&&(i=!0),i)break}}return i}Object.defineProperty(t,"__esModule",{value:!0}),t.checkConditions=n,t.default=function(e,t,l){if(i(e)){var r=null;if(l.forEach((function(t,i){1===e.conditionField.length&&t.name===e.conditionField[0]&&(r=t)})),null!==r){return i(r)?n(r,t)&&n(e,t):n(e,t)}return n(e,t)}return!0},t.hasConditions=i},25352:()=>{},15365:()=>{},98196:()=>{},1671:()=>{},26959:()=>{},60195:()=>{}}]);
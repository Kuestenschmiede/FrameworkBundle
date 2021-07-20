/*! For license information please see 2557.bundle.a1fa8add4a527f2d4359.js.LICENSE.txt */
(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[2557],{23708:(e,t,i)=>{"use strict";var l=i(95318),n=i(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(i(34575)),a=l(i(93913)),o=l(i(81506)),s=l(i(2205)),p=l(i(78585)),f=l(i(29754)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var i=m(t);if(i&&i.has(e))return i.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(l,a,o):l[a]=e[a]}l.default=e,i&&i.set(e,l);return l}(i(67294)),c=l(i(6404)),d=l(i(86455)),h=i(21708);function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(m=function(e){return e?i:t})(e)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,l=(0,f.default)(e);if(t){var n=(0,f.default)(this).constructor;i=Reflect.construct(l,arguments,n)}else i=l.apply(this,arguments);return(0,p.default)(this,i)}}var g=function(e){(0,s.default)(i,e);var t=v(i);function i(e){var l;return(0,r.default)(this,i),(l=t.call(this,e)).inputRef=null,l.allowedFileTypes=["application/pdf"],l.onSelectFile=l.onSelectFile.bind((0,o.default)(l)),l.checkFileSize=l.checkFileSize.bind((0,o.default)(l)),l.processPdf=l.processPdf.bind((0,o.default)(l)),l.unsetFile=l.unsetFile.bind((0,o.default)(l)),l}return(0,a.default)(i,[{key:"onSelectFile",value:function(e){if(e.target.files&&e.target.files.length>0)if(this.checkFileSize(e.target.files[0]))if(this.allowedFileTypes.includes(e.target.files[0].type)){var t=e.target.files[0].name,i=e.target.files[0].type;this.processPdf(e.target.files[0],t,i)}else d.default.fire({icon:"error",title:this.props.field.titleFileTooBig,text:this.props.field.textFileTooBig}),e.target.value="";else d.default.fire({icon:"error",title:this.props.field.titleFileTooBig,text:this.props.field.textFileTooBig}),e.target.value=""}},{key:"checkFileSize",value:function(e){return-1===this.props.field.maxFileSize||e.size<=this.props.field.maxFileSize}},{key:"processPdf",value:function(e,t,i){var l=this,n=new FileReader;n.onload=function(){var e=n.result,i=e.replace(/^[^,]*,/,""),r={name:t,data:i,raw:e};l.props.field.setChangedFlag&&(r.changed=!0);var a=l.props.form.props.component.data;a[l.props.field.name]=r,l.props.form.props.updateFunction(l.props.form.props.name,a)},n.readAsDataURL(e)}},{key:"render",value:function(){var e=this;if(!(0,c.default)(this.props.field,this.props.data))return null;var t=null;if(this.props.field.label){var i="";this.props.field.required?(i="c4g-required",t=u.default.createElement("label",{className:i,htmlFor:this.props.field.name},this.props.field.label)):t=u.default.createElement("label",{htmlFor:this.props.field.name},this.props.field.label)}else this.props.field.placeholder&&this.props.field.placeholder;var l=null,n=null;this.props.field.descriptionLink&&this.props.field.descriptionLinkLabel&&(n=u.default.createElement("a",{className:"form-description-link btn btn-info btn-sm",href:this.props.field.descriptionLink,target:"_blank"},u.default.createElement("i",{className:"fas fa-info-circle"})," ",this.props.field.descriptionLinkLabel)),this.props.field.label&&(l=u.default.createElement("small",{className:"field-description form-text text-muted"},this.props.field.description," ",n));var r="";this.props.field.className&&(r=this.props.field.className+" "+this.props.field.name);var a=this.props.field.name,o=this.props.field.noFileSelectedLabel||this.props.languageRefs.NO_FILE_SELECTED;this.props.data[a]&&this.props.data[a].name&&(o=this.props.data[a].name);var s=null;if(this.props.form.props.component.data[a]&&this.props.form.props.component.data[a].raw)s=u.default.createElement(h.Document,{className:"c4g-pdf-preview",file:this.props.form.props.component.data[a].raw},u.default.createElement(h.Page,{pageNumber:1}));else if(this.props.form.props.component.data[a]&&this.props.form.props.component.data[a].path){var p=this.props.form.props.component.data[a].path;p="/"+p,s=u.default.createElement(h.Document,{className:"c4g-pdf-preview",file:p},u.default.createElement(h.Page,{pageNumber:1}))}return u.default.createElement("div",null,t,u.default.createElement("div",{className:r+" file-label"},o),u.default.createElement("input",{className:"form-control-file",ref:function(t){return e.inputElement=t},type:"file",accept:".pdf",onChange:this.onSelectFile,id:a,name:a+(this.props.field.max>1?"[]":""),style:{display:"none"}}),s,u.default.createElement("input",{type:"button",value:this.props.languageRefs.CHOOSE_FILE,onClick:function(t){t.preventDefault(),e.inputElement.click()},className:r+"btn btn-outline-primary",ref:function(t){e.inputRef=t}}),l,s&&u.default.createElement("button",{onClick:this.unsetFile,title:this.props.languageRefs.CLICK_TO_REMOVE_FILE,className:"btn btn-primary remove-file "+this.props.field.name},this.props.languageRefs.REMOVE_FILE))}},{key:"unsetFile",value:function(){var e=this.props.data;e[this.props.field.name]=null,null!==this.inputRef&&(this.inputRef.value=""),this.props.form.props.updateFunction(this.props.form.props.name,e)}}]),i}(u.Component);t.default=g},6404:(e,t)=>{"use strict";function i(e){return!!(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0&&e.conditionField.length===e.conditionValue.length)}function l(e,t){var i=!0;return e.conditionField.forEach((function(l,n){void 0===t[l]?i=!1:null===t[l]||t[l].value||String(t[l])===String(e.conditionValue[n])?(t[l]&&t[l].value&&String(t[l].value)!==String(e.conditionValue[n])||null===t[l]&&null!==e.conditionValue[n])&&(i=!1):i=!1}),this),i}Object.defineProperty(t,"__esModule",{value:!0}),t.hasConditions=i,t.checkConditions=l,t.default=function(e,t){return!i(e)||l(e,t)}},93414:()=>{},70172:()=>{},2001:()=>{},33779:()=>{},66558:()=>{},82258:()=>{}}]);
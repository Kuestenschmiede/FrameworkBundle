/*! For license information please see 801.bundle.c968c4fb1727b647caa9.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[801],{60801:(e,t,n)=>{var o=n(95318),l=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(34575)),i=o(n(93913)),r=o(n(81506)),s=o(n(2205)),u=o(n(78585)),d=o(n(29754)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=a?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(o,i,r):o[i]=e[i]}o.default=e,n&&n.set(e,o);return o}(n(67294)),f=o(n(6404));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,d.default)(e);if(t){var l=(0,d.default)(this).constructor;n=Reflect.construct(o,arguments,l)}else n=o.apply(this,arguments);return(0,u.default)(this,n)}}var h=c.default.lazy((function(){return n.e(859).then(n.bind(n,20859))})),b=c.default.lazy((function(){return n.e(2506).then(n.bind(n,32506))})),g=c.default.lazy((function(){return n.e(8957).then(n.bind(n,28957))})),v=c.default.lazy((function(){return n.e(7279).then(n.bind(n,77279))})),y=c.default.lazy((function(){return Promise.resolve().then(n.bind(n,21051))})),F=function(e){(0,s.default)(n,e);var t=p(n);function n(e){var o;return(0,a.default)(this,n),(o=t.call(this,e)).renderDefaultContent=o.renderDefaultContent.bind((0,r.default)(o)),o.openModal=o.openModal.bind((0,r.default)(o)),o.closeModal=o.closeModal.bind((0,r.default)(o)),o.closeAndClearModal=o.closeAndClearModal.bind((0,r.default)(o)),o.onAjaxDone=o.onAjaxDone.bind((0,r.default)(o)),o.onAjaxFail=o.onAjaxFail.bind((0,r.default)(o)),o.showForm=o.showForm.bind((0,r.default)(o)),o.submitForm=o.submitForm.bind((0,r.default)(o)),o.onFormSubmitDone=o.onFormSubmitDone.bind((0,r.default)(o)),o.onFormSubmitFail=o.onFormSubmitFail.bind((0,r.default)(o)),o.state={showModal:!1,modalContent:o.renderDefaultContent()},o}return(0,i.default)(n,[{key:"renderDefaultContent",value:function(){return c.default.createElement(g,{title:this.props.field.label,onConfirm:this.closeModal,confirmButtonText:this.props.field.closeButtonText},c.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},c.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""})))}},{key:"openModal",value:function(){var e=this.props.field.url;this.props.field.urlField&&(e=e.replace(this.props.field.urlField,this.props.data[this.props.field.urlField])),jQuery.get(e).done(this.onAjaxDone).fail(this.onAjaxFail),this.setState({showModal:!0})}},{key:"closeModal",value:function(){this.setState({showModal:!1})}},{key:"closeAndClearModal",value:function(){this.setState({showModal:!1,modalContent:this.renderDefaultContent()})}},{key:"onAjaxDone",value:function(e){try{this.showForm(e)}catch(e){console.error(e),this.closeModal()}}},{key:"onAjaxFail",value:function(e){var t=e.responseJSON;t.error?this.setState({modalContent:c.default.createElement(b,{title:t.error.title,message:t.error.message,onConfirm:this.closeModal,confirmButtonText:t.error.confirmButtonText})}):this.closeModal()}},{key:"showForm",value:function(e){var t=this;try{var n;n=void 0!==this.props.field.innerFields&&this.props.field.innerFields.length>0?this.props.fields.filter((function(e){return t.props.field.innerFields.includes(e.name)})):this.props.fields.filter((function(e){return e.type!==t.props.field.type}));var o={updateFunction:function(){}},l=c.default.createElement("div",{className:this.props.className||"c4g-modal-content"},c.default.createElement("button",{className:"c4g-btn c4g-btn-top-close",type:"button",onClick:this.closeModal},c.default.createElement("span",{className:"c4g-btn-text"},this.props.field.closeButtonText)),c.default.createElement("div",{className:"c4g-modal__title-wrapper"},c.default.createElement("span",{className:"c4g-modal__title"},this.props.field.label)),c.default.createElement("form",null,c.default.createElement("div",null,c.default.createElement(c.Suspense,{fallback:c.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},c.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""}))},c.default.createElement("div",null,n.map((function(e,o){return c.default.createElement(y,{data:t.props.data,field:e,fields:n,key:o,detail:t.props.detail,languageRefs:t.props.languageRefs})}))),e.formFields.map((function(n,l){return c.default.createElement(v,{form:{props:o,fields:e.formFields},field:n,data:e.formData||[],key:l+1,languageRefs:t.props.languageRefs})})))),c.default.createElement("div",{className:"c4g-panel-buttons"},c.default.createElement("button",{className:"c4g-btn c4g-btn-submit",type:"button",onClick:this.submitForm},c.default.createElement("span",{className:"c4g-btn-text"},this.props.field.confirmButtonText)),c.default.createElement("button",{className:"c4g-btn c4g-btn-close",type:"button",onClick:this.closeModal},c.default.createElement("span",{className:"c4g-btn-text"},this.props.field.closeButtonText)))));this.setState({modalContent:l})}catch(e){console.error(e),this.closeModal()}}},{key:"submitForm",value:function(e){for(var t=e.target.parentNode.form.elements,n={},o=0;o<t.length;){var l=t.item(o);l.name&&(n[l.name]=l.value),o+=1}jQuery.post(this.props.field.submitUrl,n).done(this.onFormSubmitDone).fail(this.onFormSubmitFail)}},{key:"onFormSubmitDone",value:function(e){e&&e.success?this.setState({modalContent:c.default.createElement(b,{title:e.success.title,message:e.success.message,onConfirm:this.closeAndClearModal,confirmButtonText:this.props.field.closeButtonText})}):this.closeModal()}},{key:"onFormSubmitFail",value:function(e){var t=e.responseJSON;t&&t.error?this.setState({modalContent:c.default.createElement(b,{title:t.error.title,message:t.error.message,onConfirm:this.showForm.bind(this,t),confirmButtonText:this.props.field.closeButtonText})}):this.closeModal()}},{key:"render",value:function(){return(0,f.default)(this.props.field,this.props.data)?c.default.createElement("div",{className:"detail-field-text"+(this.props.field.class?" "+this.props.field.class:"")},c.default.createElement("button",{className:this.props.field.name,onClick:this.openModal},this.props.field.label),c.default.createElement(h,{show:this.state.showModal},this.state.modalContent)):null}}]),n}(c.Component);t.default=F},6404:(e,t)=>{function n(e){if(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0){if(e.conditionField.length===e.conditionValue.length)return!0;if(e.conditionValue.length>1&&1===e.conditionField.length)return!0}return!1}function o(e,t){var n=!0;if(e.conditionField.length===e.conditionValue.length)e.conditionField.forEach((function(o,l){void 0===t[o]?n=!1:null===t[o]||t[o].value||String(t[o])===String(e.conditionValue[l])?(t[o]&&t[o].value&&String(t[o].value)!==String(e.conditionValue[l])||null===t[o]&&null!==e.conditionValue[l])&&(n=!1):n=!1}),this);else if(e.conditionValue.length>1&&1===e.conditionField.length){var o=e.conditionField[0];for(var l in n=!1,e.conditionValue)if(e.conditionValue.hasOwnProperty(l)){var a=e.conditionValue[l];if(t[o]&&t[o].value?t[o].value===a&&(n=!0):t[o]===a&&(n=!0),n)break}}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.hasConditions=n,t.checkConditions=o,t.default=function(e,t){return!n(e)||o(e,t)}}}]);
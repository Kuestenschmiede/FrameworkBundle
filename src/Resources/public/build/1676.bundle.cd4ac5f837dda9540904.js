/*! For license information please see 1676.bundle.cd4ac5f837dda9540904.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[1676],{1676:(e,t,n)=>{var o=n(24994),l=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(17383)),r=o(n(34579)),s=o(n(28452)),i=o(n(63072)),u=o(n(29511)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&{}.hasOwnProperty.call(e,r)){var s=a?Object.getOwnPropertyDescriptor(e,r):null;s&&(s.get||s.set)?Object.defineProperty(o,r,s):o[r]=e[r]}return o.default=e,n&&n.set(e,o),o}(n(96540));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}var m=d.default.lazy((function(){return n.e(1248).then(n.bind(n,21248))})),p=d.default.lazy((function(){return n.e(8390).then(n.bind(n,38390))})),h=d.default.lazy((function(){return n.e(4807).then(n.bind(n,54807))})),b=d.default.lazy((function(){return n.e(2937).then(n.bind(n,82937))})),g=d.default.lazy((function(){return n.e(8461).then(n.bind(n,38461))}));t.default=function(e){function t(e){var n,o,l,r;return(0,a.default)(this,t),o=this,l=t,r=[e],l=(0,i.default)(l),(n=(0,s.default)(o,f()?Reflect.construct(l,r||[],(0,i.default)(o).constructor):l.apply(o,r))).renderDefaultContent=n.renderDefaultContent.bind(n),n.openModal=n.openModal.bind(n),n.closeModal=n.closeModal.bind(n),n.closeAndClearModal=n.closeAndClearModal.bind(n),n.onAjaxDone=n.onAjaxDone.bind(n),n.onAjaxFail=n.onAjaxFail.bind(n),n.showForm=n.showForm.bind(n),n.submitForm=n.submitForm.bind(n),n.onFormSubmitDone=n.onFormSubmitDone.bind(n),n.onFormSubmitFail=n.onFormSubmitFail.bind(n),n.state={showModal:!1,modalContent:n.renderDefaultContent()},n}return(0,u.default)(t,e),(0,r.default)(t,[{key:"renderDefaultContent",value:function(){return d.default.createElement(h,{title:this.props.field.label,onConfirm:this.closeModal,confirmButtonText:this.props.field.closeButtonText},d.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},d.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""})))}},{key:"openModal",value:function(){var e=this.props.field.url;this.props.field.urlField&&(e=e.replace(this.props.field.urlField,this.props.data[this.props.field.urlField])),jQuery.get(e).done(this.onAjaxDone).fail(this.onAjaxFail),this.setState({showModal:!0})}},{key:"closeModal",value:function(){this.setState({showModal:!1})}},{key:"closeAndClearModal",value:function(){this.setState({showModal:!1,modalContent:this.renderDefaultContent()})}},{key:"onAjaxDone",value:function(e){try{this.showForm(e)}catch(e){console.error(e),this.closeModal()}}},{key:"onAjaxFail",value:function(e){var t=e.responseJSON;t.error?this.setState({modalContent:d.default.createElement(p,{title:t.error.title,message:t.error.message,onConfirm:this.closeModal,confirmButtonText:t.error.confirmButtonText})}):this.closeModal()}},{key:"showForm",value:function(e){var t=this;try{var n;n=void 0!==this.props.field.innerFields&&this.props.field.innerFields.length>0?this.props.fields.filter((function(e){return t.props.field.innerFields.includes(e.name)})):this.props.fields.filter((function(e){return e.type!==t.props.field.type}));var o={updateFunction:function(){}},l=d.default.createElement("div",{className:this.props.className||"c4g-modal-content"},d.default.createElement("button",{className:"c4g-btn c4g-btn-top-close",type:"button",onClick:this.closeModal},d.default.createElement("span",{className:"c4g-btn-text"},this.props.field.closeButtonText)),d.default.createElement("div",{className:"c4g-modal__title-wrapper"},d.default.createElement("span",{className:"c4g-modal__title"},this.props.field.label)),d.default.createElement("form",null,d.default.createElement("div",null,d.default.createElement(d.Suspense,{fallback:d.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},d.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""}))},d.default.createElement(g,{dataEntry:this.props.data,fields:n,list:this.props.list,languageRefs:this.props.languageRefs}),e.formFields.map((function(n,l){return d.default.createElement(b,{form:{props:o,fields:e.formFields},field:n,data:e.formData||[],key:l+1,languageRefs:t.props.languageRefs})})))),d.default.createElement("div",{className:"c4g-panel-buttons"},d.default.createElement("button",{className:"c4g-btn c4g-btn-submit",type:"button",onClick:this.submitForm},d.default.createElement("span",{className:"c4g-btn-text"},this.props.field.confirmButtonText)),d.default.createElement("button",{className:"c4g-btn c4g-btn-close",type:"button",onClick:this.closeModal},d.default.createElement("span",{className:"c4g-btn-text"},this.props.field.closeButtonText)))));this.setState({modalContent:l})}catch(e){console.error(e),this.closeModal()}}},{key:"submitForm",value:function(e){for(var t=e.target.parentNode.form.elements,n={},o=0;o<t.length;){var l=t.item(o);l.name&&(n[l.name]=l.value),o+=1}jQuery.post(this.props.field.submitUrl,n).done(this.onFormSubmitDone).fail(this.onFormSubmitFail)}},{key:"onFormSubmitDone",value:function(e){e&&e.success?this.setState({modalContent:d.default.createElement(p,{title:e.success.title,message:e.success.message,onConfirm:this.closeAndClearModal,confirmButtonText:this.props.field.closeButtonText})}):this.closeModal()}},{key:"onFormSubmitFail",value:function(e){var t=e.responseJSON;t&&t.error?this.setState({modalContent:d.default.createElement(p,{title:t.error.title,message:t.error.message,onConfirm:this.showForm.bind(this,t),confirmButtonText:this.props.field.closeButtonText})}):this.closeModal()}},{key:"render",value:function(){if(!this.props.field.label)return null;if(this.props.field.conditions&&"function"==typeof this.props.field.conditions.forEach){var e=!0;if(this.props.field.conditions.forEach((function(t){var n=this.props.data;t.not?String(n[t.field])===String(t.value)&&(e=!1):String(n[t.field])!==String(t.value)&&(e=!1)}),this),!1===e)return null}return d.default.createElement("div",{className:this.props.field.wrapperClass},d.default.createElement("button",{className:this.props.field.class,onClick:this.openModal},this.props.field.label),d.default.createElement(m,{show:this.state.showModal,onClose:this.closeModal},this.state.modalContent))}}])}(d.Component)}}]);
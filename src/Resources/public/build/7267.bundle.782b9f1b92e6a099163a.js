/*! For license information please see 7267.bundle.782b9f1b92e6a099163a.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[7267],{27267:(e,t,n)=>{var l=n(64836),o=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(56690)),i=l(n(89728)),r=l(n(66115)),s=l(n(61655)),u=l(n(94993)),d=l(n(73808)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var l={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=a?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(l,i,r):l[i]=e[i]}l.default=e,n&&n.set(e,l);return l}(n(67294)),f=l(n(20349));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,d.default)(e);if(t){var o=(0,d.default)(this).constructor;n=Reflect.construct(l,arguments,o)}else n=l.apply(this,arguments);return(0,u.default)(this,n)}}var h=c.default.lazy((function(){return n.e(76).then(n.bind(n,96498))})),b=c.default.lazy((function(){return n.e(6872).then(n.bind(n,86872))})),g=c.default.lazy((function(){return n.e(6356).then(n.bind(n,46356))})),v=c.default.lazy((function(){return n.e(2447).then(n.bind(n,2447))})),y=c.default.lazy((function(){return Promise.resolve().then(n.bind(n,25258))}));t.default=function(e){(0,s.default)(n,e);var t=p(n);function n(e){var l;return(0,a.default)(this,n),(l=t.call(this,e)).renderDefaultContent=l.renderDefaultContent.bind((0,r.default)(l)),l.openModal=l.openModal.bind((0,r.default)(l)),l.closeModal=l.closeModal.bind((0,r.default)(l)),l.closeAndClearModal=l.closeAndClearModal.bind((0,r.default)(l)),l.onAjaxDone=l.onAjaxDone.bind((0,r.default)(l)),l.onAjaxFail=l.onAjaxFail.bind((0,r.default)(l)),l.showForm=l.showForm.bind((0,r.default)(l)),l.submitForm=l.submitForm.bind((0,r.default)(l)),l.onFormSubmitDone=l.onFormSubmitDone.bind((0,r.default)(l)),l.onFormSubmitFail=l.onFormSubmitFail.bind((0,r.default)(l)),l.state={showModal:!1,modalContent:l.renderDefaultContent()},l}return(0,i.default)(n,[{key:"renderDefaultContent",value:function(){return c.default.createElement(g,{title:this.props.field.label,onConfirm:this.closeModal,confirmButtonText:this.props.field.closeButtonText},c.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},c.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""})))}},{key:"openModal",value:function(){var e=this.props.field.url;this.props.field.urlField&&(e=e.replace(this.props.field.urlField,this.props.data[this.props.field.urlField])),jQuery.get(e).done(this.onAjaxDone).fail(this.onAjaxFail),this.setState({showModal:!0})}},{key:"closeModal",value:function(){this.setState({showModal:!1})}},{key:"closeAndClearModal",value:function(){this.setState({showModal:!1,modalContent:this.renderDefaultContent()})}},{key:"onAjaxDone",value:function(e){try{this.showForm(e)}catch(e){console.error(e),this.closeModal()}}},{key:"onAjaxFail",value:function(e){var t=e.responseJSON;t.error?this.setState({modalContent:c.default.createElement(b,{title:t.error.title,message:t.error.message,onConfirm:this.closeModal,confirmButtonText:t.error.confirmButtonText})}):this.closeModal()}},{key:"showForm",value:function(e){var t=this;try{var n;n=void 0!==this.props.field.innerFields&&this.props.field.innerFields.length>0?this.props.fields.filter((function(e){return t.props.field.innerFields.includes(e.name)})):this.props.fields.filter((function(e){return e.type!==t.props.field.type}));var l={updateFunction:function(){}},o=c.default.createElement("div",{className:this.props.className||"c4g-modal-content"},c.default.createElement("button",{className:"c4g-btn c4g-btn-top-close",type:"button",onClick:this.closeModal},c.default.createElement("span",{className:"c4g-btn-text"},this.props.field.closeButtonText)),c.default.createElement("div",{className:"c4g-modal__title-wrapper"},c.default.createElement("span",{className:"c4g-modal__title"},this.props.field.label)),c.default.createElement("form",null,c.default.createElement("div",null,c.default.createElement(c.Suspense,{fallback:c.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},c.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""}))},c.default.createElement("div",null,n.map((function(e,l){return c.default.createElement(y,{data:t.props.data,field:e,fields:n,key:l,detail:t.props.detail,languageRefs:t.props.languageRefs})}))),e.formFields.map((function(n,o){return c.default.createElement(v,{form:{props:l,fields:e.formFields},field:n,data:e.formData||[],key:o+1,languageRefs:t.props.languageRefs})})))),c.default.createElement("div",{className:"c4g-panel-buttons"},c.default.createElement("button",{className:"c4g-btn c4g-btn-submit",type:"button",onClick:this.submitForm},c.default.createElement("span",{className:"c4g-btn-text"},this.props.field.confirmButtonText)),c.default.createElement("button",{className:"c4g-btn c4g-btn-close",type:"button",onClick:this.closeModal},c.default.createElement("span",{className:"c4g-btn-text"},this.props.field.closeButtonText)))));this.setState({modalContent:o})}catch(e){console.error(e),this.closeModal()}}},{key:"submitForm",value:function(e){for(var t=e.target.parentNode.form.elements,n={},l=0;l<t.length;){var o=t.item(l);o.name&&(n[o.name]=o.value),l+=1}jQuery.post(this.props.field.submitUrl,n).done(this.onFormSubmitDone).fail(this.onFormSubmitFail)}},{key:"onFormSubmitDone",value:function(e){e&&e.success?this.setState({modalContent:c.default.createElement(b,{title:e.success.title,message:e.success.message,onConfirm:this.closeAndClearModal,confirmButtonText:this.props.field.closeButtonText})}):this.closeModal()}},{key:"onFormSubmitFail",value:function(e){var t=e.responseJSON;t&&t.error?this.setState({modalContent:c.default.createElement(b,{title:t.error.title,message:t.error.message,onConfirm:this.showForm.bind(this,t),confirmButtonText:this.props.field.closeButtonText})}):this.closeModal()}},{key:"render",value:function(){return(0,f.default)(this.props.field,this.props.data,this.props.fields)?c.default.createElement("div",{className:"detail-field-text"+(this.props.field.class?" "+this.props.field.class:"")},c.default.createElement("button",{className:this.props.field.name,onClick:this.openModal},this.props.field.label),c.default.createElement(h,{show:this.state.showModal},this.state.modalContent)):null}}]),n}(c.Component)},20349:(e,t)=>{function n(e){if(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0){if(e.conditionField.length===e.conditionValue.length)return!0;if(e.conditionValue.length>1&&1===e.conditionField.length)return!0}return!1}function l(e,t){var n=!0;if(e.conditionField.length===e.conditionValue.length)e.conditionField.forEach((function(l,o){void 0===t[l]?n=!1:null===t[l]||t[l].value||String(t[l])===String(e.conditionValue[o])?(t[l]&&t[l].value&&String(t[l].value)!==String(e.conditionValue[o])||null===t[l]&&null!==e.conditionValue[o])&&(n=!1):n=!1}),this);else if(e.conditionValue.length>1&&1===e.conditionField.length){var l=e.conditionField[0];for(var o in n=!1,e.conditionValue)if(e.conditionValue.hasOwnProperty(o)){var a=e.conditionValue[o];if(t[l]&&t[l].value?t[l].value===a&&(n=!0):t[l]===a&&(n=!0),n)break}}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.checkConditions=l,t.default=function(e,t,o){if(n(e)){var a=null;if(o.forEach((function(t,n){1===e.conditionField.length&&t.name===e.conditionField[0]&&(a=t)})),null!==a){return n(a)?l(a,t)&&l(e,t):l(e,t)}return l(e,t)}return!0},t.hasConditions=n}}]);
/*! For license information please see 7219.bundle.343142dc0598fa44022e.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[3305,6964,7219],{6964:(e,t,n)=>{var o=n(81666);Object.defineProperty(t,"__esModule",{value:!0}),t.AlertHandler=void 0;var a=o(n(61252)),r=o(n(26349)),s=o(n(25063)),l=o(n(54739)),i=o(n(88737));t.AlertHandler=function(){return(0,l.default)((function e(){(0,s.default)(this,e)}),[{key:"showErrorDialog",value:function(e,t,n){i.default.fire({title:e,text:t,icon:"error",customClass:n||""})}},{key:"showInfoDialog",value:function(e,t,n){i.default.fire({title:e,text:t,icon:"info",customClass:n||""})}},{key:"showInfoActionDialog",value:function(e,t,n,o){i.default.fire({title:e,text:t,icon:"info",customClass:o||""}).then((function(){n()}))}},{key:"showInfoActionDialog2",value:function(e,t,n,o){i.default.fire({title:e,text:t,icon:"info",showLoaderOnConfirm:!0,customClass:o||"",preConfirm:function(e){n()}})}},{key:"showConfirmDialog",value:function(e,t,n,o,a,r,s){i.default.fire({title:e,text:t,icon:"warning",showCancelButton:!0,confirmButtonText:a||"Confirm",cancelButtonText:r||"Cancel",customClass:s||""}).then((function(e){e.value?n():o()}))}},{key:"showConfirmDialogHTML",value:function(e,t,n,o,a,r,s){i.default.fire({title:e,html:t,icon:"warning",showCancelButton:!0,confirmButtonText:a||"Confirm",cancelButtonText:r||"Cancel",customClass:s||""}).then((function(e){e.value?n():o()}))}},{key:"showPreConfirmDialog",value:function(e,t,n,o,a,r,s){i.default.fire({title:e,text:t,icon:"warning",showCancelButton:!0,confirmButtonText:o||"Confirm",cancelButtonText:a||"Cancel",showLoaderOnConfirm:s||!0,preConfirm:function(){return new Promise((function(e){n()}))},allowOutsideClick:function(){return!i.default.isLoading()},customClass:r||""})}},{key:"showLoadingDialog",value:function(e,t,n,o){i.default.fire({title:e,text:t,showCancelButton:!1,allowEscapeKey:!1,allowOutsideClick:!1,showLoaderOnConfirm:!0,onBeforeOpen:function(){i.default.clickConfirm()},customClass:o||"",preConfirm:function(){return new Promise((function(e){n()}))}})}},{key:"showSelectDialog",value:(e=(0,r.default)(a.default.mark((function e(t,n,o,r,s){var l,u;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.default.fire({title:t,input:"select",inputOptions:n,inputPlaceholder:"-",showCancelButton:!0,confirmButtonText:o,cancelButtonText:r,customClass:s||""});case 2:return l=e.sent,u=l.value,e.abrupt("return",u);case 5:case"end":return e.stop()}}),e)}))),function(t,n,o,a,r){return e.apply(this,arguments)})}]);var e}()},43305:(e,t,n)=>{var o=n(24994),a=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(17383)),s=o(n(34579)),l=o(n(28452)),i=o(n(63072)),u=o(n(29511)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&{}.hasOwnProperty.call(e,s)){var l=r?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(o,s,l):o[s]=e[s]}return o.default=e,n&&n.set(e,o),o}(n(96540));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var d=c.default.lazy((function(){return n.e(4994).then(n.bind(n,64994))})),m=c.default.lazy((function(){return n.e(2937).then(n.bind(n,82937))}));t.default=function(e){function t(e){var n,o,a,s;return(0,r.default)(this,t),o=this,a=t,s=[e],a=(0,i.default)(a),(n=(0,l.default)(o,p()?Reflect.construct(a,s||[],(0,i.default)(o).constructor):a.apply(o,s))).activeButton=null,n.state={errorTexts:{},loading:!1},e.component.toggleableLayout&&(n.state.toggled=!1),n.submitForm=n.submitForm.bind(n),n.toggleForm=n.toggleForm.bind(n),n}return(0,u.default)(t,e),(0,s.default)(t,[{key:"toggleForm",value:function(){this.setState({toggled:!this.state.toggled})}},{key:"render",value:function(){var e=this,t=[],n=[];this.props.component.buttons.forEach((function(e,n){t.push(c.default.createElement(c.Suspense,{fallback:c.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},c.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""})),key:n},c.default.createElement(d,{key:n,form:this,button:e,languageRefs:this.props.languageRefs})))}),this);var o=null;this.state.loading&&(o=c.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},c.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""})));var a=null;this.props.component.headline&&(a=c.default.createElement("span",{className:"form-headline"},this.props.component.headline));var r=this.props.component.fields.map((function(t,o){return"wrapper"===t.type?(n=n.concat(t.wrappedFields),c.default.createElement(c.Suspense,{fallback:c.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},c.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""}),"."),key:o},c.default.createElement(m,{key:o,field:t,data:e.props.component.data,parentNode:e,fields:e.props.component.fields,form:e,errorTexts:e.state.errorTexts||{},languageRefs:e.props.languageRefs}))):n.includes(t.name)?void 0:c.default.createElement(c.Suspense,{fallback:c.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},c.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""})),key:o},c.default.createElement(m,{key:o,field:t,data:e.props.component.data,parentNode:e,form:e,errorText:e.state.errorTexts?e.state.errorTexts[t.name]:{},languageRefs:e.props.languageRefs}))})),s="form-view";this.props.component.class&&(s=this.props.component.class);var l=c.default.createElement(c.default.Fragment,null,a,r,c.default.createElement("div",{className:this.props.component.buttonWrapperClass},o,t));if(this.props.component.toggleableLayout){var i=this.props.component.toggleableBaseClass+"-form";this.props.component.class&&(i+=" "+this.props.component.class);var u=this.props.component.toggleableOffLabel,f="";return this.state.toggled&&(u=this.props.component.toggleableOnLabel,f=" "+this.props.component.toggleableOnClass),c.default.createElement("div",{className:this.props.component.toggleableBaseClass+"-outer"+f,hidden:this.props.component.hidden},c.default.createElement("div",{className:this.props.component.toggleableBaseClass+"-inner"},c.default.createElement("div",{className:this.props.component.toggleableBaseClass+"-button-wrapper"+f},c.default.createElement("button",{className:this.props.component.toggleableBaseClass+"-button"+f,onClick:this.toggleForm},u)),c.default.createElement("div",{className:this.props.component.toggleableBaseClass+"-form-wrapper"+f},c.default.createElement("form",{className:i,onSubmit:function(t){return e.submitForm(t)},method:this.props.component.method},l))))}if(this.props.component.containerRow)return this.props.component.renderAsForm?c.default.createElement("form",{className:s,onSubmit:function(t){return e.submitForm(t)},method:this.props.component.method},c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"row"},l))):this.props.component.scrollSpy?c.default.createElement("div",{className:s,method:this.props.component.method,"data-spy":"scroll","data-target":this.props.component.scrollSpyTarget,"data-offset":"0"},c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"row"},l))):c.default.createElement("div",{className:s,method:this.props.component.method},c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"row"},l)));if(this.props.component.renderAsForm){var p=c.default.createElement("form",{className:s,onSubmit:function(t){return e.submitForm(t)},method:this.props.component.method},c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"row"},l)));return this.props.component.wrapper?c.default.createElement("div",{id:this.props.component.wrapperId,className:this.props.component.wrapperClass},p):p}return this.props.component.scrollSpy?c.default.createElement("div",{className:s,method:this.props.component.method,"data-spy":"scroll","data-target":this.props.component.scrollSpyTarget,"data-offset":"0"},c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"row"},l))):c.default.createElement("div",{className:s,method:this.props.component.method},l)}},{key:"submitForm",value:function(e){this.activeButton.submitCallback(this,e)}},{key:"storePosition",value:function(){this.props.component.preservePosition&&window.localStorage.setItem("formPosition",document.documentElement.scrollTop+"")}},{key:"setErrorTexts",value:function(e){this.setState({errorTexts:e})}},{key:"setLoading",value:function(e){this.setState({loading:e})}},{key:"componentDidMount",value:function(){if(this.props.component.preservePosition){var e=window.localStorage,t=e.getItem("formPosition");t&&window.setTimeout((function(){document.documentElement.scrollTop=parseInt(t)}),1e3),e.removeItem("formPosition")}}}])}(c.Component)},45071:(e,t,n)=>{var o=n(24994),a=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.ModalDetailTableButton=void 0;var r=o(n(17383)),s=o(n(34579)),l=o(n(28452)),i=o(n(63072)),u=o(n(29511)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&{}.hasOwnProperty.call(e,s)){var l=r?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(o,s,l):o[s]=e[s]}return o.default=e,n&&n.set(e,o),o}(n(96540));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var d=c.default.lazy((function(){return n.e(1248).then(n.bind(n,21248))})),m=c.default.lazy((function(){return n.e(8390).then(n.bind(n,38390))}));t.ModalDetailTableButton=function(e){function t(e){var n,o,a,s;return(0,r.default)(this,t),o=this,a=t,s=[e],a=(0,i.default)(a),(n=(0,l.default)(o,p()?Reflect.construct(a,s||[],(0,i.default)(o).constructor):a.apply(o,s))).state={showModal:!1},n.showModal=n.showModal.bind(n),n.closeModal=n.closeModal.bind(n),n}return(0,u.default)(t,e),(0,s.default)(t,[{key:"showModal",value:function(){this.setState({showModal:!0})}},{key:"closeModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return c.default.createElement(c.default.Fragment,null,c.default.createElement("button",{className:"c4g-btn "+this.props.className,type:"button",onClick:this.showModal},this.props.buttonLabel),c.default.createElement(d,{show:this.state.showModal},c.default.createElement(m,{title:this.props.title,message:this.props.message,onConfirm:this.closeModal,confirmButtonText:this.props.confirmButtonText})))}}])}(c.Component)},59735:(e,t,n)=>{var o=n(24994),a=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.PostActionButton=void 0;var r=o(n(94634)),s=o(n(17383)),l=o(n(34579)),i=o(n(28452)),u=o(n(63072)),c=o(n(29511)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&{}.hasOwnProperty.call(e,s)){var l=r?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(o,s,l):o[s]=e[s]}return o.default=e,n&&n.set(e,o),o}(n(96540));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}var m=f.default.lazy((function(){return n.e(6992).then(n.bind(n,76992))})),h=f.default.lazy((function(){return n.e(1248).then(n.bind(n,21248))})),g=f.default.lazy((function(){return n.e(8390).then(n.bind(n,38390))})),v=f.default.lazy((function(){return n.e(1766).then(n.bind(n,81766))})),y=f.default.lazy((function(){return n.e(8961).then(n.bind(n,68961))})),b=f.default.lazy((function(){return n.e(5716).then(n.bind(n,25716))}));t.PostActionButton=function(e){function t(e){var n,o,a,r;if((0,s.default)(this,t),o=this,a=t,r=[e],a=(0,u.default)(a),(n=(0,i.default)(o,d()?Reflect.construct(a,r||[],(0,u.default)(o).constructor):a.apply(o,r))).showModal=n.showModal.bind(n),n.closeModal=n.closeModal.bind(n),n.resetModal=n.resetModal.bind(n),n.showDynamicModal=n.showDynamicModal.bind(n),n.sendRequest=n.sendRequest.bind(n),n.onRequestDone=n.onRequestDone.bind(n),n.onRequestFail=n.onRequestFail.bind(n),n.onFormInvalid=n.onFormInvalid.bind(n),n.state={showModal:!1,dynamicModal:!1,dynamicTitle:"",dynamicMessage:"",dynamicConfirmButtonText:"",dynamicOnConfirm:n.resetModal},n.props.formFields){var l={};n.props.formFields.forEach((function(e){l[e.name]=e.value||""}),n),n.state.formData=l,n.state.errorMessages={}}return n}return(0,c.default)(t,e),(0,l.default)(t,[{key:"showModal",value:function(){this.setState({showModal:!0})}},{key:"closeModal",value:function(){if(this.props.formFields){var e={};this.props.formFields.forEach((function(t){e[t.name]=t.value||""}),this),this.setState({formData:e,errorMessages:{},showModal:!1})}else this.setState({showModal:!1})}},{key:"resetModal",value:function(){this.setState({showModal:!1,dynamicModal:!1,dynamicTitle:"",dynamicMessage:"",dynamicConfirmButtonText:"",dynamicOnConfirm:this.resetModal})}},{key:"showDynamicModal",value:function(e,t,n,o){this.setState({showModal:!0,dynamicModal:!0,dynamicTitle:e,dynamicMessage:t,dynamicConfirmButtonText:n,dynamicOnConfirm:o})}},{key:"onFormUpdate",value:function(e,t){var n=this.state.formData;n[e.name]=t,this.setState({formData:n})}},{key:"onFormInvalid",value:function(e){this.setState({errorMessages:e})}},{key:"sendRequest",value:function(){var e={};this.props.fields.forEach((function(t,n){e[t.name]=this.props.rowData[n]}),this),e.REQUEST_TOKEN=this.props.REQUEST_TOKEN,e.formData=this.state.formData,jQuery.post(this.props.url,e).done(this.onRequestDone).fail(this.onRequestFail),this.closeModal()}},{key:"onRequestDone",value:function(e){try{this.showDynamicModal(e.success.title,e.success.message,e.success.confirmButtonText,this.updateRow.bind(this,e.success.rowData))}catch(e){this.resetModal()}}},{key:"onRequestFail",value:function(e){var t=e.responseJSON;try{t.error.reload&&this.showDynamicModal(t.error.title,t.error.message,t.error.confirmButtonText,location.reload),this.showDynamicModal(t.error.title,t.error.message,t.error.confirmButtonText,this.resetModal)}catch(e){this.resetModal()}}},{key:"updateRow",value:function(e){this.props.setRowData(e,this.props.value),this.resetModal()}},{key:"render",value:function(){var e,t={};if(this.props.fields.forEach((function(e,n){void 0!==this.props.rowData[n]&&(t[e.name]=this.props.rowData[n])}),this),this.props.formFields){var n=[];this.props.formFields.forEach((function(e){var t=jQuery.extend(!0,{},e);t.value=this.state.formData[e.name],t.onChange=this.onFormUpdate.bind(this,e),t.error=this.state.errorMessages[e.name],n.push(f.default.createElement(b,(0,r.default)({key:e.name},t)))}),this),e=f.default.createElement(y,{title:this.props.title,message:this.props.message,onConfirm:this.sendRequest,onInvalid:this.onFormInvalid,onCancel:this.closeModal,confirmButtonText:this.props.confirmText,cancelButtonText:this.props.cancelText},n)}else e=f.default.createElement(v,{title:this.props.title,message:this.props.message,onConfirm:this.sendRequest,onCancel:this.closeModal,confirmButtonText:this.props.confirmText,cancelButtonText:this.props.cancelText});return f.default.createElement(m,{data:t,conditions:this.props.conditions},f.default.createElement("button",{className:"c4g-btn "+this.props.className,type:"button",onClick:this.showModal},f.default.createElement("span",{className:"c4g-btn-text"},this.props.buttonText)),f.default.createElement(h,{show:this.state.showModal&&!this.state.dynamicModal},e),f.default.createElement(h,{show:this.state.showModal&&this.state.dynamicModal},f.default.createElement(g,{title:this.state.dynamicTitle,message:this.state.dynamicMessage,onConfirm:this.state.dynamicOnConfirm,confirmButtonText:this.state.dynamicConfirmButtonText})))}}])}(f.Component)},64647:(e,t,n)=>{var o=n(24994),a=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.TableButton=void 0;var r=o(n(17383)),s=o(n(34579)),l=o(n(28452)),i=o(n(63072)),u=o(n(29511)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&{}.hasOwnProperty.call(e,s)){var l=r?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(o,s,l):o[s]=e[s]}return o.default=e,n&&n.set(e,o),o}(n(96540)),f=n(6964),p=o(n(78465)),d=o(n(29644));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}var g=c.default.lazy((function(){return n.e(2937).then(n.bind(n,82937))})),v=(0,d.default)(p.default);t.TableButton=function(e){function t(e){var n,o,a,s;return(0,r.default)(this,t),o=this,a=t,s=[e],a=(0,i.default)(a),(n=(0,l.default)(o,h()?Reflect.construct(a,s||[],(0,i.default)(o).constructor):a.apply(o,s))).showPopupForm=n.showPopupForm.bind(n),n}return(0,u.default)(t,e),(0,s.default)(t,[{key:"showPopupForm",value:function(e,t){var n=this,o={updateFunction:function(){}},a=null;this.props.formHeadlineFieldIndex>-1&&(a=c.default.createElement("div",{id:"swal-popup-div"},this.props.rowData[this.props.formHeadlineFieldIndex]));var r=c.default.createElement(c.Suspense,{fallback:c.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},c.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""}))},c.default.createElement("form",{key:1,className:"form-view",method:"POST",id:"swal-popup-form"},this.props.formFields.map((function(e,a){return c.default.createElement(g,{form:{props:o,fields:n.props.formFields},field:e,data:t,key:a+1})}))));v.fire({title:c.default.createElement("p",null,this.props.text),html:c.default.createElement(c.default.Fragment,null,a,r),confirmButtonText:this.props.submitButtonLabel||this.props.languageRefs.CONFIRM,showConfirmButton:!0,showCancelButton:!0,cancelButtonText:this.props.cancelButtonLabel||this.props.languageRefs.CANCEL,customClass:{content:"zIndex-9",actions:"zIndex-8"}}).then((function(t){if(t.isConfirmed){for(var o=document.getElementById("swal-popup-form").elements,a={value:n.props.value},r=0;r<o.length;){var s=o.item(r);s.name&&(a[s.name]=s.value),r+=1}jQuery.post(n.props.url,a).done((function(e){(new f.AlertHandler).showInfoDialog(e.success.title,e.success.message,"")})).fail((function(t){var o=new f.AlertHandler;t.responseJSON.error?o.showInfoActionDialog(t.responseJSON.error.title,t.responseJSON.error.message,(function(){return n.showPopupForm(e,t.responseJSON.formData)}),""):t.responseJSON.actionRefresh&&o.showInfoActionDialog(t.responseJSON.actionRefresh.title,t.responseJSON.actionRefresh.message,(function(){return location.reload()}),"")}))}}))}},{key:"render",value:function(){var e=this;return this.props.href&&"undefined"!==this.props.href&&this.props.href!==this.props.value?c.default.createElement("a",{href:this.props.href,className:"btn btn-outline-secondary"},this.props.text):this.props.formFields.length>0?c.default.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return e.showPopupForm(event,{})}},this.props.text):void 0}}])}(c.Component)},97219:(e,t,n)=>{var o=n(24994),a=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(94634)),s=o(n(17383)),l=o(n(34579)),i=o(n(28452)),u=o(n(63072)),c=o(n(29511)),f=o(n(43693)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&{}.hasOwnProperty.call(e,s)){var l=r?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(o,s,l):o[s]=e[s]}return o.default=e,n&&n.set(e,o),o}(n(96540)),d=(o(n(43305)),n(64647)),m=n(45071),h=n(59735),g=n(51801),v=n(6964),y=o(n(78465));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,f.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(T=function(){return!!e})()}var k=(0,o(n(29644)).default)(y.default),B=p.default.lazy((function(){return n.e(2413).then(n.bind(n,32413))})),O=p.default.lazy((function(){return n.e(2937).then(n.bind(n,82937))}));t.default=function(e){function t(e){var n,o,a,r;return(0,s.default)(this,t),o=this,a=t,r=[e],a=(0,u.default)(a),n=(0,i.default)(o,T()?Reflect.construct(a,r||[],(0,u.default)(o).constructor):a.apply(o,r)),(0,f.default)(n,"getMuiTheme",(function(){return(0,g.createTheme)({overrides:{MuiPaper:{elevation4:{boxShadow:"none"}},MuiToolbar:{gutters:{backgroundColor:"#f8f9fa",borderRadius:"0.25rem",paddingTop:"10px",paddingBottom:"10px"}}}})})),n.state={selectedItems:[],activeForm:!1,activeButton:null,data:JSON.parse(JSON.stringify(n.props.data))},n.formData=[],n.selectedItems=[],n.datatable=null,n.addSelectedItem=n.addSelectedItem.bind(n),n.handleButtonClick=n.handleButtonClick.bind(n),n.submitForm=n.submitForm.bind(n),n.cancelForm=n.cancelForm.bind(n),n.setFormData=n.setFormData.bind(n),n.fireRequest=n.fireRequest.bind(n),n}return(0,c.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this,t=null,n=null;this.state.selectedItems.length>0&&this.props.component.selectionButtons&&this.props.component.selectionButtons.length>0&&(t=p.default.createElement("div",{className:"action-button-container"},this.props.component.selectionButtons.map((function(t,n){return p.default.createElement("button",{className:"btn",key:n,onClick:function(){return e.handleButtonClick(t,n)}},t.label)})))),this.props.component.tableButtons&&this.props.component.tableButtons.length>0&&(n=p.default.createElement("div",{className:"action-button-container"},this.props.component.tableButtons.map((function(t,n){return p.default.createElement(d.TableButton,{key:n,text:t.label,href:t.href,languageRefs:e.props.languageRefs})}))));var o={textLabels:{body:{noMatch:this.props.languageRefs.TABLE_NO_MATCH,toolTip:this.props.languageRefs.TABLE_TOOLTIP,columnHeaderTooltip:function(e){return"Sortierung für ".concat(e.label)}},pagination:{next:this.props.languageRefs.TABLE_NEXT_PAGE,previous:this.props.languageRefs.TABLE_PREVIOUS_PAGE,rowsPerPage:this.props.languageRefs.TABLE_ROWS_PER_PAGE,displayRows:this.props.languageRefs.TABLE_DISPLAY_ROWS},toolbar:{search:this.props.languageRefs.TABLE_SEARCH,downloadCsv:this.props.languageRefs.TABLE_DOWNLOAD_CSV,print:this.props.languageRefs.TABLE_PRINT,viewColumns:this.props.languageRefs.TABLE_VIEW_COLUMNS,filterTable:this.props.languageRefs.TABLE_FILTER_TABLE},filter:{all:this.props.languageRefs.TABLE_FILTER_ALL,title:this.props.languageRefs.TABLE_FILTER_TITLE,reset:this.props.languageRefs.TABLE_FILTER_RESET},viewColumns:{title:this.props.languageRefs.TABLE_TITLE,titleAria:this.props.languageRefs.TABLE_TITLE_ARIA},selectedRows:{text:this.props.languageRefs.TABLE_SELECTED_TEXT,delete:this.props.languageRefs.TABLE_SELECTED_DELETE,deleteAria:this.props.languageRefs.TABLE_SELECTED_DELETE_ARIA}}};this.props.component.tableButtons&&this.props.component.tableButtons.length>0&&(o.customToolbar=function(){return p.default.createElement(p.default.Fragment,null,n)}),this.props.component.checkbox&&(o.onRowSelectionChange=function(t,n,o){e.addSelectedItem(t,n,o)}),this.props.component.selectionButtons&&this.props.component.selectionButtons.length>0&&(o.customToolbarSelect=function(){return p.default.createElement(p.default.Fragment,null,t)});var a=this.createColumns(this.props.fields);return this.props.component.checkbox?o.selectableRows="single":o.selectableRows="none",o.rowsSelected=this.state.selectedItems,o.onTableChange=function(t,n){e.persistParamsIntoStorage(n)},o.searchOpen=!!this.searchOpen,o.searchAlwaysOpen=!0,o.responsive="simple",p.default.createElement("div",{className:""},p.default.createElement(g.ThemeProvider,{theme:this.getMuiTheme()},p.default.createElement(B,{data:this.state.data.filter((function(e){return null!=e})),columns:a,options:o,key:0,ref:function(t){return e.datatable=t},title:this.props.component.headline,responsive:!0})))}},{key:"setFormData",value:function(e,t){this.formData=E(E({},this.formData),t)}},{key:"addSelectedItem",value:function(e,t,n){this.setState({selectedItems:n})}},{key:"handleButtonClick",value:function(e,t){var n=this;e.form.props={},e.form.props.updateFunction=this.setFormData;var o=p.default.createElement(p.Suspense,{fallback:p.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},p.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""}))},p.default.createElement("form",{key:1,className:"form-view",method:"POST"},e.form.fields.map((function(t,n){return p.default.createElement(O,{form:e.form,field:t,data:[],key:n+1})}))));k.fire({title:p.default.createElement("p",null,e.label),html:o,confirmButtonText:e.submitButtonLabel||this.props.languageRefs.CONFIRM,showConfirmButton:!0,showCancelButton:!0,cancelButtonText:e.cancelButtonLabel||this.props.languageRefs.CANCEL,customClass:{content:"zIndex-9",actions:"zIndex-8"}}).then((function(t){t.isConfirmed?n.submitForm(e):n.cancelForm()}))}},{key:"submitForm",value:function(e){var t=this.state.selectedItems[0],n=this.state.data[t],o=e.form.url;this.formData.id=n.id,jQuery.post(o,this.formData).done((function(e){location.reload()}))}},{key:"cancelForm",value:function(){this.resetSelection()}},{key:"format",value:function(e,t){return t.replace(/%s/g,e)}},{key:"resetSelection",value:function(){this.datatable.selectRowDelete(),this.setState({selectedItems:[]}),this.selectedItems=[]}},{key:"createColumns",value:function(e){for(var t=this,n=[],o=function(o){var a;switch(e[o].type){case"text":a=e[o],""!==e[o].format&&(a.options.customBodyRender=function(n,a,r){return t.format(n,e[o].format)}),n.push(a);break;case"reference":(a=e[o]).options.customBodyRender=function(e,t,n){return a.references[e]},n.push(a);break;case"modal-detail-button":(a=e[o]).options.customBodyRender=function(e,t,n){return e?p.default.createElement(m.ModalDetailTableButton,{buttonLabel:a.buttonLabel,title:a.label,message:e,confirmButtonText:a.confirmButtonText,className:a.className}):""},n.push(a);break;case"datetime":(a=e[o]).options.customBodyRender=function(e,t,n){if(null===e)return"";var o=new Date(1e3*e),a=o.getDate();a<10&&(a="0"+a);var r=o.getMonth()+1;r<10&&(r="0"+r);var s=o.getHours();s<10&&(s="0"+s);var l=o.getMinutes();l<10&&(l="0"+l);var i=s+":"+l,u=a+"."+r+"."+o.getFullYear()+" ";return"00:00"!==i&&(u+=i),u},n.push(a);break;case"action-button":(a=e[o]).options.customBodyRender=function(n,o,s){for(var l=[],i=0;i<a.actions.length;i++){var u=a.actions[i];u.rowData=o.rowData,u.fields=e,u.setRowData=t.props.setRowData,u.value=n,l.push(p.default.createElement(h.PostActionButton,(0,r.default)({key:i},u)))}return p.default.createElement(p.default.Fragment,null,l)},n.push(a);break;case"button":var s={name:e[o].name,label:e[o].label,options:{sort:!1,viewColumns:!1,filter:!1,customBodyRender:function(n,a,r){if("POST"===e[o].method){return p.default.createElement("a",{onMouseUp:function(a){a.preventDefault(),a.stopPropagation(),t.fireRequest(e[o].href.replace(e[o].hrefField,n))},className:"btn btn-secondary"},e[o].buttonText)}return p.default.createElement(d.TableButton,{href:e[o].href.replace(e[o].hrefField,n),text:e[o].buttonText,formFields:e[o].formFields,submitButtonLabel:e[o].submitButtonLabel,cancelButtonLabel:e[o].cancelButtonLabel,url:e[o].url,formHeadlineFieldIndex:e[o].formHeadlineFieldIndex,value:n,rowData:a.rowData})}}};n.push(s);break;case"conditional-marker":var l=e[o].markers,i={name:e[o].name,label:e[o].label,options:{sort:!1,customBodyRender:function(e){var t=l[e];return p.default.createElement("span",{className:t.class,"data-state":t.dataState,"data-toggle":t.dataToggle,"data-placement":t.dataPlacement,title:t.title})}}};n.push(i);break;default:n.push(e[o])}},a=0;a<e.length;a++)o(a);return n}},{key:"fireRequest",value:function(e){(new v.AlertHandler).showConfirmDialog(this.props.component.confirmationHeadline,this.props.component.confirmationMessage,(function(){jQuery.post(e).done((function(e){e.success&&location.reload()}))}),(function(){}),this.props.component.confirmationYes,this.props.component.confirmationNo)}},{key:"componentDidMount",value:function(){this.props.component.loadDataAsync&&this.loadData(),this.props.component.loadDataAsync||this.applyParamsFromStorage()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.component.loadDataAsync&&t.data.length<this.state.data.length?this.loadData():this.finishedLoading=!0,this.props.component.loadDataAsync&&this.finishedLoading&&!this.paramsRestored&&this.applyParamsFromStorage()}},{key:"applyParamsFromStorage",value:function(){var e=this,t=this.props.component.storageKey,n=new URL(window.location),o=new URLSearchParams(n.search);o.has("groupId")&&(t+="-"+o.get("groupId"));var a=JSON.parse(window.localStorage.getItem(t+"-filters")),r=parseInt(window.localStorage.getItem(t+"-page"),10),s=window.localStorage.getItem(t+"-search");null!==a&&null!==r&&(this.searchOpen=""!==s,window.setTimeout((function(){e.datatable.setState({filterList:a,page:r,searchText:s},(function(){e.resetSelection(),e.paramsRestored=!0}))}),1e3))}},{key:"persistParamsIntoStorage",value:function(e){if(this.finishedLoading){var t=this.props.component.storageKey,n=new URL(window.location),o=new URLSearchParams(n.search);if(o.has("groupId"))t+="-"+o.get("groupId");window.localStorage.setItem(t+"-filters",JSON.stringify(e.filterList)),window.localStorage.setItem(t+"-page",e.page),window.localStorage.setItem(t+"-search",null===e.searchText?"":e.searchText)}}},{key:"loadData",value:function(){var e=this,t=this.props.component.asyncDataUrl;t+="/"+this.state.data.length,jQuery.get(t).done((function(t){var n=e.state.data.concat(t);e.setState({data:n})}))}}])}(p.Component)}}]);
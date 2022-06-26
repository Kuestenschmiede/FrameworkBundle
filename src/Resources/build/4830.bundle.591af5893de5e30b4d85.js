"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[4830,4938],{14938:(t,e,n)=>{var o=n(60093);Object.defineProperty(e,"__esModule",{value:!0}),e.AlertHandler=void 0;var r=o(n(9344)),a=o(n(62708)),i=o(n(69554)),u=o(n(41743)),l=o(n(75690)),f=function(){function t(){(0,i.default)(this,t)}var e;return(0,u.default)(t,[{key:"showErrorDialog",value:function(t,e,n){l.default.fire({title:t,text:e,icon:"error",customClass:n||""})}},{key:"showInfoDialog",value:function(t,e,n){l.default.fire({title:t,text:e,icon:"info",customClass:n||""})}},{key:"showInfoActionDialog",value:function(t,e,n,o){l.default.fire({title:t,text:e,icon:"info",customClass:o||""}).then((function(){n()}))}},{key:"showInfoActionDialog2",value:function(t,e,n,o){l.default.fire({title:t,text:e,icon:"info",showLoaderOnConfirm:!0,customClass:o||"",preConfirm:function(t){n()}})}},{key:"showConfirmDialog",value:function(t,e,n,o,r,a,i){l.default.fire({title:t,text:e,icon:"warning",showCancelButton:!0,confirmButtonText:r||"Confirm",cancelButtonText:a||"Cancel",customClass:i||""}).then((function(t){t.value?n():o()}))}},{key:"showConfirmDialogHTML",value:function(t,e,n,o,r,a,i){l.default.fire({title:t,html:e,icon:"warning",showCancelButton:!0,confirmButtonText:r||"Confirm",cancelButtonText:a||"Cancel",customClass:i||""}).then((function(t){t.value?n():o()}))}},{key:"showPreConfirmDialog",value:function(t,e,n,o,r,a,i){l.default.fire({title:t,text:e,icon:"warning",showCancelButton:!0,confirmButtonText:o||"Confirm",cancelButtonText:r||"Cancel",showLoaderOnConfirm:i||!0,preConfirm:function(){return new Promise((function(t){n()}))},allowOutsideClick:function(){return!l.default.isLoading()},customClass:a||""})}},{key:"showLoadingDialog",value:function(t,e,n,o){l.default.fire({title:t,text:e,showCancelButton:!1,allowEscapeKey:!1,allowOutsideClick:!1,showLoaderOnConfirm:!0,onBeforeOpen:function(){l.default.clickConfirm()},customClass:o||"",preConfirm:function(){return new Promise((function(t){n()}))}})}},{key:"showSelectDialog",value:(e=(0,a.default)(r.default.mark((function t(e,n,o,a,i){var u,f;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.default.fire({title:e,input:"select",inputOptions:n,inputPlaceholder:"-",showCancelButton:!0,confirmButtonText:o,cancelButtonText:a,customClass:i||""});case 2:return u=t.sent,f=u.value,t.abrupt("return",f);case 5:case"end":return t.stop()}}),t)}))),function(t,n,o,r,a){return e.apply(this,arguments)})}]),t}();e.AlertHandler=f},24830:(t,e,n)=>{var o=n(95318),r=n(50008);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n(34575)),i=o(n(93913)),u=o(n(81506)),l=o(n(2205)),f=o(n(78585)),c=o(n(29754)),s=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!=typeof t)return{default:t};var n=d(e);if(n&&n.has(t))return n.get(t);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&Object.prototype.hasOwnProperty.call(t,i)){var u=a?Object.getOwnPropertyDescriptor(t,i):null;u&&(u.get||u.set)?Object.defineProperty(o,i,u):o[i]=t[i]}o.default=t,n&&n.set(t,o);return o}(n(67294)),p=n(14938);function d(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(d=function(t){return t?n:e})(t)}function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=(0,c.default)(t);if(e){var r=(0,c.default)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,f.default)(this,n)}}var w=function(t){(0,l.default)(n,t);var e=h(n);function n(t){var o;return(0,a.default)(this,n),(o=e.call(this,t)).showWarningDialog=o.showWarningDialog.bind((0,u.default)(o)),o}return(0,i.default)(n,[{key:"render",value:function(){var t=this;return this.props.button.warnBeforeAction?s.default.createElement("a",{className:this.props.button.className+" btn btn-primary",href:"#",onClick:function(e){e.preventDefault(),t.showWarningDialog()}},this.props.button.caption):s.default.createElement("a",{className:this.props.button.className+" btn btn-primary",href:this.props.button.href},this.props.button.caption)}},{key:"showWarningDialog",value:function(){var t=this;(new p.AlertHandler).showConfirmDialog(this.props.button.warnTextHeadline,this.props.button.warnTextMessage,(function(){window.location=t.props.button.href}),(function(){}),this.props.button.warnTextConfirm,this.props.button.warnTextCancel)}}]),n}(s.Component);e.default=w}}]);
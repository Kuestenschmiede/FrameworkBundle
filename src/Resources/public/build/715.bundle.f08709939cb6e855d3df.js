"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[715],{70715:(t,e,n)=>{var r=n(64836),o=n(18698);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=r(n(56690)),a=r(n(89728)),c=r(n(66115)),i=r(n(61655)),f=r(n(94993)),l=r(n(73808)),p=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==o(t)&&"function"!=typeof t)return{default:t};var n=s(e);if(n&&n.has(t))return n.get(t);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var c=u?Object.getOwnPropertyDescriptor(t,a):null;c&&(c.get||c.set)?Object.defineProperty(r,a,c):r[a]=t[a]}r.default=t,n&&n.set(t,r);return r}(n(67294));function s(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(s=function(t){return t?n:e})(t)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,l.default)(t);if(e){var o=(0,l.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,f.default)(this,n)}}var b=function(t){(0,i.default)(n,t);var e=d(n);function n(t){var r;return(0,u.default)(this,n),(r=e.call(this,t)).clickButton=r.clickButton.bind((0,c.default)(r)),r.submitCallback=r.submitCallback.bind((0,c.default)(r)),r}return(0,a.default)(n,[{key:"clickButton",value:function(){this.props.form.activeButton=this}},{key:"submitCallback",value:function(t,e){var n=this;e.preventDefault(),e.stopPropagation();var r=this.props.button.asyncUrl,o="",u=Object.keys(t.props.component.data),a={};u.forEach((function(e){""!==o&&(o+="&"),o+=e+"="+t.props.component.data[e],a[e]=t.props.component.data[e]})),fetch(r,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:o}).then((function(t){return t.json()})).then((function(e){t.props.setFunction(n.props.button.targetComponent,e,a)})),this.props.form.activeButton=null}},{key:"render",value:function(){return p.default.createElement("button",{className:this.props.button.className,type:"submit",onClick:this.clickButton},this.props.button.caption)}}]),n}(p.Component);e.default=b}}]);
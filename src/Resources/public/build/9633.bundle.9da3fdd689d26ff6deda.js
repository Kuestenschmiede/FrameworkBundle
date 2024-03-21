/*! For license information please see 9633.bundle.9da3fdd689d26ff6deda.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[9633],{9633:(e,t,r)=>{var i=r(64836),n=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(r(56690)),o=i(r(89728)),s=i(r(66115)),l=i(r(61655)),p=i(r(94993)),d=i(r(73808)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var i={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=a?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(i,o,s):i[o]=e[o]}return i.default=e,r&&r.set(e,i),i}(r(67294));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=(0,d.default)(e);if(t){var n=(0,d.default)(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return(0,p.default)(this,r)}}var h=f.default.lazy((function(){return r.e(1732).then(r.bind(r,41732))}));t.default=function(e){(0,l.default)(r,e);var t=u(r);function r(e){var i;return(0,a.default)(this,r),(i=t.call(this,e)).hasValidExternalLink=i.hasValidExternalLink.bind((0,s.default)(i)),i.executeAsyncCall=i.executeAsyncCall.bind((0,s.default)(i)),i}return(0,o.default)(r,[{key:"hasValidExternalLink",value:function(){if(!this.props.field.externalLinkField)return!1;try{var e=!1;if(0===this.props.field.externalLinkFieldConditionField.length)return!0;if(this.props.field.externalLinkFieldConditionField.length===this.props.field.externalLinkFieldConditionValue.length)return this.props.field.externalLinkFieldConditionField.forEach((function(t,r){String(this.props.data[t])===String(this.props.field.externalLinkFieldConditionValue[r])&&(e=!0)}),this),e}catch(e){return!1}}},{key:"render",value:function(){var e=this;if(this.props.field.href&&this.props.field.linkText){var t=null;this.props.field.label&&(t=f.default.createElement("span",{className:"entry-label"},this.props.field.label));var r=this.props.field.href;this.hasValidExternalLink()?r=this.props.data[this.props.field.externalLinkField]:this.props.field.hrefFields&&this.props.field.hrefFields.map((function(t,i){r=r.replace(t,e.props.data[t])}));if(this.props.field.conditionalClasses)for(var i in this.props.field.conditionalClasses)this.props.field.conditionalClasses.hasOwnProperty(i)&&this.props.data[i]&&"0"!==this.props.data[i]&&this.props.field.conditionalClasses[i]+" ";var n=null,a=this.props.field.class;if(this.props.field.asyncCall)if(this.props.field.addDataAttributes){var o="";this.props.data.imageList?o=this.props.data.imageList.src:this.props.data.image&&(o=this.props.data.image.src),n=f.default.createElement("button",{type:"button",className:a,"data-image":o,"data-name":this.props.data.name,"data-moreurl":r,onClick:function(t){t.preventDefault(),e.executeAsyncCall(r)},rel:"noreferrer noopener"},this.props.field.linkText)}else n=f.default.createElement("button",{type:"button",className:a,onClick:function(t){t.preventDefault(),e.executeAsyncCall(r)},rel:"noreferrer noopener"},this.props.field.linkText);else n=f.default.createElement("a",{className:a,href:r,rel:"noreferrer noopener"},this.props.field.linkText);return f.default.createElement(h,{data:this.props.data,conditions:this.props.field.conditions},f.default.createElement("div",{className:this.props.field.wrapperClass},t,n))}return""}},{key:"executeAsyncCall",value:function(e){var t=this,r=this,i=new FormData;if(Object.entries(this.props.data).forEach((function(e){i.set(e[0],String(e[1]))})),fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest"},redirect:"follow",referrerPolicy:"no-referrer",body:i}).then((function(e){try{e.json().then((function(e){if(""!==String(t.props.field.redirectPageOnSuccess)&&(window.location=String(t.props.field.redirectPageOnSuccess)),e.updatedData){var i=t.props.data,n=t.props.list.props.data;if("single"===e.updateType){for(var a in e.updatedData)e.updatedData.hasOwnProperty(a)&&(i[a]=e.updatedData[a]);for(var o=0;o<n.length;o++)if(n[o].id===i.id){n[o]=i;break}}else n=(e.updateType,e.updatedData);r.props.list.props.setFunction(r.props.list.props.name,n,[])}}))}catch(e){}})),this.props.field.hookAfterClick&&this.props.field.hookName&&window.c4gHooks&&window.c4gHooks[this.props.field.hookName])for(var n=0;n<window.c4gHooks[this.props.field.hookName].length;n++)"function"==typeof window.c4gHooks[this.props.field.hookName][n]&&window.c4gHooks[this.props.field.hookName][n](this.props.field,this.props.data)}}]),r}(f.Component)}}]);
/*! For license information please see 1335.bundle.7abd1974d03756601848.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[1335],{51335:(e,t,i)=>{var r=i(64836),s=i(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(i(56690)),p=r(i(89728)),o=r(i(66115)),l=r(i(61655)),n=r(i(94993)),d=r(i(73808)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var i=h(t);if(i&&i.has(e))return i.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in e)if("default"!==p&&Object.prototype.hasOwnProperty.call(e,p)){var o=a?Object.getOwnPropertyDescriptor(e,p):null;o&&(o.get||o.set)?Object.defineProperty(r,p,o):r[p]=e[p]}r.default=e,i&&i.set(e,r);return r}(i(67294));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(h=function(e){return e?i:t})(e)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=(0,d.default)(e);if(t){var s=(0,d.default)(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return(0,n.default)(this,i)}}var u=f.default.lazy((function(){return i.e(1732).then(i.bind(i,41732))}));t.default=function(e){(0,l.default)(i,e);var t=c(i);function i(e){var r;return(0,a.default)(this,i),(r=t.call(this,e)).hasValidExternalLink=r.hasValidExternalLink.bind((0,o.default)(r)),r.executeAsyncCall=r.executeAsyncCall.bind((0,o.default)(r)),r}return(0,p.default)(i,[{key:"hasValidExternalLink",value:function(){if(!this.props.field.externalLinkField)return!1;try{var e=!1;if(0===this.props.field.externalLinkFieldConditionField.length)return!0;if(this.props.field.externalLinkFieldConditionField.length===this.props.field.externalLinkFieldConditionValue.length)return this.props.field.externalLinkFieldConditionField.forEach((function(t,i){String(this.props.data[t])===String(this.props.field.externalLinkFieldConditionValue[i])&&(e=!0)}),this),e}catch(e){return!1}}},{key:"render",value:function(){var e=this;if(this.props.data[this.props.field.name]||this.props.field.imageSource){var t=null;this.props.field.label&&(t=f.default.createElement("span",{className:"entry-label"},this.props.field.label));var i,r,s=null;this.props.field.itemProp&&(s=this.props.field.itemProp),this.props.data[this.props.field.name]&&(this.props.data[this.props.field.name].height&&(i=this.props.data[this.props.field.name].height),this.props.data[this.props.field.name].width&&(r=this.props.data[this.props.field.name].width)),!i&&this.props.field.height&&(i=this.props.field.height),!r&&this.props.field.width&&(r=this.props.field.width);var a=this.props.field.href;return this.hasValidExternalLink()?a=this.props.data[this.props.field.externalLinkField]:this.props.field.hrefFields&&this.props.field.hrefFields.map((function(t,i){a=a.replace(t,e.props.data[t])})),a?f.default.createElement(u,{data:this.props.data,conditions:this.props.field.conditions},f.default.createElement("div",{className:this.props.field.wrapperClass},t,f.default.createElement("a",{href:a,rel:"noreferrer noopener","data-name":this.props.data.name,"data-moreurl":a},f.default.createElement("img",{className:this.props.field.class,height:i,width:r,itemProp:s,loading:"lazy",src:this.props.field.imageSource||this.props.data[this.props.field.name]&&this.props.data[this.props.field.name].src,alt:this.props.field.imageAlt||this.props.data[this.props.field.name]&&this.props.data[this.props.field.name].alt,title:this.props.field.title||this.props.field.imageAlt||this.props.data[this.props.field.name]&&this.props.data[this.props.field.name].alt})))):f.default.createElement(u,{data:this.props.data,conditions:this.props.field.conditions},f.default.createElement("div",{className:this.props.field.wrapperClass},t,f.default.createElement("img",{className:this.props.field.class,itemProp:s,loading:"lazy",height:i,width:r,src:this.props.field.imageSource||this.props.data[this.props.field.name]&&this.props.data[this.props.field.name].src,alt:this.props.field.imageAlt||this.props.data[this.props.field.name]&&this.props.data[this.props.field.name].alt,title:this.props.field.title||this.props.field.imageAlt||this.props.data[this.props.field.name]&&this.props.data[this.props.field.name].alt})))}return""}},{key:"executeAsyncCall",value:function(e){var t=this,i=this,r=new FormData;if(Object.entries(this.props.data).forEach((function(e){r.set(e[0],String(e[1]))})),fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest"},redirect:"follow",referrerPolicy:"no-referrer",body:r}).then((function(e){try{e.json().then((function(e){if(""!==String(t.props.field.redirectPageOnSuccess)&&(window.location=String(t.props.field.redirectPageOnSuccess)),e.updatedData){var r=t.props.data,s=t.props.list.props.data;if("single"===e.updateType){for(var a in e.updatedData)e.updatedData.hasOwnProperty(a)&&(r[a]=e.updatedData[a]);for(var p=0;p<s.length;p++)if(s[p].id===r.id){s[p]=r;break}}else s=(e.updateType,e.updatedData);i.props.list.props.setFunction(i.props.list.props.name,s,[])}}))}catch(e){}})),this.props.field.hookAfterClick&&this.props.field.hookName&&window.c4gHooks&&window.c4gHooks[this.props.field.hookName])for(var s=0;s<window.c4gHooks[this.props.field.hookName].length;s++)"function"==typeof window.c4gHooks[this.props.field.hookName][s]&&window.c4gHooks[this.props.field.hookName][s](this.props.field,this.props.data)}}]),i}(f.Component)}}]);
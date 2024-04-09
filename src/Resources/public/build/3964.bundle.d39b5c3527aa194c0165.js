/*! For license information please see 3964.bundle.d39b5c3527aa194c0165.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[3964],{23964:(e,t,i)=>{var r=i(24994),s=i(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(i(17383)),p=r(i(34579)),o=r(i(28452)),l=r(i(63072)),n=r(i(29511)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=s(e)&&"function"!=typeof e)return{default:e};var i=h(t);if(i&&i.has(e))return i.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in e)if("default"!==p&&{}.hasOwnProperty.call(e,p)){var o=a?Object.getOwnPropertyDescriptor(e,p):null;o&&(o.get||o.set)?Object.defineProperty(r,p,o):r[p]=e[p]}return r.default=e,i&&i.set(e,r),r}(i(96540));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(h=function(e){return e?i:t})(e)}function f(e,t,i){return t=(0,l.default)(t),(0,o.default)(e,c()?Reflect.construct(t,i||[],(0,l.default)(e).constructor):t.apply(e,i))}function c(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(c=function(){return!!e})()}var u=d.default.lazy((function(){return i.e(6992).then(i.bind(i,76992))}));t.default=function(e){function t(e){var i;return(0,a.default)(this,t),(i=f(this,t,[e])).hasValidExternalLink=i.hasValidExternalLink.bind(i),i.executeAsyncCall=i.executeAsyncCall.bind(i),i}return(0,n.default)(t,e),(0,p.default)(t,[{key:"hasValidExternalLink",value:function(){if(!this.props.field.externalLinkField)return!1;try{var e=!1;if(0===this.props.field.externalLinkFieldConditionField.length)return!0;if(this.props.field.externalLinkFieldConditionField.length===this.props.field.externalLinkFieldConditionValue.length)return this.props.field.externalLinkFieldConditionField.forEach((function(t,i){String(this.props.data[t])===String(this.props.field.externalLinkFieldConditionValue[i])&&(e=!0)}),this),e}catch(e){return!1}}},{key:"render",value:function(){var e=this;if(this.props.data[this.props.field.name]||this.props.field.imageSource){var t=null;this.props.field.label&&(t=d.default.createElement("span",{className:"entry-label"},this.props.field.label));var i,r,s=null;this.props.field.itemProp&&(s=this.props.field.itemProp),this.props.data[this.props.field.name]&&(this.props.data[this.props.field.name].height&&(i=this.props.data[this.props.field.name].height),this.props.data[this.props.field.name].width&&(r=this.props.data[this.props.field.name].width)),!i&&this.props.field.height&&(i=this.props.field.height),!r&&this.props.field.width&&(r=this.props.field.width);var a=this.props.field.href;return this.hasValidExternalLink()?a=this.props.data[this.props.field.externalLinkField]:this.props.field.hrefFields&&this.props.field.hrefFields.map((function(t,i){a=a.replace(t,e.props.data[t])})),a?d.default.createElement(u,{data:this.props.data,conditions:this.props.field.conditions},d.default.createElement("div",{className:this.props.field.wrapperClass},t,d.default.createElement("a",{href:a,rel:"noreferrer noopener","data-name":this.props.data.name,"data-moreurl":a},d.default.createElement("img",{className:this.props.field.class,height:i,width:r,itemProp:s,loading:"lazy",src:this.props.field.imageSource||this.props.data[this.props.field.name]&&this.props.data[this.props.field.name].src,alt:this.props.field.imageAlt||this.props.data[this.props.field.name]&&this.props.data[this.props.field.name].alt,title:this.props.field.title||this.props.field.imageAlt||this.props.data[this.props.field.name]&&this.props.data[this.props.field.name].alt})))):d.default.createElement(u,{data:this.props.data,conditions:this.props.field.conditions},d.default.createElement("div",{className:this.props.field.wrapperClass},t,d.default.createElement("img",{className:this.props.field.class,itemProp:s,loading:"lazy",height:i,width:r,src:this.props.field.imageSource||this.props.data[this.props.field.name]&&this.props.data[this.props.field.name].src,alt:this.props.field.imageAlt||this.props.data[this.props.field.name]&&this.props.data[this.props.field.name].alt,title:this.props.field.title||this.props.field.imageAlt||this.props.data[this.props.field.name]&&this.props.data[this.props.field.name].alt})))}return""}},{key:"executeAsyncCall",value:function(e){var t=this,i=this,r=new FormData;if(Object.entries(this.props.data).forEach((function(e){r.set(e[0],String(e[1]))})),fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest"},redirect:"follow",referrerPolicy:"no-referrer",body:r}).then((function(e){try{e.json().then((function(e){if(""!==String(t.props.field.redirectPageOnSuccess)&&(window.location=String(t.props.field.redirectPageOnSuccess)),e.updatedData){var r=t.props.data,s=t.props.list.props.data;if("single"===e.updateType){for(var a in e.updatedData)e.updatedData.hasOwnProperty(a)&&(r[a]=e.updatedData[a]);for(var p=0;p<s.length;p++)if(s[p].id===r.id){s[p]=r;break}}else s=(e.updateType,e.updatedData);i.props.list.props.setFunction(i.props.list.props.name,s,[])}}))}catch(e){}})),this.props.field.hookAfterClick&&this.props.field.hookName&&window.c4gHooks&&window.c4gHooks[this.props.field.hookName])for(var s=0;s<window.c4gHooks[this.props.field.hookName].length;s++)"function"==typeof window.c4gHooks[this.props.field.hookName][s]&&window.c4gHooks[this.props.field.hookName][s](this.props.field,this.props.data)}}])}(d.Component)}}]);
(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[1951],{11951:(e,t,r)=>{"use strict";var a=r(95318),n=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(r(34575)),l=a(r(93913)),f=a(r(2205)),c=a(r(78585)),i=a(r(29754)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var a={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var f=u?Object.getOwnPropertyDescriptor(e,l):null;f&&(f.get||f.set)?Object.defineProperty(a,l,f):a[l]=e[l]}a.default=e,r&&r.set(e,a);return a}(r(67294));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,i.default)(e);if(t){var n=(0,i.default)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,c.default)(this,r)}}var p=function(e){(0,f.default)(r,e);var t=d(r);function r(e){return(0,u.default)(this,r),t.call(this,e)}return(0,l.default)(r,[{key:"render",value:function(){var e=this,t=this.createImageData();return 0===t.length?null:o.default.createElement("div",{className:this.props.field.class},o.default.createElement("div",{className:"detail-view__image-gallery-inner"},t.map((function(t,r){return o.default.createElement("a",{key:r,"data-fancybox":"gallery_"+e.props.field.name,href:t.src,className:e.props.field.name+"-item"+(0===r?" first":"")},o.default.createElement("img",{className:"img-fluid",src:t.src,alt:t.alt,width:t.width,height:t.height}))}))))}},{key:"createImageData",value:function(){for(var e=this.props.field.name,t=this.props.data,r=[],a=0;t[e+"_"+a];)r.push(t[e+"_"+a]),a++;return r}}]),r}(o.Component);t.default=p}}]);
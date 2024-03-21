/*! For license information please see 6935.bundle.f53587b92cd82514eb4a.js.LICENSE.txt */
(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[6935],{96935:(e,t,n)=>{"use strict";var o=n(42417),r=n(30624);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(77228)),i=o(n(86491)),l=o(n(82065)),c=o(n(42336)),s=o(n(72556)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=e[i]}return o.default=e,n&&n.set(e,o),o}(n(3044)),f=n(34154),p=n(89788),d=n(95751),v=n(72795),m=n(12200);function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,s.default)(e);if(t){var r=(0,s.default)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,c.default)(this,n)}}t.default=function(e){(0,l.default)(n,e);var t=w(n);function n(e){var o,r,i;(0,a.default)(this,n),o=t.call(this,e);var l=(0,d.getLanguage)(e.mapController.data),c=e.mapController.map,s=(e.mapController.data,function(e){e.stopPropagation(),c.getTarget()&&c.once("rendercomplete",(function(){var e=document.createElement("canvas"),t=c.getSize();e.width=t[0],e.height=t[1];var n=e.getContext("2d");Array.prototype.forEach.call(c.getViewport().querySelectorAll(".ol-layer canvas, canvas.ol-layer"),(function(e){if(e.width>0){var t,o=e.parentNode.style.opacity||e.style.opacity;n.globalAlpha=""===o?1:Number(o);var r=e.style.transform;t=r?r.match(/^matrix\(([^\(]*)\)$/)[1].split(",").map(Number):[parseFloat(e.style.width)/e.width,0,0,parseFloat(e.style.height)/e.height,0,0],CanvasRenderingContext2D.prototype.setTransform.apply(n,t);var a=e.parentNode.style.backgroundColor;a&&(n.fillStyle=a,n.fillRect(0,0,e.width,e.height)),n.drawImage(e,0,0)}})),n.globalAlpha=1,n.setTransform(1,0,0,1,0,0);var o=e.toDataURL();if(window.c4gMapsHooks.printMap&&window.c4gMapsHooks.printMap.length>0)m.utils.callHookFunctions(window.c4gMapsHooks.printMap,o);else(0,v.saveAs)(o,"map.png")}))});(r=document.createElement("div")).className=p.cssConstants.PRINT+" "+p.cssConstants.OL_UNSELECTABLE+" c4g-portside-control ol-control",(i=document.createElement("button")).title=l.CTRL_PRINT,i.className=p.cssConstants.PRINT,r.appendChild(i),i.addEventListener("click",s,{useCapture:!1,passive:!0}),i.addEventListener("touchstart",s,{useCapture:!1,passive:!0});var u=new f.Control({element:r,target:o.props.target}),g=e.mapController,w=g.arrComponents.findIndex((function(e){return"print"===e.name}));return g.arrComponents[w].control=u,g.mapsControls.controls.print=u,o}return(0,i.default)(n,[{key:"render",value:function(){return null}}]),n}(u.Component)},72795:function(e,t,n){var o,r,a;r=[],void 0===(a="function"==typeof(o=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){c(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,l=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,n){var l=i.URL||i.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?a(c):r(c.href)?o(e,t,n):a(c,c.target="_blank")):(c.href=l.createObjectURL(e),setTimeout((function(){l.revokeObjectURL(c.href)}),4e4),setTimeout((function(){a(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),n);else if(r(e))o(e,n,i);else{var l=document.createElement("a");l.href=e,l.target="_blank",setTimeout((function(){a(l)}))}}:function(e,t,n,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var a="application/octet-stream"===e.type,c=/constructor/i.test(i.HTMLElement)||i.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||a&&c||l)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},u.readAsDataURL(e)}else{var f=i.URL||i.webkitURL,p=f.createObjectURL(e);r?r.location=p:location.href=p,r=null,setTimeout((function(){f.revokeObjectURL(p)}),4e4)}});i.saveAs=c.saveAs=c,e.exports=c})?o.apply(t,r):o)||(e.exports=a)}}]);
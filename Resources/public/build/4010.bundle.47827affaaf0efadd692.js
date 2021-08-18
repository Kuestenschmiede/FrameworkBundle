/*! For license information please see 4010.bundle.47827affaaf0efadd692.js.LICENSE.txt */
(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[4010],{44010:(e,t,n)=>{"use strict";var r=n(46147),o=n(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(28110)),a=r(n(20963)),u=r(n(23422)),c=r(n(60560)),s=r(n(42315)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=i?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(r,a,u):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(3044)),f=n(99553),p=n(96983),d=n(94344),h=n(60173),m=n(72795);function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.default)(e);if(t){var o=(0,s.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.default)(this,n)}}var y=function(e){(0,u.default)(n,e);var t=v(n);function n(e){var r,o,a;(0,i.default)(this,n),r=t.call(this,e);var u=(0,d.getLanguage)(e.mapController.data),c=e.mapController.map,s=(e.mapController.data,{filter:function(e){return!e.className||(-1===e.className.indexOf("ol-control")||-1!==e.className.indexOf("ol-uncollapsible"))&&-1===e.className.indexOf("c4g-open")},bgcolor:"#000000"}),l=function(e){if(e.stopPropagation(),c.getTarget()){var t=document.getElementById(c.getTarget());(0,h.toBlob)(t,s).then((function(e){(0,m.saveAs)(e,"map.png")}))}};(o=document.createElement("div")).className=p.cssConstants.PRINT+" "+p.cssConstants.OL_UNSELECTABLE+" c4g-portside-control ol-control",(a=document.createElement("button")).title=u.CTRL_PRINT,a.className=p.cssConstants.PRINT,o.appendChild(a),a.addEventListener("click",l,{useCapture:!1,passive:!0}),a.addEventListener("touchstart",l,{useCapture:!1,passive:!0});var g=new f.Control({element:o,target:r.props.target}),v=e.mapController;return v.mapsControls.controls.print=g,v.map.addControl(g),r}return(0,a.default)(n,[{key:"render",value:function(){return null}}]),n}(l.Component);t.default=y},60173:function(e){!function(t){"use strict";var n={escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:r,mimeType:function(e){return e=r(e).toLowerCase(),function(){var e="application/font-woff",t="image/jpeg";return{woff:e,woff2:e,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:t,jpeg:t,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}()[e]||""},dataAsUrl:function(e,t){return"data:"+t+";base64,"+e},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(e){return e.toBlob?new Promise((function(t){e.toBlob(t)})):function(e){return new Promise((function(n){for(var r=t.atob(e.toDataURL().split(",")[1]),o=r.length,i=new Uint8Array(o),a=0;a<o;a++)i[a]=r.charCodeAt(a);n(new Blob([i],{type:"image/png"}))}))}(e)},resolveUrl:function(e,t){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=t,o.href=e,o.href},getAndEncode:function(e){return m.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime()),new Promise((function(t){var n,r,o=new XMLHttpRequest;function i(e){console.error(e),t("")}o.onreadystatechange=function(){var r;4===o.readyState&&(200===o.status?((r=new FileReader).onloadend=function(){var e=r.result.split(/,/)[1];t(e)},r.readAsDataURL(o.response)):n?t(n):i("cannot fetch resource: "+e+", status: "+o.status))},o.ontimeout=function(){n?t(n):i("timeout of 30000ms occured while fetching resource: "+e)},o.responseType="blob",o.timeout=3e4,m.impl.options.useCredentials&&(o.withCredentials=!0),o.open("GET",e,!0),o.send(),!m.impl.options.imagePlaceholder||(r=m.impl.options.imagePlaceholder.split(/,/))&&r[1]&&(n=r[1])}))},uid:function(){var e=0;return function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+e++}}(),delay:function(e){return function(t){return new Promise((function(n){setTimeout((function(){n(t)}),e)}))}},asArray:function(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t},escapeXhtml:function(e){return e.replace(/%/g,"%25").replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(e){return"data:,"===e?Promise.resolve():new Promise((function(t,n){var r=new Image;m.impl.options.useCredentials&&(r.crossOrigin="use-credentials"),r.onload=function(){t(r)},r.onerror=n,r.src=e}))},width:function(e){var t=o(e,"border-left-width"),n=o(e,"border-right-width");return e.scrollWidth+t+n},height:function(e){var t=o(e,"border-top-width"),n=o(e,"border-bottom-width");return e.scrollHeight+t+n}};function r(e){return(e=/\.([^\.\/]*?)(\?|$)/g.exec(e))?e[1]:""}function o(e,n){return n=t.getComputedStyle(e).getPropertyValue(n),parseFloat(n.replace("px",""))}var i,a={inlineAll:function(e,t,n){return u(e)?Promise.resolve(e).then(c).then((function(r){var o=Promise.resolve(e);return r.forEach((function(e){o=o.then((function(r){return s(r,e,t,n)}))})),o})):Promise.resolve(e)},shouldProcess:u,impl:{readUrls:c,inline:s}};function u(e){return-1!==e.search(i)}function c(e){for(var t,r=[];null!==(t=i.exec(e));)r.push(t[1]);return r.filter((function(e){return!n.isDataUrl(e)}))}function s(e,t,r,o){return Promise.resolve(t).then((function(e){return r?n.resolveUrl(e,r):e})).then(o||n.getAndEncode).then((function(e){return n.dataAsUrl(e,n.mimeType(t))})).then((function(r){return e.replace(new RegExp("(url\\(['\"]?)("+n.escape(t)+")(['\"]?\\))","g"),"$1"+r+"$3")}))}var l={resolveAll:function(){return f().then((function(e){return Promise.all(e.map((function(e){return e.resolve()})))})).then((function(e){return e.join("\n")}))},impl:{readAll:f}};function f(){return Promise.resolve(n.asArray(document.styleSheets)).then((function(e){var t=[];return e.forEach((function(e){if(Object.getPrototypeOf(e).hasOwnProperty("cssRules"))try{n.asArray(e.cssRules||[]).forEach(t.push.bind(t))}catch(t){console.log("Error while reading CSS rules from "+e.href,t.toString())}})),t})).then((function(e){return e.filter((function(e){return e.type===CSSRule.FONT_FACE_RULE})).filter((function(e){return a.shouldProcess(e.style.getPropertyValue("src"))}))})).then((function(t){return t.map(e)}));function e(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return a.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}}var p={inlineAll:function e(t){return t instanceof Element?function(e){var t=e.style.getPropertyValue("background");return t?a.inlineAll(t).then((function(t){e.style.setProperty("background",t,backgroud)})).then((function(){return e})):Promise.resolve(e)}(t).then((function(){return t instanceof HTMLImageElement?d(t).inline():Promise.all(n.asArray(t.childNodes).map((function(t){return e(t)})))})):Promise.resolve(t)},impl:{newImage:d}};function d(e){return{inline:function(t){return n.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(t||n.getAndEncode).then((function(t){return n.dataAsUrl(t,n.mimeType(e.src))})).then((function(t){return new Promise((function(n){e.onload=n,e.onerror=n,e.src=t}))}))}}}var h={imagePlaceholder:void 0,cacheBust:!(i=/url\(['"]?([^'"]+?)['"]?\)/g),useCredentials:!1},m={toSvg:g,toPng:function(e,t){return v(e,t||{}).then((function(e){return e.toDataURL()}))},toJpeg:function(e,t){return v(e,t=t||{}).then((function(e){return e.toDataURL("image/jpeg",t.quality||1)}))},toBlob:function(e,t){return v(e,t||{}).then(n.canvasToBlob)},toPixelData:function(e,t){return v(e,t||{}).then((function(t){return t.getContext("2d").getImageData(0,0,n.width(e),n.height(e)).data}))},toCanvas:function(e,t){return v(e,t||{})},impl:{fontFaces:l,images:p,util:n,inliner:a,options:{}}};function g(e,r){return function(e){void 0===e.imagePlaceholder?m.impl.options.imagePlaceholder=h.imagePlaceholder:m.impl.options.imagePlaceholder=e.imagePlaceholder,void 0===e.cacheBust?m.impl.options.cacheBust=h.cacheBust:m.impl.options.cacheBust=e.cacheBust,void 0===e.useCredentials?m.impl.options.useCredentials=h.useCredentials:m.impl.options.useCredentials=e.useCredentials}(r=r||{}),Promise.resolve(e).then((function(e){return function e(r,o,i){return i||!o||o(r)?Promise.resolve(r).then((function(e){return e instanceof HTMLCanvasElement?n.makeImage(e.toDataURL()):e.cloneNode(!1)})).then((function(t){return function(t,r){return 0===(t=t.childNodes).length?Promise.resolve(r):i(r,n.asArray(t)).then((function(){return r}));function i(t,n){var r=Promise.resolve();return n.forEach((function(n){r=r.then((function(){return e(n,o)})).then((function(e){e&&t.appendChild(e)}))})),r}}(r,t)})).then((function(e){return function(e,r){return r instanceof Element?Promise.resolve().then(o).then(a).then(u).then(c).then((function(){return r})):r;function o(){function o(e,t){t.font=e.font,t.fontFamily=e.fontFamily,t.fontFeatureSettings=e.fontFeatureSettings,t.fontKerning=e.fontKerning,t.fontSize=e.fontSize,t.fontStretch=e.fontStretch,t.fontStyle=e.fontStyle,t.fontVariant=e.fontVariant,t.fontVariantCaps=e.fontVariantCaps,t.fontVariantEastAsian=e.fontVariantEastAsian,t.fontVariantLigatures=e.fontVariantLigatures,t.fontVariantNumeric=e.fontVariantNumeric,t.fontVariationSettings=e.fontVariationSettings,t.fontWeight=e.fontWeight}function a(e,t){function r(e,r){n.asArray(e).forEach((function(t){r.setProperty(t,e.getPropertyValue(t),e.getPropertyPriority(t))})),i&&(["inset-block","inset-block-start","inset-block-end"].forEach((e=>t.removeProperty(e))),["left","right","top","bottom"].forEach((e=>{t.getPropertyValue(e)&&t.setProperty(e,"0px")})))}e.cssText?(t.cssText=e.cssText,o(e,t)):r(e,t)}a(function(e,n){for(var r=t.getComputedStyle(e),o=e.style,i=0;i<r.length;i++){var a=r[i],u=r.getPropertyValue(a);o.getPropertyValue(a).length||(o.setProperty(a,n?"initial":"unset"),r.getPropertyValue(a)!==u?o.setProperty(a,u):o.removeProperty(a))}return o}(e,i),r.style)}function a(){function o(o){var i,a=t.getComputedStyle(e,o),u=a.getPropertyValue("content");function c(){var e="."+i+":"+o,t=(a.cssText?r:u)();return document.createTextNode(e+"{"+t+"}");function r(){return a.cssText+" content: "+a.getPropertyValue("content")+";"}function u(){return n.asArray(a).map(e).join("; ")+";";function e(e){return e+": "+a.getPropertyValue(e)+(a.getPropertyPriority(e)?" !important":"")}}}""!==u&&"none"!==u&&(i=n.uid(),(u=r.getAttribute("class"))&&r.setAttribute("class",u+" "+i),(u=document.createElement("style")).appendChild(c()),r.appendChild(u))}[":before",":after"].forEach((function(e){o(e)}))}function u(){e instanceof HTMLTextAreaElement&&(r.innerHTML=e.value),e instanceof HTMLInputElement&&r.setAttribute("value",e.value)}function c(){r instanceof SVGElement&&(r.setAttribute("xmlns","http://www.w3.org/2000/svg"),r instanceof SVGRectElement&&["width","height"].forEach((function(e){var t=r.getAttribute(e);t&&r.style.setProperty(e,t)})))}}(r,e)})):Promise.resolve()}(e,r.filter,!0)})).then(y).then(w).then((function(e){r.bgcolor&&(e.style.backgroundColor=r.bgcolor),r.width&&(e.style.width=r.width+"px"),r.height&&(e.style.height=r.height+"px"),r.style&&Object.keys(r.style).forEach((function(t){e.style[t]=r.style[t]}));var t=null;return"function"==typeof r.onclone&&(t=r.onclone(e)),Promise.resolve(t).then((function(){return e}))})).then((function(t){return t=t,o=r.width||n.width(e),i=r.height||n.height(e),Promise.resolve(t).then((function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)})).then(n.escapeXhtml).then((function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"})).then((function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+o+'" height="'+i+'">'+e+"</svg>"})).then((function(e){return"data:image/svg+xml;charset=utf-8,"+e}));var o,i}))}function v(e,t){return g(e,t).then(n.makeImage).then(n.delay(100)).then((function(r){var o="number"!=typeof t.scale?1:t.scale,i=function(e,r){var o=document.createElement("canvas");return o.width=(t.width||n.width(e))*r,o.height=(t.height||n.height(e))*r,t.bgcolor&&((r=o.getContext("2d")).fillStyle=t.bgcolor,r.fillRect(0,0,o.width,o.height)),o}(e,o),a=i.getContext("2d");return r&&(a.scale(o,o),a.drawImage(r,0,0)),i}))}function y(e){return l.resolveAll().then((function(t){var n=document.createElement("style");return e.appendChild(n),n.appendChild(document.createTextNode(t)),e}))}function w(e){return p.inlineAll(e).then((function(){return e}))}e.exports=m}(this)},72795:function(e,t,n){var r,o,i;o=[],void 0===(i="function"==typeof(r=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function r(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){c(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,u=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!u?function(e,t,n){var u=a.URL||a.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?i(c):o(c.href)?r(e,t,n):i(c,c.target="_blank")):(c.href=u.createObjectURL(e),setTimeout((function(){u.revokeObjectURL(c.href)}),4e4),setTimeout((function(){i(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,a){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,a),n);else if(o(e))r(e,n,a);else{var u=document.createElement("a");u.href=e,u.target="_blank",setTimeout((function(){i(u)}))}}:function(e,t,n,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return r(e,t,n);var i="application/octet-stream"===e.type,c=/constructor/i.test(a.HTMLElement)||a.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||i&&c||u)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},l.readAsDataURL(e)}else{var f=a.URL||a.webkitURL,p=f.createObjectURL(e);o?o.location=p:location.href=p,o=null,setTimeout((function(){f.revokeObjectURL(p)}),4e4)}});a.saveAs=c.saveAs=c,e.exports=c})?r.apply(t,o):r)||(e.exports=i)}}]);
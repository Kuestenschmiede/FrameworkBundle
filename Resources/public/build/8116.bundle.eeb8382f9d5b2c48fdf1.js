"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[8116],{8116:(e,t,n)=>{var o=n(46147),r=n(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(28110)),l=o(n(20963)),c=o(n(23422)),s=o(n(60560)),i=o(n(42315)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var c=a?Object.getOwnPropertyDescriptor(e,l):null;c&&(c.get||c.set)?Object.defineProperty(o,l,c):o[l]=e[l]}o.default=e,n&&n.set(e,o);return o}(n(3044)),u=n(66855),f=n(96983),m=n(94344),d=n(28193);n(93969);function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,i.default)(e);if(t){var r=(0,i.default)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,s.default)(this,n)}}var v=function(e){(0,c.default)(n,e);var t=C(n);function n(e){var o,r,l;(0,a.default)(this,n),o=t.call(this,e);var c=e.mapController,s=c.map.getView(),i=c.data,p=(0,m.getLanguage)(c.data),g=function(e){if(e.stopPropagation(),this.blur(),"LOCATIONS"===i.calc_extent||"CENTERLOCS"===i.calc_extent){var t=c.proxy.layerController.extent;if(t&&t.maxX!==1/0&&t.maxX!==-1/0){var n=c.map.getView(),o=[parseInt(i.min_gap,10),parseInt(i.min_gap,10),parseInt(i.min_gap,10),parseInt(i.min_gap,10)],r=[t.minX,t.minY,t.maxX,t.maxY];"CENTERLOCS"===i.calc_extent?n.fit(r,{maxZoom:i.center.zoom}):n.fit(r,{padding:o})}}else s.setCenter((0,d.transform)([parseFloat(i.center.lon),parseFloat(i.center.lat)],"EPSG:4326","EPSG:3857")),s.setZoom(parseInt(i.center.zoom,10)),s.setRotation(parseFloat(i.center.rotation));if(i.geolocation){scope.props.mapController.geolocation.once("change",(function(e){s.setCenter(scope.props.mapController.geolocation.getPosition()),i.geolocation_zoom&&s.setZoom(parseInt(i.geolocation_zoom,10))})),this.props.mapController.geolocation.getTracking()?this.props.mapController.geolocation.dispatchEvent("change"):this.props.mapController.geolocation.setTracking(!0)}c.map.setView(s)};(r=document.createElement("div")).className=f.cssConstants.OL_ZOOM_HOME+" "+f.cssConstants.OL_CONTROL+" "+f.cssConstants.OL_UNSELECTABLE,(l=document.createElement("button")).title=p.CTRL_ZOOM_HOME,r.appendChild(l),l.addEventListener("click",g,{useCapture:!1,passive:!0}),l.addEventListener("touchstart",g,{useCapture:!1,passive:!0});var C=new u.Control({element:r,target:o.props.target});return c.mapsControls.controls.zoomHome=C,c.map.addControl(C),o}return(0,l.default)(n,[{key:"render",value:function(){return null}}]),n}(p.Component);t.default=v}}]);
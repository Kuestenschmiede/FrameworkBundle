/*! For license information please see 4280.bundle.3575a99a0dbc4ecd8c8a.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[4280],{4280:(e,t,n)=>{var o=n(29138),a=n(35578);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(1367)),l=o(n(60163)),s=o(n(55956)),c=o(n(20880)),p=o(n(39959)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=C(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var s=r?Object.getOwnPropertyDescriptor(e,l):null;s&&(s.get||s.set)?Object.defineProperty(o,l,s):o[l]=e[l]}return o.default=e,n&&n.set(e,o),o}(n(42028)),u=n(13161),f=n(75508),m=n(23624),d=n(379);n(36320);function C(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(C=function(e){return e?n:t})(e)}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}t.default=function(e){function t(e){var n,o,a,l,p,i;(0,r.default)(this,t),o=this,a=t,l=[e],a=(0,c.default)(a),n=(0,s.default)(o,g()?Reflect.construct(a,l||[],(0,c.default)(o).constructor):a.apply(o,l));var C=e.mapController,O=C.map.getView(),_=C.data,v=(0,m.getLanguage)(C.data),h=function(e){if(e.stopPropagation(),this.blur(),"LOCATIONS"===_.calc_extent||"CENTERLOCS"===_.calc_extent){var t=C.proxy.layerController.extent;if(t&&t.maxX!==1/0&&t.maxX!==-1/0){var n=C.map.getView(),o=[parseInt(_.min_gap,10),parseInt(_.min_gap,10),parseInt(_.min_gap,10),parseInt(_.min_gap,10)],a=[t.minX,t.minY,t.maxX,t.maxY];"CENTERLOCS"===_.calc_extent?n.fit(a,{maxZoom:_.center.zoom}):n.fit(a,{padding:o})}}else O.setCenter((0,d.transform)([parseFloat(_.center.lon),parseFloat(_.center.lat)],"EPSG:4326","EPSG:3857")),O.setZoom(parseInt(_.center.zoom,10)),O.setRotation(parseFloat(_.center.rotation));if(_.geolocation){scope.props.mapController.geolocation.once("change",(function(e){O.setCenter(scope.props.mapController.geolocation.getPosition()),_.geolocation_zoom&&O.setZoom(parseInt(_.geolocation_zoom,10))})),this.props.mapController.geolocation.getTracking()?this.props.mapController.geolocation.dispatchEvent("change"):this.props.mapController.geolocation.setTracking(!0)}C.map.setView(O)};if((p=document.createElement("div")).className=f.cssConstants.OL_ZOOM_HOME+" "+f.cssConstants.OL_CONTROL+" "+f.cssConstants.OL_UNSELECTABLE,i=document.createElement("button"),e.mapController.data.themeData&&e.mapController.data.themeData.controlLabels){var E=document.createElement("span");E.innerText=v.CTRL_ZOOM_HOME,i.appendChild(E)}else i.title=v.CTRL_ZOOM_HOME;p.appendChild(i),i.addEventListener("click",h,{useCapture:!1,passive:!0}),i.addEventListener("touchstart",h,{useCapture:!1,passive:!0});var L=new u.Control({element:p,target:n.props.target}),y=C.arrComponents.findIndex((function(e){return"zoomHome"===e.name}));return C.arrComponents[y].control=L,C.mapsControls.controls.zoomHome=L,n}return(0,p.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return null}}])}(i.Component)}}]);
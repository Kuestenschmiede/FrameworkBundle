(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[8568],{18406:(e,t,r)=>{"use strict";var o=r(46147),a=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.RouterFeatureListItem=void 0;var l=o(r(28110)),s=o(r(20963)),n=o(r(23673)),u=o(r(23422)),p=o(r(60560)),i=o(r(42315)),c=m(r(3044)),f=(o(r(44700)),r(89788)),y=(r(93558),m(r(53379))),d=m(r(21705)),v=r(12200);function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(h=function(e){return e?r:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=h(t);if(r&&r.has(e))return r.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var n=l?Object.getOwnPropertyDescriptor(e,s):null;n&&(n.get||n.set)?Object.defineProperty(o,s,n):o[s]=e[s]}return o.default=e,r&&r.set(e,o),o}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=(0,i.default)(e);if(t){var a=(0,i.default)(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return(0,p.default)(this,r)}}var S=function(e){(0,u.default)(r,e);var t=C(r);function r(e){var o;return(0,l.default)(this,r),(o=t.call(this,e)).popupFunctions="de"===e.mapController.data.lang?y:d,o.clickFeature=o.clickFeature.bind((0,n.default)(o)),o}return(0,s.default)(r,[{key:"clickFeature",value:function(e){var t=this;t.props.setActiveId(t.props.feature.id),t.props.featureSource.forEachFeature((function(e){var r=void 0,o=t.props.mapController.data.routerLayers;if("area"===t.props.routeMode?r=o[t.props.layerArea][t.props.layerValueArea].layerData:"route"===t.props.routeMode&&(r=o[t.props.layerRoute][t.props.layerValueRoute].layerData),e.get("tid")===t.props.feature.id){var a=t.props.mapController.data.clickLocstyle;if(a)if(t.props.mapController.proxy.locationStyleController.arrLocStyles[a]){t.props.mapController.proxy.locationStyleController.arrLocStyles[a].style||(t.props.mapController.proxy.locationStyleController.arrLocStyles[a].style=t.props.mapController.proxy.locationStyleController.arrLocStyles[a].getStyleFunction());var l=t.props.mapController.proxy.locationStyleController.arrLocStyles[a].style;e.setStyle(l);var s=e.getGeometry().getExtent(),n=jQuery(".c4g-sideboard.c4g-open").css("width");n?(n=n.split("."),n=Array.isArray(n)?n[0]:n,n=parseInt(n)+50):n=50;var u=[50,n,50,50];t.props.mapController.map.getView().fit(s,{padding:u,maxZoom:16})}else t.props.mapController.proxy.locationStyleController.loadLocationStyles([a],{done:function(){t.props.mapController.proxy.locationStyleController.arrLocStyles[a].style||(t.props.mapController.proxy.locationStyleController.arrLocStyles[a].style=t.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_from_locstyle].getStyleFunction());var r=t.props.mapController.proxy.locationStyleController.arrLocStyles[a].style;t.mapSelectInteraction.getFeatures().forEach((function(t,o,a){t===e&&e.setStyle(r)}))}})}else e.setStyle(t.props.mapController.proxy.locationStyleController.arrLocStyles[r.locstyle].style)})),jQuery(this).parent().children("li").each((function(e,t){jQuery(t).addClass(f.cssConstants.INACTIVE).removeClass(f.cssConstants.ACTIVE)})),jQuery(this).addClass(f.cssConstants.ACTIVE).removeClass(f.cssConstants.INACTIVE)}},{key:"render",value:function(){var e=this,t=null;this.props.featureSource.forEachFeature((function(r){r.get("tid")===e.props.feature.id&&(t=r)}));var r="",o=null;if(t){if("overpass"===this.props.type){if(t.get("locstyle")){var a=t.get("locstyle"),l="",s=this.props.mapController.proxy.locationStyleController.arrLocStyles[a];s&&s.locStyleArr&&(l="cust_icon"===s.locStyleArr.styletype?s.locStyleArr.icon_src:"cust_icon_svg"===s.locStyleArr.styletype?s.locStyleArr.svgSrc:""),r=this.popupFunctions.fnStandardInfoPopup(t,l)}}else if("notOverpass"===this.props.type)this.props.feature&&this.props.feature.popup&&(r=this.props.feature.popup);else{var n="route"===this.props.routeMode?this.props.layerValueRoute:this.props.layerValueArea;o={entry:"",feature:this.props.feature,labels:["name"],activeLayerValue:n},v.utils.callHookFunctions(window.c4gMapsHooks.routePluginEntry,o),r=o.entry}var u={__html:r+"<br>"};return c.default.createElement("li",{ref:this.props.refProp,dangerouslySetInnerHTML:u,className:this.props.active?"route-features-list-element c4g-active":"route-features-list-element c4g-inactive",onMouseUp:this.clickFeature})}return null}}]),r}(c.Component);t.RouterFeatureListItem=S},28568:(e,t,r)=>{"use strict";var o=r(46147),a=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(r(15809)),s=o(r(28110)),n=o(r(20963)),u=o(r(23673)),p=o(r(23422)),i=o(r(60560)),c=o(r(42315)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var n=l?Object.getOwnPropertyDescriptor(e,s):null;n&&(n.get||n.set)?Object.defineProperty(o,s,n):o[s]=e[s]}o.default=e,r&&r.set(e,o);return o}(r(3044)),y=r(18406);function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return(0,i.default)(this,r)}}var h=function(e){(0,p.default)(r,e);var t=v(r);function r(e){var o;return(0,s.default)(this,r),(o=t.call(this,e)).setActiveId=o.setActiveId.bind((0,u.default)(o)),o.features={},o}return(0,n.default)(r,[{key:"setActiveId",value:function(e){this.setState({activeId:e})}},{key:"render",value:function(){var e=this,t=this.sortFeatures();return t?f.default.createElement("div",{className:this.props.className},this.props.header,this.props.switcher,f.default.createElement("ul",null,t.map((function(t,r){return e.features[t.id]=f.default.createRef(),f.default.createElement(y.RouterFeatureListItem,{feature:t,refProp:e.features[t.id],type:e.props.featureList.type,active:e.props.activeId===t.id,setActiveId:e.props.setActiveId,routeMode:e.props.routeMode,mapController:e.props.mapController,layerRoute:e.props.layerRoute,layerArea:e.props.layerArea,featureSource:e.props.featureSource,key:r,layerValueRoute:e.props.layerValueRoute,layerValueArea:e.props.layerValueArea})})))):f.default.createElement("div",{className:this.props.className})}},{key:"componentDidUpdate",value:function(e,t,r){if(e.activeId!==this.props.activeId&&this.props.activeId){var o=this.features[this.props.activeId];document.querySelector(".c4g-router-result-container").scrollTo(0,o.current.offsetTop)}}},{key:"sortFeatures",value:function(){var e=this.props.mapController.data.routerLayers,t="area"===this.props.routeMode?this.props.layerArea:this.props.layerRoute,r="area"===this.props.routeMode?this.props.layerValueArea:this.props.layerValueRoute;if(e){var o=e[t][r].mapLabel;return(0,l.default)(this.props.featureList.features).sort((function(e,t){var r=e,a=t;return e.tags&&t.tags&&(r=e.tags,a=t.tags),isNaN(r[o])?r[o]<a[o]?-1:1:r[o]-a[o]}))}}}]),r}(f.Component);t.default=h},65:(e,t,r)=>{var o=r(20113);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.default=e.exports,e.exports.__esModule=!0},92336:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},37830:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},15809:(e,t,r)=>{var o=r(65),a=r(92336),l=r(85565),s=r(37830);e.exports=function(e){return o(e)||a(e)||l(e)||s()},e.exports.default=e.exports,e.exports.__esModule=!0}}]);
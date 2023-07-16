/*! For license information please see 8568.bundle.50b1218da517bbd8a250.js.LICENSE.txt */
(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[8568],{18406:(e,t,r)=>{"use strict";var a=r(42417),o=r(30624);Object.defineProperty(t,"__esModule",{value:!0}),t.RouterFeatureListItem=void 0;var s=a(r(77228)),u=a(r(86491)),n=a(r(21377)),l=a(r(82065)),p=a(r(42336)),i=a(r(72556)),c=m(r(3044)),f=(a(r(60144)),r(89788)),d=(r(28193),m(r(53379))),y=m(r(21705)),v=r(12200);function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(h=function(e){return e?r:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=h(t);if(r&&r.has(e))return r.get(e);var a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var n=s?Object.getOwnPropertyDescriptor(e,u):null;n&&(n.get||n.set)?Object.defineProperty(a,u,n):a[u]=e[u]}return a.default=e,r&&r.set(e,a),a}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,i.default)(e);if(t){var o=(0,i.default)(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return(0,p.default)(this,r)}}var b=function(e){(0,l.default)(r,e);var t=g(r);function r(e){var a;(0,s.default)(this,r),a=t.call(this,e);(0,n.default)(a);a.popupFunctions="de"===e.mapController.data.lang?d:y,a.clickFeature=a.clickFeature.bind((0,n.default)(a));var o=null;return(e.layerValueRoute||e.layerValueArea)&&(o=a.getElement()),a.state={element:o},a}return(0,u.default)(r,[{key:"clickFeature",value:function(e){var t=this;t.props.setActiveId(t.props.feature.id);var r=t.props.featureSource.getFeatureById(t.props.feature.id);if(r){var a=r.getGeometry().getExtent(),o=jQuery(".c4g-sideboard.c4g-open").css("width");o?(o=o.split("."),o=Array.isArray(o)?o[0]:o,o=parseInt(o)+50):o=50;var s=[50,o,50,50];t.props.mapController.proxy.mapData.preventZoomResults?t.props.mapController.map.getView().setCenter([a[0],a[1]]):t.props.mapController.map.getView().fit(a,{padding:s,maxZoom:t.props.mapController.map.getView().getZoom()||16})}jQuery(this).parent().children("li").each((function(e,t){jQuery(t).addClass(f.cssConstants.INACTIVE).removeClass(f.cssConstants.ACTIVE)})),jQuery(this).addClass(f.cssConstants.ACTIVE).removeClass(f.cssConstants.INACTIVE)}},{key:"componentDidUpdate",value:function(e,t,r){this.state.element&&this.props.layerValueRoute===e.layerValueRoute&&this.props.layerValueArea===e.layerValueArea&&this.props.feature===e.feature||this.getElement()&&this.setState({element:this.getElement()})}},{key:"getElement",value:function(){var e=this,t=null;this.props.featureSource&&this.props.featureSource.forEachFeature&&this.props.featureSource.forEachFeature((function(r){r.get("tid")===e.props.feature.id&&(t=r)}));var r="",a=null;if(t){if("overpass"===this.props.type){if(t.get("locstyle")){var o=t.get("locstyle"),s="",u=this.props.mapController.proxy.locationStyleController.arrLocStyles[o];u&&u.locStyleArr&&(s="cust_icon"===u.locStyleArr.styletype?u.locStyleArr.icon_src:"cust_icon_svg"===u.locStyleArr.styletype?u.locStyleArr.svgSrc:""),r=this.popupFunctions.fnStandardInfoPopup(t,s)}}else if("notOverpass"===this.props.type)this.props.feature&&this.props.feature.popup&&(r=this.props.feature.popup);else{var n="route"===this.props.routeMode?this.props.layerValueRoute:this.props.layerValueArea;a={entry:"",id:this.props.counter,feature:this.props.feature,labels:["name"],activeLayerValue:n},v.utils.callHookFunctions(window.c4gMapsHooks.routePluginEntry,a),r=a.entry}return{__html:r+"<br>"}}}},{key:"render",value:function(){return this.state.element?c.default.createElement("li",{ref:this.props.refProp,dangerouslySetInnerHTML:this.state.element,className:this.props.active?"route-features-list-element c4g-active":"route-features-list-element c4g-inactive",onMouseUp:this.clickFeature}):null}}]),r}(c.Component);t.RouterFeatureListItem=b},28568:(e,t,r)=>{"use strict";var a=r(42417),o=r(30624);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(r(8467)),u=a(r(77228)),n=a(r(86491)),l=a(r(21377)),p=a(r(82065)),i=a(r(42336)),c=a(r(72556)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var n=s?Object.getOwnPropertyDescriptor(e,u):null;n&&(n.get||n.set)?Object.defineProperty(a,u,n):a[u]=e[u]}a.default=e,r&&r.set(e,a);return a}(r(3044)),d=r(18406);function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return(0,i.default)(this,r)}}var h=function(e){(0,p.default)(r,e);var t=v(r);function r(e){var a;return(0,u.default)(this,r),(a=t.call(this,e)).setActiveId=a.setActiveId.bind((0,l.default)(a)),a.features={},a}return(0,n.default)(r,[{key:"setActiveId",value:function(e){this.setState({activeId:e})}},{key:"render",value:function(){var e=this,t=this.sortFeatures();return t?f.default.createElement("div",{className:this.props.className},this.props.header,this.props.switcher,f.default.createElement("ul",null,t.map((function(t,r){return e.features[t.id]=f.default.createRef(),f.default.createElement(d.RouterFeatureListItem,{feature:t,refProp:e.features[t.id],type:e.props.featureList.type,active:e.props.activeId===t.id,setActiveId:e.props.setActiveId,routeMode:e.props.routeMode,mapController:e.props.mapController,layerRoute:e.props.layerRoute,layerArea:e.props.layerArea,featureSource:e.props.featureSource,counter:r,key:r,layerValueRoute:e.props.layerValueRoute,layerValueArea:e.props.layerValueArea})})))):f.default.createElement("div",{className:this.props.className})}},{key:"componentDidUpdate",value:function(e,t,r){if(e.activeId!==this.props.activeId&&this.props.activeId){var a=this.features[this.props.activeId];document.querySelector(".c4g-router-result-container").scrollTo(0,a.current.offsetTop)}}},{key:"sortFeatures",value:function(){var e=this.props.mapController.data.routerLayers,t="area"===this.props.routeMode?this.props.layerArea:this.props.layerRoute,r="area"===this.props.routeMode?this.props.layerValueArea:this.props.layerValueRoute;if(e){var a=e[t][r].mapLabel;return(0,s.default)(this.props.featureList.features).sort((function(e,t){var r=e,o=t;return e.tags&&t.tags&&(r=e.tags,o=t.tags),isNaN(r[a])?r[a]<o[a]?-1:1:r[a]-o[a]}))}}}]),r}(f.Component);t.default=h},90408:(e,t,r)=>{var a=r(41782);e.exports=function(e){if(Array.isArray(e))return a(e)},e.exports.__esModule=!0,e.exports.default=e.exports},25013:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},50401:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},8467:(e,t,r)=>{var a=r(90408),o=r(25013),s=r(58167),u=r(50401);e.exports=function(e){return a(e)||o(e)||s(e)||u()},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
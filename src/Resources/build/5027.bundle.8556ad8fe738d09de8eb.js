"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[5027,4091],{89847:(e,t,r)=>{var o=r(46147),n=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.HorizontalPanel=void 0;var s=o(r(28110)),a=o(r(20963)),u=o(r(23673)),i=o(r(23422)),l=o(r(60560)),c=o(r(42315)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=h(t);if(r&&r.has(e))return r.get(e);var o={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=s?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e,r&&r.set(e,o);return o}(r(3044)),f=r(66855),d=r(89788);function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(h=function(e){return e?r:t})(e)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=(0,c.default)(e);if(t){var n=(0,c.default)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return(0,l.default)(this,r)}}var m=function(e){(0,i.default)(r,e);var t=v(r);function r(e){var o;(0,s.default)(this,r),o=t.call(this,e);(0,u.default)(o);var n=document.createElement("div"),a=document.createElement("button");e.title&&(a.title=e.title),n.className=(e.className||"c4g-horizontal-panel")+"-button-"+(e.direction||"top")+" ol-control ol-unselectable",n.appendChild(a),a.title=e.title,o.clickControl=o.clickControl.bind((0,u.default)(o)),jQuery(a).on("click",o.clickControl);var i=e.mapController,l=new f.Control({element:n,target:e.target});return i.map.addControl(l),o.state={direction:e.direction||"top",open:e.open||!1,className:e.className||"c4g-horizontal-panel",childs:e.childs||[],control:l},o}return(0,a.default)(r,[{key:"render",value:function(){var e=this.state.className+"-"+this.state.direction;e+=" "+(this.state.open?"c4g-open":"c4g-close");return p.default.createElement("div",{className:e})}},{key:"clickControl",value:function(){this.state.open?this.close():this.open()}},{key:"open",value:function(){this.setState({open:!0}),this.slideOutCollidingElements()}},{key:"close",value:function(){this.setState({open:!1}),this.slideInCollidingElements()}},{key:"slideOutCollidingElements",value:function(){if("top"===this.state.direction){var e=document.querySelectorAll("."+d.cssConstants.CONTROL_CONTAINER_TL+" ."+d.cssConstants.OL_UNSELECTABLE);e.forEach((function(e){e.style.top="100px"})),(e=document.querySelectorAll("."+d.cssConstants.CONTROL_CONTAINER_TR+" ."+d.cssConstants.OL_UNSELECTABLE)).forEach((function(e){e.style.top="100px"}))}else{var t=document.querySelectorAll("."+d.cssConstants.CONTROL_CONTAINER_BL+" ."+d.cssConstants.OL_UNSELECTABLE);t.forEach((function(e){e.style.bottom="100px"})),(t=document.querySelectorAll("."+d.cssConstants.CONTROL_CONTAINER_BR+" ."+d.cssConstants.OL_UNSELECTABLE)).forEach((function(e){e.style.bottom="100px"}))}}},{key:"slideInCollidingElements",value:function(){if("top"===this.state.direction){var e=document.querySelectorAll("."+d.cssConstants.CONTROL_CONTAINER_TL+" ."+d.cssConstants.OL_UNSELECTABLE);e.forEach((function(e){e.style.top="0px"})),(e=document.querySelectorAll("."+d.cssConstants.CONTROL_CONTAINER_TR+" ."+d.cssConstants.OL_UNSELECTABLE)).forEach((function(e){e.style.top="0px"}))}else{var t=document.querySelectorAll("."+d.cssConstants.CONTROL_CONTAINER_BL+" ."+d.cssConstants.OL_UNSELECTABLE);t.forEach((function(e){e.style.bottom="0px"})),(t=document.querySelectorAll("."+d.cssConstants.CONTROL_CONTAINER_BR+" ."+d.cssConstants.OL_UNSELECTABLE)).forEach((function(e){e.style.bottom="0px"}))}}},{key:"addContent",value:function(e){this.state.childs.push(e)}}]),r}(p.Component);t.HorizontalPanel=m},44084:(e,t,r)=>{var o=r(46147),n=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.RouterAddressField=void 0;var s=o(r(28110)),a=o(r(20963)),u=o(r(23673)),i=o(r(23422)),l=o(r(60560)),c=o(r(42315)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=v(t);if(r&&r.has(e))return r.get(e);var o={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=s?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e,r&&r.set(e,o);return o}(r(3044)),f=r(12312),d=(r(60144),r(3530)),h=r(28193);function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(v=function(e){return e?r:t})(e)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=(0,c.default)(e);if(t){var n=(0,c.default)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return(0,l.default)(this,r)}}var g=function(e){(0,i.default)(r,e);var t=m(r);function r(e){var o;if((0,s.default)(this,r),(o=t.call(this,e)).languageConstants=(0,d.getLanguage)(o.props.router.props.mapController.data),o.getPosition=o.getPosition.bind((0,u.default)(o)),o.removeContent=o.removeContent.bind((0,u.default)(o)),!e.router.mapData.initialPosition||"routingFrom"!==e.name&&"areaFrom"!==e.name){if(e.router.mapData.initialDestination&&"routingTo"===e.name){window.c4gMapsHooks.layer_loaded=window.c4gMapsHooks.layer_loaded||[],window.c4gMapsHooks.layer_loaded.push((function(t){var r=e.router.props.mapController.map.getView().getCenter(),n={coords:{}};n.coords.longitude=(0,h.transform)(r,"EPSG:3857","EPSG:4326")[0],n.coords.latitude=(0,h.transform)(r,"EPSG:3857","EPSG:4326")[1],o.handlePosition(n)}))}}else o.getPosition();return o}return(0,a.default)(r,[{key:"render",value:function(){var e=null;return this.props.withPosition&&(e=p.default.createElement("button",{className:"c4g-router-position",onMouseUp:this.getPosition,title:this.languageConstants.ROUTE_POSITION})),p.default.createElement("div",{className:this.props.className},p.default.createElement("label",{htmlFor:this.props.name},this.props.label),e,p.default.createElement(f.AutocompleteInput,{type:"search",className:this.props.class,name:this.props.name,cssId:this.props.cssId,objFunctions:this.props.objFunctions,objSettings:this.props.objSettings,popup:this.props.popup,containerAddresses:this.props.containerAddresses,router:this.props.router,value:this.props.value,index:this.props.index}),p.default.createElement("button",{className:"c4g-router-input-clear",onMouseUp:this.removeContent,title:this.languageConstants.REMOVE_ADDRESS}))}},{key:"removeContent",value:function(e){jQuery("#"+this.props.cssId).val(""),this.props.clearInput(e)}},{key:"getPosition",value:function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){e.handlePosition(t)})):console.warn("The geolocation API is not available in your browser. Consider updating it or switching to a newer browser.")}},{key:"handlePosition",value:function(e){var t=e.coords;"routingFrom"===this.props.name?this.props.router.setRouteFrom(t.longitude,t.latitude):"overValue"===this.props.name||"routingTo"===this.props.name&&this.props.router.setRouteTo(t.longitude,t.latitude),"areaFrom"===this.props.name&&this.props.router.setAreaPoint(t.longitude,t.latitude),this.props.router.recalculateRoute()}}]),r}(p.Component);t.RouterAddressField=g},29633:(e,t,r)=>{var o=r(46147),n=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.RouterAddressInput=void 0;var s=o(r(28110)),a=o(r(20963)),u=o(r(23422)),i=o(r(60560)),l=o(r(42315)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var o={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=s?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e,r&&r.set(e,o);return o}(r(3044)),p=r(44084),f=(r(94091),r(48695)),d=r(17708),h=r(83621),v=r(25004);function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=(0,l.default)(e);if(t){var n=(0,l.default)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return(0,i.default)(this,r)}}var y=function(e){(0,u.default)(r,e);var t=g(r);function r(e){var o;return(0,s.default)(this,r),o=t.call(this,e),e.router||console.warn("The routing component needs a router, it won't work correctly since none was passed..."),o.state={router:e.router},void 0!==e.router.props.mapController.data&&("de"===e.router.props.mapController.data.lang?o.langConstants=h.routingConstantsGerman:o.langConstants=v.routingConstantsEnglish),o}return(0,a.default)(r,[{key:"render",value:function(){var e,t=this,r=this,o="";this.props.enableOverPoints&&"route"===this.props.mode&&(o=Object.keys(this.props.overSettings.overPoints).map((function(e){return c.default.createElement(p.RouterAddressField,{className:"c4g-router-input-over-"+e,name:"overPoint-"+e,label:t.langConstants.ROUTER_Label_Interim,cssId:"routingOver-"+e,objFunctions:t.props.overSettings.objFunctions,objSettings:t.props.objSettings,containerAddresses:t.props.containerAddresses,value:t.props.overSettings.overAddresses[e],router:t.props.router,key:e,index:e,clearInput:function(){t.props.overSettings.objFunctions[e].deleteFunction()}})})));var n="",s="",a="";"route"===this.props.mode?a=" invisible":(n=" invisible",s=" invisible");var u="";this.props.switchTargets&&"route"===this.props.mode&&(u=c.default.createElement("button",{className:"c4g-router-switch",onMouseUp:function(){r.props.overSettings.swapPoints();var e=jQuery("#routingFrom").val();jQuery("#routingFrom").val(jQuery("#routingTo").val()),jQuery("#routingTo").val(e)}}));var i="";this.props.enableOverPoints&&"route"===this.props.mode&&(i=c.default.createElement("button",{className:"c4g-router-over",onMouseUp:this.props.overSettings.overFunction}));var l=this.props.overSettings.overPoints.length+1;e=c.default.createElement(c.default.Fragment,null,c.default.createElement(p.RouterAddressField,{className:"c4g-router-input-from"+n,name:"routingFrom",label:this.langConstants.ROUTER_FROM,key:l,cssId:"routingFrom",objFunctions:this.props.objFunctions.fromFunctions,objSettings:this.props.objSettings,clearInput:this.props.resetFunctions.from,containerAddresses:this.props.containerAddresses,withPosition:this.props.withPosition,value:this.props.fromAddress,router:this.props.router}),o,c.default.createElement(p.RouterAddressField,{className:"c4g-router-input-to"+s,name:"routingTo",label:this.langConstants.ROUTER_TO,key:l+1,cssId:"routingTo",objFunctions:this.props.objFunctions.toFunctions,objSettings:this.props.objSettings,clearInput:this.props.resetFunctions.to,containerAddresses:this.props.containerAddresses,withPosition:this.props.withPosition,value:this.props.toAddress,router:this.props.router}),c.default.createElement(p.RouterAddressField,{className:"c4g-router-input-area"+a,name:"areaFrom",label:this.langConstants.ROUTER_CENTER,key:l+2,cssId:"areaInput",objFunctions:this.props.objFunctions.areaFunctions,objSettings:this.props.objSettings,clearInput:this.props.resetFunctions.area,containerAddresses:this.props.containerAddresses,withPosition:this.props.withPosition,value:this.props.areaAddress,router:this.props.router}));var h="",v="";this.props.router.props.mapController.data.showFeatures&&this.props.layers&&(v=c.default.createElement(c.default.Fragment,null,c.default.createElement(f.RouterLayerSelection,{layers:this.props.layers,router:this.props.router,activeLayerValue:"route"===this.props.router.state.mode?this.props.router.state.layerValueRoute:this.props.router.state.layerValueArea}),c.default.createElement(d.RouterDetourSlider,{min:this.props.sliderOptions.min,max:this.props.sliderOptions.max,value:this.props.sliderOptions.value,router:this.props.sliderOptions.router}))),"route"===this.props.mode?h=c.default.createElement("div",{className:"buttonbar"},i,u,v):"area"===this.props.mode&&(h=c.default.createElement("div",{className:"buttonbar"},v));var m=null;return this.props.router.props.mapController.data.routeStartButton&&(m=c.default.createElement("button",{className:"c4g-route-search-start",onMouseUp:this.props.router.recalculateRoute},this.langConstants.START_ROUTE)),c.default.createElement("div",{className:this.props.className},e,m,h)}}]),r}(c.Component);t.RouterAddressInput=y},55027:(e,t,r)=>{var o=r(46147),n=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(r(28110)),a=o(r(20963)),u=o(r(23673)),i=o(r(23422)),l=o(r(60560)),c=o(r(42315)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var o={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=s?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e,r&&r.set(e,o);return o}(r(3044)),f=r(89847),d=r(29633),h=(r(94091),r(35501)),v=r(3530);function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=(0,c.default)(e);if(t){var n=(0,c.default)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return(0,l.default)(this,r)}}var y=function(e){(0,i.default)(r,e);var t=g(r);function r(e){var o;return(0,s.default)(this,r),(o=t.call(this,e)).state.router=o.props.router,o.state.showForm=!0,o.setRouteMode=o.setRouteMode.bind((0,u.default)(o)),o.setAreaMode=o.setAreaMode.bind((0,u.default)(o)),o.close=o.close.bind((0,u.default)(o)),o.langConstants=(0,v.getLanguage)(e.mapController.data),e.mapController.data.router_div&&(document.querySelector(".c4g-router-panel-button-top").className+=" c4g-external"),o}return(0,a.default)(r,[{key:"setRouteMode",value:function(e){e.stopPropagation(),this.props.router.setMode("route")}},{key:"setAreaMode",value:function(e){e.stopPropagation(),this.props.router.setMode("area")}},{key:"componentDidUpdate",value:function(e,t,r){this.slideOutCollidingElements()}},{key:"render",value:function(){var e=this,t="c4g-router-content"+(this.props.open?" c4g-open ":" c4g-close ")+this.props.mode,r=this.props.open;return this.state.showForm?p.default.createElement("div",{className:t},p.default.createElement(d.RouterAddressInput,{className:"c4g-router-input-content",router:this.props.router,withPosition:!0,switchTargets:this.props.switchTargets,objFunctions:this.props.objFunctions,objSettings:this.props.objSettings,currentProfile:this.props.currentProfile,enableOverPoints:this.props.enableOverPoints,containerAddresses:this.props.containerAddresses,mode:this.props.mode,open:r,layers:this.props.layers,resetFunctions:this.props.resetFunctions,fromAddress:this.props.fromAddress,toAddress:this.props.toAddress,areaAddress:this.props.areaAddress,sliderOptions:this.props.sliderOptions,profiles:this.props.profiles,overSettings:this.props.overSettings})):p.default.createElement("div",{className:t},p.default.createElement(h.Titlebar,{wrapperClass:"c4g-router-header",header:headline,headerClass:"c4g-router-headline",detailBtnClass:"c4g-router-extended-options",detailBtnCb:this.toggleDetails,closeBtnClass:"c4g-router-close",closeBtnCb:this.close}),p.default.createElement("button",{className:"c4g-router-hide-form-button",onMouseUp:function(){e.setState({showForm:!e.state.showForm})}}))}},{key:"slideInCollidingElements",value:function(){}},{key:"slideOutCollidingElements",value:function(){var e=this.props.className+(this.props.open?" c4g-open":" c4g-close"),t=document.getElementsByClassName(e)[0];t&&t.offsetHeight}},{key:"open",value:function(){this.props.setOpen(!0),this.slideOutCollidingElements(),jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-close").addClass("c4g-open")}},{key:"close",value:function(){this.props.setOpen(!1),this.slideOutCollidingElements(),jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-open").addClass("c4g-close")}},{key:"clickControl",value:function(e){var t=this.props.router.props.mapController.routerContainer.className.includes("c4g-close");this.props.open?t?jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-close").addClass("c4g-open"):this.close():this.props.open||this.open()}}]),r}(f.HorizontalPanel);t.default=y},17708:(e,t,r)=>{var o=r(46147),n=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.RouterDetourSlider=void 0;var s=o(r(28110)),a=o(r(20963)),u=o(r(23422)),i=o(r(60560)),l=o(r(42315)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var o={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=s?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e,r&&r.set(e,o);return o}(r(3044)),p=r(21423);r(12200);function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=(0,l.default)(e);if(t){var n=(0,l.default)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return(0,i.default)(this,r)}}var h=function(e){(0,u.default)(r,e);var t=d(r);function r(e){var o;return(0,s.default)(this,r),(o=t.call(this,e)).updated=!1,o}return(0,a.default)(r,[{key:"componentDidMount",value:function(){var e=this,t=jQuery("."+p.routingConstants.ROUTE_TOGGLE);t.on("input",(function(){var t=jQuery(this),r=t.attr("max")-t.attr("min"),o=(t.val()-t.attr("min"))/r*100,n=Math.round(50*o/100)-25;t.next("output").css("left","calc("+o+"% - "+n+"px)").text(t.val()+" km"),e.props.router.props.mapController.data.usePermalink&&e.props.router.permalink.updateLinkFragments("detour",t.val())})),t.on("change",(function(){"route"===e.props.router.state.mode?e.props.router.setState({detourRoute:t.val()},e.props.router.recalculateRoute):e.props.router.setState({detourArea:t.val()},(function(){e.props.router.performArea(e.props.router.state.areaValue)}))})),t.trigger("input")}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("p",null,p.routingConstants.ROUTE_DETOUR),c.default.createElement("input",{type:"range",className:p.routingConstants.ROUTE_TOGGLE,min:this.props.min,max:this.props.max,defaultValue:this.props.value,step:.5}),c.default.createElement("output",{className:p.routingConstants.OUTPUT_DETOUR},this.props.value+" km"))}},{key:"componentDidUpdate",value:function(e,t,r){var o=document.querySelector("."+p.routingConstants.ROUTE_TOGGLE),n=this;this.updated||(jQuery(o).on("input",(function(){var e=jQuery(this),t=e.attr("max")-e.attr("min"),r=(e.val()-e.attr("min"))/t*100,o=Math.round(50*r/100)-25;e.next("output").css("left","calc("+r+"% - "+o+"px)").text(e.val()+" km"),n.props.router.props.mapController.data.usePermalink&&n.props.router.permalink.updateLinkFragments("detour",e.val())})),jQuery(o).on("change",(function(){"route"===n.props.router.state.mode?n.props.router.setState({detourRoute:jQuery(o).val()},n.props.router.recalculateRoute):n.props.router.setState({detourArea:jQuery(o).val()},(function(){n.props.router.performArea(n.props.router.state.areaValue)}))})),jQuery(o).trigger("input"),this.updated=!0)}}]),r}(c.Component);t.RouterDetourSlider=h},48695:(e,t,r)=>{var o=r(46147),n=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.RouterLayerSelection=void 0;var s=o(r(28110)),a=o(r(20963)),u=o(r(23673)),i=o(r(23422)),l=o(r(60560)),c=o(r(42315)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var o={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=s?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e,r&&r.set(e,o);return o}(r(3044));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=(0,c.default)(e);if(t){var n=(0,c.default)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return(0,l.default)(this,r)}}var h=function(e){(0,i.default)(r,e);var t=d(r);function r(e){var o;return(0,s.default)(this,r),(o=t.call(this,e)).setLayer=o.setLayer.bind((0,u.default)(o)),o.setLayerValue=o.setLayerValue.bind((0,u.default)(o)),o}return(0,a.default)(r,[{key:"setLayer",value:function(e){var t=e.target.value;this.props.router.setLayer(parseInt(t,10))}},{key:"setLayerValue",value:function(e){var t=e.target.value;this.props.router.setLayerValue(t)}},{key:"render",value:function(){var e=this,t=0;"route"===this.props.router.state.mode?t=this.props.router.state.layerRoute:"area"===this.props.router.state.mode&&(t=this.props.router.state.layerArea);var r=this.props.router.objLayers,o="";return this.props.layers&&Object.keys(this.props.layers[t]).length>1&&(o=p.default.createElement("div",{className:"c4g-router-layer-value-selection"},Object.keys(this.props.layers[t]).map((function(r){return p.default.createElement("button",{className:e.props.activeLayerValue===r?"c4g-active":"c4g-inactive",onMouseUp:e.setLayerValue,key:e.props.layers[t][r].mapLabel,value:r,title:r},r)})))),this.props.layers&&Object.keys(this.props.layers).length>1?p.default.createElement(p.default.Fragment,null,p.default.createElement("select",{className:"c4g-router-layer-selection",onChange:this.setLayer,defaultValue:t},Object.keys(this.props.layers).map((function(e){var t=r[e].layerData;return p.default.createElement("option",{key:e,value:e},t.name)}))),o):p.default.createElement(p.default.Fragment,null,o)}}]),r}(p.Component);t.RouterLayerSelection=h},94091:(e,t,r)=>{var o=r(46147),n=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(r(28110)),a=o(r(20963)),u=o(r(23673)),i=o(r(23422)),l=o(r(60560)),c=o(r(42315)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var o={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=s?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e,r&&r.set(e,o);return o}(r(3044)),f=r(3530);function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=(0,c.default)(e);if(t){var n=(0,c.default)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return(0,l.default)(this,r)}}var v=function(e){(0,i.default)(r,e);var t=h(r);function r(e){var o;return(0,s.default)(this,r),(o=t.call(this,e)).setProfile=o.setProfile.bind((0,u.default)(o)),o.profileTranslation={0:"car",1:"hgv",2:"bike",3:"roadbike",4:"bike",5:"mountainbike",6:"bike",7:"electricbike",8:"foot",9:"wander",10:"wheelchair",11:"hgv",12:"scooter",13:"motorbike"},o.languageConstants=(0,f.getLanguage)(e.router.props.mapController.data),o.profileLang={car:o.languageConstants.CAR,hgv:o.languageConstants.TRUCK,bike:o.languageConstants.BIKE,roadbike:o.languageConstants.ROADBIKE,mountainbike:o.languageConstants.MOUNTAINBIKE,electricbike:o.languageConstants.ELECTRICBIKE,foot:o.languageConstants.WALK,wander:o.languageConstants.WANDER,wheelchair:o.languageConstants.WHEEL,scooter:o.languageConstants.SCOOT,motorbike:o.languageConstants.MOTORBIKE},o.state={showPopup:!!e.router.mapData.router_profiles_initial},o}return(0,a.default)(r,[{key:"setProfile",value:function(e){this.props.router.setProfile(parseInt(e.id,10)),this.props.router.mapData.router_profiles_initial||this.setState({showPopup:!1})}},{key:"render",value:function(){var e=this;return 1===this.props.profiles.length?null:this.state.showPopup?p.default.createElement("div",{className:"c4g-router-profile-wrapper c4g-popup"},p.default.createElement("button",{className:"c4g-titlebar-close",onMouseUp:function(){return e.setState({showPopup:!1})}}),this.props.profiles.map((function(t){return p.default.createElement("button",{onMouseUp:function(){return e.setProfile(t)},className:"c4g-router-profile-"+e.profileTranslation[t.id]+(parseInt(t.id,10)===parseInt(e.props.currentProfile,10)?" c4g-active":" c4g-inactive"),key:t.id,title:e.profileLang[e.profileTranslation[t.id]]})}))):p.default.createElement("div",{className:"c4g-router-profile-wrapper"},p.default.createElement("button",{onMouseUp:function(){return e.setState({showPopup:!0})},className:"c4g-router-profile-"+this.profileTranslation[this.props.currentProfile]+" c4g-active",key:this.props.currentProfile,title:this.profileLang[this.profileTranslation[this.props.currentProfile]]}))}},{key:"showProfileSelection",value:function(){this.setState({showPopup:!0})}}]),r}(p.Component);t.default=v}}]);
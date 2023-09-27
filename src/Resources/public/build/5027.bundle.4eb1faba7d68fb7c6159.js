/*! For license information please see 5027.bundle.4eb1faba7d68fb7c6159.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[5027],{12312:(e,t,r)=>{var o=r(42417),n=r(30624);Object.defineProperty(t,"__esModule",{value:!0}),t.AutocompleteInput=void 0;var s=o(r(77228)),a=o(r(86491)),u=o(r(21377)),i=o(r(82065)),l=o(r(42336)),p=o(r(72556)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var o={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=s?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e,r&&r.set(e,o);return o}(r(3044)),f=r(60144);function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=(0,p.default)(e);if(t){var n=(0,p.default)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return(0,l.default)(this,r)}}t.AutocompleteInput=function(e){(0,i.default)(r,e);var t=h(r);function r(e){var o;return(0,s.default)(this,r),(o=t.call(this,e)).listenerRegistered=!1,o.state={arrAddresses:[]},o.wrapperRef=c.default.createRef(),o.handleClickOutside=o.handleClickOutside.bind((0,u.default)(o)),o}return(0,a.default)(r,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"handleClickOutside",value:function(e){this.wrapperRef&&!this.wrapperRef.current.contains(e.target)&&this.setState({arrAddresses:[]})}},{key:"render",value:function(){var e=this,t=this,r=null;if(this.state.arrAddresses&&this.state.arrAddresses.length>0){var o=[],n=function(){if(e.state.arrAddresses.hasOwnProperty(s)){var r=e.state.arrAddresses[s],n=c.default.createElement("li",{key:s,className:"c4g-autocomplete-item",onMouseUp:function(e){!function(e){jQuery("#"+e.props.cssId).val(r.name),new f.Point([r.pos[1],r.pos[0]]),e.props.cssId.includes("From")?e.props.router.setRouteFrom(r.pos[1],r.pos[0],!0):e.props.cssId.includes("To")?e.props.router.setRouteTo(r.pos[1],r.pos[0],!0):e.props.cssId.includes("Over")?e.props.router.addOverPoint(r.pos[1],r.pos[0],e.props.index,!0):e.props.cssId.includes("area")&&e.props.router.setAreaPoint(r.pos[1],r.pos[0],!0),e.setState({arrAddresses:[]})}(t)}},r.name);o.push(n)}};for(var s in this.state.arrAddresses)n();r=c.default.createElement("ul",{className:"c4g-autocomplete"},o)}return c.default.createElement("div",{className:"c4g-autocomplete-wrapper",ref:this.wrapperRef},c.default.createElement("input",{id:this.props.cssId,type:"search",defaultValue:this.props.value,onKeyDown:function(e,r){var o,n,s;13===e.keyCode?((s=$("#"+t.props.cssId)).trigger("change"),-1!==t.props.cssId.indexOf("area")?(n="areaValue",o=function(){t.props.router.performArea()}):(n=-1!==t.props.cssId.indexOf("From")?"fromValue":"toValue",o=function(){t.props.router.performViaRoute()}),t.props.router.performSearch(s,n,o)):0!==$(e.currentTarget).val().length||e.keyCode?(t.counter=Math.floor(Date.now()),setTimeout((function(){if(t.counter&&t.counter+400<Math.floor(Date.now())){delete t.counter;var e=-1!==t.props.cssId.indexOf("area")?"areaValue":-1!==t.props.cssId.indexOf("From")?"fromValue":"toValue",r=$("#"+t.props.cssId);t.props.objSettings.proxyUrl&&t.props.objSettings.keyAutocomplete?(t.props.router.performSearch(r,e,!1),t.autocompleteAddress($("#"+t.props.cssId).val(),"#"+t.props.cssId)):t.props.router.performSearch(r,e)}}),500)):"function"==typeof t.props.objFunctions.deleteFunction?t.props.objFunctions.deleteFunction(e.currentTarget,e.currentTarget.id):t.props.objFunctions[t.props.index].deleteFunction(e.currentTarget,e.currentTarget.id)},autoComplete:"off"}),r)}},{key:"setCenter",value:function(e){this.objSettings.center=e}},{key:"autocompleteAddress",value:function(e,t){var r,o,n=this,s=n.props.objSettings;if(s.center)if("function"==typeof s.center){var a=s.center();r=a[0]+","+a[1]}else r=s.center[0]+","+s.center[1];else s.bBox&&(r=(parseFloat(s.bBox[0])+parseFloat(s.bBox[2]))/2+","+(parseFloat(s.bBox[1])+parseFloat(s.bBox[3]))/2);if(o=r?s.proxyUrl+"autocomplete.php?format=json&key="+s.keyAutocomplete+"&q="+e+"&center="+r:s.proxyUrl+"autocomplete.php?format=json&key="+s.keyAutocomplete+"&q="+e,s.geosearchParams)for(var u in s.geosearchParams)s.geosearchParams.hasOwnProperty(u)&&(o+="&"+u+"="+s.geosearchParams[u]);s.resultCount&&(o+="&limit="+s.resultCount),$.ajax({url:o}).done((function(e){var t,r=this;if(s.center?t=s.center:s.bBox&&(t=[(parseFloat(s.bBox[0])+parseFloat(s.bBox[2]))/2,(parseFloat(s.bBox[1])+parseFloat(s.bBox[3]))/2]),e.length>0){var o=[];if(s.bBox&&s.bBox[0]&&e[0]&&e[0].display_name&&t){var a=function(){if(e.hasOwnProperty(u)&&r.isInBoundingBox(e[u].lon,e[u].lat,s.bBox)){var n={dist:Math.sqrt((t[0]-e[u].lon)*(t[0]-e[u].lon)+(t[1]-e[u].lat)*(t[1]-e[u].lat)),pos:[e[u].lat,e[u].lon],name:e[u].display_name};-1===o.findIndex((function(e){return e.name===n.name}))&&o.push(n)}};for(var u in e)a();o.sort((function(e,t){return e.dist-t.dist}))}else if(e[0]&&e[0].display_name){var i=function(){if(e.hasOwnProperty(l)){var t={pos:[e[l].lat,e[l].lon],name:e[l].display_name};-1===o.findIndex((function(e){return e.name===t.name}))&&o.push(t)}};for(var l in e)i()}n.setState({arrAddresses:o})}}))}},{key:"isInBoundingBox",value:function(e,t,r){return"string"==typeof e&&(e=parseFloat(e)),"string"==typeof t&&(t=parseFloat(t)),r[0]<e&&e<r[2]&&r[1]<t&&t<r[3]}}]),r}(c.Component)},89847:(e,t,r)=>{var o=r(42417),n=r(30624);Object.defineProperty(t,"__esModule",{value:!0}),t.HorizontalPanel=void 0;var s=o(r(77228)),a=o(r(86491)),u=o(r(21377)),i=o(r(82065)),l=o(r(42336)),p=o(r(72556)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=h(t);if(r&&r.has(e))return r.get(e);var o={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=s?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e,r&&r.set(e,o);return o}(r(3044)),f=r(34154),d=r(89788);function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(h=function(e){return e?r:t})(e)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=(0,p.default)(e);if(t){var n=(0,p.default)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return(0,l.default)(this,r)}}t.HorizontalPanel=function(e){(0,i.default)(r,e);var t=m(r);function r(e){var o;(0,s.default)(this,r),o=t.call(this,e);(0,u.default)(o);o.element=document.createElement("div");var n=document.createElement("button");e.title&&(n.title=e.title),o.element.className=(e.className||"c4g-horizontal-panel")+"-button-"+(e.direction||"top")+" ol-control ol-unselectable",o.element.appendChild(n),n.title=e.title,o.clickControl=o.clickControl.bind((0,u.default)(o)),jQuery(n).on("click",o.clickControl);e.mapController;var a=new f.Control({element:o.element,target:e.target});return o.control=a,o.state={direction:e.direction||"top",open:e.open||!1,className:e.className||"c4g-horizontal-panel",childs:e.childs||[],control:a},o}return(0,a.default)(r,[{key:"render",value:function(){var e=this.state.className+"-"+this.state.direction;e+=" "+(this.state.open?"c4g-open":"c4g-close");return c.default.createElement("div",{className:e})}},{key:"clickControl",value:function(){this.state.open?this.close():this.open()}},{key:"open",value:function(){this.setState({open:!0}),this.slideOutCollidingElements()}},{key:"close",value:function(){this.setState({open:!1}),this.slideInCollidingElements()}},{key:"slideOutCollidingElements",value:function(){if("top"===this.state.direction){var e=document.querySelectorAll("."+d.cssConstants.CONTROL_CONTAINER_TL+" ."+d.cssConstants.OL_UNSELECTABLE);e.forEach((function(e){e.style.top="100px"})),(e=document.querySelectorAll("."+d.cssConstants.CONTROL_CONTAINER_TR+" ."+d.cssConstants.OL_UNSELECTABLE)).forEach((function(e){e.style.top="100px"}))}else{var t=document.querySelectorAll("."+d.cssConstants.CONTROL_CONTAINER_BL+" ."+d.cssConstants.OL_UNSELECTABLE);t.forEach((function(e){e.style.bottom="100px"})),(t=document.querySelectorAll("."+d.cssConstants.CONTROL_CONTAINER_BR+" ."+d.cssConstants.OL_UNSELECTABLE)).forEach((function(e){e.style.bottom="100px"}))}}},{key:"slideInCollidingElements",value:function(){if("top"===this.state.direction){var e=document.querySelectorAll("."+d.cssConstants.CONTROL_CONTAINER_TL+" ."+d.cssConstants.OL_UNSELECTABLE);e.forEach((function(e){e.style.top="0px"})),(e=document.querySelectorAll("."+d.cssConstants.CONTROL_CONTAINER_TR+" ."+d.cssConstants.OL_UNSELECTABLE)).forEach((function(e){e.style.top="0px"}))}else{var t=document.querySelectorAll("."+d.cssConstants.CONTROL_CONTAINER_BL+" ."+d.cssConstants.OL_UNSELECTABLE);t.forEach((function(e){e.style.bottom="0px"})),(t=document.querySelectorAll("."+d.cssConstants.CONTROL_CONTAINER_BR+" ."+d.cssConstants.OL_UNSELECTABLE)).forEach((function(e){e.style.bottom="0px"}))}}},{key:"addContent",value:function(e){this.state.childs.push(e)}}]),r}(c.Component)},44084:(e,t,r)=>{var o=r(42417),n=r(30624);Object.defineProperty(t,"__esModule",{value:!0}),t.RouterAddressField=void 0;var s=o(r(77228)),a=o(r(86491)),u=o(r(21377)),i=o(r(82065)),l=o(r(42336)),p=o(r(72556)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var o={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=s?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e,r&&r.set(e,o);return o}(r(3044)),f=r(12312),d=(r(60144),r(3530)),h=r(28193);function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=(0,p.default)(e);if(t){var n=(0,p.default)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return(0,l.default)(this,r)}}t.RouterAddressField=function(e){(0,i.default)(r,e);var t=v(r);function r(e){var o;if((0,s.default)(this,r),(o=t.call(this,e)).languageConstants=(0,d.getLanguage)(o.props.router.props.mapController.data),o.getPosition=o.getPosition.bind((0,u.default)(o)),o.removeContent=o.removeContent.bind((0,u.default)(o)),!e.router.mapData.initialPosition||"routingFrom"!==e.name&&"areaFrom"!==e.name){if(e.router.mapData.initialDestination&&"routingTo"===e.name){window.c4gMapsHooks.layer_loaded=window.c4gMapsHooks.layer_loaded||[],window.c4gMapsHooks.layer_loaded.push((function(t){var r=e.router.props.mapController.map.getView().getCenter(),n={coords:{}};n.coords.longitude=(0,h.transform)(r,"EPSG:3857","EPSG:4326")[0],n.coords.latitude=(0,h.transform)(r,"EPSG:3857","EPSG:4326")[1],o.handlePosition(n)}))}}else o.getPosition();return o}return(0,a.default)(r,[{key:"render",value:function(){var e=null;return this.props.withPosition&&(e=c.default.createElement("button",{className:"c4g-router-position",onMouseUp:this.getPosition,title:this.languageConstants.ROUTE_POSITION})),c.default.createElement("div",{className:this.props.className},c.default.createElement("label",{htmlFor:this.props.name},this.props.label),e,c.default.createElement(f.AutocompleteInput,{type:"search",className:this.props.class,name:this.props.name,cssId:this.props.cssId,objFunctions:this.props.objFunctions,objSettings:this.props.objSettings,popup:this.props.popup,containerAddresses:this.props.containerAddresses,router:this.props.router,value:this.props.value,index:this.props.index}),c.default.createElement("button",{className:"c4g-router-input-clear",onMouseUp:this.removeContent,title:this.languageConstants.REMOVE_ADDRESS}))}},{key:"removeContent",value:function(e){jQuery("#"+this.props.cssId).val(""),this.props.clearInput(e)}},{key:"getPosition",value:function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){e.handlePosition(t)})):console.warn("The geolocation API is not available in your browser. Consider updating it or switching to a newer browser.")}},{key:"handlePosition",value:function(e){var t=e.coords;"routingFrom"===this.props.name?this.props.router.setRouteFrom(t.longitude,t.latitude):"overValue"===this.props.name||"routingTo"===this.props.name&&this.props.router.setRouteTo(t.longitude,t.latitude),"areaFrom"===this.props.name&&this.props.router.setAreaPoint(t.longitude,t.latitude),this.props.router.recalculateRoute()}}]),r}(c.Component)},29633:(e,t,r)=>{var o=r(42417),n=r(30624);Object.defineProperty(t,"__esModule",{value:!0}),t.RouterAddressInput=void 0;var s=o(r(77228)),a=o(r(86491)),u=o(r(82065)),i=o(r(42336)),l=o(r(72556)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=v(t);if(r&&r.has(e))return r.get(e);var o={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=s?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e,r&&r.set(e,o);return o}(r(3044)),c=r(44084),f=(r(94091),r(48695)),d=r(17708),h=r(83621),m=r(25004);function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(v=function(e){return e?r:t})(e)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=(0,l.default)(e);if(t){var n=(0,l.default)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return(0,i.default)(this,r)}}t.RouterAddressInput=function(e){(0,u.default)(r,e);var t=y(r);function r(e){var o;return(0,s.default)(this,r),o=t.call(this,e),e.router||console.warn("The routing component needs a router, it won't work correctly since none was passed..."),o.state={router:e.router},void 0!==e.router.props.mapController.data&&("de"===e.router.props.mapController.data.lang?o.langConstants=h.routingConstantsGerman:o.langConstants=m.routingConstantsEnglish),o}return(0,a.default)(r,[{key:"render",value:function(){var e,t=this,r=this,o="";this.props.enableOverPoints&&"route"===this.props.mode&&(o=Object.keys(this.props.overSettings.overPoints).map((function(e){return p.default.createElement(c.RouterAddressField,{className:"c4g-router-input-over-"+e,name:"overPoint-"+e,label:t.langConstants.ROUTER_Label_Interim,cssId:"routingOver-"+e,objFunctions:t.props.overSettings.objFunctions,objSettings:t.props.objSettings,containerAddresses:t.props.containerAddresses,value:t.props.overSettings.overAddresses[e],router:t.props.router,key:e,index:e,clearInput:function(){t.props.overSettings.objFunctions[e].deleteFunction()}})})));var n="",s="",a="";"route"===this.props.mode?a=" invisible":(n=" invisible",s=" invisible");var u="";this.props.switchTargets&&"route"===this.props.mode&&(u=p.default.createElement("button",{className:"c4g-router-switch",onMouseUp:function(){r.props.overSettings.swapPoints();var e=jQuery("#routingFrom").val();jQuery("#routingFrom").val(jQuery("#routingTo").val()),jQuery("#routingTo").val(e)}}));var i="";this.props.enableOverPoints&&"route"===this.props.mode&&(i=p.default.createElement("button",{className:"c4g-router-over",onMouseUp:this.props.overSettings.overFunction}));var l=this.props.overSettings.overPoints.length+1;e=p.default.createElement(p.default.Fragment,null,p.default.createElement(c.RouterAddressField,{className:"c4g-router-input-from"+n,name:"routingFrom",label:this.langConstants.ROUTER_FROM,key:l,cssId:"routingFrom",objFunctions:this.props.objFunctions.fromFunctions,objSettings:this.props.objSettings,clearInput:this.props.resetFunctions.from,containerAddresses:this.props.containerAddresses,withPosition:this.props.withPosition,value:this.props.fromAddress,router:this.props.router}),o,p.default.createElement(c.RouterAddressField,{className:"c4g-router-input-to"+s,name:"routingTo",label:this.langConstants.ROUTER_TO,key:l+1,cssId:"routingTo",objFunctions:this.props.objFunctions.toFunctions,objSettings:this.props.objSettings,clearInput:this.props.resetFunctions.to,containerAddresses:this.props.containerAddresses,withPosition:this.props.withPosition,value:this.props.toAddress,router:this.props.router}),p.default.createElement(c.RouterAddressField,{className:"c4g-router-input-area"+a,name:"areaFrom",label:this.langConstants.ROUTER_CENTER,key:l+2,cssId:"areaInput",objFunctions:this.props.objFunctions.areaFunctions,objSettings:this.props.objSettings,clearInput:this.props.resetFunctions.area,containerAddresses:this.props.containerAddresses,withPosition:this.props.withPosition,value:this.props.areaAddress,router:this.props.router}));var h="",m="";this.props.router.props.mapController.data.showFeatures&&this.props.layers&&(m=p.default.createElement(p.default.Fragment,null,p.default.createElement(f.RouterLayerSelection,{layers:this.props.layers,router:this.props.router,activeLayerValue:"route"===this.props.router.state.mode?this.props.router.state.layerValueRoute:this.props.router.state.layerValueArea}),p.default.createElement(d.RouterDetourSlider,{min:this.props.sliderOptions.min,max:this.props.sliderOptions.max,value:this.props.sliderOptions.value,router:this.props.sliderOptions.router}))),"route"===this.props.mode?h=p.default.createElement("div",{className:"buttonbar"},i,u,m):"area"===this.props.mode&&(h=p.default.createElement("div",{className:"buttonbar"},m));var v=null;return this.props.router.props.mapController.data.routeStartButton&&(v=p.default.createElement("button",{className:"c4g-route-search-start",onMouseUp:this.props.router.recalculateRoute},this.langConstants.START_ROUTE)),p.default.createElement("div",{className:this.props.className},e,v,h)}}]),r}(p.Component)},55027:(e,t,r)=>{var o=r(42417),n=r(30624);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(r(77228)),a=o(r(86491)),u=o(r(21377)),i=o(r(82065)),l=o(r(42336)),p=o(r(72556)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=v(t);if(r&&r.has(e))return r.get(e);var o={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=s?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e,r&&r.set(e,o);return o}(r(3044)),f=r(89847),d=r(29633),h=r(35501),m=r(3530);function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(v=function(e){return e?r:t})(e)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=(0,p.default)(e);if(t){var n=(0,p.default)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return(0,l.default)(this,r)}}var g=c.default.lazy((function(){return Promise.resolve().then(r.bind(r,94091))}));t.default=function(e){(0,i.default)(r,e);var t=y(r);function r(e){var o;(0,s.default)(this,r),(o=t.call(this,e)).state.router=o.props.router,o.state.showForm=!0,o.setRouteMode=o.setRouteMode.bind((0,u.default)(o)),o.setAreaMode=o.setAreaMode.bind((0,u.default)(o)),o.close=o.close.bind((0,u.default)(o)),o.langConstants=(0,m.getLanguage)(e.mapController.data);var n=e.mapController.arrComponents.findIndex((function(e){return"router"===e.name}));return e.mapController.arrComponents[n].control=o.control,e.mapController.data.router_div&&o.element&&o.element.className&&(o.element.className+=" c4g-external"),o}return(0,a.default)(r,[{key:"setRouteMode",value:function(e){e.stopPropagation(),this.props.router.setMode("route")}},{key:"setAreaMode",value:function(e){e.stopPropagation(),this.props.router.setMode("area")}},{key:"componentDidUpdate",value:function(e,t,r){this.slideOutCollidingElements()}},{key:"render",value:function(){var e=this,t="c4g-router-content"+(this.props.open?" c4g-open ":" c4g-close ")+this.props.mode,r=this.props.open;return this.state.showForm?c.default.createElement("div",{className:t},c.default.createElement(c.Suspense,{fallback:c.default.createElement("div",null,'"loading..."')},c.default.createElement(g,{profiles:this.props.router.state.profiles,router:this.props.router,currentProfile:this.props.router.state.currentProfile})),c.default.createElement(d.RouterAddressInput,{className:"c4g-router-input-content",router:this.props.router,withPosition:!0,switchTargets:this.props.switchTargets,objFunctions:this.props.objFunctions,objSettings:this.props.objSettings,currentProfile:this.props.currentProfile,enableOverPoints:this.props.enableOverPoints,containerAddresses:this.props.containerAddresses,mode:this.props.mode,open:r,layers:this.props.layers,resetFunctions:this.props.resetFunctions,fromAddress:this.props.fromAddress,toAddress:this.props.toAddress,areaAddress:this.props.areaAddress,sliderOptions:this.props.sliderOptions,profiles:this.props.profiles,overSettings:this.props.overSettings})):c.default.createElement("div",{className:t},c.default.createElement(h.Titlebar,{wrapperClass:"c4g-router-header",header:headline,headerClass:"c4g-router-headline",detailBtnClass:"c4g-router-extended-options",detailBtnCb:this.toggleDetails,closeBtnClass:"c4g-router-close",closeBtnCb:this.close}),c.default.createElement("button",{className:"c4g-router-hide-form-button",onMouseUp:function(){e.setState({showForm:!e.state.showForm})}}))}},{key:"slideInCollidingElements",value:function(){}},{key:"slideOutCollidingElements",value:function(){var e=this.props.className+(this.props.open?" c4g-open":" c4g-close"),t=document.getElementsByClassName(e)[0];t&&t.offsetHeight}},{key:"open",value:function(){this.props.setOpen(!0),this.slideOutCollidingElements(),jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-close").addClass("c4g-open")}},{key:"close",value:function(){this.props.setOpen(!1),this.slideOutCollidingElements(),jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-open").addClass("c4g-close")}},{key:"clickControl",value:function(e){var t=this.props.router.props.mapController.routerContainer.className.includes("c4g-close");this.props.open?t?jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-close").addClass("c4g-open"):this.close():this.props.open||this.open()}}]),r}(f.HorizontalPanel)},17708:(e,t,r)=>{var o=r(42417),n=r(30624);Object.defineProperty(t,"__esModule",{value:!0}),t.RouterDetourSlider=void 0;var s=o(r(77228)),a=o(r(86491)),u=o(r(21377)),i=o(r(82065)),l=o(r(42336)),p=o(r(72556)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var o={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=s?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e,r&&r.set(e,o);return o}(r(3044)),f=r(21423);r(12200);function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=(0,p.default)(e);if(t){var n=(0,p.default)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return(0,l.default)(this,r)}}t.RouterDetourSlider=function(e){(0,i.default)(r,e);var t=h(r);function r(e){var o;return(0,s.default)(this,r),(o=t.call(this,e)).handleChange=o.handleChange.bind((0,u.default)(o)),o.updated=!1,o}return(0,a.default)(r,[{key:"componentDidMount",value:function(){var e=this,t=jQuery("."+f.routingConstants.ROUTE_TOGGLE);t.on("input",(function(){var t=jQuery(this),r=t.attr("max")-t.attr("min"),o=(t.val()-t.attr("min"))/r*100,n=Math.round(50*o/100)-25;t.next("output").css("left","calc("+o+"% - "+n+"px)").text(t.val()+" km"),e.props.router.props.mapController.data.usePermalink&&e.props.router.permalink.updateLinkFragments("detour",t.val())})),t.on("change",(function(){"route"===e.props.router.state.mode?e.props.router.setState({detourRoute:t.val()},e.props.router.recalculateRoute):e.props.router.setState({detourArea:t.val()},(function(){e.props.router.performArea(e.props.router.state.areaValue)}))})),t.trigger("input")}},{key:"render",value:function(){var e=null;if(this.props.router.props.mapController.data.detourElement){var t=("route"===this.props.router.state.mode?this.props.router.props.mapController.data.arrDetourOptionsRoute:this.props.router.props.mapController.data.arrDetourOptionsArea).map((function(e){return c.default.createElement("option",{key:e,value:e},e," km")}));e=c.default.createElement("select",{className:"c4g-detour-selection",onChange:this.handleChange,value:this.props.value},t)}else e=c.default.createElement("div",{className:"c4g-router-detour-range"},c.default.createElement("p",null,f.routingConstants.ROUTE_DETOUR),c.default.createElement("input",{type:"range",className:f.routingConstants.ROUTE_TOGGLE,min:this.props.min,max:this.props.max,defaultValue:this.props.value,step:.5}),c.default.createElement("output",{className:f.routingConstants.OUTPUT_DETOUR},this.props.value+" km"));return e}},{key:"componentDidUpdate",value:function(e,t,r){var o=document.querySelector("."+f.routingConstants.ROUTE_TOGGLE),n=this;this.updated||(jQuery(o).on("input",(function(){var e=jQuery(this),t=e.attr("max")-e.attr("min"),r=(e.val()-e.attr("min"))/t*100,o=Math.round(50*r/100)-25;e.next("output").css("left","calc("+r+"% - "+o+"px)").text(e.val()+" km"),n.props.router.props.mapController.data.usePermalink&&n.props.router.permalink.updateLinkFragments("detour",e.val())})),jQuery(o).on("change",(function(){"route"===n.props.router.state.mode?n.props.router.setState({detourRoute:jQuery(o).val()},n.props.router.recalculateRoute):n.props.router.setState({detourArea:jQuery(o).val()},(function(){n.props.router.performArea(n.props.router.state.areaValue)}))})),jQuery(o).trigger("input"),this.updated=!0)}},{key:"handleChange",value:function(e){var t=this,r=e.target.value;"route"===this.props.router.state.mode?this.props.router.setState({detourRoute:r},this.props.router.recalculateRoute):this.props.router.setState({detourArea:r},(function(){t.props.router.performArea(t.props.router.state.areaValue)}))}}]),r}(c.Component)},48695:(e,t,r)=>{var o=r(42417),n=r(30624);Object.defineProperty(t,"__esModule",{value:!0}),t.RouterLayerSelection=void 0;var s=o(r(77228)),a=o(r(86491)),u=o(r(21377)),i=o(r(82065)),l=o(r(42336)),p=o(r(72556)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var o={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=s?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e,r&&r.set(e,o);return o}(r(3044));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=(0,p.default)(e);if(t){var n=(0,p.default)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return(0,l.default)(this,r)}}t.RouterLayerSelection=function(e){(0,i.default)(r,e);var t=d(r);function r(e){var o;return(0,s.default)(this,r),(o=t.call(this,e)).setLayer=o.setLayer.bind((0,u.default)(o)),o.setLayerValue=o.setLayerValue.bind((0,u.default)(o)),o.setLayerOrValue=o.setLayerOrValue.bind((0,u.default)(o)),o}return(0,a.default)(r,[{key:"setLayer",value:function(e){var t=e.target.value;this.props.router.setLayer(parseInt(t,10))}},{key:"setLayerValue",value:function(e){var t=e.target.value;this.props.router.setLayerValue(t)}},{key:"setLayerOrValue",value:function(e){var t=JSON.parse(e.target.value),r="route"===this.props.router.state.mode?this.props.router.state.layerRoute:this.props.router.state.layerArea;parseInt(t.id)!==parseInt(r)&&this.props.router.setLayer(parseInt(t.id,10)),this.props.router.setLayerValue(t.name)}},{key:"render",value:function(){var e=this,t=0,r=this.props.router.objLayers,o="";if(this.props.router.props.mapController.data.layerChanger){"route"===this.props.router.state.mode?t=JSON.stringify({id:this.props.router.state.layerRoute,name:this.props.router.state.layerValueRoute}):"area"===this.props.router.state.mode&&(t=JSON.stringify({id:this.props.router.state.layerArea,name:this.props.router.state.layerValueArea}));var n=[];return n=Object.keys(this.props.layers).length>1?Object.keys(this.props.layers).map((function(t){var o=r[t].layerData;return Object.keys(e.props.layers[t]).length>1?c.default.createElement("optgroup",{key:t,style:{color:"var(--main-color)"},label:o.name},Object.keys(e.props.layers[t]).map((function(r){e.props.layers[t][r];return c.default.createElement("option",{key:r,style:{color:"var(--main-color)"},value:JSON.stringify({id:t,name:r})},r)}))):Object.keys(e.props.layers[t]).map((function(r){e.props.layers[t][r];return c.default.createElement("option",{key:r,style:{color:"var(--main-color)"},value:JSON.stringify({id:t,name:r})},r)}))})):Object.keys(this.props.layers).map((function(t){r[t].layerData;return Object.keys(e.props.layers[t]).map((function(r){e.props.layers[t][r];return c.default.createElement("option",{key:r,style:{color:"var(--main-color)"},value:JSON.stringify({id:t,name:r})},r)}))})),c.default.createElement("select",{className:"c4g-router-layer-selection",onChange:this.setLayerOrValue,value:t},n)}return"route"===this.props.router.state.mode?t=this.props.router.state.layerRoute:"area"===this.props.router.state.mode&&(t=this.props.router.state.layerArea),this.props.layers&&Object.keys(this.props.layers[t]).length>1&&(o=c.default.createElement("div",{className:"c4g-router-layer-value-selection"},Object.keys(this.props.layers[t]).map((function(r){return c.default.createElement("button",{className:e.props.activeLayerValue===r?"c4g-active":"c4g-inactive",onMouseUp:e.setLayerValue,key:e.props.layers[t][r].mapLabel,value:r,title:r},r)})))),this.props.layers&&Object.keys(this.props.layers).length>1?c.default.createElement(c.default.Fragment,null,c.default.createElement("select",{className:"c4g-router-layer-selection",onChange:this.setLayer,value:t},Object.keys(this.props.layers).map((function(e){var t=r[e].layerData;return c.default.createElement("option",{key:e,value:e},t.name)}))),o):c.default.createElement(c.default.Fragment,null,o)}}]),r}(c.Component)},94091:(e,t,r)=>{var o=r(42417),n=r(30624);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(r(77228)),a=o(r(86491)),u=o(r(21377)),i=o(r(82065)),l=o(r(42336)),p=o(r(72556)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var o={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=s?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e,r&&r.set(e,o);return o}(r(3044)),f=r(3530);function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=(0,p.default)(e);if(t){var n=(0,p.default)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return(0,l.default)(this,r)}}t.default=function(e){(0,i.default)(r,e);var t=h(r);function r(e){var o;return(0,s.default)(this,r),(o=t.call(this,e)).setProfile=o.setProfile.bind((0,u.default)(o)),o.profileTranslation={0:"car",1:"hgv",2:"bike",3:"roadbike",4:"bike",5:"mountainbike",6:"bike",7:"electricbike",8:"foot",9:"wander",10:"wheelchair",11:"hgv",12:"scooter",13:"motorbike"},o.languageConstants=(0,f.getLanguage)(e.router.props.mapController.data),o.profileLang={car:o.languageConstants.CAR,hgv:o.languageConstants.TRUCK,bike:o.languageConstants.BIKE,roadbike:o.languageConstants.ROADBIKE,mountainbike:o.languageConstants.MOUNTAINBIKE,electricbike:o.languageConstants.ELECTRICBIKE,foot:o.languageConstants.WALK,wander:o.languageConstants.WANDER,wheelchair:o.languageConstants.WHEEL,scooter:o.languageConstants.SCOOT,motorbike:o.languageConstants.MOTORBIKE},o.state={showPopup:!!e.router.mapData.router_profiles_initial},o}return(0,a.default)(r,[{key:"setProfile",value:function(e){this.props.router.setProfile(parseInt(e.id,10)),this.props.router.mapData.router_profiles_initial||this.setState({showPopup:!1})}},{key:"render",value:function(){var e=this;return 1===this.props.profiles.length?null:this.state.showPopup?c.default.createElement("div",{className:"c4g-router-profile-wrapper c4g-popup"},c.default.createElement("button",{className:"c4g-titlebar-close",onMouseUp:function(){return e.setState({showPopup:!1})}}),this.props.profiles.map((function(t){return c.default.createElement("button",{onMouseUp:function(){return e.setProfile(t)},className:"c4g-router-profile-"+e.profileTranslation[t.id]+(parseInt(t.id,10)===parseInt(e.props.currentProfile,10)?" c4g-active":" c4g-inactive"),key:t.id,title:e.profileLang[e.profileTranslation[t.id]]})}))):c.default.createElement("div",{className:"c4g-router-profile-wrapper"},c.default.createElement("button",{onMouseUp:function(){return e.setState({showPopup:!0})},className:"c4g-router-profile-"+this.profileTranslation[this.props.currentProfile]+" c4g-active",key:this.props.currentProfile,title:this.profileLang[this.profileTranslation[this.props.currentProfile]]}))}},{key:"showProfileSelection",value:function(){this.setState({showPopup:!0})}}]),r}(c.Component)}}]);
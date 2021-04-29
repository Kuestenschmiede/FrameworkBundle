/*! For license information please see 24.bundle.4493d013a02b48e32c06.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[24,114],{1412:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=h(o(119)),s=h(o(115)),n=h(o(116)),a=h(o(120)),i=h(o(121)),l=h(o(123)),u=o(1413),p=o(1414),c=(o(435),o(204)),d=o(304);function h(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){(0,s.default)(this,t);var o=(0,a.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return o.state.router=o.props.router,o.state.showForm=!0,o.setRouteMode=o.setRouteMode.bind(o),o.setAreaMode=o.setAreaMode.bind(o),o.close=o.close.bind(o),o.langConstants=(0,d.getLanguage)(e.mapController.data),e.mapController.data.router_div&&(document.querySelector(".c4g-router-panel-button-top").className+=" c4g-external"),o}return(0,i.default)(t,e),(0,n.default)(t,[{key:"setRouteMode",value:function(e){e.stopPropagation(),this.props.router.setMode("route")}},{key:"setAreaMode",value:function(e){e.stopPropagation(),this.props.router.setMode("area")}},{key:"componentDidUpdate",value:function(e,t,o){this.slideOutCollidingElements()}},{key:"render",value:function(){var e=this,t="c4g-router-content"+(this.props.open?" c4g-open ":" c4g-close ")+this.props.mode,o=this.props.open,r="";return this.props.router.props.mapController.data.areaSearch&&!this.props.router.props.mapController.data.areaSearchOnly&&(r=l.default.createElement("div",{className:"c4g-router-mode-switch"},l.default.createElement("button",{id:"c4g-router-button-route",className:"route"===this.props.mode?"c4g-active":"c4g-inactive",onMouseUp:this.setRouteMode,title:this.langConstants.ROUTER_FIND_ROUTE},"Route"),l.default.createElement("button",{id:"c4g-router-button-area",className:"area"===this.props.mode?"c4g-active":"c4g-inactive",onMouseUp:this.setAreaMode,title:this.langConstants.AREA_NAME},"Area"))),this.state.showForm?l.default.createElement("div",{className:t},r,l.default.createElement(p.RouterAddressInput,{className:"c4g-router-input-content",router:this.props.router,withPosition:!0,switchTargets:this.props.switchTargets,objFunctions:this.props.objFunctions,objSettings:this.props.objSettings,currentProfile:this.props.currentProfile,enableOverPoints:this.props.enableOverPoints,containerAddresses:this.props.containerAddresses,mode:this.props.mode,open:o,layers:this.props.layers,resetFunctions:this.props.resetFunctions,fromAddress:this.props.fromAddress,toAddress:this.props.toAddress,areaAddress:this.props.areaAddress,sliderOptions:this.props.sliderOptions,profiles:this.props.profiles,overSettings:this.props.overSettings})):l.default.createElement("div",{className:t},l.default.createElement(c.Titlebar,{wrapperClass:"c4g-router-header",header:headline,headerClass:"c4g-router-headline",detailBtnClass:"c4g-router-extended-options",detailBtnCb:this.toggleDetails,closeBtnClass:"c4g-router-close",closeBtnCb:this.close}),l.default.createElement("button",{className:"c4g-router-hide-form-button",onMouseUp:function(){e.setState({showForm:!e.state.showForm})}}))}},{key:"slideInCollidingElements",value:function(){}},{key:"slideOutCollidingElements",value:function(){var e=this.props.className+(this.props.open?" c4g-open":" c4g-close"),t=document.getElementsByClassName(e)[0];t&&t.offsetHeight}},{key:"open",value:function(){this.props.setOpen(!0),this.slideOutCollidingElements(),jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-close").addClass("c4g-open")}},{key:"close",value:function(){this.props.setOpen(!1),this.slideOutCollidingElements(),jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-open").addClass("c4g-close")}},{key:"clickControl",value:function(e){var t=this.props.router.props.mapController.routerContainer.className.includes("c4g-close");this.props.open?t?jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-close").addClass("c4g-open"):this.close():this.props.open||this.open()}}]),t}(u.HorizontalPanel);t.default=f},1413:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HorizontalPanel=void 0;var r=d(o(119)),s=d(o(115)),n=d(o(116)),a=d(o(120)),i=d(o(121)),l=o(123),u=d(l),p=o(146),c=o(134);function d(e){return e&&e.__esModule?e:{default:e}}t.HorizontalPanel=function(e){function t(e){(0,s.default)(this,t);var o=(0,a.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e)),n=document.createElement("div"),i=document.createElement("button");n.className=(e.className||"c4g-horizontal-panel")+"-button-"+(e.direction||"top")+" ol-control ol-unselectable",n.appendChild(i),i.title=e.title,o.clickControl=o.clickControl.bind(o),jQuery(i).on("click",o.clickControl);var l=e.mapController,u=new p.Control({element:n,target:e.target});return l.map.addControl(u),o.state={direction:e.direction||"top",open:e.open||!1,className:e.className||"c4g-horizontal-panel",childs:e.childs||[],control:u},o}return(0,i.default)(t,e),(0,n.default)(t,[{key:"render",value:function(){var e=this.state.className+"-"+this.state.direction;e+=" "+(this.state.open?"c4g-open":"c4g-close");return u.default.createElement("div",{className:e})}},{key:"clickControl",value:function(){this.state.open?this.close():this.open()}},{key:"open",value:function(){this.setState({open:!0}),this.slideOutCollidingElements()}},{key:"close",value:function(){this.setState({open:!1}),this.slideInCollidingElements()}},{key:"slideOutCollidingElements",value:function(){if("top"===this.state.direction){var e=document.querySelectorAll("."+c.cssConstants.CONTROL_CONTAINER_TL+" ."+c.cssConstants.OL_UNSELECTABLE);e.forEach((function(e){e.style.top="100px"})),(e=document.querySelectorAll("."+c.cssConstants.CONTROL_CONTAINER_TR+" ."+c.cssConstants.OL_UNSELECTABLE)).forEach((function(e){e.style.top="100px"}))}else{var t=document.querySelectorAll("."+c.cssConstants.CONTROL_CONTAINER_BL+" ."+c.cssConstants.OL_UNSELECTABLE);t.forEach((function(e){e.style.bottom="100px"})),(t=document.querySelectorAll("."+c.cssConstants.CONTROL_CONTAINER_BR+" ."+c.cssConstants.OL_UNSELECTABLE)).forEach((function(e){e.style.bottom="100px"}))}}},{key:"slideInCollidingElements",value:function(){if("top"===this.state.direction){var e=document.querySelectorAll("."+c.cssConstants.CONTROL_CONTAINER_TL+" ."+c.cssConstants.OL_UNSELECTABLE);e.forEach((function(e){e.style.top="0px"})),(e=document.querySelectorAll("."+c.cssConstants.CONTROL_CONTAINER_TR+" ."+c.cssConstants.OL_UNSELECTABLE)).forEach((function(e){e.style.top="0px"}))}else{var t=document.querySelectorAll("."+c.cssConstants.CONTROL_CONTAINER_BL+" ."+c.cssConstants.OL_UNSELECTABLE);t.forEach((function(e){e.style.bottom="0px"})),(t=document.querySelectorAll("."+c.cssConstants.CONTROL_CONTAINER_BR+" ."+c.cssConstants.OL_UNSELECTABLE)).forEach((function(e){e.style.bottom="0px"}))}}},{key:"addContent",value:function(e){this.state.childs.push(e)}}]),t}(l.Component)},1414:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RouterAddressInput=void 0;var r=g(o(265)),s=g(o(119)),n=g(o(115)),a=g(o(116)),i=g(o(120)),l=g(o(121)),u=o(123),p=g(u),c=o(1415),d=(o(435),o(1416)),h=o(1417),f=o(554),m=o(553);function g(e){return e&&e.__esModule?e:{default:e}}t.RouterAddressInput=function(e){function t(e){(0,n.default)(this,t);var o=(0,i.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return e.router||console.warn("The routing component needs a router, it won't work correctly since none was passed..."),o.state={router:e.router},void 0!==e.router.props.mapController.data&&("de"===e.router.props.mapController.data.lang?o.langConstants=f.routingConstantsGerman:o.langConstants=m.routingConstantsEnglish),o}return(0,l.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){var e,t=this,o=this,s="";this.props.enableOverPoints&&"route"===this.props.mode&&(s=(0,r.default)(this.props.overSettings.overPoints).map((function(e){return p.default.createElement(c.RouterAddressField,{className:"c4g-router-input-over-"+e,name:"overPoint-"+e,label:t.langConstants.ROUTER_Label_Interim,cssId:"routingOver-"+e,objFunctions:t.props.overSettings.objFunctions,objSettings:t.props.objSettings,containerAddresses:t.props.containerAddresses,value:t.props.overSettings.overAddresses[e],router:t.props.router,key:e,index:e,clearInput:function(){t.props.overSettings.objFunctions[e].deleteFunction()}})})));var n="",a="",i="";"route"===this.props.mode?i=" invisible":(n=" invisible",a=" invisible");var l="";this.props.switchTargets&&"route"===this.props.mode&&(l=p.default.createElement("button",{className:"c4g-router-switch",onMouseUp:function(){o.props.overSettings.swapPoints();var e=jQuery("#routingFrom").val();jQuery("#routingFrom").val(jQuery("#routingTo").val()),jQuery("#routingTo").val(e)}}));var u="";this.props.enableOverPoints&&"route"===this.props.mode&&(u=p.default.createElement("button",{className:"c4g-router-over",onMouseUp:this.props.overSettings.overFunction}));var f=this.props.overSettings.overPoints.length+1;e=p.default.createElement(p.default.Fragment,null,p.default.createElement(c.RouterAddressField,{className:"c4g-router-input-from"+n,name:"routingFrom",label:this.langConstants.ROUTER_FROM,key:f,cssId:"routingFrom",objFunctions:this.props.objFunctions.fromFunctions,objSettings:this.props.objSettings,clearInput:this.props.resetFunctions.from,containerAddresses:this.props.containerAddresses,withPosition:this.props.withPosition,value:this.props.fromAddress,router:this.props.router}),s,p.default.createElement(c.RouterAddressField,{className:"c4g-router-input-to"+a,name:"routingTo",label:this.langConstants.ROUTER_TO,key:f+1,cssId:"routingTo",objFunctions:this.props.objFunctions.toFunctions,objSettings:this.props.objSettings,clearInput:this.props.resetFunctions.to,containerAddresses:this.props.containerAddresses,withPosition:this.props.withPosition,value:this.props.toAddress,router:this.props.router}),p.default.createElement(c.RouterAddressField,{className:"c4g-router-input-area"+i,name:"areaFrom",label:this.langConstants.ROUTER_CENTER,key:f+2,cssId:"areaInput",objFunctions:this.props.objFunctions.areaFunctions,objSettings:this.props.objSettings,clearInput:this.props.resetFunctions.area,containerAddresses:this.props.containerAddresses,withPosition:this.props.withPosition,value:this.props.areaAddress,router:this.props.router}));var m="",g="";this.props.router.props.mapController.data.showFeatures&&this.props.layers&&(g=p.default.createElement(p.default.Fragment,null,p.default.createElement(d.RouterLayerSelection,{layers:this.props.layers,router:this.props.router,activeLayerValue:"route"===this.props.router.state.mode?this.props.router.state.layerValueRoute:this.props.router.state.layerValueArea}),p.default.createElement(h.RouterDetourSlider,{min:this.props.sliderOptions.min,max:this.props.sliderOptions.max,value:this.props.sliderOptions.value,router:this.props.sliderOptions.router}))),"route"===this.props.mode?m=p.default.createElement("div",{className:"buttonbar"},u,l,g):"area"===this.props.mode&&(m=p.default.createElement("div",{className:"buttonbar"},g));var v=null;return this.props.router.props.mapController.data.routeStartButton&&(v=p.default.createElement("button",{className:"c4g-route-search-start",onMouseUp:this.props.router.recalculateRoute},this.langConstants.START_ROUTE)),p.default.createElement("div",{className:this.props.className},e,v,m)}}]),t}(u.Component)},1415:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RouterAddressField=void 0;var r=h(o(119)),s=h(o(115)),n=h(o(116)),a=h(o(120)),i=h(o(121)),l=o(123),u=h(l),p=o(820),c=(o(178),o(304)),d=o(114);function h(e){return e&&e.__esModule?e:{default:e}}t.RouterAddressField=function(e){function t(e){(0,s.default)(this,t);var o=(0,a.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));if(o.languageConstants=(0,c.getLanguage)(o.props.router.props.mapController.data),o.getPosition=o.getPosition.bind(o),o.removeContent=o.removeContent.bind(o),!e.router.mapData.initialPosition||"routingFrom"!==e.name&&"areaFrom"!==e.name){if(e.router.mapData.initialDestination&&"routingTo"===e.name){window.c4gMapsHooks.layer_loaded=window.c4gMapsHooks.layer_loaded||[],window.c4gMapsHooks.layer_loaded.push((function(t){var r=e.router.props.mapController.map.getView().getCenter(),s={coords:{}};s.coords.longitude=(0,d.transform)(r,"EPSG:3857","EPSG:4326")[0],s.coords.latitude=(0,d.transform)(r,"EPSG:3857","EPSG:4326")[1],o.handlePosition(s)}))}}else o.getPosition();return o}return(0,i.default)(t,e),(0,n.default)(t,[{key:"render",value:function(){var e=null;return this.props.withPosition&&(e=u.default.createElement("button",{className:"c4g-router-position",onMouseUp:this.getPosition,title:this.languageConstants.ROUTE_POSITION})),u.default.createElement("div",{className:this.props.className},u.default.createElement("label",{htmlFor:this.props.name},this.props.label),u.default.createElement(p.AutocompleteInput,{type:"search",className:this.props.class,name:this.props.name,cssId:this.props.cssId,objFunctions:this.props.objFunctions,objSettings:this.props.objSettings,popup:this.props.popup,containerAddresses:this.props.containerAddresses,autoComplete:"off",router:this.props.router,value:this.props.value,index:this.props.index}),e,u.default.createElement("button",{className:"c4g-router-input-clear",onMouseUp:this.removeContent,title:this.languageConstants.REMOVE_ADDRESS}))}},{key:"removeContent",value:function(e){jQuery("#"+this.props.cssId).val(""),this.props.clearInput(e)}},{key:"getPosition",value:function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){e.handlePosition(t)})):console.warn("The geolocation API is not available in your browser. Consider updating it or switching to a newer browser.")}},{key:"handlePosition",value:function(e){var t=e.coords;"routingFrom"===this.props.name?this.props.router.setRouteFrom(t.longitude,t.latitude):"overValue"===this.props.name||"routingTo"===this.props.name&&this.props.router.setRouteTo(t.longitude,t.latitude),"areaFrom"===this.props.name&&this.props.router.setAreaPoint(t.longitude,t.latitude),this.props.router.recalculateRoute()}}]),t}(l.Component)},1416:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RouterLayerSelection=void 0;var r=c(o(265)),s=c(o(119)),n=c(o(115)),a=c(o(116)),i=c(o(120)),l=c(o(121)),u=o(123),p=c(u);function c(e){return e&&e.__esModule?e:{default:e}}t.RouterLayerSelection=function(e){function t(e){(0,n.default)(this,t);var o=(0,i.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return o.setLayer=o.setLayer.bind(o),o.setLayerValue=o.setLayerValue.bind(o),o}return(0,l.default)(t,e),(0,a.default)(t,[{key:"setLayer",value:function(e){var t=e.target.value;this.props.router.setLayer(parseInt(t,10))}},{key:"setLayerValue",value:function(e){var t=e.target.value;this.props.router.setLayerValue(t)}},{key:"render",value:function(){var e=this,t=0;"route"===this.props.router.state.mode?t=this.props.router.state.layerRoute:"area"===this.props.router.state.mode&&(t=this.props.router.state.layerArea);var o=this.props.router.objLayers,s="";return this.props.layers&&(0,r.default)(this.props.layers[t]).length>1&&(s=p.default.createElement("div",{className:"c4g-router-layer-value-selection"},(0,r.default)(this.props.layers[t]).map((function(o){return p.default.createElement("button",{className:e.props.activeLayerValue===o?"c4g-active":"c4g-inactive",onMouseUp:e.setLayerValue,key:e.props.layers[t][o].mapLabel,value:o,title:o},o)})))),this.props.layers&&(0,r.default)(this.props.layers).length>1?p.default.createElement(p.default.Fragment,null,p.default.createElement("select",{className:"c4g-router-layer-selection",onChange:this.setLayer,defaultValue:t},(0,r.default)(this.props.layers).map((function(e){var t=o[e].layerData;return p.default.createElement("option",{key:e,value:e},t.name)}))),s):p.default.createElement(p.default.Fragment,null,s)}}]),t}(u.Component)},1417:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RouterDetourSlider=void 0;var r=c(o(119)),s=c(o(115)),n=c(o(116)),a=c(o(120)),i=c(o(121)),l=o(123),u=c(l),p=o(819);o(137);function c(e){return e&&e.__esModule?e:{default:e}}t.RouterDetourSlider=function(e){function t(e){(0,s.default)(this,t);var o=(0,a.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return o.updated=!1,o}return(0,i.default)(t,e),(0,n.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=jQuery("."+p.routingConstants.ROUTE_TOGGLE);t.on("input",(function(){var t=jQuery(this),o=t.attr("max")-t.attr("min"),r=(t.val()-t.attr("min"))/o*100,s=Math.round(50*r/100)-25;t.next("output").css("left","calc("+r+"% - "+s+"px)").text(t.val()+" km"),e.props.router.props.mapController.data.usePermalink&&e.props.router.permalink.updateLinkFragments("detour",t.val())})),t.on("change",(function(){"route"===e.props.router.state.mode?e.props.router.setState({detourRoute:t.val()},e.props.router.recalculateRoute):e.props.router.setState({detourArea:t.val()},(function(){e.props.router.performArea(e.props.router.state.areaValue)}))})),t.trigger("input")}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("p",null,"Umweg"),u.default.createElement("input",{type:"range",className:p.routingConstants.ROUTE_TOGGLE,min:this.props.min,max:this.props.max,defaultValue:this.props.value,step:.5}),u.default.createElement("output",{className:p.routingConstants.OUTPUT_DETOUR},this.props.value+" km"))}},{key:"componentDidUpdate",value:function(e,t,o){var r=document.querySelector("."+p.routingConstants.ROUTE_TOGGLE),s=this;this.updated||(jQuery(r).on("input",(function(){var e=jQuery(this),t=e.attr("max")-e.attr("min"),o=(e.val()-e.attr("min"))/t*100,r=Math.round(50*o/100)-25;e.next("output").css("left","calc("+o+"% - "+r+"px)").text(e.val()+" km"),s.props.router.props.mapController.data.usePermalink&&s.props.router.permalink.updateLinkFragments("detour",e.val())})),jQuery(r).on("change",(function(){"route"===s.props.router.state.mode?s.props.router.setState({detourRoute:jQuery(r).val()},s.props.router.recalculateRoute):s.props.router.setState({detourArea:jQuery(r).val()},(function(){s.props.router.performArea(s.props.router.state.areaValue)}))})),jQuery(r).trigger("input"),this.updated=!0)}}]),t}(l.Component)},435:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(o(119)),s=c(o(115)),n=c(o(116)),a=c(o(120)),i=c(o(121)),l=o(123),u=c(l),p=o(304);function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){(0,s.default)(this,t);var o=(0,a.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return o.setProfile=o.setProfile.bind(o),o.profileTranslation={0:"car",1:"hgv",2:"bike",3:"roadbike",4:"bike",5:"mountainbike",6:"bike",7:"electricbike",8:"foot",9:"wander",10:"wheelchair",11:"hgv",12:"scooter",13:"motorbike"},o.languageConstants=(0,p.getLanguage)(e.router.props.mapController.data),o.profileLang={car:o.languageConstants.CAR,hgv:o.languageConstants.TRUCK,bike:o.languageConstants.BIKE,roadbike:o.languageConstants.ROADBIKE,mountainbike:o.languageConstants.MOUNTAINBIKE,electricbike:o.languageConstants.ELECTRICBIKE,foot:o.languageConstants.WALK,wander:o.languageConstants.WANDER,wheelchair:o.languageConstants.WHEEL,scooter:o.languageConstants.SCOOT,motorbike:o.languageConstants.MOTORBIKE},o.state={showPopup:!!e.router.mapData.router_profiles_initial},o}return(0,i.default)(t,e),(0,n.default)(t,[{key:"setProfile",value:function(e){this.props.router.setProfile(parseInt(e.id,10)),this.props.router.mapData.router_profiles_initial||this.setState({showPopup:!1})}},{key:"render",value:function(){var e=this;return 1===this.props.profiles.length?u.default.createElement("div",{className:"c4g-router-profile-wrapper"},u.default.createElement("button",{className:"c4g-router-profile-"+this.profileTranslation[this.props.currentProfile]+" c4g-active",key:this.props.currentProfile,title:this.profileLang[this.profileTranslation[this.props.currentProfile]]})):this.state.showPopup?u.default.createElement("div",{className:"c4g-router-profile-wrapper c4g-popup"},u.default.createElement("button",{className:"c4g-titlebar-close",onMouseUp:function(){return e.setState({showPopup:!1})}}),this.props.profiles.map((function(t){return u.default.createElement("button",{onMouseUp:function(){return e.setProfile(t)},className:"c4g-router-profile-"+e.profileTranslation[t.id]+(parseInt(t.id,10)===e.props.currentProfile?" c4g-active":" c4g-inactive"),key:t.id,title:e.profileLang[e.profileTranslation[t.id]]})}))):u.default.createElement("div",{className:"c4g-router-profile-wrapper"},u.default.createElement("button",{onMouseUp:function(){return e.setState({showPopup:!0})},className:"c4g-router-profile-"+this.profileTranslation[this.props.currentProfile]+" c4g-active",key:this.props.currentProfile,title:this.profileLang[this.profileTranslation[this.props.currentProfile]]}))}},{key:"showProfileSelection",value:function(){this.setState({showPopup:!0})}}]),t}(l.Component);t.default=d}}]);
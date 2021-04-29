/*! For license information please see 31.bundle.39db27604c4967c43a64.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1392:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=C(a(119)),s=C(a(115)),l=C(a(116)),o=C(a(120)),n=C(a(121)),i=a(123),p=C(i),c=a(146),d=a(134),u=a(1393),h=a(143),y=a(204),f=a(137);function C(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){(0,s.default)(this,t);var a=(0,o.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e)),l=a,n=document.createElement("div"),i=document.createElement("button");a.langConstants=(0,h.getLanguage)(e.mapController.data),i.title=a.langConstants.CTRL_STARBOARD,n.className="c4g-starboard-control ol-unselectable ol-control ",e.open?n.className+="c4g-open":n.className+="c4g-close",e.external&&(n.className+=" c4g-external"),n.appendChild(i),jQuery(n).on("click",(function(e){l.state.open?l.close():l.open()}));var p=e.mapController,d=new c.Control({element:n,target:e.target});return p.mapsControls.controls.horizontalPanel=d,p.map.addControl(d),a.open=a.open.bind(a),a.slideOutCollidingElements=a.slideOutCollidingElements.bind(a),a.resizeFunction=a.resizeFunction.bind(a),a.close=a.close.bind(a),a.createStylingForIcon=a.createStylingForIcon.bind(a),a.state={direction:e.direction||"right",open:e.open||!1,className:e.className||"c4g-starboard-panel",childs:e.childs||[],control:d,activeTab:0},a}return(0,n.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){}},{key:"setActiveTab",value:function(e){this.setState({activeTab:e})}},{key:"render",value:function(){var e=this,t=this.props.mapController.data;this.state.className,this.state.direction;this.state.open,this.state.open?jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close"):jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");var a="",r=[];if(this.props.tabLayers.length>0){var s=p.default.createElement("button",{key:this.props.tabLayers.length,title:this.langConstants.STARBOARD_VIEW_TRIGGER_LAYERSWITCHER,className:"c4g-starboard-view-trigger-layerswitcher",onMouseUp:function(){e.setActiveTab(0)}});r.push(s),r.push(this.props.tabLayers.map((function(t,a){var r=t.awesomeIcon;return e.createStylingForIcon(r,a),p.default.createElement("button",{key:a,title:t[0].name,className:"c4g-starboard-view-trigger-tab-"+a,onMouseUp:function(){e.setActiveTab(a+1)}})}))),a=p.default.createElement("div",{className:"c4g-starboard-switcher"},r)}var l="";return this.props.tabLayers.length>0&&(l=p.default.createElement(p.default.Fragment,null,this.props.tabLayers.map((function(t,a){return p.default.createElement(u.StarboardLayerswitcher,{key:a,mapController:e.props.mapController,objLayers:e.props.tabLayers[a],parentCallback:e.props.tabCallback,layerStates:e.props.tabStates,openfunc:e.open,headline:t[0].name,open:e.state.open,active:a+1===e.state.activeTab})})))),p.default.createElement("div",{className:d.cssConstants.STARBOARD_WRAPPER},p.default.createElement(y.Titlebar,{wrapperClass:"c4g-starboard-header",headerClass:d.cssConstants.STARBOARD_HEADLINE,header:t.starboard.label||this.langConstants.STARBOARD,closeBtnClass:d.cssConstants.STARBOARD_CLOSE,closeBtnCb:this.close,closeBtnTitle:this.langConstants.CLOSE}),a,p.default.createElement("div",{className:d.cssConstants.STARBOARD_CONTENT_CONTAINER},p.default.createElement(u.StarboardLayerswitcher,{key:this.props.tabLayers.length,mapController:this.props.mapController,lang:this.langConstants,objLayers:this.props.objLayers,styleData:this.props.styleData,parentCallback:this.props.parentCallback,layerStates:this.props.layerStates,changeCollapseState:this.props.changeCollapseState,openfunc:this.open,headline:t.layerswitcher.label,open:this.state.open,active:0===e.state.activeTab}),l))}},{key:"createStylingForIcon",value:function(e,t){var a=document.createElement("style");a.appendChild(document.createTextNode("")),document.head.appendChild(a),a.sheet.insertRule("button.c4g-starboard-view-trigger-tab-"+t+':before {\n  content: "\\'+e+"\";\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 900;\n  font-size: inherit;\n}")}},{key:"open",value:function(){var e=this;this.setState({open:!0},(function(){return e.slideOutCollidingElements()})),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){var e=this;this.setState({open:!1},(function(){return e.slideInCollidingElements()}))}},{key:"resizeFunction",value:function(){var e=this;window.requestAnimationFrame((function(){e.slideOutCollidingElements()}))}},{key:"componentDidUpdate",value:function(e,t,a){(this.state.open?this.slideOutCollidingElements():this.slideInCollidingElements(),this.props.mapController.data.caching&&!this.state.open)&&(f.utils.getValue("panel")===this.constructor.name&&f.utils.storeValue("panel",""))}},{key:"slideOutCollidingElements",value:function(){jQuery(".c4g-starboard-container").addClass("c4g-open").removeClass("c4g-close")}},{key:"slideInCollidingElements",value:function(){jQuery(".c4g-starboard-container").addClass("c4g-close").removeClass("c4g-open")}}]),t}(i.Component);t.default=m},1393:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StarboardLayerswitcher=void 0;var r=u(a(119)),s=u(a(115)),l=u(a(116)),o=u(a(120)),n=u(a(121)),i=a(123),p=u(i),c=a(134),d=a(1394);function u(e){return e&&e.__esModule?e:{default:e}}t.StarboardLayerswitcher=function(e){function t(e){(0,s.default)(this,t);var a=(0,o.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));a.getInitialStates=function(){for(var e in a.initialCounterOff=0,a.initialCounterOn=0,a.props.layerStates)if(a.props.layerStates.hasOwnProperty(e)&&(a.props.layerStates[e].active?a.initialCounterOn++:a.initialCounterOff++,a.props.layerStates[e].childStates))for(var t in a.props.layerStates[e].childStates)a.props.layerStates[e].childStates.hasOwnProperty(t)&&a.getInitialStateChild(a.props.layerStates[e].childStates[t]);return a.initialCounterOn>a.initialCounterOff},a.callbackFunction=function(e,t){var r=a.props.layerStates;r[e]=t,a.props.parentCallback(r)};return a.setLayerFilter=a.setLayerFilter.bind(a),a.toggleAllLayers=a.toggleAllLayers.bind(a),a.changeCollapseState=a.changeCollapseState.bind(a),a.state={initialized:!1,layerFilter:""},a}return(0,n.default)(t,e),(0,l.default)(t,[{key:"getInitialStateChild",value:function(e){if(e.active?this.initialCounterOn++:this.initialCounterOff++,e.childStates)for(var t in e.childStates)e.childStates.hasOwnProperty(t)&&this.getInitialStateChild(e.childStates[t])}},{key:"setLayerFilter",value:function(){var e=jQuery(".c4g-starboard-layertree-filter-field").val()||"";this.setState({layerFilter:e})}},{key:"filterFunc",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=!1;if(t&&t.name&&(-1!==t.name.toLowerCase().indexOf(e.toLowerCase())||-1!==t.name.toUpperCase().indexOf(e.toUpperCase())))s=!0,e&&a&&(a.collapsed=!1);else if(t.tags&&t.tags.find((function(t){return-1!==t.toLowerCase().indexOf(e.toLowerCase())})))s=!0,e&&a&&(a.collapsed=!1);else if(r)for(var l in t.childs)t.childs.hasOwnProperty(l)&&!s&&(s=this.filterFunc(e,t.childs[l],a.childStates[l]),e&&s&&a&&(a.collapsed=!1));return s}},{key:"toggleAllLayers",value:function(){var e=this,t=this.props.layerStates,a=this.props.objLayers;t=e.buttonEnabled?function t(a,r){for(var s=0;s<r.length;s++)r[s].active&&e.props.mapController.proxy.layerController.hide(a[s].loader,a[s].features||a[s].vectorLayer),r[s].active=!1,r[s].childStates&&r[s].childStates.length>0&&(r[s].childStates=t(a[s].childs,r[s].childStates));return e.buttonEnabled=!1,r}(a,t):function t(a,r){for(var s=0;s<r.length;s++)r[s].active||e.props.mapController.proxy.layerController.show(a[s].loader,a[s].features||a[s].vectorLayer),r[s].active=!0,r[s].childStates&&r[s].childStates.length>0&&(r[s].childStates=t(a[s].childs,r[s].childStates));return e.buttonEnabled=!0,r}(a,t),this.props.parentCallback(t)}},{key:"changeCollapseState",value:function(e,t){}},{key:"render",value:function(){var e=this;!(this.props.layerStates&&this.props.layerStates.length>0)||this.initialCounterOff&&this.initialCounterOn||(this.buttonEnabled=this.getInitialStates());var t,a=void 0,r=void 0;if(a=this.props.objLayers,t=this.props.layerStates,!this.props.active)return null;r="",this.props.mapController.data.layerswitcher.filter&&(r=p.default.createElement("div",{className:"c4g-starboard-layertree-filter without-button"},p.default.createElement("input",{className:"c4g-starboard-layertree-filter-field",type:"text",onInput:this.setLayerFilter,placeholder:""})));var s="";return s=this.props.mapController.data.starboard.button?p.default.createElement("a",{className:"c4g-starboard-headline-link "+(this.buttonEnabled?"c4g-active":"c4g-inactive"),onMouseUp:this.toggleAllLayers},this.props.headline||this.props.lang.LAYERSWITCHER_TOGGLE_ALL):p.default.createElement("div",{className:"contentHeadline"},this.props.headline),p.default.createElement(p.default.Fragment,null,s,r,p.default.createElement("div",{className:"c4g-content-layertree"},p.default.createElement("div",{className:c.cssConstants.STARBOARD_LAYERTREE},p.default.createElement("ul",null,a.map((function(a,r){if(e.filterFunc(e.state.layerFilter,a,t[r]))return p.default.createElement(d.C4gStarboardLayerElement,{key:r,keyId:r,id:a.id,mapController:e.props.mapController,parentCallback:e.callbackFunction,layer:a,styleData:e.props.styleData,changeCollapseState:e.props.changeCollapseState,layerStates:t[r],lang:e.props.lang,byPassChilds:e.filterFunc(e.state.layerFilter,a,!1,!1),strFilter:e.state.layerFilter,filterFunc:e.filterFunc,fnResize:e.props.fnResize})}))))))}}]),t}(i.Component)},1394:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.C4gStarboardLayerElement=void 0;var r=h(a(119)),s=h(a(115)),l=h(a(116)),o=h(a(120)),n=h(a(121)),i=a(123),p=h(i),c=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);t.default=e}(a(112)),a(134)),d=a(1395),u=a(189);function h(e){return e&&e.__esModule?e:{default:e}}t.C4gStarboardLayerElement=function(e){function t(e){(0,s.default)(this,t);var a=(0,o.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return a.layerClick=a.layerClick.bind(a),a.layerZoomTo=a.layerZoomTo.bind(a),a.spanClick=a.spanClick.bind(a),a.changeCollapseState=a.changeCollapseState.bind(a),a.parentCallback=a.parentCallback.bind(a),a}return(0,n.default)(t,e),(0,l.default)(t,[{key:"showLayer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this,a=!1,r=!1;e?Array.isArray(e)?a=e:e instanceof u.Vector&&(r=e):(a=a||t.props.layer.features,r=r||t.props.layer.vectorLayer),a=a||t.props.layer.features;var s=t.props.mapController.proxy.layerController;a&&a.length>0?s.show(t.props.layer.loader,a,t.props.id):r?s.show(t.props.layer.loader,r,t.props.id):s.show(!1,!1,t.props.id),t.props.mapController.setLayerStateWithId(t.props.id,!0)}},{key:"hideLayer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this,a=!1,r=!1;e?Array.isArray(e)?a=e:e instanceof u.Vector&&(r=e):(a=a||t.props.layer.features,r=r||t.props.layer.vectorLayer);var s=t.props.mapController.proxy.layerController;a&&a.length>0?s.hide(t.props.layer.loader,a,t.props.id):r?s.hide(t.props.layer.loader,r,t.props.id):s.hide(!1,!1,t.props.id),t.props.mapController.setLayerStateWithId(t.props.id,!1)}},{key:"changeChildState",value:function(e,t,a){if(a?this.showLayer(e.features||e.vectorLayer):this.hideLayer(e.features||e.vectorLayer),e.childs&&e.childs.length>0)for(var r in e.childs){if(e.childs.hasOwnProperty(r))t.childStates[r].active!==a&&(t.childStates[r]=this.changeChildState(e.childs[r],t.childStates[r],a))}return this.props.mapController.setLayerStateWithId(t.id,a),t.active=a,t}},{key:"parentCallback",value:function(e,t){var a=this.props.layerStates;a.childStates[e]=t,a.active!=t.active&&(t.active?this.showLayer():this.hideLayer()),this.props.parentCallback(this.props.keyId,a)}},{key:"layerClick",value:function(e){if(e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),this.props.layerStates.greyed)return!1;this.props.layerStates.active?this.hideLayer():this.showLayer();var t=this.props.layerStates;if(this.props.layer.childs&&this.props.layer.childs.length>0){var a=this.props.layer.childs;for(var r in a){if(a.hasOwnProperty(r))t.childStates[r].active!==t.active&&(t.childStates[r]=this.changeChildState(a[r],t.childStates[r],t.active))}}}},{key:"layerZoomTo",value:function(e){var t=this;this.props.layerStates.active||this.layerClick(e),this.props.mapController.proxy.layerController.zoomTo(this.props.layer),this.props.mapController.proxy.layerController.setChildFeatureFlag(this.props.layer,"markLocstyle",!0),window.setTimeout((function(){t.props.mapController.proxy.layerController.setChildFeatureFlag(t.props.layer,"markLocstyle",!1)}),3e3)}},{key:"changeCollapseState",value:function(e,t){this.props.layerStates.childStates[e]=t,this.props.changeCollapseState(this.props.keyId,this.props.layerStates)}},{key:"spanClick",value:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),this.props.layerStates.collapsed=!this.props.layerStates.collapsed,this.props.changeCollapseState(this.props.keyId,this.props.layerStates)}},{key:"render",value:function(){var e=this,a=null,r=null;"1"===this.props.mapController.data.starboard.showLocstyles&&this.props.layer.locstyle&&this.props.styleData&&this.props.styleData.arrLocStyles&&this.props.styleData.arrLocStyles[this.props.layer.locstyle]?a=this.props.layer.addZoomTo?p.default.createElement(d.C4gStarboardStyle,{styleData:this.props.styleData,styleId:this.props.layer.locstyle,tooltip:this.props.lang.STARBOARD_ELEMENT_ZOOM,clickEvent:this.layerZoomTo}):p.default.createElement(d.C4gStarboardStyle,{styleData:this.props.styleData,styleId:this.props.layer.locstyle}):this.props.layer.addZoomTo&&!this.props.mapController.data.starboard.invertZoomActivate&&(r=p.default.createElement("span",{className:"c4g-geojson-button",title:this.props.lang.STARBOARD_ELEMENT_ZOOM,onMouseUp:function(t){return e.layerZoomTo(t)}}));var s=this.props.layerStates.active?c.cssConstants.ACTIVE:c.cssConstants.INACTIVE;this.props.layerStates.greyed&&(s+=" "+c.cssConstants.DISABLED);var l=this.props.layerStates.collapsed?c.cssConstants.CLOSE:c.cssConstants.OPEN,o=this.props.layer.childs,n=void 0,i=void 0;if(this.props.mapController.data.starboard.invertZoomActivate&&this.props.layer.addZoomTo?(n=p.default.createElement(p.default.Fragment,null,p.default.createElement("a",{className:"c4g-starboard-text",onMouseUp:function(t){return e.layerZoomTo(t)}},this.props.layer.name)),i=p.default.createElement("a",{className:s+" c4g-starboard-checkbox-icon",onMouseUp:function(t){return e.layerClick(t)}})):n=p.default.createElement("a",{className:s,onMouseUp:function(t){return e.layerClick(t)}},this.props.layer.name),o&&o.length){var u=p.default.createElement("span",{className:c.cssConstants.ICON,onMouseUp:function(t){return e.spanClick(t)}});return p.default.createElement("li",{className:l+" c4g-starboard-list-element"},u,a,r,n,i,p.default.createElement("ul",null,o.map((function(a,r){if(e.props.byPassChilds||e.props.filterFunc(e.props.strFilter,a,e.props.layerStates.childStates[r]))return p.default.createElement(t,{key:r,keyId:r,id:a.id,mapController:e.props.mapController,parentCallback:e.parentCallback,strFilter:e.props.strFilter,filterFunc:e.props.filterFunc,changeCollapseState:e.changeCollapseState,lang:e.props.lang,byPassChilds:e.props.byPassChilds||e.props.filterFunc(e.props.strFilter,a,!1,!1),layerStates:e.props.layerStates.childStates[r],layer:a,styleData:e.props.styleData,fnResize:e.props.fnResize})}))))}this.layerClick;return this.props.layer.zoomTo&&(this.layerZoomTo,s="c4g-geojson-button"),p.default.createElement("li",{className:l+" c4g-starboard-list-element"},a,null,n,i)}}]),t}(i.Component)},1395:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.C4gStarboardStyle=void 0;var r=y(a(119)),s=y(a(115)),l=y(a(116)),o=y(a(120)),n=y(a(121)),i=a(123),p=y(i),c=y(a(150)),d=a(178),u=a(134),h=a(137);function y(e){return e&&e.__esModule?e:{default:e}}t.C4gStarboardStyle=function(e){function t(e){return(0,s.default)(this,t),(0,o.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e))}return(0,n.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this,t=null,a=this.props.styleData.arrLocStyles[this.props.styleId],r=a.locStyleArr,s=a.style&&a.style(new c.default({geometry:new d.Point(0,0)}),"EPSG:4326")?a.style(new c.default({geometry:new d.Point(0,0)}),"EPSG:4326"):null,l=Array.isArray(s)?s[0]:s,o=r?r.styletype:"default";if(!r||"cust_icon"!==o&&"cust_icon_svg"!==o&&"photo"!==o){var n=void 0;switch(o){case"point":n=u.cssConstants.STARBOARD_LOCSTYLE_POINT;break;case"square":n=u.cssConstants.STARBOARD_LOCSTYLE_SQUARE;break;case"star":n=u.cssConstants.STARBOARD_LOCSTYLE_STAR;break;case"x":n=u.cssConstants.STARBOARD_LOCSTYLE_X;break;case"cross":n=u.cssConstants.STARBOARD_LOCSTYLE_CROSS;break;case"triangle":n=u.cssConstants.STARBOARD_LOCSTYLE_TRIANGLE;break;default:n=u.cssConstants.STARBOARD_LOCSTYLE}var i=void 0,y=void 0;l&&l.getFill()&&l.getStroke()?(i=l.getFill().getColor(),y=l.getStroke().getColor()):r&&r.fillcolor&&r.strokecolor&&(i=h.utils.getRgbaFromHexAndOpacity(r.fillcolor[0],r.fillcolor[1]),y=h.utils.getRgbaFromHexAndOpacity(r.strokecolor[0],r.strokecolor[1]));var f={"--var-color":i,"--var-bordercolor":y};t=this.props.clickEvent&&this.props.tooltip?p.default.createElement("span",{className:n,style:f,title:this.props.tooltip,onMouseUp:function(t){return e.props.clickEvent(t)}}):p.default.createElement("span",{className:n,style:f})}else{var C=null,m=void 0;if(r.icon_src&&-1!==r.icon_src.indexOf(".")||r.svgSrc&&-1!==r.svgSrc.indexOf("."))m="cust_icon"===o||"photo"===o?r.icon_src:r.svgSrc,C=p.default.createElement("img",{src:m,style:{height:25,width:25}});else if(l){var g=l.getImage&&"function"==typeof l.getImage&&l.getImage()?l.getImage():null;if(!g||!g.getSrc())return null;C=p.default.createElement("img",{src:g.getSrc(),style:{height:25,width:25}})}t=this.props.clickEvent&&this.props.tooltip?p.default.createElement("span",{className:u.cssConstants.STARBOARD_LOCSTYLE,title:this.props.tooltip,onMouseUp:function(t){return e.props.clickEvent(t)}},C):p.default.createElement("span",{className:u.cssConstants.STARBOARD_LOCSTYLE},C)}return t}}]),t}(i.Component)}}]);
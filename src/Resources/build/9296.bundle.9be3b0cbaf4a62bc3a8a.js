"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[9296],{44048:(e,t,r)=>{var n=r(46147),o=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.StarboardScopeItem=void 0;var a=n(r(28110)),s=n(r(20963)),c=n(r(23673)),l=n(r(23422)),i=n(r(60560)),u=n(r(42315)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var c=a?Object.getOwnPropertyDescriptor(e,s):null;c&&(c.get||c.set)?Object.defineProperty(n,s,c):n[s]=e[s]}n.default=e,r&&r.set(e,n);return n}(r(3044)),f=(r(89788),r(92025));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.default)(e);if(t){var o=(0,u.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,i.default)(this,r)}}var g=function(e){(0,l.default)(r,e);var t=h(r);function r(e){var n;(0,a.default)(this,r),n=t.call(this,e);(0,c.default)(n);return n.state={},n.highlightFeature=n.highlightFeature.bind((0,c.default)(n)),n}return(0,s.default)(r,[{key:"highlightFeature",value:function(){var e=this;this.props.feature.set("markLocstyle",!0),window.setTimeout((function(){e.props.feature.set("markLocstyle",!1)}),3e3)}},{key:"render",value:function(){var e=this,t=this.props.feature.get("popup");t.async&&(t.async=!1,fetch(this.props.mapController.proxy.api_infowindow_url+"/"+t.content).then((function(e){return e.json()})).then((function(t){e.props.feature.set("popup",t)})));var r=null;return this.props.feature.get("distance")&&(r=p.default.createElement("div",{className:"c4g-element-distance"},this.props.langConstants.DIST,": ",(0,f.toHumanDistance)(this.props.feature.get("distanceMatrix")||this.props.feature.get("distance")))),p.default.createElement("li",{onMouseUp:this.highlightFeature},p.default.createElement("div",{className:"c4g-popup-wrapper",dangerouslySetInnerHTML:{__html:this.props.feature.get("popup").content}}),r)}}]),r}(p.Component);t.StarboardScopeItem=g},59296:(e,t,r)=>{var n=r(46147),o=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(28110)),s=n(r(20963)),c=n(r(23673)),l=n(r(23422)),i=n(r(60560)),u=n(r(42315)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=C(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var c=a?Object.getOwnPropertyDescriptor(e,s):null;c&&(c.get||c.set)?Object.defineProperty(n,s,c):n[s]=e[s]}n.default=e,r&&r.set(e,n);return n}(r(3044)),f=r(66855),d=r(89788),h=r(79756),g=r(44048),v=r(95751),m=r(12200),y=(r(93969),r(60144),r(28193));function C(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(C=function(e){return e?r:t})(e)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.default)(e);if(t){var o=(0,u.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,i.default)(this,r)}}var w=p.default.lazy((function(){return Promise.resolve().then(r.bind(r,35501))})),S=function(e){(0,l.default)(r,e);var t=b(r);function r(e){var n;(0,a.default)(this,r),n=t.call(this,e);var o=(0,c.default)(n);n.lastTime=-1/0,n.preventAddReqs=!1;var s=document.createElement("div"),l=document.createElement("button");n.langConstants=(0,v.getLanguage)(e.mapController.data),l.title=n.langConstants.ELEMENTS_SCOPE,s.className="c4g-starboardscope-control ol-unselectable ol-control ",e.open?s.className+="c4g-open":s.className+="c4g-close",s.appendChild(l),jQuery(s).on("click",(function(e){o.state.open?o.close():o.open()}));var i=e.mapController,u=new f.Control({element:s,target:e.target});i.mapsControls.controls.baselayerSwitcher=u,i.map.addControl(u),n.open=n.open.bind((0,c.default)(n)),n.close=n.close.bind((0,c.default)(n)),n.getFeaturesInScope=n.getFeaturesInScope.bind((0,c.default)(n)),n.view=e.mapController.map.getView();var p=e.mapController.proxy.layerController;return n.vectorSource=p.vectorSource instanceof h.Cluster?p.vectorSource.getSource():p.vectorSource,n.view.on("change",(function(e){n.getFeaturesInScope()})),window.c4gMapsHooks.layer_loaded=window.c4gMapsHooks.layer_loaded||[],window.c4gMapsHooks.layer_loaded.push((function(e){n.getFeaturesInScope()})),n.state={open:e.open||!1,className:e.className||"c4g-starboardscope-panel",control:u,features:[]},n}return(0,s.default)(r,[{key:"getFeaturesInScope",value:function(){var e=this,t=Date.now(),r=this.props.mapController.proxy.layerController;if(this.state.open&&this._isMounted&&t>this.lastTime+250){this.lastTime=t;var n=this.view.calculateExtent(),o=this.vectorSource.getFeaturesInExtent(n);for(var a in r.vectorSources)if(r.vectorSources.hasOwnProperty(a)){var s=(r.vectorSources[a]instanceof h.Cluster?r.vectorSources[a].getSource():r.vectorSources[a]).getFeaturesInExtent(n);o=o.concat(s)}this.sortFeatures(o)||(this.lastTime=-1/0,window.setTimeout((function(){e.getFeaturesInScope()}),200)),this.setState({features:o})}}},{key:"getDistance",value:function(e,t){var r=this.toRad(t[0]-e[0]),n=this.toRad(t[1]-e[1]),o=this.toRad(e[0]),a=this.toRad(t[0]),s=Math.sin(r/2)*Math.sin(r/2)+Math.sin(n/2)*Math.sin(n/2)*Math.cos(o)*Math.cos(a);return 1e3*(6371*(2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s))))}},{key:"toRad",value:function(e){return e*Math.PI/180}},{key:"sortFeatures",value:function(e){var t=this;if(this.props.mapController.geolocation){if(this.props.mapController.data.matrixKey){var r=[],n=[],o=this.props.mapController.geolocation.getPosition();if(!o)return!1;for(var a in n.push((0,y.toLonLat)(o)),e)e.hasOwnProperty(a)&&!e[a].get("distanceMatrix")&&(r.push(e[a]),n.push((0,y.toLonLat)(e[a].getGeometry().getCoordinates())));if(n.length>2&&!this.preventAddReqs){var s=this.props.mapController.data.proxyUrl+"matrix.php?language=de&profile=auto&key="+this.props.mapController.data.matrixKey,c=JSON.stringify({locations:n}),l=this;l.preventAddReqs=!0,fetch(s,{method:"POST",mode:"cors",headers:{"Content-Type":"text/plain"},body:c}).then((function(e){return l.preventAddReqs=!1,e.json().then((function(e){var t=e.sources_to_targets[0];for(var n in t)t.hasOwnProperty(n)&&r.hasOwnProperty(n)&&r[n].set("distanceMatrix",1e3*t[n].distance);l.sortFeatures(l.state.features),l.forceUpdate()}))}))}}var i=this.props.mapController.geolocation.getPosition();e.sort((function(e,r){var n=0,o=0;if(e.get("distanceMatrix")||e.get("distance"))n=e.get("distanceMatrix")||e.get("distance");else{var a=e.getGeometry();n=t.getDistance((0,y.toLonLat)(i),(0,y.toLonLat)(a.getCoordinates())),e.set("distance",n)}if(r.get("distanceMatrix")||r.get("distance"))o=r.get("distanceMatrix")||r.get("distance");else{var s=r.getGeometry();o=t.getDistance((0,y.toLonLat)(i),(0,y.toLonLat)(s.getCoordinates())),r.set("distance",o)}return n-o}))}return e}},{key:"render",value:function(){var e=this;return this.state.open?(jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close"),jQuery(".c4g-starboardscope-container").addClass("c4g-open").removeClass("c4g-close")):(jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close"),jQuery(".c4g-starboardscope-container").removeClass("c4g-open").addClass("c4g-close")),p.default.createElement("div",{className:d.cssConstants.STARBOARD_WRAPPER},p.default.createElement(p.Suspense,{fallback:p.default.createElement("div",null,"Loading...")},p.default.createElement(w,{wrapperClass:"c4g-starboardscope-header",headerClass:"c4g-starboardscope-headline",header:this.langConstants.ELEMENTS_SCOPE,closeBtnClass:"c4g-starboardscope-close",closeBtnCb:this.close,closeBtnTitle:this.langConstants.CLOSE})),p.default.createElement("div",{className:"c4g-starboardscope-content-container"},p.default.createElement("ul",null,this.state.features.map((function(t,r){if(r<20)return p.default.createElement(g.StarboardScopeItem,{mapController:e.props.mapController,langConstants:e.langConstants,index:r,key:r,feature:t})})))))}},{key:"open",value:function(){var e=this;this.setState({open:!0},(function(){e.view,e.getFeaturesInScope()})),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){this.setState({open:!1})}},{key:"componentDidMount",value:function(){this._isMounted=!0,this.props.mapController.geolocation.getTracking()||this.props.mapController.geolocation.setTracking(!0)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidUpdate",value:function(e,t,r){this.props.mapController.data.caching&&!this.state.open&&(m.utils.getValue("panel")===this.constructor.name&&m.utils.storeValue("panel",""))}}]),r}(p.Component);t.default=S}}]);
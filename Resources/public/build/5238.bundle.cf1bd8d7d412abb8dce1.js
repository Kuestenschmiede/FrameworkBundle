"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[5238],{32842:(e,t,n)=>{var r=n(46147),o=n(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.StarboardScopeItem=void 0;var a=r(n(28110)),s=r(n(20963)),l=r(n(23673)),u=r(n(23422)),c=r(n(60560)),i=r(n(42315)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var l=a?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(r,s,l):r[s]=e[s]}r.default=e,n&&n.set(e,r);return r}(n(3044)),f=(n(96983),n(96067),n(60144)),d=n(43886);function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,i.default)(e);if(t){var o=(0,i.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.default)(this,n)}}var v=function(e){(0,u.default)(n,e);var t=g(n);function n(e){var r;(0,a.default)(this,n),r=t.call(this,e);(0,l.default)(r);return r.state={},r.highlightFeature=r.highlightFeature.bind((0,l.default)(r)),r}return(0,s.default)(n,[{key:"highlightFeature",value:function(){var e=this;this.props.feature.set("markLocstyle",!0),window.setTimeout((function(){e.props.feature.set("markLocstyle",!1)}),3e3)}},{key:"render",value:function(){var e=this,t=this.props.feature.get("popup");t.async&&fetch(this.props.mapController.proxy.api_infowindow_url+"/"+t.content).then((function(e){return e.json()})).then((function(n){var r={async:!1,content:n.content,routing_link:t.routing_link};e.props.feature.set("popup",r),e.props.setSingleFeature(e.props.feature,e.props.index)}));var n=null,r=this.props.feature.getGeometry();if(this.props.userPosition&&"Point"===r.getType()){var o=[this.props.userPosition,r.getCoordinates()],a=new f.LineString(o);n=p.default.createElement("div",{className:"c4g-element-distance"},this.props.langConstants.DIST,": ",(0,d.toHumanDistance)(a.getLength()))}return p.default.createElement("li",{onMouseUp:this.highlightFeature},p.default.createElement("div",{className:"c4g-popup-wrapper",dangerouslySetInnerHTML:{__html:this.props.feature.get("popup").content}}),n)}}]),n}(p.Component);t.StarboardScopeItem=v},45238:(e,t,n)=>{var r=n(46147),o=n(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(28110)),s=r(n(20963)),l=r(n(23673)),u=r(n(23422)),c=r(n(60560)),i=r(n(42315)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=C(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var l=a?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(r,s,l):r[s]=e[s]}r.default=e,n&&n.set(e,r);return r}(n(3044)),f=n(66855),d=n(96983),h=n(96067),g=n(32842),v=n(94344),m=n(53500),y=n(93969);function C(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(C=function(e){return e?n:t})(e)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,i.default)(e);if(t){var o=(0,i.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,c.default)(this,n)}}var S=p.default.lazy((function(){return Promise.resolve().then(n.bind(n,87630))})),w=function(e){(0,u.default)(n,e);var t=b(n);function n(e){var r;(0,a.default)(this,n),r=t.call(this,e);var o=(0,l.default)(r);r.lastTime=-1/0;var s=document.createElement("div"),u=document.createElement("button");r.langConstants=(0,v.getLanguage)(e.mapController.data),u.title=r.langConstants.ELEMENTS_SCOPE,s.className="c4g-starboardscope-control ol-unselectable ol-control ",e.open?s.className+="c4g-open":s.className+="c4g-close",s.appendChild(u),jQuery(s).on("click",(function(e){o.state.open?o.close():o.open()}));var c=e.mapController,i=new f.Control({element:s,target:e.target});c.mapsControls.controls.baselayerSwitcher=i,c.map.addControl(i),r.open=r.open.bind((0,l.default)(r)),r.close=r.close.bind((0,l.default)(r)),r.getFeaturesInScope=r.getFeaturesInScope.bind((0,l.default)(r)),r.setSingleFeature=r.setSingleFeature.bind((0,l.default)(r)),r.view=e.mapController.map.getView();var p=e.mapController.proxy.layerController;return r.vectorSource=p.vectorSource instanceof h.Cluster?p.vectorSource.getSource():p.vectorSource,r.view.on("change",(function(e){r.getFeaturesInScope()})),window.c4gMapsHooks.layer_loaded=window.c4gMapsHooks.layer_loaded||[],window.c4gMapsHooks.layer_loaded.push((function(e){r.getFeaturesInScope()})),r.state={open:e.open||!1,className:e.className||"c4g-starboardscope-panel",control:i,features:[]},r}return(0,s.default)(n,[{key:"getFeaturesInScope",value:function(){var e=Date.now();this.props.mapController.proxy.layerController;if(this.state.open&&this._isMounted&&e>this.lastTime+250){this.lastTime=e;var t=this.view.calculateExtent(),n=this.vectorSource.getFeaturesInExtent(t);this.setState({features:n})}}},{key:"setSingleFeature",value:function(e,t){var n=this.state.features;n[t]=e,this.setState({features:n})}},{key:"render",value:function(){var e=this;this.state.open?(jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close"),jQuery(".c4g-starboardscope-container").addClass("c4g-open").removeClass("c4g-close")):(jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close"),jQuery(".c4g-starboardscope-container").removeClass("c4g-open").addClass("c4g-close"));var t=!1;return this.geolocation&&(t=this.geolocation.getPosition()),p.default.createElement("div",{className:d.cssConstants.STARBOARD_WRAPPER},p.default.createElement(p.Suspense,{fallback:p.default.createElement("div",null,"Loading...")},p.default.createElement(S,{wrapperClass:"c4g-starboardscope-header",headerClass:"c4g-starboardscope-headline",header:this.langConstants.ELEMENTS_SCOPE,closeBtnClass:"c4g-starboardscope-close",closeBtnCb:this.close,closeBtnTitle:this.langConstants.CLOSE})),p.default.createElement("div",{className:"c4g-starboardscope-content-container"},p.default.createElement("ul",null,this.state.features.map((function(n,r){if(r<20)return p.default.createElement(g.StarboardScopeItem,{mapController:e.props.mapController,langConstants:e.langConstants,setSingleFeature:e.setSingleFeature,index:r,key:r,feature:n,userPosition:t})})))))}},{key:"open",value:function(){var e=this;this.setState({open:!0},(function(){e.view,e.getFeaturesInScope()})),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){this.setState({open:!1})}},{key:"componentDidMount",value:function(){this._isMounted=!0,this.geolocation=new y.Geolocation({projection:this.view.getProjection(),tracking:!0})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidUpdate",value:function(e,t,n){this.props.mapController.data.caching&&!this.state.open&&(m.utils.getValue("panel")===this.constructor.name&&m.utils.storeValue("panel",""))}}]),n}(p.Component);t.default=w}}]);
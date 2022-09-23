"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[3953],{53953:(e,t,o)=>{var n=o(46147),a=o(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(o(78344)),r=n(o(28110)),l=n(o(20963)),i=n(o(23673)),p=n(o(23422)),c=n(o(60560)),u=n(o(42315)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var o=E(t);if(o&&o.has(e))return o.get(e);var n={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var l=s?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=e[r]}n.default=e,o&&o.set(e,n);return n}(o(3044)),h=o(87985),d=o(95751),g=o(89788),m=o(93558),C=o(92502),y=o(36876),v=o(23964),w=o(17770),k=o(34502),S=o(44700),b=o(29643),R=o(68459),P=o(12200),x=o(2309);function E(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(E=function(e){return e?o:t})(e)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=(0,u.default)(e);if(t){var a=(0,u.default)(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return(0,c.default)(this,o)}}var j=f.default.lazy((function(){return o.e(9225).then(o.bind(o,29225))})),O=f.default.lazy((function(){return Promise.resolve().then(o.bind(o,35501))})),D=function(e){(0,p.default)(o,e);var t=T(o);function o(e){var n;(0,r.default)(this,o),(n=t.call(this,e)).langConstants=(0,d.getLanguage)(e.mapController.data),n.clickControl=n.clickControl.bind((0,i.default)(n)),n.doneFunction=n.doneFunction.bind((0,i.default)(n));var a=document.createElement("div"),s=document.createElement("button");if(s.setAttribute("aria-label",n.langConstants.CTRL_GEOSEARCH),s.setAttribute("title",n.langConstants.CTRL_GEOSEARCH),a.className="c4g-geosearch ol-control ol-unselectable",a.appendChild(s),jQuery(s).on("click",(function(){n.clickControl()})),e.external)a.className+=" c4g-external";else{var l=document.createElement("input");l.setAttribute("id","c4g-geosearch-input"),e.collapsed?jQuery(l).addClass("c4g-close"):jQuery(l).addClass("c4g-open"),l.addEventListener("keydown",(function(e){n.inputCallback(e)})),a.appendChild(l),n.input=l;var p=document.createElement("span");p.addEventListener("click",(function(){n.clickControl(!0)})),jQuery(p).addClass("searchSpan");var c=document.createElement("i");c.innerHTML='<i class="far fa-times-circle"></i>',p.appendChild(c),a.appendChild(p)}n.controlElement=a;var u=new h.Control({element:a,target:e.target});if(e.mapController.map.addControl(u),n.config={},e.mapController.data.geosearch.searchKey&&e.mapController.data.geosearch.url?(n.config.url=e.mapController.data.geosearch.url+"search.php",n.config.key=e.mapController.data.geosearch.searchKey,n.config.params=e.mapController.data.geosearch.params):n.config.url=e.mapController.data.api.geosearch+"/"+e.mapController.data.profile,n.config.zoomlevel=e.searchZoom,n.config.zoombounds=e.zoomBounds,n.config.quicksearch=e.quicksearch||!0,n.config.animate=e.animate,n.config.markResult=e.markResult,n.config.animateDuration=e.animateDuration,n.config.resultDuration=e.resultDuration,n.config.popup=e.popup,n.config.autopick=e.autopick,n.config.mapController=e.mapController,n.config.results=e.results,n.config.resultStyle=e.resultStyle,n.config.resultStyle&&parseInt(n.config.resultStyle,10)>0){var f=(0,i.default)(n);e.mapController.proxy.locationStyleController.arrLocStyles[n.config.resultStyle]?n.config.resultStyle=e.mapController.proxy.locationStyleController.arrLocStyles[n.config.resultStyle].style:e.mapController.proxy.locationStyleController.loadLocationStyles([n.config.resultStyle],{done:function(){f.config.resultStyle=e.mapController.proxy.locationStyleController.arrLocStyles[f.config.resultStyle].style}})}return n.config.collapsed=e.collapsed,n.config.resultCount=e.resultCount,n.config.caching=e.caching,n.config.placeholder=e.placeholder,n.state={open:!e.collapsed,query:"",results:[],currentCoordinate:[],openResults:!1,currentResult:null},n.inputCallback=n.inputCallback.bind((0,i.default)(n)),n.startSearch=n.startSearch.bind((0,i.default)(n)),n.zoomTo=n.zoomTo.bind((0,i.default)(n)),n.closeResults=n.closeResults.bind((0,i.default)(n)),n.openResults=n.openResults.bind((0,i.default)(n)),n.close=n.close.bind((0,i.default)(n)),n.closeResultsCompletely=n.closeResultsCompletely.bind((0,i.default)(n)),n}return(0,l.default)(o,[{key:"render",value:function(){var e=this,t=this.state.open&&this.state.openResults?"c4g-open":"c4g-close";this.props.extDiv&&(t+=" external ");var o="";this.state.openResults&&this.config.results&&(o=f.default.createElement(j,{className:t,results:this.state.results,extDiv:this.props.extResultsDiv,zoomFunc:function(t){e.setState({currentResult:e.state.results[t]}),e.zoomTo(t)},closeResults:this.closeResults,headline:this.props.resultsHeadline,currentResult:this.state.currentResult,resultsDiv:this.props.resultsDiv,open:this.state.results.length>0,openResults:this.openResults,closeCb:this.closeResultsCompletely}));var n="",a="";this.props.external||(n="c4g-titlebar-close",a=this.clickControl);var s=this.props.headline;s||(s=this.langConstants.GEOSEARCH);var r=null;return this.props.external&&(r=f.default.createElement("div",{className:"c4g-geosearch-filter"},f.default.createElement("input",{type:"text",onKeyDown:this.inputCallback,id:"c4g-geosearch-input",placeholder:this.config.placeholder,"aria-label":this.config.placeholder}),f.default.createElement("button",{className:g.cssConstants.GEOSEARCH_START,type:"button",title:this.langConstants.CTRL_START_SEARCH,onMouseUp:this.startSearch}))),this.props.external||this.state.open&&this.state.openResults?f.default.createElement(f.default.Fragment,null,f.default.createElement("div",{className:g.cssConstants.GEOSEARCH_WRAPPER+" "+t+" c4g-horizon"},f.default.createElement(f.Suspense,{fallback:f.default.createElement("div",null,"Loading...")},f.default.createElement(O,{wrapperClass:"c4g-geosearch-header",header:s,headerClass:"c4g-geosearch-headline",detailBtnClass:"",detailBtnCb:"",closeBtnClass:n,closeBtnCb:a,closeBtnTitle:this.langConstants.CLOSE})),r,o)):null}},{key:"closeResultsCompletely",value:function(){this.setState({openResults:!1})}},{key:"componentDidUpdate",value:function(e,t,o){this.props.mapController&&this.props.mapController.data&&this.props.mapController.data.geosearch&&this.props.mapController.data.geosearch.results&&(this.state.open?(t.open!==this.state.open&&this.state.results&&this.state.results.length&&this.props.mapController.setOpenComponent(this),this.state.openResults&&!this.props.extResultsDiv&&jQuery(".c4g-geosearch-container-right").addClass("c4g-open").removeClass("c4g-close")):jQuery(".c4g-geosearch-container-right").addClass("c4g-close").removeClass("c4g-open"),this.props.mapController.data.caching&&!this.state.open&&P.utils.getValue("panel")===this.constructor.name&&P.utils.storeValue("panel",""))}},{key:"close",value:function(){this.setState({open:!1})}},{key:"startSearch",value:function(e){e.stopPropagation();var t=document.querySelector(g.cssConstants.GEOSEARCH_START);try{t.blur()}catch(e){}var o=jQuery("#c4g-geosearch-input");o.val()&&this.findLocation(o.val())}},{key:"inputCallback",value:function(e){if(e.stopPropagation(),13===e.which){var t=jQuery("#c4g-geosearch-input");return t.val()&&this.findLocation(t.val()),!1}}},{key:"clickControl",value:function(e){(void 0!==e?e:this.state.open)?(this.setState({open:!1}),this.props.external||jQuery(this.input).addClass("c4g-close").removeClass("c4g-open")):(this.setState({open:!0}),this.props.external||(jQuery(this.input).removeClass("c4g-close").addClass("c4g-open"),this.input.focus()))}},{key:"closeResults",value:function(){this.setState({detailOpenResults:!1})}},{key:"openResults",value:function(){this.setState({detailOpenResults:!0})}},{key:"findLocation",value:function(e,t){var o,n=this;if((o=this.props.mapController).map,o.spinner.show(),this.config.animate,this.config.animateDuration,this.config.markResult,"object"===(0,s.default)(t)&&(void 0!==t.animate&&t.animate,void 0!==t.markResult&&t.markResult),this.config.quicksearch){var a={format:"json",q:e};if(this.config.resultCount&&(a.limit=this.config.resultCount),this.config.key&&(a.key=this.config.key),this.config.params)for(var r in this.config.params)this.config.params.hasOwnProperty(r)&&(a[r]=this.config.params[r]);var l=P.utils.callHookFunctions(window.c4gMapsHooks.hook_search,[a,this]);if(l&&l.length>0)for(var i in this.config.mapController.spinner.hide(),l)l.hasOwnProperty(i)&&this.doneFunction(l[i]);else jQuery.ajax({dataType:"json",url:this.config.url,data:a}).done(this.doneFunction).fail((function(){})).always((function(){n.config.mapController.spinner.hide()}))}}},{key:"doneFunction",value:function(e){var t,o,n,a,r=this.props.mapController.map,l=this.config.animate,i=(this.config.animateDuration,this.config.markResult);if(e&&e.length&&e.length>0){if(t=r.getView(),e[0]){a=e[0],this.results=e,o=t.getCenter(),n=(0,m.transform)([parseFloat(a.lon),parseFloat(a.lat)],"EPSG:4326","EPSG:3857"),l?this.flyTo(r,n,this.config.zoomlevel,this.config.zoombounds,a.bounding_box,i,this.config.resultDuration,l,this.config.animateDuration,r.getView()):(this.completeSearch(this.config.markResult,this.config.animate,undefined,this.config.animateDuration,n,this.config.resultDuration),t.setCenter(n),this.config.zoomlevel>=0&&r.getView().setZoom(this.config.zoomlevel));var p=r.getPixelFromCoordinate(n),c=r.forEachFeatureAtPixel(p,(function(e,t){return e}),{hitTolerance:4}),u=r.forEachFeatureAtPixel(p,(function(e,t){return t}),{hitTolerance:4});if(c=c&&c.get("features")&&c.get("features").length>0?c.get("features")[0]:c,this.config.popup){var f,h={};c&&c.get("popup")?h=c.get("popup"):u&&u.popup?h=u.popup:c=!1;var C=this;if(c){var y=c.getGeometry();if(y instanceof S.Point)var v=y.getCoordinates();else v=n;window.c4gMapsPopup.popup.setPosition(v);var w=this.props.mapController.data;h.content&&("3"!==w.popupHandling&&(window.c4gMapsPopup.$content&&window.c4gMapsPopup.$content.html(""),window.c4gMapsPopup.$popup&&window.c4gMapsPopup.$popup.addClass(g.cssConstants.ACTIVE).addClass(g.cssConstants.LOADING),window.c4gMapsPopup.spinner.show()),!1===h.async||"0"==h.async?((f={}).popup=h,f.feature=c,f.layer=u,void 0!==window.c4gMapsHooks&&"object"===(0,s.default)(window.c4gMapsHooks.proxy_fillPopup)&&P.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup,{popup:f,mapController:this.props.mapController}),this.props.mapController.proxy.popupController.currentPopup||this.props.mapController.proxy.popupController.addPopUp(!1),this.props.mapController.proxy.popupController.setPopup(f)):jQuery.ajax({dataType:"json",url:this.props.mapController.proxy.api_infowindow_url+"/"+h.content}).done((function(e){var t={async:h.async,content:e.content,popup:h.popup,routing_link:h.routing_link};(f={}).popup=t,f.feature=c,f.layer=u,void 0!==window.c4gMapsHooks&&"object"===(0,s.default)(window.c4gMapsHooks.proxy_fillPopup)&&P.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup,{popup:f,mapController:C.props.mapController}),C.props.mapController.proxy.popupController.currentPopup||C.props.mapController.proxy.popupController.addPopUp(!1),C.props.mapController.proxy.popupController.setPopup(f)})))}else window&&window.c4gMapsPopup&&window.c4gMapsPopup.popup&&jQuery(window.c4gMapsPopup.popup).removeClass(g.cssConstants.ACTIVE)}this.config.autopick&&this.config.mapController.geopicker&&"function"==typeof this.config.mapController.geopicker.pick&&this.config.mapController.geopicker.pick(n)}else{var k=(0,d.getLanguage)(this.options.mapController.data);alert(k.SEARCH_NOT_FOUND)}if(this.results){for(var b=[],R=0;R<this.results.length;R++)b.push(this.results[R].display_name);this.props.mapController.hideOtherComponents(this),this.setState({results:b,open:!0,currentCoordinate:o,openResults:!0,currentResult:b[0]}),this.props.mapController.setOpenComponent(this)}}}},{key:"flyTo",value:function(e,t,o,n,a,s,r,l,i,p){var c,u=i,f=o,h=2,d=!1,g=this;function y(o){if(--h,!(d||0!==h&&o)){if(d=!0,n&&a&&null!==a[0]&&null!==a[1]&&null!==a[2]&&null!==a[3]){var y=[];y.push(parseFloat(a[2])),y.push(parseFloat(a[0])),y.push(parseFloat(a[3])),y.push(parseFloat(a[1])),c=(0,m.transformExtent)(y,"EPSG:4326","EPSG:3857"),window.setTimeout((function(){p.fit(c,e.getSize(),{minZoom:p.get("minZoom")||2,maxZoom:f||p.get("maxZoom")||18,duration:u/2,easing:C.easeOut})}),u)}g.completeSearch(s,l,"bounce",i,t,r)}}e.getView().animate({center:t,duration:u},y),e.getView().animate({zoom:f-1,duration:u/2},{zoom:f,duration:u/2},y)}},{key:"completeSearch",value:function(e,t,o,n,a,s){if(e){var r,l,i,p;l=new y.Vector;var c=this.config.resultStyle;c&&"0"!==c||(c=[new w.Style({image:new w.Circle({radius:7,snapToPixel:!1,stroke:new w.Stroke({color:"rgba(200, 0, 0, 0.9)",width:2,opacity:.9})})}),new w.Style({image:new w.Circle({radius:20,snapToPixel:!1,stroke:new w.Stroke({color:"rgba(200, 0, 0, 0.9)",width:2,opacity:.9})})}),new w.Style({image:new w.Circle({radius:33,snapToPixel:!1,stroke:new w.Stroke({color:"rgba(200, 0, 0, 0.9)",width:2,opacity:.9})})})]),i=new v.Vector({style:c,source:l,zIndex:99999}),this.props.mapController.map.addLayer(i),r=function(){l.addFeature(new k.Feature(new S.Point(a)))},p=function(e){var t,o,n,a;o=(new Date).getTime(),n=s,t=function(t){var s,r,i,p,c;s=(0,b.getVectorContext)(t),r=t.frameState,c=e.getGeometry().clone(),p=(i=r.time-o)/n,(0,C.linear)(1-p),(0,C.linear)(p);var u=new w.Style;if(s.setStyle(u),s.drawGeometry(c,null),i>n)return l.clear(),void(0,R.unByKey)(a);r.animate=!0},a=i.on("postrender",t)},l.on("addfeature",(function(e){p(e.feature)})),t?window.setTimeout(r,n/2):r()}}},{key:"zoomTo",value:function(e){var t,o,n,a,s=(t=this.props.mapController.map).getView(),r=this.state.currentCoordinate;if(o=this.results[e],n=(0,m.transform)([parseFloat(o.lon),parseFloat(o.lat)],"EPSG:4326","EPSG:3857"),this.config.animate){s.getResolution();var l=s.calculateExtent(t.getSize());if((0,x.containsCoordinate)(l,n))a="zoom";else{if(Math.abs(r[0]-n[0])>Math.abs(r[1]-n[1]))var i=Math.abs(r[0]-n[0]),p=(0,x.getWidth)(l);else i=Math.abs(r[1]-n[1]),p=(0,x.getHeight)(l);i>0&&i/p,a="bounce"}this.flyTo(t,n,this.config.zoomlevel,this.config.zoombounds,o.bounding_box,this.config.markResult,this.config.resultDuration,this.config.animate,this.config.animateDuration,s)}else this.completeSearch(this.config.markResult,this.config.animate,a,this.config.animateDuration,n,this.config.resultDuration),t.getView().setCenter(n),this.config.zoomlevel>=0&&t.getView().setZoom(this.config.zoomlevel)}}]),o}(f.Component);t.default=D}}]);
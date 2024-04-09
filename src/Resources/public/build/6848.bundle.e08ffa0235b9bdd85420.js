/*! For license information please see 6848.bundle.e08ffa0235b9bdd85420.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[6848],{76848:(e,t,o)=>{var n=o(29138),a=o(35578);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(o(35578)),r=n(o(1367)),l=n(o(60163)),i=n(o(55956)),c=n(o(20880)),u=n(o(39959)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var o=x(t);if(o&&o.has(e))return o.get(e);var n={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&{}.hasOwnProperty.call(e,r)){var l=s?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=e[r]}return n.default=e,o&&o.set(e,n),n}(o(42028)),h=o(13161),f=o(23624),d=o(75508),g=o(63331),m=o(82158),C=o(75677),y=o(98344),v=o(51582),k=o(6859),S=o(8007),b=o(41063),w=o(84602),R=o(46363),E=o(9055);function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(x=function(e){return e?o:t})(e)}function O(e,t,o){return t=(0,c.default)(t),(0,i.default)(e,P()?Reflect.construct(t,o||[],(0,c.default)(e).constructor):t.apply(e,o))}function P(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(P=function(){return!!e})()}var T=p.default.lazy((function(){return o.e(717).then(o.bind(o,60717))})),D=p.default.lazy((function(){return Promise.resolve().then(o.bind(o,47702))}));t.default=function(e){function t(e){var o;(0,r.default)(this,t),(o=O(this,t,[e])).langConstants=(0,f.getLanguage)(e.mapController.data),o.clickControl=o.clickControl.bind(o),o.doneFunction=o.doneFunction.bind(o);var n=document.createElement("div"),a=document.createElement("button");if(e.mapController.data.themeData&&e.mapController.data.themeData.controlLabels){var s=document.createElement("span");s.innerText=o.langConstants.CTRL_GEOSEARCH,a.appendChild(s)}else a.setAttribute("aria-label",o.langConstants.CTRL_GEOSEARCH),a.setAttribute("title",o.langConstants.CTRL_GEOSEARCH);if(n.className="c4g-geosearch ol-control ol-unselectable",n.appendChild(a),jQuery(a).on("click",(function(){o.clickControl()})),e.external&&(n.className+=" c4g-external"),e.mapController.data.geosearch.inputCssSelector){var l=document.querySelector(e.mapController.data.geosearch.inputCssSelector);l.setAttribute("id","c4g-geosearch-input"),l.addEventListener("keydown",(function(e){o.inputCallback(e)})),l.addEventListener("input",(function(e){o.deleteCallback(e)})),o.input=l}else{var i=document.createElement("input");i.setAttribute("id","c4g-geosearch-input"),e.collapsed?jQuery(i).addClass("c4g-close"):jQuery(i).addClass("c4g-open"),i.addEventListener("keydown",(function(e){o.inputCallback(e)})),i.addEventListener("input",(function(e){o.deleteCallback(e)})),n.appendChild(i),o.input=i;var c=document.createElement("span");c.addEventListener("click",(function(){o.clickControl(!0)})),jQuery(c).addClass("searchSpan");var u=document.createElement("i");u.innerHTML='<i class="far fa-times-circle"></i>',c.appendChild(u),n.appendChild(c)}o.controlElement=n;var p=new h.Control({element:n,target:e.target}),d=e.mapController.arrComponents.findIndex((function(e){return"geosearch"===e.name}));if(e.mapController.arrComponents[d].control=p,e.mapController.mapsControls.controls.geosearch=p,o.config={},e.mapController.data.geosearch.searchKey&&e.mapController.data.geosearch.url?(o.config.url=e.mapController.data.geosearch.url+"search.php",o.config.key=e.mapController.data.geosearch.searchKey,o.config.params=e.mapController.data.geosearch.params):o.config.url=e.mapController.data.api.geosearch+"/"+e.mapController.data.profile,o.config.zoomlevel=e.searchZoom,o.config.zoombounds=e.zoomBounds,o.config.quicksearch=e.quicksearch||!0,o.config.animate=e.animate,o.config.markResult=e.markResult,o.config.animateDuration=e.animateDuration,o.config.resultDuration=e.resultDuration,o.config.popup=e.popup,o.config.autopick=e.autopick,o.config.mapController=e.mapController,o.config.results=e.results,o.config.resultStyle=e.resultStyle,o.config.resultStyle&&parseInt(o.config.resultStyle,10)>0){var g=o;e.mapController.proxy.locationStyleController.arrLocStyles[o.config.resultStyle]?o.config.resultStyle=e.mapController.proxy.locationStyleController.arrLocStyles[o.config.resultStyle].style:e.mapController.proxy.locationStyleController.loadLocationStyles([o.config.resultStyle],{done:function(){g.config.resultStyle=e.mapController.proxy.locationStyleController.arrLocStyles[g.config.resultStyle].style}})}return o.config.collapsed=e.collapsed,o.config.resultCount=e.resultCount,o.config.caching=e.caching,o.config.placeholder=e.placeholder,o.state={open:!e.collapsed,query:"",results:[],currentCoordinate:[],openResults:!1,currentResult:null},o.inputCallback=o.inputCallback.bind(o),o.deleteCallback=o.deleteCallback.bind(o),o.startSearch=o.startSearch.bind(o),o.zoomTo=o.zoomTo.bind(o),o.closeResults=o.closeResults.bind(o),o.openResults=o.openResults.bind(o),o.close=o.close.bind(o),o.closeResultsCompletely=o.closeResultsCompletely.bind(o),o}return(0,u.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this,t=this.state.open&&this.state.openResults?"c4g-open":"c4g-close";this.props.extDiv&&(t+=" external ");var o="";this.state.openResults&&this.config.results&&(o=p.default.createElement(T,{className:t,results:this.state.results,extDiv:this.props.extResultsDiv,zoomFunc:function(t){e.setState({currentResult:e.state.results[t]}),e.zoomTo(t)},closeResults:this.closeResults,headline:this.props.resultsHeadline,currentResult:this.state.currentResult,resultsDiv:this.props.resultsDiv,open:this.state.results.length>0,openResults:this.openResults,closeCb:this.closeResultsCompletely}));var n="",a="";this.props.external||(n="c4g-titlebar-close",a=this.clickControl);var s=this.props.headline;s||(s=this.langConstants.GEOSEARCH);var r=null;return this.props.external&&(r=p.default.createElement("div",{className:"c4g-geosearch-filter"},p.default.createElement("input",{type:"text",onInput:this.deleteCallback,onKeyDown:this.inputCallback,id:"c4g-geosearch-input",placeholder:this.config.placeholder,"aria-label":this.config.placeholder}),p.default.createElement("button",{className:d.cssConstants.GEOSEARCH_START,type:"button",title:this.langConstants.CTRL_START_SEARCH,onMouseUp:this.startSearch}))),this.props.external||this.state.open&&this.state.openResults?p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:d.cssConstants.GEOSEARCH_WRAPPER+" "+t+" c4g-horizon"},p.default.createElement(p.Suspense,{fallback:p.default.createElement("div",null,"Loading...")},p.default.createElement(D,{wrapperClass:"c4g-geosearch-header",header:s,headerClass:"c4g-geosearch-headline",detailBtnClass:"",detailBtnCb:"",closeBtnClass:n,closeBtnCb:a,closeBtnTitle:this.langConstants.CLOSE})),r,o)):null}},{key:"closeResultsCompletely",value:function(){this.setState({openResults:!1})}},{key:"componentDidUpdate",value:function(e,t,o){if(this.props.mapController&&this.props.mapController.data&&this.props.mapController.data.geosearch&&this.props.mapController.data.geosearch.results&&(this.state.open?(t.open!==this.state.open&&this.state.results&&this.state.results.length&&this.props.mapController.setOpenComponent(this),this.state.openResults&&!this.props.extResultsDiv&&jQuery(".c4g-geosearch-container-right").addClass("c4g-open").removeClass("c4g-close")):jQuery(".c4g-geosearch-container-right").addClass("c4g-close").removeClass("c4g-open"),this.props.mapController.data.caching)){var n=R.utils.getValue("panel");"GeoSearch"!==n||this.state.open?"GeoSearch"!==n&&this.state.open&&R.utils.storeValue("panel","GeoSearch"):R.utils.storeValue("panel","")}}},{key:"close",value:function(){this.setState({open:!1})}},{key:"startSearch",value:function(e){e.stopPropagation();var t=document.querySelector(d.cssConstants.GEOSEARCH_START);try{t.blur()}catch(e){}var o=jQuery("#c4g-geosearch-input");o.val()&&this.findLocation(o.val())}},{key:"inputCallback",value:function(e){if(e.stopPropagation(),13===e.which){var t=jQuery("#c4g-geosearch-input");return t.val()&&this.findLocation(t.val()),!1}}},{key:"deleteCallback",value:function(e){e.stopPropagation();var t=jQuery("#c4g-geosearch-input").val();if(this.lastVal!==t&&(this.lastVal=t,t.length<1)){var o=this.props.mapController.arrComponents.findIndex((function(e){return"layerswitcher"===e.name}));if(o&&this.props.mapController.arrComponents[o])this.props.mapController.arrComponents[o].component.applyOldState("searchResults")}}},{key:"clickControl",value:function(e){(void 0!==e?e:this.state.open)?(this.setState({open:!1}),this.props.external||jQuery(this.input).addClass("c4g-close").removeClass("c4g-open")):(this.setState({open:!0}),this.props.external||(jQuery(this.input).removeClass("c4g-close").addClass("c4g-open"),this.input.focus()))}},{key:"closeResults",value:function(){this.setState({detailOpenResults:!1})}},{key:"openResults",value:function(){this.setState({detailOpenResults:!0})}},{key:"findLocation",value:function(e,t){var o,n=this;if((o=this.props.mapController).map,o.spinner.show(),this.config.animate,this.config.animateDuration,this.config.markResult,"object"===(0,s.default)(t)&&(void 0!==t.animate&&t.animate,void 0!==t.markResult&&t.markResult),this.config.quicksearch){var a={format:"json",q:e};if(this.config.resultCount&&(a.limit=this.config.resultCount),this.config.key&&(a.key=this.config.key),this.config.params)for(var r in this.config.params)this.config.params.hasOwnProperty(r)&&(a[r]=this.config.params[r]);var l=R.utils.callHookFunctions(window.c4gMapsHooks.hook_search,[a,this]);if(l&&l.length>0)for(var i in this.config.mapController.spinner.hide(),l)l.hasOwnProperty(i)&&this.doneFunction(l[i]);else{jQuery.ajax({dataType:"json",url:this.config.url,data:a}).done(this.doneFunction).fail((function(){})).always((function(){n.config.mapController.spinner.hide()}));var c=o.arrComponents.findIndex((function(e){return"layerswitcher"===e.name}));if(c&&o.arrComponents[c]){var u=o.arrComponents[c].component;u.buttonEnabled&&u.toggleAllLayers("searchResults")}}}}},{key:"doneFunction",value:function(e){var t,o,n,a,s=this.props.mapController,r=s.map,l=this.config.animate,i=(this.config.animateDuration,this.config.markResult);if(e&&e.length&&e.length>0){if(t=r.getView(),e[0])if(a=e[0],this.results=e,a.hasOwnProperty("uuid")){var c=s.arrComponents.findIndex((function(e){return"layerswitcher"===e.name})),u=!1;c&&s.arrComponents[c]&&(u=s.arrComponents[c].component);var p=[],h=[];for(var d in this.results)this.results.hasOwnProperty(d)&&(this.results[d].hasOwnProperty("uuid")&&p.push(this.results[d].uuid),this.results[d].hasOwnProperty("lon")&&this.results[d].hasOwnProperty("lat")&&h.push((0,g.transform)([parseFloat(this.results[d].lon),parseFloat(this.results[d].lat)],"EPSG:4326","EPSG:3857")));u&&u.toggleSpecificLayers(p);var m=r.getSize(),C=(0,E.boundingExtent)(h),y={duration:250,padding:[m[1]/10,m[0]/10,m[1]/10,m[0]/10]};r.getView().fit(C,y)}else o=t.getCenter(),n=(0,g.transform)([parseFloat(a.lon),parseFloat(a.lat)],"EPSG:4326","EPSG:3857"),l?this.flyTo(r,n,this.config.zoomlevel,this.config.zoombounds,a.bounding_box,i,this.config.resultDuration,l,this.config.animateDuration,r.getView()):(this.completeSearch(this.config.markResult,this.config.animate,undefined,this.config.animateDuration,n,this.config.resultDuration),t.setCenter(n),this.config.zoomlevel>=0&&r.getView().setZoom(this.config.zoomlevel)),this.config.autopick&&this.config.mapController.geopicker&&"function"==typeof this.config.mapController.geopicker.pick&&this.config.mapController.geopicker.pick(n);else{var v=(0,f.getLanguage)(this.options.mapController.data);alert(v.SEARCH_NOT_FOUND)}this.results&&(this.props.mapController.hideOtherComponents(this),this.setState({results:this.results,open:!0,currentCoordinate:o,openResults:!0,currentResult:e[0]}),this.props.mapController.setOpenComponent(this))}}},{key:"flyTo",value:function(e,t,o,n,a,s,r,l,i,c){var u,p=i,h=o,f=2,d=!1,C=this;function y(o){if(--f,!(d||0!==f&&o)){if(d=!0,n&&a&&null!==a[0]&&null!==a[1]&&null!==a[2]&&null!==a[3]){var y=[];y.push(parseFloat(a[2])),y.push(parseFloat(a[0])),y.push(parseFloat(a[3])),y.push(parseFloat(a[1])),u=(0,g.transformExtent)(y,"EPSG:4326","EPSG:3857"),window.setTimeout((function(){c.fit(u,e.getSize(),{minZoom:c.get("minZoom")||2,maxZoom:h||c.get("maxZoom")||18,duration:p/2,easing:m.easeOut})}),p)}C.completeSearch(s,l,"bounce",i,t,r)}}e.getView().animate({center:t,duration:p},y),e.getView().animate({zoom:h-1,duration:p/2},{zoom:h,duration:p/2},y)}},{key:"completeSearch",value:function(e,t,o,n,a,s){var r=this;if(e){var l,i,c,u;i=new C.Vector;var p=this.config.resultStyle;p&&"0"!==p||(p=[new v.Style({image:new v.Circle({radius:7,snapToPixel:!1,stroke:new v.Stroke({color:"rgba(200, 0, 0, 0.9)",width:2,opacity:.9})})}),new v.Style({image:new v.Circle({radius:20,snapToPixel:!1,stroke:new v.Stroke({color:"rgba(200, 0, 0, 0.9)",width:2,opacity:.9})})}),new v.Style({image:new v.Circle({radius:33,snapToPixel:!1,stroke:new v.Stroke({color:"rgba(200, 0, 0, 0.9)",width:2,opacity:.9})})})]),c=new y.Vector({style:p,source:i,zIndex:99999}),this.props.mapController.map.addLayer(c),l=function(){i.addFeature(new k.Feature(new S.Point(a)))},u=function(e){var t,o,n,a;o=(new Date).getTime(),n=s,t=function(t){var s,r,l,c,u;s=(0,b.getVectorContext)(t),r=t.frameState,u=e.getGeometry().clone(),c=(l=r.time-o)/n,(0,m.linear)(1-c),(0,m.linear)(c);var p=new v.Style;if(s.setStyle(p),s.drawGeometry(u,null),l>n)return i.clear(),void(0,w.unByKey)(a);r.animate=!0},a=c.on("postrender",t)},i.on("addfeature",(function(e){u(e.feature)})),t?window.setTimeout(l,n/2):l()}if(this.config.popup){var h=this.props.mapController.map.getPixelFromCoordinate(a);window.setTimeout((function(){r.props.mapController.map.dispatchEvent({type:"click",pixel:h},100)}))}}},{key:"zoomTo",value:function(e){var t,o,n,a,s=(t=this.props.mapController.map).getView(),r=this.state.currentCoordinate;if(o=this.results[e],n=(0,g.transform)([parseFloat(o.lon),parseFloat(o.lat)],"EPSG:4326","EPSG:3857"),this.config.animate){s.getResolution();var l=s.calculateExtent(t.getSize());if((0,E.containsCoordinate)(l,n))a="zoom";else{if(Math.abs(r[0]-n[0])>Math.abs(r[1]-n[1]))var i=Math.abs(r[0]-n[0]),c=(0,E.getWidth)(l);else i=Math.abs(r[1]-n[1]),c=(0,E.getHeight)(l);i>0&&i/c,a="bounce"}this.flyTo(t,n,this.config.zoomlevel,this.config.zoombounds,o.bounding_box,this.config.markResult,this.config.resultDuration,this.config.animate,this.config.animateDuration,s)}else this.completeSearch(this.config.markResult,this.config.animate,a,this.config.animateDuration,n,this.config.resultDuration),t.getView().setCenter(n),this.config.zoomlevel>=0&&t.getView().setZoom(this.config.zoomlevel)}}])}(p.Component)}}]);
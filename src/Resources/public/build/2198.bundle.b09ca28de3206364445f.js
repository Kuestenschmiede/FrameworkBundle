/*! For license information please see 2198.bundle.b09ca28de3206364445f.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[2198],{7034:(e,t,r)=>{var a=r(29138),o=r(35578);Object.defineProperty(t,"__esModule",{value:!0}),t.MeasuretoolsView=void 0;var s=a(r(1367)),n=a(r(60163)),u=a(r(55956)),l=a(r(20880)),i=a(r(39959)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var r=g(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&{}.hasOwnProperty.call(e,n)){var u=s?Object.getOwnPropertyDescriptor(e,n):null;u&&(u.get||u.set)?Object.defineProperty(a,n,u):a[n]=e[n]}return a.default=e,r&&r.set(e,a),a}(r(42028)),d=r(23624),p=r(6859),m=r(83570),f=r(46363),h=r(65030),v=r(59159);function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(g=function(e){return e?r:t})(e)}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}t.MeasuretoolsView=function(e){function t(e){var r,a,o,n;(0,s.default)(this,t),a=this,o=t,n=[e],o=(0,l.default)(o),r=(0,u.default)(a,y()?Reflect.construct(o,n||[],(0,l.default)(a).constructor):o.apply(a,n));var i=(0,d.getLanguage)(r.props.mapController.data);return r.headlines={select:i.MEASURETOOLS_VIEW_TRIGGER_SELECT,line:i.MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING,polygon:i.MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON,circle:i.MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE,freehand:i.MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND},r.featureIdCtr=r.props.featureId,r.updateFunctions=r.createMeasureFunctions(),r.modifyFeature=r.modifyFeature.bind(r),r}return(0,i.default)(t,e),(0,n.default)(t,[{key:"render",value:function(){var e=this;return this.props.active?"select"===this.props.mode?c.default.createElement("div",{className:"c4g-measuretools-content"},c.default.createElement("p",null,this.props.lang.MEASURETOOLS_INFO),c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement("sub",null,this.props.lang.MEASURETOOLS_INFO_ADDITIONAL)):c.default.createElement("div",{className:"c4g-measuretools-content"},c.default.createElement("div",{className:"contentHeadline"},this.headlines[this.props.mode]),c.default.createElement("div",null,Object.keys(this.props.features).map((function(t,r){var a=e.props.features[t];return c.default.createElement(v.MeasuredFeature,{key:r,idx:r,label:a.label,feature:a,measuredValues:a.measuredValues,modifyFeature:e.modifyFeature})})))):null}},{key:"modifyFeature",value:function(e,t){for(var r=this.props.features,a=0;a<r.length;a++)if(r[a].id===t){r[a].olFeature.set("featureLabel",e.label),this.updateMeasureFeature(r[a].olFeature);break}this.props.modifyFeature(e,t)}},{key:"componentDidMount",value:function(){"select"!==this.props.mode&&this.updateFunctions.initFunction()}},{key:"componentDidUpdate",value:function(e,t,r){"select"!==this.props.mode&&(!e.active&&this.props.active&&this.updateFunctions.activateFunction(),e.active&&!this.props.active&&this.updateFunctions.deactivateFunction(),this.props.mapController.mapHover.deactivate()),"select"!==this.props.mode&&this.props.measureTools.state.open||this.props.mapController.mapHover.activate(),this.featureIdCtr=this.props.featureId}},{key:"createMeasureFunctions",value:function(){var e,t,r,a,o=this;return{initFunction:function(){var s,n,u,l,i,c,d,v;if(s=o.featureIdCtr,e="freehand"===o.props.mode.toLowerCase()?o.props.measureTools.measureFreehandLayer.getSource():"circle"===o.props.mode.toLowerCase()?o.props.measureTools.measureCircleLayer.getSource():"polygon"===o.props.mode.toLowerCase()?o.props.measureTools.measurePolygonLayer.getSource():o.props.measureTools.measureLineLayer.getSource(),t=new p.Collection,"select"!==o.props.mode.toLowerCase()){switch(o.props.mode){case"line":case"freehand":r="LineString";break;case"polygon":r="Polygon";break;case"circle":r="Circle"}return a=new m.Draw({features:t,source:e,type:r,freehand:"freehand"===o.props.mode}),l=function(e){var t,r,a,n;if(!e)return!1;"LineString"===e.getGeometry().getType()?(o.props.lang.LENGTH,t=o.props.lang.LINE,r=!1,a=!1,n=!0):"Polygon"===e.getGeometry().getType()?(o.props.lang.PERIMETER,t=o.props.lang.POLYGON,r=!0,a=!1,n=!1):"Circle"===e.getGeometry().getType()?(o.props.lang.RADIUS,t=o.props.lang.CIRCLE,r=!0,a=!0,n=!1):(o.props.lang.LENGTH,t=o.props.lang.FREEHAND,r=!1,a=!1,n=!0),s=o.featureIdCtr,e.set("featureId",s);var u={};u.id=s,u.label=t+" "+s,e.set("featureLabel",u.label),u.measuredValues={},n&&(u.measuredValues.line={description:"Länge: ",value:0}),a&&(u.measuredValues.radius={description:"Radius: ",value:0}),r&&(u.measuredValues.area={description:"Flächeninhalt: ",value:0}),u.olFeature=e,o.props.addFeature(u),o.props.incrFeatId()},i=function(e){var t,r,a,s,n;t=e.get("tooltip"),r=e.get("featureLabel"),a=f.utils.measureGeometry(e.getGeometry(),!0),e.set("measuredLength",a.rawValue),t.setContent("<strong>"+r+"</strong><br>"+a.htmlValue);var u=e.get("featureId"),l={};l.label=r,l.id=u,l.measuredValues={},l.olFeature=e,a&&"circle"!==e.get("geometryType")&&"polygon"!==e.get("geometryType")&&(l.measuredValues.line={},l.measuredValues.line.description="Länge: ",l.measuredValues.line.value=a.rawValue),"circle"===e.get("geometryType")&&(n=f.utils.measureGeometry(e.getGeometry()),l.measuredValues.radius={description:"Radius: ",value:0},l.measuredValues.radius.value=n.rawValue,t.setContent("<strong>"+r+"</strong><br>"+l.measuredValues.radius.description+n.htmlValue)),"polygon"!==e.get("geometryType")&&"circle"!==e.get("geometryType")||(s=f.utils.measureGeometry(e.getGeometry(),!1,!0),l.measuredValues.area={description:"Flächeninhalt: ",value:0},l.measuredValues.area.value=s.rawValue,t.setContent("<strong>"+r+"</strong><br>"+l.measuredValues.area.description+s.htmlValue)),e.set("tooltip",t),o.props.modifyFeature(l,l.id)},o.updateMeasureFeature=i,v=function(e){o.props.removeFeature(e.get("featureId"))},c=function(e){var t=f.utils.measureGeometry(e.getGeometry(),!0).htmlValue.match(/\d/g);return t=t.join("")},d=function(){var e="0.00 m".match(/\d/g);return e=e.join(""),e=8},a.on("drawstart",(function(t){n=t.feature,u=new h.TooltipPopUp({map:o.props.mapController.map,position:t.coordinate,offset:[2,-2],horizontal:!0,closeable:!0,closeFunction:function(){var r=c(t.feature),a=d();r!==a&&r>a?(v(t.feature),e.hasFeature(t.feature)&&e.removeFeature(t.feature)):v(t.feature)}}),n.set("tooltip",u),n.set("geometryType",o.props.mode.toLowerCase()),l(n)}),o),o.props.mapController.map.on("pointermove",(function(e){n&&u&&(u.setPosition(e.coordinate),i(n))}),o),a.on("drawend",(function(e){n&&u&&(i(n),n=null,u=null)}),o),!0}},activateFunction:function(){t.clear(),o.props.mapController.map.addInteraction(a)},deactivateFunction:function(){if("point"!==o.props.mode.toLowerCase())try{a.finishDrawing()}catch(e){}o.props.mapController.map.removeInteraction(a)}}}}])}(c.Component)},22198:(e,t,r)=>{var a=r(29138),o=r(35578);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(r(1367)),n=a(r(60163)),u=a(r(55956)),l=a(r(20880)),i=a(r(39959)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&{}.hasOwnProperty.call(e,n)){var u=s?Object.getOwnPropertyDescriptor(e,n):null;u&&(u.get||u.set)?Object.defineProperty(a,n,u):a[n]=e[n]}return a.default=e,r&&r.set(e,a),a}(r(42028)),d=r(23624),p=r(13161),m=r(7034),f=r(42510),h=r(12556),v=r(6859),g=r(46363);function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}function F(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(F=function(){return!!e})()}var C=c.default.lazy((function(){return Promise.resolve().then(r.bind(r,47702))}));t.default=function(e){function t(e){var r,a,o,n;(0,s.default)(this,t),a=this,o=t,n=[e],o=(0,l.default)(o);var i=r=(0,u.default)(a,F()?Reflect.construct(o,n||[],(0,l.default)(a).constructor):o.apply(a,n)),c=document.createElement("div"),m=document.createElement("button");if(r.langConstants=(0,d.getLanguage)(e.mapController.data),e.mapController.data.themeData&&e.mapController.data.themeData.controlLabels){var f=document.createElement("span");f.innerText=r.langConstants.CTRL_MEASURETOOLS,m.appendChild(f)}else m.title=r.langConstants.CTRL_MEASURETOOLS;c.className="c4g-measuretools-control ol-unselectable ol-control ",e.open?c.className+="c4g-open":c.className+="c4g-close",e.external&&(c.className+=" c4g-external"),c.appendChild(m),jQuery(c).on("click",(function(e){var t=i.props.mapController.measuretoolsContainer.className.includes("c4g-close");i.state.open?t?jQuery(i.props.mapController.measuretoolsContainer).removeClass("c4g-close").addClass("c4g-open"):i.close():i.open()}));var h=e.mapController,v=new p.Control({element:c,target:e.target}),g=h.arrComponents.findIndex((function(e){return"measuretools"===e.name}));return h.arrComponents[g].control=v,h.mapsControls.controls.measuretools=v,r.close=r.close.bind(r),r.open=r.open.bind(r),r.addMeasuredFeature=r.addMeasuredFeature.bind(r),r.modifyMeasuredFeature=r.modifyMeasuredFeature.bind(r),r.removeMeasuredFeature=r.removeMeasuredFeature.bind(r),r.incrementFeatureId=r.incrementFeatureId.bind(r),r.modes=["select","line","polygon","circle","freehand"],r.state={open:e.open||!1,currentMode:"select",control:v,measuredFeatures:[],featureIdCtr:0},r.init(),r}return(0,i.default)(t,e),(0,n.default)(t,[{key:"render",value:function(){var e=this,t={select:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_SELECT,line:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING,polygon:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON,circle:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE,freehand:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND};return c.default.createElement("div",{className:"c4g-measuretools-wrapper"},c.default.createElement(c.Suspense,{fallback:c.default.createElement("div",null,"Loading...")},c.default.createElement(C,{wrapperClass:"c4g-measuretools-header",headerClass:"c4g-measuretools-headline",hideContainer:".c4g-measuretools-container",header:this.langConstants.MEASURETOOLS,closeBtnClass:"c4g-titlebar-close",closeBtnCb:this.close,closeBtnTitle:this.langConstants.CLOSE})),c.default.createElement("div",{className:"c4g-measuretools-mode-switcher"},this.modes.map((function(r,a){return c.default.createElement("button",{key:a,className:"c4g-measure-"+r+" "+(r===e.state.currentMode?"c4g-active":"c4g-inactive"),onMouseUp:function(){return e.setState({currentMode:r})},title:t[r]})}))),c.default.createElement(m.MeasuretoolsView,{mode:"select",measureTools:this,active:"select"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}),c.default.createElement(m.MeasuretoolsView,{mode:"line",measureTools:this,active:"line"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}),c.default.createElement(m.MeasuretoolsView,{mode:"polygon",measureTools:this,active:"polygon"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}),c.default.createElement(m.MeasuretoolsView,{mode:"circle",measureTools:this,active:"circle"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}),c.default.createElement(m.MeasuretoolsView,{mode:"freehand",measureTools:this,active:"freehand"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}))}},{key:"incrementFeatureId",value:function(){this.setState({featureIdCtr:this.state.featureIdCtr+1})}},{key:"addMeasuredFeature",value:function(e){var t=this.state.measuredFeatures;t.push(e),this.setState({measuredFeatures:t})}},{key:"modifyMeasuredFeature",value:function(e,t){for(var r=this.state.measuredFeatures,a=0;a<r.length;a++)r[a].id===t&&(r[a]=e);this.setState({measuredFeatures:r})}},{key:"removeMeasuredFeature",value:function(e){for(var t=this.state.measuredFeatures,r=0;r<t.length;r++)if(t[r].id===e){t.splice(r,1);break}this.setState({measuredFeatures:t})}},{key:"setCurrentMode",value:function(e){this.modes.includes(e)?this.setState({currentMode:e}):console.warn("The specified mode is not available")}},{key:"open",value:function(){this.setState({open:!0}),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){this.setState({open:!1})}},{key:"init",value:function(){return this.measureLineLayer=new f.Vector({source:new h.Vector}),this.measurePolygonLayer=new f.Vector({source:new h.Vector}),this.measureCircleLayer=new f.Vector({source:new h.Vector}),this.measureFreehandLayer=new f.Vector({source:new h.Vector}),this.measureLayerGroup=new f.Group({layers:new v.Collection([this.measureFreehandLayer,this.measureCircleLayer,this.measurePolygonLayer,this.measureLineLayer]),visible:!0}),this.props.mapController.map.addLayer(this.measureLayerGroup),!0}},{key:"componentDidUpdate",value:function(e,t,r){if(t.open&&!this.state.open)jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close"),jQuery(".c4g-measuretools-container").removeClass("c4g-open").addClass("c4g-close"),this.props.mapController.map.removeLayer(this.measureLayerGroup),this.removeTooltips(),this.removedOnce=!0;else if(!t.open&&this.state.open){if(jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close"),jQuery(".c4g-measuretools-container").addClass("c4g-open").removeClass("c4g-close"),this.removedOnce)try{this.props.mapController.map.addLayer(this.measureLayerGroup)}catch(e){console.warn(e)}this.addTooltips()}if(this.props.mapController.data.caching){var a=g.utils.getValue("panel");"Measuretools"!==a||this.state.open?"Measuretools"!==a&&this.state.open&&g.utils.storeValue("panel","Measuretools"):g.utils.storeValue("panel","")}}},{key:"removeTooltips",value:function(){for(var e=this.measureLayerGroup.getLayersArray(),t=0;t<e.length;t++){var r=e[t].getSource().getFeatures();if(r)for(var a=0;a<r.length;a++){r[a].get("tooltip").hide()}}}},{key:"addTooltips",value:function(){for(var e=this.measureLayerGroup.getLayersArray(),t=0;t<e.length;t++){var r=e[t].getSource().getFeatures();if(r)for(var a=0;a<r.length;a++){r[a].get("tooltip").show()}}}}])}(c.Component)},59159:(e,t,r)=>{var a=r(29138),o=r(35578);Object.defineProperty(t,"__esModule",{value:!0}),t.MeasuredFeature=void 0;var s=a(r(1367)),n=a(r(60163)),u=a(r(55956)),l=a(r(20880)),i=a(r(39959)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&{}.hasOwnProperty.call(e,n)){var u=s?Object.getOwnPropertyDescriptor(e,n):null;u&&(u.get||u.set)?Object.defineProperty(a,n,u):a[n]=e[n]}return a.default=e,r&&r.set(e,a),a}(r(42028));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}t.MeasuredFeature=function(e){function t(e){var r,a,o,n;return(0,s.default)(this,t),a=this,o=t,n=[e],o=(0,l.default)(o),(r=(0,u.default)(a,p()?Reflect.construct(o,n||[],(0,l.default)(a).constructor):o.apply(a,n))).changeFeatureLabel=r.changeFeatureLabel.bind(r),r}return(0,i.default)(t,e),(0,n.default)(t,[{key:"render",value:function(){var e=this;return c.default.createElement("div",null,c.default.createElement("div",null,c.default.createElement("label",{htmlFor:"measureElement_"+this.props.idx},"Name: "),c.default.createElement("input",{type:"text",name:"measureElement_"+this.props.idx,defaultValue:this.props.label,onInput:this.changeFeatureLabel})),Object.keys(this.props.measuredValues).map((function(t,r){var a=e.props.measuredValues[t],o=0;switch(t){case"line":case"radius":o=e.convertMetersToKm(a.value);break;case"area":o=e.convertSquareMetersToSquareKm(a.value)}return c.default.createElement("p",{key:r},c.default.createElement("strong",null,a.description),c.default.createElement("span",{className:"c4g-measure-value-"+e.props.idx},o))})))}},{key:"changeFeatureLabel",value:function(){var e=this.props.feature;e.label=document.querySelector('input[name="measureElement_'+this.props.idx+'"]').value,this.props.modifyFeature(e,e.id)}},{key:"convertMetersToKm",value:function(e){var t=e/1e3;return t>0?t+" km":e+" m"}},{key:"convertSquareMetersToSquareKm",value:function(e){var t=e/1e6;return t>0?t+" km²":e+" m²"}}])}(c.Component)}}]);
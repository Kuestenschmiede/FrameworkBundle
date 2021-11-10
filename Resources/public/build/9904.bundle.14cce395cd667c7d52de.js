"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[9904],{9840:(e,t,r)=>{var a=r(46147),o=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.MeasuredFeature=void 0;var s=a(r(28110)),n=a(r(20963)),u=a(r(23673)),l=a(r(23422)),i=a(r(60560)),c=a(r(42315)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var u=s?Object.getOwnPropertyDescriptor(e,n):null;u&&(u.get||u.set)?Object.defineProperty(a,n,u):a[n]=e[n]}a.default=e,r&&r.set(e,a);return a}(r(3044));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return(0,i.default)(this,r)}}var m=function(e){(0,l.default)(r,e);var t=f(r);function r(e){var a;return(0,s.default)(this,r),(a=t.call(this,e)).changeFeatureLabel=a.changeFeatureLabel.bind((0,u.default)(a)),a}return(0,n.default)(r,[{key:"render",value:function(){var e=this;return d.default.createElement("div",null,d.default.createElement("div",null,d.default.createElement("label",{htmlFor:"measureElement_"+this.props.idx},"Name: "),d.default.createElement("input",{type:"text",name:"measureElement_"+this.props.idx,defaultValue:this.props.label,onInput:this.changeFeatureLabel})),Object.keys(this.props.measuredValues).map((function(t,r){var a=e.props.measuredValues[t],o=0;switch(t){case"line":case"radius":o=e.convertMetersToKm(a.value);break;case"area":o=e.convertSquareMetersToSquareKm(a.value)}return d.default.createElement("p",{key:r},d.default.createElement("strong",null,a.description),d.default.createElement("span",{className:"c4g-measure-value-"+e.props.idx},o))})))}},{key:"changeFeatureLabel",value:function(){var e=this.props.feature;e.label=document.querySelector('input[name="measureElement_'+this.props.idx+'"]').value,this.props.modifyFeature(e,e.id)}},{key:"convertMetersToKm",value:function(e){var t=e/1e3;return t>0?t+" km":e+" m"}},{key:"convertSquareMetersToSquareKm",value:function(e){var t=e/1e6;return t>0?t+" km²":e+" m²"}}]),r}(d.Component);t.MeasuredFeature=m},12716:(e,t,r)=>{var a=r(46147),o=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.MeasuretoolsView=void 0;var s=a(r(28110)),n=a(r(20963)),u=a(r(23673)),l=a(r(23422)),i=a(r(60560)),c=a(r(42315)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=g(t);if(r&&r.has(e))return r.get(e);var a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var u=s?Object.getOwnPropertyDescriptor(e,n):null;u&&(u.get||u.set)?Object.defineProperty(a,n,u):a[n]=e[n]}a.default=e,r&&r.set(e,a);return a}(r(3044)),p=r(94344),f=r(93969),m=r(23601),h=r(53500),v=r(18783),y=r(9840);function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(g=function(e){return e?r:t})(e)}function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return(0,i.default)(this,r)}}var C=function(e){(0,l.default)(r,e);var t=F(r);function r(e){var a;(0,s.default)(this,r),a=t.call(this,e);var o=(0,p.getLanguage)(a.props.mapController.data);return a.headlines={select:o.MEASURETOOLS_VIEW_TRIGGER_SELECT,line:o.MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING,polygon:o.MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON,circle:o.MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE,freehand:o.MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND},a.featureIdCtr=a.props.featureId,a.updateFunctions=a.createMeasureFunctions(),a.modifyFeature=a.modifyFeature.bind((0,u.default)(a)),a}return(0,n.default)(r,[{key:"render",value:function(){var e=this;return this.props.active?"select"===this.props.mode?d.default.createElement("div",{className:"c4g-measuretools-content"},d.default.createElement("p",null,this.props.lang.MEASURETOOLS_INFO),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("sub",null,this.props.lang.MEASURETOOLS_INFO_ADDITIONAL)):d.default.createElement("div",{className:"c4g-measuretools-content"},d.default.createElement("div",{className:"contentHeadline"},this.headlines[this.props.mode]),d.default.createElement("div",null,Object.keys(this.props.features).map((function(t,r){var a=e.props.features[t];return d.default.createElement(y.MeasuredFeature,{key:r,idx:r,label:a.label,feature:a,measuredValues:a.measuredValues,modifyFeature:e.modifyFeature})})))):null}},{key:"modifyFeature",value:function(e,t){for(var r=this.props.features,a=0;a<r.length;a++)if(r[a].id===t){r[a].olFeature.set("featureLabel",e.label),this.updateMeasureFeature(r[a].olFeature);break}this.props.modifyFeature(e,t)}},{key:"componentDidMount",value:function(){"select"!==this.props.mode&&this.updateFunctions.initFunction()}},{key:"componentDidUpdate",value:function(e,t,r){"select"!==this.props.mode&&(!e.active&&this.props.active&&this.updateFunctions.activateFunction(),e.active&&!this.props.active&&this.updateFunctions.deactivateFunction(),this.props.mapController.mapHover.deactivate()),"select"!==this.props.mode&&this.props.measureTools.state.open||this.props.mapController.mapHover.activate(),this.featureIdCtr=this.props.featureId}},{key:"createMeasureFunctions",value:function(){var e,t,r,a,o=this;return{initFunction:function(){var s,n,u,l,i,c,d,p;if(s=o.featureIdCtr,e="freehand"===o.props.mode.toLowerCase()?o.props.measureTools.measureFreehandLayer.getSource():"circle"===o.props.mode.toLowerCase()?o.props.measureTools.measureCircleLayer.getSource():"polygon"===o.props.mode.toLowerCase()?o.props.measureTools.measurePolygonLayer.getSource():o.props.measureTools.measureLineLayer.getSource(),t=new f.Collection,"select"!==o.props.mode.toLowerCase()){switch(o.props.mode){case"line":case"freehand":r="LineString";break;case"polygon":r="Polygon";break;case"circle":r="Circle"}return a=new m.Draw({features:t,source:e,type:r,freehand:"freehand"===o.props.mode}),l=function(e){var t,r,a,n;if(!e)return!1;"LineString"===e.getGeometry().getType()?(o.props.lang.LENGTH,t=o.props.lang.LINE,r=!1,a=!1,n=!0):"Polygon"===e.getGeometry().getType()?(o.props.lang.PERIMETER,t=o.props.lang.POLYGON,r=!0,a=!1,n=!1):"Circle"===e.getGeometry().getType()?(o.props.lang.RADIUS,t=o.props.lang.CIRCLE,r=!0,a=!0,n=!1):(o.props.lang.LENGTH,t=o.props.lang.FREEHAND,r=!1,a=!1,n=!0),s=o.featureIdCtr,e.set("featureId",s);var u={};u.id=s,u.label=t+" "+s,e.set("featureLabel",u.label),u.measuredValues={},n&&(u.measuredValues.line={description:"Länge: ",value:0}),a&&(u.measuredValues.radius={description:"Radius: ",value:0}),r&&(u.measuredValues.area={description:"Flächeninhalt: ",value:0}),u.olFeature=e,o.props.addFeature(u),o.props.incrFeatId()},i=function(e){var t,r,a,s,n;t=e.get("tooltip"),r=e.get("featureLabel"),a=h.utils.measureGeometry(e.getGeometry(),!0),e.set("measuredLength",a.rawValue),t.setContent("<strong>"+r+"</strong><br>"+a.htmlValue);var u=e.get("featureId"),l={};l.label=r,l.id=u,l.measuredValues={},l.olFeature=e,a&&"circle"!==e.get("geometryType")&&"polygon"!==e.get("geometryType")&&(l.measuredValues.line={},l.measuredValues.line.description="Länge: ",l.measuredValues.line.value=a.rawValue),"circle"===e.get("geometryType")&&(n=h.utils.measureGeometry(e.getGeometry()),l.measuredValues.radius={description:"Radius: ",value:0},l.measuredValues.radius.value=n.rawValue,t.setContent("<strong>"+r+"</strong><br>"+l.measuredValues.radius.description+n.htmlValue)),"polygon"!==e.get("geometryType")&&"circle"!==e.get("geometryType")||(s=h.utils.measureGeometry(e.getGeometry(),!1,!0),l.measuredValues.area={description:"Flächeninhalt: ",value:0},l.measuredValues.area.value=s.rawValue,t.setContent("<strong>"+r+"</strong><br>"+l.measuredValues.area.description+s.htmlValue)),e.set("tooltip",t),o.props.modifyFeature(l,l.id)},o.updateMeasureFeature=i,p=function(e){o.props.removeFeature(e.get("featureId"))},c=function(e){var t=h.utils.measureGeometry(e.getGeometry(),!0).htmlValue.match(/\d/g);return t=t.join("")},d=function(){var e="0.00 m".match(/\d/g);return e=e.join(""),e=8},a.on("drawstart",(function(t){n=t.feature,u=new v.TooltipPopUp({map:o.props.mapController.map,position:t.coordinate,offset:[2,-2],horizontal:!0,closeable:!0,closeFunction:function(){var r=c(t.feature),a=d();r!==a&&r>a?(p(t.feature),e.hasFeature(t.feature)&&e.removeFeature(t.feature)):p(t.feature)}}),n.set("tooltip",u),n.set("geometryType",o.props.mode.toLowerCase()),l(n)}),o),o.props.mapController.map.on("pointermove",(function(e){n&&u&&(u.setPosition(e.coordinate),i(n))}),o),a.on("drawend",(function(e){n&&u&&(i(n),n=null,u=null)}),o),!0}},activateFunction:function(){t.clear(),o.props.mapController.map.addInteraction(a)},deactivateFunction:function(){if("point"!==o.props.mode.toLowerCase())try{a.finishDrawing()}catch(e){}o.props.mapController.map.removeInteraction(a)}}}}]),r}(d.Component);t.MeasuretoolsView=C},9904:(e,t,r)=>{var a=r(46147),o=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(r(28110)),n=a(r(20963)),u=a(r(23673)),l=a(r(23422)),i=a(r(60560)),c=a(r(42315)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=F(t);if(r&&r.has(e))return r.get(e);var a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var u=s?Object.getOwnPropertyDescriptor(e,n):null;u&&(u.get||u.set)?Object.defineProperty(a,n,u):a[n]=e[n]}a.default=e,r&&r.set(e,a);return a}(r(3044)),p=r(94344),f=r(66855),m=r(12716),h=r(25614),v=r(59828),y=r(93969),g=r(53500);function F(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(F=function(e){return e?r:t})(e)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return(0,i.default)(this,r)}}var E=d.default.lazy((function(){return Promise.resolve().then(r.bind(r,87630))})),M=function(e){(0,l.default)(r,e);var t=C(r);function r(e){var a;(0,s.default)(this,r),a=t.call(this,e);var o=(0,u.default)(a),n=document.createElement("div"),l=document.createElement("button");a.langConstants=(0,p.getLanguage)(e.mapController.data),l.title=a.langConstants.CTRL_MEASURETOOLS,n.className="c4g-measuretools-control ol-unselectable ol-control ",e.open?n.className+="c4g-open":n.className+="c4g-close",e.external&&(n.className+=" c4g-external"),n.appendChild(l),jQuery(n).on("click",(function(e){var t=o.props.mapController.measuretoolsContainer.className.includes("c4g-close");o.state.open?t?jQuery(o.props.mapController.measuretoolsContainer).removeClass("c4g-close").addClass("c4g-open"):o.close():o.open()}));var i=e.mapController,c=new f.Control({element:n,target:e.target});return i.mapsControls.controls.measuretools=c,i.map.addControl(c),a.close=a.close.bind((0,u.default)(a)),a.open=a.open.bind((0,u.default)(a)),a.addMeasuredFeature=a.addMeasuredFeature.bind((0,u.default)(a)),a.modifyMeasuredFeature=a.modifyMeasuredFeature.bind((0,u.default)(a)),a.removeMeasuredFeature=a.removeMeasuredFeature.bind((0,u.default)(a)),a.incrementFeatureId=a.incrementFeatureId.bind((0,u.default)(a)),a.modes=["select","line","polygon","circle","freehand"],a.state={open:e.open||!1,currentMode:"select",control:c,measuredFeatures:[],featureIdCtr:0},a.init(),a}return(0,n.default)(r,[{key:"render",value:function(){var e=this,t={select:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_SELECT,line:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING,polygon:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON,circle:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE,freehand:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND};return d.default.createElement("div",{className:"c4g-measuretools-wrapper"},d.default.createElement(d.Suspense,{fallback:d.default.createElement("div",null,"Loading...")},d.default.createElement(E,{wrapperClass:"c4g-measuretools-header",headerClass:"c4g-measuretools-headline",hideContainer:".c4g-measuretools-container",header:this.langConstants.MEASURETOOLS,closeBtnClass:"c4g-titlebar-close",closeBtnCb:this.close,closeBtnTitle:this.langConstants.CLOSE})),d.default.createElement("div",{className:"c4g-measuretools-mode-switcher"},this.modes.map((function(r,a){return d.default.createElement("button",{key:a,className:"c4g-measure-"+r+" "+(r===e.state.currentMode?"c4g-active":"c4g-inactive"),onMouseUp:function(){return e.setState({currentMode:r})},title:t[r]})}))),d.default.createElement(m.MeasuretoolsView,{mode:"select",measureTools:this,active:"select"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}),d.default.createElement(m.MeasuretoolsView,{mode:"line",measureTools:this,active:"line"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}),d.default.createElement(m.MeasuretoolsView,{mode:"polygon",measureTools:this,active:"polygon"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}),d.default.createElement(m.MeasuretoolsView,{mode:"circle",measureTools:this,active:"circle"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}),d.default.createElement(m.MeasuretoolsView,{mode:"freehand",measureTools:this,active:"freehand"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}))}},{key:"incrementFeatureId",value:function(){this.setState({featureIdCtr:this.state.featureIdCtr+1})}},{key:"addMeasuredFeature",value:function(e){var t=this.state.measuredFeatures;t.push(e),this.setState({measuredFeatures:t})}},{key:"modifyMeasuredFeature",value:function(e,t){for(var r=this.state.measuredFeatures,a=0;a<r.length;a++)r[a].id===t&&(r[a]=e);this.setState({measuredFeatures:r})}},{key:"removeMeasuredFeature",value:function(e){for(var t=this.state.measuredFeatures,r=0;r<t.length;r++)if(t[r].id===e){t.splice(r,1);break}this.setState({measuredFeatures:t})}},{key:"setCurrentMode",value:function(e){this.modes.includes(e)?this.setState({currentMode:e}):console.warn("The specified mode is not available")}},{key:"open",value:function(){this.setState({open:!0}),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){this.setState({open:!1})}},{key:"init",value:function(){return this.measureLineLayer=new h.Vector({source:new v.Vector}),this.measurePolygonLayer=new h.Vector({source:new v.Vector}),this.measureCircleLayer=new h.Vector({source:new v.Vector}),this.measureFreehandLayer=new h.Vector({source:new v.Vector}),this.measureLayerGroup=new h.Group({layers:new y.Collection([this.measureFreehandLayer,this.measureCircleLayer,this.measurePolygonLayer,this.measureLineLayer]),visible:!0}),this.props.mapController.map.addLayer(this.measureLayerGroup),!0}},{key:"componentDidUpdate",value:function(e,t,r){if(t.open&&!this.state.open)jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close"),jQuery(".c4g-measuretools-container").removeClass("c4g-open").addClass("c4g-close"),this.props.mapController.map.removeLayer(this.measureLayerGroup),this.removeTooltips(),this.removedOnce=!0;else if(!t.open&&this.state.open){if(jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close"),jQuery(".c4g-measuretools-container").addClass("c4g-open").removeClass("c4g-close"),this.removedOnce)try{this.props.mapController.map.addLayer(this.measureLayerGroup)}catch(e){console.warn(e)}this.addTooltips()}this.props.mapController.data.caching&&!this.state.open&&(g.utils.getValue("panel")===this.constructor.name&&g.utils.storeValue("panel",""))}},{key:"removeTooltips",value:function(){for(var e=this.measureLayerGroup.getLayersArray(),t=0;t<e.length;t++){var r=e[t].getSource().getFeatures();if(r)for(var a=0;a<r.length;a++){r[a].get("tooltip").hide()}}}},{key:"addTooltips",value:function(){for(var e=this.measureLayerGroup.getLayersArray(),t=0;t<e.length;t++){var r=e[t].getSource().getFeatures();if(r)for(var a=0;a<r.length;a++){r[a].get("tooltip").show()}}}}]),r}(d.Component);t.default=M}}]);
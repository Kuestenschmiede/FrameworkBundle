"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[740],{16522:(e,t,r)=>{var a=r(46147),n=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.RouterInstruction=void 0;var s=a(r(28110)),o=a(r(20963)),u=a(r(23673)),i=a(r(23422)),c=a(r(60560)),p=a(r(42315)),l=a(r(51542)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=b(t);if(r&&r.has(e))return r.get(e);var a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=s?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,r&&r.set(e,a);return a}(r(3044)),d=r(43886),h=r(93969),g=r(60144),v=r(28193),m=r(16887);function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(b=function(e){return e?r:t})(e)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,p.default)(e);if(t){var n=(0,p.default)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,c.default)(this,r)}}var k=function(e){(0,i.default)(r,e);var t=y(r);function r(e){var a;return(0,s.default)(this,r),a=t.call(this,e),(0,l.default)((0,u.default)(a),"fnItemClick",(function(){if(this.props.routerWaySource&&this.props.routerWaySource.getFeatures()){this.props.routerHintSource.clear();var e=this.props.routerWaySource.getFeatures()[0].getGeometry().getCoordinates(),t=this.props.dataPos;if(t){var r=t.split(",");r[0]=parseFloat(r[0]),r[1]=parseFloat(r[1]);var a=(0,v.fromLonLat)(r),n=new h.Feature({geometry:new g.Point(a)});this.props.routerHintSource.addFeature(n),this.props.options.mapController.map.getView().setCenter(a)}else if(e&&(this.props.dataStart||0===this.props.dataStart)&&this.props.dataEnd){var s;if(this.props.dataStart===this.props.dataEnd)s=new g.Point(e[this.props.dataStart]);else{var o=e.slice(this.props.dataStart,this.props.dataEnd);s=new g.LineString(o)}var u=new h.Feature({geometry:s});u.setStyle(new m.Style({stroke:new m.Stroke({color:"rgba(255, 0, 0, 1)",width:20})})),this.props.routerHintSource.addFeature(u);var i=jQuery(".c4g-router-container-right").css("width");i?(i=i.split("."),i=Array.isArray(i)?i[0]:i,i=parseInt(i)+50):i=50;var c=parseInt(this.props.mapController.data.starboard.maxZoom)||22;this.props.mapController.map.getView().fit(s,{padding:[50,i,50,50],duration:500,maxZoom:c})}}})),(0,l.default)((0,u.default)(a),"fnItemOver",(function(){if(this.props.routerWaySource&&this.props.routerWaySource.getFeatures()){var e=this.props.routerWaySource.getFeatures()[0];if(e){this.props.routerHintSource.clear();var t=this.props.dataPos;if(t){var r=t.split(",");r[0]=parseFloat(r[0]),r[1]=parseFloat(r[1]);var a=(0,v.fromLonLat)(r),n=new h.Feature({geometry:new g.Point(a)});this.props.routerHintSource.addFeature(n)}else if((this.props.dataStart||0===this.props.dataStart)&&this.props.dataEnd){var s=e.getGeometry().getCoordinates();if(s){var o,u=s.slice(this.props.dataStart,this.props.dataEnd);(o=1===u.length?new h.Feature({geometry:new g.Point(u)}):new h.Feature({geometry:new g.LineString(u)})).setStyle(new m.Style({stroke:new m.Stroke({color:"rgba(255, 0, 0, 1)",width:15})})),this.props.routerHintSource.addFeature(o)}}}}})),(0,l.default)((0,u.default)(a),"fnItemOut",(function(){this.props.routerHintSource.clear()})),a.fnItemOver=a.fnItemOver.bind((0,u.default)(a)),a.fnItemClick=a.fnItemClick.bind((0,u.default)(a)),a.fnItemOut=a.fnItemOut.bind((0,u.default)(a)),a}return(0,o.default)(r,[{key:"render",value:function(){return f.default.createElement("div",{className:"c4g-router-instruction",onMouseUp:this.fnItemClick,onMouseLeave:this.fnItemOut,onMouseEnter:this.fnItemOver,key:this.props.id},f.default.createElement("div",{className:"c4g-router-instruction-image"},f.default.createElement("img",{src:this.getInstructionIcon(this.props.imgPath),alt:""})),f.default.createElement("div",{className:"c4g-router-instruction-text"},this.props.instrText),f.default.createElement("div",{className:"c4g-router-instruction-distance"},(0,d.toHumanDistance)(1e3*this.props.instrDist)))}},{key:"getInstructionIcon",value:function(e){switch(this.props.mapController.data.router_api_selection){case"5":case"4":return this.getInstructionIconValhalla(e);case"3":return this.getInstructionIconGraphhopper(e);case"2":return this.getInstructionIconORS(e)}}},{key:"getInstructionIconValhalla",value:function(e){var t;switch(e){default:t="default.png";break;case 1:case 2:case 3:t="head.png";break;case 4:case 5:case 6:t="target.png";break;case 7:case 8:case 17:case 22:case 25:t="continue.png";break;case 9:case 18:case 20:case 23:t="slight-right.png";break;case 10:t="turn-right.png";break;case 11:t="sharp-right.png";break;case 12:case 13:t="u-turn.png";break;case 14:t="sharp-left.png";break;case 15:t="turn-left.png";break;case 16:case 19:case 21:case 24:t="slight-left.png";break;case 26:case 27:t="round-about.png"}return"bundles/con4gismaps/vendor/osrm/images/"+t}},{key:"getInstructionIconGraphhopper",value:function(e){var t;switch(e){case 0:t="continue.png";break;case-2:case-1:t="turn-left.png";break;case 2:case 1:t="turn-right.png";break;case-3:t="sharp-left.png";break;case 3:t="sharp-right.png";break;case-7:t="slight-left.png";break;case 7:t="slight-right.png";break;case 6:t="round-about.png";break;case 4:case 5:t="target.png";break;case-98:t="u-turn.png";break;case 99:t="head.png"}return"bundles/con4gismaps/vendor/osrm/images/"+t}},{key:"getInstructionIconORS",value:function(e){var t;switch(e){case 0:t="turn-left.png";break;case 1:t="turn-right.png";break;case 2:t="sharp-left.png";break;case 3:t="sharp-right.png";break;case 4:case 12:t="slight-left.png";break;case 5:case 13:t="slight-right.png";break;case 6:t="continue.png";break;case 7:case 8:t="round-about.png";break;case 9:t="u-turn.png";break;case 10:t="target.png";break;case 11:t="head.png"}return"bundles/con4gismaps/vendor/osrm/images/"+t}}]),r}(f.Component);t.RouterInstruction=k},80740:(e,t,r)=>{var a=r(46147),n=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(r(28110)),o=a(r(20963)),u=a(r(23422)),i=a(r(60560)),c=a(r(42315)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=s?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,r&&r.set(e,a);return a}(r(3044)),l=r(16522);r(43886);function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,c.default)(e);if(t){var n=(0,c.default)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,i.default)(this,r)}}var h=function(e){(0,u.default)(r,e);var t=d(r);function r(e){return(0,s.default)(this,r),t.call(this,e)}return(0,o.default)(r,[{key:"render",value:function(){var e=this,t=[];return this.props.routerInstructions&&this.props.routerInstructions.instructions&&(t=this.props.routerInstructions.instructions),0===t.length?"":p.default.createElement("div",{className:this.props.className},this.props.header,this.props.switcher,t.map((function(t,r){return p.default.createElement(l.RouterInstruction,{imgPath:t.type,instrText:t.instruction,instrDist:t.length,key:r,id:r,mapController:e.props.mapController,dataStart:t.begin_shape_index,dataEnd:t.end_shape_index,routerWaySource:e.props.routerWaySource,routerHintSource:e.props.routerHintSource})})))}}]),r}(p.Component);t.default=h}}]);
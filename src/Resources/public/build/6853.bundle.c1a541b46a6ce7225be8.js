/*! For license information please see 6853.bundle.c1a541b46a6ce7225be8.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[6853],{46853:(e,t,r)=>{var a=r(42417),n=r(30624);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(r(77228)),s=a(r(86491)),i=a(r(21377)),l=a(r(82065)),c=a(r(42336)),u=a(r(72556)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=g(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var i=o?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(a,s,i):a[s]=e[s]}a.default=e,r&&r.set(e,a);return a}(r(3044)),d=(r(83751),r(23868),r(73983)),f=r(93969),h=r(60144),y=r(63480),m=r(12200),v=r(7689);r(23560),r(71392);function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(g=function(e){return e?r:t})(e)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,u.default)(e);if(t){var n=(0,u.default)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,c.default)(this,r)}}t.default=function(e){(0,l.default)(r,e);var t=S(r);function r(e){var a;(0,o.default)(this,r),a=t.call(this,e);(0,i.default)(a);return a.state={freehand:!1,selectedFeature:!1,features:"[]",activeElement:e.elements[0]?e.elements[0].id:0,activeStyle:e.elements[0]?e.elements[0].styleId:0,selectMode:"modify"},a.interaction=null,a.changeJSON=a.changeJSON.bind((0,i.default)(a)),a.resetInteraction=a.resetInteraction.bind((0,i.default)(a)),a}return(0,s.default)(r,[{key:"render",value:function(){var e=this;if("select"!==this.props.mode&&this.props.active){var t;switch(this.resetInteraction(),this.props.mode){case"Point":t=new h.Point(0,0);break;case"LineString":t=new h.LineString([[0,0],[1,1]]);break;case"Polygon":t=new h.Polygon([[0,0],[1,1]])}var r=new f.Feature(t);r.set("locstyle",this.state.activeStyle),this.interaction=new y.Draw({source:this.props.editorLayer.getSource(),type:this.props.mode,snapTolerance:1,style:this.props.styleFunction(r),freehand:this.state.freehand}),this.interaction.on("drawend",(function(t){var r;if(t.feature.set("editorId",e.props.editorId),t.feature.set("locstyle",e.state.activeStyle),t.feature.set("elementId",e.state.activeElement),"Circle"===e.props.mode){var a=t.feature.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCenter(),n=t.feature.getGeometry().getRadius(),o=m.utils.measureGeometry(t.feature.getGeometry()).rawValue;r={type:"Feature",geometry:{type:"Point",coordinates:a},properties:{editorId:e.props.editorId,elementId:e.state.activeElement,locstyle:e.state.activeStyle,radius:n,realRadius:o}}}else r=(new d.GeoJSON).writeFeatureObject(t.feature,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});var s={source:e.props.editorLayer.getSource(),geojson:r,event:t,format:new d.GeoJSON};m.utils.callHookFunctions(window.c4gMapsHooks.hook_editor_draw,s),e.props.addFeature(r),e.props.countEditorId()})),this.props.mapController.map.addInteraction(this.interaction)}else"select"===this.props.mode&&this.props.active?(this.resetInteraction(),this.interaction=[],this.interaction.push(new y.Select({layers:[this.props.editorLayer],hitTolerance:20})),this.interaction.push(new y.Modify({features:this.state.selectedFeature?new f.Collection([this.state.selectedFeature]):new f.Collection([new f.Feature]),pixelTolerance:20})),this.interaction[0].on("select",(function(t){var r=t.selected[0];e.setState({selectedFeature:r})})),this.interaction[1].on("modifyend",(function(t){var r,a=t.features.getArray()[0];if(a.getGeometry()instanceof h.Circle){var n=a.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCenter(),o=a.getGeometry().getRadius(),s=m.utils.measureGeometry(a.getGeometry()).rawValue;r={type:"Feature",geometry:{type:"Point",coordinates:n},properties:{editorId:a.get("editorId"),elementId:a.get("elementId"),locstyle:a.get("activeStyle"),radius:o,realRadius:s}}}else r=(new d.GeoJSON).writeFeatureObject(a,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});var i={source:e.props.editorLayer.getSource(),geojson:r,event:t,format:new d.GeoJSON};m.utils.callHookFunctions(window.c4gMapsHooks.hook_editor_modify,i),e.props.modifyFeature(r)})),this.props.mapController.map.addInteraction(this.interaction[0]),this.props.mapController.map.addInteraction(this.interaction[1])):this.resetInteraction();var a=null;this.props.elements&&this.props.elements.length>1&&(a=this.props.elements.map((function(t){var r,a,n=e.props.styleData.arrLocStyles[t.styleId],o=n.locStyleArr,s=o?o.styletype:"default";if(!o||"cust_icon"!==s&&"cust_icon_svg"!==s&&"photo"!==s){var i=n.style&&n.style(new f.Feature({geometry:new h.Point(0,0)}),"EPSG:4326")?n.style(new f.Feature({geometry:new h.Point(0,0)}),"EPSG:4326"):null,l=Array.isArray(i)?i[0]:i;l&&l.getFill()&&l.getStroke()?r=l.getFill().getColor():o&&o.fillcolor&&o.strokecolor&&(r=m.utils.getRgbaFromHexAndOpacity(o.fillcolor[0],o.fillcolor[1])),a=p.default.createElement("span",{title:t.name,className:"c4g-editor-locstyle",style:{backgroundColor:r}})}else a=p.default.createElement(v.C4gStarboardStyle,{tooltip:t.name,styleData:e.props.styleData,styleId:t.styleId});return p.default.createElement("button",{key:t.id,style:{height:"32px",width:"32px"},onMouseUp:function(){e.setState({activeElement:t.id,activeStyle:t.styleId})}},a)})));var n=null;if("LineStringPolygon".includes(this.props.mode)){var o="c4g-editor-view ";o+=this.state.freehand?"c4g-active":"c4g-inactive",n=p.default.createElement("a",{className:o,title:this.props.lang.EDITOR_VIEW_TRIGGER_DRAW_FREEHAND,onMouseUp:function(){e.changeFreehand()}},this.props.lang.EDITOR_VIEW_TRIGGER_DRAW_FREEHAND)}var s=[];if(this.state.selectedFeature&&"select"===this.props.mode)for(var i in n=p.default.createElement("div",{className:"c4g-editor-mode-switcher"},p.default.createElement("button",{title:this.props.lang.EDITOR_FEATURE_DELETE,className:"c4g-editor-feature-delete "+("remove"===this.state.selectMode?"c4g-active":"c4g-inactive"),onMouseUp:function(){e.removeActiveFeature()}})),this.props.editorVars)if(this.props.editorVars.hasOwnProperty(i)){var l=this.props.editorVars[i];if(l.caption&&l.key){var c=this.state.selectedFeature.get(l.key)?this.state.selectedFeature.get(l.key):"";s.push(p.default.createElement("form",{className:"c4g-editor-vars-input",key:i,onSubmit:function(e){e.preventDefault()}},p.default.createElement("label",null,l.caption,":",p.default.createElement("input",{type:"text",value:c,name:l.key,onChange:function(t){e.handleVarChange(t)}}))))}}return p.default.createElement(p.default.Fragment,null,p.default.createElement("div",null,n,p.default.createElement("div",{className:"c4g-editor-element-selection"},a)),p.default.createElement("div",{className:"c4g-editor-vars"},s))}},{key:"resetInteraction",value:function(){this.interaction&&(Array.isArray(this.interaction)?(this.props.mapController.map.removeInteraction(this.interaction[0]),this.props.mapController.map.removeInteraction(this.interaction[1])):this.props.mapController.map.removeInteraction(this.interaction))}},{key:"removeActiveFeature",value:function(){var e=(new d.GeoJSON).writeFeatureObject(this.state.selectedFeature,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});this.props.removeFeature(e),this.props.editorLayer.getSource().removeFeature(this.state.selectedFeature),this.setState({selectedFeature:!1})}},{key:"componentDidUpdate",value:function(e,t,r){var a=this;this.props.elements[0]&&e.mode!==this.props.mode&&(0===this.state.activeElement?this.setState({activeElement:this.props.elements[0].id,activeStyle:this.props.elements[0].styleId}):this.props.elements.find((function(e){return e.id===a.state.activeElement}))||this.setState({activeElement:this.props.elements[0].id,activeStyle:this.props.elements[0].styleId}))}},{key:"changeSelectMode",value:function(e){this.setState({selectMode:e})}},{key:"handleVarChange",value:function(e){var t=e.target.value,r=e.target.name;this.state.selectedFeature.set(r,t);var a=(new d.GeoJSON).writeFeatureObject(this.state.selectedFeature,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});this.props.modifyFeature(a),this.setState({selectedFeature:this.state.selectedFeature})}},{key:"changeFreehand",value:function(){this.setState({freehand:!this.state.freehand})}},{key:"changeJSON",value:function(e){this.setState({features:e.target.value})}}]),r}(p.Component)},7689:(e,t,r)=>{var a=r(42417),n=r(30624);Object.defineProperty(t,"__esModule",{value:!0}),t.C4gStarboardStyle=void 0;var o=a(r(77228)),s=a(r(86491)),i=a(r(82065)),l=a(r(42336)),c=a(r(72556)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var i=o?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(a,s,i):a[s]=e[s]}a.default=e,r&&r.set(e,a);return a}(r(3044)),p=a(r(9286)),d=r(60144),f=r(89788),h=r(12200);function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,c.default)(e);if(t){var n=(0,c.default)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,l.default)(this,r)}}t.C4gStarboardStyle=function(e){(0,i.default)(r,e);var t=m(r);function r(e){return(0,o.default)(this,r),t.call(this,e)}return(0,s.default)(r,[{key:"enterEvent",value:function(e){13===e.which&&this.props.clickEvent(e)}},{key:"render",value:function(){var e=this,t=null,r=this.props.styleData.arrLocStyles[this.props.styleId],a=r.locStyleArr,n=r.style&&r.style(new p.default({geometry:new d.Point(0,0)}),"EPSG:4326")?r.style(new p.default({geometry:new d.Point(0,0)}),"EPSG:4326"):null,o=Array.isArray(n)?n[0]:n,s=a?a.styletype:"default",i=this.props.tooltip||"";if(!a||"cust_icon"!==s&&"cust_icon_svg"!==s&&"photo"!==s){var l,c,y;switch(s){case"point":l=f.cssConstants.STARBOARD_LOCSTYLE_POINT;break;case"square":l=f.cssConstants.STARBOARD_LOCSTYLE_SQUARE;break;case"star":l=f.cssConstants.STARBOARD_LOCSTYLE_STAR;break;case"x":l=f.cssConstants.STARBOARD_LOCSTYLE_X;break;case"cross":l=f.cssConstants.STARBOARD_LOCSTYLE_CROSS;break;case"triangle":l=f.cssConstants.STARBOARD_LOCSTYLE_TRIANGLE;break;default:l=f.cssConstants.STARBOARD_LOCSTYLE}o&&o.getFill()&&o.getStroke()?(c=o.getFill().getColor(),y=o.getStroke().getColor()):a&&a.fillcolor&&a.strokecolor&&(c=h.utils.getRgbaFromHexAndOpacity(a.fillcolor[0],a.fillcolor[1]),y=h.utils.getRgbaFromHexAndOpacity(a.strokecolor[0],a.strokecolor[1]));var m={"--var-color":c,"--var-bordercolor":y};t=this.props.clickEvent?u.default.createElement("span",{className:l,style:m,title:i,onMouseUp:function(t){return e.props.clickEvent(t)}}):u.default.createElement("span",{className:l,style:m,title:i})}else{var v,g=null;if(a.icon_src&&-1!==a.icon_src.indexOf(".")||a.svgSrc&&-1!==a.svgSrc.indexOf("."))v="cust_icon"===s||"photo"===s?a.icon_src:a.svgSrc,g=u.default.createElement("img",{src:v,style:{height:25,width:25}});else if(o){var S=o.getImage&&"function"==typeof o.getImage&&o.getImage()?o.getImage():null;if(!S||!S.getSrc())return null;g=u.default.createElement("img",{src:S.getSrc(),style:{height:25,width:25}})}t=this.props.clickEvent?u.default.createElement("span",{tabIndex:1,className:f.cssConstants.STARBOARD_LOCSTYLE,title:i,onKeyPress:function(t){return e.enterEvent(t)},onMouseUp:function(t){return e.props.clickEvent(t)}},g):u.default.createElement("span",{className:f.cssConstants.STARBOARD_LOCSTYLE,title:i},g)}return t}}]),r}(u.Component)}}]);
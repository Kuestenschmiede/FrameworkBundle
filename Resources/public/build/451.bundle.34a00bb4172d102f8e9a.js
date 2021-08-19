"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[451],{30451:(e,t,r)=>{var n=r(46147),a=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(r(28110)),o=n(r(20963)),i=n(r(23673)),l=n(r(23422)),c=n(r(60560)),u=n(r(42315)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=g(t);if(r&&r.has(e))return r.get(e);var n={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=s?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(3044)),f=(r(70956),r(96067),r(93038)),d=r(130),h=r(60144),y=r(23601),v=r(49109),m=(r(47480),r(53500));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(g=function(e){return e?r:t})(e)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.default)(e);if(t){var a=(0,u.default)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,c.default)(this,r)}}var E=function(e){(0,l.default)(r,e);var t=S(r);function r(e){var n;(0,s.default)(this,r),n=t.call(this,e);(0,i.default)(n);return n.state={freehand:!1,selectedFeature:!1,features:"[]",activeElement:e.elements[0]?e.elements[0].id:0,activeStyle:e.elements[0]?e.elements[0].styleId:0,selectMode:"modify"},n.interaction=null,n.changeJSON=n.changeJSON.bind((0,i.default)(n)),n.resetInteraction=n.resetInteraction.bind((0,i.default)(n)),n}return(0,o.default)(r,[{key:"render",value:function(){var e=this;if("select"!==this.props.mode&&this.props.active){var t;switch(this.resetInteraction(),this.props.mode){case"Point":t=new h.Point(0,0);break;case"LineString":t=new h.LineString([[0,0],[1,1]]);break;case"Polygon":t=new h.Polygon([[0,0],[1,1]])}var r=new d.Feature(t);r.set("locstyle",this.state.activeStyle),this.interaction=new y.Draw({source:this.props.editorLayer.getSource(),type:this.props.mode,stopClick:!1,snapTolerance:0,style:this.props.styleFunction(r),freehand:this.state.freehand}),this.interaction.on("drawend",(function(t){var r;if(t.feature.set("editorId",e.props.editorId),t.feature.set("locstyle",e.state.activeStyle),t.feature.set("elementId",e.state.activeElement),"Circle"===e.props.mode){var n=t.feature.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCenter(),a=t.feature.getGeometry().getRadius();r={type:"Feature",geometry:{type:"Point",coordinates:n},properties:{editorId:e.props.editorId,elementId:e.state.activeElement,locstyle:e.state.activeStyle,radius:a}}}else r=(new f.GeoJSON).writeFeatureObject(t.feature,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});e.props.addFeature(r),e.props.countEditorId()})),this.props.mapController.map.addInteraction(this.interaction)}else"select"===this.props.mode&&this.props.active?(this.resetInteraction(),this.interaction=[],this.interaction.push(new y.Select({layers:[this.props.editorLayer],hitTolerance:20})),this.interaction.push(new y.Modify({features:this.state.selectedFeature?new d.Collection([this.state.selectedFeature]):new d.Collection([new d.Feature]),pixelTolerance:20})),this.interaction[0].on("select",(function(t){var r=t.selected[0];e.setState({selectedFeature:r})})),this.interaction[1].on("modifyend",(function(t){var r=t.features.getArray()[0],n=(new f.GeoJSON).writeFeatureObject(r,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});e.props.modifyFeature(n)})),this.props.mapController.map.addInteraction(this.interaction[0]),this.props.mapController.map.addInteraction(this.interaction[1])):this.resetInteraction();var n=null;this.props.elements&&this.props.elements.length>1&&(n=this.props.elements.map((function(t){var r,n,a=e.props.styleData.arrLocStyles[t.styleId],s=a.locStyleArr,o=s?s.styletype:"default";if(!s||"cust_icon"!==o&&"cust_icon_svg"!==o&&"photo"!==o){var i=a.style&&a.style(new d.Feature({geometry:new h.Point(0,0)}),"EPSG:4326")?a.style(new d.Feature({geometry:new h.Point(0,0)}),"EPSG:4326"):null,l=Array.isArray(i)?i[0]:i;l&&l.getFill()&&l.getStroke()?r=l.getFill().getColor():s&&s.fillcolor&&s.strokecolor&&(r=m.utils.getRgbaFromHexAndOpacity(s.fillcolor[0],s.fillcolor[1])),n=p.default.createElement("span",{title:t.name,className:"c4g-editor-locstyle",style:{backgroundColor:r}})}else n=p.default.createElement(v.C4gStarboardStyle,{tooltip:t.name,styleData:e.props.styleData,styleId:t.styleId});return p.default.createElement("button",{key:t.id,style:{height:"32px",width:"32px"},onMouseUp:function(){e.setState({activeElement:t.id,activeStyle:t.styleId})}},n)})));var a=null;if("LineStringPolygon".includes(this.props.mode)){var s="c4g-editor-view ";s+=this.state.freehand?"c4g-active":"c4g-inactive",a=p.default.createElement("a",{className:s,title:this.props.lang.EDITOR_VIEW_TRIGGER_DRAW_FREEHAND,onMouseUp:function(){e.changeFreehand()}},this.props.lang.EDITOR_VIEW_TRIGGER_DRAW_FREEHAND)}var o=[];if(this.state.selectedFeature&&"select"===this.props.mode)for(var i in a=p.default.createElement("div",{className:"c4g-editor-mode-switcher"},p.default.createElement("button",{title:this.props.lang.EDITOR_FEATURE_DELETE,className:"c4g-editor-feature-delete "+("remove"===this.state.selectMode?"c4g-active":"c4g-inactive"),onMouseUp:function(){e.removeActiveFeature()}})),this.props.editorVars)if(this.props.editorVars.hasOwnProperty(i)){var l=this.props.editorVars[i];if(l.caption&&l.key){var c=this.state.selectedFeature.get(l.key)?this.state.selectedFeature.get(l.key):"";o.push(p.default.createElement("form",{className:"c4g-editor-vars-input",key:i,onSubmit:function(e){e.preventDefault()}},p.default.createElement("label",null,l.caption,":",p.default.createElement("input",{type:"text",value:c,name:l.key,onChange:function(t){e.handleVarChange(t)}}))))}}return p.default.createElement(p.default.Fragment,null,p.default.createElement("div",null,a,p.default.createElement("div",{className:"c4g-editor-element-selection"},n)),p.default.createElement("div",{className:"c4g-editor-vars"},o))}},{key:"resetInteraction",value:function(){this.interaction&&(Array.isArray(this.interaction)?(this.props.mapController.map.removeInteraction(this.interaction[0]),this.props.mapController.map.removeInteraction(this.interaction[1])):this.props.mapController.map.removeInteraction(this.interaction))}},{key:"removeActiveFeature",value:function(){var e=(new f.GeoJSON).writeFeatureObject(this.state.selectedFeature,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});this.props.removeFeature(e),this.props.editorLayer.getSource().removeFeature(this.state.selectedFeature),this.setState({selectedFeature:!1})}},{key:"componentDidUpdate",value:function(e,t,r){var n=this;this.props.elements[0]&&e.mode!==this.props.mode&&(0===this.state.activeElement?this.setState({activeElement:this.props.elements[0].id,activeStyle:this.props.elements[0].styleId}):this.props.elements.find((function(e){return e.id===n.state.activeElement}))||this.setState({activeElement:this.props.elements[0].id,activeStyle:this.props.elements[0].styleId}))}},{key:"changeSelectMode",value:function(e){this.setState({selectMode:e})}},{key:"handleVarChange",value:function(e){var t=e.target.value,r=e.target.name;this.state.selectedFeature.set(r,t);var n=(new f.GeoJSON).writeFeatureObject(this.state.selectedFeature,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});this.props.modifyFeature(n),this.setState({selectedFeature:this.state.selectedFeature})}},{key:"changeFreehand",value:function(){this.setState({freehand:!this.state.freehand})}},{key:"changeJSON",value:function(e){this.setState({features:e.target.value})}}]),r}(p.Component);t.default=E},49109:(e,t,r)=>{var n=r(46147),a=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.C4gStarboardStyle=void 0;var s=n(r(28110)),o=n(r(20963)),i=n(r(23422)),l=n(r(60560)),c=n(r(42315)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var n={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=s?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(3044)),p=n(r(9286)),f=r(60144),d=r(96983),h=r(53500);function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,l.default)(this,r)}}var m=function(e){(0,i.default)(r,e);var t=v(r);function r(e){return(0,s.default)(this,r),t.call(this,e)}return(0,o.default)(r,[{key:"enterEvent",value:function(e){13===e.which&&this.props.clickEvent(e)}},{key:"render",value:function(){var e=this,t=null,r=this.props.styleData.arrLocStyles[this.props.styleId],n=r.locStyleArr,a=r.style&&r.style(new p.default({geometry:new f.Point(0,0)}),"EPSG:4326")?r.style(new p.default({geometry:new f.Point(0,0)}),"EPSG:4326"):null,s=Array.isArray(a)?a[0]:a,o=n?n.styletype:"default",i=this.props.tooltip||"";if(!n||"cust_icon"!==o&&"cust_icon_svg"!==o&&"photo"!==o){var l,c,y;switch(o){case"point":l=d.cssConstants.STARBOARD_LOCSTYLE_POINT;break;case"square":l=d.cssConstants.STARBOARD_LOCSTYLE_SQUARE;break;case"star":l=d.cssConstants.STARBOARD_LOCSTYLE_STAR;break;case"x":l=d.cssConstants.STARBOARD_LOCSTYLE_X;break;case"cross":l=d.cssConstants.STARBOARD_LOCSTYLE_CROSS;break;case"triangle":l=d.cssConstants.STARBOARD_LOCSTYLE_TRIANGLE;break;default:l=d.cssConstants.STARBOARD_LOCSTYLE}s&&s.getFill()&&s.getStroke()?(c=s.getFill().getColor(),y=s.getStroke().getColor()):n&&n.fillcolor&&n.strokecolor&&(c=h.utils.getRgbaFromHexAndOpacity(n.fillcolor[0],n.fillcolor[1]),y=h.utils.getRgbaFromHexAndOpacity(n.strokecolor[0],n.strokecolor[1]));var v={"--var-color":c,"--var-bordercolor":y};t=this.props.clickEvent?u.default.createElement("span",{className:l,style:v,title:i,onMouseUp:function(t){return e.props.clickEvent(t)}}):u.default.createElement("span",{className:l,style:v,title:i})}else{var m,g=null;if(n.icon_src&&-1!==n.icon_src.indexOf(".")||n.svgSrc&&-1!==n.svgSrc.indexOf("."))m="cust_icon"===o||"photo"===o?n.icon_src:n.svgSrc,g=u.default.createElement("img",{src:m,style:{height:25,width:25}});else if(s){var S=s.getImage&&"function"==typeof s.getImage&&s.getImage()?s.getImage():null;if(!S||!S.getSrc())return null;g=u.default.createElement("img",{src:S.getSrc(),style:{height:25,width:25}})}t=this.props.clickEvent?u.default.createElement("span",{tabIndex:1,className:d.cssConstants.STARBOARD_LOCSTYLE,title:i,onKeyPress:function(t){return e.enterEvent(t)},onMouseUp:function(t){return e.props.clickEvent(t)}},g):u.default.createElement("span",{className:d.cssConstants.STARBOARD_LOCSTYLE,title:i},g)}return t}}]),r}(u.Component);t.C4gStarboardStyle=m}}]);
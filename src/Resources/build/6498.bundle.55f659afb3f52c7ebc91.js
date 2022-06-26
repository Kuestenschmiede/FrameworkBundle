"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[6498],{57690:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.projectEditorLang=void 0;t.projectEditorLang={LANG:"de",METADATA_EDIT:"Metadaten bearbeiten",DUPLICATE_ELEMENT:"Element duplizieren",DISPLACE_ELEMENT:"Element in anderes Projekt verschieben",DUPLICATE_AND_DELETE:"Element duplizieren & in anderes Projekt verschieben",CHOOSE_PROJECT:"Wähle ein Projekt ...",EDITOR_FEATURE_DELETE_HEADLINE:"Element löschen",EDITOR_FEATURE_DELETE_QUESTION:"Wollen Sie das Element wirklich löschen?",ROTATE_ELEMENT:"Element rotieren",DESELECT_ELEMENT:"Element-Auswahl aufheben",REVERT_ELEMENT:"Letzte Version wiederherstellen",CONFIRM_DELETE_ALL:"Wollen Sie die ausgewählten Elemente wirklich löschen?",BUTTON_DESELECT_ALL:"Auswahl für alle aufheben",BUTTON_DELETE_ALL:"Ausgewählte Elemente löschen",BUTTON_DISPLACE_ALL:"Ausgewählte Elemente in anderes Projekt verschieben",BUTTON_CONFIRM:"Bestätigen",BUTTON_CANCEL:"Abbrechen",BUTTON_COPY_DISPLACE_ALL:"Ausgewählte Elemente kopieren und in anderes Projekt verschieben",BUTTON_TRANSLATE_ALL:"Ausgewählte Elemente auf der Karte verschieben",BUTTON_APPLY_TRANSLATE:"Änderungen übernehmen",EDITOR:"Editor",EDITOR_ENABLE_INSTANT_MEASURE:"Messen während des Zeichnens",EDITOR_ENABLE_FREEHAND_DRAW:"Freihand zeichnen",EDITOR_FEATURE_APPLY:"Editieren beenden",EDITOR_FEATURE_DELETE:"Aktives Element löschen",EDITOR_FEATURE_MODIFY:"Elemente editieren",EDITOR_SELECT_INFO:"Zur Auswahl ein Element auf der Karte anklicken.",EDITOR_SELECT_INFO_ADDITIONAL:"[Strg] + [Klick] für Mehrfachauswahl <br>[Shift] halten für Auswahlbox",EDITOR_VIEW_TRIGGER_SELECT:"Auswahl Modus",EDITOR_VIEW_TRIGGER_DRAW_POINT:"Punktwerkzeuge",EDITOR_VIEW_TRIGGER_DRAW_FREEHAND:"Freihand zeichnen",EDITOR_VIEW_TRIGGER_DRAW_LINESTRING:"Streckenwerkzeuge",EDITOR_VIEW_TRIGGER_DRAW_POLYGON:"Flächenwerkzeuge",EDITOR_VIEW_TRIGGER_DRAW_CIRCLE:"Kreiswerkzeuge",CTRL_EDITOR:"Editor ein-/ausblenden",EDITOR_API_ERROR_TITLE:"Es ist ein Fehler aufgetreten",NONE:""}},87137:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getEditorLanguage=function(e){return"de"===e.lang||e.lang,a.projectEditorLang},t.langConstants=void 0;var n=r(52773),o=r(13424),a=r(57690),s={};"undefined"!=typeof mapData&&(s="de"===mapData.lang?n.langConstantsGerman:"en"===mapData.lang?o.langConstantsEnglish:n.langConstantsGerman);var i=jQuery.extend(s,a.projectEditorLang);t.langConstants=i},54444:(e,t,r)=>{var n=r(46147),o=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(51542)),s=n(r(28110)),i=n(r(20963)),l=n(r(23673)),u=n(r(23422)),d=n(r(60560)),c=n(r(42315)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=C(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var i=a?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(n,s,i):n[s]=e[s]}n.default=e,r&&r.set(e,n);return n}(r(3044)),p=r(87137),E=r(66855),h=r(17375),g=r(64397),y=(r(23601),r(79756)),m=r(93969),v=r(60144);r(12200),r(16887);function C(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(C=function(e){return e?r:t})(e)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,d.default)(this,r)}}var _=f.default.lazy((function(){return r.e(6853).then(r.bind(r,46853))})),I=f.default.lazy((function(){return Promise.resolve().then(r.bind(r,35501))})),L=function(e){(0,u.default)(r,e);var t=T(r);function r(e){var n;(0,s.default)(this,r),(n=t.call(this,e)).close=n.close.bind((0,l.default)(n)),n.open=n.open.bind((0,l.default)(n)),n.countEditorId=n.countEditorId.bind((0,l.default)(n)),n.addFeature=n.addFeature.bind((0,l.default)(n)),n.removeFeature=n.removeFeature.bind((0,l.default)(n)),n.modifyFeature=n.modifyFeature.bind((0,l.default)(n)),n.changeJSON=n.changeJSON.bind((0,l.default)(n)),n.props.mapController.editor=(0,l.default)(n);var o=(0,l.default)(n),a=document.createElement("div"),i=document.createElement("button");i.title="Editor",a.className="c4g-editor-control ol-unselectable ol-control c4g-close",a.appendChild(i),jQuery(a).on("click",(function(e){var t=o.props.mapController.editorContainer.className.includes("c4g-close");o.state.open?t?jQuery(o.props.mapController.editorContainer).removeClass("c4g-close").addClass("c4g-open"):o.close():o.open()})),n.config={},n.arrLocstyles=[];var u=e.mapController;e.config?n.handleConfig(e.config):n.getConfiguration(u.data.feEditorProfile||u.data.beEditorProfile,!!u.data.feEditorProfile),n.langConstants=(0,p.getEditorLanguage)(u.data);var d,c=new E.Control({element:a,target:e.target});return c.isOpen=function(){return!1},u.mapsControls.controls.editor||(u.mapsControls.controls.editor=c,u.map.addControl(c)),n.modes=["select","Point","LineString","Polygon","Circle"],n.props.inputField&&$(n.props.inputField).val()&&$(n.props.inputField).val().length>50?(d=$(n.props.inputField).val(),setTimeout((function(){n.reRender()}),200)):d='{"type": "FeatureCollection", "features": []}',n.state={open:e.open||!1,currentMode:"select",styleData:{},control:c,range:0,features:d,editorId:0},n.styleFunction=function(e,t){var r=[];if(e&&e.get&&e.get("features")){var n=e.get("features");n.length,e=n[0]}if(e&&e.getStyle())r=e.getStyle();else if(e&&e.get&&e.get("locstyle")){var a=e.get("locstyle");if(o.props.mapController.proxy.locationStyleController.arrLocStyles&&o.props.mapController.proxy.locationStyleController.arrLocStyles[a]&&o.props.mapController.proxy.locationStyleController.arrLocStyles[a].style){var s=o.props.mapController.proxy.locationStyleController.arrLocStyles[a].style;r="function"==typeof s?s(e,t,!1):o.props.mapController.proxy.locationStyleController.arrLocStyles[a].style}}return r},n.features=new m.Collection,n.editorLayer=new h.Vector({source:new y.Vector({format:new g.GeoJSON}),style:n.styleFunction}),n.props.open&&n.props.mapController.map.addLayer(n.editorLayer),n}return(0,i.default)(r,[{key:"open",value:function(){jQuery(this.props.mapController.editorContainer).removeClass("c4g-close").addClass("c4g-open"),this.props.mapController.map.addLayer(this.editorLayer),this.setState({open:!0}),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){jQuery(this.props.mapController.editorContainer).removeClass("c4g-open").addClass("c4g-close"),this.props.mapController.map.removeLayer(this.editorLayer),this.setState({open:!1})}},{key:"countEditorId",value:function(){var e=this.state.editorId+1;this.setState({editorId:e})}},{key:"getConfiguration",value:function(e){var t,r=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t=n?"con4gis/editorService/"+e:"con4gis/editorServiceBackend/"+e,fetch(t).then((function(e){e.json().then((function(e){r.handleConfig(e)}))}))}},{key:"handleConfig",value:function(e){var t=this;for(var r in e.drawStyles)if(e.drawStyles.hasOwnProperty(r)){this.config[r]=[];var n=e.drawStyles[r];for(var o in n.elements)n.elements.hasOwnProperty(o)&&function(){var e=n.elements[o];t.config[r].push(e),-1===t.arrLocstyles.findIndex((function(t){return t===e.styleId}))&&e.styleId&&t.arrLocstyles.push(e.styleId)}()}this.props.mapController.proxy.locationStyleController.loadLocationStyles(this.arrLocstyles,{done:function(e){t.setState({styleData:e})}})}},{key:"reRender",value:function(){try{if(this.state.features.length>50){this.linkInput();var e=JSON.parse(this.state.features),t=new g.GeoJSON({featureProjection:"EPSG:3857"}).readFeatures(e),r=this.editorLayer.getSource();for(var n in r.forEachFeature((function(e){r.removeFeature(e)})),t)if(t.hasOwnProperty(n)){var o=t[n];o.get("radius")&&o.setGeometry(new v.Circle(o.getGeometry().getCoordinates(),o.get("radius"))),r.addFeature(o)}}}catch(e){console.log(e)}if(this.state.range){var a=window.getSelection(),s=a.getRangeAt(0),i=s.startContainer.childNodes[0]||s.startContainer;s.setStart(i,this.state.range),s.setEnd(i,this.state.range),a.removeRange(s),a.addRange(s)}}},{key:"changeJSON",value:function(e){var t=this,r=window.getSelection().getRangeAt(0).startOffset;this.setState({features:e.target.innerText,range:r},(function(){t.reRender()}))}},{key:"addFeature",value:function(e){var t=this,r=JSON.parse(this.state.features);r.features.push(e);var n=JSON.stringify(r,null,2);this.setState({features:n},(function(){t.linkInput()}))}},{key:"removeFeature",value:function(e){var t=this,r=e.properties.editorId,n=JSON.parse(this.state.features),o=n.features.findIndex((function(e){return e.properties.editorId===r}));n.features.splice(o,1);var a=JSON.stringify(n,null,2);this.setState({features:a},(function(){t.linkInput()}))}},{key:"modifyFeature",value:function(e){var t=this,r=e.properties.editorId,n=JSON.parse(this.state.features),o=n.features.findIndex((function(e){return e.properties.editorId===r}));n.features[o]=e;var a=JSON.stringify(n,null,2);this.setState({features:a},(function(){t.linkInput()}))}},{key:"linkInput",value:function(){this.props.inputField&&this.state.features.length>50&&$(this.props.inputField).val(this.state.features)}},{key:"render",value:function(){var e=this;return f.default.createElement("div",{className:"c4g-editor-wrapper"},f.default.createElement(f.Suspense,{fallback:f.default.createElement("div",null,"Loading...")},f.default.createElement(I,(0,a.default)({wrapperClass:"c4g-editor-header",headerClass:"c4g-editor-headline",hideContainer:".c4g-editor-container",header:this.langConstants.EDITOR,closeBtnTitle:this.langConstants.CTRL_EDITOR,closeBtnClass:"c4g-titlebar-close",closeBtnCb:this.close},"closeBtnTitle",this.langConstants.CLOSE))),f.default.createElement("div",{className:"c4g-editor-mode-switcher"},this.modes.map((function(t,r){if("select"===t||e.config[t]&&e.config[t].length>0){var n=e.langConstants["EDITOR_VIEW_TRIGGER_DRAW_"+t.toUpperCase()];return f.default.createElement("button",{key:r,className:"c4g-editor-"+t+"  "+(t===e.state.currentMode?"c4g-active":"c4g-inactive"),title:n,onMouseUp:function(){return e.setState({currentMode:t})}})}return null}))),f.default.createElement(_,{className:"c4g-editor-view",styleFunction:this.styleFunction,mode:this.state.currentMode,styleData:this.state.styleData,elements:this.config[this.state.currentMode]?this.config[this.state.currentMode]:[],active:this.state.open,features:this.features,editorVars:this.props.config.editorVars,removeFeature:this.removeFeature,modifyFeature:this.modifyFeature,addFeature:this.addFeature,editorLayer:this.editorLayer,editorId:this.state.editorId,countEditorId:this.countEditorId,updateFeatures:this.updateFeatures,mapController:this.props.mapController,editor:this,lang:this.langConstants}),f.default.createElement("div",{className:"c4g-editor-content",style:{overflow:"none"}},f.default.createElement("pre",{contentEditable:!0,style:{overflowY:"scroll",overflowX:"none",height:"400px"},suppressContentEditableWarning:!0,onInput:this.changeJSON},this.state.features)))}},{key:"componentDidUpdate",value:function(e,t,r){(e.open&&!this.props.open||t.open&&!this.state.open)&&jQuery(this.props.mapController.editorContainer).removeClass("c4g-open").addClass("c4g-close")}}]),r}(f.Component);t.default=L}}]);
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[1636],{91636:(e,t,n)=>{var s=n(42417),a=n(30624);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(77228)),o=s(n(86491)),l=s(n(21377)),c=s(n(82065)),u=s(n(42336)),i=s(n(72556)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=C(t);if(n&&n.has(e))return n.get(e);var s={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(s,o,l):s[o]=e[o]}s.default=e,n&&n.set(e,s);return s}(n(3044)),d=n(66855),f=n(89788),v=n(95751),m=(s(n(28634)),s(n(8950)));function C(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(C=function(e){return e?n:t})(e)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=(0,i.default)(e);if(t){var a=(0,i.default)(this).constructor;n=Reflect.construct(s,arguments,a)}else n=s.apply(this,arguments);return(0,u.default)(this,n)}}var y=p.default.lazy((function(){return Promise.resolve().then(n.bind(n,35501))})),O=function(e){(0,c.default)(n,e);var t=h(n);function n(e){var s,a,o,c;(0,r.default)(this,n),s=t.call(this,e);var u=(0,l.default)(s);s.state={open:!e.collapsed},s.langConstants=(0,v.getLanguage)(e.mapController.data),s.mapController=e.mapController,s.open=s.open.bind((0,l.default)(s)),s.close=s.close.bind((0,l.default)(s)),s.layer=new m.default,(a=document.createElement("div")).className=f.cssConstants.OVERVIEWMAP+" "+f.cssConstants.OL_UNSELECTABLE+" "+f.cssConstants.OL_CONTROL,e.collapsed?a.className+=" "+f.cssConstants.CLOSE:a.className+=" "+f.cssConstants.OPEN,(o=document.createElement("button")).title=s.langConstants.CTRL_OVERVIEWMAP,a.appendChild(o),(c=document.createElement("span")).className=f.cssConstants.ICON,o.appendChild(c),jQuery(o).click((function(){u.state.open?u.close():u.open()})),s.element=a;var i=new d.Control({element:a,target:e.target});return s.baseLayerIds=[],s.mapController.mapsControls.controls.overviewMap=i,s.mapController.map.addControl(i),s}return(0,o.default)(n,[{key:"render",value:function(){return p.default.createElement("div",{className:"overview-map-wrapper"},p.default.createElement(p.Suspense,{fallback:p.default.createElement("div",null,"Loading...")},p.default.createElement(y,{wrapperClass:"c4g-overwiev-header",headerClass:"c4g-overview-headline",header:this.langConstants.OVERVIEWMAP,closeBtnClass:"c4g-titlebar-close",closeBtnCb:this.close,closeBtnTitle:this.langConstants.CLOSE})),p.default.createElement("div",{id:"overview-map-target",className:"c4g-overview-content"}))}},{key:"componentDidMount",value:function(){this.createOverviewMap()}},{key:"createOverviewMap",value:function(){var e=document.querySelector("#overview-map-target");this.ovm=new d.OverviewMap({collapsed:this.props.collapsed||!0,collapsible:!1,rotateWithView:!0,className:"ol-overviewmap ol-custom-overviewmap",target:e,layers:[this.layer]}),this.ovm.setMap(this.props.mapController.map)}},{key:"removeFromMap",value:function(){this.element.parentNode.removeChild(this.element)}},{key:"getOverviewMap",value:function(){return this.ovm}},{key:"isOpen",value:function(){return!!jQuery(this.element).hasClass(f.cssConstants.OPEN)}},{key:"open",value:function(){this.setState({open:!0}),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){this.setState({open:!1})}},{key:"componentDidUpdate",value:function(e,t,n){!this.state.open&&t.open?(jQuery(this.element).addClass(f.cssConstants.CLOSE).removeClass(f.cssConstants.OPEN),jQuery(this.props.ovmTarget).addClass(f.cssConstants.CLOSE).removeClass(f.cssConstants.OPEN)):this.state.open&&(jQuery(this.element).removeClass(f.cssConstants.CLOSE).addClass(f.cssConstants.OPEN),jQuery(this.props.ovmTarget).removeClass(f.cssConstants.CLOSE).addClass(f.cssConstants.OPEN)),e.source!==this.props.source&&this.layer.setSource(this.props.source)}}]),n}(p.Component);t.default=O}}]);
(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[8618],{18618:(e,t,s)=>{"use strict";var a=s(46147),n=s(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(s(15809)),o=a(s(28110)),l=a(s(20963)),i=a(s(23673)),u=a(s(23422)),c=a(s(60560)),p=a(s(42315)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var s=C(t);if(s&&s.has(e))return s.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}a.default=e,s&&s.set(e,a);return a}(s(3044)),f=s(87985),v=s(96983),m=s(94344),h=a(s(38964));function C(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,s=new WeakMap;return(C=function(e){return e?s:t})(e)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,a=(0,p.default)(e);if(t){var n=(0,p.default)(this).constructor;s=Reflect.construct(a,arguments,n)}else s=a.apply(this,arguments);return(0,c.default)(this,s)}}var O=d.default.lazy((function(){return Promise.resolve().then(s.bind(s,87630))})),w=function(e){(0,u.default)(s,e);var t=y(s);function s(e){var a,n,r,l;(0,o.default)(this,s),a=t.call(this,e);var u=(0,i.default)(a);a.state={open:!e.collapsed,layers:a.props.layers},a.langConstants=(0,m.getLanguage)(e.mapController.data),a.mapController=e.mapController,a.open=a.open.bind((0,i.default)(a)),a.close=a.close.bind((0,i.default)(a)),(n=document.createElement("div")).className=v.cssConstants.OVERVIEWMAP+" "+v.cssConstants.OL_UNSELECTABLE+" "+v.cssConstants.OL_CONTROL,e.collapsed?n.className+=" "+v.cssConstants.CLOSE:n.className+=" "+v.cssConstants.OPEN,(r=document.createElement("button")).title=a.langConstants.CTRL_OVERVIEWMAP,n.appendChild(r),(l=document.createElement("span")).className=v.cssConstants.ICON,r.appendChild(l),jQuery(r).click((function(){u.state.open?u.close():u.open()})),a.element=n;var c=new f.Control({element:n,target:e.target});return a.baseLayerIds=[],a.mapController.mapsControls.controls.overviewMap=c,a.mapController.map.addControl(c),a}return(0,l.default)(s,[{key:"render",value:function(){return d.default.createElement("div",{className:"overview-map-wrapper"},d.default.createElement(d.Suspense,{fallback:d.default.createElement("div",null,"Loading...")},d.default.createElement(O,{wrapperClass:"c4g-overwiev-header",headerClass:"c4g-overview-headline",header:this.langConstants.OVERVIEWMAP,closeBtnClass:"c4g-titlebar-close",closeBtnCb:this.close,closeBtnTitle:this.langConstants.CLOSE})),d.default.createElement("div",{id:"overview-map-target",className:"c4g-overview-content"}))}},{key:"componentDidMount",value:function(){}},{key:"createOverviewMap",value:function(){var e=document.querySelector("#overview-map-target");this.ovm=new f.OverviewMap({collapsed:this.props.collapsed||!0,collapsible:!1,rotateWithView:!0,className:"ol-overviewmap ol-custom-overviewmap",target:e,layers:this.state.layers}),this.ovm.setMap(this.props.mapController.map)}},{key:"removeFromMap",value:function(){this.element.parentNode.removeChild(this.element)}},{key:"getOverviewMap",value:function(){return this.ovm}},{key:"isOpen",value:function(){return!!jQuery(this.element).hasClass(v.cssConstants.OPEN)}},{key:"open",value:function(){this.setState({open:!0}),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){this.setState({open:!1})}},{key:"componentDidUpdate",value:function(e,t,s){if(!this.state.open&&t.open?(jQuery(this.element).addClass(v.cssConstants.CLOSE).removeClass(v.cssConstants.OPEN),jQuery(this.props.ovmTarget).addClass(v.cssConstants.CLOSE).removeClass(v.cssConstants.OPEN)):this.state.open&&(jQuery(this.element).removeClass(v.cssConstants.CLOSE).addClass(v.cssConstants.OPEN),jQuery(this.props.ovmTarget).removeClass(v.cssConstants.CLOSE).addClass(v.cssConstants.OPEN)),t.layers.length!==this.state.layers.length)if(this.ovm){var a=new h.default({layers:this.state.layers});this.ovm.getOverviewMap().setLayerGroup(a)}else this.createOverviewMap()}},{key:"addLayer",value:function(e,t){if(!this.baseLayerIds.includes(t)){this.baseLayerIds.push(t);var s=(0,r.default)(this.state.layers);s.push(e),this.setState({layers:s})}}}]),s}(d.Component);t.default=w},65:(e,t,s)=>{var a=s(20113);e.exports=function(e){if(Array.isArray(e))return a(e)},e.exports.default=e.exports,e.exports.__esModule=!0},92336:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},37830:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},15809:(e,t,s)=>{var a=s(65),n=s(92336),r=s(85565),o=s(37830);e.exports=function(e){return a(e)||n(e)||r(e)||o()},e.exports.default=e.exports,e.exports.__esModule=!0}}]);
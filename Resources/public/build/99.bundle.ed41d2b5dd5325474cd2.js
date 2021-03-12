/*! For license information please see 99.bundle.ed41d2b5dd5325474cd2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1541:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,s,n){return s&&e(t.prototype,s),n&&e(t,n),t}}(),a=s(127),o=u(a),r=s(149),l=s(133),i=s(139),c=u(s(281)),p=s(235);function u(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=void 0,a=void 0,o=void 0,c=s;s.state={open:!e.collapsed,layers:s.props.layers},s.langConstants=(0,i.getLanguage)(e.mapController.data),s.mapController=e.mapController,s.open=s.open.bind(s),s.close=s.close.bind(s),(n=document.createElement("div")).className=l.cssConstants.OVERVIEWMAP+" "+l.cssConstants.OL_UNSELECTABLE+" "+l.cssConstants.OL_CONTROL,e.collapsed?n.className+=" "+l.cssConstants.CLOSE:n.className+=" "+l.cssConstants.OPEN,(a=document.createElement("button")).title=s.langConstants.CTRL_OVERVIEWMAP,n.appendChild(a),(o=document.createElement("span")).className=l.cssConstants.ICON,a.appendChild(o),jQuery(a).click((function(){c.state.open?c.close():c.open()})),s.element=n;var p=new r.Control({element:n,target:e.target});return s.baseLayerIds=[],s.mapController.mapsControls.controls.overviewMap=p,s.mapController.map.addControl(p),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"render",value:function(){return o.default.createElement("div",{className:"overview-map-wrapper"},o.default.createElement(p.Titlebar,{wrapperClass:"c4g-overwiev-header",headerClass:"c4g-overview-headline",header:this.langConstants.OVERVIEWMAP,closeBtnClass:"c4g-titlebar-close",closeBtnCb:this.close,closeBtnTitle:this.langConstants.CLOSE}),o.default.createElement("div",{id:"overview-map-target",className:"c4g-overview-content"}))}},{key:"componentDidMount",value:function(){}},{key:"createOverviewMap",value:function(){var e=document.querySelector("#overview-map-target");this.ovm=new r.OverviewMap({collapsed:this.props.collapsed||!0,collapsible:!1,rotateWithView:!0,className:"ol-overviewmap ol-custom-overviewmap",target:e,layers:this.state.layers}),this.ovm.setMap(this.props.mapController.map)}},{key:"removeFromMap",value:function(){this.element.parentNode.removeChild(this.element)}},{key:"getOverviewMap",value:function(){return this.ovm}},{key:"isOpen",value:function(){return!!jQuery(this.element).hasClass(l.cssConstants.OPEN)}},{key:"open",value:function(){this.setState({open:!0}),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){this.setState({open:!1})}},{key:"componentDidUpdate",value:function(e,t,s){if(!this.state.open&&t.open?(jQuery(this.element).addClass(l.cssConstants.CLOSE).removeClass(l.cssConstants.OPEN),jQuery(this.props.ovmTarget).addClass(l.cssConstants.CLOSE).removeClass(l.cssConstants.OPEN)):this.state.open&&(jQuery(this.element).removeClass(l.cssConstants.CLOSE).addClass(l.cssConstants.OPEN),jQuery(this.props.ovmTarget).removeClass(l.cssConstants.CLOSE).addClass(l.cssConstants.OPEN)),t.layers.length!==this.state.layers.length)if(this.ovm){var n=new c.default({layers:this.state.layers});this.ovm.getOverviewMap().setLayerGroup(n)}else this.createOverviewMap()}},{key:"addLayer",value:function(e,t){if(!this.baseLayerIds.includes(t)){this.baseLayerIds.push(t);var s=[].concat(function(e){if(Array.isArray(e)){for(var t=0,s=Array(e.length);t<e.length;t++)s[t]=e[t];return s}return Array.from(e)}(this.state.layers));s.push(e),this.setState({layers:s})}}}]),t}(a.Component);t.default=v}}]);
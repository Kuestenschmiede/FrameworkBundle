/*! For license information please see 98.bundle.03c9d831122ecf32491f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1526:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(127),s=(o=r)&&o.__esModule?o:{default:o},l=n(235),c=n(139),i=n(149),p=n(141);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),o=n,a=document.createElement("div"),r=document.createElement("button");n.langConstants=(0,c.getLanguage)(e.mapController.data),r.title=n.langConstants.CTRL_INFOAREA,a.className="c4g-infopage-control ol-unselectable ol-control ",e.open?a.className+="c4g-open":a.className+="c4g-close",e.external&&(a.className+=" c4g-external"),a.appendChild(r),jQuery(a).on("click",(function(e){o.state.open?o.close():o.open()}));var s=e.mapController,l=new i.Control({element:a,target:e.target});return s.mapsControls.controls.infoPage=l,s.map.addControl(l),n.close=n.close.bind(n),n.open=n.open.bind(n),n.state={open:e.open||!1,control:l},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){return this.state.open?(jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close"),jQuery(".c4g-infopage-container").addClass("c4g-open").removeClass("c4g-close")):(jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close"),jQuery(".c4g-infopage-container").removeClass("c4g-open").addClass("c4g-close")),s.default.createElement("div",{className:"c4g-infopage-wrapper"},s.default.createElement(l.Titlebar,{wrapperClass:"c4g-infopage-header",headerClass:"c4g-infopage-headline",header:this.langConstants.INFOPAGE,closeBtnClass:"c4g-titlebar-close",closeBtnCb:this.close,closeBtnTitle:this.langConstants.CLOSE}),s.default.createElement("div",{className:"c4g-infopage-content",dangerouslySetInnerHTML:{__html:this.props.infoContent}}))}},{key:"open",value:function(){this.setState({open:!0}),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){this.setState({open:!1})}},{key:"componentDidUpdate",value:function(e,t,n){this.props.mapController.data.caching&&!this.state.open&&(p.utils.getValue("panel")===this.constructor.name&&p.utils.storeValue("panel",""))}}]),t}(r.Component);t.default=u}}]);
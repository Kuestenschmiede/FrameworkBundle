/*! For license information please see 106.bundle.043c64d5acab5e4a6ca2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1531:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=o(127),u=((n=a)&&n.__esModule,o(149)),i=(o(133),o(139));var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=(0,i.getLanguage)(e.mapController.data),r=new u.Zoom({zoomInLabel:" ",zoomOutLabel:" ",zoomInTipLabel:n.CTRL_ZOOM_IN,zoomOutTipLabel:n.CTRL_ZOOM_OUT,target:o.props.target}),a=e.mapController;return a.mapsControls.controls.zoom=r,a.map.addControl(r),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){return null}}]),t}(a.Component);t.default=l}}]);
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[1247],{11247:(e,t,a)=>{var n=a(95318),r=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(34575)),i=n(a(93913)),s=n(a(2205)),l=n(a(78585)),u=n(a(29754)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,a&&a.set(e,n);return n}(a(67294));n(a(73935));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,u.default)(e);if(t){var r=(0,u.default)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,l.default)(this,a)}}var d=c.default.lazy((function(){return Promise.all([a.e(9276),a.e(6753)]).then(a.bind(a,83298))})),h=function(e){(0,s.default)(a,e);var t=p(a);function a(e){var n;return(0,o.default)(this,a),(n=t.call(this,e)).state={initial:!0,showMap:!1},n.myRef=c.default.createRef(),n.mapData=n.props.field.asyncMapData?null:n.props.detail.props.component.mapData,n}return(0,i.default)(a,[{key:"render",value:function(){var e=null,t=this.mapData;if(null!==t){t.mapDiv="c4g_map";var a=this.props.field.geoxField,n=this.props.field.geoyField;if(!this.state.initial){this.props.data[a],this.props.data[n];this.state.showMap&&(e=c.default.createElement(c.Suspense,{fallback:c.default.createElement("div",null,"loading...")},c.default.createElement(d,{mapData:t})));window.c4gMapsHooks=window.c4gMapsHooks||{},window.c4gMapsHooks.hook_layer=window.c4gMapsHooks.hook_layer||[],window.c4gMapsHooks.layer_loaded=window.c4gMapsHooks.layer_loaded||[],window.c4gMapsHooks.layer_loaded.push((function(e){var t=e.mapController.map;setTimeout((function(){t.updateSize(),t.render()}),1e3)}))}}return c.default.createElement("div",{className:"detail-field-map"+(this.props.field.class?" "+this.props.field.class:""),ref:this.myRef},c.default.createElement("div",{id:"c4g_map_"+(null!==t?t.mapId:0),className:"c4g_map"}),e)}},{key:"componentDidMount",value:function(){var e=this;this.state.initial&&(this.props.field.asyncMapData?fetch(this.props.field.asyncMapDataUrl).then((function(e){return e.json()})).then((function(t){e.mapData=t,e.setState({initial:!1})})):this.setState({initial:!1})),this.observer=new IntersectionObserver((function(t){t.forEach((function(t){t.intersectionRatio>0&&(e.observer.unobserve(e.myRef.current),e.setState({showMap:!0}))}))})),this.observer.observe(this.myRef.current)}},{key:"componentWillUnmount",value:function(){this.observer.unobserve(this.myRef.current)}}]),a}(c.Component);t.default=h}}]);
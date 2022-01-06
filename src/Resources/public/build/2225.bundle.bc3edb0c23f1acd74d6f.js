"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[2225],{38312:(e,t,r)=>{var a=r(46147),n=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureFilterItem=void 0;var i=a(r(28110)),u=a(r(20963)),l=a(r(23422)),f=a(r(60560)),s=a(r(42315)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=i?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(a,u,l):a[u]=e[u]}a.default=e,r&&r.set(e,a);return a}(r(3044)),c=r(12200);function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,s.default)(e);if(t){var n=(0,s.default)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,f.default)(this,r)}}var h=function(e){(0,l.default)(r,e);var t=d(r);function r(e){return(0,i.default)(this,r),t.call(this,e)}return(0,u.default)(r,[{key:"render",value:function(){var e=this,t=this;return o.default.createElement("div",{className:"c4g-filter-form-element"},o.default.createElement("label",null,o.default.createElement("input",{type:"radio",onChange:function(r){e.props.filterLayers(t.props.feature.identifier,t.props.parentId,t.props.feature.value,t.props.value.field)},checked:t.props.checked.identifier===t.props.feature.identifier,value:this.props.feature.identifier}),c.utils.decodeHTML(this.props.feature.translation)))}}]),r}(o.Component);t.FeatureFilterItem=h},92764:(e,t,r)=>{var a=r(46147),n=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureFilterList=void 0;var i=a(r(28110)),u=a(r(20963)),l=a(r(23422)),f=a(r(60560)),s=a(r(42315)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=i?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(a,u,l):a[u]=e[u]}a.default=e,r&&r.set(e,a);return a}(r(3044)),c=r(12200),p=r(38312);function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,s.default)(e);if(t){var n=(0,s.default)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,f.default)(this,r)}}var v=function(e){(0,l.default)(r,e);var t=h(r);function r(e){return(0,i.default)(this,r),t.call(this,e)}return(0,u.default)(r,[{key:"render",value:function(){var e=this,t=null,r="";if(this.props.feature.filters.length>2){this.props.open?(r="c4g-open",t=o.default.createElement("form",null,this.props.feature.filters.map((function(t,r){return o.default.createElement(p.FeatureFilterItem,{feature:t,parentId:e.props.id,checked:e.props.checkedItem,filterLayers:e.props.filterLayers,key:r})})))):r="c4g-close",r+=" fi_"+c.utils.removeUmlauts(this.props.feature.name);var a="all"===this.props.checkedItem.identifier?"":"c4g-item-checked";return o.default.createElement("li",{className:a},o.default.createElement("strong",{className:r,onMouseUp:function(t){e.props.setOpen(e.props.id),t.stopPropagation(),t.preventDefault()}},o.default.createElement("span",null),c.utils.decodeHTML(this.props.feature.name)),t)}r=" fi_"+c.utils.removeUmlauts(this.props.feature.name);var n="c4g-item-checked";n+="all"===this.props.checkedItem.identifier?"":" clicked";var i=null;return this.props.feature.image&&(i=o.default.createElement("img",{src:this.props.feature.image,title:this.props.feature.name,width:this.props.feature.width,height:this.props.feature.height})),o.default.createElement("li",{className:n},i,o.default.createElement("strong",{className:r,onMouseUp:function(t){e.props.filterLayers(e.props.feature.filters[1].identifier!==e.props.checkedItem.identifier?e.props.feature.filters[1].identifier:"all",e.props.id,e.props.feature.filters[1].identifier!==e.props.checkedItem.identifier?e.props.feature.filters[1].value:void 0,e.props.feature.filters[1].identifier!==e.props.checkedItem.identifier?e.props.feature.filters[1].field:void 0),t.stopPropagation(),t.preventDefault()}},c.utils.decodeHTML(this.props.feature.name)))}}]),r}(o.Component);t.FeatureFilterList=v},73877:(e,t,r)=>{var a=r(46147),n=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureFilterMultiCheckbox=void 0;var i=a(r(28110)),u=a(r(20963)),l=a(r(23422)),f=a(r(60560)),s=a(r(42315)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=i?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(a,u,l):a[u]=e[u]}a.default=e,r&&r.set(e,a);return a}(r(3044)),c=r(12200),p=r(61476);function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,s.default)(e);if(t){var n=(0,s.default)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,f.default)(this,r)}}var v=function(e){(0,l.default)(r,e);var t=h(r);function r(e){return(0,i.default)(this,r),t.call(this,e)}return(0,u.default)(r,[{key:"render",value:function(){var e,t=this,r=null;if(this.props.feature.filters.length>2){this.props.open?(e="c4g-open",r=o.default.createElement("form",null,this.props.feature.filters.map((function(e,r){var a=!!t.props.checkedItems.find((function(t){return t.identifier===e.identifier&&t.value===e.value}));return o.default.createElement(p.FeatureFilterMultiCheckboxItem,{feature:e,parentId:t.props.id,checked:a,filterLayers:t.props.filterLayers,key:r})})))):e="c4g-close";var a=null;if(this.props.checkedItems.length>0){var n="all"===this.props.checkedItems[0].identifier?this.props.checkedItems.length-1:this.props.checkedItems.length;a=o.default.createElement("span",{className:"sum"}," ",n," ")}e+=" fi_"+c.utils.removeUmlauts(this.props.feature.name);return o.default.createElement("li",{className:"c4g-item-checked"},o.default.createElement("strong",{className:e,onMouseUp:function(e){t.props.setOpen(t.props.id),e.stopPropagation(),e.preventDefault()}},o.default.createElement("span",null),c.utils.decodeHTML(this.props.feature.name)),a,r)}e+=" fi_"+c.utils.removeUmlauts(this.props.feature.name);var i="c4g-item-checked";i+=0===this.props.checkedItems.length?"":" clicked";var u=null;return this.props.feature.image&&(u=o.default.createElement("img",{src:this.props.feature.image,title:this.props.feature.name,width:this.props.feature.width,height:this.props.feature.height})),o.default.createElement("li",{className:i},u,o.default.createElement("strong",{className:e,onMouseUp:function(e){t.props.filterLayers(t.props.feature.filters[1].identifier,t.props.id,!0),e.stopPropagation(),e.preventDefault()}},c.utils.decodeHTML(this.props.feature.name)))}}]),r}(o.Component);t.FeatureFilterMultiCheckbox=v},82225:(e,t,r)=>{var a=r(46147),n=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(r(28110)),u=a(r(20963)),l=a(r(23673)),f=a(r(23422)),s=a(r(60560)),o=a(r(42315)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=i?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(a,u,l):a[u]=e[u]}a.default=e,r&&r.set(e,a);return a}(r(3044)),p=r(92764),d=r(73877),h=(r(16887),r(59828)),v=r(95751),y=a(r(5574));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,o.default)(e);if(t){var n=(0,o.default)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,s.default)(this,r)}}var k=function(e){(0,f.default)(r,e);var t=g(r);function r(e){var a;return(0,i.default)(this,r),(a=t.call(this,e)).filterLayers=a.filterLayers.bind((0,l.default)(a)),a.filterLayersMulti=a.filterLayersMulti.bind((0,l.default)(a)),a.setOpen=a.setOpen.bind((0,l.default)(a)),a.wrapperRef=c.default.createRef(),a.ulRef=c.default.createRef(),a.handleClickOutside=a.handleClickOutside.bind((0,l.default)(a)),a.handleClickInside=a.handleClickInside.bind((0,l.default)(a)),a.filterLayer=a.filterLayer.bind((0,l.default)(a)),a.filterLayerMulti=a.filterLayerMulti.bind((0,l.default)(a)),a.hideFeature=a.hideFeature.bind((0,l.default)(a)),a.hideFeatureMulti=a.hideFeatureMulti.bind((0,l.default)(a)),a.loadFilters(),a.state={filters:[],open:!0,arrChecked:[],openedList:-1},a.features=[],a.langConstants=(0,v.getLanguage)(e.mapController.data),a.props.mapController.filter=(0,l.default)(a),a}return(0,u.default)(r,[{key:"render",value:function(){var e=this,t=this,r=this.state.filters,a=!1,n=document.querySelector(".c4g-feature-filter-list");a=n?!(n.scrollWidth<=n.clientWidth):t.props.target&&!(t.props.target.scrollWidth<=t.props.target.clientWidth);var i=null;if(parseFloat(this.props.mapController.data.filterResetButton)&&(i=c.default.createElement("button",{className:"c4g-feature-filter-reset",onMouseUp:function(t){return e.resetFilter()}},this.langConstants.RESET_FILTER)),parseFloat(this.props.mapController.data.filterHandling)){if(r&&r.length>0){var u=r.map((function(r,a){var n=t.state.arrChecked[a]||[],i=t.state.openedList===a;return c.default.createElement(d.FeatureFilterMultiCheckbox,{feature:r,open:i,setOpen:e.setOpen,checkedItems:n,filterLayers:e.filterLayersMulti,id:a,key:a})}));return a?c.default.createElement("div",{className:"c4g-feature-filter",ref:this.wrapperRef},c.default.createElement("button",{className:"c4g-btn-nav-previous",onMouseUp:function(t){return e.ulRef.current.scrollLeft-=100}}),c.default.createElement("button",{className:"c4g-btn-nav-next",onMouseUp:function(t){return e.ulRef.current.scrollLeft+=100}}),c.default.createElement("ul",{className:"c4g-feature-filter-list c4g-overflowed",onMouseUp:function(t){return e.handleClickInside(t)},ref:this.ulRef},u),i):c.default.createElement("div",{className:"c4g-feature-filter",ref:this.wrapperRef},c.default.createElement("ul",{className:"c4g-feature-filter-list c4g-not-overflowed",onMouseUp:function(t){return e.handleClickInside(t)},ref:this.ulRef},u),i)}}else if(r&&r.length>0){var l=r.map((function(r,a){var n=t.state.arrChecked[a],i=t.state.openedList===a;return c.default.createElement(p.FeatureFilterList,{feature:r,open:i,setOpen:e.setOpen,checkedItem:n,filterLayers:e.filterLayers,id:a,key:a})}));return a?c.default.createElement("div",{className:"c4g-feature-filter",ref:this.wrapperRef},c.default.createElement("button",{className:"c4g-btn-nav-previous",onMouseUp:function(t){return e.ulRef.current.scrollLeft-=100}}),c.default.createElement("button",{className:"c4g-btn-nav-next",onMouseUp:function(t){return e.ulRef.current.scrollLeft+=100}}),c.default.createElement("ul",{className:"c4g-feature-filter-list c4g-overflowed",onMouseUp:function(t){return e.handleClickInside(t)},ref:this.ulRef},l),i):c.default.createElement("div",{className:"c4g-feature-filter",ref:this.wrapperRef},c.default.createElement("ul",{className:"c4g-feature-filter-list c4g-not-overflowed",onMouseUp:function(t){return e.handleClickInside(t)},ref:this.ulRef},l),i)}return c.default.createElement("div",null)}},{key:"filterLayers",value:function(e,t,r){var a=this,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=this.state.arrChecked;i[t]={identifier:e,value:r,field:n},this.setState({arrChecked:i},(function(){a.props.mapController.map.getLayers().getArray().map((function(e,t){a.filterLayer(e)}));for(var e=0;e<a.features.length;e++){if(a.features.hasOwnProperty(e))a.showFeature(a.features[e],e)&&e--}}))}},{key:"filterLayersMulti",value:function(e,t,r){var a=this,n=this.state.arrChecked,i=n[t],u=i.find((function(t){return t.identifier===e&&t.value===r}));if(u)if("all"===e)i=[];else{var l=i.indexOf(u);l>-1&&i.splice(l,1)}else"all"===e?i=JSON.parse(JSON.stringify(this.state.filters[t].filters)):i.push({identifier:e,value:r});n[t]=i,this.setState({arrChecked:n},(function(){a.props.mapController.map.getLayers().getArray().map((function(e,t){a.filterLayerMulti(e)}));for(var e=0;e<a.features.length;e++){if(a.features.hasOwnProperty(e))a.showFeatureMulti(a.features[e],e)&&e--}}))}},{key:"setOpen",value:function(e){this.state.openedList===e?this.setState({openedList:-1}):this.setState({openedList:e})}},{key:"resetFilter",value:function(){var e=this,t=[];for(var r in this.state.arrChecked)this.state.arrChecked.hasOwnProperty(r)&&t.push([]);this.setState({arrChecked:t},(function(){for(var t=0;t<e.features.length;t++){if(e.features.hasOwnProperty(t))e.resetFeature(e.features[t],t)&&t--}}))}},{key:"filterLayer",value:function(e){var t=this;if(e.getLayers&&"function"==typeof e.getLayers)e.getLayers().getArray().map((function(e,r){t.filterLayer(e)}));else if(e.getStyle&&"function"==typeof e.getSource){var r=e.getSource()instanceof h.Cluster?e.getSource().getSource():e.getSource();r.forEachFeature((function(e){return t.hideFeature(e,r)}))}}},{key:"filterLayerMulti",value:function(e){var t=this;if(e.getLayers&&"function"==typeof e.getLayers)e.getLayers().getArray().map((function(e,r){t.filterLayerMulti(e)}));else if(e.getStyle&&"function"==typeof e.getSource){var r=e.getSource()instanceof h.Cluster?e.getSource().getSource():e.getSource();r.forEachFeature((function(e){return t.hideFeatureMulti(e,r)}))}}},{key:"checkFeature",value:function(e,t){var r=t.identifier;if("opening_hours"!==t.value||!e.get(t.field||"opening_hours"))return!!("all"===r||e.get(r)&&!t.value||t.value==e.get(r)&&t.value);try{return new y.default(e.get(t.field||"opening_hours"),{address:{country_code:"de"}}).getState()}catch(e){return console.warn(e),!1}}},{key:"checkFeatureMulti",value:function(e,t){}},{key:"hideFeature",value:function(e,t){var r=this;if(e.get("features")){e.get("features").forEach((function(e){return r.hideFeature(e,t)}))}else{if(e.get("noFilter"))return;var a=!0;for(var n in this.state.arrChecked)this.state.arrChecked.hasOwnProperty(n)&&a&&(a=this.checkFeature(e,this.state.arrChecked[n]));a||(e.set("source",t),this.features.push(e),t.removeFeature(e))}}},{key:"hideFeatureMulti",value:function(e,t){var r=this;if(e.get("features")){e.get("features").forEach((function(e){return r.hideFeatureMulti(e,t)}))}else{if(e.get("noFilter"))return;var a=!1,n=!1;for(var i in this.state.arrChecked)if(this.state.arrChecked.hasOwnProperty(i)){var u=this.state.arrChecked[i];for(var l in u)if(u.hasOwnProperty(l)){n=!0;var f=u[l],s=f.identifier;if(e.get(s)){var o=e.get(s);(f.value&&f.value===o||!f.value)&&(a=!0)}}}!a&&n&&(e.set("source",t),this.features.push(e),t.removeFeature(e))}}},{key:"showFeature",value:function(e,t){var r=!0;for(var a in this.state.arrChecked)this.state.arrChecked.hasOwnProperty(a)&&r&&(r=this.checkFeature(e,this.state.arrChecked[a]));if(r){var n=e.get("source");return e.set("source",!1),n.addFeature(e),this.features.splice(t,1),!0}return!1}},{key:"resetFeature",value:function(e,t){var r=e.get("source");return e.set("source",!1),r.addFeature(e),this.features.splice(t,1),!0}},{key:"showFeatureMulti",value:function(e,t){var r=!1,a=!1;for(var n in this.state.arrChecked)if(this.state.arrChecked.hasOwnProperty(n)){var i=this.state.arrChecked[n];for(var u in i)if(i.hasOwnProperty(u)){a=!0;var l=i[u],f=l.identifier;if(e.get(f)){var s=e.get(f);(l.value&&l.value===s||!l.value)&&(r=!0)}}}if(r||!a){var o=e.get("source");return e.set("source",!1),o.addFeature(e),this.features.splice(t,1),!0}return!1}},{key:"loadFilters",value:function(){var e=this,t=this.props.mapController.data.api.filter+this.props.mapController.data.id+"/"+this.props.mapController.data.lang;fetch(t).then((function(t){return t.json().then((function(t){for(var r=[],a=0;a<t.length;a++)parseFloat(e.props.mapController.data.filterHandling)?r.push([]):r.push({identifier:"all"});e.setState({filters:t,arrChecked:r})}))}))}},{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"handleClickOutside",value:function(e){this.wrapperRef&&this.wrapperRef.current&&!this.wrapperRef.current.contains(e.target)&&this.setState({openedList:-1})}},{key:"handleClickInside",value:function(e){e.nativeEvent.path[0]===e.currentTarget&&this.setState({openedList:-1})}}]),r}(c.Component);t.default=k},61476:(e,t,r)=>{var a=r(46147),n=r(78344);Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureFilterMultiCheckboxItem=void 0;var i=a(r(28110)),u=a(r(20963)),l=a(r(23422)),f=a(r(60560)),s=a(r(42315)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=i?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(a,u,l):a[u]=e[u]}a.default=e,r&&r.set(e,a);return a}(r(3044)),c=r(12200);function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,s.default)(e);if(t){var n=(0,s.default)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,f.default)(this,r)}}var h=function(e){(0,l.default)(r,e);var t=d(r);function r(e){return(0,i.default)(this,r),t.call(this,e)}return(0,u.default)(r,[{key:"render",value:function(){var e=this;return o.default.createElement("div",{className:"c4g-filter-form-element"},o.default.createElement("label",null,o.default.createElement("input",{type:"checkbox",checked:this.props.checked,onChange:function(e){e.stopPropagation()},onClick:function(t){e.props.filterLayers(e.props.feature.identifier,e.props.parentId,e.props.feature.value)},value:this.props.feature.identifier}),c.utils.decodeHTML(this.props.feature.translation)))}}]),r}(o.Component);t.FeatureFilterMultiCheckboxItem=h}}]);
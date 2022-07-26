/*! For license information please see 6470.bundle.d4a09e10f6b024ab3d18.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[6470],{82947:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.calculateDistance=function(e,t){var a=parseFloat(t[0]),n=parseFloat(e[0]),o=parseFloat(t[1]),r=parseFloat(e[1]),i=r*Math.PI/180,s=o*Math.PI/180,l=(o-r)*Math.PI/180,c=(a-n)*Math.PI/180,p=Math.sin(l/2)*Math.sin(l/2)+Math.cos(i)*Math.cos(s)*Math.sin(c/2)*Math.sin(c/2),d=2*Math.atan2(Math.sqrt(p),Math.sqrt(1-p));return 6371e3*d},t.formatDistance=function(e){if(!e)return e;var t="m";e>1e3&&(e/=1e3,t="km");return(e=e.toFixed(2)).toString()+t},t.geolocationActive=function(){return!!navigator.geolocation},t.getGeolocation=function(e){if(!navigator.geolocation)return!1;navigator.geolocation.getCurrentPosition(e)}},16470:(e,t,a)=>{var n=a(64836),o=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(18698)),i=n(a(56690)),s=n(a(89728)),l=n(a(66115)),c=n(a(61655)),p=n(a(94993)),d=n(a(73808)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var a=h(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,a&&a.set(e,n);return n}(a(67294)),f=a(82947);function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(h=function(e){return e?a:t})(e)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,d.default)(e);if(t){var o=(0,d.default)(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return(0,p.default)(this,a)}}var v=u.default.lazy((function(){return a.e(1821).then(a.bind(a,41821))})),g=u.default.lazy((function(){return a.e(1759).then(a.bind(a,91759))})),y=u.default.lazy((function(){return a.e(8533).then(a.bind(a,58533))})),k=function(e){(0,c.default)(a,e);var t=m(a);function a(e){var n;return(0,i.default)(this,a),(n=t.call(this,e)).state={asyncLoading:""!==e.component.asyncUrl,filterWasReset:!1,textFilterContent:""},n.asyncUrl=n.props.component.asyncUrl,n.positionActive=!1,n.position=[],e.data&&e.data.length>0&&(n.checkPosition(),n.positionActive&&n.addDistances(e.data)),n.fetchMoreData=n.fetchMoreData.bind((0,l.default)(n)),n.applyTextFilter=n.applyTextFilter.bind((0,l.default)(n)),n}return(0,s.default)(a,[{key:"render",value:function(){var e=this,t=null;if(this.props.component.headline&&this.props.component.headlineLevel)switch(this.props.component.headlineLevel){case 1:t=u.default.createElement("h1",{className:"c4g-tile-headline"},this.props.component.headline);break;case 2:t=u.default.createElement("h2",{className:"c4g-tile-headline"},this.props.component.headline);break;case 3:t=u.default.createElement("h3",{className:"c4g-tile-headline"},this.props.component.headline);break;case 4:t=u.default.createElement("h4",{className:"c4g-tile-headline"},this.props.component.headline);break;case 5:t=u.default.createElement("h5",{className:"c4g-tile-headline"},this.props.component.headline);break;case 6:t=u.default.createElement("h6",{className:"c4g-tile-headline"},this.props.component.headline)}var a=null;if(this.props.component.withTextFilter&&(a=u.default.createElement("div",{className:"detail-view__list-filter-wrapper"},u.default.createElement("input",{className:"detail-view__list-filter-input",type:"text",placeholder:"Suchbegriff eingeben",onInput:this.applyTextFilter,defaultValue:this.state.textFilterContent}))),0===this.props.data.length){if(!this.props.updated&&this.props.textBeforeUpdate)return u.default.createElement("div",{className:"container"},u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-md-12"},u.default.createElement("div",{className:"alert alert-dark",role:"alert"},this.props.textBeforeUpdate))));if(this.props.updated&&this.props.textAfterUpdate)return u.default.createElement("div",{className:"container"},u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-md-12"},u.default.createElement("div",{className:"alert alert-dark",role:"alert"},this.props.textAfterUpdate))))}var n=this.props.component.className;this.props.filterChanged&&this.props.component.classAfterFilter&&(n=this.props.component.classAfterFilter),this.state.filterWasReset&&(n=this.props.component.className);var o={dataLength:this.props.data.length,next:this.fetchMoreData,hasMore:this.state.asyncLoading,loader:this.props.showSpinner?u.default.createElement("div",{className:"preloader-image-wrapper",style:{textAlign:"center",margin:"auto"}},this.props.component.loadingText||u.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""})):null,className:n,scrollThreshold:this.props.component.scrollThreshold};if("carousel"===this.props.component.layoutType)return u.default.createElement(u.Suspense,{fallback:u.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},u.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""}))},u.default.createElement(y,o,u.default.createElement("div",{className:"container c4g-container"},u.default.createElement("div",{className:"slider explorer owl-wrapper c4g-carousel-wrapper"},u.default.createElement("div",{className:"owl-carousel owl-theme c4g-carousel-theme"},this.props.data.map((function(t,a){var n=e.props.component.tileClass;return e.props.component.conditionalTileClassName&&e.props.component.conditionalTileClassField&&void 0!==t[e.props.component.conditionalTileClassField]&&t[e.props.component.conditionalTileClassField]===e.props.component.conditionalTileClassValue&&(n+=" "+e.props.component.conditionalTileClassName),u.default.createElement(v,{className:n,dataEntry:t,key:a,fields:e.props.fields,conditionalClasses:e.props.component.conditionalClasses})})))))));var r=u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{className:"c4g-tile-headline-wrapper"},t),a,u.default.createElement(u.Suspense,{fallback:u.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},u.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""}))},u.default.createElement(y,o,u.default.createElement("div",{className:"c4g-list-elements"},this.props.data.map((function(t,a){var n=e.props.component.tileClass;return e.props.component.conditionalTileClassName&&e.props.component.conditionalTileClassField&&void 0!==t[e.props.component.conditionalTileClassField]&&t[e.props.component.conditionalTileClassField]===e.props.component.conditionalTileClassValue&&(n+=" "+e.props.component.conditionalTileClassName),u.default.createElement(g,{className:n,dataEntry:t,key:a,fields:e.props.fields,conditionalClasses:e.props.component.conditionalClasses,list:e})}))))));return this.props.component.listWrapper?u.default.createElement("div",{id:this.props.component.wrapperId,className:this.props.component.wrapperClass},r):r}},{key:"componentDidUpdate",value:function(e,t,a){var n=!1,o=this.props.component.filterData,i=e.component.filterData,s=this.checkIfFilterWasReset(i,o);void 0===i&&void 0!==o?n=!0:"object"===(0,r.default)(o)&&null!==o?Object.keys(o).forEach((function(e,t){if(!1===n&&void 0!==e&&o[e]!==i[e])if(Array.isArray(o[e])&&0===o[e].length&&Array.isArray(i[e])&&0===i[e].length);else if(Array.isArray(o[e])&&Array.isArray(i[e]))if(o[e].length===i[e].length){for(var a=0;a<o[e].length;a++)if(o[e][a]!==i[e][a]){n=!0;break}}else n=!0;else n=!0}),this):"object"===(0,r.default)(i)&&null!==i&&Object.keys(i).forEach((function(e,t){!1===n&&void 0!==e&&o[e]!==i[e]&&(n=!0)}),this),this.props.component.checkAsyncWhileUpdate&&void 0!==this.props.component.asyncLoading&&null!==this.props.component.asyncLoading&&this.props.component.asyncLoading!==this.state.asyncLoading&&this.setState({asyncLoading:this.props.component.asyncLoading,filterWasReset:s}),!0===n&&!0===this.state.asyncLoading&&this.fetchMoreData()}},{key:"checkIfFilterWasReset",value:function(e,t){if(e&&!t)return!0;if(!e)return!1;var a=["moduleId","randKey"],n=!1;for(var o in e)e.hasOwnProperty(o)&&(Array.isArray(e[o])?e[o].length>0&&(n=!0):e[o]&&(n=!0));var r={},i=!0;for(var s in t)if(t.hasOwnProperty(s)){if("sorting"===s&&"random"===t[s])continue;if(a.includes(s))continue;Array.isArray(t[s])?r[s]=0===t[s].length:r[s]=!t[s]}for(var l in r)if(r.hasOwnProperty(l)&&!r[l]){i=!1;break}return i&&n}},{key:"checkPosition",value:function(){var e=this.props.fields,t=!1;for(var a in e)if(e.hasOwnProperty(a)&&"distance"===e[a].type){t=!0,this.geoxFieldname=e[a].geox,this.geoyFieldname=e[a].geoy,this.distanceFieldname=e[a].name;break}this.positionActive=t&&(0,f.geolocationActive)()}},{key:"fetchMoreData",value:function(){var e,t=this;if(this.props.component.onlySearchWithParam){var a=this.props.component.filterData[this.props.component.onlySearchWithParam];e=a&&""!==a}else e=!0;if(e){this.setState({asyncLoading:!1});var n=this.asyncUrl.replace("{offset}",this.props.data.length);if(n=new URL(n,window.location.protocol+window.location.hostname),void 0!==this.props.component.filterData&&0!==Object.keys(this.props.component.filterData).length){var o=this.props.component.filterData;if("distance"===(o=this.transformSelectOptions(o)).sorting){if(this.positionActive&&this.position)o.pos=this.position;else if(this.checkPosition(),this.positionActive){return void(0,f.getGeolocation)((function(e){t.position=[e.coords.longitude,e.coords.latitude],t.fetchMoreData()}))}n.search=new URLSearchParams(o).toString()}else n.search=new URLSearchParams(o).toString()}fetch(n.href).then((function(e){return e.json()})).then((function(e){if(0===e.length)t.props.component.asyncLoading=!1,t.setState({asyncLoading:!1}),t.props.setFunction(t.props.name,t.props.component.data,t.props.component.filterData);else{t.props.component.uniqueField&&(e=t.removeDuplicates(t.props.component.data,e));var a=t.props.data.concat(e);if(!t.state.asyncLoading){var n=parseInt(t.props.component.maxData,10),o=parseInt(t.props.component.loadStep,10),r=!1,i=n>0&&a.length===n,s=o===e.length;i?r=!1:s&&(r=!0),t.setState({asyncLoading:r})}t.props.updateFunction(t.props.name,a)}}))}}},{key:"transformSelectOptions",value:function(e){var t={};for(var a in e)if(e.hasOwnProperty(a)){var n=e[a];if(n&&n.length&&n.length>0&&n[0].value){for(var o=[],r=0;r<n.length;r++)o.push(n[r].value);n=o}t[a]=n}return t}},{key:"addDistances",value:function(e){var t=this;(0,f.getGeolocation)((function(a){t.position=[a.coords.longitude,a.coords.latitude],e.forEach((function(e,a){e[t.distanceFieldname]=(0,f.formatDistance)((0,f.calculateDistance)(t.position,[e[t.geoxFieldname],e[t.geoyFieldname]]))})),t.props.updateFunction(t.props.name,e)}))}},{key:"removeDuplicates",value:function(e,t){var a=this.props.component.uniqueField,n=e.map((function(e,t){return e[a]})),o=[];return t.forEach((function(e,t){!n.includes(e[a])&&o.push(e)})),o}},{key:"applyTextFilter",value:function(e){var t=e.target.value,a=this.initialData,n=this.props.component.textFilterFields,o=[];a.forEach((function(e,a,r){for(var i in n){if(n.hasOwnProperty(i))if(-1!==e[n[i]].toUpperCase().indexOf(t.toUpperCase())){o.includes(e)||o.push(e);break}}})),this.setState({textFilterContent:t}),this.props.setFunction(this.props.name,o,[])}},{key:"componentDidMount",value:function(){this.props.component.withTextFilter&&(this.initialData=JSON.parse(JSON.stringify(this.props.data)))}}]),a}(u.Component);t.default=k}}]);
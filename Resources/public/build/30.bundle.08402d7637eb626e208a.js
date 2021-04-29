/*! For license information please see 30.bundle.08402d7637eb626e208a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1380:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=v(r(1381)),i=v(r(119)),n=v(r(115)),s=v(r(116)),u=v(r(120)),l=v(r(121)),o=r(123),f=v(o),c=r(1383),d=r(1385),p=(r(217),r(190)),h=r(143),m=v(r(1387));function v(e){return e&&e.__esModule?e:{default:e}}var g=function(e){function t(e){(0,n.default)(this,t);var r=(0,u.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return r.filterLayers=r.filterLayers.bind(r),r.filterLayersMulti=r.filterLayersMulti.bind(r),r.setOpen=r.setOpen.bind(r),r.wrapperRef=f.default.createRef(),r.ulRef=f.default.createRef(),r.handleClickOutside=r.handleClickOutside.bind(r),r.handleClickInside=r.handleClickInside.bind(r),r.filterLayer=r.filterLayer.bind(r),r.filterLayerMulti=r.filterLayerMulti.bind(r),r.hideFeature=r.hideFeature.bind(r),r.hideFeatureMulti=r.hideFeatureMulti.bind(r),r.loadFilters(),r.state={filters:[],open:!0,arrChecked:[],openedList:-1},r.features=[],r.langConstants=(0,h.getLanguage)(e.mapController.data),r.props.mapController.filter=r,r}return(0,l.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this,t=this,r=this.state.filters,a=!1,i=document.querySelector(".c4g-feature-filter-list");a=i?!(i.scrollWidth<=i.clientWidth):t.props.target&&!(t.props.target.scrollWidth<=t.props.target.clientWidth);var n=null;if(parseFloat(this.props.mapController.data.filterResetButton)&&(n=f.default.createElement("button",{className:"c4g-feature-filter-reset",onMouseUp:function(t){return e.resetFilter()}},this.langConstants.RESET_FILTER)),parseFloat(this.props.mapController.data.filterHandling)){if(r&&r.length>0){var s=r.map((function(r,a){var i=t.state.arrChecked[a]||[],n=t.state.openedList===a;return f.default.createElement(d.FeatureFilterMultiCheckbox,{feature:r,open:n,setOpen:e.setOpen,checkedItems:i,filterLayers:e.filterLayersMulti,id:a,key:a})}));return a?f.default.createElement("div",{className:"c4g-feature-filter",ref:this.wrapperRef},f.default.createElement("button",{className:"c4g-btn-nav-previous",onMouseUp:function(t){return e.ulRef.current.scrollLeft-=100}}),f.default.createElement("button",{className:"c4g-btn-nav-next",onMouseUp:function(t){return e.ulRef.current.scrollLeft+=100}}),f.default.createElement("ul",{className:"c4g-feature-filter-list c4g-overflowed",onMouseUp:function(t){return e.handleClickInside(t)},ref:this.ulRef},s),n):f.default.createElement("div",{className:"c4g-feature-filter",ref:this.wrapperRef},f.default.createElement("ul",{className:"c4g-feature-filter-list c4g-not-overflowed",onMouseUp:function(t){return e.handleClickInside(t)},ref:this.ulRef},s),n)}}else if(r&&r.length>0){var u=r.map((function(r,a){var i=t.state.arrChecked[a],n=t.state.openedList===a;return f.default.createElement(c.FeatureFilterList,{feature:r,open:n,setOpen:e.setOpen,checkedItem:i,filterLayers:e.filterLayers,id:a,key:a})}));return a?f.default.createElement("div",{className:"c4g-feature-filter",ref:this.wrapperRef},f.default.createElement("button",{className:"c4g-btn-nav-previous",onMouseUp:function(t){return e.ulRef.current.scrollLeft-=100}}),f.default.createElement("button",{className:"c4g-btn-nav-next",onMouseUp:function(t){return e.ulRef.current.scrollLeft+=100}}),f.default.createElement("ul",{className:"c4g-feature-filter-list c4g-overflowed",onMouseUp:function(t){return e.handleClickInside(t)},ref:this.ulRef},u),n):f.default.createElement("div",{className:"c4g-feature-filter",ref:this.wrapperRef},f.default.createElement("ul",{className:"c4g-feature-filter-list c4g-not-overflowed",onMouseUp:function(t){return e.handleClickInside(t)},ref:this.ulRef},u),n)}return f.default.createElement("div",null)}},{key:"filterLayers",value:function(e,t,r){var a=this,i=this.state.arrChecked;i[t]={identifier:e,value:r},this.setState({arrChecked:i},(function(){a.props.mapController.map.getLayers().getArray().map((function(e,t){a.filterLayer(e)}));for(var e=0;e<a.features.length;e++){if(a.features.hasOwnProperty(e))a.showFeature(a.features[e],e)&&e--}}))}},{key:"filterLayersMulti",value:function(e,t,r){var i=this,n=this.state.arrChecked,s=n[t],u=s.find((function(t){return t.identifier===e&&t.value===r}));if(u)if("all"===e)s=[];else{var l=s.indexOf(u);l>-1&&s.splice(l,1)}else"all"===e?s=JSON.parse((0,a.default)(this.state.filters[t].filters)):s.push({identifier:e,value:r});n[t]=s,this.setState({arrChecked:n},(function(){i.props.mapController.map.getLayers().getArray().map((function(e,t){i.filterLayerMulti(e)}));for(var e=0;e<i.features.length;e++){if(i.features.hasOwnProperty(e))i.showFeatureMulti(i.features[e],e)&&e--}}))}},{key:"setOpen",value:function(e){this.state.openedList===e?this.setState({openedList:-1}):this.setState({openedList:e})}},{key:"resetFilter",value:function(){var e=this,t=[];for(var r in this.state.arrChecked)this.state.arrChecked.hasOwnProperty(r)&&t.push([]);this.setState({arrChecked:t},(function(){for(var t=0;t<e.features.length;t++){if(e.features.hasOwnProperty(t))e.resetFeature(e.features[t],t)&&t--}}))}},{key:"filterLayer",value:function(e){var t=this;if(e.getLayers&&"function"==typeof e.getLayers)e.getLayers().getArray().map((function(e,r){t.filterLayer(e)}));else if(e.getStyle&&"function"==typeof e.getSource){var r=e.getSource()instanceof p.Cluster?e.getSource().getSource():e.getSource();r.forEachFeature((function(e){return t.hideFeature(e,r)}))}}},{key:"filterLayerMulti",value:function(e){var t=this;if(e.getLayers&&"function"==typeof e.getLayers)e.getLayers().getArray().map((function(e,r){t.filterLayerMulti(e)}));else if(e.getStyle&&"function"==typeof e.getSource){var r=e.getSource()instanceof p.Cluster?e.getSource().getSource():e.getSource();r.forEachFeature((function(e){return t.hideFeatureMulti(e,r)}))}}},{key:"checkFeature",value:function(e,t){var r=t.identifier;return"opening_hours"===t.value&&e.get("opening_hours")?new m.default(e.get("opening_hours"),{address:{country_code:"de"}}).getState():!!("all"===r||e.get(r)&&!t.value||t.value==e.get(r)&&t.value)}},{key:"checkFeatureMulti",value:function(e,t){}},{key:"hideFeature",value:function(e,t){var r=this;if(e.get("features")){e.get("features").forEach((function(e){return r.hideFeature(e,t)}))}else{if(e.get("noFilter"))return;var a=!0;for(var i in this.state.arrChecked)this.state.arrChecked.hasOwnProperty(i)&&a&&(a=this.checkFeature(e,this.state.arrChecked[i]));a||(e.set("source",t),this.features.push(e),t.removeFeature(e))}}},{key:"hideFeatureMulti",value:function(e,t){var r=this;if(e.get("features")){e.get("features").forEach((function(e){return r.hideFeatureMulti(e,t)}))}else{if(e.get("noFilter"))return;var a=!1,i=!1;for(var n in this.state.arrChecked)if(this.state.arrChecked.hasOwnProperty(n)){var s=this.state.arrChecked[n];for(var u in s)if(s.hasOwnProperty(u)){i=!0;var l=s[u],o=l.identifier;if(e.get(o)){var f=e.get(o);(l.value&&l.value===f||!l.value)&&(a=!0)}}}!a&&i&&(e.set("source",t),this.features.push(e),t.removeFeature(e))}}},{key:"showFeature",value:function(e,t){var r=!0;for(var a in this.state.arrChecked)this.state.arrChecked.hasOwnProperty(a)&&r&&(r=this.checkFeature(e,this.state.arrChecked[a]));if(r){var i=e.get("source");return e.set("source",!1),i.addFeature(e),this.features.splice(t,1),!0}return!1}},{key:"resetFeature",value:function(e,t){var r=e.get("source");return e.set("source",!1),r.addFeature(e),this.features.splice(t,1),!0}},{key:"showFeatureMulti",value:function(e,t){var r=!1,a=!1;for(var i in this.state.arrChecked)if(this.state.arrChecked.hasOwnProperty(i)){var n=this.state.arrChecked[i];for(var s in n)if(n.hasOwnProperty(s)){a=!0;var u=n[s],l=u.identifier;if(e.get(l)){var o=e.get(l);(u.value&&u.value===o||!u.value)&&(r=!0)}}}if(r||!a){var f=e.get("source");return e.set("source",!1),f.addFeature(e),this.features.splice(t,1),!0}return!1}},{key:"loadFilters",value:function(){var e=this,t=this.props.mapController.data.api.filter+this.props.mapController.data.id+"/"+this.props.mapController.data.lang;fetch(t).then((function(t){return t.json().then((function(t){for(var r=[],a=0;a<t.length;a++)parseFloat(e.props.mapController.data.filterHandling)?r.push([]):r.push({identifier:"all"});e.setState({filters:t,arrChecked:r})}))}))}},{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"handleClickOutside",value:function(e){this.wrapperRef&&this.wrapperRef.current&&!this.wrapperRef.current.contains(e.target)&&this.setState({openedList:-1})}},{key:"handleClickInside",value:function(e){e.nativeEvent.path[0]===e.currentTarget&&this.setState({openedList:-1})}}]),t}(o.Component);t.default=g},1383:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureFilterList=void 0;var a=d(r(119)),i=d(r(115)),n=d(r(116)),s=d(r(120)),u=d(r(121)),l=r(123),o=d(l),f=r(137),c=r(1384);function d(e){return e&&e.__esModule?e:{default:e}}t.FeatureFilterList=function(e){function t(e){return(0,i.default)(this,t),(0,s.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,u.default)(t,e),(0,n.default)(t,[{key:"render",value:function(){var e=this,t=null,r="";if(this.props.feature.filters.length>2){this.props.open?(r="c4g-open",t=o.default.createElement("form",null,this.props.feature.filters.map((function(t,r){return o.default.createElement(c.FeatureFilterItem,{feature:t,parentId:e.props.id,checked:e.props.checkedItem,filterLayers:e.props.filterLayers,key:r})})))):r="c4g-close",r+=" fi_"+f.utils.removeUmlauts(this.props.feature.name);var a="all"===this.props.checkedItem.identifier?"":"c4g-item-checked";return o.default.createElement("li",{className:a},o.default.createElement("strong",{className:r,onMouseUp:function(t){e.props.setOpen(e.props.id),t.stopPropagation(),t.preventDefault()}},o.default.createElement("span",null),f.utils.decodeHTML(this.props.feature.name)),t)}r=" fi_"+f.utils.removeUmlauts(this.props.feature.name);var i="c4g-item-checked";return i+="all"===this.props.checkedItem.identifier?"":" clicked",o.default.createElement("li",{className:i},o.default.createElement("img",{src:this.props.feature.image}),o.default.createElement("strong",{className:r,onMouseUp:function(t){e.props.filterLayers(e.props.feature.filters[1].identifier!==e.props.checkedItem.identifier?e.props.feature.filters[1].identifier:"all",e.props.id,e.props.feature.filters[1].identifier!==e.props.checkedItem.identifier?e.props.feature.filters[1].value:void 0),t.stopPropagation(),t.preventDefault()}},f.utils.decodeHTML(this.props.feature.name)))}}]),t}(l.Component)},1384:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureFilterItem=void 0;var a=c(r(119)),i=c(r(115)),n=c(r(116)),s=c(r(120)),u=c(r(121)),l=r(123),o=c(l),f=r(137);function c(e){return e&&e.__esModule?e:{default:e}}t.FeatureFilterItem=function(e){function t(e){return(0,i.default)(this,t),(0,s.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,u.default)(t,e),(0,n.default)(t,[{key:"render",value:function(){var e=this,t=this;return o.default.createElement("div",{className:"c4g-filter-form-element"},o.default.createElement("label",null,o.default.createElement("input",{type:"radio",onChange:function(r){e.props.filterLayers(t.props.feature.identifier,t.props.parentId,t.props.feature.value)},checked:t.props.checked.identifier===t.props.feature.identifier,value:this.props.feature.identifier}),f.utils.decodeHTML(this.props.feature.translation)))}}]),t}(l.Component)},1385:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureFilterMultiCheckbox=void 0;var a=d(r(119)),i=d(r(115)),n=d(r(116)),s=d(r(120)),u=d(r(121)),l=r(123),o=d(l),f=r(137),c=r(1386);function d(e){return e&&e.__esModule?e:{default:e}}t.FeatureFilterMultiCheckbox=function(e){function t(e){return(0,i.default)(this,t),(0,s.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,u.default)(t,e),(0,n.default)(t,[{key:"render",value:function(){var e=this,t=null,r=void 0;if(this.props.feature.filters.length>2){this.props.open?(r="c4g-open",t=o.default.createElement("form",null,this.props.feature.filters.map((function(t,r){var a=!!e.props.checkedItems.find((function(e){return e.identifier===t.identifier&&e.value===t.value}));return o.default.createElement(c.FeatureFilterMultiCheckboxItem,{feature:t,parentId:e.props.id,checked:a,filterLayers:e.props.filterLayers,key:r})})))):r="c4g-close";var a=null;if(this.props.checkedItems.length>0){var i="all"===this.props.checkedItems[0].identifier?this.props.checkedItems.length-1:this.props.checkedItems.length;a=o.default.createElement("span",{className:"sum"}," ",i," ")}r+=" fi_"+f.utils.removeUmlauts(this.props.feature.name);return o.default.createElement("li",{className:"c4g-item-checked"},o.default.createElement("strong",{className:r,onMouseUp:function(t){e.props.setOpen(e.props.id),t.stopPropagation(),t.preventDefault()}},o.default.createElement("span",null),f.utils.decodeHTML(this.props.feature.name)),a,t)}r+=" fi_"+f.utils.removeUmlauts(this.props.feature.name);var n="c4g-item-checked";return n+=0===this.props.checkedItems.length?"":" clicked",o.default.createElement("li",{className:n},o.default.createElement("img",{src:this.props.feature.image}),o.default.createElement("strong",{className:r,onMouseUp:function(t){e.props.filterLayers(e.props.feature.filters[1].identifier,e.props.id,!0),t.stopPropagation(),t.preventDefault()}},f.utils.decodeHTML(this.props.feature.name)))}}]),t}(l.Component)},1386:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureFilterMultiCheckboxItem=void 0;var a=c(r(119)),i=c(r(115)),n=c(r(116)),s=c(r(120)),u=c(r(121)),l=r(123),o=c(l),f=r(137);function c(e){return e&&e.__esModule?e:{default:e}}t.FeatureFilterMultiCheckboxItem=function(e){function t(e){return(0,i.default)(this,t),(0,s.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,u.default)(t,e),(0,n.default)(t,[{key:"render",value:function(){var e=this;return o.default.createElement("div",{className:"c4g-filter-form-element"},o.default.createElement("label",null,o.default.createElement("input",{type:"checkbox",checked:this.props.checked,onChange:function(e){e.stopPropagation()},onClick:function(t){e.props.filterLayers(e.props.feature.identifier,e.props.parentId,e.props.feature.value)},value:this.props.feature.identifier}),f.utils.decodeHTML(this.props.feature.translation)))}}]),t}(l.Component)}}]);
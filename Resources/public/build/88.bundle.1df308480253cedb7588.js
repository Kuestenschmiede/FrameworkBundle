/*! For license information please see 88.bundle.1df308480253cedb7588.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1551:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=d(t(45)),a=d(t(46)),r=d(t(47)),l=d(t(48)),o=d(t(49)),n=t(17),p=d(n);function d(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function i(e){(0,a.default)(this,i);var t=(0,l.default)(this,(i.__proto__||(0,s.default)(i)).call(this,e));return t.hasValidExternalLink=t.hasValidExternalLink.bind(t),t.executeAsyncCall=t.executeAsyncCall.bind(t),t}return(0,o.default)(i,e),(0,r.default)(i,[{key:"hasValidExternalLink",value:function(){if(!this.props.field.externalLinkField)return!1;try{var e=!1;if(this.props.field.externalLinkFieldConditionField.length===this.props.field.externalLinkFieldConditionValue.length)return this.props.field.externalLinkFieldConditionField.forEach((function(i,t){String(this.props.data[i])===String(this.props.field.externalLinkFieldConditionValue[t])&&(e=!0)}),this),e}catch(e){return!1}}},{key:"render",value:function(){var e=this;if(this.props.field.href&&this.props.field.linkText){if(this.props.field.conditionField.length===this.props.field.conditionValue.length){var i=!0;if(this.props.field.conditionField.forEach((function(e,t){String(this.props.data[e])!==String(this.props.field.conditionValue[t])&&(i=!1)}),this),!i)return null}var t=null;this.props.field.label&&(t=p.default.createElement("span",{className:"entry-label"},this.props.field.label));var s=this.props.field.href;this.hasValidExternalLink()?s=this.props.data[this.props.field.externalLinkField]:this.props.field.hrefFields&&this.props.field.hrefFields.map((function(i,t){s=s.replace(i,e.props.data[i])}));if(this.props.field.conditionalClasses)for(var a in this.props.field.conditionalClasses)this.props.field.conditionalClasses.hasOwnProperty(a)&&this.props.data[a]&&"0"!==this.props.data[a]&&this.props.field.conditionalClasses[a]+" ";var r=null,l=this.props.field.class;if(this.props.field.asyncCall)if(this.props.field.addDataAttributes){var o="";this.props.data.imageList?o=this.props.data.imageList.src:this.props.data.image&&(o=this.props.data.image.src),r=p.default.createElement("a",{className:l,"data-image":o,"data-name":this.props.data.name,"data-moreurl":s,onClick:function(i){i.preventDefault(),e.executeAsyncCall(s)},href:"#",rel:"noreferrer noopener"},this.props.field.linkText)}else r=p.default.createElement("a",{className:l,onClick:function(i){i.preventDefault(),e.executeAsyncCall(s)},href:"#",rel:"noreferrer noopener"},this.props.field.linkText);else r=p.default.createElement("a",{className:l,href:s,rel:"noreferrer noopener"},this.props.field.linkText);return p.default.createElement("div",{className:this.props.field.wrapperClass},t,r)}return""}},{key:"executeAsyncCall",value:function(e){var i=this,t=this;if(jQuery.post(e).done((function(e){if(e.updatedData){var s=i.props.data,a=i.props.list.props.data;if("single"===e.updateType){for(var r in e.updatedData)e.updatedData.hasOwnProperty(r)&&(s[r]=e.updatedData[r]);for(var l=0;l<a.length;l++)if(a[l].id===s.id){a[l]=s;break}}else a=(e.updateType,e.updatedData);t.props.list.props.setFunction(t.props.list.props.name,a,[])}})),this.props.field.hookAfterClick&&this.props.field.hookName&&window.c4gHooks&&window.c4gHooks[this.props.field.hookName])for(var s=0;s<window.c4gHooks[this.props.field.hookName].length;s++)"function"==typeof window.c4gHooks[this.props.field.hookName][s]&&window.c4gHooks[this.props.field.hookName][s](this.props.field,this.props.data)}}]),i}(n.Component);i.default=f}}]);
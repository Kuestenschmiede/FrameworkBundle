/*! For license information please see 413.bundle.6a633e771d657063c18a.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[413,8167],{48167:(t,e,o)=>{var n=o(60093);Object.defineProperty(e,"__esModule",{value:!0}),e.AlertHandler=void 0;var a=n(o(9344)),i=n(o(62708)),r=n(o(69554)),l=n(o(41743)),s=n(o(75690)),u=function(){function t(){(0,r.default)(this,t)}var e;return(0,l.default)(t,[{key:"showErrorDialog",value:function(t,e,o){s.default.fire({title:t,text:e,type:"error",customClass:o||""})}},{key:"showInfoDialog",value:function(t,e,o){s.default.fire({title:t,text:e,type:"info",customClass:o||""})}},{key:"showInfoActionDialog",value:function(t,e,o,n){s.default.fire({title:t,text:e,type:"info",customClass:n||""}).then((function(){o()}))}},{key:"showInfoActionDialog2",value:function(t,e,o,n){s.default.fire({title:t,text:e,type:"info",showLoaderOnConfirm:!0,customClass:n||"",preConfirm:function(t){o()}})}},{key:"showConfirmDialog",value:function(t,e,o,n,a,i,r){s.default.fire({title:t,text:e,type:"warning",showCancelButton:!0,confirmButtonText:a||"Confirm",cancelButtonText:i||"Cancel",dangerMode:!0,customClass:r||""}).then((function(t){t.value?o():n()}))}},{key:"showConfirmDialogHTML",value:function(t,e,o,n,a,i,r){s.default.fire({title:t,html:e,type:"warning",showCancelButton:!0,confirmButtonText:a||"Confirm",cancelButtonText:i||"Cancel",dangerMode:!0,customClass:r||""}).then((function(t){t.value?o():n()}))}},{key:"showPreConfirmDialog",value:function(t,e,o,n,a,i,r){s.default.fire({title:t,text:e,type:"warning",showCancelButton:!0,confirmButtonText:n||"Confirm",cancelButtonText:a||"Cancel",showLoaderOnConfirm:r||!0,preConfirm:function(){return new Promise((function(t){o()}))},allowOutsideClick:function(){return!s.default.isLoading()},dangerMode:!0,customClass:i||""})}},{key:"showLoadingDialog",value:function(t,e,o,n){s.default.fire({title:t,text:e,showCancelButton:!1,allowEscapeKey:!1,allowOutsideClick:!1,showLoaderOnConfirm:!0,onBeforeOpen:function(){s.default.clickConfirm()},customClass:n||"",preConfirm:function(){return new Promise((function(t){o()}))}})}},{key:"showSelectDialog",value:(e=(0,i.default)(a.default.mark((function t(e,o,n,i,r){var l,u;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.default.fire({title:e,input:"select",inputOptions:o,inputPlaceholder:"-",showCancelButton:!0,confirmButtonText:n,cancelButtonText:i,customClass:r||""});case 2:return l=t.sent,u=l.value,t.abrupt("return",u);case 5:case"end":return t.stop()}}),t)}))),function(t,o,n,a,i){return e.apply(this,arguments)})}]),t}();e.AlertHandler=u},60413:(t,e,o)=>{var n=o(95318),a=o(50008);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(o(34575)),r=n(o(93913)),l=n(o(81506)),s=n(o(2205)),u=n(o(78585)),c=n(o(29754)),f=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==a(t)&&"function"!=typeof t)return{default:t};var o=m(e);if(o&&o.has(t))return o.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if("default"!==r&&Object.prototype.hasOwnProperty.call(t,r)){var l=i?Object.getOwnPropertyDescriptor(t,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=t[r]}n.default=t,o&&o.set(t,n);return n}(o(67294)),d=n(o(6404)),p=o(48167);function m(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,o=new WeakMap;return(m=function(t){return t?o:e})(t)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=(0,c.default)(t);if(e){var a=(0,c.default)(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return(0,u.default)(this,o)}}var h=function(t){(0,s.default)(o,t);var e=v(o);function o(t){var n;return(0,i.default)(this,o),(n=e.call(this,t)).clickButton=n.clickButton.bind((0,l.default)(n)),n.submitCallback=n.submitCallback.bind((0,l.default)(n)),n.state={active:!0},n}return(0,r.default)(o,[{key:"clickButton",value:function(t){var e=this;this.setState({active:!1},(function(){e.props.form.props.component.renderAsForm?e.props.form.activeButton=e:e.submitCallback(e.props.form,t)}))}},{key:"submitCallback",value:function(t,e){e.preventDefault(),e.stopPropagation();var o=this.props.form.props.component.data;this.geopickerFieldExists()&&(o=this.setGeoData(o)),o&&this.validateData(o)&&this.submitData(o)}},{key:"submitData",value:function(t){var e=this;this.props.form.setLoading(!0),jQuery.post(this.props.button.url,t).done((function(o){if(e.props.form.setLoading(!1),e.props.button.redirectUrl)if(o.success){var n=e.props.button.redirectUrl;e.props.button.redirectUrl.endsWith("/")&&o.alias&&(n+=o.alias),e.props.form.storePosition(),window.location=n}else e.props.form.setErrorTexts(o.fields),e.callSubmitFailed(t,o.fields);e.setState({active:!0})}))}},{key:"setGeoData",value:function(t){var e=this.props.form.mapControllerRef,o=e.mapsControls.controls.geopicker,n=e.mapsControls.controls.editor;if(o&&o.$fieldGeoX&&o.$fieldGeoY){var a=o.$fieldGeoX.val(),i=o.$fieldGeoY.val();if(t.geox=a,t.geoy=i,!t.geox&&!t.geoy&&t.locationCity&&t.locationStreet)return this.addPosition(t,e),!1;if(t.geox&&t.geoy&&(!t.locationCity||!t.locationStreet||!t.locationStreetNumber))return this.addAddress(t,e),!1}else if(n&&e.data.editor&&e.data.editor.inputField){var r=$(e.data.editor.inputField).val();t.geojson=r}return t}},{key:"validateData",value:function(t){if(t.published){var e=this.props.form.props.component.fields;for(var o in e)if(e.hasOwnProperty(o)){var n=e[o];if(n.required&&(0,d.default)(n,t,this.props.form.props.component.fields)){var a=!1;if("number"===n.type?null!==t[n.name]&&void 0!==t[n.name]&&""!==t[n.name]||(a=!0):t[n.name]||(a=!0),a){var i=$("#"+n.name);return i.focus(),i.keyup((function(){$(this).removeClass("is-invalid"),$(this).off("keyup")})),i.addClass("is-invalid"),this.callSubmitFailed(t,[n]),!1}}}if(!this.checkZipcode(t))return!1}return!0}},{key:"callSubmitFailed",value:function(t,e){if(window.c4gHooks&&window.c4gHooks.submitFailed)for(var o=0;o<window.c4gHooks.submitFailed.length;o++)"function"==typeof window.c4gHooks.submitFailed[o]&&window.c4gHooks.submitFailed[o](e,t);this.setState({active:!0})}},{key:"checkZipcode",value:function(t){var e=this;try{if(t.geox&&t.geoy&&t.locationZip){var o=this.props.form.mapControllerRef,n=o.data.geosearch.url+"reverse.php?key=";return n+=o.data.geosearch.reverseKey,n+="&lon="+t.geox,n+="&lat="+t.geoy,n+="&format=json",jQuery.ajax({dataType:"json",url:n}).done((function(o){if(o&&o.address&&o.address.postcode)if(o.address.postcode===t.locationZip)e.submitData(t);else{var n=$("#locationZip");n.focus(),n.keyup((function(){$(this).removeClass("is-invalid"),$(this).off("keyup")})),n.addClass("is-invalid");var a=new p.AlertHandler,i=e.props.languageRefs.CHECK_POSITION,r=e.props.languageRefs.POSITION_OUT_OF_RANGE;a.showConfirmDialog(i,r,(function(){e.submitData(t)}),(function(){}),e.props.languageRefs.POSITION_OUT_OF_RANGE_CONFIRM,e.props.languageRefs.POSITION_OUT_OF_RANGe_CANCEL)}else e.submitData(t)})).fail((function(){e.submitData(t)})),!1}return!0}catch(t){return!0}}},{key:"addPosition",value:function(t,e){var o=this,n=t.locationCity,a=t.locationStreet,i=t.locationStreetNumber,r=e.data.geosearch.url+"search.php?format=json&limit=1",l=e.data.geosearch.searchKey;r+=n?"&city="+encodeURIComponent(n):"",r+=a?"&street="+encodeURIComponent(i+" "+a):"",r+="&key="+l,jQuery.ajax({dataType:"json",url:r}).done((function(e){if(e[0]&&e[0].lon&&e[0].lat){var n=e[0],a=new p.AlertHandler,i="<b>Breite:</b> "+n.lat+" <br><b>Länge:</b> "+n.lon,r=o.props.languageRefs.ADD_GEOLOCATION,l=o.props.languageRefs.SAVE_WITH_POSITION,s=o.props.languageRefs.SAVE_WITHOUT_POSITION;a.showConfirmDialogHTML(r,i,(function(){var t=o.props.form.props.component.data;t.geoy=n.lat,t.geox=n.lon,o.validateData(t)&&o.submitData(t)}),(function(){var t=o.props.form.props.component.data;o.validateData(t)&&o.submitData(t)}),l,s)}else o.validateData(t)&&o.submitData(t)})).fail((function(){o.validateData(t)&&o.submitData(t)}))}},{key:"addAddress",value:function(t,e){var o=this,n=e.data.geosearch.url+"reverse.php?key=";n+=e.data.geosearch.reverseKey,n+="&lon="+t.geox,n+="&lat="+t.geoy,n+="&format=json",jQuery.ajax({dataType:"json",url:n}).done((function(e){var n=new p.AlertHandler,a=t.locationCity,i=t.locationStreet,r=t.locationStreetNumber,l="";a||(l+="<b>Ort:</b> "+(a=e.address.city||e.address.town||e.address.village)+"<br>"),i||(l+="<b>Straße:</b> "+(i=e.address.road||e.address.street)+"<br>"),r||(l+="<b>Hausnummer:</b> "+(r=e.address.house_number)+"<br>");var s=o.props.languageRefs.ADD_ADDRESS,u=o.props.languageRefs.SAVE_WITH_ADDRESS,c=o.props.languageRefs.SAVE_WITHOUT_ADDRESS;l?n.showConfirmDialogHTML(s,l,(function(){var t=o.props.form.props.component.data;t.locationCity=a,t.locationStreet=i,t.locationStreetNumber=r,o.validateData(t)&&o.submitData(t)}),(function(){var t=o.props.form.props.component.data;o.validateData(t)&&o.submitData(t)}),u,c):o.validateData(t)&&o.submitData(t)})).fail((function(){o.validateData(t)&&o.submitData(t)}))}},{key:"render",value:function(){return this.state.active?f.default.createElement("button",{className:this.props.button.className+" btn btn-primary mr-3",type:"submit",onClick:this.clickButton},this.props.button.caption):f.default.createElement("button",{className:this.props.button.className+" btn btn-primary mr-3",type:"submit",onClick:this.clickButton,disabled:!0},this.props.button.caption)}},{key:"geopickerFieldExists",value:function(){for(var t=this.props.form.props.component.fields,e=0;e<t.length;e++)if("geopicker"===t[e].type)return!0;return!1}}]),o}(f.Component);e.default=h},6404:(t,e)=>{function o(t){if(t.conditionField&&t.conditionValue&&"function"==typeof t.conditionField.forEach&&"function"==typeof t.conditionValue.forEach&&t.conditionField.length>0){if(t.conditionField.length===t.conditionValue.length)return!0;if(t.conditionValue.length>1&&1===t.conditionField.length)return!0}return!1}function n(t,e){var o=!0;if(t.conditionField.length===t.conditionValue.length)t.conditionField.forEach((function(n,a){void 0===e[n]?o=!1:null===e[n]||e[n].value||String(e[n])===String(t.conditionValue[a])?(e[n]&&e[n].value&&String(e[n].value)!==String(t.conditionValue[a])||null===e[n]&&null!==t.conditionValue[a])&&(o=!1):o=!1}),this);else if(t.conditionValue.length>1&&1===t.conditionField.length){var n=t.conditionField[0];for(var a in o=!1,t.conditionValue)if(t.conditionValue.hasOwnProperty(a)){var i=t.conditionValue[a];if(e[n]&&e[n].value?e[n].value===i&&(o=!0):e[n]===i&&(o=!0),o)break}}return o}Object.defineProperty(e,"__esModule",{value:!0}),e.hasConditions=o,e.checkConditions=n,e.default=function(t,e,a){if(o(t)){var i=null;if(a.forEach((function(e,o){1===t.conditionField.length&&e.name===t.conditionField[0]&&(i=e)})),null!==i){return o(i)?n(i,e)&&n(t,e):n(t,e)}return n(t,e)}return!0}}}]);
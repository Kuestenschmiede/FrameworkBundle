/*! For license information please see 413.bundle.d77c1e19ac29914a4a9c.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[413,8167],{48167:(e,t,o)=>{var n=o(60093);Object.defineProperty(t,"__esModule",{value:!0}),t.AlertHandler=void 0;var a=n(o(9344)),i=n(o(62708)),r=n(o(69554)),l=n(o(41743)),u=n(o(75690)),s=function(){function e(){(0,r.default)(this,e)}var t;return(0,l.default)(e,[{key:"showErrorDialog",value:function(e,t,o){u.default.fire({title:e,text:t,type:"error",customClass:o||""})}},{key:"showInfoDialog",value:function(e,t,o){u.default.fire({title:e,text:t,type:"info",customClass:o||""})}},{key:"showInfoActionDialog",value:function(e,t,o,n){u.default.fire({title:e,text:t,type:"info",customClass:n||""}).then((function(){o()}))}},{key:"showInfoActionDialog2",value:function(e,t,o,n){u.default.fire({title:e,text:t,type:"info",showLoaderOnConfirm:!0,customClass:n||"",preConfirm:function(e){o()}})}},{key:"showConfirmDialog",value:function(e,t,o,n,a,i,r){u.default.fire({title:e,text:t,type:"warning",showCancelButton:!0,confirmButtonText:a||"Confirm",cancelButtonText:i||"Cancel",dangerMode:!0,customClass:r||""}).then((function(e){e.value?o():n()}))}},{key:"showConfirmDialogHTML",value:function(e,t,o,n,a,i,r){u.default.fire({title:e,html:t,type:"warning",showCancelButton:!0,confirmButtonText:a||"Confirm",cancelButtonText:i||"Cancel",dangerMode:!0,customClass:r||""}).then((function(e){e.value?o():n()}))}},{key:"showPreConfirmDialog",value:function(e,t,o,n,a,i,r){u.default.fire({title:e,text:t,type:"warning",showCancelButton:!0,confirmButtonText:n||"Confirm",cancelButtonText:a||"Cancel",showLoaderOnConfirm:r||!0,preConfirm:function(){return new Promise((function(e){o()}))},allowOutsideClick:function(){return!u.default.isLoading()},dangerMode:!0,customClass:i||""})}},{key:"showLoadingDialog",value:function(e,t,o,n){u.default.fire({title:e,text:t,showCancelButton:!1,allowEscapeKey:!1,allowOutsideClick:!1,showLoaderOnConfirm:!0,onBeforeOpen:function(){u.default.clickConfirm()},customClass:n||"",preConfirm:function(){return new Promise((function(e){o()}))}})}},{key:"showSelectDialog",value:(t=(0,i.default)(a.default.mark((function e(t,o,n,i,r){var l,s;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.default.fire({title:t,input:"select",inputOptions:o,inputPlaceholder:"-",showCancelButton:!0,confirmButtonText:n,cancelButtonText:i,customClass:r||""});case 2:return l=e.sent,s=l.value,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)}))),function(e,o,n,a,i){return t.apply(this,arguments)})}]),e}();t.AlertHandler=s},60413:(e,t,o)=>{var n=o(95318),a=o(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(o(34575)),r=n(o(93913)),l=n(o(81506)),u=n(o(2205)),s=n(o(78585)),c=n(o(29754)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var o=m(t);if(o&&o.has(e))return o.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var l=i?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=e[r]}n.default=e,o&&o.set(e,n);return n}(o(67294)),d=n(o(6404)),p=o(48167);function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(m=function(e){return e?o:t})(e)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return(0,s.default)(this,o)}}var h=function(e){(0,u.default)(o,e);var t=v(o);function o(e){var n;return(0,i.default)(this,o),(n=t.call(this,e)).clickButton=n.clickButton.bind((0,l.default)(n)),n.submitCallback=n.submitCallback.bind((0,l.default)(n)),n}return(0,r.default)(o,[{key:"clickButton",value:function(e){this.props.form.props.component.renderAsForm?this.props.form.activeButton=this:this.submitCallback(this.props.form,e)}},{key:"submitCallback",value:function(e,t){t.preventDefault(),t.stopPropagation();var o=this.props.form.props.component.data;this.geopickerFieldExists()&&(o=this.setGeoData(o)),o&&this.validateData(o)&&this.submitData(o)}},{key:"submitData",value:function(e){var t=this;this.props.form.setLoading(!0),jQuery.post(this.props.button.url,e).done((function(o){if(t.props.form.setLoading(!1),t.props.button.redirectUrl)if(o.success){var n=t.props.button.redirectUrl;t.props.button.redirectUrl.endsWith("/")&&o.alias&&(n+=o.alias),t.props.form.storePosition(),window.location=n}else t.props.form.setErrorTexts(o.fields),t.callSubmitFailed(e,o.fields)}))}},{key:"setGeoData",value:function(e){var t=this.props.form.mapControllerRef,o=t.mapsControls.controls.geopicker,n=t.mapsControls.controls.editor;if(o&&o.$fieldGeoX&&o.$fieldGeoY){var a=o.$fieldGeoX.val(),i=o.$fieldGeoY.val();if(e.geox=a,e.geoy=i,!e.geox&&!e.geoy&&e.locationCity&&e.locationStreet)return this.addPosition(e,t),!1;if(e.geox&&e.geoy&&(!e.locationCity||!e.locationStreet||!e.locationStreetNumber))return this.addAddress(e,t),!1}else if(n&&t.data.editor&&t.data.editor.inputField){var r=$(t.data.editor.inputField).val();e.geojson=r}return e}},{key:"validateData",value:function(e){if(e.published){var t=this.props.form.props.component.fields;for(var o in t)if(t.hasOwnProperty(o)){var n=t[o];if(n.required&&(0,d.default)(n,e)){var a=!1;if("number"===n.type?null!==e[n.name]&&void 0!==e[n.name]&&""!==e[n.name]||(a=!0):e[n.name]||(a=!0),a){var i=$("#"+n.name);return i.focus(),i.keyup((function(){$(this).removeClass("is-invalid"),$(this).off("keyup")})),i.addClass("is-invalid"),this.callSubmitFailed(e,[n]),!1}}}if(!this.checkZipcode(e))return!1}return!0}},{key:"callSubmitFailed",value:function(e,t){if(window.c4gHooks&&window.c4gHooks.submitFailed)for(var o=0;o<window.c4gHooks.submitFailed.length;o++)"function"==typeof window.c4gHooks.submitFailed[o]&&window.c4gHooks.submitFailed[o](t,e)}},{key:"checkZipcode",value:function(e){var t=this;try{if(e.geox&&e.geoy&&e.locationZip){var o=this.props.form.mapControllerRef,n=o.data.geosearch.url+"reverse.php?key=";return n+=o.data.geosearch.reverseKey,n+="&lon="+e.geox,n+="&lat="+e.geoy,n+="&format=json",jQuery.ajax({dataType:"json",url:n}).done((function(o){if(o&&o.address&&o.address.postcode)if(o.address.postcode===e.locationZip)t.submitData(e);else{var n=$("#locationZip");n.focus(),n.keyup((function(){$(this).removeClass("is-invalid"),$(this).off("keyup")})),n.addClass("is-invalid");var a=new p.AlertHandler,i=t.props.languageRefs.CHECK_POSITION,r=t.props.languageRefs.POSITION_OUT_OF_RANGE;a.showConfirmDialog(i,r,(function(){t.submitData(e)}),(function(){}),t.props.languageRefs.POSITION_OUT_OF_RANGE_CONFIRM,t.props.languageRefs.POSITION_OUT_OF_RANGe_CANCEL)}else t.submitData(e)})).fail((function(){t.submitData(e)})),!1}return!0}catch(e){return!0}}},{key:"addPosition",value:function(e,t){var o=this,n=e.locationCity,a=e.locationStreet,i=e.locationStreetNumber,r=t.data.geosearch.url+"search.php?format=json&limit=1",l=t.data.geosearch.searchKey;r+=n?"&city="+encodeURIComponent(n):"",r+=a?"&street="+encodeURIComponent(i+" "+a):"",r+="&key="+l,jQuery.ajax({dataType:"json",url:r}).done((function(t){if(t[0]&&t[0].lon&&t[0].lat){var n=t[0],a=new p.AlertHandler,i="<b>Breite:</b> "+n.lat+" <br><b>Länge:</b> "+n.lon,r=o.props.languageRefs.ADD_GEOLOCATION,l=o.props.languageRefs.SAVE_WITH_POSITION,u=o.props.languageRefs.SAVE_WITHOUT_POSITION;a.showConfirmDialogHTML(r,i,(function(){var e=o.props.form.props.component.data;e.geoy=n.lat,e.geox=n.lon,o.validateData(e)&&o.submitData(e)}),(function(){var e=o.props.form.props.component.data;o.validateData(e)&&o.submitData(e)}),l,u)}else o.validateData(e)&&o.submitData(e)})).fail((function(){o.validateData(e)&&o.submitData(e)}))}},{key:"addAddress",value:function(e,t){var o=this,n=t.data.geosearch.url+"reverse.php?key=";n+=t.data.geosearch.reverseKey,n+="&lon="+e.geox,n+="&lat="+e.geoy,n+="&format=json",jQuery.ajax({dataType:"json",url:n}).done((function(t){var n=new p.AlertHandler,a=e.locationCity,i=e.locationStreet,r=e.locationStreetNumber,l="";a||(l+="<b>Ort:</b> "+(a=t.address.city||t.address.town||t.address.village)+"<br>"),i||(l+="<b>Straße:</b> "+(i=t.address.road||t.address.street)+"<br>"),r||(l+="<b>Hausnummer:</b> "+(r=t.address.house_number)+"<br>");var u=o.props.languageRefs.ADD_ADDRESS,s=o.props.languageRefs.SAVE_WITH_ADDRESS,c=o.props.languageRefs.SAVE_WITHOUT_ADDRESS;l?n.showConfirmDialogHTML(u,l,(function(){var e=o.props.form.props.component.data;e.locationCity=a,e.locationStreet=i,e.locationStreetNumber=r,o.validateData(e)&&o.submitData(e)}),(function(){var e=o.props.form.props.component.data;o.validateData(e)&&o.submitData(e)}),s,c):o.validateData(e)&&o.submitData(e)})).fail((function(){o.validateData(e)&&o.submitData(e)}))}},{key:"render",value:function(){return f.default.createElement("button",{className:this.props.button.className+" btn btn-primary mr-3",type:"submit",onClick:this.clickButton},this.props.button.caption)}},{key:"geopickerFieldExists",value:function(){for(var e=this.props.form.props.component.fields,t=0;t<e.length;t++)if("geopicker"===e[t].type)return!0;return!1}}]),o}(f.Component);t.default=h},6404:(e,t)=>{function o(e){if(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0){if(e.conditionField.length===e.conditionValue.length)return!0;if(e.conditionValue.length>1&&1===e.conditionField.length)return!0}return!1}function n(e,t){var o=!0;if(e.conditionField.length===e.conditionValue.length)e.conditionField.forEach((function(n,a){void 0===t[n]?o=!1:null===t[n]||t[n].value||String(t[n])===String(e.conditionValue[a])?(t[n]&&t[n].value&&String(t[n].value)!==String(e.conditionValue[a])||null===t[n]&&null!==e.conditionValue[a])&&(o=!1):o=!1}),this);else if(e.conditionValue.length>1&&1===e.conditionField.length){var n=e.conditionField[0];for(var a in o=!1,e.conditionValue)if(e.conditionValue.hasOwnProperty(a)){var i=e.conditionValue[a];if(t[n]&&t[n].value?t[n].value===i&&(o=!0):t[n]===i&&(o=!0),o)break}}return o}Object.defineProperty(t,"__esModule",{value:!0}),t.hasConditions=o,t.checkConditions=n,t.default=function(e,t){return!o(e)||n(e,t)}}}]);
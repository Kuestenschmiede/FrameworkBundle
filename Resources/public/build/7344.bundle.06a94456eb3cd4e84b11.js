"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[7344,2487,8167],{48167:(e,t,n)=>{var o=n(60093);Object.defineProperty(t,"__esModule",{value:!0}),t.AlertHandler=void 0;var a=o(n(9344)),r=o(n(62708)),s=o(n(69554)),l=o(n(41743)),i=o(n(75690)),u=function(){function e(){(0,s.default)(this,e)}var t;return(0,l.default)(e,[{key:"showErrorDialog",value:function(e,t,n){i.default.fire({title:e,text:t,type:"error",customClass:n||""})}},{key:"showInfoDialog",value:function(e,t,n){i.default.fire({title:e,text:t,type:"info",customClass:n||""})}},{key:"showInfoActionDialog",value:function(e,t,n,o){i.default.fire({title:e,text:t,type:"info",customClass:o||""}).then((function(){n()}))}},{key:"showInfoActionDialog2",value:function(e,t,n,o){i.default.fire({title:e,text:t,type:"info",showLoaderOnConfirm:!0,customClass:o||"",preConfirm:function(e){n()}})}},{key:"showConfirmDialog",value:function(e,t,n,o,a,r,s){i.default.fire({title:e,text:t,type:"warning",showCancelButton:!0,confirmButtonText:a||"Confirm",cancelButtonText:r||"Cancel",dangerMode:!0,customClass:s||""}).then((function(e){e.value?n():o()}))}},{key:"showConfirmDialogHTML",value:function(e,t,n,o,a,r,s){i.default.fire({title:e,html:t,type:"warning",showCancelButton:!0,confirmButtonText:a||"Confirm",cancelButtonText:r||"Cancel",dangerMode:!0,customClass:s||""}).then((function(e){e.value?n():o()}))}},{key:"showPreConfirmDialog",value:function(e,t,n,o,a,r,s){i.default.fire({title:e,text:t,type:"warning",showCancelButton:!0,confirmButtonText:o||"Confirm",cancelButtonText:a||"Cancel",showLoaderOnConfirm:s||!0,preConfirm:function(){return new Promise((function(e){n()}))},allowOutsideClick:function(){return!i.default.isLoading()},dangerMode:!0,customClass:r||""})}},{key:"showLoadingDialog",value:function(e,t,n,o){i.default.fire({title:e,text:t,showCancelButton:!1,allowEscapeKey:!1,allowOutsideClick:!1,showLoaderOnConfirm:!0,onBeforeOpen:function(){i.default.clickConfirm()},customClass:o||"",preConfirm:function(){return new Promise((function(e){n()}))}})}},{key:"showSelectDialog",value:(t=(0,r.default)(a.default.mark((function e(t,n,o,r,s){var l,u;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.default.fire({title:t,input:"select",inputOptions:n,inputPlaceholder:"-",showCancelButton:!0,confirmButtonText:o,cancelButtonText:r,customClass:s||""});case 2:return l=e.sent,u=l.value,e.abrupt("return",u);case 5:case"end":return e.stop()}}),e)}))),function(e,n,o,a,r){return t.apply(this,arguments)})}]),e}();t.AlertHandler=u},52487:(e,t,n)=>{var o=n(95318),a=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(34575)),s=o(n(93913)),l=o(n(81506)),i=o(n(2205)),u=o(n(78585)),c=o(n(29754)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var l=r?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(o,s,l):o[s]=e[s]}o.default=e,n&&n.set(e,o);return o}(n(67294));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return(0,u.default)(this,n)}}var m=f.default.lazy((function(){return n.e(4979).then(n.bind(n,44979))})),h=f.default.lazy((function(){return n.e(7279).then(n.bind(n,77279))})),g=function(e){(0,i.default)(n,e);var t=p(n);function n(e){var o;return(0,r.default)(this,n),(o=t.call(this,e)).activeButton=null,o.state={errorTexts:{},loading:!1},e.component.toggleableLayout&&(o.state.toggled=!1),o.submitForm=o.submitForm.bind((0,l.default)(o)),o.toggleForm=o.toggleForm.bind((0,l.default)(o)),o}return(0,s.default)(n,[{key:"toggleForm",value:function(){this.setState({toggled:!this.state.toggled})}},{key:"render",value:function(){var e=this,t=[],n=[];this.props.component.buttons.forEach((function(e,n){t.push(f.default.createElement(f.Suspense,{fallback:f.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},f.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""})),key:n},f.default.createElement(m,{key:n,form:this,button:e,languageRefs:this.props.languageRefs})))}),this);var o=null;this.state.loading&&(o=f.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},f.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""})));var a=null;this.props.component.headline&&(a=f.default.createElement("span",{className:"form-headline"},this.props.component.headline));var r=this.props.component.fields.map((function(t,o){return"wrapper"===t.type?(n=n.concat(t.wrappedFields),f.default.createElement(f.Suspense,{fallback:f.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},f.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""}),"."),key:o},f.default.createElement(h,{key:o,field:t,data:e.props.component.data,parentNode:e,fields:e.props.component.fields,form:e,errorTexts:e.state.errorTexts||{},languageRefs:e.props.languageRefs}))):n.includes(t.name)?void 0:f.default.createElement(f.Suspense,{fallback:f.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},f.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""})),key:o},f.default.createElement(h,{key:o,field:t,data:e.props.component.data,parentNode:e,form:e,errorText:e.state.errorTexts?e.state.errorTexts[t.name]:{},languageRefs:e.props.languageRefs}))})),s="form-view";this.props.component.class&&(s=this.props.component.class);var l=f.default.createElement(f.default.Fragment,null,a,r,f.default.createElement("div",{className:this.props.component.buttonWrapperClass},o,t));if(this.props.component.toggleableLayout){var i=this.props.component.toggleableBaseClass+"-form";this.props.component.class&&(i+=" "+this.props.component.class);var u=this.props.component.toggleableOffLabel,c="";return this.state.toggled&&(u=this.props.component.toggleableOnLabel,c=" "+this.props.component.toggleableOnClass),f.default.createElement("div",{className:this.props.component.toggleableBaseClass+"-outer"+c,hidden:this.props.component.hidden},f.default.createElement("div",{className:this.props.component.toggleableBaseClass+"-inner"},f.default.createElement("div",{className:this.props.component.toggleableBaseClass+"-button-wrapper"+c},f.default.createElement("button",{className:this.props.component.toggleableBaseClass+"-button"+c,onClick:this.toggleForm},u)),f.default.createElement("div",{className:this.props.component.toggleableBaseClass+"-form-wrapper"+c},f.default.createElement("form",{className:i,onSubmit:function(t){return e.submitForm(t)},method:this.props.component.method},l))))}return this.props.component.containerRow?this.props.component.renderAsForm?f.default.createElement("form",{className:s,onSubmit:function(t){return e.submitForm(t)},method:this.props.component.method},f.default.createElement("div",{className:"container"},f.default.createElement("div",{className:"row"},l))):this.props.component.scrollSpy?f.default.createElement("div",{className:s,method:this.props.component.method,"data-spy":"scroll","data-target":this.props.component.scrollSpyTarget,"data-offset":"0"},f.default.createElement("div",{className:"container"},f.default.createElement("div",{className:"row"},l))):f.default.createElement("div",{className:s,method:this.props.component.method},f.default.createElement("div",{className:"container"},f.default.createElement("div",{className:"row"},l))):this.props.component.renderAsForm?f.default.createElement("form",{className:s,onSubmit:function(t){return e.submitForm(t)},method:this.props.component.method},l):this.props.component.scrollSpy?f.default.createElement("div",{className:s,method:this.props.component.method,"data-spy":"scroll","data-target":this.props.component.scrollSpyTarget,"data-offset":"0"},f.default.createElement("div",{className:"container"},f.default.createElement("div",{className:"row"},l))):f.default.createElement("div",{className:s,method:this.props.component.method},l)}},{key:"submitForm",value:function(e){this.activeButton.submitCallback(this,e)}},{key:"storePosition",value:function(){this.props.component.preservePosition&&window.localStorage.setItem("formPosition",document.documentElement.scrollTop+"")}},{key:"setErrorTexts",value:function(e){this.setState({errorTexts:e})}},{key:"setLoading",value:function(e){this.setState({loading:e})}},{key:"componentDidMount",value:function(){if(this.props.component.preservePosition){var e=window.localStorage,t=e.getItem("formPosition");t&&window.setTimeout((function(){document.documentElement.scrollTop=parseInt(t)}),1e3),e.removeItem("formPosition")}}}]),n}(f.Component);t.default=g},57344:(e,t,n)=>{var o=n(95318),a=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67154)),s=o(n(34575)),l=o(n(93913)),i=o(n(81506)),u=o(n(2205)),c=o(n(78585)),f=o(n(29754)),d=o(n(59713)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=w(t);if(n&&n.has(e))return n.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var l=r?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(o,s,l):o[s]=e[s]}o.default=e,n&&n.set(e,o);return o}(n(67294)),m=(o(n(52487)),n(16921)),h=n(30800),g=n(34172),v=n(85985),y=n(48167),b=o(n(86455));function w(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(w=function(e){return e?n:t})(e)}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,d.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,f.default)(e);if(t){var a=(0,f.default)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return(0,c.default)(this,n)}}var k=(0,o(n(77630)).default)(b.default),R=p.default.lazy((function(){return n.e(7690).then(n.bind(n,37690))})),M=p.default.lazy((function(){return n.e(7279).then(n.bind(n,77279))})),O=function(e){(0,u.default)(n,e);var t=B(n);function n(e){var o;return(0,s.default)(this,n),o=t.call(this,e),(0,d.default)((0,i.default)(o),"getMuiTheme",(function(){return(0,v.createMuiTheme)({overrides:{MuiPaper:{elevation4:{boxShadow:"none"}},MuiToolbar:{gutters:{backgroundColor:"#f8f9fa",borderRadius:"0.25rem",paddingTop:"10px",paddingBottom:"10px"}}}})})),o.state={selectedItems:[],activeForm:!1,activeButton:null},o.formData=[],o.selectedItems=[],o.addSelectedItem=o.addSelectedItem.bind((0,i.default)(o)),o.handleButtonClick=o.handleButtonClick.bind((0,i.default)(o)),o.submitForm=o.submitForm.bind((0,i.default)(o)),o.cancelForm=o.cancelForm.bind((0,i.default)(o)),o.setFormData=o.setFormData.bind((0,i.default)(o)),o.fireRequest=o.fireRequest.bind((0,i.default)(o)),o}return(0,l.default)(n,[{key:"render",value:function(){var e=this,t=null,n=null;this.state.selectedItems.length>0&&this.props.component.selectionButtons&&this.props.component.selectionButtons.length>0&&(t=p.default.createElement("div",{className:"action-button-container"},this.props.component.selectionButtons.map((function(t,n){return p.default.createElement("button",{className:"btn",key:n,onClick:function(){return e.handleButtonClick(t,n)}},t.label)})))),this.props.component.tableButtons&&this.props.component.tableButtons.length>0&&(n=p.default.createElement("div",{className:"action-button-container"},this.props.component.tableButtons.map((function(t,n){return p.default.createElement(m.TableButton,{key:n,text:t.label,href:t.href,languageRefs:e.props.languageRefs})}))));var o={textLabels:{body:{noMatch:this.props.languageRefs.TABLE_NO_MATCH,toolTip:this.props.languageRefs.TABLE_TOOLTIP,columnHeaderTooltip:function(e){return"Sortierung für ".concat(e.label)}},pagination:{next:this.props.languageRefs.TABLE_NEXT_PAGE,previous:this.props.languageRefs.TABLE_PREVIOUS_PAGE,rowsPerPage:this.props.languageRefs.TABLE_ROWS_PER_PAGE,displayRows:this.props.languageRefs.TABLE_DISPLAY_ROWS},toolbar:{search:this.props.languageRefs.TABLE_SEARCH,downloadCsv:this.props.languageRefs.TABLE_DOWNLOAD_CSV,print:this.props.languageRefs.TABLE_PRINT,viewColumns:this.props.languageRefs.TABLE_VIEW_COLUMNS,filterTable:this.props.languageRefs.TABLE_FILTER_TABLE},filter:{all:this.props.languageRefs.TABLE_FILTER_ALL,title:this.props.languageRefs.TABLE_FILTER_TITLE,reset:this.props.languageRefs.TABLE_FILTER_RESET},viewColumns:{title:this.props.languageRefs.TABLE_TITLE,titleAria:this.props.languageRefs.TABLE_TITLE_ARIA},selectedRows:{text:this.props.languageRefs.TABLE_SELECTED_TEXT,delete:this.props.languageRefs.TABLE_SELECTED_DELETE,deleteAria:this.props.languageRefs.TABLE_SELECTED_DELETE_ARIA}}};this.props.component.tableButtons&&this.props.component.tableButtons.length>0&&(o.customToolbar=function(){return p.default.createElement(p.default.Fragment,null,n)}),this.props.component.checkbox&&(o.onRowSelectionChange=function(t,n,o){e.addSelectedItem(t,n,o)}),this.props.component.selectionButtons&&this.props.component.selectionButtons.length>0&&(o.customToolbarSelect=function(){return p.default.createElement(p.default.Fragment,null,t)});var a=this.createColumns(this.props.fields);return this.props.component.checkbox?o.selectableRows="single":o.selectableRows="none",p.default.createElement("div",{className:""},p.default.createElement(v.MuiThemeProvider,{theme:this.getMuiTheme()},p.default.createElement(R,{data:this.props.data.filter((function(e){return null!=e})),columns:a,options:o,key:0,ref:function(t){return e.datatable=t},title:this.props.component.headline,responsive:!0})))}},{key:"setFormData",value:function(e,t){this.formData=T(T({},this.formData),t)}},{key:"addSelectedItem",value:function(e,t,n){this.setState({selectedItems:n})}},{key:"handleButtonClick",value:function(e,t){var n=this;e.form.props={},e.form.props.updateFunction=this.setFormData;var o=p.default.createElement(p.Suspense,{fallback:p.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},p.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""}))},p.default.createElement("form",{key:1,className:"form-view",method:"POST"},e.form.fields.map((function(t,n){return p.default.createElement(M,{form:e.form,field:t,data:[],key:n+1})}))));k.fire({title:p.default.createElement("p",null,e.label),html:o,confirmButtonText:e.submitButtonLabel||this.props.languageRefs.CONFIRM,showConfirmButton:!0,showCancelButton:!0,cancelButtonText:e.cancelButtonLabel||this.props.languageRefs.CANCEL,customClass:{content:"zIndex-9",actions:"zIndex-8"}}).then((function(t){t.isConfirmed?n.submitForm(e):n.cancelForm()}))}},{key:"submitForm",value:function(e){var t=this.state.selectedItems[0],n=this.props.data[t],o=e.form.url;this.formData.id=n.id,jQuery.post(o,this.formData).done((function(e){location.reload()}))}},{key:"cancelForm",value:function(){this.resetSelection()}},{key:"format",value:function(e,t){return t.replace(/%s/g,e)}},{key:"resetSelection",value:function(){this.datatable.selectRowDelete(),this.setState({selectedItems:[]}),this.selectedItems=[]}},{key:"createColumns",value:function(e){for(var t=this,n=[],o=function(o){var a=void 0;switch(e[o].type){case"text":a=e[o],""!==e[o].format&&(a.options.customBodyRender=function(n,a,r){return t.format(n,e[o].format)}),n.push(a);break;case"reference":(a=e[o]).options.customBodyRender=function(e,t,n){return a.references[e]},n.push(a);break;case"modal-detail-button":(a=e[o]).options.customBodyRender=function(e,t,n){return e?p.default.createElement(h.ModalDetailTableButton,{buttonLabel:a.buttonLabel,title:a.label,message:e,confirmButtonText:a.confirmButtonText,className:a.className}):""},n.push(a);break;case"datetime":(a=e[o]).options.customBodyRender=function(e,t,n){if(null===e)return"";var o=new Date(1e3*e),a=o.getDate();a<10&&(a="0"+a);var r=o.getMonth()+1;r<10&&(r="0"+r);var s=o.getHours()+1;s<10&&(s="0"+s);var l=o.getMinutes()+1;return l<10&&(l="0"+l),a+"."+r+"."+o.getFullYear()+" "+s+":"+l},n.push(a);break;case"action-button":(a=e[o]).options.customBodyRender=function(n,o,s){for(var l=[],i=0;i<a.actions.length;i++){var u=a.actions[i];u.rowData=o.rowData,u.fields=e,u.setRowData=t.props.setRowData,u.value=n,l.push(p.default.createElement(g.PostActionButton,(0,r.default)({key:i},u)))}return p.default.createElement(p.default.Fragment,null,l)},n.push(a);break;case"button":var s={name:e[o].name,label:e[o].label,options:{sort:!1,filter:!1,customBodyRender:function(n,a,r){if("POST"===e[o].method){return p.default.createElement("a",{onMouseUp:function(a){a.preventDefault(),a.stopPropagation(),t.fireRequest(e[o].href.replace(e[o].hrefField,n))},className:"btn btn-secondary"},e[o].buttonText)}return p.default.createElement(m.TableButton,{href:e[o].href.replace(e[o].hrefField,n),text:e[o].buttonText,formFields:e[o].formFields,submitButtonLabel:e[o].submitButtonLabel,cancelButtonLabel:e[o].cancelButtonLabel,url:e[o].url,formHeadlineFieldIndex:e[o].formHeadlineFieldIndex,value:n,rowData:a.rowData})}}};n.push(s);break;case"conditional-marker":var l=e[o].markers,i={name:e[o].name,label:e[o].label,options:{sort:!1,customBodyRender:function(e){var t=l[e];return p.default.createElement("span",{className:t.class,"data-state":t.dataState,"data-toggle":t.dataToggle,"data-placement":t.dataPlacement,title:t.title})}}};n.push(i);break;default:n.push(e[o])}},a=0;a<e.length;a++)o(a);return n}},{key:"fireRequest",value:function(e){(new y.AlertHandler).showConfirmDialog(this.props.component.confirmationHeadline,this.props.component.confirmationMessage,(function(){jQuery.post(e).done((function(e){e.success&&location.reload()}))}),(function(){}),this.props.component.confirmationYes,this.props.component.confirmationNo)}}]),n}(p.Component);t.default=O},30800:(e,t,n)=>{var o=n(95318),a=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.ModalDetailTableButton=void 0;var r=o(n(34575)),s=o(n(93913)),l=o(n(81506)),i=o(n(2205)),u=o(n(78585)),c=o(n(29754)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var l=r?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(o,s,l):o[s]=e[s]}o.default=e,n&&n.set(e,o);return o}(n(67294));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return(0,u.default)(this,n)}}var m=f.default.lazy((function(){return n.e(859).then(n.bind(n,20859))})),h=f.default.lazy((function(){return n.e(2506).then(n.bind(n,32506))})),g=function(e){(0,i.default)(n,e);var t=p(n);function n(e){var o;return(0,r.default)(this,n),(o=t.call(this,e)).state={showModal:!1},o.showModal=o.showModal.bind((0,l.default)(o)),o.closeModal=o.closeModal.bind((0,l.default)(o)),o}return(0,s.default)(n,[{key:"showModal",value:function(){this.setState({showModal:!0})}},{key:"closeModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return f.default.createElement(f.default.Fragment,null,f.default.createElement("button",{className:"c4g-btn "+this.props.className,type:"button",onClick:this.showModal},this.props.buttonLabel),f.default.createElement(m,{show:this.state.showModal},f.default.createElement(h,{title:this.props.title,message:this.props.message,onConfirm:this.closeModal,confirmButtonText:this.props.confirmButtonText})))}}]),n}(f.Component);t.ModalDetailTableButton=g},34172:(e,t,n)=>{var o=n(95318),a=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.PostActionButton=void 0;var r=o(n(67154)),s=o(n(34575)),l=o(n(93913)),i=o(n(81506)),u=o(n(2205)),c=o(n(78585)),f=o(n(29754)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var l=r?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(o,s,l):o[s]=e[s]}o.default=e,n&&n.set(e,o);return o}(n(67294));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,f.default)(e);if(t){var a=(0,f.default)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return(0,c.default)(this,n)}}var h=d.default.lazy((function(){return n.e(2397).then(n.bind(n,22397))})),g=d.default.lazy((function(){return n.e(859).then(n.bind(n,20859))})),v=d.default.lazy((function(){return n.e(2506).then(n.bind(n,32506))})),y=d.default.lazy((function(){return n.e(2120).then(n.bind(n,52120))})),b=d.default.lazy((function(){return n.e(3323).then(n.bind(n,63323))})),w=d.default.lazy((function(){return n.e(5966).then(n.bind(n,55966))})),E=function(e){(0,u.default)(n,e);var t=m(n);function n(e){var o;if((0,s.default)(this,n),(o=t.call(this,e)).showModal=o.showModal.bind((0,i.default)(o)),o.closeModal=o.closeModal.bind((0,i.default)(o)),o.resetModal=o.resetModal.bind((0,i.default)(o)),o.showDynamicModal=o.showDynamicModal.bind((0,i.default)(o)),o.sendRequest=o.sendRequest.bind((0,i.default)(o)),o.onRequestDone=o.onRequestDone.bind((0,i.default)(o)),o.onRequestFail=o.onRequestFail.bind((0,i.default)(o)),o.onFormInvalid=o.onFormInvalid.bind((0,i.default)(o)),o.state={showModal:!1,dynamicModal:!1,dynamicTitle:"",dynamicMessage:"",dynamicConfirmButtonText:"",dynamicOnConfirm:o.resetModal},o.props.formFields){var a={};o.props.formFields.forEach((function(e){a[e.name]=e.value||""}),(0,i.default)(o)),o.state.formData=a,o.state.errorMessages={}}return o}return(0,l.default)(n,[{key:"showModal",value:function(){this.setState({showModal:!0})}},{key:"closeModal",value:function(){if(this.props.formFields){var e={};this.props.formFields.forEach((function(t){e[t.name]=t.value||""}),this),this.setState({formData:e,errorMessages:{},showModal:!1})}else this.setState({showModal:!1})}},{key:"resetModal",value:function(){this.setState({showModal:!1,dynamicModal:!1,dynamicTitle:"",dynamicMessage:"",dynamicConfirmButtonText:"",dynamicOnConfirm:this.resetModal})}},{key:"showDynamicModal",value:function(e,t,n,o){this.setState({showModal:!0,dynamicModal:!0,dynamicTitle:e,dynamicMessage:t,dynamicConfirmButtonText:n,dynamicOnConfirm:o})}},{key:"onFormUpdate",value:function(e,t){var n=this.state.formData;n[e.name]=t,this.setState({formData:n})}},{key:"onFormInvalid",value:function(e){this.setState({errorMessages:e})}},{key:"sendRequest",value:function(){var e={};this.props.fields.forEach((function(t,n){e[t.name]=this.props.rowData[n]}),this),e.REQUEST_TOKEN=this.props.REQUEST_TOKEN,e.formData=this.state.formData,jQuery.post(this.props.url,e).done(this.onRequestDone).fail(this.onRequestFail),this.closeModal()}},{key:"onRequestDone",value:function(e){try{this.showDynamicModal(e.success.title,e.success.message,e.success.confirmButtonText,this.updateRow.bind(this,e.success.rowData))}catch(e){this.resetModal()}}},{key:"onRequestFail",value:function(e){var t=e.responseJSON;try{t.error.reload&&this.showDynamicModal(t.error.title,t.error.message,t.error.confirmButtonText,location.reload),this.showDynamicModal(t.error.title,t.error.message,t.error.confirmButtonText,this.resetModal)}catch(e){this.resetModal()}}},{key:"updateRow",value:function(e){this.props.setRowData(e,this.props.value),this.resetModal()}},{key:"render",value:function(){var e,t={};if(this.props.fields.forEach((function(e,n){void 0!==this.props.rowData[n]&&(t[e.name]=this.props.rowData[n])}),this),this.props.formFields){var n=[];this.props.formFields.forEach((function(e){var t=jQuery.extend(!0,{},e);t.value=this.state.formData[e.name],t.onChange=this.onFormUpdate.bind(this,e),t.error=this.state.errorMessages[e.name],n.push(d.default.createElement(w,(0,r.default)({key:e.name},t)))}),this),e=d.default.createElement(b,{title:this.props.title,message:this.props.message,onConfirm:this.sendRequest,onInvalid:this.onFormInvalid,onCancel:this.closeModal,confirmButtonText:this.props.confirmText,cancelButtonText:this.props.cancelText},n)}else e=d.default.createElement(y,{title:this.props.title,message:this.props.message,onConfirm:this.sendRequest,onCancel:this.closeModal,confirmButtonText:this.props.confirmText,cancelButtonText:this.props.cancelText});return d.default.createElement(h,{data:t,conditions:this.props.conditions},d.default.createElement("button",{className:"c4g-btn "+this.props.className,type:"button",onClick:this.showModal},d.default.createElement("span",{className:"c4g-btn-text"},this.props.buttonText)),d.default.createElement(g,{show:this.state.showModal&&!this.state.dynamicModal},e),d.default.createElement(g,{show:this.state.showModal&&this.state.dynamicModal},d.default.createElement(v,{title:this.state.dynamicTitle,message:this.state.dynamicMessage,onConfirm:this.state.dynamicOnConfirm,confirmButtonText:this.state.dynamicConfirmButtonText})))}}]),n}(d.Component);t.PostActionButton=E},16921:(e,t,n)=>{var o=n(95318),a=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.TableButton=void 0;var r=o(n(34575)),s=o(n(93913)),l=o(n(81506)),i=o(n(2205)),u=o(n(78585)),c=o(n(29754)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var l=r?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(o,s,l):o[s]=e[s]}o.default=e,n&&n.set(e,o);return o}(n(67294)),d=n(48167),p=o(n(86455)),m=o(n(77630));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return(0,u.default)(this,n)}}var v=f.default.lazy((function(){return n.e(7279).then(n.bind(n,77279))})),y=(0,m.default)(p.default),b=function(e){(0,i.default)(n,e);var t=g(n);function n(e){var o;return(0,r.default)(this,n),(o=t.call(this,e)).showPopupForm=o.showPopupForm.bind((0,l.default)(o)),o}return(0,s.default)(n,[{key:"showPopupForm",value:function(e,t){var n=this,o={updateFunction:function(){}},a=null;this.props.formHeadlineFieldIndex>-1&&(a=f.default.createElement("div",{id:"swal-popup-div"},this.props.rowData[this.props.formHeadlineFieldIndex]));var r=f.default.createElement(f.Suspense,{fallback:f.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},f.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""}))},f.default.createElement("form",{key:1,className:"form-view",method:"POST",id:"swal-popup-form"},this.props.formFields.map((function(e,a){return f.default.createElement(v,{form:{props:o,fields:n.props.formFields},field:e,data:t,key:a+1})}))));y.fire({title:f.default.createElement("p",null,this.props.text),html:f.default.createElement(f.default.Fragment,null,a,r),confirmButtonText:this.props.submitButtonLabel||this.props.languageRefs.CONFIRM,showConfirmButton:!0,showCancelButton:!0,cancelButtonText:this.props.cancelButtonLabel||this.props.languageRefs.CANCEL,customClass:{content:"zIndex-9",actions:"zIndex-8"}}).then((function(t){if(t.isConfirmed){for(var o=document.getElementById("swal-popup-form").elements,a={value:n.props.value},r=0;r<o.length;){var s=o.item(r);s.name&&(a[s.name]=s.value),r+=1}jQuery.post(n.props.url,a).done((function(e){(new d.AlertHandler).showInfoDialog(e.success.title,e.success.message,"")})).fail((function(t){var o=new d.AlertHandler;t.responseJSON.error?o.showInfoActionDialog(t.responseJSON.error.title,t.responseJSON.error.message,(function(){return n.showPopupForm(e,t.responseJSON.formData)}),""):t.responseJSON.actionRefresh&&o.showInfoActionDialog(t.responseJSON.actionRefresh.title,t.responseJSON.actionRefresh.message,(function(){return location.reload()}),"")}))}}))}},{key:"render",value:function(){var e=this;return this.props.href&&"undefined"!==this.props.href&&this.props.href!==this.props.value?f.default.createElement("a",{href:this.props.href,className:"btn btn-outline-secondary"},this.props.text):this.props.formFields.length>0?f.default.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return e.showPopupForm(event,{})}},this.props.text):void 0}}]),n}(f.Component);t.TableButton=b}}]);
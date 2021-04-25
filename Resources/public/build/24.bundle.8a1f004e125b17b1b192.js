/*! For license information please see 24.bundle.8a1f004e125b17b1b192.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[24,66],{103:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(o(45)),a=c(o(46)),s=c(o(47)),r=c(o(48)),l=c(o(49)),i=o(17),u=c(i);function c(e){return e&&e.__esModule?e:{default:e}}var d=u.default.lazy((function(){return o.e(68).then(o.t.bind(null,666,7))})),m=u.default.lazy((function(){return o.e(1).then(o.t.bind(null,240,7))})),p=function(e){function t(e){(0,a.default)(this,t);var o=(0,r.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return o.activeButton=null,o.state={errorTexts:{},loading:!1},e.component.toggleableLayout&&(o.state.toggled=!1),o.submitForm=o.submitForm.bind(o),o.toggleForm=o.toggleForm.bind(o),o}return(0,l.default)(t,e),(0,s.default)(t,[{key:"toggleForm",value:function(){this.setState({toggled:!this.state.toggled})}},{key:"render",value:function(){var e=this,t=[],o=[];this.props.component.buttons.forEach((function(e,o){t.push(u.default.createElement(i.Suspense,{fallback:u.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},u.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""})),key:o},u.default.createElement(d,{key:o,form:this,button:e,languageRefs:this.props.languageRefs})))}),this);var n=null;this.state.loading&&(n=u.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},u.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""})));var a=null;this.props.component.headline&&(a=u.default.createElement("span",{className:"form-headline"},this.props.component.headline));var s=this.props.component.fields.map((function(t,n){return"wrapper"===t.type?(o=o.concat(t.wrappedFields),u.default.createElement(i.Suspense,{fallback:u.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},u.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""}),"."),key:n},u.default.createElement(m,{key:n,field:t,data:e.props.component.data,parentNode:e,fields:e.props.component.fields,form:e,errorTexts:e.state.errorTexts||{},languageRefs:e.props.languageRefs}))):o.includes(t.name)?void 0:u.default.createElement(i.Suspense,{fallback:u.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},u.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""})),key:n},u.default.createElement(m,{key:n,field:t,data:e.props.component.data,parentNode:e,form:e,errorText:e.state.errorTexts?e.state.errorTexts[t.name]:{},languageRefs:e.props.languageRefs}))}));if(this.props.component.toggleableLayout){var r=this.props.component.toggleableBaseClass+"-form";this.props.component.class&&(r+=" "+this.props.component.class);var l=this.props.component.toggleableOffLabel,c="";return this.state.toggled&&(l=this.props.component.toggleableOnLabel,c=" "+this.props.component.toggleableOnClass),u.default.createElement("div",{className:this.props.component.toggleableBaseClass+"-outer"+c,hidden:this.props.component.hidden},u.default.createElement("div",{className:this.props.component.toggleableBaseClass+"-inner"},u.default.createElement("div",{className:this.props.component.toggleableBaseClass+"-button-wrapper"+c},u.default.createElement("button",{className:this.props.component.toggleableBaseClass+"-button"+c,onClick:this.toggleForm},l)),u.default.createElement("div",{className:this.props.component.toggleableBaseClass+"-form-wrapper"+c},u.default.createElement("form",{className:r,onSubmit:function(t){return e.submitForm(t)},method:this.props.component.method},a,s,u.default.createElement("div",{className:this.props.component.buttonWrapperClass},n,t)))))}return this.props.component.containerRow?this.props.component.renderAsForm?u.default.createElement("form",{className:this.props.component.class||"form-view",onSubmit:function(t){return e.submitForm(t)},method:this.props.component.method},u.default.createElement("div",{className:"container"},u.default.createElement("div",{className:"row"},a,s,u.default.createElement("div",{className:this.props.component.buttonWrapperClass},n,t)))):u.default.createElement("div",{className:this.props.component.class||"form-view",method:this.props.component.method},u.default.createElement("div",{className:"container"},u.default.createElement("div",{className:"row"},a,s,u.default.createElement("div",{className:this.props.component.buttonWrapperClass},n,t)))):this.props.component.renderAsForm?u.default.createElement("form",{className:this.props.component.class||"form-view",onSubmit:function(t){return e.submitForm(t)},method:this.props.component.method},a,s,u.default.createElement("div",{className:this.props.component.buttonWrapperClass},n,t)):u.default.createElement("div",{className:this.props.component.class||"form-view",method:this.props.component.method},a,s,u.default.createElement("div",{className:this.props.component.buttonWrapperClass},n,t))}},{key:"submitForm",value:function(e){this.activeButton.submitCallback(this,e)}},{key:"storePosition",value:function(){this.props.component.preservePosition&&window.localStorage.setItem("formPosition",document.documentElement.scrollTop+"")}},{key:"setErrorTexts",value:function(e){this.setState({errorTexts:e})}},{key:"setLoading",value:function(e){this.setState({loading:e})}},{key:"componentDidMount",value:function(){if(this.props.component.preservePosition){var e=window.localStorage,t=e.getItem("formPosition");t&&window.setTimeout((function(){document.documentElement.scrollTop=parseInt(t)}),3e3),e.removeItem("formPosition")}}}]),t}(i.Component);t.default=p},104:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=v(o(575)),a=v(o(576)),s=v(o(45)),r=v(o(46)),l=v(o(47)),i=v(o(48)),u=v(o(49)),c=o(17),d=v(c),m=(v(o(103)),o(779)),p=o(780),f=o(781),h=o(400),g=o(213),b=v(o(250));function v(e){return e&&e.__esModule?e:{default:e}}var E=(0,v(o(577)).default)(b.default),w=d.default.lazy((function(){return o.e(20).then(o.t.bind(null,784,7))})),y=d.default.lazy((function(){return o.e(1).then(o.t.bind(null,240,7))})),T=function(e){function t(e){(0,r.default)(this,t);var o=(0,i.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return o.getMuiTheme=function(){return(0,h.createMuiTheme)({overrides:{MuiPaper:{elevation4:{boxShadow:"none"}},MuiToolbar:{gutters:{backgroundColor:"#f8f9fa",borderRadius:"0.25rem",paddingTop:"10px",paddingBottom:"10px"}}}})},o.state={selectedItems:[],activeForm:!1,activeButton:null},o.formData=[],o.selectedItems=[],o.addSelectedItem=o.addSelectedItem.bind(o),o.handleButtonClick=o.handleButtonClick.bind(o),o.submitForm=o.submitForm.bind(o),o.cancelForm=o.cancelForm.bind(o),o.setFormData=o.setFormData.bind(o),o.fireRequest=o.fireRequest.bind(o),o}return(0,u.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this,t=null,o=null;this.state.selectedItems.length>0&&this.props.component.selectionButtons&&this.props.component.selectionButtons.length>0&&(t=d.default.createElement("div",{className:"action-button-container"},this.props.component.selectionButtons.map((function(t,o){return d.default.createElement("button",{className:"btn",key:o,onClick:function(){return e.handleButtonClick(t,o)}},t.label)})))),this.props.component.tableButtons&&this.props.component.tableButtons.length>0&&(o=d.default.createElement("div",{className:"action-button-container"},this.props.component.tableButtons.map((function(t,o){return d.default.createElement(m.TableButton,{key:o,text:t.label,href:t.href,languageRefs:e.props.languageRefs})}))));var n={textLabels:{body:{noMatch:this.props.languageRefs.TABLE_NO_MATCH,toolTip:this.props.languageRefs.TABLE_TOOLTIP,columnHeaderTooltip:function(e){return"Sortierung für "+e.label}},pagination:{next:this.props.languageRefs.TABLE_NEXT_PAGE,previous:this.props.languageRefs.TABLE_PREVIOUS_PAGE,rowsPerPage:this.props.languageRefs.TABLE_ROWS_PER_PAGE,displayRows:this.props.languageRefs.TABLE_DISPLAY_ROWS},toolbar:{search:this.props.languageRefs.TABLE_SEARCH,downloadCsv:this.props.languageRefs.TABLE_DOWNLOAD_CSV,print:this.props.languageRefs.TABLE_PRINT,viewColumns:this.props.languageRefs.TABLE_VIEW_COLUMNS,filterTable:this.props.languageRefs.TABLE_FILTER_TABLE},filter:{all:this.props.languageRefs.TABLE_FILTER_ALL,title:this.props.languageRefs.TABLE_FILTER_TITLE,reset:this.props.languageRefs.TABLE_FILTER_RESET},viewColumns:{title:this.props.languageRefs.TABLE_TITLE,titleAria:this.props.languageRefs.TABLE_TITLE_ARIA},selectedRows:{text:this.props.languageRefs.TABLE_SELECTED_TEXT,delete:this.props.languageRefs.TABLE_SELECTED_DELETE,deleteAria:this.props.languageRefs.TABLE_SELECTED_DELETE_ARIA}}};this.props.component.tableButtons&&this.props.component.tableButtons.length>0&&(n.customToolbar=function(){return d.default.createElement(d.default.Fragment,null,o)}),this.props.component.checkbox&&(n.onRowSelectionChange=function(t,o,n){e.addSelectedItem(t,o,n)}),this.props.component.selectionButtons&&this.props.component.selectionButtons.length>0&&(n.customToolbarSelect=function(){return d.default.createElement(d.default.Fragment,null,t)});var a=this.createColumns(this.props.fields);return this.props.component.checkbox?n.selectableRows="single":n.selectableRows="none",d.default.createElement("div",{className:""},d.default.createElement(h.MuiThemeProvider,{theme:this.getMuiTheme()},d.default.createElement(w,{data:this.props.data,columns:a,options:n,key:0,ref:function(t){return e.datatable=t},title:this.props.component.headline,responsive:!0})))}},{key:"setFormData",value:function(e,t){this.formData=(0,a.default)({},this.formData,t)}},{key:"addSelectedItem",value:function(e,t,o){this.setState({selectedItems:o})}},{key:"handleButtonClick",value:function(e,t){var o=this;e.form.props={},e.form.props.updateFunction=this.setFormData;var n=d.default.createElement(c.Suspense,{fallback:d.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},d.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""}))},d.default.createElement("form",{key:1,className:"form-view",method:"POST"},e.form.fields.map((function(t,o){return d.default.createElement(y,{form:e.form,field:t,data:[],key:o+1})}))));E.fire({title:d.default.createElement("p",null,e.label),html:n,confirmButtonText:e.submitButtonLabel||this.props.languageRefs.CONFIRM,showConfirmButton:!0,showCancelButton:!0,cancelButtonText:e.cancelButtonLabel||this.props.languageRefs.CANCEL,customClass:{content:"zIndex-9",actions:"zIndex-8"}}).then((function(t){t.isConfirmed?o.submitForm(e):o.cancelForm()}))}},{key:"submitForm",value:function(e){var t=this.state.selectedItems[0],o=this.props.data[t],n=e.form.url;this.formData.id=o.id,jQuery.post(n,this.formData).done((function(e){location.reload()}))}},{key:"cancelForm",value:function(){this.resetSelection()}},{key:"resetSelection",value:function(){this.datatable.selectRowDelete(),this.setState({selectedItems:[]}),this.selectedItems=[]}},{key:"createColumns",value:function(e){for(var t=this,o=[],a=function(a){var s=void 0;switch(e[a].type){case"text":o.push(e[a]);break;case"reference":(s=e[a]).options.customBodyRender=function(e,t,o){return s.references[e]},o.push(s);break;case"modal-detail-button":(s=e[a]).options.customBodyRender=function(e,t,o){return e?d.default.createElement(p.ModalDetailTableButton,{buttonLabel:s.buttonLabel,title:s.label,message:e,confirmButtonText:s.confirmButtonText,className:s.className}):""},o.push(s);break;case"datetime":(s=e[a]).options.customBodyRender=function(e,t,o){var n=new Date(1e3*e),a=n.getDate();a<10&&(a="0"+a);var s=n.getMonth()+1;s<10&&(s="0"+s);var r=n.getHours()+1;r<10&&(r="0"+r);var l=n.getMinutes()+1;return l<10&&(l="0"+l),a+"."+s+"."+n.getFullYear()+" "+r+":"+l},o.push(s);break;case"action-button":(s=e[a]).options.customBodyRender=function(o,a,r){for(var l=[],i=0;i<s.actions.length;i++){var u=s.actions[i];u.rowData=a.rowData,u.fields=e,u.setRowData=t.props.setRowData,u.value=o,l.push(d.default.createElement(f.PostActionButton,(0,n.default)({key:i},u)))}return d.default.createElement(d.default.Fragment,null,l)},o.push(s);break;case"button":var r={name:e[a].name,label:e[a].label,options:{sort:!1,filter:!1,customBodyRender:function(o,n,s){if("POST"===e[a].method){return d.default.createElement("a",{onMouseUp:function(n){n.preventDefault(),n.stopPropagation(),t.fireRequest(e[a].href.replace(e[a].hrefField,o))},className:"btn btn-secondary"},e[a].buttonText)}return d.default.createElement(m.TableButton,{href:e[a].href.replace(e[a].hrefField,o),text:e[a].buttonText,formFields:e[a].formFields,submitButtonLabel:e[a].submitButtonLabel,cancelButtonLabel:e[a].cancelButtonLabel,url:e[a].url,formHeadlineFieldIndex:e[a].formHeadlineFieldIndex,value:o,rowData:n.rowData})}}};o.push(r);break;case"conditional-marker":var l=e[a].markers,i={name:e[a].name,label:e[a].label,options:{sort:!1,customBodyRender:function(e){var t=l[e];return d.default.createElement("span",{className:t.class,"data-state":t.dataState,"data-toggle":t.dataToggle,"data-placement":t.dataPlacement,title:t.title})}}};o.push(i);break;default:o.push(e[a])}},s=0;s<e.length;s++)a(s);return o}},{key:"fireRequest",value:function(e){(new g.AlertHandler).showConfirmDialog(this.props.component.confirmationHeadline,this.props.component.confirmationMessage,(function(){jQuery.post(e).done((function(e){e.success&&location.reload()}))}),(function(){}),this.props.component.confirmationYes,this.props.component.confirmationNo)}}]),t}(c.Component);t.default=T},213:function(e,t,o){"use strict";o.r(t),o.d(t,"AlertHandler",(function(){return s}));var n=o(342),a=o.n(n);class s{showErrorDialog(e,t,o){a.a.fire({title:e,text:t,type:"error",customClass:o||""})}showInfoDialog(e,t,o){a.a.fire({title:e,text:t,type:"info",customClass:o||""})}showInfoActionDialog(e,t,o,n){a.a.fire({title:e,text:t,type:"info",customClass:n||""}).then((function(){o()}))}showInfoActionDialog2(e,t,o,n){a.a.fire({title:e,text:t,type:"info",showLoaderOnConfirm:!0,customClass:n||"",preConfirm:e=>{o()}})}showConfirmDialog(e,t,o,n,s,r,l){a.a.fire({title:e,text:t,type:"warning",showCancelButton:!0,confirmButtonText:s||"Confirm",cancelButtonText:r||"Cancel",dangerMode:!0,customClass:l||""}).then((e=>{e.value?o():n()}))}showConfirmDialogHTML(e,t,o,n,s,r,l){a.a.fire({title:e,html:t,type:"warning",showCancelButton:!0,confirmButtonText:s||"Confirm",cancelButtonText:r||"Cancel",dangerMode:!0,customClass:l||""}).then((e=>{e.value?o():n()}))}showPreConfirmDialog(e,t,o,n,s,r,l){a.a.fire({title:e,text:t,type:"warning",showCancelButton:!0,confirmButtonText:n||"Confirm",cancelButtonText:s||"Cancel",showLoaderOnConfirm:l||!0,preConfirm:function(){return new Promise((function(e){o()}))},allowOutsideClick:()=>!a.a.isLoading(),dangerMode:!0,customClass:r||""})}showLoadingDialog(e,t,o,n){a.a.fire({title:e,text:t,showCancelButton:!1,allowEscapeKey:!1,allowOutsideClick:!1,showLoaderOnConfirm:!0,onBeforeOpen:()=>{a.a.clickConfirm()},customClass:n||"",preConfirm:()=>new Promise((function(e){o()}))})}async showSelectDialog(e,t,o,n,s){const{value:r}=await a.a.fire({title:e,input:"select",inputOptions:t,inputPlaceholder:"Select a fruit",showCancelButton:!0,confirmButtonText:o,cancelButtonText:n,customClass:s||""});return r}}},779:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TableButton=void 0;var n=p(o(45)),a=p(o(46)),s=p(o(47)),r=p(o(48)),l=p(o(49)),i=o(17),u=p(i),c=o(213),d=p(o(250)),m=p(o(577));function p(e){return e&&e.__esModule?e:{default:e}}var f=u.default.lazy((function(){return o.e(1).then(o.t.bind(null,240,7))})),h=(0,m.default)(d.default);t.TableButton=function(e){function t(e){(0,a.default)(this,t);var o=(0,r.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return o.showPopupForm=o.showPopupForm.bind(o),o}return(0,l.default)(t,e),(0,s.default)(t,[{key:"showPopupForm",value:function(e,t){var o=this,n={updateFunction:function(){}},a=null;this.props.formHeadlineFieldIndex>-1&&(a=u.default.createElement("div",{id:"swal-popup-div"},this.props.rowData[this.props.formHeadlineFieldIndex]));var s=u.default.createElement(i.Suspense,{fallback:u.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},u.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""}))},u.default.createElement("form",{key:1,className:"form-view",method:"POST",id:"swal-popup-form"},this.props.formFields.map((function(e,a){return u.default.createElement(f,{form:{props:n,fields:o.props.formFields},field:e,data:t,key:a+1})}))));h.fire({title:u.default.createElement("p",null,this.props.text),html:u.default.createElement(u.default.Fragment,null,a,s),confirmButtonText:this.props.submitButtonLabel||this.props.languageRefs.CONFIRM,showConfirmButton:!0,showCancelButton:!0,cancelButtonText:this.props.cancelButtonLabel||this.props.languageRefs.CANCEL,customClass:{content:"zIndex-9",actions:"zIndex-8"}}).then((function(t){if(t.isConfirmed){for(var n=document.getElementById("swal-popup-form").elements,a={value:o.props.value},s=0;s<n.length;){var r=n.item(s);r.name&&(a[r.name]=r.value),s+=1}jQuery.post(o.props.url,a).done((function(e){(new c.AlertHandler).showInfoDialog(e.success.title,e.success.message,"")})).fail((function(t){var n=new c.AlertHandler;t.responseJSON.error?n.showInfoActionDialog(t.responseJSON.error.title,t.responseJSON.error.message,(function(){return o.showPopupForm(e,t.responseJSON.formData)}),""):t.responseJSON.actionRefresh&&n.showInfoActionDialog(t.responseJSON.actionRefresh.title,t.responseJSON.actionRefresh.message,(function(){return location.reload()}),"")}))}}))}},{key:"render",value:function(){var e=this;return this.props.href&&"undefined"!==this.props.href&&this.props.href!==this.props.value?u.default.createElement("a",{href:this.props.href,className:"btn btn-outline-secondary"},this.props.text):this.props.formFields.length>0?u.default.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return e.showPopupForm(event,{})}},this.props.text):void 0}}]),t}(i.Component)},780:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ModalDetailTableButton=void 0;var n=c(o(45)),a=c(o(46)),s=c(o(47)),r=c(o(48)),l=c(o(49)),i=o(17),u=c(i);function c(e){return e&&e.__esModule?e:{default:e}}var d=u.default.lazy((function(){return o.e(4).then(o.t.bind(null,372,7))})),m=u.default.lazy((function(){return o.e(6).then(o.t.bind(null,373,7))}));t.ModalDetailTableButton=function(e){function t(e){(0,a.default)(this,t);var o=(0,r.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return o.state={showModal:!1},o.showModal=o.showModal.bind(o),o.closeModal=o.closeModal.bind(o),o}return(0,l.default)(t,e),(0,s.default)(t,[{key:"showModal",value:function(){this.setState({showModal:!0})}},{key:"closeModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return u.default.createElement(u.default.Fragment,null,u.default.createElement("button",{className:"c4g-btn "+this.props.className,type:"button",onClick:this.showModal},this.props.buttonLabel),u.default.createElement(d,{show:this.state.showModal},u.default.createElement(m,{title:this.props.title,message:this.props.message,onConfirm:this.closeModal,confirmButtonText:this.props.confirmButtonText})))}}]),t}(i.Component)},781:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PostActionButton=void 0;var n=d(o(575)),a=d(o(45)),s=d(o(46)),r=d(o(47)),l=d(o(48)),i=d(o(49)),u=o(17),c=d(u);function d(e){return e&&e.__esModule?e:{default:e}}var m=c.default.lazy((function(){return o.e(51).then(o.t.bind(null,1029,7))})),p=c.default.lazy((function(){return o.e(4).then(o.t.bind(null,372,7))})),f=c.default.lazy((function(){return o.e(6).then(o.t.bind(null,373,7))})),h=c.default.lazy((function(){return o.e(86).then(o.t.bind(null,1030,7))})),g=c.default.lazy((function(){return o.e(87).then(o.t.bind(null,1031,7))})),b=c.default.lazy((function(){return o.e(83).then(o.t.bind(null,1032,7))}));t.PostActionButton=function(e){function t(e){(0,s.default)(this,t);var o=(0,l.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));if(o.showModal=o.showModal.bind(o),o.closeModal=o.closeModal.bind(o),o.resetModal=o.resetModal.bind(o),o.showDynamicModal=o.showDynamicModal.bind(o),o.sendRequest=o.sendRequest.bind(o),o.onRequestDone=o.onRequestDone.bind(o),o.onRequestFail=o.onRequestFail.bind(o),o.onFormInvalid=o.onFormInvalid.bind(o),o.state={showModal:!1,dynamicModal:!1,dynamicTitle:"",dynamicMessage:"",dynamicConfirmButtonText:"",dynamicOnConfirm:o.resetModal},o.props.formFields){var n={};o.props.formFields.forEach((function(e){n[e.name]=e.value||""}),o),o.state.formData=n,o.state.errorMessages={}}return o}return(0,i.default)(t,e),(0,r.default)(t,[{key:"showModal",value:function(){this.setState({showModal:!0})}},{key:"closeModal",value:function(){if(this.props.formFields){var e={};this.props.formFields.forEach((function(t){e[t.name]=t.value||""}),this),this.setState({formData:e,errorMessages:{},showModal:!1})}else this.setState({showModal:!1})}},{key:"resetModal",value:function(){this.setState({showModal:!1,dynamicModal:!1,dynamicTitle:"",dynamicMessage:"",dynamicConfirmButtonText:"",dynamicOnConfirm:this.resetModal})}},{key:"showDynamicModal",value:function(e,t,o,n){this.setState({showModal:!0,dynamicModal:!0,dynamicTitle:e,dynamicMessage:t,dynamicConfirmButtonText:o,dynamicOnConfirm:n})}},{key:"onFormUpdate",value:function(e,t){var o=this.state.formData;o[e.name]=t,this.setState({formData:o})}},{key:"onFormInvalid",value:function(e){this.setState({errorMessages:e})}},{key:"sendRequest",value:function(){var e={};this.props.fields.forEach((function(t,o){e[t.name]=this.props.rowData[o]}),this),e.REQUEST_TOKEN=this.props.REQUEST_TOKEN,e.formData=this.state.formData,jQuery.post(this.props.url,e).done(this.onRequestDone).fail(this.onRequestFail),this.closeModal()}},{key:"onRequestDone",value:function(e){try{e.success.rowData?this.showDynamicModal(e.success.title,e.success.message,e.success.confirmButtonText,this.updateRow.bind(this,e.success.rowData)):this.showDynamicModal(e.success.title,e.success.message,e.success.confirmButtonText,this.resetModal)}catch(e){this.resetModal()}}},{key:"onRequestFail",value:function(e){var t=e.responseJSON;try{t.error.reload&&this.showDynamicModal(t.error.title,t.error.message,t.error.confirmButtonText,location.reload),this.showDynamicModal(t.error.title,t.error.message,t.error.confirmButtonText,this.resetModal)}catch(e){this.resetModal()}}},{key:"updateRow",value:function(e){this.props.setRowData(e,this.props.value),this.resetModal()}},{key:"render",value:function(){var e={};this.props.fields.forEach((function(t,o){void 0!==this.props.rowData[o]&&(e[t.name]=this.props.rowData[o])}),this);var t=void 0;if(this.props.formFields){var o=[];this.props.formFields.forEach((function(e){var t=jQuery.extend(!0,{},e);t.value=this.state.formData[e.name],t.onChange=this.onFormUpdate.bind(this,e),t.error=this.state.errorMessages[e.name],o.push(c.default.createElement(b,(0,n.default)({key:e.name},t)))}),this),t=c.default.createElement(g,{title:this.props.title,message:this.props.message,onConfirm:this.sendRequest,onInvalid:this.onFormInvalid,onCancel:this.closeModal,confirmButtonText:this.props.confirmText,cancelButtonText:this.props.cancelText},o)}else t=c.default.createElement(h,{title:this.props.title,message:this.props.message,onConfirm:this.sendRequest,onCancel:this.closeModal,confirmButtonText:this.props.confirmText,cancelButtonText:this.props.cancelText});return c.default.createElement(m,{data:e,conditions:this.props.conditions},c.default.createElement("button",{className:"c4g-btn "+this.props.className,type:"button",onClick:this.showModal},c.default.createElement("span",{className:"c4g-btn-text"},this.props.buttonText)),c.default.createElement(p,{show:this.state.showModal&&!this.state.dynamicModal},t),c.default.createElement(p,{show:this.state.showModal&&this.state.dynamicModal},c.default.createElement(f,{title:this.state.dynamicTitle,message:this.state.dynamicMessage,onConfirm:this.state.dynamicOnConfirm,confirmButtonText:this.state.dynamicConfirmButtonText})))}}]),t}(u.Component)}}]);
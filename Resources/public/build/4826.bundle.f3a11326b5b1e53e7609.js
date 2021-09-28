/*! For license information please see 4826.bundle.f3a11326b5b1e53e7609.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[4826],{34826:(e,t,i)=>{var n=i(95318),a=i(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i(87757)),l=n(i(48926)),o=n(i(34575)),u=n(i(93913)),f=n(i(81506)),s=n(i(2205)),p=n(i(78585)),d=n(i(29754)),c=n(i(59713)),h=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var i=y(t);if(i&&i.has(e))return i.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=r?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e,i&&i.set(e,n);return n}(i(67294)),g=n(i(96120));i(53719);var m=n(i(86455)),v=n(i(49303)),C=n(i(6404));function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(y=function(e){return e?i:t})(e)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=(0,d.default)(e);if(t){var a=(0,d.default)(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return(0,p.default)(this,i)}}var b=function(e){(0,s.default)(a,e);var t,i,n=w(a);function a(e){var t;return(0,o.default)(this,a),t=n.call(this,e),(0,c.default)((0,f.default)(t),"onSelectFile",(function(e){if(e.target.files&&e.target.files.length>0)if(t.checkFileSize(e.target.files[0]))if(t.allowedFileTypes.includes(e.target.files[0].type)){var i=e.target.files[0].name,n=e.target.files[0].type;(0,v.default)(e.target.files[0],(function(e){var a=e.toDataURL(n);t.setState({src:a,imageName:i})}),{orientation:!0,canvas:!0})}else m.default.fire({icon:"error",title:t.props.field.titleFileTooBig,text:t.props.field.textFileTooBig}),e.target.value="";else m.default.fire({icon:"error",title:t.props.field.titleFileTooBig,text:t.props.field.textFileTooBig}),e.target.value=""})),(0,c.default)((0,f.default)(t),"onImageLoaded",(function(e){t.imageRef=e;var i=JSON.parse(JSON.stringify(t.state.crop));if(t.props.data[t.props.field.name]){var n=t.props.data[t.props.field.name].importantPart;return i.x=n.x*t.imageRef.width,i.y=n.y*t.imageRef.height,i.width=n.width*t.imageRef.width,i.height=n.height*t.imageRef.height,i.unit="px",t.setState({crop:i},(function(){return t.onCropComplete(i)})),!1}})),(0,c.default)((0,f.default)(t),"onCropChange",(function(e,i){t.setState({crop:i})})),t.getCroppedImg=t.getCroppedImg.bind((0,f.default)(t)),t.onSelectFile=t.onSelectFile.bind((0,f.default)(t)),t.onImageLoaded=t.onImageLoaded.bind((0,f.default)(t)),t.onCropComplete=t.onCropComplete.bind((0,f.default)(t)),t.makeClientCrop=t.makeClientCrop.bind((0,f.default)(t)),t.onCropChange=t.onCropChange.bind((0,f.default)(t)),t.unsetImage=t.unsetImage.bind((0,f.default)(t)),t.state={src:null,imageName:"",crop:{unit:"%",width:90,height:90,x:5,y:5},croppedImageUrl:null},t.props.data[t.props.field.name]&&(t.state.src=t.props.data[t.props.field.name].path,t.state.imageName=t.props.data[t.props.field.name].name),t.allowedFileTypes=["image/png","image/jpeg","image/jpg"],t.inputRef=null,t}return(0,u.default)(a,[{key:"onCropComplete",value:(i=(0,l.default)(r.default.mark((function e(t){var i,n;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.makeClientCrop(t);case 2:i={imageData:this.state.src,importantPart:{x:t.x/this.imageRef.width,y:t.y/this.imageRef.height,width:t.width/this.imageRef.width,height:t.height/this.imageRef.height},imageName:this.state.imageName},(n=this.props.data)[this.props.field.name]=i,this.props.form.props.updateFunction(this.props.form.props.name,n,this.props.field);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{key:"makeClientCrop",value:(t=(0,l.default)(r.default.mark((function e(t){var i;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.imageRef&&t.width&&t.height)){e.next=5;break}return e.next=3,this.getCroppedImg(this.imageRef,t,"newFile.jpeg");case 3:i=e.sent,this.setState({croppedImageUrl:i});case 5:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"getCroppedImg",value:function(e,t,i){var n=document.createElement("canvas"),a=e.naturalWidth/e.width,r=e.naturalHeight/e.height;return n.width=t.width,n.height=t.height,n.getContext("2d").drawImage(e,t.x*a,t.y*r,t.width*a,t.height*r,0,0,t.width,t.height),n.toDataURL("image/jpeg")}},{key:"checkFileSize",value:function(e){var t,i=e.size;return!(i>1e3&&(t=i/1e3)>1e3&&t/1e3>6)}},{key:"render",value:function(){var e=this;if(!(0,C.default)(this.props.field,this.props.data,this.props.fields))return null;var t=null;this.props.field.label&&(t=this.props.field.required?h.default.createElement("label",{className:"label-file c4g-required"},this.props.field.label):h.default.createElement("label",{className:"label-file"},this.props.field.label));var i=this.state,n=i.crop,a=i.croppedImageUrl,r=i.src,l=this.props.field.name,o=null;return this.props.field.description&&(o=h.default.createElement("small",{className:"field-description form-text text-muted"},this.props.field.description)),h.default.createElement(h.default.Fragment,null,h.default.createElement("div",{className:"form-group"},t,h.default.createElement("input",{type:"file",accept:".jpg, .png, .jpeg",onChange:this.onSelectFile,id:l,ref:function(t){e.inputRef=t},name:l+(this.props.field.max>1?"[]":""),className:"form-control-file"}),o),r&&h.default.createElement(g.default,{src:r,crop:n,ruleOfThirds:!0,onImageLoaded:this.onImageLoaded,onComplete:this.onCropComplete,onChange:this.onCropChange}),a&&h.default.createElement("img",{alt:"Crop",style:{maxWidth:"100%"},src:a}),r&&h.default.createElement("button",{onClick:this.unsetImage,title:this.props.languageRefs.CLICK_TO_REMOVE_IMAGE,className:"btn btn-primary btn-remove remove-image "+this.props.field.name},this.props.languageRefs.REMOVE_IMAGE))}},{key:"unsetImage",value:function(){var e=this.props.data;e[this.props.field.name]=null,this.setState({src:null,imageName:null,crop:null,croppedImageUrl:null}),null!==this.inputRef&&(this.inputRef.value=""),this.props.form.props.updateFunction(this.props.form.props.name,e,this.props.field)}}]),a}(h.Component);t.default=b},6404:(e,t)=>{function i(e){if(e.conditionField&&e.conditionValue&&"function"==typeof e.conditionField.forEach&&"function"==typeof e.conditionValue.forEach&&e.conditionField.length>0){if(e.conditionField.length===e.conditionValue.length)return!0;if(e.conditionValue.length>1&&1===e.conditionField.length)return!0}return!1}function n(e,t){var i=!0;if(e.conditionField.length===e.conditionValue.length)e.conditionField.forEach((function(n,a){void 0===t[n]?i=!1:null===t[n]||t[n].value||String(t[n])===String(e.conditionValue[a])?(t[n]&&t[n].value&&String(t[n].value)!==String(e.conditionValue[a])||null===t[n]&&null!==e.conditionValue[a])&&(i=!1):i=!1}),this);else if(e.conditionValue.length>1&&1===e.conditionField.length){var n=e.conditionField[0];for(var a in i=!1,e.conditionValue)if(e.conditionValue.hasOwnProperty(a)){var r=e.conditionValue[a];if(t[n]&&t[n].value?t[n].value===r&&(i=!0):t[n]===r&&(i=!0),i)break}}return i}Object.defineProperty(t,"__esModule",{value:!0}),t.hasConditions=i,t.checkConditions=n,t.default=function(e,t,a){if(i(e)){var r=null;if(a.forEach((function(t,i){1===e.conditionField.length&&t.name===e.conditionField[0]&&(r=t)})),null!==r){return i(r)?n(r,t)&&n(e,t):n(e,t)}return n(e,t)}return!0}}}]);
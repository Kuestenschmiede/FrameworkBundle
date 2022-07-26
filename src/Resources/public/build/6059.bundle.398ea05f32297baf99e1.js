"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[6059],{66059:(e,t,a)=>{var i=a(64836),r=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(64687)),l=i(a(17156)),o=i(a(56690)),p=i(a(89728)),s=i(a(66115)),u=i(a(61655)),f=i(a(94993)),d=i(a(73808)),c=i(a(38416)),h=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=y(t);if(a&&a.has(e))return a.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=n?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(i,l,o):i[l]=e[l]}i.default=e,a&&a.set(e,i);return i}(a(67294)),m=i(a(96120));a(53719);var g=i(a(86455)),v=i(a(49303));function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(y=function(e){return e?a:t})(e)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,i=(0,d.default)(e);if(t){var r=(0,d.default)(this).constructor;a=Reflect.construct(i,arguments,r)}else a=i.apply(this,arguments);return(0,f.default)(this,a)}}var w=function(e){(0,u.default)(r,e);var t,a,i=C(r);function r(e){var t;return(0,o.default)(this,r),t=i.call(this,e),(0,c.default)((0,s.default)(t),"onSelectFile",(function(e){if(e.target.files&&e.target.files.length>0){e.target.files[0].name;if(t.checkFileSize(e.target.files[0])){if(t.allowedFileTypes.includes(e.target.files[0].type)){var a=e.target.files[0].name,i=e.target.files[0].type;(0,v.default)(e.target.files[0],(function(e){var r=e.toDataURL(i);t.setState({src:r,imageName:a})}),{orientation:!0,canvas:!0})}}else g.default.fire({icon:"error",title:t.props.field.titleFileTooBig,text:t.props.field.textFileTooBig}),e.target.value=""}})),(0,c.default)((0,s.default)(t),"onImageLoaded",(function(e){t.imageRef=e;var a=JSON.parse(JSON.stringify(t.state.crop));if(t.props.data[t.props.field.name]){var i=t.props.data[t.props.field.name].importantPart;return i||(i={x:.05,y:.05,height:.9,width:.9}),a.x=i.x*t.imageRef.width,a.y=i.y*t.imageRef.height,a.width=i.width*t.imageRef.width,a.height=i.height*t.imageRef.height,a.unit="px",t.setState({crop:a},(function(){return t.onCropComplete(a)})),!1}})),(0,c.default)((0,s.default)(t),"onCropChange",(function(e,a){t.setState({crop:a})})),t.getCroppedImg=t.getCroppedImg.bind((0,s.default)(t)),t.onSelectFile=t.onSelectFile.bind((0,s.default)(t)),t.onImageLoaded=t.onImageLoaded.bind((0,s.default)(t)),t.onCropComplete=t.onCropComplete.bind((0,s.default)(t)),t.makeClientCrop=t.makeClientCrop.bind((0,s.default)(t)),t.onCropChange=t.onCropChange.bind((0,s.default)(t)),t.unsetImage=t.unsetImage.bind((0,s.default)(t)),t.state={src:null,imageName:"",crop:{unit:"%",width:90,height:90,x:5,y:5},croppedImageUrl:null},t.props.data[t.props.field.name]&&(t.state.src=t.props.data[t.props.field.name].path,t.state.imageName=t.props.data[t.props.field.name].name),t.inputRef=null,t.allowedFileTypes=["image/png","image/jpeg","image/jpg"],t}return(0,p.default)(r,[{key:"checkFileSize",value:function(e){var t,a=e.size;return!(a>1e3&&(t=a/1e3)>1e3&&t/1e3>6)}},{key:"onCropComplete",value:(a=(0,l.default)(n.default.mark((function e(t){var a,i;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.makeClientCrop(t);case 2:a={imageData:this.state.src,importantPart:{x:t.x/this.imageRef.width,y:t.y/this.imageRef.height,width:t.width/this.imageRef.width,height:t.height/this.imageRef.height},imageName:this.state.imageName},(i=this.props.data)[this.props.field.name]=a,this.props.form.props.updateFunction(this.props.form.props.name,i,this.props.field),jQuery.post(this.props.field.uploadUrl,{image:a,childId:i.uuid}).done((function(e){}));case 7:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{key:"makeClientCrop",value:(t=(0,l.default)(n.default.mark((function e(t){var a;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.imageRef&&t.width&&t.height)){e.next=5;break}return e.next=3,this.getCroppedImg(this.imageRef,t,"newFile.jpeg");case 3:a=e.sent,this.setState({croppedImageUrl:a});case 5:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"getCroppedImg",value:function(e,t,a){var i=document.createElement("canvas"),r=e.naturalWidth/e.width,n=e.naturalHeight/e.height;return i.width=t.width,i.height=t.height,i.getContext("2d").drawImage(e,t.x*r,t.y*n,t.width*r,t.height*n,0,0,t.width,t.height),i.toDataURL("image/jpeg")}},{key:"render",value:function(){var e=this,t=null;this.props.field.label&&(t=this.props.field.required?h.default.createElement("label",{className:"label-file c4g-required"},this.props.field.label):h.default.createElement("label",{className:"label-file"},this.props.field.label));var a=this.state,i=a.crop,r=a.croppedImageUrl,n=a.src,l=this.props.field.name,o=null;this.props.field.description&&(o=h.default.createElement("small",{className:"field-description form-text text-muted"},this.props.field.description));var p=null;return n&&(p=(p=n.split("/"))[p.length-1]),h.default.createElement(h.default.Fragment,null,h.default.createElement("div",{className:"form-group"},t,h.default.createElement("input",{type:"file",accept:".jpg, .png, .jpeg",onChange:this.onSelectFile,id:l,className:"form-control-file",ref:function(t){e.inputRef=t},required:this.props.field.required&&!r}),p&&h.default.createElement("input",{type:"hidden",name:l,value:p}),o),n&&h.default.createElement(m.default,{src:n,crop:i,ruleOfThirds:!0,onImageLoaded:this.onImageLoaded,onComplete:this.onCropComplete,onChange:this.onCropChange}),r&&h.default.createElement("img",{alt:"Crop",style:{maxWidth:"100%"},src:r}),n&&h.default.createElement("button",{onClick:this.unsetImage,title:this.props.languageRefs.CLICK_TO_REMOVE_IMAGE,className:"btn btn-primary btn-remove remove-image "+this.props.field.name},this.props.languageRefs.REMOVE_IMAGE))}},{key:"unsetImage",value:function(){var e=this.props.data;e[this.props.field.name]=null,this.setState({src:null,imageName:null,crop:null,croppedImageUrl:null}),this.inputRef&&(this.inputRef.value=""),this.props.form.props.updateFunction(this.props.form.props.name,e,this.props.field);var t={uuid:e.uuid,fieldName:this.props.field.name};jQuery.post(this.props.field.removeImageUrl,t).done((function(e){}))}}]),r}(h.Component);t.default=w}}]);
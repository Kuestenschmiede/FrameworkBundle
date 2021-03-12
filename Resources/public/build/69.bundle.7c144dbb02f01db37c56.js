/*! For license information please see 69.bundle.7c144dbb02f01db37c56.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{600:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=c(a(594)),r=c(a(595)),n=c(a(53)),l=c(a(45)),o=c(a(46)),p=c(a(47)),s=c(a(48)),d=c(a(49)),u=a(17),f=c(u),m=c(a(597));a(598);var h=c(a(254)),g=c(a(599));function c(e){return e&&e.__esModule?e:{default:e}}var C=function(e){function t(e){(0,o.default)(this,t);var a=(0,s.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.onSelectFile=function(e){if(e.target.files&&e.target.files.length>0){e.target.files[0].name;if(a.checkFileSize(e.target.files[0])){if(a.allowedFileTypes.includes(e.target.files[0].type)){var t=e.target.files[0].name,i=e.target.files[0].type;(0,g.default)(e.target.files[0],(function(e){var r=e.toDataURL(i);a.setState({src:r,imageName:t})}),{orientation:!0,canvas:!0})}}else h.default.fire({icon:"error",title:a.props.field.titleFileTooBig,text:a.props.field.textFileTooBig}),e.target.value=""}},a.onImageLoaded=function(e){a.imageRef=e;var t=JSON.parse((0,n.default)(a.state.crop));if(a.props.data[a.props.field.name]){var i=a.props.data[a.props.field.name].importantPart;return t.x=i.x*a.imageRef.width,t.y=i.y*a.imageRef.height,t.width=i.width*a.imageRef.width,t.height=i.height*a.imageRef.height,t.unit="px",a.setState({crop:t},(function(){return a.onCropComplete(t)})),!1}},a.onCropChange=function(e,t){a.setState({crop:t})},a.getCroppedImg=a.getCroppedImg.bind(a),a.onSelectFile=a.onSelectFile.bind(a),a.onImageLoaded=a.onImageLoaded.bind(a),a.onCropComplete=a.onCropComplete.bind(a),a.makeClientCrop=a.makeClientCrop.bind(a),a.onCropChange=a.onCropChange.bind(a),a.unsetImage=a.unsetImage.bind(a),a.state={src:null,imageName:"",crop:{unit:"%",width:90,height:90,x:5,y:5},croppedImageUrl:null},a.props.data[a.props.field.name]&&(a.state.src=a.props.data[a.props.field.name].path,a.state.imageName=a.props.data[a.props.field.name].name),a.allowedFileTypes=["image/png","image/jpeg","image/jpg"],a}var a,u;return(0,d.default)(t,e),(0,p.default)(t,[{key:"checkFileSize",value:function(e){var t=e.size,a=void 0;return!(t>1e3&&(a=t/1e3)>1e3&&a/1e3>6)}},{key:"onCropComplete",value:(u=(0,r.default)(i.default.mark((function e(t){var a,r;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.makeClientCrop(t);case 2:a={imageData:this.state.src,importantPart:{x:t.x/this.imageRef.width,y:t.y/this.imageRef.height,width:t.width/this.imageRef.width,height:t.height/this.imageRef.height},imageName:this.state.imageName},(r=this.props.data)[this.props.field.name]=a,this.props.form.props.updateFunction(this.props.form.props.name,r),jQuery.post(this.props.field.uploadUrl,{image:a,childId:r.uuid}).done((function(e){}));case 7:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)})},{key:"makeClientCrop",value:(a=(0,r.default)(i.default.mark((function e(t){var a;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.imageRef&&t.width&&t.height)){e.next=5;break}return e.next=3,this.getCroppedImg(this.imageRef,t,"newFile.jpeg");case 3:a=e.sent,this.setState({croppedImageUrl:a});case 5:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{key:"getCroppedImg",value:function(e,t,a){var i=document.createElement("canvas"),r=e.naturalWidth/e.width,n=e.naturalHeight/e.height;return i.width=t.width,i.height=t.height,i.getContext("2d").drawImage(e,t.x*r,t.y*n,t.width*r,t.height*n,0,0,t.width,t.height),i.toDataURL("image/jpeg")}},{key:"render",value:function(){var e=null;this.props.field.label&&(e=this.props.field.required?f.default.createElement("label",{className:"label-file c4g-required"},this.props.field.label):f.default.createElement("label",{className:"label-file"},this.props.field.label));var t=this.state,a=t.crop,i=t.croppedImageUrl,r=t.src,n=this.props.field.name,l=null;this.props.field.description&&(l=f.default.createElement("small",{className:"field-description form-text text-muted"},this.props.field.description));var o=null;return r&&(o=(o=r.split("/"))[o.length-1]),f.default.createElement(f.default.Fragment,null,f.default.createElement("div",{className:"form-group"},e,f.default.createElement("input",{type:"file",accept:".jpg, .png, .jpeg",onChange:this.onSelectFile,id:n,className:"form-control-file",required:this.props.field.required&&!i}),o&&f.default.createElement("input",{type:"hidden",name:n,value:o}),l),r&&f.default.createElement(m.default,{src:r,crop:a,ruleOfThirds:!0,onImageLoaded:this.onImageLoaded,onComplete:this.onCropComplete,onChange:this.onCropChange}),i&&f.default.createElement("img",{alt:"Crop",style:{maxWidth:"100%"},src:i}),i&&f.default.createElement("button",{onClick:this.unsetImage,title:this.props.languageRefs.CLICK_TO_REMOVE_IMAGE,className:"btn btn-primary remove-image "+this.props.field.name},this.props.languageRefs.REMOVE_IMAGE))}},{key:"unsetImage",value:function(){var e=this.props.data;e[this.props.field.name]=null,this.setState({src:null,imageName:null,crop:null,croppedImageUrl:null}),this.props.form.props.updateFunction(this.props.form.props.name,e);var t={uuid:e.uuid,fieldName:this.props.field.name};jQuery.post(this.props.field.removeImageUrl,t).done((function(e){}))}}]),t}(u.Component);t.default=C}}]);
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[8721],{68721:(e,t,r)=>{var l=r(95318),a=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(59713)),i=l(r(34575)),o=l(r(93913)),s=l(r(2205)),d=l(r(78585)),u=l(r(29754)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=h(t);if(r&&r.has(e))return r.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(l,i,o):l[i]=e[i]}l.default=e,r&&r.set(e,l);return l}(r(67294)),f=r(72757),c=l(r(5234));l(r(28292));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(h=function(e){return e?r:t})(e)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,l=(0,u.default)(e);if(t){var a=(0,u.default)(this).constructor;r=Reflect.construct(l,arguments,a)}else r=l.apply(this,arguments);return(0,d.default)(this,r)}}var b=function(e){(0,s.default)(r,e);var t=m(r);function r(e){var l;return(0,i.default)(this,r),(l=t.call(this,e)).editor=null,l}return(0,o.default)(r,[{key:"handleChangeDummy",value:function(e){}},{key:"render",value:function(){var e=this,t=null;this.props.field.label&&(t=this.props.field.required?p.default.createElement("label",{className:"c4g-required"},this.props.field.label):p.default.createElement("label",null,this.props.field.label));var r=null;return this.props.field.description&&(r=p.default.createElement("small",{className:"field-description form-text text-muted"},this.props.field.description)),p.default.createElement("div",{className:this.props.field.name},t,p.default.createElement("div",{id:this.props.field.name},p.default.createElement(f.CKEditor,{editor:c.default,data:this.props.data[this.props.field.name],onReady:function(t){e.editor=t},onChange:function(t,r){var l=r.getData();e.props.form.props.updateFunction(e.props.form.props.name,(0,n.default)({},e.props.field.name,l),e.props.field)},onBlur:function(e,t){},onFocus:function(e,t){},config:{placeholder:this.props.field.placeholder,toolbar:["heading","|","bold","italic","bulletedList","numberedList"],heading:{options:[{model:"paragraph",title:this.props.field.paragraphLabel,class:"ck-heading_paragraph"},{model:"heading2",view:"h2",title:this.props.field.headingLabel[0],class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:this.props.field.headingLabel[1],class:"ck-heading_heading3"},{model:"bulletedList",view:"ul",title:this.props.field.bulletedListLabel,class:"ck-bulletedList"},{model:"numberedList",view:"ol",title:this.props.field.numberedListLabel,class:"ck-numberedList"}]},language:this.props.field.language||"de"}}),p.default.createElement("textarea",{tabIndex:-1,autoComplete:"off",style:{opacity:0,height:0,pointerEvents:"none"},value:this.props.data[this.props.field.name],name:this.props.field.name,required:this.props.field.required,onChange:this.handleChangeDummy})),r)}}]),r}(p.Component);t.default=b}}]);
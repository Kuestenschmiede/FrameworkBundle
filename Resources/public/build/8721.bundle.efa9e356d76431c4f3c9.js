(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[8721],{68721:(e,t,r)=>{"use strict";var a=r(95318),l=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(59713)),i=a(r(34575)),o=a(r(93913)),s=a(r(2205)),u=a(r(78585)),d=a(r(29754)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var r=h(t);if(r&&r.has(e))return r.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(a,i,o):a[i]=e[i]}a.default=e,r&&r.set(e,a);return a}(r(67294)),p=r(72757),c=a(r(5234));a(r(28292));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(h=function(e){return e?r:t})(e)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,d.default)(e);if(t){var l=(0,d.default)(this).constructor;r=Reflect.construct(a,arguments,l)}else r=a.apply(this,arguments);return(0,u.default)(this,r)}}var b=function(e){(0,s.default)(r,e);var t=m(r);function r(e){var a;return(0,i.default)(this,r),(a=t.call(this,e)).editor=null,a}return(0,o.default)(r,[{key:"handleChangeDummy",value:function(e){}},{key:"render",value:function(){var e=this,t=null;this.props.field.label&&(t=this.props.field.required?f.default.createElement("label",{className:"c4g-required"},this.props.field.label):f.default.createElement("label",null,this.props.field.label));var r=null;return this.props.field.description&&(r=f.default.createElement("small",{className:"field-description form-text text-muted"},this.props.field.description)),f.default.createElement("div",{className:this.props.field.name},t,f.default.createElement("div",{id:this.props.field.name},f.default.createElement(p.CKEditor,{editor:c.default,data:this.props.data[this.props.field.name],onReady:function(t){e.editor=t},onChange:function(t,r){var a=r.getData();e.props.form.props.updateFunction(e.props.form.props.name,(0,n.default)({},e.props.field.name,a))},onBlur:function(e,t){},onFocus:function(e,t){},config:{placeholder:this.props.field.placeholder,toolbar:["heading","|","bold","italic","bulletedList","numberedList"],heading:{options:[{model:"paragraph",title:this.props.field.paragraphLabel,class:"ck-heading_paragraph"},{model:"heading2",view:"h2",title:this.props.field.headingLabel[0],class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:this.props.field.headingLabel[1],class:"ck-heading_heading3"},{model:"bulletedList",view:"ul",title:this.props.field.bulletedListLabel,class:"ck-bulletedList"},{model:"numberedList",view:"ol",title:this.props.field.numberedListLabel,class:"ck-numberedList"}]},language:this.props.field.language||"de"}}),f.default.createElement("textarea",{tabIndex:-1,autoComplete:"off",style:{opacity:0,height:0,pointerEvents:"none"},value:this.props.data[this.props.field.name],name:this.props.field.name,required:this.props.field.required,onChange:this.handleChangeDummy})),r)}}]),r}(f.Component);t.default=b}}]);
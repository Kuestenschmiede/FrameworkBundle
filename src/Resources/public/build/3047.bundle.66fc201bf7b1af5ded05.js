/*! For license information please see 3047.bundle.66fc201bf7b1af5ded05.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[3047],{3047:(e,t,l)=>{var a=l(24994),r=l(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(l(43693)),n=a(l(17383)),o=a(l(34579)),d=a(l(28452)),s=a(l(63072)),u=a(l(29511)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var l=h(t);if(l&&l.has(e))return l.get(e);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&{}.hasOwnProperty.call(e,n)){var o=i?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(a,n,o):a[n]=e[n]}return a.default=e,l&&l.set(e,a),a}(l(96540)),f=l(3333),c=a(l(62819));a(l(580));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(h=function(e){return e?l:t})(e)}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}t.default=function(e){function t(e){var l,a,r,i;return(0,n.default)(this,t),a=this,r=t,i=[e],r=(0,s.default)(r),(l=(0,d.default)(a,m()?Reflect.construct(r,i||[],(0,s.default)(a).constructor):r.apply(a,i))).editor=null,l}return(0,u.default)(t,e),(0,o.default)(t,[{key:"handleChangeDummy",value:function(e){}},{key:"render",value:function(){var e=this,t=null;this.props.field.label&&(t=this.props.field.required?p.default.createElement("label",{className:"c4g-required"},this.props.field.label):p.default.createElement("label",null,this.props.field.label));var l=null;return this.props.field.description&&(l=p.default.createElement("small",{className:"field-description form-text text-muted"},this.props.field.description)),p.default.createElement("div",{className:this.props.field.name},t,p.default.createElement("div",{id:this.props.field.name},p.default.createElement(f.CKEditor,{editor:c.default,data:this.props.data[this.props.field.name],onReady:function(t){e.editor=t},onChange:function(t,l){var a=l.getData();e.props.form.props.updateFunction(e.props.form.props.name,(0,i.default)({},e.props.field.name,a),e.props.field)},onBlur:function(e,t){},onFocus:function(e,t){},config:{placeholder:this.props.field.placeholder,toolbar:["heading","|","bold","italic","bulletedList","numberedList"],heading:{options:[{model:"paragraph",title:this.props.field.paragraphLabel,class:"ck-heading_paragraph"},{model:"heading2",view:"h2",title:this.props.field.headingLabel[0],class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:this.props.field.headingLabel[1],class:"ck-heading_heading3"},{model:"bulletedList",view:"ul",title:this.props.field.bulletedListLabel,class:"ck-bulletedList"},{model:"numberedList",view:"ol",title:this.props.field.numberedListLabel,class:"ck-numberedList"}]},language:this.props.field.language||"de"}}),p.default.createElement("textarea",{tabIndex:-1,autoComplete:"off",style:{opacity:0,height:0,pointerEvents:"none"},value:this.props.data[this.props.field.name],name:this.props.field.name,required:this.props.field.required,onChange:this.handleChangeDummy})),l)}}])}(p.Component)}}]);
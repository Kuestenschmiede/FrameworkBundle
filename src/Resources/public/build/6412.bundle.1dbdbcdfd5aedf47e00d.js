/*! For license information please see 6412.bundle.1dbdbcdfd5aedf47e00d.js.LICENSE.txt */
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[6412],{66412:(e,t,a)=>{var r=a(24994),n=a(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(43693)),s=r(a(17383)),i=r(a(34579)),f=r(a(28452)),o=r(a(63072)),p=r(a(29511)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&{}.hasOwnProperty.call(e,s)){var i=l?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(r,s,i):r[s]=e[s]}return r.default=e,a&&a.set(e,r),r}(a(96540));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}t.default=function(e){function t(e){var a,r,n,l;return(0,s.default)(this,t),r=this,n=t,l=[e],n=(0,o.default)(n),(a=(0,f.default)(r,d()?Reflect.construct(n,l||[],(0,o.default)(r).constructor):n.apply(r,l))).state={value:a.props.data[a.props.field.name]||a.props.field.value},a.onChange=a.onChange.bind(a),t.instances=(t.instances||0)+1,a}return(0,p.default)(t,e),(0,i.default)(t,[{key:"onChange",value:function(e){var t=e.target.value;this.setState({value:t}),this.props.form.props.updateFunction(this.props.form.props.name,(0,l.default)({},this.props.field.name,t),this.props.field)}},{key:"format",value:function(e){return this.props.field.format?this.props.field.format.replace(/%s/g,e):e}},{key:"render",value:function(){var e="c4g-range-"+this.props.field.name+"-"+t.instances,a=parseFloat(this.props.field.styleLeft);return a=(100-2*a)/(this.props.field.max-this.props.field.min)*(this.state.value-this.props.field.min)+a,u.default.createElement("div",{className:(this.props.field.className?this.props.field.className+" ":"")+"c4g-form-field c4g-range-field"},u.default.createElement("label",{className:this.props.field.required?"c4g-required":"",htmlFor:e},this.props.field.label),u.default.createElement("div",{className:"c4g-range-field-inner"},u.default.createElement("div",{className:"c4g-range-field-value-wrapper",style:{left:String(a)+"%"}},u.default.createElement("span",{className:"c4g-range-field-value"},this.format(this.state.value))),u.default.createElement("span",{className:"c4g-range-field-min"},this.format(this.props.field.min)),u.default.createElement("input",{id:e,type:"range",min:this.props.field.min,max:this.props.field.max,step:this.props.field.step,value:this.state.value,onChange:this.onChange,className:"c4g-form-control c4g-form-input",name:this.props.field.name}),u.default.createElement("span",{className:"c4g-range-field-max"},this.format(this.props.field.max))))}}])}(u.Component)}}]);
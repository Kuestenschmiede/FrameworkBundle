"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[4332],{34332:(e,t,r)=>{var a=r(64836),n=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(38416)),s=a(r(56690)),i=a(r(89728)),f=a(r(66115)),o=a(r(61655)),u=a(r(94993)),p=a(r(73808)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var i=l?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(a,s,i):a[s]=e[s]}a.default=e,r&&r.set(e,a);return a}(r(67294));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,p.default)(e);if(t){var n=(0,p.default)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return(0,u.default)(this,r)}}var h=function(e){(0,o.default)(r,e);var t=m(r);function r(e){var a;return(0,s.default)(this,r),(a=t.call(this,e)).state={value:a.props.data[a.props.field.name]||a.props.field.value},a.onChange=a.onChange.bind((0,f.default)(a)),r.instances=(r.instances||0)+1,a}return(0,i.default)(r,[{key:"onChange",value:function(e){var t=e.target.value;this.setState({value:t}),this.props.form.props.updateFunction(this.props.form.props.name,(0,l.default)({},this.props.field.name,t),this.props.field)}},{key:"format",value:function(e){return this.props.field.format?this.props.field.format.replace(/%s/g,e):e}},{key:"render",value:function(){var e="c4g-range-"+this.props.field.name+"-"+r.instances,t=parseFloat(this.props.field.styleLeft);return t=(100-2*t)/(this.props.field.max-this.props.field.min)*(this.state.value-this.props.field.min)+t,c.default.createElement("div",{className:(this.props.field.className?this.props.field.className+" ":"")+"c4g-form-field c4g-range-field"},c.default.createElement("label",{className:this.props.field.required?"c4g-required":"",htmlFor:e},this.props.field.label),c.default.createElement("div",{className:"c4g-range-field-inner"},c.default.createElement("div",{className:"c4g-range-field-value-wrapper",style:{left:String(t)+"%"}},c.default.createElement("span",{className:"c4g-range-field-value"},this.format(this.state.value))),c.default.createElement("span",{className:"c4g-range-field-min"},this.format(this.props.field.min)),c.default.createElement("input",{id:e,type:"range",min:this.props.field.min,max:this.props.field.max,step:this.props.field.step,value:this.state.value,onChange:this.onChange,className:"c4g-form-control c4g-form-input",name:this.props.field.name}),c.default.createElement("span",{className:"c4g-range-field-max"},this.format(this.props.field.max))))}}]),r}(c.Component);t.default=h}}]);
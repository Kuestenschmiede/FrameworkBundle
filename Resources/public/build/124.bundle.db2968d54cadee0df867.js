(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[124],{40124:(e,t,a)=>{"use strict";var i=a(95318),r=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(a(59713)),s=i(a(34575)),n=i(a(93913)),o=i(a(81506)),p=i(a(2205)),d=i(a(78585)),f=i(a(29754)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var i={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var n=l?Object.getOwnPropertyDescriptor(e,s):null;n&&(n.get||n.set)?Object.defineProperty(i,s,n):i[s]=e[s]}i.default=e,a&&a.set(e,i);return i}(a(67294));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,i=(0,f.default)(e);if(t){var r=(0,f.default)(this).constructor;a=Reflect.construct(i,arguments,r)}else a=i.apply(this,arguments);return(0,d.default)(this,a)}}var m=function(e){(0,p.default)(a,e);var t=h(a);function a(e){var i;return(0,s.default)(this,a),(i=t.call(this,e)).state={validPostal:i.validatePostal(i.props.data[i.props.field.name])},i.handleChange=i.handleChange.bind((0,o.default)(i)),i}return(0,n.default)(a,[{key:"handleChange",value:function(e){var t=this;if(this.validatePostal(e.target.value)){this.setState({validPostal:!0});var a=(0,l.default)({},this.props.field.name,e.target.value);if(this.props.field.createValidationProperty&&(a[this.props.field.name+"_valid"]="1"),this.props.form.props.updateFunction(this.props.form.props.name,a),this.props.field.dynamicFieldlist){var i=(0,l.default)({},this.props.field.name,e.target.value);if(this.props.field.dynamicFieldlistAdditionalFields&&this.props.field.dynamicFieldlistAdditionalFields.length>0)for(var r=this.props.field.dynamicFieldlistAdditionalFields,s=0;s<r.length;s++)i[r[s]]=this.props.data[r[s]];jQuery.post(this.props.field.dynamicFieldlistUrl,i).done((function(e){e&&e.matchingFields&&e.nonMatchingFields&&t.props.form.props.setFieldsFunction(t.props.form.props.name,e)}))}}else if(this.setState({validPostal:!1}),this.props.field.createValidationProperty){var n={};n[this.props.field.name+"_valid"]=!1,this.props.form.props.updateFunction(this.props.form.props.name,n)}}},{key:"validatePostal",value:function(e){return e&&5===e.length&&e.match("[0-9]{5}")}},{key:"render",value:function(){var e=null;if(this.props.field.label){var t="";this.props.field.required?(t="c4g-required",e=u.default.createElement("label",{className:t,htmlFor:this.props.field.name},this.props.field.label)):e=u.default.createElement("label",{htmlFor:this.props.field.name},this.props.field.label)}var a=null;return this.props.field.label&&(a=u.default.createElement("small",{className:"field-description form-text text-muted"},this.props.field.description)),u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{className:(this.props.field.className?this.props.field.className+" ":"")+"c4g-form-field"},e,u.default.createElement("input",{type:"text",id:this.props.field.name,name:this.props.field.name,required:this.props.field.required,defaultValue:this.props.data[this.props.field.name]||this.props.field.value,pattern:"[0-9]{5}",onChange:this.handleChange,className:this.state.validPostal?"":"invalid-postal"}),a))}},{key:"componentDidMount",value:function(){if(this.props.field.createValidationProperty){var e=this.validatePostal(this.props.data[this.props.field.name]),t={};t[this.props.field.name+"_valid"]=!!e&&"1",this.props.form.props.updateFunction(this.props.form.props.name,t)}}}]),a}(u.Component);t.default=m}}]);
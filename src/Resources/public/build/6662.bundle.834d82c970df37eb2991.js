"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[6662],{16662:(e,t,r)=>{var i=r(64836),l=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(r(56690)),s=i(r(89728)),n=i(r(66115)),o=i(r(61655)),p=i(r(94993)),f=i(r(73808)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var n=a?Object.getOwnPropertyDescriptor(e,s):null;n&&(n.get||n.set)?Object.defineProperty(i,s,n):i[s]=e[s]}i.default=e,r&&r.set(e,i);return i}(r(67294));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=(0,f.default)(e);if(t){var l=(0,f.default)(this).constructor;r=Reflect.construct(i,arguments,l)}else r=i.apply(this,arguments);return(0,p.default)(this,r)}}var h=function(e){(0,o.default)(r,e);var t=d(r);function r(e){var i;return(0,a.default)(this,r),(i=t.call(this,e)).checkCheckbox=i.checkCheckbox.bind((0,n.default)(i)),i}return(0,s.default)(r,[{key:"render",value:function(){var e=this,t=null;this.props.field.label&&(t=c.default.createElement("span",{className:"custom-label",key:"label"},this.props.field.label));var r=[],i=null;if(this.props.field.cache&&this.props.field.entryPoint){var l=localStorage.getItem("form-multicheckbox-"+this.props.field.entryPoint+"-"+this.props.field.name);l&&(i=JSON.parse(l),this.props.data[this.props.field.name]=i)}this.props.field.options&&Object.keys(this.props.field.options).forEach((function(t,l){var a=!1;i&&i.forEach((function(r,i){r.value===e.props.field.options[t].value&&(a=!0)})),r.push(c.default.createElement(c.default.Fragment,{key:l},c.default.createElement("div",{className:e.props.field.optionClass},c.default.createElement("label",{title:e.props.field.options[t].alt,className:"c4g-form-label"},c.default.createElement("img",{src:e.props.field.options[t].src,alt:e.props.field.options[t].alt,title:e.props.field.options[t].alt,className:"c4g-img-fluid",width:"100%",height:"100%"}),c.default.createElement("input",{type:"checkbox",name:e.props.field.name,value:t,required:e.props.field.required,className:"c4g-form-input",onChange:e.checkCheckbox,defaultChecked:a})))))}),this);var a=null;return this.props.field.label&&(a=c.default.createElement("span",{className:"field-description",key:"description"},this.props.field.description)),c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:this.props.field.className},t,r,a))}},{key:"checkCheckbox",value:function(e){var t,r=e.target.value;if((t=this.props.data?JSON.parse(JSON.stringify(this.props.data)):[])[this.props.field.name]&&t[this.props.field.name].length||(t[this.props.field.name]=[]),e.target.checked)t[this.props.field.name].push(r);else if(t[this.props.field.name].includes(r))for(var i=0;i<t[this.props.field.name].length;i++)if(t[this.props.field.name][i]===r){t[this.props.field.name].splice(i,1);break}this.props.form.props.updateFunction(this.props.form.props.name,t,this.props.field),this.props.field.cache&&this.props.field.entryPoint&&localStorage.setItem("form-multicheckbox-"+this.props.field.entryPoint+"-"+this.props.field.name,JSON.stringify(t[this.props.field.name]))}}]),r}(c.Component);t.default=h}}]);
/*! For license information please see 76.bundle.490b037acd30ce5526ac.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1469:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(l(53)),s=c(l(52)),i=c(l(45)),p=c(l(46)),r=c(l(47)),o=c(l(48)),n=c(l(49)),d=l(17),f=c(d);function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){(0,p.default)(this,t);var l=(0,o.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return l.checkCheckbox=l.checkCheckbox.bind(l),l}return(0,n.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this,t=null;this.props.field.label&&(t=f.default.createElement("span",{key:"label"},this.props.field.label));var l=[];this.props.field.options&&(0,s.default)(this.props.field.options).forEach((function(t,a){l.push(f.default.createElement(f.default.Fragment,{key:a},f.default.createElement("div",{className:e.props.field.optionClass},f.default.createElement("label",{title:e.props.field.options[t].alt,className:"c4g-form-label"},f.default.createElement("img",{src:e.props.field.options[t].src,alt:e.props.field.options[t].alt,title:e.props.field.options[t].alt,className:"c4g-img-fluid"}),f.default.createElement("input",{type:"checkbox",name:e.props.field.name,value:t,required:e.props.field.required,className:"c4g-form-input",onChange:e.checkCheckbox})))))}),this);var a=null;return this.props.field.label&&(a=f.default.createElement("span",{className:"field-description",key:"description"},this.props.field.description)),f.default.createElement(f.default.Fragment,null,f.default.createElement("div",{className:this.props.field.className},t,l,a))}},{key:"checkCheckbox",value:function(e){var t=e.target.value,l=void 0;if((l=this.props.data?JSON.parse((0,a.default)(this.props.data)):[])[this.props.field.name]&&l[this.props.field.name].length||(l[this.props.field.name]=[]),e.target.checked)l[this.props.field.name].push(t);else if(l[this.props.field.name].includes(t))for(var s=0;s<l[this.props.field.name].length;s++)if(l[this.props.field.name][s]===t){l[this.props.field.name].splice(s,1);break}this.props.form.props.updateFunction(this.props.form.props.name,l)}}]),t}(d.Component);t.default=u}}]);
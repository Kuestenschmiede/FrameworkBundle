"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[6420],{96420:(e,t,a)=>{var r=a(95318),n=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(34575)),u=r(a(93913)),f=r(a(2205)),i=r(a(78585)),c=r(a(29754)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var f=l?Object.getOwnPropertyDescriptor(e,u):null;f&&(f.get||f.set)?Object.defineProperty(r,u,f):r[u]=e[u]}r.default=e,a&&a.set(e,r);return r}(a(67294));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=(0,c.default)(e);if(t){var n=(0,c.default)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return(0,i.default)(this,a)}}var p=o.default.lazy((function(){return a.e(3652).then(a.bind(a,23652))})),h=o.default.lazy((function(){return a.e(1131).then(a.bind(a,51131))})),v=o.default.lazy((function(){return Promise.resolve().then(a.bind(a,25258))})),y=function(e){(0,f.default)(a,e);var t=s(a);function a(e){return(0,l.default)(this,a),t.call(this,e)}return(0,u.default)(a,[{key:"render",value:function(){var e=this,t=[],a=this.props.data[this.props.field.name];if(!a||!a.length||0===a.length)return null;var r=null;this.props.field.label&&(r=o.default.createElement("h4",null,this.props.field.label));for(var n=[],l=function(r){var l=null;a[r].image&&(l=o.default.createElement(h,{field:{name:"image",withPopover:!0,popoverField:"name"},data:a[r]})),a[r].fields&&n.push(a[r].fields.map((function(t,n){return t.class=t.class||a[r].technicalKey||"",o.default.createElement(v,{key:n,field:t,data:e.props.data,class:t.class||a[r].technicalKey||"",tagType:a[r].technicalKey})})));var u=o.default.createElement("div",{className:"tag-entry "+a[r].technicalKey,key:r},l,o.default.createElement(p,{field:{name:"name",class:a[r].technicalKey||""},data:a[r]}));t.push(u)},u=0;u<a.length;u++)l(u);return o.default.createElement("div",{className:"detail-field-wrapper"},r,o.default.createElement("div",{className:"detail-field-wrapper__tags"},t),o.default.createElement("div",{className:"detail-field-wrapper__tag-fields"},n))}}]),a}(o.Component);t.default=y}}]);
/*! For license information please see 64.bundle.b63e9985728776db0890.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{103:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(a(45)),s=i(a(46)),n=i(a(47)),r=i(a(48)),l=i(a(49)),m=a(17),p=i(m);function i(e){return e&&e.__esModule?e:{default:e}}var c=p.default.lazy((function(){return a.e(66).then(a.t.bind(null,799,7))})),u=p.default.lazy((function(){return a.e(1).then(a.t.bind(null,244,7))})),d=function(e){function t(e){(0,s.default)(this,t);var a=(0,r.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return a.activeButton=null,a.state={errorTexts:{},loading:!1},e.component.toggleableLayout&&(a.state.toggled=!1),a.submitForm=a.submitForm.bind(a),a.toggleForm=a.toggleForm.bind(a),a}return(0,l.default)(t,e),(0,n.default)(t,[{key:"toggleForm",value:function(){this.setState({toggled:!this.state.toggled})}},{key:"render",value:function(){var e=this,t=[],a=[];this.props.component.buttons.forEach((function(e,a){t.push(p.default.createElement(m.Suspense,{fallback:p.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},p.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""})),key:a},p.default.createElement(c,{key:a,form:this,button:e,languageRefs:this.props.languageRefs})))}),this);var o=null;this.state.loading&&(o=p.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},p.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""})));var s=null;this.props.component.headline&&(s=p.default.createElement("span",{className:"form-headline"},this.props.component.headline));var n=this.props.component.fields.map((function(t,o){return"wrapper"===t.type?(a=a.concat(t.wrappedFields),p.default.createElement(m.Suspense,{fallback:p.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},p.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""}),"."),key:o},p.default.createElement(u,{key:o,field:t,data:e.props.component.data,parentNode:e,fields:e.props.component.fields,form:e,errorTexts:e.state.errorTexts||{},languageRefs:e.props.languageRefs}))):a.includes(t.name)?void 0:p.default.createElement(m.Suspense,{fallback:p.default.createElement("div",{style:{textAlign:"center",margin:"auto"}},p.default.createElement("img",{src:"bundles/con4gisframework/img/preloader-image.svg",className:"preloader-image",alt:""})),key:o},p.default.createElement(u,{key:o,field:t,data:e.props.component.data,parentNode:e,form:e,errorText:e.state.errorTexts?e.state.errorTexts[t.name]:{},languageRefs:e.props.languageRefs}))}));if(this.props.component.toggleableLayout){var r=this.props.component.toggleableBaseClass+"-form";this.props.component.class&&(r+=" "+this.props.component.class);var l=this.props.component.toggleableOffLabel,i="";return this.state.toggled&&(l=this.props.component.toggleableOnLabel,i=" "+this.props.component.toggleableOnClass),p.default.createElement("div",{className:this.props.component.toggleableBaseClass+"-outer"+i},p.default.createElement("div",{className:this.props.component.toggleableBaseClass+"-inner"},p.default.createElement("div",{className:this.props.component.toggleableBaseClass+"-button-wrapper"+i},p.default.createElement("button",{className:this.props.component.toggleableBaseClass+"-button"+i,onClick:this.toggleForm},l)),p.default.createElement("div",{className:this.props.component.toggleableBaseClass+"-form-wrapper"+i},p.default.createElement("form",{className:r,onSubmit:function(t){return e.submitForm(t)},method:this.props.component.method},s,n,p.default.createElement("div",{className:this.props.component.buttonWrapperClass},o,t)))))}return this.props.component.containerRow?this.props.component.renderAsForm?p.default.createElement("form",{className:this.props.component.class||"form-view",onSubmit:function(t){return e.submitForm(t)},method:this.props.component.method},p.default.createElement("div",{className:"container"},p.default.createElement("div",{className:"row"},s,n,p.default.createElement("div",{className:this.props.component.buttonWrapperClass},o,t)))):p.default.createElement("div",{className:this.props.component.class||"form-view",method:this.props.component.method},p.default.createElement("div",{className:"container"},p.default.createElement("div",{className:"row"},s,n,p.default.createElement("div",{className:this.props.component.buttonWrapperClass},o,t)))):this.props.component.renderAsForm?p.default.createElement("form",{className:this.props.component.class||"form-view",onSubmit:function(t){return e.submitForm(t)},method:this.props.component.method},s,n,p.default.createElement("div",{className:this.props.component.buttonWrapperClass},o,t)):p.default.createElement("div",{className:this.props.component.class||"form-view",method:this.props.component.method},s,n,p.default.createElement("div",{className:this.props.component.buttonWrapperClass},o,t))}},{key:"submitForm",value:function(e){this.activeButton.submitCallback(this,e)}},{key:"setErrorTexts",value:function(e){this.setState({errorTexts:e})}},{key:"setLoading",value:function(e){this.setState({loading:e})}}]),t}(m.Component);t.default=d}}]);
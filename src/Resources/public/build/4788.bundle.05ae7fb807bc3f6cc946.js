"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[4788],{94788:(e,t,r)=>{var a=r(64836),o=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(56690)),i=a(r(89728)),u=a(r(61655)),l=a(r(94993)),s=a(r(73808)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=n?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(a,i,u):a[i]=e[i]}a.default=e,r&&r.set(e,a);return a}(r(67294)),d=a(r(99307)),f=a(r(5406));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,s.default)(e);if(t){var o=(0,s.default)(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return(0,l.default)(this,r)}}var h=function(e){(0,u.default)(r,e);var t=v(r);function r(e){var a;(0,n.default)(this,r),a=t.call(this,e);var o=e.data[e.field.name],i=void 0!==o.videoPreviewImage&&null!==o.videoPreviewImage;return a.state={hasPreviewImage:i,reloading:!1},a}return(0,i.default)(r,[{key:"render",value:function(){var e=this,t=this.props.data[this.props.field.name];if(!(t&&t.videoType&&t.video))return null;var r=null;if("youtube"===t.videoType){var a=this.parseVideoId(t.video);r=c.default.createElement(f.default,{videoId:a,opts:{origin:window.location.href,host:"https://www.youtube-nocookie.com",height:"100%",width:"100%"},className:"video-preview-youtube"})}else r="vimeo"===t.videoType?c.default.createElement(d.default,{video:t.video}):null;if(this.state.hasPreviewImage){var o=this.props.data[this.props.field.name].alt;return c.default.createElement("div",{className:this.props.field.class},c.default.createElement("a",{onClick:function(){return e.setState({hasPreviewImage:!1})}},c.default.createElement("img",{src:t.videoPreviewImage.src,alt:o,title:o,style:{width:"100%",height:"100%"}})))}if(window.klaroConfig&&klaro){var n=klaro.getManager();return"youtube"===t.videoType&&n.getConsent("youtubeVideo")||"vimeo"===t.videoType&&n.getConsent("vimeoVideo")?c.default.createElement("div",{className:this.props.field.class},c.default.createElement("div",{className:"embed-responsive embed-responsive-16by9"},r)):null}return c.default.createElement("div",{className:this.props.field.class},c.default.createElement("div",{className:"embed-responsive embed-responsive-16by9"},r))}},{key:"parseVideoId",value:function(e){return e.startsWith("https://www.youtube.com/watch?v=")?e.replace("https://www.youtube.com/watch?v=",""):e.startsWith("https://youtu.be/")?e.replace("https://youtu.be/",""):e.startsWith("https://www.youtube.com/embed/")?e.replace("https://www.youtube.com/embed/",""):e.startsWith("https://www.youtube-nocookie.com/embed/")?e.replace("https://www.youtube-nocookie.com/embed/",""):void 0}},{key:"componentDidMount",value:function(){var e=this;window.klaroConfig&&klaro&&klaro.getManager().watch({update:function(t,r,a){e.setState({reloading:!e.state.reloading})}})}}]),r}(c.Component);t.default=h}}]);
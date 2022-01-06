"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[2602],{92602:(e,t,a)=>{var n=a(95318),r=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(34575)),l=n(a(93913)),u=n(a(2205)),o=n(a(78585)),i=n(a(29754)),g=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var n={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=s?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(n,l,u):n[l]=e[l]}n.default=e,a&&a.set(e,n);return n}(a(67294)),f=n(a(72356));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,i.default)(e);if(t){var r=(0,i.default)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,o.default)(this,a)}}var d=function(e){(0,u.default)(a,e);var t=c(a);function a(e){var n;return(0,s.default)(this,a),(n=t.call(this,e)).alwaysOpenStrings=["24/7","Mo-Su 00:00-00:00","Mo - Su 00:00-00:00","Mo-Su 00:00 - 00:00","Mo - Su 00:00 - 00:00"],n}return(0,l.default)(a,[{key:"render",value:function(){var e=this.props.data[this.props.field.name],t="",a=null,n=null,r=null,s=null,l=null,u=null,o=[];if(e){try{var i=(e=e.replace("\\","")).indexOf('"');if(-1!==i)for(r=e.substring(i+1,e.indexOf('"',i+1)),e=e.replace(r,"");-1!==e.indexOf('"');)e=e.replace('"',"");a=new f.default(e,{address:{country_code:"de"}})}catch(t){n=e}if(a){t=this.getReadableState("","",a,e);var p=this.getOpeningIntervalsForThisWeek(a,e);if(0===p.length)n=null;else{var c=(new Date).getDay(),d=this.props.languageRefs.WEEKDAYS,h=[];c;for(var v=c;v<7;v++)h.push(v);for(var E=0;E<c;E++)h.push(E);for(var O=0;O<h.length;O++){for(var y=0,R=[g.default.createElement("div",{key:O+1,className:"opening-hours-day"},d[h[O]])],m=[],S=0;S<p.length;S++)if(p[S][0]===h[O]){var _=g.default.createElement("div",{key:100*(S+2),className:"opening-hours-day-interval"},p[S][1]);m.push(_),y++}if(0===y){var D=g.default.createElement("div",{key:O+1+300,className:"opening-hours-day-interval"},"Geschlossen");m.push(D)}o.push(g.default.createElement("div",{className:"opening-hours-day-entry",key:1e3*(O+3)},R,g.default.createElement("div",{className:"opening-hours-day-interval-wrapper"},m)))}n=g.default.createElement("div",{key:1,className:"opening-hours-days"},o)}}}return null!==t&&""!==t&&(l=g.default.createElement("div",{key:2,className:"opening-hours-opened-state"},t)),null!==r&&(s=g.default.createElement("div",{key:3,className:"opening-hours-opened-hint"},r),-1!==t.indexOf(r)&&(s=null)),""===n&&(n=null),this.alwaysOpenStrings.includes(e)&&(n=this.props.languageRefs.ALWAYS_OPEN,t=""),(l||s)&&(u=g.default.createElement("div",{className:"opening-hours-opened"},l,s)),g.default.createElement("div",{className:"opening-hours"},g.default.createElement("h3",{key:0,className:"opening-hours-headline"},this.props.languageRefs.OPENING_HOURS),n,u)}},{key:"getReadableState",value:function(e,t,a,n){var r="";if(a.getUnknown()){var s=a.getComment();s&&s===this.props.languageRefs.OPEN_END_CLOSE_GUESSED&&(s=n&&"+"===n[n.length-1]?this.props.languageRefs.OPEN_END:this.props.languageRefs.OPEN_END_CLOSE_GUESSED),r+=this.props.languageRefs.MAYBE_OPEN+(s?this.props.languageRefs.DEPENDING_UPON+s+'"':"")}else r+=" "+(a.getState()?this.props.languageRefs.CURRENTLY_OPEN:this.props.languageRefs.CURRENTLY_CLOSED)+(u?', comment "'+u+'"':"");var l=a.getState(),u=(a.getUnknown(),a.getComment()),o=a.getNextChange();if(!l&&void 0!==o&&"0"!==o.getHours().toString()){var i=o.getDate(),g=o.getMonth()+1,f=o.getHours().toString().padStart(2,"0"),p=o.getMinutes().toString().padStart(2,"0"),c=new Date;c.getDate()===o.getDate()&&c.getMonth()===o.getMonth()&&c.getFullYear()===o.getFullYear()?r+=this.props.languageRefs.WE_ARE_AT+f+":"+p+this.props.languageRefs.AVAILABLE_FOR_YOU:c.getDate()+1===o.getDate()&&c.getMonth()===o.getMonth()&&c.getFullYear()===o.getFullYear()?r+=this.props.languageRefs.WE_ARE_TOMORROW_AT+f+":"+p+this.props.languageRefs.AVAILABLE_FOR_YOU:r+=this.props.languageRefs.WE_ARE_ON+i+"."+g+". "+this.props.languageRefs.AT+" "+f+":"+p+this.props.languageRefs.AVAILABLE_FOR_YOU}return e+r+t+"."}},{key:"getOpeningIntervalsForThisWeek",value:function(e,t){var a=new Date;a.setHours(0),a.setMinutes(0);var n=a.getDate(),r=new Date;r.setHours(23),r.setMinutes(59);var s=r.getDate()+6,l=new Date(a.setDate(n)),u=new Date(r.setDate(s)),o=e.getOpenIntervals(l,u);if(o){for(var i=o.length,g=[],f=0;f<i;f++){var p=o[f][0],c=o[f][1],d=("unknown"==o[f][2]||o[f][2],"false"==o[f][3]||o[f][3],new Date(p)),h=d.getHours().toString().padStart(2,"0")+":"+d.getMinutes().toString().padStart(2,"0")+" Uhr - ",v=new Date(c),E=v.getHours().toString().padStart(2,"0")+":"+v.getMinutes().toString().padStart(2,"0")+" Uhr";t&&"+"==t[t.length-1]&&(E=this.props.languageRefs.OPEN_END),g[f]=new Array(d.getDay(),h+E)}return g}}}]),a}(g.Component);t.default=d}}]);
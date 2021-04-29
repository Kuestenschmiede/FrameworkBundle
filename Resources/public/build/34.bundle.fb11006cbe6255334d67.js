/*! For license information please see 34.bundle.fb11006cbe6255334d67.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[34,63,66],{1352:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=f(a(45)),l=f(a(46)),r=f(a(47)),n=f(a(48)),i=f(a(49)),p=a(17),d=f(p),o=f(a(564)),u=f(a(565));function f(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){return(0,l.default)(this,t),(0,n.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e))}return(0,i.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this,t=null,a=null,s=null,l=null,r=null,n=null,i=null;if((this.props.data[this.props.field.emailFieldName]||this.props.data[this.props.field.phoneFieldName]||this.props.data[this.props.field.websiteFieldName]||this.props.data[this.props.field.openingTimesFieldName]||this.props.field.addressFieldnamePrefix||this.props.field.withSocialMedia)&&this.props.field.label&&(t=d.default.createElement("h3",null,this.props.field.label)),this.props.data[this.props.field.emailFieldName]){var p=this.props.data[this.props.field.emailFieldName],f="mailto:"+p;a=d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{className:"entry-content email",itemProp:"email"},d.default.createElement("a",{href:f},p)))}if(this.props.data[this.props.field.phoneFieldName]){var h=this.props.data[this.props.field.phoneFieldName],m="tel:"+h;s=d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{className:"entry-content phone",itemProp:"phone"},d.default.createElement("a",{href:m},h)))}if(this.props.data[this.props.field.websiteFieldName]){var c=this.props.data[this.props.field.websiteFieldName];l=d.default.createElement("span",{className:"entry-content website"},d.default.createElement("a",{href:c},this.props.languageRefs.WEBSITE))}if(this.props.data[this.props.field.openingTimesFieldName]){var g=this.props.field;g.name=this.props.field.openingTimesFieldName,r=d.default.createElement(o.default,{data:this.props.data,field:g,languageRefs:this.props.languageRefs})}if(this.props.field.addressFieldnamePrefix){var N=this.createAddressData();n=d.default.createElement("div",null,d.default.createElement("h4",{className:"entry-content name"},N.name),d.default.createElement("span",{className:"entry-content additionalName"},N.additionalName),d.default.createElement("div",{className:"street"},d.default.createElement("span",{className:"street"},N.street)," ",d.default.createElement("span",{className:"streetNumber"},N.streetNumber)),d.default.createElement("div",{className:"entry-content"},d.default.createElement("span",{className:"zip"},N.zip)," ",d.default.createElement("span",{className:"city"},N.city)))}return this.props.field.withSocialMedia&&(i=this.props.field.socialMediaFields.map((function(t,a){return d.default.createElement(u.default,{key:a,field:t,data:e.props.data,languageRefs:e.props.languageRefs})}))),d.default.createElement("div",{className:"detail-field-contact"+(this.props.field.class?" "+this.props.field.class:"")},t,n,s,a,l,r,i)}},{key:"createAddressData",value:function(){var e=this.props.field.addressFieldnamePrefix,t=this.props.field.addressFieldnameFallbackPrefix,a=this.props.data,s={};return a[e+"Name"]?s.name=a[e+"Name"]:a[t+"Name"]&&(s.name=a[t+"Name"]),a[e+"AdditionalName"]?s.additionalName=a[e+"AdditionalName"]:a[t+"AdditionalName"]&&(s.additionalName=a[t+"AdditionalName"]),a[e+"Street"]?s.street=a[e+"Street"]:a[t+"Street"]&&(s.street=a[t+"Street"]),a[e+"StreetNumber"]?s.streetNumber=a[e+"StreetNumber"]:a[t+"StreetNumber"]&&(s.streetNumber=a[t+"StreetNumber"]),0!==s.streetNumber&&"0"!==s.streetNumber||(s.streetNumber=""),a[e+"Zip"]?s.zip=a[e+"Zip"]:a[t+"Zip"]&&(s.zip=a[t+"Zip"]),a[e+"City"]?s.city=a[e+"City"]:a[t+"City"]&&(s.city=a[t+"City"]),s}}]),t}(p.Component);t.default=h},564:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=u(a(45)),l=u(a(46)),r=u(a(47)),n=u(a(48)),i=u(a(49)),p=a(17),d=u(p),o=u(a(828));function u(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){(0,l.default)(this,t);var a=(0,n.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return a.alwaysOpenStrings=["24/7","Mo-Su 00:00-00:00","Mo - Su 00:00-00:00","Mo-Su 00:00 - 00:00","Mo - Su 00:00 - 00:00"],a}return(0,i.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props.data[this.props.field.name],t="",a=null,s=null,l=null,r=null,n=null,i=null,p=[];if(e){try{var u=(e=e.replace("\\","")).indexOf('"');if(-1!==u)for(l=e.substring(u+1,e.indexOf('"',u+1)),e=e.replace(l,"");-1!==e.indexOf('"');)e=e.replace('"',"");a=new o.default(e,{address:{country_code:"de"}})}catch(t){s=e}if(a){t=this.getReadableState("","",a,e);var f=this.getOpeningIntervalsForThisWeek(a,e);if(0===f.length)s=null;else{var h=(new Date).getDay(),m=this.props.languageRefs.WEEKDAYS,c=[];h;for(var g=h;g<7;g++)c.push(g);for(var N=0;N<h;N++)c.push(N);for(var E=0;E<c.length;E++){for(var v=0,_=[d.default.createElement("div",{key:E+1,className:"opening-hours-day"},m[c[E]])],y=[],S=0;S<f.length;S++)if(f[S][0]===c[E]){var R=d.default.createElement("div",{key:100*(S+2),className:"opening-hours-day-interval"},f[S][1]);y.push(R),v++}if(0===v){var O=d.default.createElement("div",{key:E+1+300,className:"opening-hours-day-interval"},"Geschlossen");y.push(O)}p.push(d.default.createElement("div",{className:"opening-hours-day-entry",key:1e3*(E+3)},_,d.default.createElement("div",{className:"opening-hours-day-interval-wrapper"},y)))}s=d.default.createElement("div",{key:1,className:"opening-hours-days"},p)}}}return null!==t&&""!==t&&(n=d.default.createElement("div",{key:2,className:"opening-hours-opened-state"},t)),null!==l&&(r=d.default.createElement("div",{key:3,className:"opening-hours-opened-hint"},l),-1!==t.indexOf(l)&&(r=null)),""===s&&(s=null),this.alwaysOpenStrings.includes(e)&&(s=this.props.languageRefs.ALWAYS_OPEN,t=""),(n||r)&&(i=d.default.createElement("div",{className:"opening-hours-opened"},n,r)),d.default.createElement("div",{className:"opening-hours"},d.default.createElement("h3",{key:0,className:"opening-hours-headline"},this.props.languageRefs.OPENING_HOURS),s,i)}},{key:"getReadableState",value:function(e,t,a,s){var l="";if(a.getUnknown()){var r=a.getComment();r&&r===this.props.languageRefs.OPEN_END_CLOSE_GUESSED&&(r=s&&"+"===s[s.length-1]?this.props.languageRefs.OPEN_END:this.props.languageRefs.OPEN_END_CLOSE_GUESSED),l+=this.props.languageRefs.MAYBE_OPEN+(r?this.props.languageRefs.DEPENDING_UPON+r+'"':"")}else l+=" "+(a.getState()?this.props.languageRefs.CURRENTLY_OPEN:this.props.languageRefs.CURRENTLY_CLOSED)+(i?', comment "'+i+'"':"");var n=a.getState(),i=(a.getUnknown(),a.getComment()),p=a.getNextChange();if(!n&&void 0!==p&&"0"!==p.getHours().toString()){var d=p.getDate(),o=p.getMonth()+1,u=p.getHours().toString().padStart(2,"0"),f=p.getMinutes().toString().padStart(2,"0"),h=new Date;h.getDate()===p.getDate()&&h.getMonth()===p.getMonth()&&h.getFullYear()===p.getFullYear()?l+=this.props.languageRefs.WE_ARE_AT+u+":"+f+this.props.languageRefs.AVAILABLE_FOR_YOU:h.getDate()+1===p.getDate()&&h.getMonth()===p.getMonth()&&h.getFullYear()===p.getFullYear()?l+=this.props.languageRefs.WE_ARE_TOMORROW_AT+u+":"+f+this.props.languageRefs.AVAILABLE_FOR_YOU:l+=this.props.languageRefs.WE_ARE_ON+d+"."+o+". "+this.props.languageRefs.AT+" "+u+":"+f+this.props.languageRefs.AVAILABLE_FOR_YOU}return e+l+t+"."}},{key:"getOpeningIntervalsForThisWeek",value:function(e,t){var a=new Date;a.setHours(0),a.setMinutes(0);var s=a.getDate(),l=new Date;l.setHours(23),l.setMinutes(59);var r=l.getDate()+6,n=new Date(a.setDate(s)),i=new Date(l.setDate(r)),p=e.getOpenIntervals(n,i);if(p){for(var d=p.length,o=[],u=0;u<d;u++){var f=p[u][0],h=p[u][1],m=("unknown"==p[u][2]||p[u][2],"false"==p[u][3]||p[u][3],new Date(f)),c=m.getHours().toString().padStart(2,"0")+":"+m.getMinutes().toString().padStart(2,"0")+" Uhr - ",g=new Date(h),N=g.getHours().toString().padStart(2,"0")+":"+g.getMinutes().toString().padStart(2,"0")+" Uhr";t&&"+"==t[t.length-1]&&(N=this.props.languageRefs.OPEN_END),o[u]=new Array(m.getDay(),c+N)}return o}}}]),t}(p.Component);t.default=f},565:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o(a(45)),l=o(a(46)),r=o(a(47)),n=o(a(48)),i=o(a(49)),p=a(17),d=o(p);function o(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){return(0,l.default)(this,t),(0,n.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e))}return(0,i.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){if(this.props.data[this.props.field.name]){var e=null;this.props.field.icon&&(e=d.default.createElement("i",{className:this.props.field.icon}));var t="";return this.props.field.class&&(t=this.props.field.class),this.props.tagType&&(t+=" "+this.props.tagType),d.default.createElement("div",{className:t},e,d.default.createElement("a",{href:this.props.data[this.props.field.name]},this.props.data[this.props.field.linkTextName]||this.props.field.linkText))}return null}}]),t}(p.Component);t.default=u}}]);
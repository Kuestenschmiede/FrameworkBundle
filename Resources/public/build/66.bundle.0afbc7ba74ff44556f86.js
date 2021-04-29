/*! For license information please see 66.bundle.0afbc7ba74ff44556f86.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{564:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=p(a(45)),s=p(a(46)),r=p(a(47)),l=p(a(48)),u=p(a(49)),g=a(17),o=p(g),i=p(a(828));function p(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){(0,s.default)(this,t);var a=(0,l.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.alwaysOpenStrings=["24/7","Mo-Su 00:00-00:00","Mo - Su 00:00-00:00","Mo-Su 00:00 - 00:00","Mo - Su 00:00 - 00:00"],a}return(0,u.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props.data[this.props.field.name],t="",a=null,n=null,s=null,r=null,l=null,u=null,g=[];if(e){try{var p=(e=e.replace("\\","")).indexOf('"');if(-1!==p)for(s=e.substring(p+1,e.indexOf('"',p+1)),e=e.replace(s,"");-1!==e.indexOf('"');)e=e.replace('"',"");a=new i.default(e,{address:{country_code:"de"}})}catch(t){n=e}if(a){t=this.getReadableState("","",a,e);var f=this.getOpeningIntervalsForThisWeek(a,e);if(0===f.length)n=null;else{var d=(new Date).getDay(),h=this.props.languageRefs.WEEKDAYS,E=[];d;for(var c=d;c<7;c++)E.push(c);for(var v=0;v<d;v++)E.push(v);for(var _=0;_<E.length;_++){for(var O=0,R=[o.default.createElement("div",{key:_+1,className:"opening-hours-day"},h[E[_]])],S=[],N=0;N<f.length;N++)if(f[N][0]===E[_]){var m=o.default.createElement("div",{key:100*(N+2),className:"opening-hours-day-interval"},f[N][1]);S.push(m),O++}if(0===O){var D=o.default.createElement("div",{key:_+1+300,className:"opening-hours-day-interval"},"Geschlossen");S.push(D)}g.push(o.default.createElement("div",{className:"opening-hours-day-entry",key:1e3*(_+3)},R,o.default.createElement("div",{className:"opening-hours-day-interval-wrapper"},S)))}n=o.default.createElement("div",{key:1,className:"opening-hours-days"},g)}}}return null!==t&&""!==t&&(l=o.default.createElement("div",{key:2,className:"opening-hours-opened-state"},t)),null!==s&&(r=o.default.createElement("div",{key:3,className:"opening-hours-opened-hint"},s),-1!==t.indexOf(s)&&(r=null)),""===n&&(n=null),this.alwaysOpenStrings.includes(e)&&(n=this.props.languageRefs.ALWAYS_OPEN,t=""),(l||r)&&(u=o.default.createElement("div",{className:"opening-hours-opened"},l,r)),o.default.createElement("div",{className:"opening-hours"},o.default.createElement("h3",{key:0,className:"opening-hours-headline"},this.props.languageRefs.OPENING_HOURS),n,u)}},{key:"getReadableState",value:function(e,t,a,n){var s="";if(a.getUnknown()){var r=a.getComment();r&&r===this.props.languageRefs.OPEN_END_CLOSE_GUESSED&&(r=n&&"+"===n[n.length-1]?this.props.languageRefs.OPEN_END:this.props.languageRefs.OPEN_END_CLOSE_GUESSED),s+=this.props.languageRefs.MAYBE_OPEN+(r?this.props.languageRefs.DEPENDING_UPON+r+'"':"")}else s+=" "+(a.getState()?this.props.languageRefs.CURRENTLY_OPEN:this.props.languageRefs.CURRENTLY_CLOSED)+(u?', comment "'+u+'"':"");var l=a.getState(),u=(a.getUnknown(),a.getComment()),g=a.getNextChange();if(!l&&void 0!==g&&"0"!==g.getHours().toString()){var o=g.getDate(),i=g.getMonth()+1,p=g.getHours().toString().padStart(2,"0"),f=g.getMinutes().toString().padStart(2,"0"),d=new Date;d.getDate()===g.getDate()&&d.getMonth()===g.getMonth()&&d.getFullYear()===g.getFullYear()?s+=this.props.languageRefs.WE_ARE_AT+p+":"+f+this.props.languageRefs.AVAILABLE_FOR_YOU:d.getDate()+1===g.getDate()&&d.getMonth()===g.getMonth()&&d.getFullYear()===g.getFullYear()?s+=this.props.languageRefs.WE_ARE_TOMORROW_AT+p+":"+f+this.props.languageRefs.AVAILABLE_FOR_YOU:s+=this.props.languageRefs.WE_ARE_ON+o+"."+i+". "+this.props.languageRefs.AT+" "+p+":"+f+this.props.languageRefs.AVAILABLE_FOR_YOU}return e+s+t+"."}},{key:"getOpeningIntervalsForThisWeek",value:function(e,t){var a=new Date;a.setHours(0),a.setMinutes(0);var n=a.getDate(),s=new Date;s.setHours(23),s.setMinutes(59);var r=s.getDate()+6,l=new Date(a.setDate(n)),u=new Date(s.setDate(r)),g=e.getOpenIntervals(l,u);if(g){for(var o=g.length,i=[],p=0;p<o;p++){var f=g[p][0],d=g[p][1],h=("unknown"==g[p][2]||g[p][2],"false"==g[p][3]||g[p][3],new Date(f)),E=h.getHours().toString().padStart(2,"0")+":"+h.getMinutes().toString().padStart(2,"0")+" Uhr - ",c=new Date(d),v=c.getHours().toString().padStart(2,"0")+":"+c.getMinutes().toString().padStart(2,"0")+" Uhr";t&&"+"==t[t.length-1]&&(v=this.props.languageRefs.OPEN_END),i[p]=new Array(h.getDay(),E+v)}return i}}}]),t}(g.Component);t.default=f}}]);
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[9685],{69685:(e,t,r)=>{r.r(t),r.d(t,{default:()=>te});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(e){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),a=Math.abs,c=String.fromCharCode;function s(e){return e.trim()}function u(e,t,r){return e.replace(t,r)}function i(e,t){return e.indexOf(t)}function o(e,t){return 0|e.charCodeAt(t)}function f(e,t,r){return e.slice(t,r)}function l(e){return e.length}function h(e){return e.length}function p(e,t){return t.push(e),e}var d=1,b=1,v=0,g=0,y=0,k="";function m(e,t,r,n,a,c,s){return{value:e,root:t,parent:r,type:n,props:a,children:c,line:d,column:b,length:s,return:""}}function w(e,t,r){return m(e,t.root,t.parent,r,t.props,t.children,0)}function $(){return y=g>0?o(k,--g):0,b--,10===y&&(b=1,d--),y}function x(){return y=g<v?o(k,g++):0,b++,10===y&&(b=1,d++),y}function A(){return o(k,g)}function C(){return g}function S(e,t){return f(k,e,t)}function E(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(e){return d=b=1,v=l(k=e),g=0,[]}function N(e){return k="",e}function j(e){return s(S(g-1,q(91===e?e+2:40===e?e+1:e)))}function z(e){for(;(y=A())&&y<33;)x();return E(e)>2||E(y)>3?"":" "}function _(e,t){for(;--t&&x()&&!(y<48||y>102||y>57&&y<65||y>70&&y<97););return S(e,C()+(t<6&&32==A()&&32==x()))}function q(e){for(;x();)switch(y){case e:return g;case 34:case 39:return q(34===e||39===e?e:y);case 40:41===e&&q(e);break;case 92:x()}return g}function M(e,t){for(;x()&&e+y!==57&&(e+y!==84||47!==A()););return"/*"+S(t,g-1)+"*"+c(47===e?e:x())}function O(e){for(;!E(A());)x();return S(e,g)}var R="-ms-",B="-moz-",P="-webkit-",W="comm",D="rule",F="decl";function G(e,t){for(var r="",n=h(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function H(e,t,r,n){switch(e.type){case"@import":case F:return e.return=e.return||e.value;case W:return"";case D:e.value=e.props.join(",")}return l(r=G(e.children,n))?e.return=e.value+"{"+r+"}":""}function I(e,t){switch(function(e,t){return(((t<<2^o(e,0))<<2^o(e,1))<<2^o(e,2))<<2^o(e,3)}(e,t)){case 5103:return P+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return P+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return P+e+B+e+R+e+e;case 6828:case 4268:return P+e+R+e+e;case 6165:return P+e+R+"flex-"+e+e;case 5187:return P+e+u(e,/(\w+).+(:[^]+)/,P+"box-$1$2"+R+"flex-$1$2")+e;case 5443:return P+e+R+"flex-item-"+u(e,/flex-|-self/,"")+e;case 4675:return P+e+R+"flex-line-pack"+u(e,/align-content|flex-|-self/,"")+e;case 5548:return P+e+R+u(e,"shrink","negative")+e;case 5292:return P+e+R+u(e,"basis","preferred-size")+e;case 6060:return P+"box-"+u(e,"-grow","")+P+e+R+u(e,"grow","positive")+e;case 4554:return P+u(e,/([^-])(transform)/g,"$1"+P+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,P+"$1"),/(image-set)/,P+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,P+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,P+"box-pack:$3"+R+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+P+e+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,P+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(l(e)-1-t>6)switch(o(e,t+1)){case 109:if(45!==o(e,t+4))break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+P+"$2-$3$1"+B+(108==o(e,t+3)?"$3":"$2-$3"))+e;case 115:return~i(e,"stretch")?I(u(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==o(e,t+1))break;case 6444:switch(o(e,l(e)-3-(~i(e,"!important")&&10))){case 107:return u(e,":",":"+P)+e;case 101:return u(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+P+(45===o(e,14)?"inline-":"")+"box$3$1"+P+"$2$3$1"+R+"$2box$3")+e}break;case 5936:switch(o(e,t+11)){case 114:return P+e+R+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return P+e+R+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return P+e+R+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return P+e+R+e+e}return e}function J(e){return N(K("",null,null,null,[""],e=T(e),0,[0],e))}function K(e,t,r,n,a,s,i,o,f){for(var h=0,d=0,b=i,v=0,g=0,y=0,k=1,m=1,w=1,S=0,E="",T=a,N=s,q=n,R=E;m;)switch(y=S,S=x()){case 34:case 39:case 91:case 40:R+=j(S);break;case 9:case 10:case 13:case 32:R+=z(y);break;case 92:R+=_(C()-1,7);continue;case 47:switch(A()){case 42:case 47:p(Q(M(x(),C()),t,r),f);break;default:R+="/"}break;case 123*k:o[h++]=l(R)*w;case 125*k:case 59:case 0:switch(S){case 0:case 125:m=0;case 59+d:g>0&&l(R)-b&&p(g>32?U(R+";",n,r,b-1):U(u(R," ","")+";",n,r,b-2),f);break;case 59:R+=";";default:if(p(q=L(R,t,r,h,d,a,o,E,T=[],N=[],b),s),123===S)if(0===d)K(R,t,q,q,T,s,b,o,N);else switch(v){case 100:case 109:case 115:K(e,q,q,n&&p(L(e,q,q,0,0,a,o,E,a,T=[],b),N),a,N,b,o,n?T:N);break;default:K(R,q,q,q,[""],N,b,o,N)}}h=d=g=0,k=w=1,E=R="",b=i;break;case 58:b=1+l(R),g=y;default:if(k<1)if(123==S)--k;else if(125==S&&0==k++&&125==$())continue;switch(R+=c(S),S*k){case 38:w=d>0?1:(R+="\f",-1);break;case 44:o[h++]=(l(R)-1)*w,w=1;break;case 64:45===A()&&(R+=j(x())),v=A(),d=l(E=R+=O(C())),S++;break;case 45:45===y&&2==l(R)&&(k=0)}}return s}function L(e,t,r,n,c,i,o,l,p,d,b){for(var v=c-1,g=0===c?i:[""],y=h(g),k=0,w=0,$=0;k<n;++k)for(var x=0,A=f(e,v+1,v=a(w=o[k])),C=e;x<y;++x)(C=s(w>0?g[x]+" "+A:u(A,/&\f/g,g[x])))&&(p[$++]=C);return m(e,t,r,0===c?D:l,p,d,b)}function Q(e,t,r){return m(e,t,r,W,c(y),f(e,2,-2),0)}function U(e,t,r,n){return m(e,t,r,F,f(e,0,n),f(e,n+1,-1),n)}var V=function(e,t){return N(function(e,t){var r=-1,n=44;do{switch(E(n)){case 0:38===n&&12===A()&&(t[r]=1),e[r]+=O(g-1);break;case 2:e[r]+=j(n);break;case 4:if(44===n){e[++r]=58===A()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=c(n)}}while(n=x());return e}(T(e),t))},X=new WeakMap,Y=function(e){if("rule"===e.type&&e.parent&&e.length){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||X.get(r))&&!n){X.set(e,!0);for(var a=[],c=V(t,a),s=r.props,u=0,i=0;u<c.length;u++)for(var o=0;o<s.length;o++,i++)e.props[i]=a[u]?c[u].replace(/&\f/g,s[o]):s[o]+" "+c[u]}}},Z=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},ee=[function(e,t,r,n){if(!e.return)switch(e.type){case F:e.return=I(e.value,e.length);break;case"@keyframes":return G([w(u(e.value,"@","@"+P),e,"")],n);case D:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return G([w(u(t,/:(read-\w+)/,":"+B+"$1"),e,"")],n);case"::placeholder":return G([w(u(t,/:(plac\w+)/,":"+P+"input-$1"),e,""),w(u(t,/:(plac\w+)/,":"+B+"$1"),e,""),w(u(t,/:(plac\w+)/,R+"input-$1"),e,"")],n)}return""}))}}];const te=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var a=e.stylisPlugins||ee;var c,s,u={},i=[];c=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)u[t[r]]=!0;i.push(e)}));var o,f,l,p,d=[H,(p=function(e){o.insert(e)},function(e){e.root||(e=e.return)&&p(e)})],b=(f=[Y,Z].concat(a,d),l=h(f),function(e,t,r,n){for(var a="",c=0;c<l;c++)a+=f[c](e,t,r,n)||"";return a});s=function(e,t,r,n){o=r,G(J(e?e+"{"+t.styles+"}":t.styles),b),n&&(v.inserted[t.name]=!0)};var v={key:t,sheet:new n({key:t,container:c,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend}),nonce:e.nonce,inserted:u,registered:{},insert:s};return v.sheet.hydrate(i),v}}}]);
"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[304],{31258:(e,t,n)=>{function r(e,t){let n=e.length-t,r=0;do{for(let n=t;n>0;n--)e[r+t]+=e[r],r++;n-=t}while(n>0)}function o(e,t,n){let r=0,o=e.length;const i=o/n;for(;o>t;){for(let n=t;n>0;--n)e[r+t]+=e[r],++r;o-=t}const l=e.slice();for(let t=0;t<i;++t)for(let r=0;r<n;++r)e[n*t+r]=l[(n-r-1)*i+t]}n.d(t,{Z:()=>i});class i{async decode(e,t){const n=await this.decodeBlock(t),i=e.Predictor||1;if(1!==i){const t=!e.StripOffsets;return function(e,t,n,i,l,f){if(!t||1===t)return e;for(let e=0;e<l.length;++e){if(l[e]%8!=0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(l[e]!==l[0])throw new Error("When decoding with predictor, all samples must have the same size.")}const s=l[0]/8,c=2===f?1:l.length;for(let f=0;f<i&&!(f*c*n*s>=e.byteLength);++f){let i;if(2===t){switch(l[0]){case 8:i=new Uint8Array(e,f*c*n*s,c*n*s);break;case 16:i=new Uint16Array(e,f*c*n*s,c*n*s/2);break;case 32:i=new Uint32Array(e,f*c*n*s,c*n*s/4);break;default:throw new Error(`Predictor 2 not allowed with ${l[0]} bits per sample.`)}r(i,c)}else 3===t&&(i=new Uint8Array(e,f*c*n*s,c*n*s),o(i,c,s))}return e}(n,i,t?e.TileWidth:e.ImageWidth,t?e.TileLength:e.RowsPerStrip||e.ImageLength,e.BitsPerSample,e.PlanarConfiguration)}return n}}},10304:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(31258);function o(e,t){for(let n=t.length-1;n>=0;n--)e.push(t[n]);return e}function i(e){const t=new Uint16Array(4093),n=new Uint8Array(4093);for(let e=0;e<=257;e++)t[e]=4096,n[e]=e;let r=258,i=9,l=0;function f(){r=258,i=9}function s(e){const t=function(e,t,n){const r=t%8,o=Math.floor(t/8),i=8-r,l=t+n-8*(o+1);let f=8*(o+2)-(t+n);const s=8*(o+2)-t;if(f=Math.max(0,f),o>=e.length)return console.warn("ran off the end of the buffer before finding EOI_CODE (end on input code)"),257;let c=e[o]&2**(8-r)-1;c<<=n-i;let a=c;if(o+1<e.length){let t=e[o+1]>>>f;t<<=Math.max(0,n-s),a+=t}if(l>8&&o+2<e.length){const r=8*(o+3)-(t+n);a+=e[o+2]>>>r}return a}(e,l,i);return l+=i,t}function c(e,o){return n[r]=o,t[r]=e,r++,r-1}function a(e){const r=[];for(let o=e;4096!==o;o=t[o])r.push(n[o]);return r}const h=[];f();const u=new Uint8Array(e);let d,w=s(u);for(;257!==w;){if(256===w){for(f(),w=s(u);256===w;)w=s(u);if(257===w)break;if(w>256)throw new Error(`corrupted code at scanline ${w}`);o(h,a(w)),d=w}else if(w<r){const e=a(w);o(h,e),c(d,e[e.length-1]),d=w}else{const e=a(d);if(!e)throw new Error(`Bogus entry. Not in dictionary, ${d} / ${r}, position: ${l}`);o(h,e),h.push(e[e.length-1]),c(d,e[e.length-1]),d=w}r+1>=2**i&&(12===i?d=void 0:i++),w=s(u)}return new Uint8Array(h)}class l extends r.Z{decodeBlock(e){return i(e).buffer}}}}]);
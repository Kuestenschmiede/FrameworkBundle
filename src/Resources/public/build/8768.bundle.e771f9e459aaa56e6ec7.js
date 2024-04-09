"use strict";(self.webpackChunkframeworkbundle=self.webpackChunkframeworkbundle||[]).push([[8768],{696:(e,t,n)=>{function r(e,t){let n=e.length-t,r=0;do{for(let n=t;n>0;n--)e[r+t]+=e[r],r++;n-=t}while(n>0)}function o(e,t,n){let r=0,o=e.length;const i=o/n;for(;o>t;){for(let n=t;n>0;--n)e[r+t]+=e[r],++r;o-=t}const l=e.slice();for(let t=0;t<i;++t)for(let r=0;r<n;++r)e[n*t+r]=l[(n-r-1)*i+t]}n.d(t,{A:()=>i});class i{async decode(e,t){const n=await this.decodeBlock(t),i=e.Predictor||1;if(1!==i){const t=!e.StripOffsets;return function(e,t,n,i,l,s){if(!t||1===t)return e;for(let e=0;e<l.length;++e){if(l[e]%8!=0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(l[e]!==l[0])throw new Error("When decoding with predictor, all samples must have the same size.")}const f=l[0]/8,c=2===s?1:l.length;for(let s=0;s<i&&!(s*c*n*f>=e.byteLength);++s){let i;if(2===t){switch(l[0]){case 8:i=new Uint8Array(e,s*c*n*f,c*n*f);break;case 16:i=new Uint16Array(e,s*c*n*f,c*n*f/2);break;case 32:i=new Uint32Array(e,s*c*n*f,c*n*f/4);break;default:throw new Error(`Predictor 2 not allowed with ${l[0]} bits per sample.`)}r(i,c)}else 3===t&&(i=new Uint8Array(e,s*c*n*f,c*n*f),o(i,c,f))}return e}(n,i,t?e.TileWidth:e.ImageWidth,t?e.TileLength:e.RowsPerStrip||e.ImageLength,e.BitsPerSample,e.PlanarConfiguration)}return n}}},38768:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(696);const o=257;function i(e,t){for(let n=t.length-1;n>=0;n--)e.push(t[n]);return e}function l(e){const t=new Uint16Array(4093),n=new Uint8Array(4093);for(let e=0;e<=257;e++)t[e]=4096,n[e]=e;let r=258,l=9,s=0;function f(){r=258,l=9}function c(e){const t=function(e,t,n){const r=t%8,i=Math.floor(t/8),l=8-r,s=t+n-8*(i+1);let f=8*(i+2)-(t+n);const c=8*(i+2)-t;if(f=Math.max(0,f),i>=e.length)return console.warn("ran off the end of the buffer before finding EOI_CODE (end on input code)"),o;let a=e[i]&2**(8-r)-1;a<<=n-l;let h=a;if(i+1<e.length){let t=e[i+1]>>>f;t<<=Math.max(0,n-c),h+=t}if(s>8&&i+2<e.length){const r=8*(i+3)-(t+n);h+=e[i+2]>>>r}return h}(e,s,l);return s+=l,t}function a(e,o){return n[r]=o,t[r]=e,r++,r-1}function h(e){const r=[];for(let o=e;4096!==o;o=t[o])r.push(n[o]);return r}const u=[];f();const d=new Uint8Array(e);let w,g=c(d);for(;g!==o;){if(256===g){for(f(),g=c(d);256===g;)g=c(d);if(g===o)break;if(g>256)throw new Error(`corrupted code at scanline ${g}`);i(u,h(g)),w=g}else if(g<r){const e=h(g);i(u,e),a(w,e[e.length-1]),w=g}else{const e=h(w);if(!e)throw new Error(`Bogus entry. Not in dictionary, ${w} / ${r}, position: ${s}`);i(u,e),u.push(e[e.length-1]),a(w,e[e.length-1]),w=g}r+1>=2**l&&(12===l?w=void 0:l++),g=c(d)}return new Uint8Array(u)}class s extends r.A{decodeBlock(e){return l(e).buffer}}}}]);
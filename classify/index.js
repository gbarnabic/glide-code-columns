(()=>{var xr=Object.create;var g=Object.defineProperty,vr=Object.defineProperties,yr=Object.getOwnPropertyDescriptor,Tr=Object.getOwnPropertyDescriptors,Cr=Object.getOwnPropertyNames,k=Object.getOwnPropertySymbols,Pr=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty,Rr=Object.prototype.propertyIsEnumerable;var j=(r,e,t)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,c=(r,e)=>{for(var t in e||(e={}))A.call(e,t)&&j(r,t,e[t]);if(k)for(var t of k(e))Rr.call(e,t)&&j(r,t,e[t]);return r},p=(r,e)=>vr(r,Tr(e)),Sr=r=>g(r,"__esModule",{value:!0});var a=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Mr=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Cr(e))!A.call(r,i)&&i!=="default"&&g(r,i,{get:()=>e[i],enumerable:!(t=yr(e,i))||t.enumerable});return r},qr=r=>Mr(Sr(g(r!=null?xr(Pr(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var C=(r,e,t)=>new Promise((i,n)=>{var o=s=>{try{l(t.next(s))}catch(d){n(d)}},u=s=>{try{l(t.throw(s))}catch(d){n(d)}},l=s=>s.done?i(s.value):Promise.resolve(s.value).then(o,u);l((t=t.apply(r,e)).next())});var z=a((fn,O)=>{function kr(r,e,t,i){var n=-1,o=r==null?0:r.length;for(i&&o&&(t=r[++n]);++n<o;)t=e(t,r[n],n,r);return t}O.exports=kr});var N=a((hn,E)=>{function Ar(r){return function(e){return r==null?void 0:r[e]}}E.exports=Ar});var V=a((mn,D)=>{var jr=N(),Or={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},zr=jr(Or);D.exports=zr});var L=a((gn,I)=>{var Er=typeof global=="object"&&global&&global.Object===Object&&global;I.exports=Er});var _=a((pn,U)=>{var Nr=L(),Dr=typeof self=="object"&&self&&self.Object===Object&&self,Vr=Nr||Dr||Function("return this")();U.exports=Vr});var b=a((bn,F)=>{var Ir=_(),Lr=Ir.Symbol;F.exports=Lr});var B=a((wn,H)=>{function Ur(r,e){for(var t=-1,i=r==null?0:r.length,n=Array(i);++t<i;)n[t]=e(r[t],t,r);return n}H.exports=Ur});var J=a((xn,G)=>{var _r=Array.isArray;G.exports=_r});var K=a((vn,Y)=>{var W=b(),Z=Object.prototype,Fr=Z.hasOwnProperty,Hr=Z.toString,m=W?W.toStringTag:void 0;function Br(r){var e=Fr.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(o){}var n=Hr.call(r);return i&&(e?r[m]=t:delete r[m]),n}Y.exports=Br});var Q=a((yn,$)=>{var Gr=Object.prototype,Jr=Gr.toString;function Wr(r){return Jr.call(r)}$.exports=Wr});var te=a((Tn,re)=>{var X=b(),Zr=K(),Yr=Q(),Kr="[object Null]",$r="[object Undefined]",ee=X?X.toStringTag:void 0;function Qr(r){return r==null?r===void 0?$r:Kr:ee&&ee in Object(r)?Zr(r):Yr(r)}re.exports=Qr});var ne=a((Cn,ie)=>{function Xr(r){return r!=null&&typeof r=="object"}ie.exports=Xr});var oe=a((Pn,ae)=>{var et=te(),rt=ne(),tt="[object Symbol]";function it(r){return typeof r=="symbol"||rt(r)&&et(r)==tt}ae.exports=it});var fe=a((Rn,ce)=>{var se=b(),nt=B(),at=J(),ot=oe(),st=1/0,ue=se?se.prototype:void 0,le=ue?ue.toString:void 0;function de(r){if(typeof r=="string")return r;if(at(r))return nt(r,de)+"";if(ot(r))return le?le.call(r):"";var e=r+"";return e=="0"&&1/r==-st?"-0":e}ce.exports=de});var w=a((Sn,he)=>{var ut=fe();function lt(r){return r==null?"":ut(r)}he.exports=lt});var ge=a((Mn,me)=>{var dt=V(),ct=w(),ft=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ht="\\u0300-\\u036f",mt="\\ufe20-\\ufe2f",gt="\\u20d0-\\u20ff",pt=ht+mt+gt,bt="["+pt+"]",wt=RegExp(bt,"g");function xt(r){return r=ct(r),r&&r.replace(ft,dt).replace(wt,"")}me.exports=xt});var be=a((qn,pe)=>{var vt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function yt(r){return r.match(vt)||[]}pe.exports=yt});var xe=a((kn,we)=>{var Tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Ct(r){return Tt.test(r)}we.exports=Ct});var Ie=a((An,Ve)=>{var ve="\\ud800-\\udfff",Pt="\\u0300-\\u036f",Rt="\\ufe20-\\ufe2f",St="\\u20d0-\\u20ff",Mt=Pt+Rt+St,ye="\\u2700-\\u27bf",Te="a-z\\xdf-\\xf6\\xf8-\\xff",qt="\\xac\\xb1\\xd7\\xf7",kt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",At="\\u2000-\\u206f",jt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ce="A-Z\\xc0-\\xd6\\xd8-\\xde",Ot="\\ufe0e\\ufe0f",Pe=qt+kt+At+jt,Re="['\u2019]",Se="["+Pe+"]",zt="["+Mt+"]",Me="\\d+",Et="["+ye+"]",qe="["+Te+"]",ke="[^"+ve+Pe+Me+ye+Te+Ce+"]",Nt="\\ud83c[\\udffb-\\udfff]",Dt="(?:"+zt+"|"+Nt+")",Vt="[^"+ve+"]",Ae="(?:\\ud83c[\\udde6-\\uddff]){2}",je="[\\ud800-\\udbff][\\udc00-\\udfff]",h="["+Ce+"]",It="\\u200d",Oe="(?:"+qe+"|"+ke+")",Lt="(?:"+h+"|"+ke+")",ze="(?:"+Re+"(?:d|ll|m|re|s|t|ve))?",Ee="(?:"+Re+"(?:D|LL|M|RE|S|T|VE))?",Ne=Dt+"?",De="["+Ot+"]?",Ut="(?:"+It+"(?:"+[Vt,Ae,je].join("|")+")"+De+Ne+")*",_t="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ft="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ht=De+Ne+Ut,Bt="(?:"+[Et,Ae,je].join("|")+")"+Ht,Gt=RegExp([h+"?"+qe+"+"+ze+"(?="+[Se,h,"$"].join("|")+")",Lt+"+"+Ee+"(?="+[Se,h+Oe,"$"].join("|")+")",h+"?"+Oe+"+"+ze,h+"+"+Ee,Ft,_t,Me,Bt].join("|"),"g");function Jt(r){return r.match(Gt)||[]}Ve.exports=Jt});var Ue=a((jn,Le)=>{var Wt=be(),Zt=xe(),Yt=w(),Kt=Ie();function $t(r,e,t){return r=Yt(r),e=t?void 0:e,e===void 0?Zt(r)?Kt(r):Wt(r):r.match(e)||[]}Le.exports=$t});var Fe=a((On,_e)=>{var Qt=z(),Xt=ge(),ei=Ue(),ri="['\u2019]",ti=RegExp(ri,"g");function ii(r){return function(e){return Qt(ei(Xt(e).replace(ti,"")),r,"")}}_e.exports=ii});var Be=a((zn,He)=>{function ni(r,e,t){var i=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(n);++i<n;)o[i]=r[i+e];return o}He.exports=ni});var Je=a((En,Ge)=>{var ai=Be();function oi(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:ai(r,e,t)}Ge.exports=oi});var P=a((Nn,We)=>{var si="\\ud800-\\udfff",ui="\\u0300-\\u036f",li="\\ufe20-\\ufe2f",di="\\u20d0-\\u20ff",ci=ui+li+di,fi="\\ufe0e\\ufe0f",hi="\\u200d",mi=RegExp("["+hi+si+ci+fi+"]");function gi(r){return mi.test(r)}We.exports=gi});var Ye=a((Dn,Ze)=>{function pi(r){return r.split("")}Ze.exports=pi});var ir=a((Vn,tr)=>{var Ke="\\ud800-\\udfff",bi="\\u0300-\\u036f",wi="\\ufe20-\\ufe2f",xi="\\u20d0-\\u20ff",vi=bi+wi+xi,yi="\\ufe0e\\ufe0f",Ti="["+Ke+"]",R="["+vi+"]",S="\\ud83c[\\udffb-\\udfff]",Ci="(?:"+R+"|"+S+")",$e="[^"+Ke+"]",Qe="(?:\\ud83c[\\udde6-\\uddff]){2}",Xe="[\\ud800-\\udbff][\\udc00-\\udfff]",Pi="\\u200d",er=Ci+"?",rr="["+yi+"]?",Ri="(?:"+Pi+"(?:"+[$e,Qe,Xe].join("|")+")"+rr+er+")*",Si=rr+er+Ri,Mi="(?:"+[$e+R+"?",R,Qe,Xe,Ti].join("|")+")",qi=RegExp(S+"(?="+S+")|"+Mi+Si,"g");function ki(r){return r.match(qi)||[]}tr.exports=ki});var ar=a((In,nr)=>{var Ai=Ye(),ji=P(),Oi=ir();function zi(r){return ji(r)?Oi(r):Ai(r)}nr.exports=zi});var sr=a((Ln,or)=>{var Ei=Je(),Ni=P(),Di=ar(),Vi=w();function Ii(r){return function(e){e=Vi(e);var t=Ni(e)?Di(e):void 0,i=t?t[0]:e.charAt(0),n=t?Ei(t,1).join(""):e.slice(1);return i[r]()+n}}or.exports=Ii});var lr=a((Un,ur)=>{var Li=sr(),Ui=Li("toUpperCase");ur.exports=Ui});var cr=a((_n,dr)=>{var _i=Fe(),Fi=lr(),Hi=_i(function(r,e,t){return r+(t?" ":"")+Fi(e)});dr.exports=Hi});var br=a((Gn,v)=>{v.exports=function(r){return new f(r)};var pr=v.exports.STATE_KEYS=["categories","docCount","totalDocuments","vocabulary","vocabularySize","wordCount","wordFrequencyCount","options"];v.exports.fromJson=function(r){var e;try{e=JSON.parse(r)}catch(i){throw new Error("Naivebayes.fromJson expects a valid JSON string.")}var t=new f(e.options);return pr.forEach(function(i){if(typeof e[i]=="undefined"||e[i]===null)throw new Error("Naivebayes.fromJson: JSON string is missing an expected property: `"+i+"`.");t[i]=e[i]}),t};var sn=function(r){var e=/[^(a-zA-ZA-Яa-я0-9_)+\s]/g,t=r.replace(e," ");return t.split(/\s+/)};function f(r){if(this.options={},typeof r!="undefined"){if(!r||typeof r!="object"||Array.isArray(r))throw TypeError("NaiveBayes got invalid `options`: `"+r+"`. Pass in an object.");this.options=r}this.tokenizer=this.options.tokenizer||sn,this.vocabulary={},this.vocabularySize=0,this.totalDocuments=0,this.docCount={},this.wordCount={},this.wordFrequencyCount={},this.categories={}}f.prototype.initializeCategory=function(r){return this.categories[r]||(this.docCount[r]=0,this.wordCount[r]=0,this.wordFrequencyCount[r]={},this.categories[r]=!0),this};f.prototype.learn=async function(r,e){var t=this;t.initializeCategory(e),t.docCount[e]++,t.totalDocuments++;var i=await t.tokenizer(r),n=t.frequencyTable(i);return Object.keys(n).forEach(function(o){t.vocabulary[o]||(t.vocabulary[o]=!0,t.vocabularySize++);var u=n[o];t.wordFrequencyCount[e][o]?t.wordFrequencyCount[e][o]+=u:t.wordFrequencyCount[e][o]=u,t.wordCount[e]+=u}),t};f.prototype.categorize=async function(r){var e=this,t=-1/0,i=null,n=await e.tokenizer(r),o=e.frequencyTable(n);return Object.keys(e.categories).forEach(function(u){var l=e.docCount[u]/e.totalDocuments,s=Math.log(l);Object.keys(o).forEach(function(d){var y=o[d],T=e.tokenProbability(d,u);s+=y*Math.log(T)}),s>t&&(t=s,i=u)}),i};f.prototype.tokenProbability=function(r,e){var t=this.wordFrequencyCount[e][r]||0,i=this.wordCount[e];return(t+1)/(i+this.vocabularySize)};f.prototype.frequencyTable=function(r){var e=Object.create(null);return r.forEach(function(t){e[t]?e[t]++:e[t]=1}),e};f.prototype.toJson=function(){var r={},e=this;pr.forEach(function(i){r[i]=e[i]});var t=JSON.stringify(r);return t}});var hr=qr(cr());var Bi=`
        <svg
          width="48"
          height="48"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 14.85L14.3 0V7.29C14.3 11.4653 11.0406 14.85 7.02 14.85H0Z"
            fill="currentColor"
          />
          <path
            d="M11.7 19.71C11.7 15.5347 14.9594 12.15 18.98 12.15H26L11.7 27V19.71Z"
            fill="currentColor"
          />
        </svg>
    `,Gi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,Ji=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,fr=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,Wi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,Zi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Yi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Ki=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,$i=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,Qi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,Xi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,en=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,rn={Glide:Bi,"Machine Learning":Xi,General:fr,Array:Wi,Number:Ji,Encoding:en,Text:Qi,"Data & APIs":$i,Image:Zi,Fun:Yi,"Date & Time":Ki,Code:Gi};function M({icon:r,category:e}){var t;return(t=r!=null?r:rn[e])!=null?t:fr}function mr(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(mr):r}function tn(r,e){return C(this,null,function*(){var l;let{data:{key:t,params:i}}=r,n,o;try{n=yield e(...i)}catch(s){n=void 0;try{o=s.toString()}catch(d){o="Exception can't be stringified."}}let u={key:t};n!==void 0&&(n=mr(n),u.result={type:"string",value:n}),o!==void 0&&(u.error=o),((l=r.source)==null?void 0:l.postMessage).call(l,u,"*")})}function nn(r){return typeof window!="undefined"&&window.addEventListener("message",e=>tn(e,r.run)),p(c({},r),{json:JSON.stringify(an(r),null,2)})}function an(r){let{name:e,category:t,released:i,description:n,author:o,result:u,params:l,about:s,video:d}=r,y=M(r);return{name:e,category:t,released:i,description:n,author:o,result:u,about:s,icon:y,video:d,params:Object.entries(l).map(([T,wr])=>c({name:T},wr))}}var on={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:void 0,tests:[],run(){return C(this,null,function*(){})}},x=class{constructor(e={},t=[]){this.definition=c(c({},on),e),this.requiredParams=[...t]}with(e,t=[]){return new x(c(c({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){let{icon:t}=this.definition;return this.with({category:e,icon:M({icon:t,category:e})})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,hr.default)(t)),this.with({params:p(c({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withBooleanParam(e,t){return this.withParam("boolean",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredBooleanParam(e,t){return this.withRequiredParam("boolean",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function o(...u){let l={};if(u.forEach(({value:s},d)=>{l[n[d]]=s}),!i.some(s=>l[s]===void 0))return e(l)}return nn(p(c({},this.definition),{run:o}))}};function gr(r){return new x({name:r})}var un=br(),ln="",q={};function dn(r){var e;return(e=q[r])!=null?e:q[r]=un()}var Wn=gr("Classify Text").withCategory("Machine Learning").withDescription("Categorize text based on examples.").withAuthor("ttezel","https://github.com/ttezel/bayes").withAbout(`
      The Classify Text column takes training data in the form of text values, and known categories for those text values. When it sees new text values without categories provided, it tries to infer the category based on the examples it's seen.

      **This is just a proof of concept. Because Glide does not guarantee that all columns are evaluated (it only evaluates columns required to show the current screen), this will usually not produce good results.**`).withVideo("https://www.youtube.com/watch?v=Qu9MM8YAAM0").withRequiredStringParam("phrase").withStringParam("category","Training Data").withStringParam("id","Classifier ID").withStringResult().run(({id:r=ln,phrase:e,category:t})=>{let i=dn(r);return t!==void 0?(i.learn(e,t),t):i.categorize(e)});})();
//# sourceMappingURL=index.js.map

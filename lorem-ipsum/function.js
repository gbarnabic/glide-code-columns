var xt=Object.create;var T=Object.defineProperty,Tt=Object.defineProperties,Pt=Object.getOwnPropertyDescriptor,yt=Object.getOwnPropertyDescriptors,Rt=Object.getOwnPropertyNames,te=Object.getOwnPropertySymbols,_t=Object.getPrototypeOf,ne=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable;var ie=(r,e,t)=>e in r?T(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,f=(r,e)=>{for(var t in e||(e={}))ne.call(e,t)&&ie(r,t,e[t]);if(te)for(var t of te(e))St.call(e,t)&&ie(r,t,e[t]);return r},P=(r,e)=>Tt(r,yt(e)),At=r=>T(r,"__esModule",{value:!0});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Ot=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Rt(e))!ne.call(r,n)&&n!=="default"&&T(r,n,{get:()=>e[n],enumerable:!(t=Pt(e,n))||t.enumerable});return r},ae=r=>Ot(At(T(r!=null?xt(_t(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var ue=(r,e,t)=>new Promise((n,a)=>{var u=o=>{try{s(t.next(o))}catch(c){a(c)}},l=o=>{try{s(t.throw(o))}catch(c){a(c)}},s=o=>o.done?n(o.value):Promise.resolve(o.value).then(u,l);s((t=t.apply(r,e)).next())});var se=i((Za,oe)=>{function Nt(r,e,t,n){var a=-1,u=r==null?0:r.length;for(n&&u&&(t=r[++a]);++a<u;)t=e(t,r[a],a,r);return t}oe.exports=Nt});var le=i((Ja,de)=>{function Ct(r){return function(e){return r==null?void 0:r[e]}}de.exports=Ct});var fe=i((Ya,ce)=>{var Mt=le(),kt={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},It=Mt(kt);ce.exports=It});var ge=i((Ka,me)=>{var qt=typeof global=="object"&&global&&global.Object===Object&&global;me.exports=qt});var pe=i((Xa,he)=>{var Et=ge(),Lt=typeof self=="object"&&self&&self.Object===Object&&self,Ut=Et||Lt||Function("return this")();he.exports=Ut});var y=i((Qa,ve)=>{var jt=pe(),Dt=jt.Symbol;ve.exports=Dt});var be=i((eu,we)=>{function Wt(r,e){for(var t=-1,n=r==null?0:r.length,a=Array(n);++t<n;)a[t]=e(r[t],t,r);return a}we.exports=Wt});var Te=i((ru,xe)=>{var Ht=Array.isArray;xe.exports=Ht});var _e=i((tu,Re)=>{var Pe=y(),ye=Object.prototype,Ft=ye.hasOwnProperty,Vt=ye.toString,w=Pe?Pe.toStringTag:void 0;function Gt(r){var e=Ft.call(r,w),t=r[w];try{r[w]=void 0;var n=!0}catch(u){}var a=Vt.call(r);return n&&(e?r[w]=t:delete r[w]),a}Re.exports=Gt});var Ae=i((nu,Se)=>{var Bt=Object.prototype,zt=Bt.toString;function $t(r){return zt.call(r)}Se.exports=$t});var Me=i((iu,Ce)=>{var Oe=y(),Zt=_e(),Jt=Ae(),Yt="[object Null]",Kt="[object Undefined]",Ne=Oe?Oe.toStringTag:void 0;function Xt(r){return r==null?r===void 0?Kt:Yt:Ne&&Ne in Object(r)?Zt(r):Jt(r)}Ce.exports=Xt});var Ie=i((au,ke)=>{function Qt(r){return r!=null&&typeof r=="object"}ke.exports=Qt});var Ee=i((uu,qe)=>{var en=Me(),rn=Ie(),tn="[object Symbol]";function nn(r){return typeof r=="symbol"||rn(r)&&en(r)==tn}qe.exports=nn});var He=i((ou,We)=>{var Le=y(),an=be(),un=Te(),on=Ee(),sn=1/0,Ue=Le?Le.prototype:void 0,je=Ue?Ue.toString:void 0;function De(r){if(typeof r=="string")return r;if(un(r))return an(r,De)+"";if(on(r))return je?je.call(r):"";var e=r+"";return e=="0"&&1/r==-sn?"-0":e}We.exports=De});var R=i((su,Fe)=>{var dn=He();function ln(r){return r==null?"":dn(r)}Fe.exports=ln});var Ge=i((du,Ve)=>{var cn=fe(),fn=R(),mn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,gn="\\u0300-\\u036f",hn="\\ufe20-\\ufe2f",pn="\\u20d0-\\u20ff",vn=gn+hn+pn,wn="["+vn+"]",bn=RegExp(wn,"g");function xn(r){return r=fn(r),r&&r.replace(mn,cn).replace(bn,"")}Ve.exports=xn});var ze=i((lu,Be)=>{var Tn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Pn(r){return r.match(Tn)||[]}Be.exports=Pn});var Ze=i((cu,$e)=>{var yn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Rn(r){return yn.test(r)}$e.exports=Rn});var mr=i((fu,fr)=>{var Je="\\ud800-\\udfff",_n="\\u0300-\\u036f",Sn="\\ufe20-\\ufe2f",An="\\u20d0-\\u20ff",On=_n+Sn+An,Ye="\\u2700-\\u27bf",Ke="a-z\\xdf-\\xf6\\xf8-\\xff",Nn="\\xac\\xb1\\xd7\\xf7",Cn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Mn="\\u2000-\\u206f",kn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Xe="A-Z\\xc0-\\xd6\\xd8-\\xde",In="\\ufe0e\\ufe0f",Qe=Nn+Cn+Mn+kn,er="['\u2019]",rr="["+Qe+"]",qn="["+On+"]",tr="\\d+",En="["+Ye+"]",nr="["+Ke+"]",ir="[^"+Je+Qe+tr+Ye+Ke+Xe+"]",Ln="\\ud83c[\\udffb-\\udfff]",Un="(?:"+qn+"|"+Ln+")",jn="[^"+Je+"]",ar="(?:\\ud83c[\\udde6-\\uddff]){2}",ur="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+Xe+"]",Dn="\\u200d",or="(?:"+nr+"|"+ir+")",Wn="(?:"+p+"|"+ir+")",sr="(?:"+er+"(?:d|ll|m|re|s|t|ve))?",dr="(?:"+er+"(?:D|LL|M|RE|S|T|VE))?",lr=Un+"?",cr="["+In+"]?",Hn="(?:"+Dn+"(?:"+[jn,ar,ur].join("|")+")"+cr+lr+")*",Fn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Vn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Gn=cr+lr+Hn,Bn="(?:"+[En,ar,ur].join("|")+")"+Gn,zn=RegExp([p+"?"+nr+"+"+sr+"(?="+[rr,p,"$"].join("|")+")",Wn+"+"+dr+"(?="+[rr,p+or,"$"].join("|")+")",p+"?"+or+"+"+sr,p+"+"+dr,Vn,Fn,tr,Bn].join("|"),"g");function $n(r){return r.match(zn)||[]}fr.exports=$n});var hr=i((mu,gr)=>{var Zn=ze(),Jn=Ze(),Yn=R(),Kn=mr();function Xn(r,e,t){return r=Yn(r),e=t?void 0:e,e===void 0?Jn(r)?Kn(r):Zn(r):r.match(e)||[]}gr.exports=Xn});var vr=i((gu,pr)=>{var Qn=se(),ei=Ge(),ri=hr(),ti="['\u2019]",ni=RegExp(ti,"g");function ii(r){return function(e){return Qn(ri(ei(e).replace(ni,"")),r,"")}}pr.exports=ii});var br=i((hu,wr)=>{function ai(r,e,t){var n=-1,a=r.length;e<0&&(e=-e>a?0:a+e),t=t>a?a:t,t<0&&(t+=a),a=e>t?0:t-e>>>0,e>>>=0;for(var u=Array(a);++n<a;)u[n]=r[n+e];return u}wr.exports=ai});var Tr=i((pu,xr)=>{var ui=br();function oi(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:ui(r,e,t)}xr.exports=oi});var G=i((vu,Pr)=>{var si="\\ud800-\\udfff",di="\\u0300-\\u036f",li="\\ufe20-\\ufe2f",ci="\\u20d0-\\u20ff",fi=di+li+ci,mi="\\ufe0e\\ufe0f",gi="\\u200d",hi=RegExp("["+gi+si+fi+mi+"]");function pi(r){return hi.test(r)}Pr.exports=pi});var Rr=i((wu,yr)=>{function vi(r){return r.split("")}yr.exports=vi});var kr=i((bu,Mr)=>{var _r="\\ud800-\\udfff",wi="\\u0300-\\u036f",bi="\\ufe20-\\ufe2f",xi="\\u20d0-\\u20ff",Ti=wi+bi+xi,Pi="\\ufe0e\\ufe0f",yi="["+_r+"]",B="["+Ti+"]",z="\\ud83c[\\udffb-\\udfff]",Ri="(?:"+B+"|"+z+")",Sr="[^"+_r+"]",Ar="(?:\\ud83c[\\udde6-\\uddff]){2}",Or="[\\ud800-\\udbff][\\udc00-\\udfff]",_i="\\u200d",Nr=Ri+"?",Cr="["+Pi+"]?",Si="(?:"+_i+"(?:"+[Sr,Ar,Or].join("|")+")"+Cr+Nr+")*",Ai=Cr+Nr+Si,Oi="(?:"+[Sr+B+"?",B,Ar,Or,yi].join("|")+")",Ni=RegExp(z+"(?="+z+")|"+Oi+Ai,"g");function Ci(r){return r.match(Ni)||[]}Mr.exports=Ci});var qr=i((xu,Ir)=>{var Mi=Rr(),ki=G(),Ii=kr();function qi(r){return ki(r)?Ii(r):Mi(r)}Ir.exports=qi});var Lr=i((Tu,Er)=>{var Ei=Tr(),Li=G(),Ui=qr(),ji=R();function Di(r){return function(e){e=ji(e);var t=Li(e)?Ui(e):void 0,n=t?t[0]:e.charAt(0),a=t?Ei(t,1).join(""):e.slice(1);return n[r]()+a}}Er.exports=Di});var jr=i((Pu,Ur)=>{var Wi=Lr(),Hi=Wi("toUpperCase");Ur.exports=Hi});var Wr=i((yu,Dr)=>{var Fi=vr(),Vi=jr(),Gi=Fi(function(r,e,t){return r+(t?" ":"")+Vi(e)});Dr.exports=Gi});var Z=i(m=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});m.FORMATS=m.FORMAT_PLAIN=m.FORMAT_HTML=void 0;var Gr="html";m.FORMAT_HTML=Gr;var Br="plain";m.FORMAT_PLAIN=Br;var ua=[Gr,Br];m.FORMATS=ua});var Xr=i(d=>{"use strict";Object.defineProperty(d,"__esModule",{value:!0});d.UNITS=d.UNIT_PARAGRAPH=d.UNIT_PARAGRAPHS=d.UNIT_SENTENCE=d.UNIT_SENTENCES=d.UNIT_WORD=d.UNIT_WORDS=void 0;var zr="words";d.UNIT_WORDS=zr;var $r="word";d.UNIT_WORD=$r;var Zr="sentences";d.UNIT_SENTENCES=Zr;var Jr="sentence";d.UNIT_SENTENCE=Jr;var Yr="paragraphs";d.UNIT_PARAGRAPHS=Yr;var Kr="paragraph";d.UNIT_PARAGRAPH=Kr;var oa=[zr,$r,Zr,Jr,Yr,Kr];d.UNITS=oa});var J=i(S=>{"use strict";Object.defineProperty(S,"__esModule",{value:!0});S.WORDS=void 0;var sa=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"];S.WORDS=sa});var Qr=i(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.LINE_ENDINGS=void 0;var da={POSIX:`
`,WIN32:`\r
`};A.LINE_ENDINGS=da});var et=i(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});O.default=void 0;var la=function(e){var t=e.trim();return t.charAt(0).toUpperCase()+t.slice(1)},ca=la;O.default=ca});var rt=i((N,Y)=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});N.default=void 0;var fa=function(){return typeof Y!="undefined"&&!!Y.exports},ma=fa;N.default=ma});var tt=i(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.default=void 0;var ga=function(){var e=!1;try{e=navigator.product==="ReactNative"}catch(t){e=!1}return e},ha=ga;C.default=ha});var nt=i(M=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0});M.SUPPORTED_PLATFORMS=void 0;var pa={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"};M.SUPPORTED_PLATFORMS=pa});var it=i(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.default=void 0;var va=nt(),wa=function(){var e=!1;try{e=process.platform===va.SUPPORTED_PLATFORMS.WIN32}catch(t){e=!1}return e},ba=wa;k.default=ba});var at=i(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});I.default=void 0;var xa=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Array.apply(null,Array(e)).map(function(t,n){return n})},Ta=xa;I.default=Ta});var ut=i(q=>{"use strict";Object.defineProperty(q,"__esModule",{value:!0});q.default=void 0;var Pa=E(),ya=function(e,t){var n=(0,Pa.makeArrayOfLength)(e);return n.map(function(){return t()})},Ra=ya;q.default=Ra});var E=i(g=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0});Object.defineProperty(g,"capitalize",{enumerable:!0,get:function(){return _a.default}});Object.defineProperty(g,"isNode",{enumerable:!0,get:function(){return Sa.default}});Object.defineProperty(g,"isReactNative",{enumerable:!0,get:function(){return Aa.default}});Object.defineProperty(g,"isWindows",{enumerable:!0,get:function(){return Oa.default}});Object.defineProperty(g,"makeArrayOfLength",{enumerable:!0,get:function(){return Na.default}});Object.defineProperty(g,"makeArrayOfStrings",{enumerable:!0,get:function(){return Ca.default}});var _a=v(et()),Sa=v(rt()),Aa=v(tt()),Oa=v(it()),Na=v(at()),Ca=v(ut());function v(r){return r&&r.__esModule?r:{default:r}}});var st=i(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.default=void 0;var Ma=J(),K=E();function ka(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ot(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Ia(r,e,t){return e&&ot(r.prototype,e),t&&ot(r,t),r}function L(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var qa=function(){function r(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.sentencesPerParagraph,n=t===void 0?{max:7,min:3}:t,a=e.wordsPerSentence,u=a===void 0?{max:15,min:5}:a,l=e.random,s=e.seed,o=e.words,c=o===void 0?Ma.WORDS:o;if(ka(this,r),L(this,"sentencesPerParagraph",void 0),L(this,"wordsPerSentence",void 0),L(this,"random",void 0),L(this,"words",void 0),n.min>n.max)throw new Error("Minimum number of sentences per paragraph (".concat(n.min,") cannot exceed maximum (").concat(n.max,")."));if(u.min>u.max)throw new Error("Minimum number of words per sentence (".concat(u.min,") cannot exceed maximum (").concat(u.max,")."));this.sentencesPerParagraph=n,this.words=c,this.wordsPerSentence=u,this.random=l||Math.random}return Ia(r,[{key:"generateRandomInteger",value:function(t,n){return Math.floor(this.random()*(n-t+1)+t)}},{key:"generateRandomWords",value:function(t){var n=this,a=this.wordsPerSentence,u=a.min,l=a.max,s=t||this.generateRandomInteger(u,l);return(0,K.makeArrayOfLength)(s).reduce(function(o,c){return"".concat(n.pluckRandomWord()," ").concat(o)},"").trim()}},{key:"generateRandomSentence",value:function(t){return"".concat((0,K.capitalize)(this.generateRandomWords(t)),".")}},{key:"generateRandomParagraph",value:function(t){var n=this,a=this.sentencesPerParagraph,u=a.min,l=a.max,s=t||this.generateRandomInteger(u,l);return(0,K.makeArrayOfLength)(s).reduce(function(o,c){return"".concat(n.generateRandomSentence()," ").concat(o)},"").trim()}},{key:"pluckRandomWord",value:function(){var t=0,n=this.words.length-1,a=this.generateRandomInteger(t,n);return this.words[a]}}]),r}(),Ea=qa;U.default=Ea});var ct=i(W=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0});W.default=void 0;var j=Z(),dt=Qr(),La=Ua(st()),D=E();function Ua(r){return r&&r.__esModule?r:{default:r}}function ja(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function lt(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Da(r,e,t){return e&&lt(r.prototype,e),t&&lt(r,t),r}function Wa(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Ha=function(){function r(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:j.FORMAT_PLAIN,n=arguments.length>2?arguments[2]:void 0;if(ja(this,r),this.format=t,this.suffix=n,Wa(this,"generator",void 0),j.FORMATS.indexOf(t.toLowerCase())===-1)throw new Error("".concat(t," is an invalid format. Please use ").concat(j.FORMATS.join(" or "),"."));this.generator=new La.default(e)}return Da(r,[{key:"getLineEnding",value:function(){return this.suffix?this.suffix:!(0,D.isReactNative)()&&(0,D.isNode)()&&(0,D.isWindows)()?dt.LINE_ENDINGS.WIN32:dt.LINE_ENDINGS.POSIX}},{key:"formatString",value:function(t){return this.format===j.FORMAT_HTML?"<p>".concat(t,"</p>"):t}},{key:"formatStrings",value:function(t){var n=this;return t.map(function(a){return n.formatString(a)})}},{key:"generateWords",value:function(t){return this.formatString(this.generator.generateRandomWords(t))}},{key:"generateSentences",value:function(t){return this.formatString(this.generator.generateRandomParagraph(t))}},{key:"generateParagraphs",value:function(t){var n=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,D.makeArrayOfStrings)(t,n)).join(this.getLineEnding())}}]),r}(),Fa=Ha;W.default=Fa});var mt=i(b=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0});Object.defineProperty(b,"LoremIpsum",{enumerable:!0,get:function(){return ft.default}});b.loremIpsum=void 0;var Va=Z(),h=Xr(),Ga=J(),ft=Ba(ct());function Ba(r){return r&&r.__esModule?r:{default:r}}var za=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.count,n=t===void 0?1:t,a=e.format,u=a===void 0?Va.FORMAT_PLAIN:a,l=e.paragraphLowerBound,s=l===void 0?3:l,o=e.paragraphUpperBound,c=o===void 0?7:o,H=e.random,x=e.sentenceLowerBound,F=x===void 0?5:x,X=e.sentenceUpperBound,ht=X===void 0?15:X,Q=e.units,pt=Q===void 0?h.UNIT_SENTENCES:Q,ee=e.words,vt=ee===void 0?Ga.WORDS:ee,re=e.suffix,wt=re===void 0?"":re,bt={random:H,sentencesPerParagraph:{max:c,min:s},words:vt,wordsPerSentence:{max:ht,min:F}},V=new ft.default(bt,u,wt);switch(pt){case h.UNIT_PARAGRAPHS:case h.UNIT_PARAGRAPH:return V.generateParagraphs(n);case h.UNIT_SENTENCES:case h.UNIT_SENTENCE:return V.generateSentences(n);case h.UNIT_WORDS:case h.UNIT_WORD:return V.generateWords(n);default:return""}};b.loremIpsum=za});var Fr=ae(Wr());var Bi=`
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
    `,zi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,$i=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,Hr=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,Zi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,Ji=`
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
`,Xi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,Qi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,ea=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,ra=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,ta={Glide:Bi,"Machine Learning":ea,General:Hr,Array:Zi,Number:$i,Encoding:ra,Text:Qi,"Data & APIs":Xi,Image:Ji,Fun:Yi,"Date & Time":Ki,Code:zi};function $({icon:r,category:e}){var t;return(t=r!=null?r:ta[e])!=null?t:Hr}function na(r){return P(f({},r),{json:JSON.stringify(ia(r),null,2)})}function ia(r){let{name:e,category:t,released:n,description:a,author:u,result:l,params:s,about:o,video:c}=r,H=$(r);return{name:e,category:t,released:n,description:a,author:u,result:l,about:o,icon:H,video:c,params:Object.entries(s).map(([x,F])=>f({name:x},F))}}var aa={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:void 0,tests:[],run(){return ue(this,null,function*(){})}},_=class{constructor(e={},t=[]){this.definition=f(f({},aa),e),this.requiredParams=[...t]}with(e,t=[]){return new _(f(f({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){let{icon:t}=this.definition;return this.with({category:e,icon:$({icon:t,category:e})})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:n=[]}=this.definition;return this.with({tests:[...n,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:n=[]}=this.definition;return this.with({tests:[...n,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,n){return n===void 0&&(n=(0,Fr.default)(t)),this.with({params:P(f({},this.definition.params),{[t]:{type:e,displayName:n}})})}withRequiredParam(e,t,n){return this.withParam(e,t,n).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withBooleanParam(e,t){return this.withParam("boolean",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredBooleanParam(e,t){return this.withRequiredParam("boolean",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,n=this.requiredParams,a=Object.keys(t);function u(...l){let s={};if(l.forEach(({value:o},c)=>{s[a[c]]=o}),!n.some(o=>s[o]===void 0))return e(s)}return na(P(f({},this.definition),{run:u}))}};function Vr(r){return new _({name:r})}var gt=ae(mt()),Fu=Vr("Lorem Ipsum").withCategory("Text").withReleased("direct").withDescription("Produces a 'lorem ipsum' style string").withAuthor("knicklabs","github.com/knicklabs/lorem-ipsum.js").withRequiredNumberParam("numberOfSentences","Number of Sentences").withStringResult().run(({numberOfSentences:r})=>new gt.LoremIpsum({wordsPerSentence:{min:2,max:10}}).generateSentences(r));export{Fu as default};
//# sourceMappingURL=function.js.map

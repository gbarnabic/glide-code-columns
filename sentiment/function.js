var gn=Object.create;var U=Object.defineProperty,xn=Object.defineProperties,yn=Object.getOwnPropertyDescriptor,vn=Object.getOwnPropertyDescriptors,wn=Object.getOwnPropertyNames,xe=Object.getOwnPropertySymbols,Tn=Object.getPrototypeOf,ye=Object.prototype.hasOwnProperty,Cn=Object.prototype.propertyIsEnumerable;var ve=(r,e,t)=>e in r?U(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,g=(r,e)=>{for(var t in e||(e={}))ye.call(e,t)&&ve(r,t,e[t]);if(xe)for(var t of xe(e))Cn.call(e,t)&&ve(r,t,e[t]);return r},j=(r,e)=>xn(r,vn(e)),Sn=r=>U(r,"__esModule",{value:!0});var c=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Rn=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of wn(e))!ye.call(r,i)&&i!=="default"&&U(r,i,{get:()=>e[i],enumerable:!(t=yn(e,i))||t.enumerable});return r},we=r=>Rn(Sn(U(r!=null?gn(Tn(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var v=(r,e,t)=>new Promise((i,n)=>{var s=f=>{try{o(t.next(f))}catch(d){n(d)}},u=f=>{try{o(t.throw(f))}catch(d){n(d)}},o=f=>f.done?i(f.value):Promise.resolve(f.value).then(s,u);o((t=t.apply(r,e)).next())});var Ce=c((Ba,Te)=>{function qn(r,e,t,i){var n=-1,s=r==null?0:r.length;for(i&&s&&(t=r[++n]);++n<s;)t=e(t,r[n],n,r);return t}Te.exports=qn});var Re=c((Fa,Se)=>{function Pn(r){return function(e){return r==null?void 0:r[e]}}Se.exports=Pn});var Pe=c((Ha,qe)=>{var En=Re(),On={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},An=En(On);qe.exports=An});var Oe=c((Wa,Ee)=>{var Nn=typeof global=="object"&&global&&global.Object===Object&&global;Ee.exports=Nn});var Ne=c((Ja,Ae)=>{var Ln=Oe(),Un=typeof self=="object"&&self&&self.Object===Object&&self,jn=Ln||Un||Function("return this")();Ae.exports=jn});var D=c((za,Le)=>{var Dn=Ne(),Mn=Dn.Symbol;Le.exports=Mn});var je=c((Va,Ue)=>{function _n(r,e){for(var t=-1,i=r==null?0:r.length,n=Array(i);++t<i;)n[t]=e(r[t],t,r);return n}Ue.exports=_n});var Me=c((Za,De)=>{var In=Array.isArray;De.exports=In});var Be=c((Ga,ke)=>{var _e=D(),Ie=Object.prototype,kn=Ie.hasOwnProperty,Bn=Ie.toString,O=_e?_e.toStringTag:void 0;function Fn(r){var e=kn.call(r,O),t=r[O];try{r[O]=void 0;var i=!0}catch(s){}var n=Bn.call(r);return i&&(e?r[O]=t:delete r[O]),n}ke.exports=Fn});var He=c(($a,Fe)=>{var Hn=Object.prototype,Wn=Hn.toString;function Jn(r){return Wn.call(r)}Fe.exports=Jn});var Ve=c((Ka,ze)=>{var We=D(),zn=Be(),Vn=He(),Zn="[object Null]",Gn="[object Undefined]",Je=We?We.toStringTag:void 0;function $n(r){return r==null?r===void 0?Gn:Zn:Je&&Je in Object(r)?zn(r):Vn(r)}ze.exports=$n});var Ge=c((Xa,Ze)=>{function Kn(r){return r!=null&&typeof r=="object"}Ze.exports=Kn});var Ke=c((Ya,$e)=>{var Xn=Ve(),Yn=Ge(),Qn="[object Symbol]";function ei(r){return typeof r=="symbol"||Yn(r)&&Xn(r)==Qn}$e.exports=ei});var tr=c((Qa,rr)=>{var Xe=D(),ri=je(),ti=Me(),ni=Ke(),ii=1/0,Ye=Xe?Xe.prototype:void 0,Qe=Ye?Ye.toString:void 0;function er(r){if(typeof r=="string")return r;if(ti(r))return ri(r,er)+"";if(ni(r))return Qe?Qe.call(r):"";var e=r+"";return e=="0"&&1/r==-ii?"-0":e}rr.exports=er});var M=c((eu,nr)=>{var si=tr();function ai(r){return r==null?"":si(r)}nr.exports=ai});var sr=c((ru,ir)=>{var ui=Pe(),oi=M(),ci=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,fi="\\u0300-\\u036f",li="\\ufe20-\\ufe2f",di="\\u20d0-\\u20ff",pi=fi+li+di,mi="["+pi+"]",hi=RegExp(mi,"g");function bi(r){return r=oi(r),r&&r.replace(ci,ui).replace(hi,"")}ir.exports=bi});var ur=c((tu,ar)=>{var gi=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function xi(r){return r.match(gi)||[]}ar.exports=xi});var cr=c((nu,or)=>{var yi=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function vi(r){return yi.test(r)}or.exports=vi});var Er=c((iu,Pr)=>{var fr="\\ud800-\\udfff",wi="\\u0300-\\u036f",Ti="\\ufe20-\\ufe2f",Ci="\\u20d0-\\u20ff",Si=wi+Ti+Ci,lr="\\u2700-\\u27bf",dr="a-z\\xdf-\\xf6\\xf8-\\xff",Ri="\\xac\\xb1\\xd7\\xf7",qi="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Pi="\\u2000-\\u206f",Ei=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",pr="A-Z\\xc0-\\xd6\\xd8-\\xde",Oi="\\ufe0e\\ufe0f",mr=Ri+qi+Pi+Ei,hr="['\u2019]",br="["+mr+"]",Ai="["+Si+"]",gr="\\d+",Ni="["+lr+"]",xr="["+dr+"]",yr="[^"+fr+mr+gr+lr+dr+pr+"]",Li="\\ud83c[\\udffb-\\udfff]",Ui="(?:"+Ai+"|"+Li+")",ji="[^"+fr+"]",vr="(?:\\ud83c[\\udde6-\\uddff]){2}",wr="[\\ud800-\\udbff][\\udc00-\\udfff]",S="["+pr+"]",Di="\\u200d",Tr="(?:"+xr+"|"+yr+")",Mi="(?:"+S+"|"+yr+")",Cr="(?:"+hr+"(?:d|ll|m|re|s|t|ve))?",Sr="(?:"+hr+"(?:D|LL|M|RE|S|T|VE))?",Rr=Ui+"?",qr="["+Oi+"]?",_i="(?:"+Di+"(?:"+[ji,vr,wr].join("|")+")"+qr+Rr+")*",Ii="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ki="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Bi=qr+Rr+_i,Fi="(?:"+[Ni,vr,wr].join("|")+")"+Bi,Hi=RegExp([S+"?"+xr+"+"+Cr+"(?="+[br,S,"$"].join("|")+")",Mi+"+"+Sr+"(?="+[br,S+Tr,"$"].join("|")+")",S+"?"+Tr+"+"+Cr,S+"+"+Sr,ki,Ii,gr,Fi].join("|"),"g");function Wi(r){return r.match(Hi)||[]}Pr.exports=Wi});var Ar=c((su,Or)=>{var Ji=ur(),zi=cr(),Vi=M(),Zi=Er();function Gi(r,e,t){return r=Vi(r),e=t?void 0:e,e===void 0?zi(r)?Zi(r):Ji(r):r.match(e)||[]}Or.exports=Gi});var Lr=c((au,Nr)=>{var $i=Ce(),Ki=sr(),Xi=Ar(),Yi="['\u2019]",Qi=RegExp(Yi,"g");function es(r){return function(e){return $i(Xi(Ki(e).replace(Qi,"")),r,"")}}Nr.exports=es});var jr=c((uu,Ur)=>{function rs(r,e,t){var i=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(n);++i<n;)s[i]=r[i+e];return s}Ur.exports=rs});var Mr=c((ou,Dr)=>{var ts=jr();function ns(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:ts(r,e,t)}Dr.exports=ns});var V=c((cu,_r)=>{var is="\\ud800-\\udfff",ss="\\u0300-\\u036f",as="\\ufe20-\\ufe2f",us="\\u20d0-\\u20ff",os=ss+as+us,cs="\\ufe0e\\ufe0f",fs="\\u200d",ls=RegExp("["+fs+is+os+cs+"]");function ds(r){return ls.test(r)}_r.exports=ds});var kr=c((fu,Ir)=>{function ps(r){return r.split("")}Ir.exports=ps});var Zr=c((lu,Vr)=>{var Br="\\ud800-\\udfff",ms="\\u0300-\\u036f",hs="\\ufe20-\\ufe2f",bs="\\u20d0-\\u20ff",gs=ms+hs+bs,xs="\\ufe0e\\ufe0f",ys="["+Br+"]",Z="["+gs+"]",G="\\ud83c[\\udffb-\\udfff]",vs="(?:"+Z+"|"+G+")",Fr="[^"+Br+"]",Hr="(?:\\ud83c[\\udde6-\\uddff]){2}",Wr="[\\ud800-\\udbff][\\udc00-\\udfff]",ws="\\u200d",Jr=vs+"?",zr="["+xs+"]?",Ts="(?:"+ws+"(?:"+[Fr,Hr,Wr].join("|")+")"+zr+Jr+")*",Cs=zr+Jr+Ts,Ss="(?:"+[Fr+Z+"?",Z,Hr,Wr,ys].join("|")+")",Rs=RegExp(G+"(?="+G+")|"+Ss+Cs,"g");function qs(r){return r.match(Rs)||[]}Vr.exports=qs});var $r=c((du,Gr)=>{var Ps=kr(),Es=V(),Os=Zr();function As(r){return Es(r)?Os(r):Ps(r)}Gr.exports=As});var Xr=c((pu,Kr)=>{var Ns=Mr(),Ls=V(),Us=$r(),js=M();function Ds(r){return function(e){e=js(e);var t=Ls(e)?Us(e):void 0,i=t?t[0]:e.charAt(0),n=t?Ns(t,1).join(""):e.slice(1);return i[r]()+n}}Kr.exports=Ds});var Qr=c((mu,Yr)=>{var Ms=Xr(),_s=Ms("toUpperCase");Yr.exports=_s});var rt=c((hu,et)=>{var Is=Lr(),ks=Qr(),Bs=Is(function(r,e,t){return r+(t?" ":"")+ks(e)});et.exports=Bs});var K=c((xu,ut)=>{"use strict";ut.exports=function(e,t){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return e.apply(t,n)}}});var m=c((yu,ft)=>{"use strict";var zs=K(),T=Object.prototype.toString;function X(r){return T.call(r)==="[object Array]"}function Y(r){return typeof r=="undefined"}function Vs(r){return r!==null&&!Y(r)&&r.constructor!==null&&!Y(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function Zs(r){return T.call(r)==="[object ArrayBuffer]"}function Gs(r){return typeof FormData!="undefined"&&r instanceof FormData}function $s(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&r.buffer instanceof ArrayBuffer,e}function Ks(r){return typeof r=="string"}function Xs(r){return typeof r=="number"}function ot(r){return r!==null&&typeof r=="object"}function I(r){if(T.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function Ys(r){return T.call(r)==="[object Date]"}function Qs(r){return T.call(r)==="[object File]"}function ea(r){return T.call(r)==="[object Blob]"}function ct(r){return T.call(r)==="[object Function]"}function ra(r){return ot(r)&&ct(r.pipe)}function ta(r){return typeof URLSearchParams!="undefined"&&r instanceof URLSearchParams}function na(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function ia(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function Q(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),X(r))for(var t=0,i=r.length;t<i;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function ee(){var r={};function e(n,s){I(r[s])&&I(n)?r[s]=ee(r[s],n):I(n)?r[s]=ee({},n):X(n)?r[s]=n.slice():r[s]=n}for(var t=0,i=arguments.length;t<i;t++)Q(arguments[t],e);return r}function sa(r,e,t){return Q(e,function(n,s){t&&typeof n=="function"?r[s]=zs(n,t):r[s]=n}),r}function aa(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}ft.exports={isArray:X,isArrayBuffer:Zs,isBuffer:Vs,isFormData:Gs,isArrayBufferView:$s,isString:Ks,isNumber:Xs,isObject:ot,isPlainObject:I,isUndefined:Y,isDate:Ys,isFile:Qs,isBlob:ea,isFunction:ct,isStream:ra,isURLSearchParams:ta,isStandardBrowserEnv:ia,forEach:Q,merge:ee,extend:sa,trim:na,stripBOM:aa}});var re=c((vu,dt)=>{"use strict";var R=m();function lt(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}dt.exports=function(e,t,i){if(!t)return e;var n;if(i)n=i(t);else if(R.isURLSearchParams(t))n=t.toString();else{var s=[];R.forEach(t,function(f,d){f===null||typeof f=="undefined"||(R.isArray(f)?d=d+"[]":f=[f],R.forEach(f,function(l){R.isDate(l)?l=l.toISOString():R.isObject(l)&&(l=JSON.stringify(l)),s.push(lt(d)+"="+lt(l))}))}),n=s.join("&")}if(n){var u=e.indexOf("#");u!==-1&&(e=e.slice(0,u)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e}});var mt=c((wu,pt)=>{"use strict";var ua=m();function k(){this.handlers=[]}k.prototype.use=function(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};k.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};k.prototype.forEach=function(e){ua.forEach(this.handlers,function(i){i!==null&&e(i)})};pt.exports=k});var bt=c((Tu,ht)=>{"use strict";var oa=m();ht.exports=function(e,t){oa.forEach(e,function(n,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[s])})}});var te=c((Cu,gt)=>{"use strict";gt.exports=function(e,t,i,n,s){return e.config=t,i&&(e.code=i),e.request=n,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}});var ne=c((Su,xt)=>{"use strict";var ca=te();xt.exports=function(e,t,i,n,s){var u=new Error(e);return ca(u,t,i,n,s)}});var vt=c((Ru,yt)=>{"use strict";var fa=ne();yt.exports=function(e,t,i){var n=i.config.validateStatus;!i.status||!n||n(i.status)?e(i):t(fa("Request failed with status code "+i.status,i.config,null,i.request,i))}});var Tt=c((qu,wt)=>{"use strict";var B=m();wt.exports=B.isStandardBrowserEnv()?function(){return{write:function(t,i,n,s,u,o){var f=[];f.push(t+"="+encodeURIComponent(i)),B.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),B.isString(s)&&f.push("path="+s),B.isString(u)&&f.push("domain="+u),o===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(t){var i=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()});var St=c((Pu,Ct)=>{"use strict";Ct.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}});var qt=c((Eu,Rt)=>{"use strict";Rt.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}});var Et=c((Ou,Pt)=>{"use strict";var la=St(),da=qt();Pt.exports=function(e,t){return e&&!la(t)?da(e,t):t}});var At=c((Au,Ot)=>{"use strict";var ie=m(),pa=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];Ot.exports=function(e){var t={},i,n,s;return e&&ie.forEach(e.split(`
`),function(o){if(s=o.indexOf(":"),i=ie.trim(o.substr(0,s)).toLowerCase(),n=ie.trim(o.substr(s+1)),i){if(t[i]&&pa.indexOf(i)>=0)return;i==="set-cookie"?t[i]=(t[i]?t[i]:[]).concat([n]):t[i]=t[i]?t[i]+", "+n:n}}),t}});var Ut=c((Nu,Lt)=>{"use strict";var Nt=m();Lt.exports=Nt.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),i;function n(s){var u=s;return e&&(t.setAttribute("href",u),u=t.href),t.setAttribute("href",u),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=n(window.location.href),function(u){var o=Nt.isString(u)?n(u):u;return o.protocol===i.protocol&&o.host===i.host}}():function(){return function(){return!0}}()});var A=c((Lu,jt)=>{"use strict";function se(r){this.message=r}se.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};se.prototype.__CANCEL__=!0;jt.exports=se});var ue=c((Uu,Dt)=>{"use strict";var F=m(),ma=vt(),ha=Tt(),ba=re(),ga=Et(),xa=At(),ya=Ut(),ae=ne(),va=N(),wa=A();Dt.exports=function(e){return new Promise(function(i,n){var s=e.data,u=e.headers,o=e.responseType,f;function d(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}F.isFormData(s)&&delete u["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";u.Authorization="Basic "+btoa(l+":"+h)}var E=ga(e.baseURL,e.url);a.open(e.method.toUpperCase(),ba(E,e.params,e.paramsSerializer),!0),a.timeout=e.timeout;function be(){if(!!a){var x="getAllResponseHeaders"in a?xa(a.getAllResponseHeaders()):null,C=!o||o==="text"||o==="json"?a.responseText:a.response,w={data:C,status:a.status,statusText:a.statusText,headers:x,config:e,request:a};ma(function(z){i(z),d()},function(z){n(z),d()},w),a=null}}if("onloadend"in a?a.onloadend=be:a.onreadystatechange=function(){!a||a.readyState!==4||a.status===0&&!(a.responseURL&&a.responseURL.indexOf("file:")===0)||setTimeout(be)},a.onabort=function(){!a||(n(ae("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){n(ae("Network Error",e,null,a)),a=null},a.ontimeout=function(){var C=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",w=e.transitional||va.transitional;e.timeoutErrorMessage&&(C=e.timeoutErrorMessage),n(ae(C,e,w.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",a)),a=null},F.isStandardBrowserEnv()){var ge=(e.withCredentials||ya(E))&&e.xsrfCookieName?ha.read(e.xsrfCookieName):void 0;ge&&(u[e.xsrfHeaderName]=ge)}"setRequestHeader"in a&&F.forEach(u,function(C,w){typeof s=="undefined"&&w.toLowerCase()==="content-type"?delete u[w]:a.setRequestHeader(w,C)}),F.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),o&&o!=="json"&&(a.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&a.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(x){!a||(n(!x||x&&x.type?new wa("canceled"):x),a.abort(),a=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),s||(s=null),a.send(s)})}});var N=c((ju,It)=>{"use strict";var p=m(),Mt=bt(),Ta=te(),Ca={"Content-Type":"application/x-www-form-urlencoded"};function _t(r,e){!p.isUndefined(r)&&p.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Sa(){var r;return typeof XMLHttpRequest!="undefined"?r=ue():typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]"&&(r=ue()),r}function Ra(r,e,t){if(p.isString(r))try{return(e||JSON.parse)(r),p.trim(r)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(r)}var H={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:Sa(),transformRequest:[function(e,t){return Mt(t,"Accept"),Mt(t,"Content-Type"),p.isFormData(e)||p.isArrayBuffer(e)||p.isBuffer(e)||p.isStream(e)||p.isFile(e)||p.isBlob(e)?e:p.isArrayBufferView(e)?e.buffer:p.isURLSearchParams(e)?(_t(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):p.isObject(e)||t&&t["Content-Type"]==="application/json"?(_t(t,"application/json"),Ra(e)):e}],transformResponse:[function(e){var t=this.transitional||H.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,s=!i&&this.responseType==="json";if(s||n&&p.isString(e)&&e.length)try{return JSON.parse(e)}catch(u){if(s)throw u.name==="SyntaxError"?Ta(u,this,"E_JSON_PARSE"):u}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(e){H.headers[e]={}});p.forEach(["post","put","patch"],function(e){H.headers[e]=p.merge(Ca)});It.exports=H});var Bt=c((Du,kt)=>{"use strict";var qa=m(),Pa=N();kt.exports=function(e,t,i){var n=this||Pa;return qa.forEach(i,function(u){e=u.call(n,e,t)}),e}});var oe=c((Mu,Ft)=>{"use strict";Ft.exports=function(e){return!!(e&&e.__CANCEL__)}});var Jt=c((_u,Wt)=>{"use strict";var Ht=m(),ce=Bt(),Ea=oe(),Oa=N(),Aa=A();function fe(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Aa("canceled")}Wt.exports=function(e){fe(e),e.headers=e.headers||{},e.data=ce.call(e,e.data,e.headers,e.transformRequest),e.headers=Ht.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Ht.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||Oa.adapter;return t(e).then(function(n){return fe(e),n.data=ce.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Ea(n)||(fe(e),n&&n.response&&(n.response.data=ce.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})}});var le=c((Iu,zt)=>{"use strict";var b=m();zt.exports=function(e,t){t=t||{};var i={};function n(a,l){return b.isPlainObject(a)&&b.isPlainObject(l)?b.merge(a,l):b.isPlainObject(l)?b.merge({},l):b.isArray(l)?l.slice():l}function s(a){if(b.isUndefined(t[a])){if(!b.isUndefined(e[a]))return n(void 0,e[a])}else return n(e[a],t[a])}function u(a){if(!b.isUndefined(t[a]))return n(void 0,t[a])}function o(a){if(b.isUndefined(t[a])){if(!b.isUndefined(e[a]))return n(void 0,e[a])}else return n(void 0,t[a])}function f(a){if(a in t)return n(e[a],t[a]);if(a in e)return n(void 0,e[a])}var d={url:u,method:u,data:u,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:f};return b.forEach(Object.keys(e).concat(Object.keys(t)),function(l){var h=d[l]||s,E=h(l);b.isUndefined(E)&&h!==f||(i[l]=E)}),i}});var de=c((ku,Vt)=>{Vt.exports={version:"0.23.0"}});var $t=c((Bu,Gt)=>{"use strict";var Na=de().version,pe={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){pe[r]=function(i){return typeof i===r||"a"+(e<1?"n ":" ")+r}});var Zt={};pe.transitional=function(e,t,i){function n(s,u){return"[Axios v"+Na+"] Transitional option '"+s+"'"+u+(i?". "+i:"")}return function(s,u,o){if(e===!1)throw new Error(n(u," has been removed"+(t?" in "+t:"")));return t&&!Zt[u]&&(Zt[u]=!0,console.warn(n(u," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,u,o):!0}};function La(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var i=Object.keys(r),n=i.length;n-- >0;){var s=i[n],u=e[s];if(u){var o=r[s],f=o===void 0||u(o,s,r);if(f!==!0)throw new TypeError("option "+s+" must be "+f);continue}if(t!==!0)throw Error("Unknown option "+s)}}Gt.exports={assertOptions:La,validators:pe}});var rn=c((Fu,en)=>{"use strict";var Kt=m(),Ua=re(),Xt=mt(),Yt=Jt(),W=le(),Qt=$t(),q=Qt.validators;function L(r){this.defaults=r,this.interceptors={request:new Xt,response:new Xt}}L.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=W(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;t!==void 0&&Qt.assertOptions(t,{silentJSONParsing:q.transitional(q.boolean),forcedJSONParsing:q.transitional(q.boolean),clarifyTimeoutError:q.transitional(q.boolean)},!1);var i=[],n=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(e)===!1||(n=n&&h.synchronous,i.unshift(h.fulfilled,h.rejected))});var s=[];this.interceptors.response.forEach(function(h){s.push(h.fulfilled,h.rejected)});var u;if(!n){var o=[Yt,void 0];for(Array.prototype.unshift.apply(o,i),o=o.concat(s),u=Promise.resolve(e);o.length;)u=u.then(o.shift(),o.shift());return u}for(var f=e;i.length;){var d=i.shift(),a=i.shift();try{f=d(f)}catch(l){a(l);break}}try{u=Yt(f)}catch(l){return Promise.reject(l)}for(;s.length;)u=u.then(s.shift(),s.shift());return u};L.prototype.getUri=function(e){return e=W(this.defaults,e),Ua(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Kt.forEach(["delete","get","head","options"],function(e){L.prototype[e]=function(t,i){return this.request(W(i||{},{method:e,url:t,data:(i||{}).data}))}});Kt.forEach(["post","put","patch"],function(e){L.prototype[e]=function(t,i,n){return this.request(W(n||{},{method:e,url:t,data:i}))}});en.exports=L});var nn=c((Hu,tn)=>{"use strict";var ja=A();function P(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(i){if(!!t._listeners){var n,s=t._listeners.length;for(n=0;n<s;n++)t._listeners[n](i);t._listeners=null}}),this.promise.then=function(i){var n,s=new Promise(function(u){t.subscribe(u),n=u}).then(i);return s.cancel=function(){t.unsubscribe(n)},s},r(function(n){t.reason||(t.reason=new ja(n),e(t.reason))})}P.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};P.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};P.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};P.source=function(){var e,t=new P(function(n){e=n});return{token:t,cancel:e}};tn.exports=P});var an=c((Wu,sn)=>{"use strict";sn.exports=function(e){return function(i){return e.apply(null,i)}}});var on=c((Ju,un)=>{"use strict";un.exports=function(e){return typeof e=="object"&&e.isAxiosError===!0}});var ln=c((zu,me)=>{"use strict";var cn=m(),Da=K(),J=rn(),Ma=le(),_a=N();function fn(r){var e=new J(r),t=Da(J.prototype.request,e);return cn.extend(t,J.prototype,e),cn.extend(t,e),t.create=function(n){return fn(Ma(r,n))},t}var y=fn(_a);y.Axios=J;y.Cancel=A();y.CancelToken=nn();y.isCancel=oe();y.VERSION=de().version;y.all=function(e){return Promise.all(e)};y.spread=an();y.isAxiosError=on();me.exports=y;me.exports.default=y});var pn=c((Vu,dn)=>{dn.exports=ln()});var tt=we(rt());function Fs(r){return j(g({},r),{json:JSON.stringify(Ws(r),null,2)})}var Hs=`
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
    `,nt=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Ws(r){let{name:e,category:t,description:i,author:n,result:s,params:u,about:o,video:f}=r,{icon:d=nt}=r;return d==="glide"&&(d=Hs),{name:e,category:t,description:i,author:n,result:s,about:o,icon:d,video:f,params:Object.entries(u).map(([a,l])=>g({name:a},l))}}var Js={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:nt,about:void 0,video:void 0,tests:[],run(){return v(this,null,function*(){})}},_=class{constructor(e={},t=[]){this.definition=g(g({},Js),e),this.requiredParams=[...t]}with(e,t=[]){return new _(g(g({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,i){return i===void 0&&(i=(0,tt.default)(t)),this.with({params:j(g({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}run(e){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function s(...u){let o={};if(u.forEach(({value:f},d)=>{o[n[d]]=f}),!i.some(f=>o[f]===void 0))return e(o)}return Fs(j(g({},this.definition),{run:s}))}};function it(r){return new _({name:r})}var st={timeoutSeconds:5*60};function at(r){return(new Date().getTime()-r.getTime())/1e3}var $=class{constructor(e=st){this.cache=new Map;this.props=g(g({},e),st)}get(e){return v(this,null,function*(){var n;let{timestamp:t,item:i}=(n=this.cache.get(e))!=null?n:{timestamp:new Date(0)};if(at(t)<this.props.timeoutSeconds)return i;this.cache.delete(e)})}getWith(e,t){return v(this,null,function*(){var s;let{timestamp:i,item:n}=(s=this.cache.get(e))!=null?s:{timestamp:new Date(0)};if(at(i)<this.props.timeoutSeconds)return n;{let u=yield t(e);return this.set(e,u),u}})}set(e,t){return this.cache.set(e,{timestamp:new Date,item:t})}fetch(i){return v(this,arguments,function*(e,t=e){return yield this.getWith(t,()=>fetch(e).then(n=>n.json()))})}};var mn=we(pn()),Ia=new $({timeoutSeconds:5*60}),he={sentiment:r=>r.type,score:r=>r.score,full:JSON.stringify},hn="sentiment",$u=it("Text Sentiment").withAuthor("twinword inc.","help@twinword.com").withCategory("Data & APIs").withDescription("Is this comment positive or negative? Find out the tone.").withAbout(`
    Subscribe and get an API key at [rapidapi.com/twinword/api/sentiment-analysis](https://rapidapi.com/twinword/api/sentiment-analysis/).
  `).withRequiredStringParam("text").withRequiredStringParam("apiKey","API Key").withStringParam("interpretation",`Result (${Object.keys(he).join(", ")})`).withPrimitiveResult().run(i=>v(void 0,[i],function*({text:r,apiKey:e,interpretation:t=hn}){var o;let n=(o=he[t])!=null?o:he[hn];function s(){return v(this,null,function*(){try{return(yield mn.default.get("https://twinword-sentiment-analysis.p.rapidapi.com/analyze/",{params:{text:r},headers:{"x-rapidapi-host":"twinword-sentiment-analysis.p.rapidapi.com","x-rapidapi-key":e}})).data}catch(f){return}})}let u=yield Ia.getWith(r,s);return n(u)}));export{$u as default};
//# sourceMappingURL=function.js.map

(()=>{var at=Object.create;var I=Object.defineProperty,st=Object.defineProperties,lt=Object.getOwnPropertyDescriptor,ct=Object.getOwnPropertyDescriptors,ft=Object.getOwnPropertyNames,rr=Object.getOwnPropertySymbols,dt=Object.getPrototypeOf,er=Object.prototype.hasOwnProperty,ht=Object.prototype.propertyIsEnumerable;var tr=(t,r,i)=>r in t?I(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,k=(t,r)=>{for(var i in r||(r={}))er.call(r,i)&&tr(t,i,r[i]);if(rr)for(var i of rr(r))ht.call(r,i)&&tr(t,i,r[i]);return t},U=(t,r)=>st(t,ct(r)),mt=t=>I(t,"__esModule",{value:!0});var m=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports);var gt=(t,r,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let l of ft(r))!er.call(t,l)&&l!=="default"&&I(t,l,{get:()=>r[l],enumerable:!(i=lt(r,l))||i.enumerable});return t},ir=t=>gt(mt(I(t!=null?at(dt(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var G=(t,r,i)=>new Promise((l,f)=>{var h=n=>{try{e(i.next(n))}catch(a){f(a)}},s=n=>{try{e(i.throw(n))}catch(a){f(a)}},e=n=>n.done?l(n.value):Promise.resolve(n.value).then(h,s);e((i=i.apply(t,r)).next())});var or=m((eo,nr)=>{function xt(t,r,i,l){var f=-1,h=t==null?0:t.length;for(l&&h&&(i=t[++f]);++f<h;)i=r(i,t[f],f,t);return i}nr.exports=xt});var ar=m((to,ur)=>{function pt(t){return function(r){return t==null?void 0:t[r]}}ur.exports=pt});var lr=m((io,sr)=>{var wt=ar(),bt={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},vt=wt(bt);sr.exports=vt});var fr=m((no,cr)=>{var yt=typeof global=="object"&&global&&global.Object===Object&&global;cr.exports=yt});var hr=m((oo,dr)=>{var Tt=fr(),Ct=typeof self=="object"&&self&&self.Object===Object&&self,Pt=Tt||Ct||Function("return this")();dr.exports=Pt});var L=m((uo,mr)=>{var Rt=hr(),St=Rt.Symbol;mr.exports=St});var xr=m((ao,gr)=>{function kt(t,r){for(var i=-1,l=t==null?0:t.length,f=Array(l);++i<l;)f[i]=r(t[i],i,t);return f}gr.exports=kt});var wr=m((so,pr)=>{var Mt=Array.isArray;pr.exports=Mt});var Tr=m((lo,yr)=>{var br=L(),vr=Object.prototype,At=vr.hasOwnProperty,qt=vr.toString,D=br?br.toStringTag:void 0;function jt(t){var r=At.call(t,D),i=t[D];try{t[D]=void 0;var l=!0}catch(h){}var f=qt.call(t);return l&&(r?t[D]=i:delete t[D]),f}yr.exports=jt});var Pr=m((co,Cr)=>{var Ot=Object.prototype,Nt=Ot.toString;function Vt(t){return Nt.call(t)}Cr.exports=Vt});var Mr=m((fo,kr)=>{var Rr=L(),Dt=Tr(),zt=Pr(),It="[object Null]",Ut="[object Undefined]",Sr=Rr?Rr.toStringTag:void 0;function Lt(t){return t==null?t===void 0?Ut:It:Sr&&Sr in Object(t)?Dt(t):zt(t)}kr.exports=Lt});var qr=m((ho,Ar)=>{function _t(t){return t!=null&&typeof t=="object"}Ar.exports=_t});var Or=m((mo,jr)=>{var Et=Mr(),Ht=qr(),Gt="[object Symbol]";function Bt(t){return typeof t=="symbol"||Ht(t)&&Et(t)==Gt}jr.exports=Bt});var Ur=m((go,Ir)=>{var Nr=L(),Ft=xr(),Wt=wr(),Zt=Or(),Xt=1/0,Vr=Nr?Nr.prototype:void 0,Dr=Vr?Vr.toString:void 0;function zr(t){if(typeof t=="string")return t;if(Wt(t))return Ft(t,zr)+"";if(Zt(t))return Dr?Dr.call(t):"";var r=t+"";return r=="0"&&1/t==-Xt?"-0":r}Ir.exports=zr});var _=m((xo,Lr)=>{var Jt=Ur();function Yt(t){return t==null?"":Jt(t)}Lr.exports=Yt});var Er=m((po,_r)=>{var $t=lr(),Kt=_(),Qt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ri="\\u0300-\\u036f",ei="\\ufe20-\\ufe2f",ti="\\u20d0-\\u20ff",ii=ri+ei+ti,ni="["+ii+"]",oi=RegExp(ni,"g");function ui(t){return t=Kt(t),t&&t.replace(Qt,$t).replace(oi,"")}_r.exports=ui});var Gr=m((wo,Hr)=>{var ai=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function si(t){return t.match(ai)||[]}Hr.exports=si});var Fr=m((bo,Br)=>{var li=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ci(t){return li.test(t)}Br.exports=ci});var ce=m((vo,le)=>{var Wr="\\ud800-\\udfff",fi="\\u0300-\\u036f",di="\\ufe20-\\ufe2f",hi="\\u20d0-\\u20ff",mi=fi+di+hi,Zr="\\u2700-\\u27bf",Xr="a-z\\xdf-\\xf6\\xf8-\\xff",gi="\\xac\\xb1\\xd7\\xf7",xi="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",pi="\\u2000-\\u206f",wi=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Jr="A-Z\\xc0-\\xd6\\xd8-\\xde",bi="\\ufe0e\\ufe0f",Yr=gi+xi+pi+wi,$r="['\u2019]",Kr="["+Yr+"]",vi="["+mi+"]",Qr="\\d+",yi="["+Zr+"]",re="["+Xr+"]",ee="[^"+Wr+Yr+Qr+Zr+Xr+Jr+"]",Ti="\\ud83c[\\udffb-\\udfff]",Ci="(?:"+vi+"|"+Ti+")",Pi="[^"+Wr+"]",te="(?:\\ud83c[\\udde6-\\uddff]){2}",ie="[\\ud800-\\udbff][\\udc00-\\udfff]",j="["+Jr+"]",Ri="\\u200d",ne="(?:"+re+"|"+ee+")",Si="(?:"+j+"|"+ee+")",oe="(?:"+$r+"(?:d|ll|m|re|s|t|ve))?",ue="(?:"+$r+"(?:D|LL|M|RE|S|T|VE))?",ae=Ci+"?",se="["+bi+"]?",ki="(?:"+Ri+"(?:"+[Pi,te,ie].join("|")+")"+se+ae+")*",Mi="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ai="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",qi=se+ae+ki,ji="(?:"+[yi,te,ie].join("|")+")"+qi,Oi=RegExp([j+"?"+re+"+"+oe+"(?="+[Kr,j,"$"].join("|")+")",Si+"+"+ue+"(?="+[Kr,j+ne,"$"].join("|")+")",j+"?"+ne+"+"+oe,j+"+"+ue,Ai,Mi,Qr,ji].join("|"),"g");function Ni(t){return t.match(Oi)||[]}le.exports=Ni});var de=m((yo,fe)=>{var Vi=Gr(),Di=Fr(),zi=_(),Ii=ce();function Ui(t,r,i){return t=zi(t),r=i?void 0:r,r===void 0?Di(t)?Ii(t):Vi(t):t.match(r)||[]}fe.exports=Ui});var me=m((To,he)=>{var Li=or(),_i=Er(),Ei=de(),Hi="['\u2019]",Gi=RegExp(Hi,"g");function Bi(t){return function(r){return Li(Ei(_i(r).replace(Gi,"")),t,"")}}he.exports=Bi});var xe=m((Co,ge)=>{function Fi(t,r,i){var l=-1,f=t.length;r<0&&(r=-r>f?0:f+r),i=i>f?f:i,i<0&&(i+=f),f=r>i?0:i-r>>>0,r>>>=0;for(var h=Array(f);++l<f;)h[l]=t[l+r];return h}ge.exports=Fi});var we=m((Po,pe)=>{var Wi=xe();function Zi(t,r,i){var l=t.length;return i=i===void 0?l:i,!r&&i>=l?t:Wi(t,r,i)}pe.exports=Zi});var B=m((Ro,be)=>{var Xi="\\ud800-\\udfff",Ji="\\u0300-\\u036f",Yi="\\ufe20-\\ufe2f",$i="\\u20d0-\\u20ff",Ki=Ji+Yi+$i,Qi="\\ufe0e\\ufe0f",rn="\\u200d",en=RegExp("["+rn+Xi+Ki+Qi+"]");function tn(t){return en.test(t)}be.exports=tn});var ye=m((So,ve)=>{function nn(t){return t.split("")}ve.exports=nn});var Ae=m((ko,Me)=>{var Te="\\ud800-\\udfff",on="\\u0300-\\u036f",un="\\ufe20-\\ufe2f",an="\\u20d0-\\u20ff",sn=on+un+an,ln="\\ufe0e\\ufe0f",cn="["+Te+"]",F="["+sn+"]",W="\\ud83c[\\udffb-\\udfff]",fn="(?:"+F+"|"+W+")",Ce="[^"+Te+"]",Pe="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",dn="\\u200d",Se=fn+"?",ke="["+ln+"]?",hn="(?:"+dn+"(?:"+[Ce,Pe,Re].join("|")+")"+ke+Se+")*",mn=ke+Se+hn,gn="(?:"+[Ce+F+"?",F,Pe,Re,cn].join("|")+")",xn=RegExp(W+"(?="+W+")|"+gn+mn,"g");function pn(t){return t.match(xn)||[]}Me.exports=pn});var je=m((Mo,qe)=>{var wn=ye(),bn=B(),vn=Ae();function yn(t){return bn(t)?vn(t):wn(t)}qe.exports=yn});var Ne=m((Ao,Oe)=>{var Tn=we(),Cn=B(),Pn=je(),Rn=_();function Sn(t){return function(r){r=Rn(r);var i=Cn(r)?Pn(r):void 0,l=i?i[0]:r.charAt(0),f=i?Tn(i,1).join(""):r.slice(1);return l[t]()+f}}Oe.exports=Sn});var De=m((qo,Ve)=>{var kn=Ne(),Mn=kn("toUpperCase");Ve.exports=Mn});var Ie=m((jo,ze)=>{var An=me(),qn=De(),jn=An(function(t,r,i){return t+(i?" ":"")+qn(r)});ze.exports=jn});var Ge=m((He,X)=>{(function(t,r,i){function l(e){var n=this,a=s();n.next=function(){var o=2091639*n.s0+n.c*23283064365386963e-26;return n.s0=n.s1,n.s1=n.s2,n.s2=o-(n.c=o|0)},n.c=1,n.s0=a(" "),n.s1=a(" "),n.s2=a(" "),n.s0-=a(e),n.s0<0&&(n.s0+=1),n.s1-=a(e),n.s1<0&&(n.s1+=1),n.s2-=a(e),n.s2<0&&(n.s2+=1),a=null}function f(e,n){return n.c=e.c,n.s0=e.s0,n.s1=e.s1,n.s2=e.s2,n}function h(e,n){var a=new l(e),o=n&&n.state,u=a.next;return u.int32=function(){return a.next()*4294967296|0},u.double=function(){return u()+(u()*2097152|0)*11102230246251565e-32},u.quick=u,o&&(typeof o=="object"&&f(o,a),u.state=function(){return f(a,{})}),u}function s(){var e=4022871197,n=function(a){a=String(a);for(var o=0;o<a.length;o++){e+=a.charCodeAt(o);var u=.02519603282416938*e;e=u>>>0,u-=e,u*=e,e=u>>>0,u-=e,e+=u*4294967296}return(e>>>0)*23283064365386963e-26};return n}r&&r.exports?r.exports=h:i&&i.amd?i(function(){return h}):this.alea=h})(He,typeof X=="object"&&X,typeof define=="function"&&define)});var Fe=m((Be,J)=>{(function(t,r,i){function l(s){var e=this,n="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var o=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^o^o>>>8},s===(s|0)?e.x=s:n+=s;for(var a=0;a<n.length+64;a++)e.x^=n.charCodeAt(a)|0,e.next()}function f(s,e){return e.x=s.x,e.y=s.y,e.z=s.z,e.w=s.w,e}function h(s,e){var n=new l(s),a=e&&e.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var u=n.next()>>>11,c=(n.next()>>>0)/4294967296,d=(u+c)/(1<<21);while(d===0);return d},o.int32=n.next,o.quick=o,a&&(typeof a=="object"&&f(a,n),o.state=function(){return f(n,{})}),o}r&&r.exports?r.exports=h:i&&i.amd?i(function(){return h}):this.xor128=h})(Be,typeof J=="object"&&J,typeof define=="function"&&define)});var Ze=m((We,Y)=>{(function(t,r,i){function l(s){var e=this,n="";e.next=function(){var o=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^(o^o<<1))|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,s===(s|0)?e.x=s:n+=s;for(var a=0;a<n.length+64;a++)e.x^=n.charCodeAt(a)|0,a==n.length&&(e.d=e.x<<10^e.x>>>4),e.next()}function f(s,e){return e.x=s.x,e.y=s.y,e.z=s.z,e.w=s.w,e.v=s.v,e.d=s.d,e}function h(s,e){var n=new l(s),a=e&&e.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var u=n.next()>>>11,c=(n.next()>>>0)/4294967296,d=(u+c)/(1<<21);while(d===0);return d},o.int32=n.next,o.quick=o,a&&(typeof a=="object"&&f(a,n),o.state=function(){return f(n,{})}),o}r&&r.exports?r.exports=h:i&&i.amd?i(function(){return h}):this.xorwow=h})(We,typeof Y=="object"&&Y,typeof define=="function"&&define)});var Je=m((Xe,$)=>{(function(t,r,i){function l(s){var e=this;e.next=function(){var a=e.x,o=e.i,u,c,d;return u=a[o],u^=u>>>7,c=u^u<<24,u=a[o+1&7],c^=u^u>>>10,u=a[o+3&7],c^=u^u>>>3,u=a[o+4&7],c^=u^u<<7,u=a[o+7&7],u=u^u<<13,c^=u^u<<9,a[o]=c,e.i=o+1&7,c};function n(a,o){var u,c,d=[];if(o===(o|0))c=d[0]=o;else for(o=""+o,u=0;u<o.length;++u)d[u&7]=d[u&7]<<15^o.charCodeAt(u)+d[u+1&7]<<13;for(;d.length<8;)d.push(0);for(u=0;u<8&&d[u]===0;++u);for(u==8?c=d[7]=-1:c=d[u],a.x=d,a.i=0,u=256;u>0;--u)a.next()}n(e,s)}function f(s,e){return e.x=s.x.slice(),e.i=s.i,e}function h(s,e){s==null&&(s=+new Date);var n=new l(s),a=e&&e.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var u=n.next()>>>11,c=(n.next()>>>0)/4294967296,d=(u+c)/(1<<21);while(d===0);return d},o.int32=n.next,o.quick=o,a&&(a.x&&f(a,n),o.state=function(){return f(n,{})}),o}r&&r.exports?r.exports=h:i&&i.amd?i(function(){return h}):this.xorshift7=h})(Xe,typeof $=="object"&&$,typeof define=="function"&&define)});var $e=m((Ye,K)=>{(function(t,r,i){function l(s){var e=this;e.next=function(){var a=e.w,o=e.X,u=e.i,c,d;return e.w=a=a+1640531527|0,d=o[u+34&127],c=o[u=u+1&127],d^=d<<13,c^=c<<17,d^=d>>>15,c^=c>>>12,d=o[u]=d^c,e.i=u,d+(a^a>>>16)|0};function n(a,o){var u,c,d,v,M,P=[],O=128;for(o===(o|0)?(c=o,o=null):(o=o+"\0",c=0,O=Math.max(O,o.length)),d=0,v=-32;v<O;++v)o&&(c^=o.charCodeAt((v+32)%o.length)),v===0&&(M=c),c^=c<<10,c^=c>>>15,c^=c<<4,c^=c>>>13,v>=0&&(M=M+1640531527|0,u=P[v&127]^=c+M,d=u==0?d+1:0);for(d>=128&&(P[(o&&o.length||0)&127]=-1),d=127,v=4*128;v>0;--v)c=P[d+34&127],u=P[d=d+1&127],c^=c<<13,u^=u<<17,c^=c>>>15,u^=u>>>12,P[d]=c^u;a.w=M,a.X=P,a.i=d}n(e,s)}function f(s,e){return e.i=s.i,e.w=s.w,e.X=s.X.slice(),e}function h(s,e){s==null&&(s=+new Date);var n=new l(s),a=e&&e.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var u=n.next()>>>11,c=(n.next()>>>0)/4294967296,d=(u+c)/(1<<21);while(d===0);return d},o.int32=n.next,o.quick=o,a&&(a.X&&f(a,n),o.state=function(){return f(n,{})}),o}r&&r.exports?r.exports=h:i&&i.amd?i(function(){return h}):this.xor4096=h})(Ye,typeof K=="object"&&K,typeof define=="function"&&define)});var Qe=m((Ke,Q)=>{(function(t,r,i){function l(s){var e=this,n="";e.next=function(){var o=e.b,u=e.c,c=e.d,d=e.a;return o=o<<25^o>>>7^u,u=u-c|0,c=c<<24^c>>>8^d,d=d-o|0,e.b=o=o<<20^o>>>12^u,e.c=u=u-c|0,e.d=c<<16^u>>>16^d,e.a=d-o|0},e.a=0,e.b=0,e.c=2654435769|0,e.d=1367130551,s===Math.floor(s)?(e.a=s/4294967296|0,e.b=s|0):n+=s;for(var a=0;a<n.length+20;a++)e.b^=n.charCodeAt(a)|0,e.next()}function f(s,e){return e.a=s.a,e.b=s.b,e.c=s.c,e.d=s.d,e}function h(s,e){var n=new l(s),a=e&&e.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var u=n.next()>>>11,c=(n.next()>>>0)/4294967296,d=(u+c)/(1<<21);while(d===0);return d},o.int32=n.next,o.quick=o,a&&(typeof a=="object"&&f(a,n),o.state=function(){return f(n,{})}),o}r&&r.exports?r.exports=h:i&&i.amd?i(function(){return h}):this.tychei=h})(Ke,typeof Q=="object"&&Q,typeof define=="function"&&define)});var rt=m(()=>{});var tt=m((et,H)=>{(function(t,r,i){var l=256,f=6,h=52,s="random",e=i.pow(l,f),n=i.pow(2,h),a=n*2,o=l-1,u;function c(g,x,b){var w=[];x=x==!0?{entropy:!0}:x||{};var p=P(M(x.entropy?[g,N(r)]:g??O(),3),w),y=new d(w),C=function(){for(var T=y.g(f),S=e,R=0;T<n;)T=(T+R)*l,S*=l,R=y.g(1);for(;T>=a;)T/=2,S/=2,R>>>=1;return(T+R)/S};return C.int32=function(){return y.g(4)|0},C.quick=function(){return y.g(4)/4294967296},C.double=C,P(N(y.S),r),(x.pass||b||function(T,S,R,A){return A&&(A.S&&v(A,y),T.state=function(){return v(y,{})}),R?(i[s]=T,S):T})(C,p,"global"in x?x.global:this==i,x.state)}function d(g){var x,b=g.length,w=this,p=0,y=w.i=w.j=0,C=w.S=[];for(b||(g=[b++]);p<l;)C[p]=p++;for(p=0;p<l;p++)C[p]=C[y=o&y+g[p%b]+(x=C[p])],C[y]=x;(w.g=function(T){for(var S,R=0,A=w.i,z=w.j,V=w.S;T--;)S=V[A=o&A+1],R=R*l+V[o&(V[A]=V[z=o&z+S])+(V[z]=S)];return w.i=A,w.j=z,R})(l)}function v(g,x){return x.i=g.i,x.j=g.j,x.S=g.S.slice(),x}function M(g,x){var b=[],w=typeof g,p;if(x&&w=="object")for(p in g)try{b.push(M(g[p],x-1))}catch(y){}return b.length?b:w=="string"?g:g+"\0"}function P(g,x){for(var b=g+"",w,p=0;p<b.length;)x[o&p]=o&(w^=x[o&p]*19)+b.charCodeAt(p++);return N(x)}function O(){try{var g;return u&&(g=u.randomBytes)?g=g(l):(g=new Uint8Array(l),(t.crypto||t.msCrypto).getRandomValues(g)),N(g)}catch(w){var x=t.navigator,b=x&&x.plugins;return[+new Date,t,b,t.screen,N(r)]}}function N(g){return String.fromCharCode.apply(0,g)}if(P(i.random(),r),typeof H=="object"&&H.exports){H.exports=c;try{u=rt()}catch(g){}}else typeof define=="function"&&define.amd?define(function(){return c}):i["seed"+s]=c})(typeof self!="undefined"?self:et,[],Math)});var nt=m((Io,it)=>{var Xn=Ge(),Jn=Fe(),Yn=Ze(),$n=Je(),Kn=$e(),Qn=Qe(),q=tt();q.alea=Xn;q.xor128=Jn;q.xorwow=Yn;q.xorshift7=$n;q.xor4096=Kn;q.tychei=Qn;it.exports=q});var Le=ir(Ie());var On=`
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
    `,Nn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,Vn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,Ue=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,Dn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,zn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,In=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Un=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Ln=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,_n=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,En=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,Hn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,Gn={Glide:On,"Machine Learning":En,General:Ue,Array:Dn,Number:Vn,Encoding:Hn,Text:_n,"Data & APIs":Ln,Image:zn,Fun:In,"Date & Time":Un,Code:Nn};function Z({icon:t,category:r}){var i;return(i=t!=null?t:Gn[r])!=null?i:Ue}function _e(t){return t instanceof Date?t.toISOString():Array.isArray(t)?t.map(_e):t}function Bn(t,r){return G(this,null,function*(){var e;let{data:{key:i,params:l}}=t,f,h;try{f=yield r(...l)}catch(n){f=void 0;try{h=n.toString()}catch(a){h="Exception can't be stringified."}}let s={key:i};f!==void 0&&(f=_e(f),s.result={type:"string",value:f}),h!==void 0&&(s.error=h),((e=t.source)==null?void 0:e.postMessage).call(e,s,"*")})}function Fn(t){return typeof window!="undefined"&&window.addEventListener("message",r=>Bn(r,t.run)),U(k({},t),{json:JSON.stringify(Wn(t),null,2)})}function Wn(t){let{name:r,category:i,released:l,description:f,author:h,result:s,params:e,about:n,video:a}=t,o=Z(t);return{name:r,category:i,released:l,description:f,author:h,result:s,about:n,icon:o,video:a,params:Object.entries(e).map(([u,c])=>k({name:u},c))}}var Zn={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:void 0,tests:[],run(){return G(this,null,function*(){})}},E=class{constructor(r={},i=[]){this.definition=k(k({},Zn),r),this.requiredParams=[...i]}with(r,i=[]){return new E(k(k({},this.definition),r),[...this.requiredParams,...i])}withName(r){return this.with({name:r})}withCategory(r){let{icon:i}=this.definition;return this.with({category:r,icon:Z({icon:i,category:r})})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,i){return this.with({author:`${r} <${i}>`})}withTest(r,i){let{tests:l=[]}=this.definition;return this.with({tests:[...l,{params:r,expectedResult:i}]})}withFailingTest(r,i){let{tests:l=[]}=this.definition;return this.with({tests:[...l,{params:r,expectedResult:i,allowFailure:!0}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,i,l){return l===void 0&&(l=(0,Le.default)(i)),this.with({params:U(k({},this.definition.params),{[i]:{type:r,displayName:l}})})}withRequiredParam(r,i,l){return this.withParam(r,i,l).with({},[i])}withPrimitiveParam(r,i){return this.withParam("primitive",r,i)}withBooleanParam(r,i){return this.withParam("boolean",r,i)}withStringParam(r,i){return this.withParam("string",r,i)}withDateParam(r,i){return this.withParam("date-time",r,i)}withNumberParam(r,i){return this.withParam("number",r,i)}withRequiredPrimitiveParam(r,i){return this.withRequiredParam("primitive",r,i)}withRequiredBooleanParam(r,i){return this.withRequiredParam("boolean",r,i)}withRequiredStringParam(r,i){return this.withRequiredParam("string",r,i)}withRequiredDateParam(r,i){return this.withRequiredParam("date-time",r,i)}withRequiredNumberParam(r,i){return this.withRequiredParam("number",r,i)}withStringArrayParam(r,i){return this.withParam({kind:"array",items:"string"},r,i)}withRequiredStringArrayParam(r,i){return this.withRequiredParam({kind:"array",items:"string"},r,i)}withNumberArrayParam(r,i){return this.withParam({kind:"array",items:"number"},r,i)}withPrimitiveArrayParam(r,i){return this.withParam({kind:"array",items:"primitive"},r,i)}withRequiredPrimitiveArrayParam(r,i){return this.withRequiredParam({kind:"array",items:"primitive"},r,i)}withExample(r){return this.with({example:r})}run(r){let{params:i}=this.definition,l=this.requiredParams,f=Object.keys(i);function h(...s){let e={};if(s.forEach(({value:n},a)=>{e[f[a]]=n}),!l.some(n=>e[n]===void 0))return r(e)}return Fn(U(k({},this.definition),{run:h}))}};function Ee(t){return new E({name:t})}var ot=ir(nt());function ut(t,r){if(r===0)return;if(r<0)return-ut(t,-r);let i=(0,ot.default)(t)();return Math.floor(r*i)+1}var Lo=Ee("Roll Dice").withCategory("Number").withReleased("direct").withDescription("Roll dice of various sizes.").withRequiredPrimitiveParam("seed","Roll Seed").withNumberParam("sides","Sides (default is 6)").withNumberResult().withTest({seed:"I'm feeling lucky!"},1).withTest({seed:"I'm feeling lucky!",sides:6},1).withTest({seed:"I'm feeling lucky!",sides:-6},-1).withTest({seed:"I'm feeling lucky!",sides:0},void 0).run(({seed:t,sides:r=6})=>ut(t,r));})();
//# sourceMappingURL=index.js.map

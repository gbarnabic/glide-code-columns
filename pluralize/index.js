(()=>{var zr=Object.create;var O=Object.defineProperty,Ur=Object.defineProperties,_r=Object.getOwnPropertyDescriptor,Ir=Object.getOwnPropertyDescriptors,Er=Object.getOwnPropertyNames,D=Object.getOwnPropertySymbols,kr=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty,Dr=Object.prototype.propertyIsEnumerable;var W=(e,r,n)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,S=(e,r)=>{for(var n in r||(r={}))F.call(r,n)&&W(e,n,r[n]);if(D)for(var n of D(r))Dr.call(r,n)&&W(e,n,r[n]);return e},M=(e,r)=>Ur(e,Ir(r)),Fr=e=>O(e,"__esModule",{value:!0});var c=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Wr=(e,r,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of Er(r))!F.call(e,o)&&o!=="default"&&O(e,o,{get:()=>r[o],enumerable:!(n=_r(r,o))||n.enumerable});return e},Z=e=>Wr(Fr(O(e!=null?zr(kr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var U=(e,r,n)=>new Promise((o,s)=>{var g=t=>{try{i(n.next(t))}catch(a){s(a)}},f=t=>{try{i(n.throw(t))}catch(a){s(a)}},i=t=>t.done?o(t.value):Promise.resolve(t.value).then(g,f);i((n=n.apply(e,r)).next())});var G=c((da,H)=>{function Zr(e,r,n,o){var s=-1,g=e==null?0:e.length;for(o&&g&&(n=e[++s]);++s<g;)n=r(n,e[s],s,e);return n}H.exports=Zr});var B=c((ca,V)=>{function Hr(e){return function(r){return e==null?void 0:e[r]}}V.exports=Hr});var K=c((ma,J)=>{var Gr=B(),Vr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Br=Gr(Vr);J.exports=Br});var Y=c((ga,$)=>{var Jr=typeof global=="object"&&global&&global.Object===Object&&global;$.exports=Jr});var X=c((pa,Q)=>{var Kr=Y(),$r=typeof self=="object"&&self&&self.Object===Object&&self,Yr=Kr||$r||Function("return this")();Q.exports=Yr});var q=c((ha,ee)=>{var Qr=X(),Xr=Qr.Symbol;ee.exports=Xr});var te=c((ba,re)=>{function et(e,r){for(var n=-1,o=e==null?0:e.length,s=Array(o);++n<o;)s[n]=r(e[n],n,e);return s}re.exports=et});var ae=c((xa,ne)=>{var rt=Array.isArray;ne.exports=rt});var se=c((va,oe)=>{var ue=q(),ie=Object.prototype,tt=ie.hasOwnProperty,nt=ie.toString,R=ue?ue.toStringTag:void 0;function at(e){var r=tt.call(e,R),n=e[R];try{e[R]=void 0;var o=!0}catch(g){}var s=nt.call(e);return o&&(r?e[R]=n:delete e[R]),s}oe.exports=at});var le=c((ya,fe)=>{var ut=Object.prototype,it=ut.toString;function ot(e){return it.call(e)}fe.exports=ot});var ge=c((Ta,me)=>{var de=q(),st=se(),ft=le(),lt="[object Null]",dt="[object Undefined]",ce=de?de.toStringTag:void 0;function ct(e){return e==null?e===void 0?dt:lt:ce&&ce in Object(e)?st(e):ft(e)}me.exports=ct});var he=c((Ca,pe)=>{function mt(e){return e!=null&&typeof e=="object"}pe.exports=mt});var xe=c((wa,be)=>{var gt=ge(),pt=he(),ht="[object Symbol]";function bt(e){return typeof e=="symbol"||pt(e)&&gt(e)==ht}be.exports=bt});var Se=c((Sa,we)=>{var ve=q(),xt=te(),vt=ae(),yt=xe(),Tt=1/0,ye=ve?ve.prototype:void 0,Te=ye?ye.toString:void 0;function Ce(e){if(typeof e=="string")return e;if(vt(e))return xt(e,Ce)+"";if(yt(e))return Te?Te.call(e):"";var r=e+"";return r=="0"&&1/e==-Tt?"-0":r}we.exports=Ce});var N=c((Pa,Pe)=>{var Ct=Se();function wt(e){return e==null?"":Ct(e)}Pe.exports=wt});var Ae=c((Ra,Re)=>{var St=K(),Pt=N(),Rt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,At="\\u0300-\\u036f",Ot="\\ufe20-\\ufe2f",Mt="\\u20d0-\\u20ff",qt=At+Ot+Mt,Nt="["+qt+"]",Lt=RegExp(Nt,"g");function jt(e){return e=Pt(e),e&&e.replace(Rt,St).replace(Lt,"")}Re.exports=jt});var Me=c((Aa,Oe)=>{var zt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Ut(e){return e.match(zt)||[]}Oe.exports=Ut});var Ne=c((Oa,qe)=>{var _t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function It(e){return _t.test(e)}qe.exports=It});var $e=c((Ma,Ke)=>{var Le="\\ud800-\\udfff",Et="\\u0300-\\u036f",kt="\\ufe20-\\ufe2f",Dt="\\u20d0-\\u20ff",Ft=Et+kt+Dt,je="\\u2700-\\u27bf",ze="a-z\\xdf-\\xf6\\xf8-\\xff",Wt="\\xac\\xb1\\xd7\\xf7",Zt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ht="\\u2000-\\u206f",Gt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ue="A-Z\\xc0-\\xd6\\xd8-\\xde",Vt="\\ufe0e\\ufe0f",_e=Wt+Zt+Ht+Gt,Ie="['\u2019]",Ee="["+_e+"]",Bt="["+Ft+"]",ke="\\d+",Jt="["+je+"]",De="["+ze+"]",Fe="[^"+Le+_e+ke+je+ze+Ue+"]",Kt="\\ud83c[\\udffb-\\udfff]",$t="(?:"+Bt+"|"+Kt+")",Yt="[^"+Le+"]",We="(?:\\ud83c[\\udde6-\\uddff]){2}",Ze="[\\ud800-\\udbff][\\udc00-\\udfff]",P="["+Ue+"]",Qt="\\u200d",He="(?:"+De+"|"+Fe+")",Xt="(?:"+P+"|"+Fe+")",Ge="(?:"+Ie+"(?:d|ll|m|re|s|t|ve))?",Ve="(?:"+Ie+"(?:D|LL|M|RE|S|T|VE))?",Be=$t+"?",Je="["+Vt+"]?",en="(?:"+Qt+"(?:"+[Yt,We,Ze].join("|")+")"+Je+Be+")*",rn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",tn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",nn=Je+Be+en,an="(?:"+[Jt,We,Ze].join("|")+")"+nn,un=RegExp([P+"?"+De+"+"+Ge+"(?="+[Ee,P,"$"].join("|")+")",Xt+"+"+Ve+"(?="+[Ee,P+He,"$"].join("|")+")",P+"?"+He+"+"+Ge,P+"+"+Ve,tn,rn,ke,an].join("|"),"g");function on(e){return e.match(un)||[]}Ke.exports=on});var Qe=c((qa,Ye)=>{var sn=Me(),fn=Ne(),ln=N(),dn=$e();function cn(e,r,n){return e=ln(e),r=n?void 0:r,r===void 0?fn(e)?dn(e):sn(e):e.match(r)||[]}Ye.exports=cn});var er=c((Na,Xe)=>{var mn=G(),gn=Ae(),pn=Qe(),hn="['\u2019]",bn=RegExp(hn,"g");function xn(e){return function(r){return mn(pn(gn(r).replace(bn,"")),e,"")}}Xe.exports=xn});var tr=c((La,rr)=>{function vn(e,r,n){var o=-1,s=e.length;r<0&&(r=-r>s?0:s+r),n=n>s?s:n,n<0&&(n+=s),s=r>n?0:n-r>>>0,r>>>=0;for(var g=Array(s);++o<s;)g[o]=e[o+r];return g}rr.exports=vn});var ar=c((ja,nr)=>{var yn=tr();function Tn(e,r,n){var o=e.length;return n=n===void 0?o:n,!r&&n>=o?e:yn(e,r,n)}nr.exports=Tn});var _=c((za,ur)=>{var Cn="\\ud800-\\udfff",wn="\\u0300-\\u036f",Sn="\\ufe20-\\ufe2f",Pn="\\u20d0-\\u20ff",Rn=wn+Sn+Pn,An="\\ufe0e\\ufe0f",On="\\u200d",Mn=RegExp("["+On+Cn+Rn+An+"]");function qn(e){return Mn.test(e)}ur.exports=qn});var or=c((Ua,ir)=>{function Nn(e){return e.split("")}ir.exports=Nn});var pr=c((_a,gr)=>{var sr="\\ud800-\\udfff",Ln="\\u0300-\\u036f",jn="\\ufe20-\\ufe2f",zn="\\u20d0-\\u20ff",Un=Ln+jn+zn,_n="\\ufe0e\\ufe0f",In="["+sr+"]",I="["+Un+"]",E="\\ud83c[\\udffb-\\udfff]",En="(?:"+I+"|"+E+")",fr="[^"+sr+"]",lr="(?:\\ud83c[\\udde6-\\uddff]){2}",dr="[\\ud800-\\udbff][\\udc00-\\udfff]",kn="\\u200d",cr=En+"?",mr="["+_n+"]?",Dn="(?:"+kn+"(?:"+[fr,lr,dr].join("|")+")"+mr+cr+")*",Fn=mr+cr+Dn,Wn="(?:"+[fr+I+"?",I,lr,dr,In].join("|")+")",Zn=RegExp(E+"(?="+E+")|"+Wn+Fn,"g");function Hn(e){return e.match(Zn)||[]}gr.exports=Hn});var br=c((Ia,hr)=>{var Gn=or(),Vn=_(),Bn=pr();function Jn(e){return Vn(e)?Bn(e):Gn(e)}hr.exports=Jn});var vr=c((Ea,xr)=>{var Kn=ar(),$n=_(),Yn=br(),Qn=N();function Xn(e){return function(r){r=Qn(r);var n=$n(r)?Yn(r):void 0,o=n?n[0]:r.charAt(0),s=n?Kn(n,1).join(""):r.slice(1);return o[e]()+s}}xr.exports=Xn});var Tr=c((ka,yr)=>{var ea=vr(),ra=ea("toUpperCase");yr.exports=ra});var wr=c((Da,Cr)=>{var ta=er(),na=Tr(),aa=ta(function(e,r,n){return e+(n?" ":"")+na(r)});Cr.exports=aa});var qr=c((j,Mr)=>{"use strict";var Or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol?"symbol":typeof e};(function(e,r){(typeof j=="undefined"?"undefined":Or(j))==="object"?Mr.exports=r():typeof define=="function"&&define.amd?define([],function(){return e.Humanize=r()}):e.Humanize=r()})(j,function(){var e=[{name:"second",value:1e3},{name:"minute",value:6e4},{name:"hour",value:36e5},{name:"day",value:864e5},{name:"week",value:6048e5}],r={P:Math.pow(2,50),T:Math.pow(2,40),G:Math.pow(2,30),M:Math.pow(2,20)},n=function(t){return typeof t!="undefined"&&t!==null},o=function(t){return t!==t},s=function(t){return isFinite(t)&&!o(parseFloat(t))},g=function(t){var a=Object.prototype.toString.call(t);return a==="[object Array]"},f={intword:function(t,a){var u=arguments.length<=2||arguments[2]===void 0?2:arguments[2];return f.compactInteger(t,u)},compactInteger:function(t){var a=arguments.length<=1||arguments[1]===void 0?0:arguments[1];a=Math.max(a,0);var u=parseInt(t,10),l=u<0?"-":"",d=Math.abs(u),m=String(d),y=m.length,b=[13,10,7,4],T=["T","B","M","k"];if(d<1e3)return""+l+m;if(y>b[0]+3)return u.toExponential(a).replace("e+","x10^");for(var x=void 0,v=0;v<b.length;v++){var C=b[v];if(y>=C){x=C;break}}var h=y-x+1,p=m.split(""),w=p.slice(0,h),Lr=p.slice(h,h+a+1),k=w.join(""),A=Lr.join("");A.length<a&&(A+=""+Array(a-A.length+1).join("0"));var z=void 0;if(a===0)z=""+l+k+T[b.indexOf(x)];else{var jr=Number(k+"."+A).toFixed(a);z=""+l+jr+T[b.indexOf(x)]}return z},intComma:function(t){var a=arguments.length<=1||arguments[1]===void 0?0:arguments[1];return f.formatNumber(t,a)},intcomma:function(){return f.intComma.apply(f,arguments)},fileSize:function(t){var a=arguments.length<=1||arguments[1]===void 0?2:arguments[1];for(var u in r)if(r.hasOwnProperty(u)){var l=r[u];if(t>=l)return f.formatNumber(t/l,a,"")+" "+u+"B"}return t>=1024?f.formatNumber(t/1024,0)+" KB":f.formatNumber(t,0)+f.pluralize(t," byte")},filesize:function(){return f.fileSize.apply(f,arguments)},formatNumber:function(t){var a=arguments.length<=1||arguments[1]===void 0?0:arguments[1],u=arguments.length<=2||arguments[2]===void 0?",":arguments[2],l=arguments.length<=3||arguments[3]===void 0?".":arguments[3],d=function(h,p,w){return w?h.substr(0,w)+p:""},m=function(h,p,w){return h.substr(w).replace(/(\d{3})(?=\d)/g,"$1"+p)},y=function(h,p,w){return w?p+f.toFixed(Math.abs(h),w).split(".")[1]:""},b=f.normalizePrecision(a),T=t<0&&"-"||"",x=String(parseInt(f.toFixed(Math.abs(t||0),b),10)),v=x.length>3?x.length%3:0;return T+d(x,u,v)+m(x,u,v)+y(t,l,b)},toFixed:function(t,a){a=n(a)?a:f.normalizePrecision(a,0);var u=Math.pow(10,a);return(Math.round(t*u)/u).toFixed(a)},normalizePrecision:function(t,a){return t=Math.round(Math.abs(t)),o(t)?a:t},ordinal:function(t){var a=parseInt(t,10);if(a===0)return t;var u=a%100;if([11,12,13].indexOf(u)>=0)return a+"th";var l=a%10,d=void 0;switch(l){case 1:d="st";break;case 2:d="nd";break;case 3:d="rd";break;default:d="th"}return""+a+d},times:function(t){var a=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];if(s(t)&&t>=0){var u=parseFloat(t),l=["never","once","twice"];if(n(a[u]))return String(a[u]);var d=n(l[u])&&l[u].toString();return d||u.toString()+" times"}return null},pluralize:function(t,a,u){return n(t)&&n(a)?(u=n(u)?u:a+"s",parseInt(t,10)===1?a:u):null},truncate:function(t){var a=arguments.length<=1||arguments[1]===void 0?100:arguments[1],u=arguments.length<=2||arguments[2]===void 0?"...":arguments[2];return t.length>a?t.substring(0,a-u.length)+u:t},truncateWords:function(t,a){for(var u=t.split(" "),l="",d=0;d<a;)n(u[d])&&(l+=u[d]+" "),d++;return u.length>a?l+"...":null},truncatewords:function(){return f.truncateWords.apply(f,arguments)},boundedNumber:function(t){var a=arguments.length<=1||arguments[1]===void 0?100:arguments[1],u=arguments.length<=2||arguments[2]===void 0?"+":arguments[2],l=void 0;return s(t)&&s(a)&&t>a&&(l=a+u),(l||t).toString()},truncatenumber:function(){return f.boundedNumber.apply(f,arguments)},oxford:function(t,a,u){var l=t.length,d=void 0;if(l<2)return String(t);if(l===2)return t.join(" and ");if(n(a)&&l>a){var m=l-a;d=a,u=n(u)?u:", and "+m+" "+f.pluralize(m,"other")}else d=-1,u=", and "+t[l-1];return t.slice(0,d).join(", ")+u},dictionary:function(t){var a=arguments.length<=1||arguments[1]===void 0?" is ":arguments[1],u=arguments.length<=2||arguments[2]===void 0?", ":arguments[2],l="";if(n(t)&&(typeof t=="undefined"?"undefined":Or(t))==="object"&&!g(t)){var d=[];for(var m in t)if(t.hasOwnProperty(m)){var y=t[m];d.push(""+m+a+y)}return d.join(u)}return l},frequency:function(t,a){if(!g(t))return null;var u=t.length,l=f.times(u);return u===0?l+" "+a:a+" "+l},pace:function(t,a){var u=arguments.length<=2||arguments[2]===void 0?"time":arguments[2];if(t===0||a===0)return"No "+f.pluralize(0,u);for(var l="Approximately",d=void 0,m=void 0,y=t/a,b=0;b<e.length;++b){var T=e[b];if(m=y*T.value,m>1){d=T.name;break}}d||(l="Less than",m=1,d=e[e.length-1].name);var x=Math.round(m);return u=f.pluralize(x,u),l+" "+x+" "+u+" per "+d},nl2br:function(t){var a=arguments.length<=1||arguments[1]===void 0?"<br/>":arguments[1];return t.replace(/\n/g,a)},br2nl:function(t){var a=arguments.length<=1||arguments[1]===void 0?`\r
`:arguments[1];return t.replace(/\<br\s*\/?\>/g,a)},capitalize:function(t){var a=arguments.length<=1||arguments[1]===void 0?!1:arguments[1];return""+t.charAt(0).toUpperCase()+(a?t.slice(1).toLowerCase():t.slice(1))},capitalizeAll:function(t){return t.replace(/(?:^|\s)\S/g,function(a){return a.toUpperCase()})},titleCase:function(t){var a=/\b(a|an|and|at|but|by|de|en|for|if|in|of|on|or|the|to|via|vs?\.?)\b/i,u=/\S+[A-Z]+\S*/,l=/\s+/,d=/-/,m=void 0;return m=function(b){for(var T=arguments.length<=1||arguments[1]===void 0?!1:arguments[1],x=arguments.length<=2||arguments[2]===void 0?!0:arguments[2],v=[],C=b.split(T?d:l),h=0;h<C.length;++h){var p=C[h];if(p.indexOf("-")!==-1){v.push(m(p,!0,h===0||h===C.length-1));continue}if(x&&(h===0||h===C.length-1)){v.push(u.test(p)?p:f.capitalize(p));continue}u.test(p)?v.push(p):a.test(p)?v.push(p.toLowerCase()):v.push(f.capitalize(p))}return v.join(T?"-":" ")},m(t)},titlecase:function(){return f.titleCase.apply(f,arguments)}};return f})});var Sr=Z(wr());function Pr(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(Pr):e}function ua(e,r){return U(this,null,function*(){var i;let{data:{key:n,params:o}}=e,s,g;try{s=yield r(...o)}catch(t){s=void 0;try{g=t.toString()}catch(a){g="Exception can't be stringified."}}let f={key:n};s!==void 0&&(s=Pr(s),f.result={type:"string",value:s}),g!==void 0&&(f.error=g),((i=e.source)==null?void 0:i.postMessage).call(i,f,"*")})}function ia(e){return typeof window!="undefined"&&window.addEventListener("message",r=>ua(r,e.run)),M(S({},e),{json:JSON.stringify(sa(e),null,2)})}var oa=`
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
    `,Rr=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function sa(e){let{name:r,category:n,description:o,author:s,result:g,params:f,about:i,video:t}=e,{icon:a=Rr}=e;return a==="glide"&&(a=oa),{name:r,category:n,description:o,author:s,result:g,about:i,icon:a,video:t,params:Object.entries(f).map(([u,l])=>S({name:u},l))}}var fa={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:Rr,about:void 0,video:void 0,tests:[],run(){return U(this,null,function*(){})}},L=class{constructor(r={},n=[]){this.definition=S(S({},fa),r),this.requiredParams=[...n]}with(r,n=[]){return new L(S(S({},this.definition),r),[...this.requiredParams,...n])}withName(r){return this.with({name:r})}withCategory(r){return this.with({category:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withAuthor(r,n){return this.with({author:`${r} <${n}>`})}withTest(r,n){let{tests:o=[],example:s=r}=this.definition;return this.with({example:s,tests:[...o,{params:r,expectedResult:n}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(r,n,o){return o===void 0&&(o=(0,Sr.default)(n)),this.with({params:M(S({},this.definition.params),{[n]:{type:r,displayName:o}})})}withRequiredParam(r,n,o){return this.withParam(r,n,o).with({},[n])}withStringParam(r,n){return this.withParam("string",r,n)}withDateParam(r,n){return this.withParam("date-time",r,n)}withNumberParam(r,n){return this.withParam("number",r,n)}withRequiredStringParam(r,n){return this.withRequiredParam("string",r,n)}withRequiredDateParam(r,n){return this.withRequiredParam("date-time",r,n)}withRequiredNumberParam(r,n){return this.withRequiredParam("number",r,n)}withExample(r){return this.with({example:r})}run(r){let{params:n}=this.definition,o=this.requiredParams,s=Object.keys(n);function g(...f){let i={};if(f.forEach(({value:t},a)=>{i[s[a]]=t}),!o.some(t=>i[t]===void 0))return r(i)}return ia(M(S({},this.definition),{run:g}))}};function Ar(e){return new L({name:e})}var Nr=Z(qr()),Za=Ar("Pluralize Text").withCategory("Text").withDescription("Returns the plural version of a given word if the value is not 1. The default suffix is 's'.").withAuthor("HubSpot","https://github.com/HubSpot/humanize").withStringResult().withRequiredNumberParam("number").withStringParam("singular").withStringParam("plural").withExample({number:3,singular:"duck",plural:"duckies"}).run(({number:e,singular:r,plural:n})=>Nr.default.pluralize(e,r,n));})();
//# sourceMappingURL=index.js.map

(()=>{var Ir=Object.create;var A=Object.defineProperty,Lr=Object.defineProperties,Vr=Object.getOwnPropertyDescriptor,Ur=Object.getOwnPropertyDescriptors,Fr=Object.getOwnPropertyNames,_=Object.getOwnPropertySymbols,Hr=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty,_r=Object.prototype.propertyIsEnumerable;var E=(e,r,t)=>r in e?A(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,P=(e,r)=>{for(var t in r||(r={}))D.call(r,t)&&E(e,t,r[t]);if(_)for(var t of _(r))_r.call(r,t)&&E(e,t,r[t]);return e},k=(e,r)=>Lr(e,Ur(r)),Dr=e=>A(e,"__esModule",{value:!0});var f=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Er=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of Fr(r))!D.call(e,s)&&s!=="default"&&A(e,s,{get:()=>r[s],enumerable:!(t=Vr(r,s))||t.enumerable});return e},W=e=>Er(Dr(A(e!=null?Ir(Hr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var I=(e,r,t)=>new Promise((s,o)=>{var g=n=>{try{u(t.next(n))}catch(i){o(i)}},l=n=>{try{u(t.throw(n))}catch(i){o(i)}},u=n=>n.done?s(n.value):Promise.resolve(n.value).then(g,l);u((t=t.apply(e,r)).next())});var G=f((Ci,B)=>{function Wr(e,r,t,s){var o=-1,g=e==null?0:e.length;for(s&&g&&(t=e[++o]);++o<g;)t=r(t,e[o],o,e);return t}B.exports=Wr});var J=f((Pi,Z)=>{function Br(e){return function(r){return e==null?void 0:e[r]}}Z.exports=Br});var $=f((Ri,K)=>{var Gr=J(),Zr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Jr=Gr(Zr);K.exports=Jr});var Q=f((Si,Y)=>{var Kr=typeof global=="object"&&global&&global.Object===Object&&global;Y.exports=Kr});var ee=f((Mi,X)=>{var $r=Q(),Yr=typeof self=="object"&&self&&self.Object===Object&&self,Qr=$r||Yr||Function("return this")();X.exports=Qr});var O=f((Ai,re)=>{var Xr=ee(),et=Xr.Symbol;re.exports=et});var ne=f((ki,te)=>{function rt(e,r){for(var t=-1,s=e==null?0:e.length,o=Array(s);++t<s;)o[t]=r(e[t],t,e);return o}te.exports=rt});var ae=f((Oi,ie)=>{var tt=Array.isArray;ie.exports=tt});var le=f((qi,oe)=>{var ue=O(),se=Object.prototype,nt=se.hasOwnProperty,it=se.toString,S=ue?ue.toStringTag:void 0;function at(e){var r=nt.call(e,S),t=e[S];try{e[S]=void 0;var s=!0}catch(g){}var o=it.call(e);return s&&(r?e[S]=t:delete e[S]),o}oe.exports=at});var me=f((Ni,de)=>{var ut=Object.prototype,st=ut.toString;function ot(e){return st.call(e)}de.exports=ot});var he=f((ji,ge)=>{var fe=O(),lt=le(),dt=me(),mt="[object Null]",ft="[object Undefined]",ce=fe?fe.toStringTag:void 0;function ct(e){return e==null?e===void 0?ft:mt:ce&&ce in Object(e)?lt(e):dt(e)}ge.exports=ct});var ve=f((zi,pe)=>{function gt(e){return e!=null&&typeof e=="object"}pe.exports=gt});var xe=f((Ii,be)=>{var ht=he(),pt=ve(),vt="[object Symbol]";function bt(e){return typeof e=="symbol"||pt(e)&&ht(e)==vt}be.exports=bt});var Re=f((Li,Pe)=>{var we=O(),xt=ne(),wt=ae(),yt=xe(),Tt=1/0,ye=we?we.prototype:void 0,Te=ye?ye.toString:void 0;function Ce(e){if(typeof e=="string")return e;if(wt(e))return xt(e,Ce)+"";if(yt(e))return Te?Te.call(e):"";var r=e+"";return r=="0"&&1/e==-Tt?"-0":r}Pe.exports=Ce});var q=f((Vi,Se)=>{var Ct=Re();function Pt(e){return e==null?"":Ct(e)}Se.exports=Pt});var Ae=f((Ui,Me)=>{var Rt=$(),St=q(),Mt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,At="\\u0300-\\u036f",kt="\\ufe20-\\ufe2f",Ot="\\u20d0-\\u20ff",qt=At+kt+Ot,Nt="["+qt+"]",jt=RegExp(Nt,"g");function zt(e){return e=St(e),e&&e.replace(Mt,Rt).replace(jt,"")}Me.exports=zt});var Oe=f((Fi,ke)=>{var It=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Lt(e){return e.match(It)||[]}ke.exports=Lt});var Ne=f((Hi,qe)=>{var Vt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Ut(e){return Vt.test(e)}qe.exports=Ut});var Ye=f((_i,$e)=>{var je="\\ud800-\\udfff",Ft="\\u0300-\\u036f",Ht="\\ufe20-\\ufe2f",_t="\\u20d0-\\u20ff",Dt=Ft+Ht+_t,ze="\\u2700-\\u27bf",Ie="a-z\\xdf-\\xf6\\xf8-\\xff",Et="\\xac\\xb1\\xd7\\xf7",Wt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Bt="\\u2000-\\u206f",Gt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Le="A-Z\\xc0-\\xd6\\xd8-\\xde",Zt="\\ufe0e\\ufe0f",Ve=Et+Wt+Bt+Gt,Ue="['\u2019]",Fe="["+Ve+"]",Jt="["+Dt+"]",He="\\d+",Kt="["+ze+"]",_e="["+Ie+"]",De="[^"+je+Ve+He+ze+Ie+Le+"]",$t="\\ud83c[\\udffb-\\udfff]",Yt="(?:"+Jt+"|"+$t+")",Qt="[^"+je+"]",Ee="(?:\\ud83c[\\udde6-\\uddff]){2}",We="[\\ud800-\\udbff][\\udc00-\\udfff]",R="["+Le+"]",Xt="\\u200d",Be="(?:"+_e+"|"+De+")",en="(?:"+R+"|"+De+")",Ge="(?:"+Ue+"(?:d|ll|m|re|s|t|ve))?",Ze="(?:"+Ue+"(?:D|LL|M|RE|S|T|VE))?",Je=Yt+"?",Ke="["+Zt+"]?",rn="(?:"+Xt+"(?:"+[Qt,Ee,We].join("|")+")"+Ke+Je+")*",tn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",nn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",an=Ke+Je+rn,un="(?:"+[Kt,Ee,We].join("|")+")"+an,sn=RegExp([R+"?"+_e+"+"+Ge+"(?="+[Fe,R,"$"].join("|")+")",en+"+"+Ze+"(?="+[Fe,R+Be,"$"].join("|")+")",R+"?"+Be+"+"+Ge,R+"+"+Ze,nn,tn,He,un].join("|"),"g");function on(e){return e.match(sn)||[]}$e.exports=on});var Xe=f((Di,Qe)=>{var ln=Oe(),dn=Ne(),mn=q(),fn=Ye();function cn(e,r,t){return e=mn(e),r=t?void 0:r,r===void 0?dn(e)?fn(e):ln(e):e.match(r)||[]}Qe.exports=cn});var rr=f((Ei,er)=>{var gn=G(),hn=Ae(),pn=Xe(),vn="['\u2019]",bn=RegExp(vn,"g");function xn(e){return function(r){return gn(pn(hn(r).replace(bn,"")),e,"")}}er.exports=xn});var nr=f((Wi,tr)=>{function wn(e,r,t){var s=-1,o=e.length;r<0&&(r=-r>o?0:o+r),t=t>o?o:t,t<0&&(t+=o),o=r>t?0:t-r>>>0,r>>>=0;for(var g=Array(o);++s<o;)g[s]=e[s+r];return g}tr.exports=wn});var ar=f((Bi,ir)=>{var yn=nr();function Tn(e,r,t){var s=e.length;return t=t===void 0?s:t,!r&&t>=s?e:yn(e,r,t)}ir.exports=Tn});var L=f((Gi,ur)=>{var Cn="\\ud800-\\udfff",Pn="\\u0300-\\u036f",Rn="\\ufe20-\\ufe2f",Sn="\\u20d0-\\u20ff",Mn=Pn+Rn+Sn,An="\\ufe0e\\ufe0f",kn="\\u200d",On=RegExp("["+kn+Cn+Mn+An+"]");function qn(e){return On.test(e)}ur.exports=qn});var or=f((Zi,sr)=>{function Nn(e){return e.split("")}sr.exports=Nn});var pr=f((Ji,hr)=>{var lr="\\ud800-\\udfff",jn="\\u0300-\\u036f",zn="\\ufe20-\\ufe2f",In="\\u20d0-\\u20ff",Ln=jn+zn+In,Vn="\\ufe0e\\ufe0f",Un="["+lr+"]",V="["+Ln+"]",U="\\ud83c[\\udffb-\\udfff]",Fn="(?:"+V+"|"+U+")",dr="[^"+lr+"]",mr="(?:\\ud83c[\\udde6-\\uddff]){2}",fr="[\\ud800-\\udbff][\\udc00-\\udfff]",Hn="\\u200d",cr=Fn+"?",gr="["+Vn+"]?",_n="(?:"+Hn+"(?:"+[dr,mr,fr].join("|")+")"+gr+cr+")*",Dn=gr+cr+_n,En="(?:"+[dr+V+"?",V,mr,fr,Un].join("|")+")",Wn=RegExp(U+"(?="+U+")|"+En+Dn,"g");function Bn(e){return e.match(Wn)||[]}hr.exports=Bn});var br=f((Ki,vr)=>{var Gn=or(),Zn=L(),Jn=pr();function Kn(e){return Zn(e)?Jn(e):Gn(e)}vr.exports=Kn});var wr=f(($i,xr)=>{var $n=ar(),Yn=L(),Qn=br(),Xn=q();function ei(e){return function(r){r=Xn(r);var t=Yn(r)?Qn(r):void 0,s=t?t[0]:r.charAt(0),o=t?$n(t,1).join(""):r.slice(1);return s[e]()+o}}xr.exports=ei});var Tr=f((Yi,yr)=>{var ri=wr(),ti=ri("toUpperCase");yr.exports=ti});var Pr=f((Qi,Cr)=>{var ni=rr(),ii=Tr(),ai=ni(function(e,r,t){return e+(t?" ":"")+ii(r)});Cr.exports=ai});var qr=f((j,Or)=>{"use strict";var kr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol?"symbol":typeof e};(function(e,r){(typeof j=="undefined"?"undefined":kr(j))==="object"?Or.exports=r():typeof define=="function"&&define.amd?define([],function(){return e.Humanize=r()}):e.Humanize=r()})(j,function(){var e=[{name:"second",value:1e3},{name:"minute",value:6e4},{name:"hour",value:36e5},{name:"day",value:864e5},{name:"week",value:6048e5}],r={P:Math.pow(2,50),T:Math.pow(2,40),G:Math.pow(2,30),M:Math.pow(2,20)},t=function(n){return typeof n!="undefined"&&n!==null},s=function(n){return n!==n},o=function(n){return isFinite(n)&&!s(parseFloat(n))},g=function(n){var i=Object.prototype.toString.call(n);return i==="[object Array]"},l={intword:function(n,i){var a=arguments.length<=2||arguments[2]===void 0?2:arguments[2];return l.compactInteger(n,a)},compactInteger:function(n){var i=arguments.length<=1||arguments[1]===void 0?0:arguments[1];i=Math.max(i,0);var a=parseInt(n,10),d=a<0?"-":"",m=Math.abs(a),c=String(m),w=c.length,v=[13,10,7,4],y=["T","B","M","k"];if(m<1e3)return""+d+c;if(w>v[0]+3)return a.toExponential(i).replace("e+","x10^");for(var b=void 0,x=0;x<v.length;x++){var T=v[x];if(w>=T){b=T;break}}var p=w-b+1,h=c.split(""),C=h.slice(0,p),jr=h.slice(p,p+i+1),H=C.join(""),M=jr.join("");M.length<i&&(M+=""+Array(i-M.length+1).join("0"));var z=void 0;if(i===0)z=""+d+H+y[v.indexOf(b)];else{var zr=Number(H+"."+M).toFixed(i);z=""+d+zr+y[v.indexOf(b)]}return z},intComma:function(n){var i=arguments.length<=1||arguments[1]===void 0?0:arguments[1];return l.formatNumber(n,i)},intcomma:function(){return l.intComma.apply(l,arguments)},fileSize:function(n){var i=arguments.length<=1||arguments[1]===void 0?2:arguments[1];for(var a in r)if(r.hasOwnProperty(a)){var d=r[a];if(n>=d)return l.formatNumber(n/d,i,"")+" "+a+"B"}return n>=1024?l.formatNumber(n/1024,0)+" KB":l.formatNumber(n,0)+l.pluralize(n," byte")},filesize:function(){return l.fileSize.apply(l,arguments)},formatNumber:function(n){var i=arguments.length<=1||arguments[1]===void 0?0:arguments[1],a=arguments.length<=2||arguments[2]===void 0?",":arguments[2],d=arguments.length<=3||arguments[3]===void 0?".":arguments[3],m=function(p,h,C){return C?p.substr(0,C)+h:""},c=function(p,h,C){return p.substr(C).replace(/(\d{3})(?=\d)/g,"$1"+h)},w=function(p,h,C){return C?h+l.toFixed(Math.abs(p),C).split(".")[1]:""},v=l.normalizePrecision(i),y=n<0&&"-"||"",b=String(parseInt(l.toFixed(Math.abs(n||0),v),10)),x=b.length>3?b.length%3:0;return y+m(b,a,x)+c(b,a,x)+w(n,d,v)},toFixed:function(n,i){i=t(i)?i:l.normalizePrecision(i,0);var a=Math.pow(10,i);return(Math.round(n*a)/a).toFixed(i)},normalizePrecision:function(n,i){return n=Math.round(Math.abs(n)),s(n)?i:n},ordinal:function(n){var i=parseInt(n,10);if(i===0)return n;var a=i%100;if([11,12,13].indexOf(a)>=0)return i+"th";var d=i%10,m=void 0;switch(d){case 1:m="st";break;case 2:m="nd";break;case 3:m="rd";break;default:m="th"}return""+i+m},times:function(n){var i=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];if(o(n)&&n>=0){var a=parseFloat(n),d=["never","once","twice"];if(t(i[a]))return String(i[a]);var m=t(d[a])&&d[a].toString();return m||a.toString()+" times"}return null},pluralize:function(n,i,a){return t(n)&&t(i)?(a=t(a)?a:i+"s",parseInt(n,10)===1?i:a):null},truncate:function(n){var i=arguments.length<=1||arguments[1]===void 0?100:arguments[1],a=arguments.length<=2||arguments[2]===void 0?"...":arguments[2];return n.length>i?n.substring(0,i-a.length)+a:n},truncateWords:function(n,i){for(var a=n.split(" "),d="",m=0;m<i;)t(a[m])&&(d+=a[m]+" "),m++;return a.length>i?d+"...":null},truncatewords:function(){return l.truncateWords.apply(l,arguments)},boundedNumber:function(n){var i=arguments.length<=1||arguments[1]===void 0?100:arguments[1],a=arguments.length<=2||arguments[2]===void 0?"+":arguments[2],d=void 0;return o(n)&&o(i)&&n>i&&(d=i+a),(d||n).toString()},truncatenumber:function(){return l.boundedNumber.apply(l,arguments)},oxford:function(n,i,a){var d=n.length,m=void 0;if(d<2)return String(n);if(d===2)return n.join(" and ");if(t(i)&&d>i){var c=d-i;m=i,a=t(a)?a:", and "+c+" "+l.pluralize(c,"other")}else m=-1,a=", and "+n[d-1];return n.slice(0,m).join(", ")+a},dictionary:function(n){var i=arguments.length<=1||arguments[1]===void 0?" is ":arguments[1],a=arguments.length<=2||arguments[2]===void 0?", ":arguments[2],d="";if(t(n)&&(typeof n=="undefined"?"undefined":kr(n))==="object"&&!g(n)){var m=[];for(var c in n)if(n.hasOwnProperty(c)){var w=n[c];m.push(""+c+i+w)}return m.join(a)}return d},frequency:function(n,i){if(!g(n))return null;var a=n.length,d=l.times(a);return a===0?d+" "+i:i+" "+d},pace:function(n,i){var a=arguments.length<=2||arguments[2]===void 0?"time":arguments[2];if(n===0||i===0)return"No "+l.pluralize(0,a);for(var d="Approximately",m=void 0,c=void 0,w=n/i,v=0;v<e.length;++v){var y=e[v];if(c=w*y.value,c>1){m=y.name;break}}m||(d="Less than",c=1,m=e[e.length-1].name);var b=Math.round(c);return a=l.pluralize(b,a),d+" "+b+" "+a+" per "+m},nl2br:function(n){var i=arguments.length<=1||arguments[1]===void 0?"<br/>":arguments[1];return n.replace(/\n/g,i)},br2nl:function(n){var i=arguments.length<=1||arguments[1]===void 0?`\r
`:arguments[1];return n.replace(/\<br\s*\/?\>/g,i)},capitalize:function(n){var i=arguments.length<=1||arguments[1]===void 0?!1:arguments[1];return""+n.charAt(0).toUpperCase()+(i?n.slice(1).toLowerCase():n.slice(1))},capitalizeAll:function(n){return n.replace(/(?:^|\s)\S/g,function(i){return i.toUpperCase()})},titleCase:function(n){var i=/\b(a|an|and|at|but|by|de|en|for|if|in|of|on|or|the|to|via|vs?\.?)\b/i,a=/\S+[A-Z]+\S*/,d=/\s+/,m=/-/,c=void 0;return c=function(v){for(var y=arguments.length<=1||arguments[1]===void 0?!1:arguments[1],b=arguments.length<=2||arguments[2]===void 0?!0:arguments[2],x=[],T=v.split(y?m:d),p=0;p<T.length;++p){var h=T[p];if(h.indexOf("-")!==-1){x.push(c(h,!0,p===0||p===T.length-1));continue}if(b&&(p===0||p===T.length-1)){x.push(a.test(h)?h:l.capitalize(h));continue}a.test(h)?x.push(h):i.test(h)?x.push(h.toLowerCase()):x.push(l.capitalize(h))}return x.join(y?"-":" ")},c(n)},titlecase:function(){return l.titleCase.apply(l,arguments)}};return l})});var Sr=W(Pr());var ui=`
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
    `,si=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,oi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,Rr=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,li=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,di=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,mi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,fi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,ci=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,gi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,hi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,pi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,vi={Glide:ui,"Machine Learning":hi,General:Rr,Array:li,Number:oi,Encoding:pi,Text:gi,"Data & APIs":ci,Image:di,Fun:mi,"Date & Time":fi,Code:si};function F({icon:e,category:r}){var t;return(t=e!=null?e:vi[r])!=null?t:Rr}function Mr(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(Mr):e}function bi(e,r){return I(this,null,function*(){var u;let{data:{key:t,params:s}}=e,o,g;try{o=yield r(...s)}catch(n){o=void 0;try{g=n.toString()}catch(i){g="Exception can't be stringified."}}let l={key:t};o!==void 0&&(o=Mr(o),l.result={type:"string",value:o}),g!==void 0&&(l.error=g),((u=e.source)==null?void 0:u.postMessage).call(u,l,"*")})}function xi(e){return typeof window!="undefined"&&window.addEventListener("message",r=>bi(r,e.run)),k(P({},e),{json:JSON.stringify(wi(e),null,2)})}function wi(e){let{name:r,category:t,released:s,description:o,author:g,result:l,params:u,about:n,video:i}=e,a=F(e);return{name:r,category:t,released:s,description:o,author:g,result:l,about:n,icon:a,video:i,params:Object.entries(u).map(([d,m])=>P({name:d},m))}}var yi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:void 0,tests:[],run(){return I(this,null,function*(){})}},N=class{constructor(r={},t=[]){this.definition=P(P({},yi),r),this.requiredParams=[...t]}with(r,t=[]){return new N(P(P({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){let{icon:t}=this.definition;return this.with({category:r,icon:F({icon:t,category:r})})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:s=[]}=this.definition;return this.with({tests:[...s,{params:r,expectedResult:t}]})}withFailingTest(r,t){let{tests:s=[]}=this.definition;return this.with({tests:[...s,{params:r,expectedResult:t,allowFailure:!0}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,t,s){return s===void 0&&(s=(0,Sr.default)(t)),this.with({params:k(P({},this.definition.params),{[t]:{type:r,displayName:s}})})}withRequiredParam(r,t,s){return this.withParam(r,t,s).with({},[t])}withPrimitiveParam(r,t){return this.withParam("primitive",r,t)}withBooleanParam(r,t){return this.withParam("boolean",r,t)}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredPrimitiveParam(r,t){return this.withRequiredParam("primitive",r,t)}withRequiredBooleanParam(r,t){return this.withRequiredParam("boolean",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}withStringArrayParam(r,t){return this.withParam({kind:"array",items:"string"},r,t)}withRequiredStringArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"string"},r,t)}withNumberArrayParam(r,t){return this.withParam({kind:"array",items:"number"},r,t)}withPrimitiveArrayParam(r,t){return this.withParam({kind:"array",items:"primitive"},r,t)}withRequiredPrimitiveArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"primitive"},r,t)}withExample(r){return this.with({example:r})}run(r){let{params:t}=this.definition,s=this.requiredParams,o=Object.keys(t);function g(...l){let u={};if(l.forEach(({value:n},i)=>{u[o[i]]=n}),!s.some(n=>u[n]===void 0))return r(u)}return xi(k(P({},this.definition),{run:g}))}};function Ar(e){return new N({name:e})}var Nr=W(qr()),na=Ar("Ordinal").withCategory("Number").withReleased("direct").withDescription("Converts an integer to its ordinal as a string. e.g. 22nd").withAuthor("HubSpot","https://github.com/HubSpot/humanize").withStringResult().withRequiredNumberParam("number").withTest({number:22},"22nd").run(({number:e})=>Nr.default.ordinal(e));})();
//# sourceMappingURL=index.js.map

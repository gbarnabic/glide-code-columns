var zr=Object.create;var A=Object.defineProperty,Ir=Object.defineProperties,Lr=Object.getOwnPropertyDescriptor,Fr=Object.getOwnPropertyDescriptors,Vr=Object.getOwnPropertyNames,H=Object.getOwnPropertySymbols,Ur=Object.getPrototypeOf,_=Object.prototype.hasOwnProperty,Hr=Object.prototype.propertyIsEnumerable;var D=(e,r,t)=>r in e?A(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,P=(e,r)=>{for(var t in r||(r={}))_.call(r,t)&&D(e,t,r[t]);if(H)for(var t of H(r))Hr.call(r,t)&&D(e,t,r[t]);return e},k=(e,r)=>Ir(e,Fr(r)),_r=e=>A(e,"__esModule",{value:!0});var f=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Dr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let u of Vr(r))!_.call(e,u)&&u!=="default"&&A(e,u,{get:()=>r[u],enumerable:!(t=Lr(r,u))||t.enumerable});return e},E=e=>Dr(_r(A(e!=null?zr(Ur(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var B=(e,r,t)=>new Promise((u,m)=>{var p=n=>{try{s(t.next(n))}catch(i){m(i)}},l=n=>{try{s(t.throw(n))}catch(i){m(i)}},s=n=>n.done?u(n.value):Promise.resolve(n.value).then(p,l);s((t=t.apply(e,r)).next())});var G=f((yi,W)=>{function Er(e,r,t,u){var m=-1,p=e==null?0:e.length;for(u&&p&&(t=e[++m]);++m<p;)t=r(t,e[m],m,e);return t}W.exports=Er});var J=f((Ti,Z)=>{function Br(e){return function(r){return e==null?void 0:e[r]}}Z.exports=Br});var $=f((Ci,K)=>{var Wr=J(),Gr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Zr=Wr(Gr);K.exports=Zr});var Q=f((Pi,Y)=>{var Jr=typeof global=="object"&&global&&global.Object===Object&&global;Y.exports=Jr});var ee=f((Ri,X)=>{var Kr=Q(),$r=typeof self=="object"&&self&&self.Object===Object&&self,Yr=Kr||$r||Function("return this")();X.exports=Yr});var O=f((Si,re)=>{var Qr=ee(),Xr=Qr.Symbol;re.exports=Xr});var ne=f((Mi,te)=>{function et(e,r){for(var t=-1,u=e==null?0:e.length,m=Array(u);++t<u;)m[t]=r(e[t],t,e);return m}te.exports=et});var ae=f((Ai,ie)=>{var rt=Array.isArray;ie.exports=rt});var le=f((ki,oe)=>{var ue=O(),se=Object.prototype,tt=se.hasOwnProperty,nt=se.toString,S=ue?ue.toStringTag:void 0;function it(e){var r=tt.call(e,S),t=e[S];try{e[S]=void 0;var u=!0}catch(p){}var m=nt.call(e);return u&&(r?e[S]=t:delete e[S]),m}oe.exports=it});var me=f((Oi,de)=>{var at=Object.prototype,ut=at.toString;function st(e){return ut.call(e)}de.exports=st});var he=f((qi,ge)=>{var fe=O(),ot=le(),lt=me(),dt="[object Null]",mt="[object Undefined]",ce=fe?fe.toStringTag:void 0;function ft(e){return e==null?e===void 0?mt:dt:ce&&ce in Object(e)?ot(e):lt(e)}ge.exports=ft});var ve=f((Ni,pe)=>{function ct(e){return e!=null&&typeof e=="object"}pe.exports=ct});var xe=f((ji,be)=>{var gt=he(),ht=ve(),pt="[object Symbol]";function vt(e){return typeof e=="symbol"||ht(e)&&gt(e)==pt}be.exports=vt});var Re=f((zi,Pe)=>{var we=O(),bt=ne(),xt=ae(),wt=xe(),yt=1/0,ye=we?we.prototype:void 0,Te=ye?ye.toString:void 0;function Ce(e){if(typeof e=="string")return e;if(xt(e))return bt(e,Ce)+"";if(wt(e))return Te?Te.call(e):"";var r=e+"";return r=="0"&&1/e==-yt?"-0":r}Pe.exports=Ce});var q=f((Ii,Se)=>{var Tt=Re();function Ct(e){return e==null?"":Tt(e)}Se.exports=Ct});var Ae=f((Li,Me)=>{var Pt=$(),Rt=q(),St=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Mt="\\u0300-\\u036f",At="\\ufe20-\\ufe2f",kt="\\u20d0-\\u20ff",Ot=Mt+At+kt,qt="["+Ot+"]",Nt=RegExp(qt,"g");function jt(e){return e=Rt(e),e&&e.replace(St,Pt).replace(Nt,"")}Me.exports=jt});var Oe=f((Fi,ke)=>{var zt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function It(e){return e.match(zt)||[]}ke.exports=It});var Ne=f((Vi,qe)=>{var Lt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Ft(e){return Lt.test(e)}qe.exports=Ft});var Ye=f((Ui,$e)=>{var je="\\ud800-\\udfff",Vt="\\u0300-\\u036f",Ut="\\ufe20-\\ufe2f",Ht="\\u20d0-\\u20ff",_t=Vt+Ut+Ht,ze="\\u2700-\\u27bf",Ie="a-z\\xdf-\\xf6\\xf8-\\xff",Dt="\\xac\\xb1\\xd7\\xf7",Et="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Bt="\\u2000-\\u206f",Wt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Le="A-Z\\xc0-\\xd6\\xd8-\\xde",Gt="\\ufe0e\\ufe0f",Fe=Dt+Et+Bt+Wt,Ve="['\u2019]",Ue="["+Fe+"]",Zt="["+_t+"]",He="\\d+",Jt="["+ze+"]",_e="["+Ie+"]",De="[^"+je+Fe+He+ze+Ie+Le+"]",Kt="\\ud83c[\\udffb-\\udfff]",$t="(?:"+Zt+"|"+Kt+")",Yt="[^"+je+"]",Ee="(?:\\ud83c[\\udde6-\\uddff]){2}",Be="[\\ud800-\\udbff][\\udc00-\\udfff]",R="["+Le+"]",Qt="\\u200d",We="(?:"+_e+"|"+De+")",Xt="(?:"+R+"|"+De+")",Ge="(?:"+Ve+"(?:d|ll|m|re|s|t|ve))?",Ze="(?:"+Ve+"(?:D|LL|M|RE|S|T|VE))?",Je=$t+"?",Ke="["+Gt+"]?",en="(?:"+Qt+"(?:"+[Yt,Ee,Be].join("|")+")"+Ke+Je+")*",rn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",tn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",nn=Ke+Je+en,an="(?:"+[Jt,Ee,Be].join("|")+")"+nn,un=RegExp([R+"?"+_e+"+"+Ge+"(?="+[Ue,R,"$"].join("|")+")",Xt+"+"+Ze+"(?="+[Ue,R+We,"$"].join("|")+")",R+"?"+We+"+"+Ge,R+"+"+Ze,tn,rn,He,an].join("|"),"g");function sn(e){return e.match(un)||[]}$e.exports=sn});var Xe=f((Hi,Qe)=>{var on=Oe(),ln=Ne(),dn=q(),mn=Ye();function fn(e,r,t){return e=dn(e),r=t?void 0:r,r===void 0?ln(e)?mn(e):on(e):e.match(r)||[]}Qe.exports=fn});var rr=f((_i,er)=>{var cn=G(),gn=Ae(),hn=Xe(),pn="['\u2019]",vn=RegExp(pn,"g");function bn(e){return function(r){return cn(hn(gn(r).replace(vn,"")),e,"")}}er.exports=bn});var nr=f((Di,tr)=>{function xn(e,r,t){var u=-1,m=e.length;r<0&&(r=-r>m?0:m+r),t=t>m?m:t,t<0&&(t+=m),m=r>t?0:t-r>>>0,r>>>=0;for(var p=Array(m);++u<m;)p[u]=e[u+r];return p}tr.exports=xn});var ar=f((Ei,ir)=>{var wn=nr();function yn(e,r,t){var u=e.length;return t=t===void 0?u:t,!r&&t>=u?e:wn(e,r,t)}ir.exports=yn});var I=f((Bi,ur)=>{var Tn="\\ud800-\\udfff",Cn="\\u0300-\\u036f",Pn="\\ufe20-\\ufe2f",Rn="\\u20d0-\\u20ff",Sn=Cn+Pn+Rn,Mn="\\ufe0e\\ufe0f",An="\\u200d",kn=RegExp("["+An+Tn+Sn+Mn+"]");function On(e){return kn.test(e)}ur.exports=On});var or=f((Wi,sr)=>{function qn(e){return e.split("")}sr.exports=qn});var pr=f((Gi,hr)=>{var lr="\\ud800-\\udfff",Nn="\\u0300-\\u036f",jn="\\ufe20-\\ufe2f",zn="\\u20d0-\\u20ff",In=Nn+jn+zn,Ln="\\ufe0e\\ufe0f",Fn="["+lr+"]",L="["+In+"]",F="\\ud83c[\\udffb-\\udfff]",Vn="(?:"+L+"|"+F+")",dr="[^"+lr+"]",mr="(?:\\ud83c[\\udde6-\\uddff]){2}",fr="[\\ud800-\\udbff][\\udc00-\\udfff]",Un="\\u200d",cr=Vn+"?",gr="["+Ln+"]?",Hn="(?:"+Un+"(?:"+[dr,mr,fr].join("|")+")"+gr+cr+")*",_n=gr+cr+Hn,Dn="(?:"+[dr+L+"?",L,mr,fr,Fn].join("|")+")",En=RegExp(F+"(?="+F+")|"+Dn+_n,"g");function Bn(e){return e.match(En)||[]}hr.exports=Bn});var br=f((Zi,vr)=>{var Wn=or(),Gn=I(),Zn=pr();function Jn(e){return Gn(e)?Zn(e):Wn(e)}vr.exports=Jn});var wr=f((Ji,xr)=>{var Kn=ar(),$n=I(),Yn=br(),Qn=q();function Xn(e){return function(r){r=Qn(r);var t=$n(r)?Yn(r):void 0,u=t?t[0]:r.charAt(0),m=t?Kn(t,1).join(""):r.slice(1);return u[e]()+m}}xr.exports=Xn});var Tr=f((Ki,yr)=>{var ei=wr(),ri=ei("toUpperCase");yr.exports=ri});var Pr=f(($i,Cr)=>{var ti=rr(),ni=Tr(),ii=ti(function(e,r,t){return e+(t?" ":"")+ni(r)});Cr.exports=ii});var Or=f((j,kr)=>{"use strict";var Ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol?"symbol":typeof e};(function(e,r){(typeof j=="undefined"?"undefined":Ar(j))==="object"?kr.exports=r():typeof define=="function"&&define.amd?define([],function(){return e.Humanize=r()}):e.Humanize=r()})(j,function(){var e=[{name:"second",value:1e3},{name:"minute",value:6e4},{name:"hour",value:36e5},{name:"day",value:864e5},{name:"week",value:6048e5}],r={P:Math.pow(2,50),T:Math.pow(2,40),G:Math.pow(2,30),M:Math.pow(2,20)},t=function(n){return typeof n!="undefined"&&n!==null},u=function(n){return n!==n},m=function(n){return isFinite(n)&&!u(parseFloat(n))},p=function(n){var i=Object.prototype.toString.call(n);return i==="[object Array]"},l={intword:function(n,i){var a=arguments.length<=2||arguments[2]===void 0?2:arguments[2];return l.compactInteger(n,a)},compactInteger:function(n){var i=arguments.length<=1||arguments[1]===void 0?0:arguments[1];i=Math.max(i,0);var a=parseInt(n,10),o=a<0?"-":"",d=Math.abs(a),c=String(d),w=c.length,v=[13,10,7,4],y=["T","B","M","k"];if(d<1e3)return""+o+c;if(w>v[0]+3)return a.toExponential(i).replace("e+","x10^");for(var b=void 0,x=0;x<v.length;x++){var T=v[x];if(w>=T){b=T;break}}var h=w-b+1,g=c.split(""),C=g.slice(0,h),Nr=g.slice(h,h+i+1),U=C.join(""),M=Nr.join("");M.length<i&&(M+=""+Array(i-M.length+1).join("0"));var z=void 0;if(i===0)z=""+o+U+y[v.indexOf(b)];else{var jr=Number(U+"."+M).toFixed(i);z=""+o+jr+y[v.indexOf(b)]}return z},intComma:function(n){var i=arguments.length<=1||arguments[1]===void 0?0:arguments[1];return l.formatNumber(n,i)},intcomma:function(){return l.intComma.apply(l,arguments)},fileSize:function(n){var i=arguments.length<=1||arguments[1]===void 0?2:arguments[1];for(var a in r)if(r.hasOwnProperty(a)){var o=r[a];if(n>=o)return l.formatNumber(n/o,i,"")+" "+a+"B"}return n>=1024?l.formatNumber(n/1024,0)+" KB":l.formatNumber(n,0)+l.pluralize(n," byte")},filesize:function(){return l.fileSize.apply(l,arguments)},formatNumber:function(n){var i=arguments.length<=1||arguments[1]===void 0?0:arguments[1],a=arguments.length<=2||arguments[2]===void 0?",":arguments[2],o=arguments.length<=3||arguments[3]===void 0?".":arguments[3],d=function(h,g,C){return C?h.substr(0,C)+g:""},c=function(h,g,C){return h.substr(C).replace(/(\d{3})(?=\d)/g,"$1"+g)},w=function(h,g,C){return C?g+l.toFixed(Math.abs(h),C).split(".")[1]:""},v=l.normalizePrecision(i),y=n<0&&"-"||"",b=String(parseInt(l.toFixed(Math.abs(n||0),v),10)),x=b.length>3?b.length%3:0;return y+d(b,a,x)+c(b,a,x)+w(n,o,v)},toFixed:function(n,i){i=t(i)?i:l.normalizePrecision(i,0);var a=Math.pow(10,i);return(Math.round(n*a)/a).toFixed(i)},normalizePrecision:function(n,i){return n=Math.round(Math.abs(n)),u(n)?i:n},ordinal:function(n){var i=parseInt(n,10);if(i===0)return n;var a=i%100;if([11,12,13].indexOf(a)>=0)return i+"th";var o=i%10,d=void 0;switch(o){case 1:d="st";break;case 2:d="nd";break;case 3:d="rd";break;default:d="th"}return""+i+d},times:function(n){var i=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];if(m(n)&&n>=0){var a=parseFloat(n),o=["never","once","twice"];if(t(i[a]))return String(i[a]);var d=t(o[a])&&o[a].toString();return d||a.toString()+" times"}return null},pluralize:function(n,i,a){return t(n)&&t(i)?(a=t(a)?a:i+"s",parseInt(n,10)===1?i:a):null},truncate:function(n){var i=arguments.length<=1||arguments[1]===void 0?100:arguments[1],a=arguments.length<=2||arguments[2]===void 0?"...":arguments[2];return n.length>i?n.substring(0,i-a.length)+a:n},truncateWords:function(n,i){for(var a=n.split(" "),o="",d=0;d<i;)t(a[d])&&(o+=a[d]+" "),d++;return a.length>i?o+"...":null},truncatewords:function(){return l.truncateWords.apply(l,arguments)},boundedNumber:function(n){var i=arguments.length<=1||arguments[1]===void 0?100:arguments[1],a=arguments.length<=2||arguments[2]===void 0?"+":arguments[2],o=void 0;return m(n)&&m(i)&&n>i&&(o=i+a),(o||n).toString()},truncatenumber:function(){return l.boundedNumber.apply(l,arguments)},oxford:function(n,i,a){var o=n.length,d=void 0;if(o<2)return String(n);if(o===2)return n.join(" and ");if(t(i)&&o>i){var c=o-i;d=i,a=t(a)?a:", and "+c+" "+l.pluralize(c,"other")}else d=-1,a=", and "+n[o-1];return n.slice(0,d).join(", ")+a},dictionary:function(n){var i=arguments.length<=1||arguments[1]===void 0?" is ":arguments[1],a=arguments.length<=2||arguments[2]===void 0?", ":arguments[2],o="";if(t(n)&&(typeof n=="undefined"?"undefined":Ar(n))==="object"&&!p(n)){var d=[];for(var c in n)if(n.hasOwnProperty(c)){var w=n[c];d.push(""+c+i+w)}return d.join(a)}return o},frequency:function(n,i){if(!p(n))return null;var a=n.length,o=l.times(a);return a===0?o+" "+i:i+" "+o},pace:function(n,i){var a=arguments.length<=2||arguments[2]===void 0?"time":arguments[2];if(n===0||i===0)return"No "+l.pluralize(0,a);for(var o="Approximately",d=void 0,c=void 0,w=n/i,v=0;v<e.length;++v){var y=e[v];if(c=w*y.value,c>1){d=y.name;break}}d||(o="Less than",c=1,d=e[e.length-1].name);var b=Math.round(c);return a=l.pluralize(b,a),o+" "+b+" "+a+" per "+d},nl2br:function(n){var i=arguments.length<=1||arguments[1]===void 0?"<br/>":arguments[1];return n.replace(/\n/g,i)},br2nl:function(n){var i=arguments.length<=1||arguments[1]===void 0?`\r
`:arguments[1];return n.replace(/\<br\s*\/?\>/g,i)},capitalize:function(n){var i=arguments.length<=1||arguments[1]===void 0?!1:arguments[1];return""+n.charAt(0).toUpperCase()+(i?n.slice(1).toLowerCase():n.slice(1))},capitalizeAll:function(n){return n.replace(/(?:^|\s)\S/g,function(i){return i.toUpperCase()})},titleCase:function(n){var i=/\b(a|an|and|at|but|by|de|en|for|if|in|of|on|or|the|to|via|vs?\.?)\b/i,a=/\S+[A-Z]+\S*/,o=/\s+/,d=/-/,c=void 0;return c=function(v){for(var y=arguments.length<=1||arguments[1]===void 0?!1:arguments[1],b=arguments.length<=2||arguments[2]===void 0?!0:arguments[2],x=[],T=v.split(y?d:o),h=0;h<T.length;++h){var g=T[h];if(g.indexOf("-")!==-1){x.push(c(g,!0,h===0||h===T.length-1));continue}if(b&&(h===0||h===T.length-1)){x.push(a.test(g)?g:l.capitalize(g));continue}a.test(g)?x.push(g):i.test(g)?x.push(g.toLowerCase()):x.push(l.capitalize(g))}return x.join(y?"-":" ")},c(n)},titlecase:function(){return l.titleCase.apply(l,arguments)}};return l})});var Sr=E(Pr());var ai=`
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
    `,ui=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,si=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,Rr=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,oi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,li=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,di=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,mi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,fi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,ci=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,gi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,hi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,pi={Glide:ai,"Machine Learning":gi,General:Rr,Array:oi,Number:si,Encoding:hi,Text:ci,"Data & APIs":fi,Image:li,Fun:di,"Date & Time":mi,Code:ui};function V({icon:e,category:r}){var t;return(t=e!=null?e:pi[r])!=null?t:Rr}function vi(e){return k(P({},e),{json:JSON.stringify(bi(e),null,2)})}function bi(e){let{name:r,category:t,released:u,description:m,author:p,result:l,params:s,about:n,video:i}=e,a=V(e);return{name:r,category:t,released:u,description:m,author:p,result:l,about:n,icon:a,video:i,params:Object.entries(s).map(([o,d])=>P({name:o},d))}}var xi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:void 0,tests:[],run(){return B(this,null,function*(){})}},N=class{constructor(r={},t=[]){this.definition=P(P({},xi),r),this.requiredParams=[...t]}with(r,t=[]){return new N(P(P({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){let{icon:t}=this.definition;return this.with({category:r,icon:V({icon:t,category:r})})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:u=[]}=this.definition;return this.with({tests:[...u,{params:r,expectedResult:t}]})}withFailingTest(r,t){let{tests:u=[]}=this.definition;return this.with({tests:[...u,{params:r,expectedResult:t,allowFailure:!0}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,t,u){return u===void 0&&(u=(0,Sr.default)(t)),this.with({params:k(P({},this.definition.params),{[t]:{type:r,displayName:u}})})}withRequiredParam(r,t,u){return this.withParam(r,t,u).with({},[t])}withPrimitiveParam(r,t){return this.withParam("primitive",r,t)}withBooleanParam(r,t){return this.withParam("boolean",r,t)}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredPrimitiveParam(r,t){return this.withRequiredParam("primitive",r,t)}withRequiredBooleanParam(r,t){return this.withRequiredParam("boolean",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}withStringArrayParam(r,t){return this.withParam({kind:"array",items:"string"},r,t)}withRequiredStringArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"string"},r,t)}withNumberArrayParam(r,t){return this.withParam({kind:"array",items:"number"},r,t)}withPrimitiveArrayParam(r,t){return this.withParam({kind:"array",items:"primitive"},r,t)}withRequiredPrimitiveArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"primitive"},r,t)}withExample(r){return this.with({example:r})}run(r){let{params:t}=this.definition,u=this.requiredParams,m=Object.keys(t);function p(...l){let s={};if(l.forEach(({value:n},i)=>{s[m[i]]=n}),!u.some(n=>s[n]===void 0))return r(s)}return vi(k(P({},this.definition),{run:p}))}};function Mr(e){return new N({name:e})}var qr=E(Or()),ra=Mr("File Size").withCategory("Number").withReleased("direct").withDescription("Formats the value like a 'human-readable' file size (i.e. '13 KB', '4.1 MB', '102 bytes', etc).").withAuthor("HubSpot","https://github.com/HubSpot/humanize").withRequiredNumberParam("fileSize").withStringResult().withTest({fileSize:1024*2e3},"1.95 MB").run(({fileSize:e})=>qr.default.fileSize(e));export{ra as default};
//# sourceMappingURL=function.js.map

var jr=Object.create;var O=Object.defineProperty,zr=Object.defineProperties,kr=Object.getOwnPropertyDescriptor,Ur=Object.getOwnPropertyDescriptors,Ir=Object.getOwnPropertyNames,E=Object.getOwnPropertySymbols,_r=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty,Er=Object.prototype.propertyIsEnumerable;var F=(e,r,t)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,S=(e,r)=>{for(var t in r||(r={}))D.call(r,t)&&F(e,t,r[t]);if(E)for(var t of E(r))Er.call(r,t)&&F(e,t,r[t]);return e},q=(e,r)=>zr(e,Ur(r)),Dr=e=>O(e,"__esModule",{value:!0});var c=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Fr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of Ir(r))!D.call(e,s)&&s!=="default"&&O(e,s,{get:()=>r[s],enumerable:!(t=kr(r,s))||t.enumerable});return e},W=e=>Fr(Dr(O(e!=null?jr(_r(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var Z=(e,r,t)=>new Promise((s,l)=>{var h=n=>{try{u(t.next(n))}catch(i){l(i)}},f=n=>{try{u(t.throw(n))}catch(i){l(i)}},u=n=>n.done?s(n.value):Promise.resolve(n.value).then(h,f);u((t=t.apply(e,r)).next())});var G=c((fi,H)=>{function Wr(e,r,t,s){var l=-1,h=e==null?0:e.length;for(s&&h&&(t=e[++l]);++l<h;)t=r(t,e[l],l,e);return t}H.exports=Wr});var B=c((li,V)=>{function Zr(e){return function(r){return e==null?void 0:e[r]}}V.exports=Zr});var K=c((di,J)=>{var Hr=B(),Gr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Vr=Hr(Gr);J.exports=Vr});var Y=c((ci,$)=>{var Br=typeof global=="object"&&global&&global.Object===Object&&global;$.exports=Br});var X=c((mi,Q)=>{var Jr=Y(),Kr=typeof self=="object"&&self&&self.Object===Object&&self,$r=Jr||Kr||Function("return this")();Q.exports=$r});var M=c((gi,ee)=>{var Yr=X(),Qr=Yr.Symbol;ee.exports=Qr});var te=c((pi,re)=>{function Xr(e,r){for(var t=-1,s=e==null?0:e.length,l=Array(s);++t<s;)l[t]=r(e[t],t,e);return l}re.exports=Xr});var ie=c((hi,ne)=>{var et=Array.isArray;ne.exports=et});var oe=c((bi,se)=>{var ae=M(),ue=Object.prototype,rt=ue.hasOwnProperty,tt=ue.toString,R=ae?ae.toStringTag:void 0;function nt(e){var r=rt.call(e,R),t=e[R];try{e[R]=void 0;var s=!0}catch(h){}var l=tt.call(e);return s&&(r?e[R]=t:delete e[R]),l}se.exports=nt});var le=c((xi,fe)=>{var it=Object.prototype,at=it.toString;function ut(e){return at.call(e)}fe.exports=ut});var ge=c((vi,me)=>{var de=M(),st=oe(),ot=le(),ft="[object Null]",lt="[object Undefined]",ce=de?de.toStringTag:void 0;function dt(e){return e==null?e===void 0?lt:ft:ce&&ce in Object(e)?st(e):ot(e)}me.exports=dt});var he=c((yi,pe)=>{function ct(e){return e!=null&&typeof e=="object"}pe.exports=ct});var xe=c((Ti,be)=>{var mt=ge(),gt=he(),pt="[object Symbol]";function ht(e){return typeof e=="symbol"||gt(e)&&mt(e)==pt}be.exports=ht});var Se=c((Ci,we)=>{var ve=M(),bt=te(),xt=ie(),vt=xe(),yt=1/0,ye=ve?ve.prototype:void 0,Te=ye?ye.toString:void 0;function Ce(e){if(typeof e=="string")return e;if(xt(e))return bt(e,Ce)+"";if(vt(e))return Te?Te.call(e):"";var r=e+"";return r=="0"&&1/e==-yt?"-0":r}we.exports=Ce});var N=c((wi,Pe)=>{var Tt=Se();function Ct(e){return e==null?"":Tt(e)}Pe.exports=Ct});var Ae=c((Si,Re)=>{var wt=K(),St=N(),Pt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Rt="\\u0300-\\u036f",At="\\ufe20-\\ufe2f",Ot="\\u20d0-\\u20ff",qt=Rt+At+Ot,Mt="["+qt+"]",Nt=RegExp(Mt,"g");function Lt(e){return e=St(e),e&&e.replace(Pt,wt).replace(Nt,"")}Re.exports=Lt});var qe=c((Pi,Oe)=>{var jt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function zt(e){return e.match(jt)||[]}Oe.exports=zt});var Ne=c((Ri,Me)=>{var kt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Ut(e){return kt.test(e)}Me.exports=Ut});var $e=c((Ai,Ke)=>{var Le="\\ud800-\\udfff",It="\\u0300-\\u036f",_t="\\ufe20-\\ufe2f",Et="\\u20d0-\\u20ff",Dt=It+_t+Et,je="\\u2700-\\u27bf",ze="a-z\\xdf-\\xf6\\xf8-\\xff",Ft="\\xac\\xb1\\xd7\\xf7",Wt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Zt="\\u2000-\\u206f",Ht=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ke="A-Z\\xc0-\\xd6\\xd8-\\xde",Gt="\\ufe0e\\ufe0f",Ue=Ft+Wt+Zt+Ht,Ie="['\u2019]",_e="["+Ue+"]",Vt="["+Dt+"]",Ee="\\d+",Bt="["+je+"]",De="["+ze+"]",Fe="[^"+Le+Ue+Ee+je+ze+ke+"]",Jt="\\ud83c[\\udffb-\\udfff]",Kt="(?:"+Vt+"|"+Jt+")",$t="[^"+Le+"]",We="(?:\\ud83c[\\udde6-\\uddff]){2}",Ze="[\\ud800-\\udbff][\\udc00-\\udfff]",P="["+ke+"]",Yt="\\u200d",He="(?:"+De+"|"+Fe+")",Qt="(?:"+P+"|"+Fe+")",Ge="(?:"+Ie+"(?:d|ll|m|re|s|t|ve))?",Ve="(?:"+Ie+"(?:D|LL|M|RE|S|T|VE))?",Be=Kt+"?",Je="["+Gt+"]?",Xt="(?:"+Yt+"(?:"+[$t,We,Ze].join("|")+")"+Je+Be+")*",en="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",tn=Je+Be+Xt,nn="(?:"+[Bt,We,Ze].join("|")+")"+tn,an=RegExp([P+"?"+De+"+"+Ge+"(?="+[_e,P,"$"].join("|")+")",Qt+"+"+Ve+"(?="+[_e,P+He,"$"].join("|")+")",P+"?"+He+"+"+Ge,P+"+"+Ve,rn,en,Ee,nn].join("|"),"g");function un(e){return e.match(an)||[]}Ke.exports=un});var Qe=c((Oi,Ye)=>{var sn=qe(),on=Ne(),fn=N(),ln=$e();function dn(e,r,t){return e=fn(e),r=t?void 0:r,r===void 0?on(e)?ln(e):sn(e):e.match(r)||[]}Ye.exports=dn});var er=c((qi,Xe)=>{var cn=G(),mn=Ae(),gn=Qe(),pn="['\u2019]",hn=RegExp(pn,"g");function bn(e){return function(r){return cn(gn(mn(r).replace(hn,"")),e,"")}}Xe.exports=bn});var tr=c((Mi,rr)=>{function xn(e,r,t){var s=-1,l=e.length;r<0&&(r=-r>l?0:l+r),t=t>l?l:t,t<0&&(t+=l),l=r>t?0:t-r>>>0,r>>>=0;for(var h=Array(l);++s<l;)h[s]=e[s+r];return h}rr.exports=xn});var ir=c((Ni,nr)=>{var vn=tr();function yn(e,r,t){var s=e.length;return t=t===void 0?s:t,!r&&t>=s?e:vn(e,r,t)}nr.exports=yn});var k=c((Li,ar)=>{var Tn="\\ud800-\\udfff",Cn="\\u0300-\\u036f",wn="\\ufe20-\\ufe2f",Sn="\\u20d0-\\u20ff",Pn=Cn+wn+Sn,Rn="\\ufe0e\\ufe0f",An="\\u200d",On=RegExp("["+An+Tn+Pn+Rn+"]");function qn(e){return On.test(e)}ar.exports=qn});var sr=c((ji,ur)=>{function Mn(e){return e.split("")}ur.exports=Mn});var pr=c((zi,gr)=>{var or="\\ud800-\\udfff",Nn="\\u0300-\\u036f",Ln="\\ufe20-\\ufe2f",jn="\\u20d0-\\u20ff",zn=Nn+Ln+jn,kn="\\ufe0e\\ufe0f",Un="["+or+"]",U="["+zn+"]",I="\\ud83c[\\udffb-\\udfff]",In="(?:"+U+"|"+I+")",fr="[^"+or+"]",lr="(?:\\ud83c[\\udde6-\\uddff]){2}",dr="[\\ud800-\\udbff][\\udc00-\\udfff]",_n="\\u200d",cr=In+"?",mr="["+kn+"]?",En="(?:"+_n+"(?:"+[fr,lr,dr].join("|")+")"+mr+cr+")*",Dn=mr+cr+En,Fn="(?:"+[fr+U+"?",U,lr,dr,Un].join("|")+")",Wn=RegExp(I+"(?="+I+")|"+Fn+Dn,"g");function Zn(e){return e.match(Wn)||[]}gr.exports=Zn});var br=c((ki,hr)=>{var Hn=sr(),Gn=k(),Vn=pr();function Bn(e){return Gn(e)?Vn(e):Hn(e)}hr.exports=Bn});var vr=c((Ui,xr)=>{var Jn=ir(),Kn=k(),$n=br(),Yn=N();function Qn(e){return function(r){r=Yn(r);var t=Kn(r)?$n(r):void 0,s=t?t[0]:r.charAt(0),l=t?Jn(t,1).join(""):r.slice(1);return s[e]()+l}}xr.exports=Qn});var Tr=c((Ii,yr)=>{var Xn=vr(),ei=Xn("toUpperCase");yr.exports=ei});var wr=c((_i,Cr)=>{var ri=er(),ti=Tr(),ni=ri(function(e,r,t){return e+(t?" ":"")+ti(r)});Cr.exports=ni});var qr=c((j,Or)=>{"use strict";var Ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol?"symbol":typeof e};(function(e,r){(typeof j=="undefined"?"undefined":Ar(j))==="object"?Or.exports=r():typeof define=="function"&&define.amd?define([],function(){return e.Humanize=r()}):e.Humanize=r()})(j,function(){var e=[{name:"second",value:1e3},{name:"minute",value:6e4},{name:"hour",value:36e5},{name:"day",value:864e5},{name:"week",value:6048e5}],r={P:Math.pow(2,50),T:Math.pow(2,40),G:Math.pow(2,30),M:Math.pow(2,20)},t=function(n){return typeof n!="undefined"&&n!==null},s=function(n){return n!==n},l=function(n){return isFinite(n)&&!s(parseFloat(n))},h=function(n){var i=Object.prototype.toString.call(n);return i==="[object Array]"},f={intword:function(n,i){var a=arguments.length<=2||arguments[2]===void 0?2:arguments[2];return f.compactInteger(n,a)},compactInteger:function(n){var i=arguments.length<=1||arguments[1]===void 0?0:arguments[1];i=Math.max(i,0);var a=parseInt(n,10),o=a<0?"-":"",d=Math.abs(a),m=String(d),y=m.length,b=[13,10,7,4],T=["T","B","M","k"];if(d<1e3)return""+o+m;if(y>b[0]+3)return a.toExponential(i).replace("e+","x10^");for(var x=void 0,v=0;v<b.length;v++){var C=b[v];if(y>=C){x=C;break}}var p=y-x+1,g=m.split(""),w=g.slice(0,p),Nr=g.slice(p,p+i+1),_=w.join(""),A=Nr.join("");A.length<i&&(A+=""+Array(i-A.length+1).join("0"));var z=void 0;if(i===0)z=""+o+_+T[b.indexOf(x)];else{var Lr=Number(_+"."+A).toFixed(i);z=""+o+Lr+T[b.indexOf(x)]}return z},intComma:function(n){var i=arguments.length<=1||arguments[1]===void 0?0:arguments[1];return f.formatNumber(n,i)},intcomma:function(){return f.intComma.apply(f,arguments)},fileSize:function(n){var i=arguments.length<=1||arguments[1]===void 0?2:arguments[1];for(var a in r)if(r.hasOwnProperty(a)){var o=r[a];if(n>=o)return f.formatNumber(n/o,i,"")+" "+a+"B"}return n>=1024?f.formatNumber(n/1024,0)+" KB":f.formatNumber(n,0)+f.pluralize(n," byte")},filesize:function(){return f.fileSize.apply(f,arguments)},formatNumber:function(n){var i=arguments.length<=1||arguments[1]===void 0?0:arguments[1],a=arguments.length<=2||arguments[2]===void 0?",":arguments[2],o=arguments.length<=3||arguments[3]===void 0?".":arguments[3],d=function(p,g,w){return w?p.substr(0,w)+g:""},m=function(p,g,w){return p.substr(w).replace(/(\d{3})(?=\d)/g,"$1"+g)},y=function(p,g,w){return w?g+f.toFixed(Math.abs(p),w).split(".")[1]:""},b=f.normalizePrecision(i),T=n<0&&"-"||"",x=String(parseInt(f.toFixed(Math.abs(n||0),b),10)),v=x.length>3?x.length%3:0;return T+d(x,a,v)+m(x,a,v)+y(n,o,b)},toFixed:function(n,i){i=t(i)?i:f.normalizePrecision(i,0);var a=Math.pow(10,i);return(Math.round(n*a)/a).toFixed(i)},normalizePrecision:function(n,i){return n=Math.round(Math.abs(n)),s(n)?i:n},ordinal:function(n){var i=parseInt(n,10);if(i===0)return n;var a=i%100;if([11,12,13].indexOf(a)>=0)return i+"th";var o=i%10,d=void 0;switch(o){case 1:d="st";break;case 2:d="nd";break;case 3:d="rd";break;default:d="th"}return""+i+d},times:function(n){var i=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];if(l(n)&&n>=0){var a=parseFloat(n),o=["never","once","twice"];if(t(i[a]))return String(i[a]);var d=t(o[a])&&o[a].toString();return d||a.toString()+" times"}return null},pluralize:function(n,i,a){return t(n)&&t(i)?(a=t(a)?a:i+"s",parseInt(n,10)===1?i:a):null},truncate:function(n){var i=arguments.length<=1||arguments[1]===void 0?100:arguments[1],a=arguments.length<=2||arguments[2]===void 0?"...":arguments[2];return n.length>i?n.substring(0,i-a.length)+a:n},truncateWords:function(n,i){for(var a=n.split(" "),o="",d=0;d<i;)t(a[d])&&(o+=a[d]+" "),d++;return a.length>i?o+"...":null},truncatewords:function(){return f.truncateWords.apply(f,arguments)},boundedNumber:function(n){var i=arguments.length<=1||arguments[1]===void 0?100:arguments[1],a=arguments.length<=2||arguments[2]===void 0?"+":arguments[2],o=void 0;return l(n)&&l(i)&&n>i&&(o=i+a),(o||n).toString()},truncatenumber:function(){return f.boundedNumber.apply(f,arguments)},oxford:function(n,i,a){var o=n.length,d=void 0;if(o<2)return String(n);if(o===2)return n.join(" and ");if(t(i)&&o>i){var m=o-i;d=i,a=t(a)?a:", and "+m+" "+f.pluralize(m,"other")}else d=-1,a=", and "+n[o-1];return n.slice(0,d).join(", ")+a},dictionary:function(n){var i=arguments.length<=1||arguments[1]===void 0?" is ":arguments[1],a=arguments.length<=2||arguments[2]===void 0?", ":arguments[2],o="";if(t(n)&&(typeof n=="undefined"?"undefined":Ar(n))==="object"&&!h(n)){var d=[];for(var m in n)if(n.hasOwnProperty(m)){var y=n[m];d.push(""+m+i+y)}return d.join(a)}return o},frequency:function(n,i){if(!h(n))return null;var a=n.length,o=f.times(a);return a===0?o+" "+i:i+" "+o},pace:function(n,i){var a=arguments.length<=2||arguments[2]===void 0?"time":arguments[2];if(n===0||i===0)return"No "+f.pluralize(0,a);for(var o="Approximately",d=void 0,m=void 0,y=n/i,b=0;b<e.length;++b){var T=e[b];if(m=y*T.value,m>1){d=T.name;break}}d||(o="Less than",m=1,d=e[e.length-1].name);var x=Math.round(m);return a=f.pluralize(x,a),o+" "+x+" "+a+" per "+d},nl2br:function(n){var i=arguments.length<=1||arguments[1]===void 0?"<br/>":arguments[1];return n.replace(/\n/g,i)},br2nl:function(n){var i=arguments.length<=1||arguments[1]===void 0?`\r
`:arguments[1];return n.replace(/\<br\s*\/?\>/g,i)},capitalize:function(n){var i=arguments.length<=1||arguments[1]===void 0?!1:arguments[1];return""+n.charAt(0).toUpperCase()+(i?n.slice(1).toLowerCase():n.slice(1))},capitalizeAll:function(n){return n.replace(/(?:^|\s)\S/g,function(i){return i.toUpperCase()})},titleCase:function(n){var i=/\b(a|an|and|at|but|by|de|en|for|if|in|of|on|or|the|to|via|vs?\.?)\b/i,a=/\S+[A-Z]+\S*/,o=/\s+/,d=/-/,m=void 0;return m=function(b){for(var T=arguments.length<=1||arguments[1]===void 0?!1:arguments[1],x=arguments.length<=2||arguments[2]===void 0?!0:arguments[2],v=[],C=b.split(T?d:o),p=0;p<C.length;++p){var g=C[p];if(g.indexOf("-")!==-1){v.push(m(g,!0,p===0||p===C.length-1));continue}if(x&&(p===0||p===C.length-1)){v.push(a.test(g)?g:f.capitalize(g));continue}a.test(g)?v.push(g):i.test(g)?v.push(g.toLowerCase()):v.push(f.capitalize(g))}return v.join(T?"-":" ")},m(n)},titlecase:function(){return f.titleCase.apply(f,arguments)}};return f})});var Sr=W(wr());function ii(e){return q(S({},e),{json:JSON.stringify(ui(e),null,2)})}var ai=`
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
    `,Pr=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function ui(e){let{name:r,category:t,description:s,author:l,result:h,params:f,about:u,video:n}=e,{icon:i=Pr}=e;return i==="glide"&&(i=ai),{name:r,category:t,description:s,author:l,result:h,about:u,icon:i,video:n,params:Object.entries(f).map(([a,o])=>S({name:a},o))}}var si={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:Pr,about:void 0,video:void 0,tests:[],run(){return Z(this,null,function*(){})}},L=class{constructor(r={},t=[]){this.definition=S(S({},si),r),this.requiredParams=[...t]}with(r,t=[]){return new L(S(S({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){return this.with({category:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:s=[]}=this.definition;return this.with({tests:[...s,{params:r,expectedResult:t}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(r,t,s){return s===void 0&&(s=(0,Sr.default)(t)),this.with({params:q(S({},this.definition.params),{[t]:{type:r,displayName:s}})})}withRequiredParam(r,t,s){return this.withParam(r,t,s).with({},[t])}withPrimitiveParam(r,t){return this.withParam("primitive",r,t)}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredPrimitiveParam(r,t){return this.withRequiredParam("primitive",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}run(r){let{params:t}=this.definition,s=this.requiredParams,l=Object.keys(t);function h(...f){let u={};if(f.forEach(({value:n},i)=>{u[l[i]]=n}),!s.some(n=>u[n]===void 0))return r(u)}return ii(q(S({},this.definition),{run:h}))}};function Rr(e){return new L({name:e})}var Mr=W(qr()),Fi=Rr("Pluralize Text").withCategory("Text").withDescription("Returns the plural version of a given word if the value is not 1. The default suffix is 's'.").withAuthor("HubSpot","https://github.com/HubSpot/humanize").withRequiredNumberParam("number").withStringParam("singular").withStringParam("plural").withStringResult().withTest({number:0,singular:"duck",plural:"duckies"},"duckies").withTest({number:1,singular:"duck",plural:"duckies"},"duck").withTest({number:3,singular:"duck",plural:"duckies"},"duckies").run(({number:e,singular:r,plural:t})=>Mr.default.pluralize(e,r,t));export{Fi as default};
//# sourceMappingURL=function.js.map

(()=>{var Ze=Object.create;var p=Object.defineProperty,Je=Object.defineProperties,$e=Object.getOwnPropertyDescriptor,Ye=Object.getOwnPropertyDescriptors,Xe=Object.getOwnPropertyNames,q=Object.getOwnPropertySymbols,Ke=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable;var k=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))A.call(e,t)&&k(r,t,e[t]);if(q)for(var t of q(e))Qe.call(e,t)&&k(r,t,e[t]);return r},g=(r,e)=>Je(r,Ye(e)),rt=r=>p(r,"__esModule",{value:!0});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var et=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Xe(e))!A.call(r,n)&&n!=="default"&&p(r,n,{get:()=>e[n],enumerable:!(t=$e(e,n))||t.enumerable});return r},M=r=>et(rt(p(r!=null?Ze(Ke(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var T=(r,e,t)=>new Promise((n,a)=>{var o=s=>{try{u(t.next(s))}catch(c){a(c)}},d=s=>{try{u(t.throw(s))}catch(c){a(c)}},u=s=>s.done?n(s.value):Promise.resolve(s.value).then(o,d);u((t=t.apply(r,e)).next())});var O=i((Aa,j)=>{function tt(r,e,t,n){var a=-1,o=r==null?0:r.length;for(n&&o&&(t=r[++a]);++a<o;)t=e(t,r[a],a,r);return t}j.exports=tt});var N=i((ka,I)=>{function it(r){return function(e){return r==null?void 0:r[e]}}I.exports=it});var _=i((Ma,E)=>{var nt=N(),at={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},ot=nt(at);E.exports=ot});var V=i((ja,L)=>{var st=typeof global=="object"&&global&&global.Object===Object&&global;L.exports=st});var U=i((Oa,F)=>{var ut=V(),dt=typeof self=="object"&&self&&self.Object===Object&&self,lt=ut||dt||Function("return this")();F.exports=lt});var x=i((Ia,D)=>{var ct=U(),mt=ct.Symbol;D.exports=mt});var G=i((Na,H)=>{function ft(r,e){for(var t=-1,n=r==null?0:r.length,a=Array(n);++t<n;)a[t]=e(r[t],t,r);return a}H.exports=ft});var B=i((Ea,z)=>{var ht=Array.isArray;z.exports=ht});var $=i((_a,J)=>{var W=x(),Z=Object.prototype,pt=Z.hasOwnProperty,gt=Z.toString,f=W?W.toStringTag:void 0;function xt(r){var e=pt.call(r,f),t=r[f];try{r[f]=void 0;var n=!0}catch(o){}var a=gt.call(r);return n&&(e?r[f]=t:delete r[f]),a}J.exports=xt});var X=i((La,Y)=>{var bt=Object.prototype,wt=bt.toString;function Tt(r){return wt.call(r)}Y.exports=Tt});var y=i((Va,rr)=>{var K=x(),yt=$(),vt=X(),Pt="[object Null]",Rt="[object Undefined]",Q=K?K.toStringTag:void 0;function Ct(r){return r==null?r===void 0?Rt:Pt:Q&&Q in Object(r)?yt(r):vt(r)}rr.exports=Ct});var tr=i((Fa,er)=>{function St(r){return r!=null&&typeof r=="object"}er.exports=St});var v=i((Ua,ir)=>{var qt=y(),At=tr(),kt="[object Symbol]";function Mt(r){return typeof r=="symbol"||At(r)&&qt(r)==kt}ir.exports=Mt});var dr=i((Da,ur)=>{var nr=x(),jt=G(),Ot=B(),It=v(),Nt=1/0,ar=nr?nr.prototype:void 0,or=ar?ar.toString:void 0;function sr(r){if(typeof r=="string")return r;if(Ot(r))return jt(r,sr)+"";if(It(r))return or?or.call(r):"";var e=r+"";return e=="0"&&1/r==-Nt?"-0":e}ur.exports=sr});var h=i((Ha,lr)=>{var Et=dr();function _t(r){return r==null?"":Et(r)}lr.exports=_t});var mr=i((Ga,cr)=>{var Lt=_(),Vt=h(),Ft=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ut="\\u0300-\\u036f",Dt="\\ufe20-\\ufe2f",Ht="\\u20d0-\\u20ff",Gt=Ut+Dt+Ht,zt="["+Gt+"]",Bt=RegExp(zt,"g");function Wt(r){return r=Vt(r),r&&r.replace(Ft,Lt).replace(Bt,"")}cr.exports=Wt});var hr=i((za,fr)=>{var Zt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Jt(r){return r.match(Zt)||[]}fr.exports=Jt});var gr=i((Ba,pr)=>{var $t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Yt(r){return $t.test(r)}pr.exports=Yt});var Er=i((Wa,Nr)=>{var xr="\\ud800-\\udfff",Xt="\\u0300-\\u036f",Kt="\\ufe20-\\ufe2f",Qt="\\u20d0-\\u20ff",ri=Xt+Kt+Qt,br="\\u2700-\\u27bf",wr="a-z\\xdf-\\xf6\\xf8-\\xff",ei="\\xac\\xb1\\xd7\\xf7",ti="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ii="\\u2000-\\u206f",ni=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Tr="A-Z\\xc0-\\xd6\\xd8-\\xde",ai="\\ufe0e\\ufe0f",yr=ei+ti+ii+ni,vr="['\u2019]",Pr="["+yr+"]",oi="["+ri+"]",Rr="\\d+",si="["+br+"]",Cr="["+wr+"]",Sr="[^"+xr+yr+Rr+br+wr+Tr+"]",ui="\\ud83c[\\udffb-\\udfff]",di="(?:"+oi+"|"+ui+")",li="[^"+xr+"]",qr="(?:\\ud83c[\\udde6-\\uddff]){2}",Ar="[\\ud800-\\udbff][\\udc00-\\udfff]",m="["+Tr+"]",ci="\\u200d",kr="(?:"+Cr+"|"+Sr+")",mi="(?:"+m+"|"+Sr+")",Mr="(?:"+vr+"(?:d|ll|m|re|s|t|ve))?",jr="(?:"+vr+"(?:D|LL|M|RE|S|T|VE))?",Or=di+"?",Ir="["+ai+"]?",fi="(?:"+ci+"(?:"+[li,qr,Ar].join("|")+")"+Ir+Or+")*",hi="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",pi="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",gi=Ir+Or+fi,xi="(?:"+[si,qr,Ar].join("|")+")"+gi,bi=RegExp([m+"?"+Cr+"+"+Mr+"(?="+[Pr,m,"$"].join("|")+")",mi+"+"+jr+"(?="+[Pr,m+kr,"$"].join("|")+")",m+"?"+kr+"+"+Mr,m+"+"+jr,pi,hi,Rr,xi].join("|"),"g");function wi(r){return r.match(bi)||[]}Nr.exports=wi});var Lr=i((Za,_r)=>{var Ti=hr(),yi=gr(),vi=h(),Pi=Er();function Ri(r,e,t){return r=vi(r),e=t?void 0:e,e===void 0?yi(r)?Pi(r):Ti(r):r.match(e)||[]}_r.exports=Ri});var Fr=i((Ja,Vr)=>{var Ci=O(),Si=mr(),qi=Lr(),Ai="['\u2019]",ki=RegExp(Ai,"g");function Mi(r){return function(e){return Ci(qi(Si(e).replace(ki,"")),r,"")}}Vr.exports=Mi});var Dr=i(($a,Ur)=>{function ji(r,e,t){var n=-1,a=r.length;e<0&&(e=-e>a?0:a+e),t=t>a?a:t,t<0&&(t+=a),a=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(a);++n<a;)o[n]=r[n+e];return o}Ur.exports=ji});var Gr=i((Ya,Hr)=>{var Oi=Dr();function Ii(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:Oi(r,e,t)}Hr.exports=Ii});var P=i((Xa,zr)=>{var Ni="\\ud800-\\udfff",Ei="\\u0300-\\u036f",_i="\\ufe20-\\ufe2f",Li="\\u20d0-\\u20ff",Vi=Ei+_i+Li,Fi="\\ufe0e\\ufe0f",Ui="\\u200d",Di=RegExp("["+Ui+Ni+Vi+Fi+"]");function Hi(r){return Di.test(r)}zr.exports=Hi});var Wr=i((Ka,Br)=>{function Gi(r){return r.split("")}Br.exports=Gi});var re=i((Qa,Qr)=>{var Zr="\\ud800-\\udfff",zi="\\u0300-\\u036f",Bi="\\ufe20-\\ufe2f",Wi="\\u20d0-\\u20ff",Zi=zi+Bi+Wi,Ji="\\ufe0e\\ufe0f",$i="["+Zr+"]",R="["+Zi+"]",C="\\ud83c[\\udffb-\\udfff]",Yi="(?:"+R+"|"+C+")",Jr="[^"+Zr+"]",$r="(?:\\ud83c[\\udde6-\\uddff]){2}",Yr="[\\ud800-\\udbff][\\udc00-\\udfff]",Xi="\\u200d",Xr=Yi+"?",Kr="["+Ji+"]?",Ki="(?:"+Xi+"(?:"+[Jr,$r,Yr].join("|")+")"+Kr+Xr+")*",Qi=Kr+Xr+Ki,rn="(?:"+[Jr+R+"?",R,$r,Yr,$i].join("|")+")",en=RegExp(C+"(?="+C+")|"+rn+Qi,"g");function tn(r){return r.match(en)||[]}Qr.exports=tn});var te=i((ro,ee)=>{var nn=Wr(),an=P(),on=re();function sn(r){return an(r)?on(r):nn(r)}ee.exports=sn});var ne=i((eo,ie)=>{var un=Gr(),dn=P(),ln=te(),cn=h();function mn(r){return function(e){e=cn(e);var t=dn(e)?ln(e):void 0,n=t?t[0]:e.charAt(0),a=t?un(t,1).join(""):e.slice(1);return n[r]()+a}}ie.exports=mn});var oe=i((to,ae)=>{var fn=ne(),hn=fn("toUpperCase");ae.exports=hn});var ue=i((io,se)=>{var pn=Fr(),gn=oe(),xn=pn(function(r,e,t){return r+(t?" ":"")+gn(e)});se.exports=xn});var he=i((so,fe)=>{var Nn=9007199254740991,En=Math.floor;function _n(r,e){var t="";if(!r||e<1||e>Nn)return t;do e%2&&(t+=r),e=En(e/2),e&&(r+=r);while(e);return t}fe.exports=_n});var ge=i((uo,pe)=>{function Ln(r,e){return r===e||r!==r&&e!==e}pe.exports=Ln});var w=i((lo,xe)=>{function Vn(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}xe.exports=Vn});var we=i((co,be)=>{var Fn=y(),Un=w(),Dn="[object AsyncFunction]",Hn="[object Function]",Gn="[object GeneratorFunction]",zn="[object Proxy]";function Bn(r){if(!Un(r))return!1;var e=Fn(r);return e==Hn||e==Gn||e==Dn||e==zn}be.exports=Bn});var ye=i((mo,Te)=>{var Wn=9007199254740991;function Zn(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=Wn}Te.exports=Zn});var Pe=i((fo,ve)=>{var Jn=we(),$n=ye();function Yn(r){return r!=null&&$n(r.length)&&!Jn(r)}ve.exports=Yn});var Ce=i((ho,Re)=>{var Xn=9007199254740991,Kn=/^(?:0|[1-9]\d*)$/;function Qn(r,e){var t=typeof r;return e=e??Xn,!!e&&(t=="number"||t!="symbol"&&Kn.test(r))&&r>-1&&r%1==0&&r<e}Re.exports=Qn});var qe=i((po,Se)=>{var ra=ge(),ea=Pe(),ta=Ce(),ia=w();function na(r,e,t){if(!ia(t))return!1;var n=typeof e;return(n=="number"?ea(t)&&ta(e,t.length):n=="string"&&e in t)?ra(t[e],r):!1}Se.exports=na});var ke=i((go,Ae)=>{var aa=/\s/;function oa(r){for(var e=r.length;e--&&aa.test(r.charAt(e)););return e}Ae.exports=oa});var je=i((xo,Me)=>{var sa=ke(),ua=/^\s+/;function da(r){return r&&r.slice(0,sa(r)+1).replace(ua,"")}Me.exports=da});var Ee=i((bo,Ne)=>{var la=je(),Oe=w(),ca=v(),Ie=0/0,ma=/^[-+]0x[0-9a-f]+$/i,fa=/^0b[01]+$/i,ha=/^0o[0-7]+$/i,pa=parseInt;function ga(r){if(typeof r=="number")return r;if(ca(r))return Ie;if(Oe(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=Oe(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=la(r);var t=fa.test(r);return t||ha.test(r)?pa(r.slice(2),t?2:8):ma.test(r)?Ie:+r}Ne.exports=ga});var Ve=i((wo,Le)=>{var xa=Ee(),_e=1/0,ba=17976931348623157e292;function wa(r){if(!r)return r===0?r:0;if(r=xa(r),r===_e||r===-_e){var e=r<0?-1:1;return e*ba}return r===r?r:0}Le.exports=wa});var Ue=i((To,Fe)=>{var Ta=Ve();function ya(r){var e=Ta(r),t=e%1;return e===e?t?e-t:e:0}Fe.exports=ya});var He=i((yo,De)=>{var va=he(),Pa=qe(),Ra=Ue(),Ca=h();function Sa(r,e,t){return(t?Pa(r,e,t):e===void 0)?e=1:e=Ra(e),va(Ca(r),e)}De.exports=Sa});var le=M(ue());var bn=`
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
    `,wn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,Tn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,de=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,yn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,vn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Pn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Rn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Cn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,Sn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,qn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,An=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,kn={Glide:bn,"Machine Learning":qn,General:de,Array:yn,Number:Tn,Encoding:An,Text:Sn,"Data & APIs":Cn,Image:vn,Fun:Pn,"Date & Time":Rn,Code:wn};function S({icon:r,category:e}){var t;return(t=r!=null?r:kn[e])!=null?t:de}function ce(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(ce):r}function Mn(r,e){return T(this,null,function*(){var u;let{data:{key:t,params:n}}=r,a,o;try{a=yield e(...n)}catch(s){a=void 0;try{o=s.toString()}catch(c){o="Exception can't be stringified."}}let d={key:t};a!==void 0&&(a=ce(a),d.result={type:"string",value:a}),o!==void 0&&(d.error=o),((u=r.source)==null?void 0:u.postMessage).call(u,d,"*")})}function jn(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Mn(e,r.run)),g(l({},r),{json:JSON.stringify(On(r),null,2)})}function On(r){let{name:e,category:t,released:n,description:a,author:o,result:d,params:u,about:s,video:c}=r,ze=S(r);return{name:e,category:t,released:n,description:a,author:o,result:d,about:s,icon:ze,video:c,params:Object.entries(u).map(([Be,We])=>l({name:Be},We))}}var In={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:void 0,tests:[],run(){return T(this,null,function*(){})}},b=class{constructor(e={},t=[]){this.definition=l(l({},In),e),this.requiredParams=[...t]}with(e,t=[]){return new b(l(l({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){let{icon:t}=this.definition;return this.with({category:e,icon:S({icon:t,category:e})})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:n=[]}=this.definition;return this.with({tests:[...n,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:n=[]}=this.definition;return this.with({tests:[...n,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,n){return n===void 0&&(n=(0,le.default)(t)),this.with({params:g(l({},this.definition.params),{[t]:{type:e,displayName:n}})})}withRequiredParam(e,t,n){return this.withParam(e,t,n).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withBooleanParam(e,t){return this.withParam("boolean",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredURIParam(e,t){return this.withRequiredParam("uri",e,t)}withRequiredBooleanParam(e,t){return this.withRequiredParam("boolean",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,n=this.requiredParams,a=Object.keys(t);function o(...d){let u={};if(d.forEach(({value:s},c)=>{u[a[c]]=s}),!n.some(s=>u[s]===void 0))return e(u)}return jn(g(l({},this.definition),{run:o}))}};function me(r){return new b({name:r})}var Ge=M(He()),Po=me("Repeat Text").withCategory("Text").withReleased("direct").withDescription("Repeats the given string n times.").withAuthor("lodash Project","lodash.com").withRequiredStringParam("text").withRequiredNumberParam("n","Repetitions").withStringResult().withTest({text:"*",n:8},"********").run(({text:r,n:e})=>(0,Ge.default)(r,e));})();
//# sourceMappingURL=index.js.map

(()=>{var et=Object.create;var p=Object.defineProperty,tt=Object.defineProperties,it=Object.getOwnPropertyDescriptor,nt=Object.getOwnPropertyDescriptors,at=Object.getOwnPropertyNames,j=Object.getOwnPropertySymbols,ot=Object.getPrototypeOf,O=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable;var I=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))O.call(e,t)&&I(r,t,e[t]);if(j)for(var t of j(e))st.call(e,t)&&I(r,t,e[t]);return r},b=(r,e)=>tt(r,nt(e)),ut=r=>p(r,"__esModule",{value:!0});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var dt=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of at(e))!O.call(r,i)&&i!=="default"&&p(r,i,{get:()=>e[i],enumerable:!(t=it(e,i))||t.enumerable});return r},N=r=>dt(ut(p(r!=null?et(ot(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var T=(r,e,t)=>new Promise((i,a)=>{var o=s=>{try{u(t.next(s))}catch(c){a(c)}},d=s=>{try{u(t.throw(s))}catch(c){a(c)}},u=s=>s.done?i(s.value):Promise.resolve(s.value).then(o,d);u((t=t.apply(r,e)).next())});var E=n((Da,_)=>{function lt(r,e,t,i){var a=-1,o=r==null?0:r.length;for(i&&o&&(t=r[++a]);++a<o;)t=e(t,r[a],a,r);return t}_.exports=lt});var V=n((Ha,U)=>{function ct(r){return function(e){return r==null?void 0:r[e]}}U.exports=ct});var L=n((Fa,z)=>{var ft=V(),mt={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},ht=ft(mt);z.exports=ht});var H=n((Ba,D)=>{var gt=typeof global=="object"&&global&&global.Object===Object&&global;D.exports=gt});var B=n((Ga,F)=>{var pt=H(),bt=typeof self=="object"&&self&&self.Object===Object&&self,xt=pt||bt||Function("return this")();F.exports=xt});var x=n((Wa,G)=>{var wt=B(),Tt=wt.Symbol;G.exports=Tt});var Z=n((Za,W)=>{function vt(r,e){for(var t=-1,i=r==null?0:r.length,a=Array(i);++t<i;)a[t]=e(r[t],t,r);return a}W.exports=vt});var $=n((Ja,J)=>{var yt=Array.isArray;J.exports=yt});var Q=n(($a,X)=>{var Y=x(),K=Object.prototype,Pt=K.hasOwnProperty,Rt=K.toString,m=Y?Y.toStringTag:void 0;function Ct(r){var e=Pt.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(o){}var a=Rt.call(r);return i&&(e?r[m]=t:delete r[m]),a}X.exports=Ct});var er=n((Ya,rr)=>{var St=Object.prototype,qt=St.toString;function Mt(r){return qt.call(r)}rr.exports=Mt});var ar=n((Ka,nr)=>{var tr=x(),kt=Q(),At=er(),jt="[object Null]",Ot="[object Undefined]",ir=tr?tr.toStringTag:void 0;function It(r){return r==null?r===void 0?Ot:jt:ir&&ir in Object(r)?kt(r):At(r)}nr.exports=It});var sr=n((Xa,or)=>{function Nt(r){return r!=null&&typeof r=="object"}or.exports=Nt});var v=n((Qa,ur)=>{var _t=ar(),Et=sr(),Ut="[object Symbol]";function Vt(r){return typeof r=="symbol"||Et(r)&&_t(r)==Ut}ur.exports=Vt});var y=n((ro,mr)=>{var dr=x(),zt=Z(),Lt=$(),Dt=v(),Ht=1/0,lr=dr?dr.prototype:void 0,cr=lr?lr.toString:void 0;function fr(r){if(typeof r=="string")return r;if(Lt(r))return zt(r,fr)+"";if(Dt(r))return cr?cr.call(r):"";var e=r+"";return e=="0"&&1/r==-Ht?"-0":e}mr.exports=fr});var h=n((eo,hr)=>{var Ft=y();function Bt(r){return r==null?"":Ft(r)}hr.exports=Bt});var pr=n((to,gr)=>{var Gt=L(),Wt=h(),Zt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Jt="\\u0300-\\u036f",$t="\\ufe20-\\ufe2f",Yt="\\u20d0-\\u20ff",Kt=Jt+$t+Yt,Xt="["+Kt+"]",Qt=RegExp(Xt,"g");function ri(r){return r=Wt(r),r&&r.replace(Zt,Gt).replace(Qt,"")}gr.exports=ri});var xr=n((io,br)=>{var ei=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ti(r){return r.match(ei)||[]}br.exports=ti});var Tr=n((no,wr)=>{var ii=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ni(r){return ii.test(r)}wr.exports=ni});var zr=n((ao,Vr)=>{var vr="\\ud800-\\udfff",ai="\\u0300-\\u036f",oi="\\ufe20-\\ufe2f",si="\\u20d0-\\u20ff",ui=ai+oi+si,yr="\\u2700-\\u27bf",Pr="a-z\\xdf-\\xf6\\xf8-\\xff",di="\\xac\\xb1\\xd7\\xf7",li="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ci="\\u2000-\\u206f",fi=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Rr="A-Z\\xc0-\\xd6\\xd8-\\xde",mi="\\ufe0e\\ufe0f",Cr=di+li+ci+fi,Sr="['\u2019]",qr="["+Cr+"]",hi="["+ui+"]",Mr="\\d+",gi="["+yr+"]",kr="["+Pr+"]",Ar="[^"+vr+Cr+Mr+yr+Pr+Rr+"]",pi="\\ud83c[\\udffb-\\udfff]",bi="(?:"+hi+"|"+pi+")",xi="[^"+vr+"]",jr="(?:\\ud83c[\\udde6-\\uddff]){2}",Or="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+Rr+"]",wi="\\u200d",Ir="(?:"+kr+"|"+Ar+")",Ti="(?:"+f+"|"+Ar+")",Nr="(?:"+Sr+"(?:d|ll|m|re|s|t|ve))?",_r="(?:"+Sr+"(?:D|LL|M|RE|S|T|VE))?",Er=bi+"?",Ur="["+mi+"]?",vi="(?:"+wi+"(?:"+[xi,jr,Or].join("|")+")"+Ur+Er+")*",yi="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Pi="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ri=Ur+Er+vi,Ci="(?:"+[gi,jr,Or].join("|")+")"+Ri,Si=RegExp([f+"?"+kr+"+"+Nr+"(?="+[qr,f,"$"].join("|")+")",Ti+"+"+_r+"(?="+[qr,f+Ir,"$"].join("|")+")",f+"?"+Ir+"+"+Nr,f+"+"+_r,Pi,yi,Mr,Ci].join("|"),"g");function qi(r){return r.match(Si)||[]}Vr.exports=qi});var Dr=n((oo,Lr)=>{var Mi=xr(),ki=Tr(),Ai=h(),ji=zr();function Oi(r,e,t){return r=Ai(r),e=t?void 0:e,e===void 0?ki(r)?ji(r):Mi(r):r.match(e)||[]}Lr.exports=Oi});var Fr=n((so,Hr)=>{var Ii=E(),Ni=pr(),_i=Dr(),Ei="['\u2019]",Ui=RegExp(Ei,"g");function Vi(r){return function(e){return Ii(_i(Ni(e).replace(Ui,"")),r,"")}}Hr.exports=Vi});var Gr=n((uo,Br)=>{function zi(r,e,t){var i=-1,a=r.length;e<0&&(e=-e>a?0:a+e),t=t>a?a:t,t<0&&(t+=a),a=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(a);++i<a;)o[i]=r[i+e];return o}Br.exports=zi});var P=n((lo,Wr)=>{var Li=Gr();function Di(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:Li(r,e,t)}Wr.exports=Di});var g=n((co,Zr)=>{var Hi="\\ud800-\\udfff",Fi="\\u0300-\\u036f",Bi="\\ufe20-\\ufe2f",Gi="\\u20d0-\\u20ff",Wi=Fi+Bi+Gi,Zi="\\ufe0e\\ufe0f",Ji="\\u200d",$i=RegExp("["+Ji+Hi+Wi+Zi+"]");function Yi(r){return $i.test(r)}Zr.exports=Yi});var $r=n((fo,Jr)=>{function Ki(r){return r.split("")}Jr.exports=Ki});var ie=n((mo,te)=>{var Yr="\\ud800-\\udfff",Xi="\\u0300-\\u036f",Qi="\\ufe20-\\ufe2f",rn="\\u20d0-\\u20ff",en=Xi+Qi+rn,tn="\\ufe0e\\ufe0f",nn="["+Yr+"]",R="["+en+"]",C="\\ud83c[\\udffb-\\udfff]",an="(?:"+R+"|"+C+")",Kr="[^"+Yr+"]",Xr="(?:\\ud83c[\\udde6-\\uddff]){2}",Qr="[\\ud800-\\udbff][\\udc00-\\udfff]",on="\\u200d",re=an+"?",ee="["+tn+"]?",sn="(?:"+on+"(?:"+[Kr,Xr,Qr].join("|")+")"+ee+re+")*",un=ee+re+sn,dn="(?:"+[Kr+R+"?",R,Xr,Qr,nn].join("|")+")",ln=RegExp(C+"(?="+C+")|"+dn+un,"g");function cn(r){return r.match(ln)||[]}te.exports=cn});var S=n((ho,ne)=>{var fn=$r(),mn=g(),hn=ie();function gn(r){return mn(r)?hn(r):fn(r)}ne.exports=gn});var oe=n((go,ae)=>{var pn=P(),bn=g(),xn=S(),wn=h();function Tn(r){return function(e){e=wn(e);var t=bn(e)?xn(e):void 0,i=t?t[0]:e.charAt(0),a=t?pn(t,1).join(""):e.slice(1);return i[r]()+a}}ae.exports=Tn});var ue=n((po,se)=>{var vn=oe(),yn=vn("toUpperCase");se.exports=yn});var le=n((bo,de)=>{var Pn=Fr(),Rn=ue(),Cn=Pn(function(r,e,t){return r+(t?" ":"")+Rn(e)});de.exports=Cn});var pe=n((vo,ge)=>{var Hn=9007199254740991,Fn=Math.floor;function Bn(r,e){var t="";if(!r||e<1||e>Hn)return t;do e%2&&(t+=r),e=Fn(e/2),e&&(r+=r);while(e);return t}ge.exports=Bn});var xe=n((yo,be)=>{function Gn(r){return function(e){return e==null?void 0:e[r]}}be.exports=Gn});var Te=n((Po,we)=>{var Wn=xe(),Zn=Wn("length");we.exports=Zn});var ke=n((Ro,Me)=>{var ve="\\ud800-\\udfff",Jn="\\u0300-\\u036f",$n="\\ufe20-\\ufe2f",Yn="\\u20d0-\\u20ff",Kn=Jn+$n+Yn,Xn="\\ufe0e\\ufe0f",Qn="["+ve+"]",M="["+Kn+"]",k="\\ud83c[\\udffb-\\udfff]",ra="(?:"+M+"|"+k+")",ye="[^"+ve+"]",Pe="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",ea="\\u200d",Ce=ra+"?",Se="["+Xn+"]?",ta="(?:"+ea+"(?:"+[ye,Pe,Re].join("|")+")"+Se+Ce+")*",ia=Se+Ce+ta,na="(?:"+[ye+M+"?",M,Pe,Re,Qn].join("|")+")",qe=RegExp(k+"(?="+k+")|"+na+ia,"g");function aa(r){for(var e=qe.lastIndex=0;qe.test(r);)++e;return e}Me.exports=aa});var A=n((Co,Ae)=>{var oa=Te(),sa=g(),ua=ke();function da(r){return sa(r)?ua(r):oa(r)}Ae.exports=da});var Ie=n((So,Oe)=>{var je=pe(),la=y(),ca=P(),fa=g(),ma=A(),ha=S(),ga=Math.ceil;function pa(r,e){e=e===void 0?" ":la(e);var t=e.length;if(t<2)return t?je(e,r):e;var i=je(e,ga(r/ma(e)));return fa(e)?ca(ha(i),0,r).join(""):i.slice(0,r)}Oe.exports=pa});var _e=n((qo,Ne)=>{var ba=/\s/;function xa(r){for(var e=r.length;e--&&ba.test(r.charAt(e)););return e}Ne.exports=xa});var Ue=n((Mo,Ee)=>{var wa=_e(),Ta=/^\s+/;function va(r){return r&&r.slice(0,wa(r)+1).replace(Ta,"")}Ee.exports=va});var ze=n((ko,Ve)=>{function ya(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}Ve.exports=ya});var Fe=n((Ao,He)=>{var Pa=Ue(),Le=ze(),Ra=v(),De=0/0,Ca=/^[-+]0x[0-9a-f]+$/i,Sa=/^0b[01]+$/i,qa=/^0o[0-7]+$/i,Ma=parseInt;function ka(r){if(typeof r=="number")return r;if(Ra(r))return De;if(Le(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=Le(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=Pa(r);var t=Sa.test(r);return t||qa.test(r)?Ma(r.slice(2),t?2:8):Ca.test(r)?De:+r}He.exports=ka});var We=n((jo,Ge)=>{var Aa=Fe(),Be=1/0,ja=17976931348623157e292;function Oa(r){if(!r)return r===0?r:0;if(r=Aa(r),r===Be||r===-Be){var e=r<0?-1:1;return e*ja}return r===r?r:0}Ge.exports=Oa});var Je=n((Oo,Ze)=>{var Ia=We();function Na(r){var e=Ia(r),t=e%1;return e===e?t?e-t:e:0}Ze.exports=Na});var Ye=n((Io,$e)=>{var _a=Ie(),Ea=A(),Ua=Je(),Va=h();function za(r,e,t){r=Va(r),e=Ua(e);var i=e?Ea(r):0;return e&&i<e?r+_a(e-i,t):r}$e.exports=za});var fe=N(le());var Sn=`
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
    `,qn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,Mn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,ce=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,kn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,An=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,jn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,On=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,In=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,Nn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,_n=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,En=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,Un={Glide:Sn,"Machine Learning":_n,General:ce,Array:kn,Number:Mn,Encoding:En,Text:Nn,"Data & APIs":In,Image:An,Fun:jn,"Date & Time":On,Code:qn};function q({icon:r,category:e}){var t;return(t=r!=null?r:Un[e])!=null?t:ce}function me(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(me):r}function Vn(r,e){return T(this,null,function*(){var u;let{data:{key:t,params:i}}=r,a,o;try{a=yield e(...i)}catch(s){a=void 0;try{o=s.toString()}catch(c){o="Exception can't be stringified."}}let d={key:t};a!==void 0&&(a=me(a),d.result={type:"string",value:a}),o!==void 0&&(d.error=o),((u=r.source)==null?void 0:u.postMessage).call(u,d,"*")})}function zn(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Vn(e,r.run)),b(l({},r),{json:JSON.stringify(Ln(r),null,2)})}function Ln(r){let{name:e,category:t,released:i,description:a,author:o,result:d,params:u,about:s,video:c}=r,Xe=q(r);return{name:e,category:t,released:i,description:a,author:o,result:d,about:s,icon:Xe,video:c,params:Object.entries(u).map(([Qe,rt])=>l({name:Qe},rt))}}var Dn={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:void 0,tests:[],run(){return T(this,null,function*(){})}},w=class{constructor(e={},t=[]){this.definition=l(l({},Dn),e),this.requiredParams=[...t]}with(e,t=[]){return new w(l(l({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){let{icon:t}=this.definition;return this.with({category:e,icon:q({icon:t,category:e})})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,fe.default)(t)),this.with({params:b(l({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withBooleanParam(e,t){return this.withParam("boolean",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredURIParam(e,t){return this.withRequiredParam("uri",e,t)}withRequiredBooleanParam(e,t){return this.withRequiredParam("boolean",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,a=Object.keys(t);function o(...d){let u={};if(d.forEach(({value:s},c)=>{u[a[c]]=s}),!i.some(s=>u[s]===void 0))return e(u)}return zn(b(l({},this.definition),{run:o}))}};function he(r){return new w({name:r})}var Ke=N(Ye()),_o=he("Pad Text at End").withCategory("Text").withReleased("direct").withDescription("Pads string on the right side if it's shorter than length. Padding characters are truncated if they exceed length.").withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withNumberParam("length").withStringParam("chars","Padding").withTest({text:"abc",length:8},"abc     ").run(({text:r,length:e,chars:t})=>r===void 0?void 0:(0,Ke.default)(r,e,t));})();
//# sourceMappingURL=index.js.map

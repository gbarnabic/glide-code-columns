var mr=Object.create;var c=Object.defineProperty,cr=Object.defineProperties,gr=Object.getOwnPropertyDescriptor,hr=Object.getOwnPropertyDescriptors,fr=Object.getOwnPropertyNames,T=Object.getOwnPropertySymbols,pr=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty,br=Object.prototype.propertyIsEnumerable;var C=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))y.call(r,t)&&C(e,t,r[t]);if(T)for(var t of T(r))br.call(r,t)&&C(e,t,r[t]);return e},P=(e,r)=>cr(e,hr(r)),xr=e=>c(e,"__esModule",{value:!0});var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var wr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of fr(r))!y.call(e,n)&&n!=="default"&&c(e,n,{get:()=>r[n],enumerable:!(t=gr(r,n))||t.enumerable});return e},vr=e=>wr(xr(c(e!=null?mr(pr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var b=(e,r,t)=>new Promise((n,a)=>{var u=o=>{try{l(t.next(o))}catch(d){a(d)}},f=o=>{try{l(t.throw(o))}catch(d){a(d)}},l=o=>o.done?n(o.value):Promise.resolve(o.value).then(u,f);l((t=t.apply(e,r)).next())});var S=i((en,R)=>{function Tr(e,r,t,n){var a=-1,u=e==null?0:e.length;for(n&&u&&(t=e[++a]);++a<u;)t=r(t,e[a],a,e);return t}R.exports=Tr});var M=i((rn,k)=>{function yr(e){return function(r){return e==null?void 0:e[r]}}k.exports=yr});var q=i((tn,A)=>{var Cr=M(),Pr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Rr=Cr(Pr);A.exports=Rr});var O=i((nn,j)=>{var Sr=typeof global=="object"&&global&&global.Object===Object&&global;j.exports=Sr});var L=i((an,V)=>{var kr=O(),Mr=typeof self=="object"&&self&&self.Object===Object&&self,Ar=kr||Mr||Function("return this")();V.exports=Ar});var g=i((un,U)=>{var qr=L(),jr=qr.Symbol;U.exports=jr});var D=i((on,N)=>{function Or(e,r){for(var t=-1,n=e==null?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a}N.exports=Or});var _=i((sn,I)=>{var Vr=Array.isArray;I.exports=Vr});var F=i((ln,z)=>{var E=g(),H=Object.prototype,Lr=H.hasOwnProperty,Ur=H.toString,m=E?E.toStringTag:void 0;function Nr(e){var r=Lr.call(e,m),t=e[m];try{e[m]=void 0;var n=!0}catch(u){}var a=Ur.call(e);return n&&(r?e[m]=t:delete e[m]),a}z.exports=Nr});var G=i((dn,B)=>{var Dr=Object.prototype,Ir=Dr.toString;function _r(e){return Ir.call(e)}B.exports=_r});var Y=i((mn,J)=>{var W=g(),Er=F(),Hr=G(),zr="[object Null]",Fr="[object Undefined]",Z=W?W.toStringTag:void 0;function Br(e){return e==null?e===void 0?Fr:zr:Z&&Z in Object(e)?Er(e):Hr(e)}J.exports=Br});var K=i((cn,$)=>{function Gr(e){return e!=null&&typeof e=="object"}$.exports=Gr});var X=i((gn,Q)=>{var Wr=Y(),Zr=K(),Jr="[object Symbol]";function Yr(e){return typeof e=="symbol"||Zr(e)&&Wr(e)==Jr}Q.exports=Yr});var ae=i((hn,ne)=>{var ee=g(),$r=D(),Kr=_(),Qr=X(),Xr=1/0,re=ee?ee.prototype:void 0,te=re?re.toString:void 0;function ie(e){if(typeof e=="string")return e;if(Kr(e))return $r(e,ie)+"";if(Qr(e))return te?te.call(e):"";var r=e+"";return r=="0"&&1/e==-Xr?"-0":r}ne.exports=ie});var h=i((fn,ue)=>{var et=ae();function rt(e){return e==null?"":et(e)}ue.exports=rt});var se=i((pn,oe)=>{var tt=q(),it=h(),nt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,at="\\u0300-\\u036f",ut="\\ufe20-\\ufe2f",ot="\\u20d0-\\u20ff",st=at+ut+ot,lt="["+st+"]",dt=RegExp(lt,"g");function mt(e){return e=it(e),e&&e.replace(nt,tt).replace(dt,"")}oe.exports=mt});var de=i((bn,le)=>{var ct=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function gt(e){return e.match(ct)||[]}le.exports=gt});var ce=i((xn,me)=>{var ht=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ft(e){return ht.test(e)}me.exports=ft});var je=i((wn,qe)=>{var ge="\\ud800-\\udfff",pt="\\u0300-\\u036f",bt="\\ufe20-\\ufe2f",xt="\\u20d0-\\u20ff",wt=pt+bt+xt,he="\\u2700-\\u27bf",fe="a-z\\xdf-\\xf6\\xf8-\\xff",vt="\\xac\\xb1\\xd7\\xf7",Tt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",yt="\\u2000-\\u206f",Ct=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",pe="A-Z\\xc0-\\xd6\\xd8-\\xde",Pt="\\ufe0e\\ufe0f",be=vt+Tt+yt+Ct,xe="['\u2019]",we="["+be+"]",Rt="["+wt+"]",ve="\\d+",St="["+he+"]",Te="["+fe+"]",ye="[^"+ge+be+ve+he+fe+pe+"]",kt="\\ud83c[\\udffb-\\udfff]",Mt="(?:"+Rt+"|"+kt+")",At="[^"+ge+"]",Ce="(?:\\ud83c[\\udde6-\\uddff]){2}",Pe="[\\ud800-\\udbff][\\udc00-\\udfff]",s="["+pe+"]",qt="\\u200d",Re="(?:"+Te+"|"+ye+")",jt="(?:"+s+"|"+ye+")",Se="(?:"+xe+"(?:d|ll|m|re|s|t|ve))?",ke="(?:"+xe+"(?:D|LL|M|RE|S|T|VE))?",Me=Mt+"?",Ae="["+Pt+"]?",Ot="(?:"+qt+"(?:"+[At,Ce,Pe].join("|")+")"+Ae+Me+")*",Vt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Lt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ut=Ae+Me+Ot,Nt="(?:"+[St,Ce,Pe].join("|")+")"+Ut,Dt=RegExp([s+"?"+Te+"+"+Se+"(?="+[we,s,"$"].join("|")+")",jt+"+"+ke+"(?="+[we,s+Re,"$"].join("|")+")",s+"?"+Re+"+"+Se,s+"+"+ke,Lt,Vt,ve,Nt].join("|"),"g");function It(e){return e.match(Dt)||[]}qe.exports=It});var Ve=i((vn,Oe)=>{var _t=de(),Et=ce(),Ht=h(),zt=je();function Ft(e,r,t){return e=Ht(e),r=t?void 0:r,r===void 0?Et(e)?zt(e):_t(e):e.match(r)||[]}Oe.exports=Ft});var Ue=i((Tn,Le)=>{var Bt=S(),Gt=se(),Wt=Ve(),Zt="['\u2019]",Jt=RegExp(Zt,"g");function Yt(e){return function(r){return Bt(Wt(Gt(r).replace(Jt,"")),e,"")}}Le.exports=Yt});var De=i((yn,Ne)=>{function $t(e,r,t){var n=-1,a=e.length;r<0&&(r=-r>a?0:a+r),t=t>a?a:t,t<0&&(t+=a),a=r>t?0:t-r>>>0,r>>>=0;for(var u=Array(a);++n<a;)u[n]=e[n+r];return u}Ne.exports=$t});var _e=i((Cn,Ie)=>{var Kt=De();function Qt(e,r,t){var n=e.length;return t=t===void 0?n:t,!r&&t>=n?e:Kt(e,r,t)}Ie.exports=Qt});var x=i((Pn,Ee)=>{var Xt="\\ud800-\\udfff",ei="\\u0300-\\u036f",ri="\\ufe20-\\ufe2f",ti="\\u20d0-\\u20ff",ii=ei+ri+ti,ni="\\ufe0e\\ufe0f",ai="\\u200d",ui=RegExp("["+ai+Xt+ii+ni+"]");function oi(e){return ui.test(e)}Ee.exports=oi});var ze=i((Rn,He)=>{function si(e){return e.split("")}He.exports=si});var $e=i((Sn,Ye)=>{var Fe="\\ud800-\\udfff",li="\\u0300-\\u036f",di="\\ufe20-\\ufe2f",mi="\\u20d0-\\u20ff",ci=li+di+mi,gi="\\ufe0e\\ufe0f",hi="["+Fe+"]",w="["+ci+"]",v="\\ud83c[\\udffb-\\udfff]",fi="(?:"+w+"|"+v+")",Be="[^"+Fe+"]",Ge="(?:\\ud83c[\\udde6-\\uddff]){2}",We="[\\ud800-\\udbff][\\udc00-\\udfff]",pi="\\u200d",Ze=fi+"?",Je="["+gi+"]?",bi="(?:"+pi+"(?:"+[Be,Ge,We].join("|")+")"+Je+Ze+")*",xi=Je+Ze+bi,wi="(?:"+[Be+w+"?",w,Ge,We,hi].join("|")+")",vi=RegExp(v+"(?="+v+")|"+wi+xi,"g");function Ti(e){return e.match(vi)||[]}Ye.exports=Ti});var Qe=i((kn,Ke)=>{var yi=ze(),Ci=x(),Pi=$e();function Ri(e){return Ci(e)?Pi(e):yi(e)}Ke.exports=Ri});var er=i((Mn,Xe)=>{var Si=_e(),ki=x(),Mi=Qe(),Ai=h();function qi(e){return function(r){r=Ai(r);var t=ki(r)?Mi(r):void 0,n=t?t[0]:r.charAt(0),a=t?Si(t,1).join(""):r.slice(1);return n[e]()+a}}Xe.exports=qi});var tr=i((An,rr)=>{var ji=er(),Oi=ji("toUpperCase");rr.exports=Oi});var nr=i((qn,ir)=>{var Vi=Ue(),Li=tr(),Ui=Vi(function(e,r,t){return e+(t?" ":"")+Li(r)});ir.exports=Ui});var Ji=vr(nr());var Ni=`
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
    `,Di=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,Ii=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,ar=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,_i=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,Ei=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Hi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,zi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Fi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,Bi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,Gi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,Wi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,Zi={Glide:Ni,"Machine Learning":Gi,General:ar,Array:_i,Number:Ii,Encoding:Wi,Text:Bi,"Data & APIs":Fi,Image:Ei,Fun:Hi,"Date & Time":zi,Code:Di};function ur({icon:e,category:r}){var t;return(t=e!=null?e:Zi[r])!=null?t:ar}function or(e){return P(p({},e),{json:JSON.stringify(Yi(e),null,2)})}function Yi(e){let{name:r,category:t,released:n,description:a,author:u,result:f,params:l,about:o,video:d}=e,sr=ur(e);return{name:r,category:t,released:n,description:a,author:u,result:f,about:o,icon:sr,video:d,params:Object.entries(l).map(([lr,dr])=>p({name:lr},dr))}}function $i(e){let r=e.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&\?]{10,12})/);return r==null?void 0:r[1]}function Ki(e){let r=$i(e);return r===void 0?void 0:`https://i.ytimg.com/vi/${r}/maxresdefault.jpg`}var Qi=e=>b(void 0,null,function*(){if(e.value!==void 0)return Ki(e.value.toString())}),Un=or({name:"YouTube Thumbnail",category:"Image",released:"direct",description:"Display video thumbnail images",author:"David Siegel <david@glideapps.com>",params:{videoUrl:{displayName:"Video URL",type:"uri"}},result:{type:"image-uri"},example:{videoUrl:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"},run:Qi,icon:`
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.5 14.4C47.5 14.4 47 11.1 45.6 9.59998C43.8 7.69998 41.7 7.69998 40.8 7.59998C34.1 7.09998 24 7.09998 24 7.09998C24 7.09998 13.9 7.09998 7.2 7.59998C6.3 7.69998 4.2 7.69998 2.4 9.59998C1 11.1 0.5 14.4 0.5 14.4C0.5 14.4 0 18.3 0 22.2V25.8C0 29.7 0.5 33.6 0.5 33.6C0.5 33.6 1 36.9 2.4 38.4C4.2 40.3 6.6 40.3 7.7 40.5C11.5 40.9 24 41 24 41C24 41 34.1 41 40.8 40.5C41.7 40.4 43.8 40.4 45.6 38.5C47 37 47.5 33.7 47.5 33.7C47.5 33.7 48 29.8 48 25.9V22.3C48 18.3 47.5 14.4 47.5 14.4ZM19 30.2V16.7L32 23.5L19 30.2Z" fill="currentColor"/>
</svg>
    `});export{Un as default};
//# sourceMappingURL=function.js.map

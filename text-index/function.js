var fr=Object.create;var m=Object.defineProperty,mr=Object.defineProperties,gr=Object.getOwnPropertyDescriptor,pr=Object.getOwnPropertyDescriptors,wr=Object.getOwnPropertyNames,P=Object.getOwnPropertySymbols,br=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty,xr=Object.prototype.propertyIsEnumerable;var C=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,h=(r,e)=>{for(var t in e||(e={}))k.call(e,t)&&C(r,t,e[t]);if(P)for(var t of P(e))xr.call(e,t)&&C(r,t,e[t]);return r},g=(r,e)=>mr(r,pr(e)),Tr=r=>m(r,"__esModule",{value:!0});var a=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var yr=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of wr(e))!k.call(r,n)&&n!=="default"&&m(r,n,{get:()=>e[n],enumerable:!(t=gr(e,n))||t.enumerable});return r},vr=r=>yr(Tr(m(r!=null?fr(br(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var R=(r,e,t)=>new Promise((n,i)=>{var s=o=>{try{d(t.next(o))}catch(l){i(l)}},u=o=>{try{d(t.throw(o))}catch(l){i(l)}},d=o=>o.done?n(o.value):Promise.resolve(o.value).then(s,u);d((t=t.apply(r,e)).next())});var M=a((ri,S)=>{function Pr(r,e,t,n){var i=-1,s=r==null?0:r.length;for(n&&s&&(t=r[++i]);++i<s;)t=e(t,r[i],i,r);return t}S.exports=Pr});var q=a((ti,A)=>{function kr(r){return function(e){return r==null?void 0:r[e]}}A.exports=kr});var O=a((ni,j)=>{var Cr=q(),Rr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Sr=Cr(Rr);j.exports=Sr});var V=a((ii,N)=>{var Mr=typeof global=="object"&&global&&global.Object===Object&&global;N.exports=Mr});var D=a((ai,I)=>{var Ar=V(),qr=typeof self=="object"&&self&&self.Object===Object&&self,jr=Ar||qr||Function("return this")();I.exports=jr});var p=a((si,L)=>{var Or=D(),Nr=Or.Symbol;L.exports=Nr});var _=a((oi,U)=>{function Vr(r,e){for(var t=-1,n=r==null?0:r.length,i=Array(n);++t<n;)i[t]=e(r[t],t,r);return i}U.exports=Vr});var H=a((ui,E)=>{var Ir=Array.isArray;E.exports=Ir});var F=a((di,G)=>{var z=p(),B=Object.prototype,Dr=B.hasOwnProperty,Lr=B.toString,f=z?z.toStringTag:void 0;function Ur(r){var e=Dr.call(r,f),t=r[f];try{r[f]=void 0;var n=!0}catch(s){}var i=Lr.call(r);return n&&(e?r[f]=t:delete r[f]),i}G.exports=Ur});var Z=a((hi,W)=>{var _r=Object.prototype,Er=_r.toString;function Hr(r){return Er.call(r)}W.exports=Hr});var K=a((li,$)=>{var J=p(),zr=F(),Br=Z(),Gr="[object Null]",Fr="[object Undefined]",Y=J?J.toStringTag:void 0;function Wr(r){return r==null?r===void 0?Fr:Gr:Y&&Y in Object(r)?zr(r):Br(r)}$.exports=Wr});var X=a((ci,Q)=>{function Zr(r){return r!=null&&typeof r=="object"}Q.exports=Zr});var re=a((fi,ee)=>{var Jr=K(),Yr=X(),$r="[object Symbol]";function Kr(r){return typeof r=="symbol"||Yr(r)&&Jr(r)==$r}ee.exports=Kr});var oe=a((mi,se)=>{var te=p(),Qr=_(),Xr=H(),et=re(),rt=1/0,ne=te?te.prototype:void 0,ie=ne?ne.toString:void 0;function ae(r){if(typeof r=="string")return r;if(Xr(r))return Qr(r,ae)+"";if(et(r))return ie?ie.call(r):"";var e=r+"";return e=="0"&&1/r==-rt?"-0":e}se.exports=ae});var w=a((gi,ue)=>{var tt=oe();function nt(r){return r==null?"":tt(r)}ue.exports=nt});var he=a((pi,de)=>{var it=O(),at=w(),st=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ot="\\u0300-\\u036f",ut="\\ufe20-\\ufe2f",dt="\\u20d0-\\u20ff",ht=ot+ut+dt,lt="["+ht+"]",ct=RegExp(lt,"g");function ft(r){return r=at(r),r&&r.replace(st,it).replace(ct,"")}de.exports=ft});var ce=a((wi,le)=>{var mt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function gt(r){return r.match(mt)||[]}le.exports=gt});var me=a((bi,fe)=>{var pt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function wt(r){return pt.test(r)}fe.exports=wt});var Ne=a((xi,Oe)=>{var ge="\\ud800-\\udfff",bt="\\u0300-\\u036f",xt="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",yt=bt+xt+Tt,pe="\\u2700-\\u27bf",we="a-z\\xdf-\\xf6\\xf8-\\xff",vt="\\xac\\xb1\\xd7\\xf7",Pt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",kt="\\u2000-\\u206f",Ct=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",be="A-Z\\xc0-\\xd6\\xd8-\\xde",Rt="\\ufe0e\\ufe0f",xe=vt+Pt+kt+Ct,Te="['\u2019]",ye="["+xe+"]",St="["+yt+"]",ve="\\d+",Mt="["+pe+"]",Pe="["+we+"]",ke="[^"+ge+xe+ve+pe+we+be+"]",At="\\ud83c[\\udffb-\\udfff]",qt="(?:"+St+"|"+At+")",jt="[^"+ge+"]",Ce="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+be+"]",Ot="\\u200d",Se="(?:"+Pe+"|"+ke+")",Nt="(?:"+c+"|"+ke+")",Me="(?:"+Te+"(?:d|ll|m|re|s|t|ve))?",Ae="(?:"+Te+"(?:D|LL|M|RE|S|T|VE))?",qe=qt+"?",je="["+Rt+"]?",Vt="(?:"+Ot+"(?:"+[jt,Ce,Re].join("|")+")"+je+qe+")*",It="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Dt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Lt=je+qe+Vt,Ut="(?:"+[Mt,Ce,Re].join("|")+")"+Lt,_t=RegExp([c+"?"+Pe+"+"+Me+"(?="+[ye,c,"$"].join("|")+")",Nt+"+"+Ae+"(?="+[ye,c+Se,"$"].join("|")+")",c+"?"+Se+"+"+Me,c+"+"+Ae,Dt,It,ve,Ut].join("|"),"g");function Et(r){return r.match(_t)||[]}Oe.exports=Et});var Ie=a((Ti,Ve)=>{var Ht=ce(),zt=me(),Bt=w(),Gt=Ne();function Ft(r,e,t){return r=Bt(r),e=t?void 0:e,e===void 0?zt(r)?Gt(r):Ht(r):r.match(e)||[]}Ve.exports=Ft});var Le=a((yi,De)=>{var Wt=M(),Zt=he(),Jt=Ie(),Yt="['\u2019]",$t=RegExp(Yt,"g");function Kt(r){return function(e){return Wt(Jt(Zt(e).replace($t,"")),r,"")}}De.exports=Kt});var _e=a((vi,Ue)=>{function Qt(r,e,t){var n=-1,i=r.length;e<0&&(e=-e>i?0:i+e),t=t>i?i:t,t<0&&(t+=i),i=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(i);++n<i;)s[n]=r[n+e];return s}Ue.exports=Qt});var He=a((Pi,Ee)=>{var Xt=_e();function en(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:Xt(r,e,t)}Ee.exports=en});var x=a((ki,ze)=>{var rn="\\ud800-\\udfff",tn="\\u0300-\\u036f",nn="\\ufe20-\\ufe2f",an="\\u20d0-\\u20ff",sn=tn+nn+an,on="\\ufe0e\\ufe0f",un="\\u200d",dn=RegExp("["+un+rn+sn+on+"]");function hn(r){return dn.test(r)}ze.exports=hn});var Ge=a((Ci,Be)=>{function ln(r){return r.split("")}Be.exports=ln});var Qe=a((Ri,Ke)=>{var Fe="\\ud800-\\udfff",cn="\\u0300-\\u036f",fn="\\ufe20-\\ufe2f",mn="\\u20d0-\\u20ff",gn=cn+fn+mn,pn="\\ufe0e\\ufe0f",wn="["+Fe+"]",T="["+gn+"]",y="\\ud83c[\\udffb-\\udfff]",bn="(?:"+T+"|"+y+")",We="[^"+Fe+"]",Ze="(?:\\ud83c[\\udde6-\\uddff]){2}",Je="[\\ud800-\\udbff][\\udc00-\\udfff]",xn="\\u200d",Ye=bn+"?",$e="["+pn+"]?",Tn="(?:"+xn+"(?:"+[We,Ze,Je].join("|")+")"+$e+Ye+")*",yn=$e+Ye+Tn,vn="(?:"+[We+T+"?",T,Ze,Je,wn].join("|")+")",Pn=RegExp(y+"(?="+y+")|"+vn+yn,"g");function kn(r){return r.match(Pn)||[]}Ke.exports=kn});var er=a((Si,Xe)=>{var Cn=Ge(),Rn=x(),Sn=Qe();function Mn(r){return Rn(r)?Sn(r):Cn(r)}Xe.exports=Mn});var tr=a((Mi,rr)=>{var An=He(),qn=x(),jn=er(),On=w();function Nn(r){return function(e){e=On(e);var t=qn(e)?jn(e):void 0,n=t?t[0]:e.charAt(0),i=t?An(t,1).join(""):e.slice(1);return n[r]()+i}}rr.exports=Nn});var ir=a((Ai,nr)=>{var Vn=tr(),In=Vn("toUpperCase");nr.exports=In});var sr=a((qi,ar)=>{var Dn=Le(),Ln=ir(),Un=Dn(function(r,e,t){return r+(t?" ":"")+Ln(e)});ar.exports=Un});var ur=vr(sr());var _n=`
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
    `,En=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,Hn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,or=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,zn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,Bn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Gn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Fn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Wn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,Zn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,Jn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,Yn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,$n={Glide:_n,"Machine Learning":Jn,General:or,Array:zn,Number:Hn,Encoding:Yn,Text:Zn,"Data & APIs":Wn,Image:Bn,Fun:Gn,"Date & Time":Fn,Code:En};function v({icon:r,category:e}){var t;return(t=r!=null?r:$n[e])!=null?t:or}function Kn(r){return g(h({},r),{json:JSON.stringify(Qn(r),null,2)})}function Qn(r){let{name:e,category:t,released:n,description:i,author:s,result:u,params:d,about:o,video:l}=r,hr=v(r);return{name:e,category:t,released:n,description:i,author:s,result:u,about:o,icon:hr,video:l,params:Object.entries(d).map(([lr,cr])=>h({name:lr},cr))}}var Xn={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:void 0,tests:[],run(){return R(this,null,function*(){})}},b=class{constructor(e={},t=[]){this.definition=h(h({},Xn),e),this.requiredParams=[...t]}with(e,t=[]){return new b(h(h({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){let{icon:t}=this.definition;return this.with({category:e,icon:v({icon:t,category:e})})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:n=[]}=this.definition;return this.with({tests:[...n,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:n=[]}=this.definition;return this.with({tests:[...n,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,n){return n===void 0&&(n=(0,ur.default)(t)),this.with({params:g(h({},this.definition.params),{[t]:{type:e,displayName:n}})})}withRequiredParam(e,t,n){return this.withParam(e,t,n).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withBooleanParam(e,t){return this.withParam("boolean",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredBooleanParam(e,t){return this.withRequiredParam("boolean",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,n=this.requiredParams,i=Object.keys(t);function s(...u){let d={};if(u.forEach(({value:o},l)=>{d[i[l]]=o}),!n.some(o=>d[o]===void 0))return e(d)}return Kn(g(h({},this.definition),{run:s}))}};function dr(r){return new b({name:r})}var Ii=dr("Text Offset").withCategory("Text").withDescription("Gets the zero-based offset of the zero-based N-th occurence of needle in haystack").withNumberResult().withReleased("direct").withRequiredStringParam("haystack").withRequiredStringParam("needle").withNumberParam("nth").withTest({haystack:"there is one @ here",needle:"@"},13).withTest({haystack:"there is one @ here",needle:"@",nth:0},13).withTest({haystack:"there is one @ here",needle:"@",nth:1},void 0).withTest({haystack:"there is one @ here",needle:"@",nth:2},void 0).withTest({haystack:"there is one @ here",needle:"@",nth:-1},13).withTest({haystack:"there is one @ here",needle:"@",nth:-2},void 0).withTest({haystack:"But none here",needle:"@"},void 0).withTest({haystack:"But none here",needle:"@",nth:-2},void 0).withTest({haystack:"But none here",needle:"@",nth:-1},void 0).withTest({haystack:"But none here",needle:"@",nth:0},void 0).withTest({haystack:"But none here",needle:"@",nth:1},void 0).withTest({haystack:"But none here",needle:"@",nth:2},void 0).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:-3},void 0).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:-2},14).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:-1},24).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:0},14).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:1},24).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:2},void 0).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:3},void 0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:-3},void 0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:-2},0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:-1},31).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:0},0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:1},31).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:2},void 0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:3},void 0).withTest({haystack:"@ and we want @ the second @",needle:"@"},0).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:1},14).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:2},27).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:-1},27).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:-2},14).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:-3},0).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:-4},void 0).withTest({haystack:"and == we can do == long == numbers ==",needle:"=="},4).withTest({haystack:"and == we can do == long == numbers ==",needle:"==",nth:1},17).withTest({haystack:"and == we can do == long == numbers ==",needle:"==",nth:2},25).run(({needle:r,haystack:e,nth:t})=>{let n=Math.floor(t!=null?t:0),i=-1;if(n<0){n=-n,i=e.length;for(let s=0;s<n&&(e=e.substring(0,i),i=e.lastIndexOf(r),!(i<0));s++);}else{n++;let s=0;for(let u=0;u<n;u++){if(e=e.substring(i+1),i=e.indexOf(r),i<0){s=-1;break}s+=u===0?i:i+1}i=s}return i<0?void 0:i});export{Ii as default};
//# sourceMappingURL=function.js.map

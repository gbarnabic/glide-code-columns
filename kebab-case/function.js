var br=Object.create;var f=Object.defineProperty,xr=Object.defineProperties,wr=Object.getOwnPropertyDescriptor,vr=Object.getOwnPropertyDescriptors,Tr=Object.getOwnPropertyNames,P=Object.getOwnPropertySymbols,yr=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,Cr=Object.prototype.propertyIsEnumerable;var k=(r,e,t)=>e in r?f(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))R.call(e,t)&&k(r,t,e[t]);if(P)for(var t of P(e))Cr.call(e,t)&&k(r,t,e[t]);return r},g=(r,e)=>xr(r,vr(e)),Pr=r=>f(r,"__esModule",{value:!0});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Rr=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Tr(e))!R.call(r,i)&&i!=="default"&&f(r,i,{get:()=>e[i],enumerable:!(t=wr(e,i))||t.enumerable});return r},S=r=>Rr(Pr(f(r!=null?br(yr(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var M=(r,e,t)=>new Promise((i,a)=>{var u=o=>{try{s(t.next(o))}catch(d){a(d)}},m=o=>{try{s(t.throw(o))}catch(d){a(d)}},s=o=>o.done?i(o.value):Promise.resolve(o.value).then(u,m);s((t=t.apply(r,e)).next())});var q=n((on,A)=>{function kr(r,e,t,i){var a=-1,u=r==null?0:r.length;for(i&&u&&(t=r[++a]);++a<u;)t=e(t,r[a],a,r);return t}A.exports=kr});var O=n((un,j)=>{function Sr(r){return function(e){return r==null?void 0:r[e]}}j.exports=Sr});var N=n((sn,V)=>{var Mr=O(),Ar={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},qr=Mr(Ar);V.exports=qr});var D=n((ln,L)=>{var jr=typeof global=="object"&&global&&global.Object===Object&&global;L.exports=jr});var I=n((dn,U)=>{var Or=D(),Vr=typeof self=="object"&&self&&self.Object===Object&&self,Nr=Or||Vr||Function("return this")();U.exports=Nr});var p=n((cn,_)=>{var Lr=I(),Dr=Lr.Symbol;_.exports=Dr});var H=n((mn,E)=>{function Ur(r,e){for(var t=-1,i=r==null?0:r.length,a=Array(i);++t<i;)a[t]=e(r[t],t,r);return a}E.exports=Ur});var B=n((hn,z)=>{var Ir=Array.isArray;z.exports=Ir});var Z=n((fn,W)=>{var F=p(),G=Object.prototype,_r=G.hasOwnProperty,Er=G.toString,h=F?F.toStringTag:void 0;function Hr(r){var e=_r.call(r,h),t=r[h];try{r[h]=void 0;var i=!0}catch(u){}var a=Er.call(r);return i&&(e?r[h]=t:delete r[h]),a}W.exports=Hr});var K=n((gn,J)=>{var zr=Object.prototype,Br=zr.toString;function Fr(r){return Br.call(r)}J.exports=Fr});var X=n((pn,Q)=>{var Y=p(),Gr=Z(),Wr=K(),Zr="[object Null]",Jr="[object Undefined]",$=Y?Y.toStringTag:void 0;function Kr(r){return r==null?r===void 0?Jr:Zr:$&&$ in Object(r)?Gr(r):Wr(r)}Q.exports=Kr});var re=n((bn,ee)=>{function Yr(r){return r!=null&&typeof r=="object"}ee.exports=Yr});var ie=n((xn,te)=>{var $r=X(),Qr=re(),Xr="[object Symbol]";function et(r){return typeof r=="symbol"||Qr(r)&&$r(r)==Xr}te.exports=et});var le=n((wn,se)=>{var ne=p(),rt=H(),tt=B(),it=ie(),nt=1/0,ae=ne?ne.prototype:void 0,oe=ae?ae.toString:void 0;function ue(r){if(typeof r=="string")return r;if(tt(r))return rt(r,ue)+"";if(it(r))return oe?oe.call(r):"";var e=r+"";return e=="0"&&1/r==-nt?"-0":e}se.exports=ue});var b=n((vn,de)=>{var at=le();function ot(r){return r==null?"":at(r)}de.exports=ot});var me=n((Tn,ce)=>{var ut=N(),st=b(),lt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,dt="\\u0300-\\u036f",ct="\\ufe20-\\ufe2f",mt="\\u20d0-\\u20ff",ht=dt+ct+mt,ft="["+ht+"]",gt=RegExp(ft,"g");function pt(r){return r=st(r),r&&r.replace(lt,ut).replace(gt,"")}ce.exports=pt});var fe=n((yn,he)=>{var bt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function xt(r){return r.match(bt)||[]}he.exports=xt});var pe=n((Cn,ge)=>{var wt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function vt(r){return wt.test(r)}ge.exports=vt});var Le=n((Pn,Ne)=>{var be="\\ud800-\\udfff",Tt="\\u0300-\\u036f",yt="\\ufe20-\\ufe2f",Ct="\\u20d0-\\u20ff",Pt=Tt+yt+Ct,xe="\\u2700-\\u27bf",we="a-z\\xdf-\\xf6\\xf8-\\xff",Rt="\\xac\\xb1\\xd7\\xf7",kt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",St="\\u2000-\\u206f",Mt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ve="A-Z\\xc0-\\xd6\\xd8-\\xde",At="\\ufe0e\\ufe0f",Te=Rt+kt+St+Mt,ye="['\u2019]",Ce="["+Te+"]",qt="["+Pt+"]",Pe="\\d+",jt="["+xe+"]",Re="["+we+"]",ke="[^"+be+Te+Pe+xe+we+ve+"]",Ot="\\ud83c[\\udffb-\\udfff]",Vt="(?:"+qt+"|"+Ot+")",Nt="[^"+be+"]",Se="(?:\\ud83c[\\udde6-\\uddff]){2}",Me="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+ve+"]",Lt="\\u200d",Ae="(?:"+Re+"|"+ke+")",Dt="(?:"+c+"|"+ke+")",qe="(?:"+ye+"(?:d|ll|m|re|s|t|ve))?",je="(?:"+ye+"(?:D|LL|M|RE|S|T|VE))?",Oe=Vt+"?",Ve="["+At+"]?",Ut="(?:"+Lt+"(?:"+[Nt,Se,Me].join("|")+")"+Ve+Oe+")*",It="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_t="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Et=Ve+Oe+Ut,Ht="(?:"+[jt,Se,Me].join("|")+")"+Et,zt=RegExp([c+"?"+Re+"+"+qe+"(?="+[Ce,c,"$"].join("|")+")",Dt+"+"+je+"(?="+[Ce,c+Ae,"$"].join("|")+")",c+"?"+Ae+"+"+qe,c+"+"+je,_t,It,Pe,Ht].join("|"),"g");function Bt(r){return r.match(zt)||[]}Ne.exports=Bt});var Ue=n((Rn,De)=>{var Ft=fe(),Gt=pe(),Wt=b(),Zt=Le();function Jt(r,e,t){return r=Wt(r),e=t?void 0:e,e===void 0?Gt(r)?Zt(r):Ft(r):r.match(e)||[]}De.exports=Jt});var w=n((kn,Ie)=>{var Kt=q(),Yt=me(),$t=Ue(),Qt="['\u2019]",Xt=RegExp(Qt,"g");function ei(r){return function(e){return Kt($t(Yt(e).replace(Xt,"")),r,"")}}Ie.exports=ei});var Ee=n((Sn,_e)=>{function ri(r,e,t){var i=-1,a=r.length;e<0&&(e=-e>a?0:a+e),t=t>a?a:t,t<0&&(t+=a),a=e>t?0:t-e>>>0,e>>>=0;for(var u=Array(a);++i<a;)u[i]=r[i+e];return u}_e.exports=ri});var ze=n((Mn,He)=>{var ti=Ee();function ii(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:ti(r,e,t)}He.exports=ii});var v=n((An,Be)=>{var ni="\\ud800-\\udfff",ai="\\u0300-\\u036f",oi="\\ufe20-\\ufe2f",ui="\\u20d0-\\u20ff",si=ai+oi+ui,li="\\ufe0e\\ufe0f",di="\\u200d",ci=RegExp("["+di+ni+si+li+"]");function mi(r){return ci.test(r)}Be.exports=mi});var Ge=n((qn,Fe)=>{function hi(r){return r.split("")}Fe.exports=hi});var Xe=n((jn,Qe)=>{var We="\\ud800-\\udfff",fi="\\u0300-\\u036f",gi="\\ufe20-\\ufe2f",pi="\\u20d0-\\u20ff",bi=fi+gi+pi,xi="\\ufe0e\\ufe0f",wi="["+We+"]",T="["+bi+"]",y="\\ud83c[\\udffb-\\udfff]",vi="(?:"+T+"|"+y+")",Ze="[^"+We+"]",Je="(?:\\ud83c[\\udde6-\\uddff]){2}",Ke="[\\ud800-\\udbff][\\udc00-\\udfff]",Ti="\\u200d",Ye=vi+"?",$e="["+xi+"]?",yi="(?:"+Ti+"(?:"+[Ze,Je,Ke].join("|")+")"+$e+Ye+")*",Ci=$e+Ye+yi,Pi="(?:"+[Ze+T+"?",T,Je,Ke,wi].join("|")+")",Ri=RegExp(y+"(?="+y+")|"+Pi+Ci,"g");function ki(r){return r.match(Ri)||[]}Qe.exports=ki});var rr=n((On,er)=>{var Si=Ge(),Mi=v(),Ai=Xe();function qi(r){return Mi(r)?Ai(r):Si(r)}er.exports=qi});var ir=n((Vn,tr)=>{var ji=ze(),Oi=v(),Vi=rr(),Ni=b();function Li(r){return function(e){e=Ni(e);var t=Oi(e)?Vi(e):void 0,i=t?t[0]:e.charAt(0),a=t?ji(t,1).join(""):e.slice(1);return i[r]()+a}}tr.exports=Li});var ar=n((Nn,nr)=>{var Di=ir(),Ui=Di("toUpperCase");nr.exports=Ui});var ur=n((Ln,or)=>{var Ii=w(),_i=ar(),Ei=Ii(function(r,e,t){return r+(t?" ":"")+_i(e)});or.exports=Ei});var mr=n((_n,cr)=>{var tn=w(),nn=tn(function(r,e,t){return r+(t?"-":"")+e.toLowerCase()});cr.exports=nn});var lr=S(ur());var Hi=`
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
    `,zi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,Bi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,sr=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,Fi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,Gi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Wi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Zi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Ji=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,Ki=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,Yi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,$i=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,Qi={Glide:Hi,"Machine Learning":Yi,General:sr,Array:Fi,Number:Bi,Encoding:$i,Text:Ki,"Data & APIs":Ji,Image:Gi,Fun:Wi,"Date & Time":Zi,Code:zi};function C({icon:r,category:e}){var t;return(t=r!=null?r:Qi[e])!=null?t:sr}function Xi(r){return g(l({},r),{json:JSON.stringify(en(r),null,2)})}function en(r){let{name:e,category:t,released:i,description:a,author:u,result:m,params:s,about:o,video:d}=r,fr=C(r);return{name:e,category:t,released:i,description:a,author:u,result:m,about:o,icon:fr,video:d,params:Object.entries(s).map(([gr,pr])=>l({name:gr},pr))}}var rn={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:void 0,tests:[],run(){return M(this,null,function*(){})}},x=class{constructor(e={},t=[]){this.definition=l(l({},rn),e),this.requiredParams=[...t]}with(e,t=[]){return new x(l(l({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){let{icon:t}=this.definition;return this.with({category:e,icon:C({icon:t,category:e})})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,lr.default)(t)),this.with({params:g(l({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withBooleanParam(e,t){return this.withParam("boolean",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredBooleanParam(e,t){return this.withRequiredParam("boolean",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,a=Object.keys(t);function u(...m){let s={};if(m.forEach(({value:o},d)=>{s[a[d]]=o}),!i.some(o=>s[o]===void 0))return e(s)}return Xi(g(l({},this.definition),{run:u}))}};function dr(r){return new x({name:r})}var hr=S(mr()),Hn=dr("Kebab Case").withCategory("Text").withReleased("direct").withDescription('"hello world" \u2192 "hello-world"').withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withTest({text:"helloWorld"},"hello-world").run(({text:r})=>r===void 0?void 0:(0,hr.default)(r));export{Hn as default};
//# sourceMappingURL=function.js.map

(()=>{var xe=Object.create;var g=Object.defineProperty,be=Object.defineProperties,he=Object.getOwnPropertyDescriptor,Te=Object.getOwnPropertyDescriptors,ye=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,Ce=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var P=(r,e,t)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))S.call(e,t)&&P(r,t,e[t]);if(R)for(var t of R(e))we.call(e,t)&&P(r,t,e[t]);return r},x=(r,e)=>be(r,Te(e)),ve=r=>g(r,"__esModule",{value:!0});var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Re=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ye(e))!S.call(r,i)&&i!=="default"&&g(r,i,{get:()=>e[i],enumerable:!(t=he(e,i))||t.enumerable});return r},q=r=>Re(ve(g(r!=null?xe(Ce(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var T=(r,e,t)=>new Promise((i,n)=>{var a=o=>{try{s(t.next(o))}catch(f){n(f)}},d=o=>{try{s(t.throw(o))}catch(f){n(f)}},s=o=>o.done?i(o.value):Promise.resolve(o.value).then(a,d);s((t=t.apply(r,e)).next())});var O=u((Yi,A)=>{function Se(r,e,t,i){var n=-1,a=r==null?0:r.length;for(i&&a&&(t=r[++n]);++n<a;)t=e(t,r[n],n,r);return t}A.exports=Se});var j=u(($i,L)=>{function Pe(r){return function(e){return r==null?void 0:r[e]}}L.exports=Pe});var N=u((Ki,M)=>{var qe=j(),Ae={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Oe=qe(Ae);M.exports=Oe});var E=u((Qi,U)=>{var Le=typeof global=="object"&&global&&global.Object===Object&&global;U.exports=Le});var D=u((Xi,_)=>{var je=E(),Me=typeof self=="object"&&self&&self.Object===Object&&self,Ne=je||Me||Function("return this")();_.exports=Ne});var b=u((rn,k)=>{var Ue=D(),Ee=Ue.Symbol;k.exports=Ee});var Z=u((en,I)=>{function _e(r,e){for(var t=-1,i=r==null?0:r.length,n=Array(i);++t<i;)n[t]=e(r[t],t,r);return n}I.exports=_e});var W=u((tn,z)=>{var De=Array.isArray;z.exports=De});var V=u((nn,F)=>{var G=b(),H=Object.prototype,ke=H.hasOwnProperty,Ie=H.toString,m=G?G.toStringTag:void 0;function Ze(r){var e=ke.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(a){}var n=Ie.call(r);return i&&(e?r[m]=t:delete r[m]),n}F.exports=Ze});var B=u((un,J)=>{var ze=Object.prototype,We=ze.toString;function Ge(r){return We.call(r)}J.exports=Ge});var Q=u((an,K)=>{var Y=b(),He=V(),Fe=B(),Ve="[object Null]",Je="[object Undefined]",$=Y?Y.toStringTag:void 0;function Be(r){return r==null?r===void 0?Je:Ve:$&&$ in Object(r)?He(r):Fe(r)}K.exports=Be});var rr=u((on,X)=>{function Ye(r){return r!=null&&typeof r=="object"}X.exports=Ye});var tr=u((sn,er)=>{var $e=Q(),Ke=rr(),Qe="[object Symbol]";function Xe(r){return typeof r=="symbol"||Ke(r)&&$e(r)==Qe}er.exports=Xe});var sr=u((fn,or)=>{var ir=b(),rt=Z(),et=W(),tt=tr(),it=1/0,nr=ir?ir.prototype:void 0,ur=nr?nr.toString:void 0;function ar(r){if(typeof r=="string")return r;if(et(r))return rt(r,ar)+"";if(tt(r))return ur?ur.call(r):"";var e=r+"";return e=="0"&&1/r==-it?"-0":e}or.exports=ar});var p=u((dn,fr)=>{var nt=sr();function ut(r){return r==null?"":nt(r)}fr.exports=ut});var lr=u((ln,dr)=>{var at=N(),ot=p(),st=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ft="\\u0300-\\u036f",dt="\\ufe20-\\ufe2f",lt="\\u20d0-\\u20ff",ct=ft+dt+lt,mt="["+ct+"]",pt=RegExp(mt,"g");function gt(r){return r=ot(r),r&&r.replace(st,at).replace(pt,"")}dr.exports=gt});var mr=u((cn,cr)=>{var xt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function bt(r){return r.match(xt)||[]}cr.exports=bt});var gr=u((mn,pr)=>{var ht=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Tt(r){return ht.test(r)}pr.exports=Tt});var Ur=u((pn,Nr)=>{var xr="\\ud800-\\udfff",yt="\\u0300-\\u036f",Ct="\\ufe20-\\ufe2f",wt="\\u20d0-\\u20ff",vt=yt+Ct+wt,br="\\u2700-\\u27bf",hr="a-z\\xdf-\\xf6\\xf8-\\xff",Rt="\\xac\\xb1\\xd7\\xf7",St="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Pt="\\u2000-\\u206f",qt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Tr="A-Z\\xc0-\\xd6\\xd8-\\xde",At="\\ufe0e\\ufe0f",yr=Rt+St+Pt+qt,Cr="['\u2019]",wr="["+yr+"]",Ot="["+vt+"]",vr="\\d+",Lt="["+br+"]",Rr="["+hr+"]",Sr="[^"+xr+yr+vr+br+hr+Tr+"]",jt="\\ud83c[\\udffb-\\udfff]",Mt="(?:"+Ot+"|"+jt+")",Nt="[^"+xr+"]",Pr="(?:\\ud83c[\\udde6-\\uddff]){2}",qr="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+Tr+"]",Ut="\\u200d",Ar="(?:"+Rr+"|"+Sr+")",Et="(?:"+c+"|"+Sr+")",Or="(?:"+Cr+"(?:d|ll|m|re|s|t|ve))?",Lr="(?:"+Cr+"(?:D|LL|M|RE|S|T|VE))?",jr=Mt+"?",Mr="["+At+"]?",_t="(?:"+Ut+"(?:"+[Nt,Pr,qr].join("|")+")"+Mr+jr+")*",Dt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",kt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",It=Mr+jr+_t,Zt="(?:"+[Lt,Pr,qr].join("|")+")"+It,zt=RegExp([c+"?"+Rr+"+"+Or+"(?="+[wr,c,"$"].join("|")+")",Et+"+"+Lr+"(?="+[wr,c+Ar,"$"].join("|")+")",c+"?"+Ar+"+"+Or,c+"+"+Lr,kt,Dt,vr,Zt].join("|"),"g");function Wt(r){return r.match(zt)||[]}Nr.exports=Wt});var _r=u((gn,Er)=>{var Gt=mr(),Ht=gr(),Ft=p(),Vt=Ur();function Jt(r,e,t){return r=Ft(r),e=t?void 0:e,e===void 0?Ht(r)?Vt(r):Gt(r):r.match(e)||[]}Er.exports=Jt});var kr=u((xn,Dr)=>{var Bt=O(),Yt=lr(),$t=_r(),Kt="['\u2019]",Qt=RegExp(Kt,"g");function Xt(r){return function(e){return Bt($t(Yt(e).replace(Qt,"")),r,"")}}Dr.exports=Xt});var Zr=u((bn,Ir)=>{function ri(r,e,t){var i=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(n);++i<n;)a[i]=r[i+e];return a}Ir.exports=ri});var Wr=u((hn,zr)=>{var ei=Zr();function ti(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:ei(r,e,t)}zr.exports=ti});var y=u((Tn,Gr)=>{var ii="\\ud800-\\udfff",ni="\\u0300-\\u036f",ui="\\ufe20-\\ufe2f",ai="\\u20d0-\\u20ff",oi=ni+ui+ai,si="\\ufe0e\\ufe0f",fi="\\u200d",di=RegExp("["+fi+ii+oi+si+"]");function li(r){return di.test(r)}Gr.exports=li});var Fr=u((yn,Hr)=>{function ci(r){return r.split("")}Hr.exports=ci});var Xr=u((Cn,Qr)=>{var Vr="\\ud800-\\udfff",mi="\\u0300-\\u036f",pi="\\ufe20-\\ufe2f",gi="\\u20d0-\\u20ff",xi=mi+pi+gi,bi="\\ufe0e\\ufe0f",hi="["+Vr+"]",C="["+xi+"]",w="\\ud83c[\\udffb-\\udfff]",Ti="(?:"+C+"|"+w+")",Jr="[^"+Vr+"]",Br="(?:\\ud83c[\\udde6-\\uddff]){2}",Yr="[\\ud800-\\udbff][\\udc00-\\udfff]",yi="\\u200d",$r=Ti+"?",Kr="["+bi+"]?",Ci="(?:"+yi+"(?:"+[Jr,Br,Yr].join("|")+")"+Kr+$r+")*",wi=Kr+$r+Ci,vi="(?:"+[Jr+C+"?",C,Br,Yr,hi].join("|")+")",Ri=RegExp(w+"(?="+w+")|"+vi+wi,"g");function Si(r){return r.match(Ri)||[]}Qr.exports=Si});var ee=u((wn,re)=>{var Pi=Fr(),qi=y(),Ai=Xr();function Oi(r){return qi(r)?Ai(r):Pi(r)}re.exports=Oi});var ie=u((vn,te)=>{var Li=Wr(),ji=y(),Mi=ee(),Ni=p();function Ui(r){return function(e){e=Ni(e);var t=ji(e)?Mi(e):void 0,i=t?t[0]:e.charAt(0),n=t?Li(t,1).join(""):e.slice(1);return i[r]()+n}}te.exports=Ui});var v=u((Rn,ne)=>{var Ei=ie(),_i=Ei("toUpperCase");ne.exports=_i});var ae=u((Sn,ue)=>{var Di=kr(),ki=v(),Ii=Di(function(r,e,t){return r+(t?" ":"")+ki(e)});ue.exports=Ii});var ce=u((qn,le)=>{var Fi=p(),Vi=v();function Ji(r){return Vi(Fi(r).toLowerCase())}le.exports=Ji});var oe=q(ae());function se(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(se):r}function Zi(r,e){return T(this,null,function*(){var s;let{data:{key:t,params:i}}=r,n,a;try{n=yield e(...i)}catch(o){n=void 0;try{a=o.toString()}catch(f){a="Exception can't be stringified."}}let d={key:t};n!==void 0&&(n=se(n),d.result={type:"string",value:n}),a!==void 0&&(d.error=a),((s=r.source)==null?void 0:s.postMessage).call(s,d,"*")})}function zi(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Zi(e,r.run)),x(l({},r),{json:JSON.stringify(Gi(r),null,2)})}var Wi=`
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
    `,fe=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Gi(r){let{name:e,category:t,description:i,author:n,result:a,params:d,about:s,video:o}=r,{icon:f=fe}=r;return f==="glide"&&(f=Wi),{name:e,category:t,description:i,author:n,result:a,about:s,icon:f,video:o,params:Object.entries(d).map(([pe,ge])=>l({name:pe},ge))}}var Hi={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:fe,about:void 0,video:void 0,tests:[],run(){return T(this,null,function*(){})}},h=class{constructor(e={},t=[]){this.definition=l(l({},Hi),e),this.requiredParams=[...t]}with(e,t=[]){return new h(l(l({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[],example:n=e}=this.definition;return this.with({example:n,tests:[...i,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,i){return i===void 0&&(i=(0,oe.default)(t)),this.with({params:x(l({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function a(...d){let s={};if(d.forEach(({value:o},f)=>{s[n[f]]=o}),!i.some(o=>s[o]===void 0))return e(s)}return zi(x(l({},this.definition),{run:a}))}};function de(r){return new h({name:r})}var me=q(ce()),On=de("Capitalize Text").withCategory("Text").withDescription("Converts the first character of string to upper case and the remaining to lower case.").withAuthor("lodash Project","lodash.com").withStringResult().withRequiredStringParam("text").withExample({text:"HELLO"}).withTest({text:"HELLO"},"Hello").run(({text:r})=>(0,me.default)(r));})();
//# sourceMappingURL=index.js.map

var mr=Object.create;var g=Object.defineProperty,gr=Object.defineProperties,pr=Object.getOwnPropertyDescriptor,br=Object.getOwnPropertyDescriptors,xr=Object.getOwnPropertyNames,P=Object.getOwnPropertySymbols,hr=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty,yr=Object.prototype.propertyIsEnumerable;var R=(e,r,t)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))C.call(r,t)&&R(e,t,r[t]);if(P)for(var t of P(r))yr.call(r,t)&&R(e,t,r[t]);return e},p=(e,r)=>gr(e,br(r)),Tr=e=>g(e,"__esModule",{value:!0});var n=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var wr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of xr(r))!C.call(e,i)&&i!=="default"&&g(e,i,{get:()=>r[i],enumerable:!(t=pr(r,i))||t.enumerable});return e},vr=e=>wr(Tr(g(e!=null?mr(hr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var S=(e,r,t)=>new Promise((i,u)=>{var s=a=>{try{o(t.next(a))}catch(l){u(l)}},f=a=>{try{o(t.throw(a))}catch(l){u(l)}},o=a=>a.done?i(a.value):Promise.resolve(a.value).then(s,f);o((t=t.apply(e,r)).next())});var q=n((zi,A)=>{function Pr(e,r,t,i){var u=-1,s=e==null?0:e.length;for(i&&s&&(t=e[++u]);++u<s;)t=r(t,e[u],u,e);return t}A.exports=Pr});var L=n((Fi,O)=>{function Cr(e){return function(r){return e==null?void 0:e[r]}}O.exports=Cr});var M=n((Ji,E)=>{var Rr=L(),Sr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ar=Rr(Sr);E.exports=Ar});var N=n((Bi,j)=>{var qr=typeof global=="object"&&global&&global.Object===Object&&global;j.exports=qr});var k=n(($i,U)=>{var Or=N(),Lr=typeof self=="object"&&self&&self.Object===Object&&self,Er=Or||Lr||Function("return this")();U.exports=Er});var b=n((Yi,I)=>{var Mr=k(),jr=Mr.Symbol;I.exports=jr});var _=n((Ki,D)=>{function Nr(e,r){for(var t=-1,i=e==null?0:e.length,u=Array(i);++t<i;)u[t]=r(e[t],t,e);return u}D.exports=Nr});var G=n((Qi,V)=>{var Ur=Array.isArray;V.exports=Ur});var z=n((Xi,W)=>{var Z=b(),H=Object.prototype,kr=H.hasOwnProperty,Ir=H.toString,m=Z?Z.toStringTag:void 0;function Dr(e){var r=kr.call(e,m),t=e[m];try{e[m]=void 0;var i=!0}catch(s){}var u=Ir.call(e);return i&&(r?e[m]=t:delete e[m]),u}W.exports=Dr});var J=n((en,F)=>{var _r=Object.prototype,Vr=_r.toString;function Gr(e){return Vr.call(e)}F.exports=Gr});var K=n((rn,Y)=>{var B=b(),Zr=z(),Hr=J(),Wr="[object Null]",zr="[object Undefined]",$=B?B.toStringTag:void 0;function Fr(e){return e==null?e===void 0?zr:Wr:$&&$ in Object(e)?Zr(e):Hr(e)}Y.exports=Fr});var X=n((tn,Q)=>{function Jr(e){return e!=null&&typeof e=="object"}Q.exports=Jr});var re=n((nn,ee)=>{var Br=K(),$r=X(),Yr="[object Symbol]";function Kr(e){return typeof e=="symbol"||$r(e)&&Br(e)==Yr}ee.exports=Kr});var se=n((un,ae)=>{var te=b(),Qr=_(),Xr=G(),et=re(),rt=1/0,ie=te?te.prototype:void 0,ne=ie?ie.toString:void 0;function ue(e){if(typeof e=="string")return e;if(Xr(e))return Qr(e,ue)+"";if(et(e))return ne?ne.call(e):"";var r=e+"";return r=="0"&&1/e==-rt?"-0":r}ae.exports=ue});var x=n((an,oe)=>{var tt=se();function it(e){return e==null?"":tt(e)}oe.exports=it});var le=n((sn,de)=>{var nt=M(),ut=x(),at=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,st="\\u0300-\\u036f",ot="\\ufe20-\\ufe2f",dt="\\u20d0-\\u20ff",lt=st+ot+dt,ct="["+lt+"]",ft=RegExp(ct,"g");function mt(e){return e=ut(e),e&&e.replace(at,nt).replace(ft,"")}de.exports=mt});var fe=n((on,ce)=>{var gt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pt(e){return e.match(gt)||[]}ce.exports=pt});var ge=n((dn,me)=>{var bt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function xt(e){return bt.test(e)}me.exports=xt});var je=n((ln,Me)=>{var pe="\\ud800-\\udfff",ht="\\u0300-\\u036f",yt="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",wt=ht+yt+Tt,be="\\u2700-\\u27bf",xe="a-z\\xdf-\\xf6\\xf8-\\xff",vt="\\xac\\xb1\\xd7\\xf7",Pt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ct="\\u2000-\\u206f",Rt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",he="A-Z\\xc0-\\xd6\\xd8-\\xde",St="\\ufe0e\\ufe0f",ye=vt+Pt+Ct+Rt,Te="['\u2019]",we="["+ye+"]",At="["+wt+"]",ve="\\d+",qt="["+be+"]",Pe="["+xe+"]",Ce="[^"+pe+ye+ve+be+xe+he+"]",Ot="\\ud83c[\\udffb-\\udfff]",Lt="(?:"+At+"|"+Ot+")",Et="[^"+pe+"]",Re="(?:\\ud83c[\\udde6-\\uddff]){2}",Se="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+he+"]",Mt="\\u200d",Ae="(?:"+Pe+"|"+Ce+")",jt="(?:"+c+"|"+Ce+")",qe="(?:"+Te+"(?:d|ll|m|re|s|t|ve))?",Oe="(?:"+Te+"(?:D|LL|M|RE|S|T|VE))?",Le=Lt+"?",Ee="["+St+"]?",Nt="(?:"+Mt+"(?:"+[Et,Re,Se].join("|")+")"+Ee+Le+")*",Ut="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",kt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",It=Ee+Le+Nt,Dt="(?:"+[qt,Re,Se].join("|")+")"+It,_t=RegExp([c+"?"+Pe+"+"+qe+"(?="+[we,c,"$"].join("|")+")",jt+"+"+Oe+"(?="+[we,c+Ae,"$"].join("|")+")",c+"?"+Ae+"+"+qe,c+"+"+Oe,kt,Ut,ve,Dt].join("|"),"g");function Vt(e){return e.match(_t)||[]}Me.exports=Vt});var Ue=n((cn,Ne)=>{var Gt=fe(),Zt=ge(),Ht=x(),Wt=je();function zt(e,r,t){return e=Ht(e),r=t?void 0:r,r===void 0?Zt(e)?Wt(e):Gt(e):e.match(r)||[]}Ne.exports=zt});var Ie=n((fn,ke)=>{var Ft=q(),Jt=le(),Bt=Ue(),$t="['\u2019]",Yt=RegExp($t,"g");function Kt(e){return function(r){return Ft(Bt(Jt(r).replace(Yt,"")),e,"")}}ke.exports=Kt});var _e=n((mn,De)=>{function Qt(e,r,t){var i=-1,u=e.length;r<0&&(r=-r>u?0:u+r),t=t>u?u:t,t<0&&(t+=u),u=r>t?0:t-r>>>0,r>>>=0;for(var s=Array(u);++i<u;)s[i]=e[i+r];return s}De.exports=Qt});var Ge=n((gn,Ve)=>{var Xt=_e();function ei(e,r,t){var i=e.length;return t=t===void 0?i:t,!r&&t>=i?e:Xt(e,r,t)}Ve.exports=ei});var T=n((pn,Ze)=>{var ri="\\ud800-\\udfff",ti="\\u0300-\\u036f",ii="\\ufe20-\\ufe2f",ni="\\u20d0-\\u20ff",ui=ti+ii+ni,ai="\\ufe0e\\ufe0f",si="\\u200d",oi=RegExp("["+si+ri+ui+ai+"]");function di(e){return oi.test(e)}Ze.exports=di});var We=n((bn,He)=>{function li(e){return e.split("")}He.exports=li});var Qe=n((xn,Ke)=>{var ze="\\ud800-\\udfff",ci="\\u0300-\\u036f",fi="\\ufe20-\\ufe2f",mi="\\u20d0-\\u20ff",gi=ci+fi+mi,pi="\\ufe0e\\ufe0f",bi="["+ze+"]",w="["+gi+"]",v="\\ud83c[\\udffb-\\udfff]",xi="(?:"+w+"|"+v+")",Fe="[^"+ze+"]",Je="(?:\\ud83c[\\udde6-\\uddff]){2}",Be="[\\ud800-\\udbff][\\udc00-\\udfff]",hi="\\u200d",$e=xi+"?",Ye="["+pi+"]?",yi="(?:"+hi+"(?:"+[Fe,Je,Be].join("|")+")"+Ye+$e+")*",Ti=Ye+$e+yi,wi="(?:"+[Fe+w+"?",w,Je,Be,bi].join("|")+")",vi=RegExp(v+"(?="+v+")|"+wi+Ti,"g");function Pi(e){return e.match(vi)||[]}Ke.exports=Pi});var er=n((hn,Xe)=>{var Ci=We(),Ri=T(),Si=Qe();function Ai(e){return Ri(e)?Si(e):Ci(e)}Xe.exports=Ai});var tr=n((yn,rr)=>{var qi=Ge(),Oi=T(),Li=er(),Ei=x();function Mi(e){return function(r){r=Ei(r);var t=Oi(r)?Li(r):void 0,i=t?t[0]:r.charAt(0),u=t?qi(t,1).join(""):r.slice(1);return i[e]()+u}}rr.exports=Mi});var nr=n((Tn,ir)=>{var ji=tr(),Ni=ji("toUpperCase");ir.exports=Ni});var ar=n((wn,ur)=>{var Ui=Ie(),ki=nr(),Ii=Ui(function(e,r,t){return e+(t?" ":"")+ki(r)});ur.exports=Ii});var sr=vr(ar());function Di(e){return p(d({},e),{json:JSON.stringify(Vi(e),null,2)})}var _i=`
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
    `,or=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Vi(e){let{name:r,category:t,released:i,description:u,author:s,result:f,params:o,about:a,video:l}=e,{icon:y=or}=e;return y==="glide"&&(y=_i),{name:r,category:t,released:i,description:u,author:s,result:f,about:a,icon:y,video:l,params:Object.entries(o).map(([cr,fr])=>d({name:cr},fr))}}var Gi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:or,about:void 0,video:void 0,tests:[],run(){return S(this,null,function*(){})}},h=class{constructor(r={},t=[]){this.definition=d(d({},Gi),r),this.requiredParams=[...t]}with(r,t=[]){return new h(d(d({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){return this.with({category:r})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,t,i){return i===void 0&&(i=(0,sr.default)(t)),this.with({params:p(d({},this.definition.params),{[t]:{type:r,displayName:i}})})}withRequiredParam(r,t,i){return this.withParam(r,t,i).with({},[t])}withPrimitiveParam(r,t){return this.withParam("primitive",r,t)}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredPrimitiveParam(r,t){return this.withRequiredParam("primitive",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}withStringArrayParam(r,t){return this.withParam({kind:"array",items:"string"},r,t)}withRequiredStringArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"string"},r,t)}withNumberArrayParam(r,t){return this.withParam({kind:"array",items:"number"},r,t)}withPrimitiveArrayParam(r,t){return this.withParam({kind:"array",items:"primitive"},r,t)}withRequiredPrimitiveArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"primitive"},r,t)}withExample(r){return this.with({example:r})}run(r){let{params:t}=this.definition,i=this.requiredParams,u=Object.keys(t);function s(...f){let o={};if(f.forEach(({value:a},l)=>{o[u[l]]=a}),!i.some(a=>o[a]===void 0))return r(o)}return Di(p(d({},this.definition),{run:s}))}};function dr(e){return new h({name:e})}var Zi=["base64","url"];function lr(e){switch(e){case"base64":return{encode:btoa.bind(window),decode:atob.bind(window)};case"url":return{encode:encodeURIComponent,decode:decodeURIComponent}}}function Hi(e,r){var t,i;return(i=(t=lr(r))==null?void 0:t.encode)==null?void 0:i.call(t,e)}function Cn(e,r){var t,i;return(i=(t=lr(r))==null?void 0:t.decode)==null?void 0:i.call(t,e)}var Rn=dr("Encode Text").withCategory("Encoding").withReleased("direct").withDescription("Encode text in a variety of formats.").withRequiredStringParam("text").withStringParam("encoding",`Encoding (${Zi.join(", ")})`).withStringResult().withTest({text:"Hello, world!"},"SGVsbG8sIHdvcmxkIQ==").withTest({text:"Hello, world!",encoding:"base64"},"SGVsbG8sIHdvcmxkIQ==").withTest({text:"Hello, world!",encoding:"url"},"Hello%2C%20world!").run(({text:e,encoding:r="base64"})=>Hi(e,r));export{Cn as decode,Rn as default,Hi as encode,Zi as encodingTypes};
//# sourceMappingURL=function.js.map

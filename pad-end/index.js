(()=>{var Qe=Object.create;var b=Object.defineProperty,rt=Object.defineProperties,et=Object.getOwnPropertyDescriptor,tt=Object.getOwnPropertyDescriptors,it=Object.getOwnPropertyNames,j=Object.getOwnPropertySymbols,nt=Object.getPrototypeOf,M=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable;var _=(r,e,t)=>e in r?b(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,c=(r,e)=>{for(var t in e||(e={}))M.call(e,t)&&_(r,t,e[t]);if(j)for(var t of j(e))ut.call(e,t)&&_(r,t,e[t]);return r},x=(r,e)=>rt(r,tt(e)),at=r=>b(r,"__esModule",{value:!0});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var ot=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of it(e))!M.call(r,i)&&i!=="default"&&b(r,i,{get:()=>e[i],enumerable:!(t=et(e,i))||t.enumerable});return r},L=r=>ot(at(b(r!=null?Qe(nt(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var y=(r,e,t)=>new Promise((i,u)=>{var a=o=>{try{s(t.next(o))}catch(d){u(d)}},f=o=>{try{s(t.throw(o))}catch(d){u(d)}},s=o=>o.done?i(o.value):Promise.resolve(o.value).then(a,f);s((t=t.apply(r,e)).next())});var E=n((Au,N)=>{function st(r,e,t,i){var u=-1,a=r==null?0:r.length;for(i&&a&&(t=r[++u]);++u<a;)t=e(t,r[u],u,r);return t}N.exports=st});var U=n((Ou,I)=>{function dt(r){return function(e){return r==null?void 0:r[e]}}I.exports=dt});var z=n((ju,D)=>{var ft=U(),ct={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},lt=ft(ct);D.exports=lt});var Z=n((Mu,k)=>{var mt=typeof global=="object"&&global&&global.Object===Object&&global;k.exports=mt});var W=n((_u,F)=>{var pt=Z(),gt=typeof self=="object"&&self&&self.Object===Object&&self,bt=pt||gt||Function("return this")();F.exports=bt});var h=n((Lu,G)=>{var xt=W(),ht=xt.Symbol;G.exports=ht});var H=n((Nu,V)=>{function Tt(r,e){for(var t=-1,i=r==null?0:r.length,u=Array(i);++t<i;)u[t]=e(r[t],t,r);return u}V.exports=Tt});var B=n((Eu,J)=>{var yt=Array.isArray;J.exports=yt});var X=n((Iu,K)=>{var $=h(),Y=Object.prototype,Ct=Y.hasOwnProperty,St=Y.toString,m=$?$.toStringTag:void 0;function wt(r){var e=Ct.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(a){}var u=St.call(r);return i&&(e?r[m]=t:delete r[m]),u}K.exports=wt});var rr=n((Uu,Q)=>{var Pt=Object.prototype,vt=Pt.toString;function Rt(r){return vt.call(r)}Q.exports=Rt});var nr=n((Du,ir)=>{var er=h(),qt=X(),At=rr(),Ot="[object Null]",jt="[object Undefined]",tr=er?er.toStringTag:void 0;function Mt(r){return r==null?r===void 0?jt:Ot:tr&&tr in Object(r)?qt(r):At(r)}ir.exports=Mt});var ar=n((zu,ur)=>{function _t(r){return r!=null&&typeof r=="object"}ur.exports=_t});var C=n((ku,or)=>{var Lt=nr(),Nt=ar(),Et="[object Symbol]";function It(r){return typeof r=="symbol"||Nt(r)&&Lt(r)==Et}or.exports=It});var S=n((Zu,lr)=>{var sr=h(),Ut=H(),Dt=B(),zt=C(),kt=1/0,dr=sr?sr.prototype:void 0,fr=dr?dr.toString:void 0;function cr(r){if(typeof r=="string")return r;if(Dt(r))return Ut(r,cr)+"";if(zt(r))return fr?fr.call(r):"";var e=r+"";return e=="0"&&1/r==-kt?"-0":e}lr.exports=cr});var p=n((Fu,mr)=>{var Zt=S();function Ft(r){return r==null?"":Zt(r)}mr.exports=Ft});var gr=n((Wu,pr)=>{var Wt=z(),Gt=p(),Vt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ht="\\u0300-\\u036f",Jt="\\ufe20-\\ufe2f",Bt="\\u20d0-\\u20ff",$t=Ht+Jt+Bt,Yt="["+$t+"]",Kt=RegExp(Yt,"g");function Xt(r){return r=Gt(r),r&&r.replace(Vt,Wt).replace(Kt,"")}pr.exports=Xt});var xr=n((Gu,br)=>{var Qt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ri(r){return r.match(Qt)||[]}br.exports=ri});var Tr=n((Vu,hr)=>{var ei=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ti(r){return ei.test(r)}hr.exports=ti});var Dr=n((Hu,Ur)=>{var yr="\\ud800-\\udfff",ii="\\u0300-\\u036f",ni="\\ufe20-\\ufe2f",ui="\\u20d0-\\u20ff",ai=ii+ni+ui,Cr="\\u2700-\\u27bf",Sr="a-z\\xdf-\\xf6\\xf8-\\xff",oi="\\xac\\xb1\\xd7\\xf7",si="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",di="\\u2000-\\u206f",fi=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",wr="A-Z\\xc0-\\xd6\\xd8-\\xde",ci="\\ufe0e\\ufe0f",Pr=oi+si+di+fi,vr="['\u2019]",Rr="["+Pr+"]",li="["+ai+"]",qr="\\d+",mi="["+Cr+"]",Ar="["+Sr+"]",Or="[^"+yr+Pr+qr+Cr+Sr+wr+"]",pi="\\ud83c[\\udffb-\\udfff]",gi="(?:"+li+"|"+pi+")",bi="[^"+yr+"]",jr="(?:\\ud83c[\\udde6-\\uddff]){2}",Mr="[\\ud800-\\udbff][\\udc00-\\udfff]",l="["+wr+"]",xi="\\u200d",_r="(?:"+Ar+"|"+Or+")",hi="(?:"+l+"|"+Or+")",Lr="(?:"+vr+"(?:d|ll|m|re|s|t|ve))?",Nr="(?:"+vr+"(?:D|LL|M|RE|S|T|VE))?",Er=gi+"?",Ir="["+ci+"]?",Ti="(?:"+xi+"(?:"+[bi,jr,Mr].join("|")+")"+Ir+Er+")*",yi="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ci="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Si=Ir+Er+Ti,wi="(?:"+[mi,jr,Mr].join("|")+")"+Si,Pi=RegExp([l+"?"+Ar+"+"+Lr+"(?="+[Rr,l,"$"].join("|")+")",hi+"+"+Nr+"(?="+[Rr,l+_r,"$"].join("|")+")",l+"?"+_r+"+"+Lr,l+"+"+Nr,Ci,yi,qr,wi].join("|"),"g");function vi(r){return r.match(Pi)||[]}Ur.exports=vi});var kr=n((Ju,zr)=>{var Ri=xr(),qi=Tr(),Ai=p(),Oi=Dr();function ji(r,e,t){return r=Ai(r),e=t?void 0:e,e===void 0?qi(r)?Oi(r):Ri(r):r.match(e)||[]}zr.exports=ji});var Fr=n((Bu,Zr)=>{var Mi=E(),_i=gr(),Li=kr(),Ni="['\u2019]",Ei=RegExp(Ni,"g");function Ii(r){return function(e){return Mi(Li(_i(e).replace(Ei,"")),r,"")}}Zr.exports=Ii});var Gr=n(($u,Wr)=>{function Ui(r,e,t){var i=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(u);++i<u;)a[i]=r[i+e];return a}Wr.exports=Ui});var w=n((Yu,Vr)=>{var Di=Gr();function zi(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:Di(r,e,t)}Vr.exports=zi});var g=n((Ku,Hr)=>{var ki="\\ud800-\\udfff",Zi="\\u0300-\\u036f",Fi="\\ufe20-\\ufe2f",Wi="\\u20d0-\\u20ff",Gi=Zi+Fi+Wi,Vi="\\ufe0e\\ufe0f",Hi="\\u200d",Ji=RegExp("["+Hi+ki+Gi+Vi+"]");function Bi(r){return Ji.test(r)}Hr.exports=Bi});var Br=n((Xu,Jr)=>{function $i(r){return r.split("")}Jr.exports=$i});var te=n((Qu,ee)=>{var $r="\\ud800-\\udfff",Yi="\\u0300-\\u036f",Ki="\\ufe20-\\ufe2f",Xi="\\u20d0-\\u20ff",Qi=Yi+Ki+Xi,rn="\\ufe0e\\ufe0f",en="["+$r+"]",P="["+Qi+"]",v="\\ud83c[\\udffb-\\udfff]",tn="(?:"+P+"|"+v+")",Yr="[^"+$r+"]",Kr="(?:\\ud83c[\\udde6-\\uddff]){2}",Xr="[\\ud800-\\udbff][\\udc00-\\udfff]",nn="\\u200d",Qr=tn+"?",re="["+rn+"]?",un="(?:"+nn+"(?:"+[Yr,Kr,Xr].join("|")+")"+re+Qr+")*",an=re+Qr+un,on="(?:"+[Yr+P+"?",P,Kr,Xr,en].join("|")+")",sn=RegExp(v+"(?="+v+")|"+on+an,"g");function dn(r){return r.match(sn)||[]}ee.exports=dn});var R=n((ra,ie)=>{var fn=Br(),cn=g(),ln=te();function mn(r){return cn(r)?ln(r):fn(r)}ie.exports=mn});var ue=n((ea,ne)=>{var pn=w(),gn=g(),bn=R(),xn=p();function hn(r){return function(e){e=xn(e);var t=gn(e)?bn(e):void 0,i=t?t[0]:e.charAt(0),u=t?pn(t,1).join(""):e.slice(1);return i[r]()+u}}ne.exports=hn});var oe=n((ta,ae)=>{var Tn=ue(),yn=Tn("toUpperCase");ae.exports=yn});var de=n((ia,se)=>{var Cn=Fr(),Sn=oe(),wn=Cn(function(r,e,t){return r+(t?" ":"")+Sn(e)});se.exports=wn});var ge=n((ua,pe)=>{var On=9007199254740991,jn=Math.floor;function Mn(r,e){var t="";if(!r||e<1||e>On)return t;do e%2&&(t+=r),e=jn(e/2),e&&(r+=r);while(e);return t}pe.exports=Mn});var xe=n((aa,be)=>{function _n(r){return function(e){return e==null?void 0:e[r]}}be.exports=_n});var Te=n((oa,he)=>{var Ln=xe(),Nn=Ln("length");he.exports=Nn});var Ae=n((sa,qe)=>{var ye="\\ud800-\\udfff",En="\\u0300-\\u036f",In="\\ufe20-\\ufe2f",Un="\\u20d0-\\u20ff",Dn=En+In+Un,zn="\\ufe0e\\ufe0f",kn="["+ye+"]",q="["+Dn+"]",A="\\ud83c[\\udffb-\\udfff]",Zn="(?:"+q+"|"+A+")",Ce="[^"+ye+"]",Se="(?:\\ud83c[\\udde6-\\uddff]){2}",we="[\\ud800-\\udbff][\\udc00-\\udfff]",Fn="\\u200d",Pe=Zn+"?",ve="["+zn+"]?",Wn="(?:"+Fn+"(?:"+[Ce,Se,we].join("|")+")"+ve+Pe+")*",Gn=ve+Pe+Wn,Vn="(?:"+[Ce+q+"?",q,Se,we,kn].join("|")+")",Re=RegExp(A+"(?="+A+")|"+Vn+Gn,"g");function Hn(r){for(var e=Re.lastIndex=0;Re.test(r);)++e;return e}qe.exports=Hn});var O=n((da,Oe)=>{var Jn=Te(),Bn=g(),$n=Ae();function Yn(r){return Bn(r)?$n(r):Jn(r)}Oe.exports=Yn});var _e=n((fa,Me)=>{var je=ge(),Kn=S(),Xn=w(),Qn=g(),ru=O(),eu=R(),tu=Math.ceil;function iu(r,e){e=e===void 0?" ":Kn(e);var t=e.length;if(t<2)return t?je(e,r):e;var i=je(e,tu(r/ru(e)));return Qn(e)?Xn(eu(i),0,r).join(""):i.slice(0,r)}Me.exports=iu});var Ne=n((ca,Le)=>{var nu=/\s/;function uu(r){for(var e=r.length;e--&&nu.test(r.charAt(e)););return e}Le.exports=uu});var Ie=n((la,Ee)=>{var au=Ne(),ou=/^\s+/;function su(r){return r&&r.slice(0,au(r)+1).replace(ou,"")}Ee.exports=su});var De=n((ma,Ue)=>{function du(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}Ue.exports=du});var Fe=n((pa,Ze)=>{var fu=Ie(),ze=De(),cu=C(),ke=0/0,lu=/^[-+]0x[0-9a-f]+$/i,mu=/^0b[01]+$/i,pu=/^0o[0-7]+$/i,gu=parseInt;function bu(r){if(typeof r=="number")return r;if(cu(r))return ke;if(ze(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=ze(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=fu(r);var t=mu.test(r);return t||pu.test(r)?gu(r.slice(2),t?2:8):lu.test(r)?ke:+r}Ze.exports=bu});var Ve=n((ga,Ge)=>{var xu=Fe(),We=1/0,hu=17976931348623157e292;function Tu(r){if(!r)return r===0?r:0;if(r=xu(r),r===We||r===-We){var e=r<0?-1:1;return e*hu}return r===r?r:0}Ge.exports=Tu});var Je=n((ba,He)=>{var yu=Ve();function Cu(r){var e=yu(r),t=e%1;return e===e?t?e-t:e:0}He.exports=Cu});var $e=n((xa,Be)=>{var Su=_e(),wu=O(),Pu=Je(),vu=p();function Ru(r,e,t){r=vu(r),e=Pu(e);var i=e?wu(r):0;return e&&i<e?r+Su(e-i,t):r}Be.exports=Ru});var fe=L(de());function ce(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(ce):r}function Pn(r,e){return y(this,null,function*(){var s;let{data:{key:t,params:i}}=r,u,a;try{u=yield e(...i)}catch(o){u=void 0;try{a=o.toString()}catch(d){a="Exception can't be stringified."}}let f={key:t};u!==void 0&&(u=ce(u),f.result={type:"string",value:u}),a!==void 0&&(f.error=a),((s=r.source)==null?void 0:s.postMessage).call(s,f,"*")})}function vn(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Pn(e,r.run)),x(c({},r),{json:JSON.stringify(qn(r),null,2)})}var Rn=`
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
    `,le=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function qn(r){let{name:e,category:t,description:i,author:u,result:a,params:f,about:s,video:o}=r,{icon:d=le}=r;return d==="glide"&&(d=Rn),{name:e,category:t,description:i,author:u,result:a,about:s,icon:d,video:o,params:Object.entries(f).map(([Ke,Xe])=>c({name:Ke},Xe))}}var An={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:le,about:void 0,video:void 0,tests:[],run(){return y(this,null,function*(){})}},T=class{constructor(e={},t=[]){this.definition=c(c({},An),e),this.requiredParams=[...t]}with(e,t=[]){return new T(c(c({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,i){return i===void 0&&(i=(0,fe.default)(t)),this.with({params:x(c({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}run(e){let{params:t}=this.definition,i=this.requiredParams,u=Object.keys(t);function a(...f){let s={};if(f.forEach(({value:o},d)=>{s[u[d]]=o}),!i.some(o=>s[o]===void 0))return e(s)}return vn(x(c({},this.definition),{run:a}))}};function me(r){return new T({name:r})}var Ye=L($e()),Ta=me("Pad Text at End").withCategory("Text").withDescription("Pads string on the right side if it's shorter than length. Padding characters are truncated if they exceed length.").withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withNumberParam("length").withStringParam("chars","Padding").withTest({text:"abc",length:8},"abc     ").run(({text:r,length:e,chars:t})=>r===void 0?void 0:(0,Ye.default)(r,e,t));})();
//# sourceMappingURL=index.js.map

(()=>{var he=Object.create;var p=Object.defineProperty,xe=Object.defineProperties,Te=Object.getOwnPropertyDescriptor,ye=Object.getOwnPropertyDescriptors,we=Object.getOwnPropertyNames,C=Object.getOwnPropertySymbols,ve=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var S=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))R.call(e,t)&&S(r,t,e[t]);if(C)for(var t of C(e))Pe.call(e,t)&&S(r,t,e[t]);return r},g=(r,e)=>xe(r,ye(e)),Ce=r=>p(r,"__esModule",{value:!0});var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Re=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of we(e))!R.call(r,i)&&i!=="default"&&p(r,i,{get:()=>e[i],enumerable:!(t=Te(e,i))||t.enumerable});return r},A=r=>Re(Ce(p(r!=null?he(ve(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var y=(r,e,t)=>new Promise((i,n)=>{var a=s=>{try{o(t.next(s))}catch(f){n(f)}},l=s=>{try{o(t.throw(s))}catch(f){n(f)}},o=s=>s.done?i(s.value):Promise.resolve(s.value).then(a,l);o((t=t.apply(r,e)).next())});var O=u(($i,q)=>{function Se(r,e,t,i){var n=-1,a=r==null?0:r.length;for(i&&a&&(t=r[++n]);++n<a;)t=e(t,r[n],n,r);return t}q.exports=Se});var M=u((Bi,L)=>{function Ae(r){return function(e){return r==null?void 0:r[e]}}L.exports=Ae});var N=u((Yi,j)=>{var qe=M(),Oe={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Le=qe(Oe);j.exports=Le});var k=u((Ki,U)=>{var Me=typeof global=="object"&&global&&global.Object===Object&&global;U.exports=Me});var D=u((Qi,_)=>{var je=k(),Ne=typeof self=="object"&&self&&self.Object===Object&&self,Ue=je||Ne||Function("return this")();_.exports=Ue});var b=u((Xi,E)=>{var ke=D(),_e=ke.Symbol;E.exports=_e});var I=u((rn,Z)=>{function De(r,e){for(var t=-1,i=r==null?0:r.length,n=Array(i);++t<i;)n[t]=e(r[t],t,r);return n}Z.exports=De});var z=u((en,V)=>{var Ee=Array.isArray;V.exports=Ee});var H=u((tn,F)=>{var W=b(),G=Object.prototype,Ze=G.hasOwnProperty,Ie=G.toString,m=W?W.toStringTag:void 0;function Ve(r){var e=Ze.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(a){}var n=Ie.call(r);return i&&(e?r[m]=t:delete r[m]),n}F.exports=Ve});var $=u((nn,J)=>{var ze=Object.prototype,We=ze.toString;function Ge(r){return We.call(r)}J.exports=Ge});var Q=u((un,K)=>{var B=b(),Fe=H(),He=$(),Je="[object Null]",$e="[object Undefined]",Y=B?B.toStringTag:void 0;function Be(r){return r==null?r===void 0?$e:Je:Y&&Y in Object(r)?Fe(r):He(r)}K.exports=Be});var rr=u((an,X)=>{function Ye(r){return r!=null&&typeof r=="object"}X.exports=Ye});var tr=u((sn,er)=>{var Ke=Q(),Qe=rr(),Xe="[object Symbol]";function rt(r){return typeof r=="symbol"||Qe(r)&&Ke(r)==Xe}er.exports=rt});var or=u((on,sr)=>{var ir=b(),et=I(),tt=z(),it=tr(),nt=1/0,nr=ir?ir.prototype:void 0,ur=nr?nr.toString:void 0;function ar(r){if(typeof r=="string")return r;if(tt(r))return et(r,ar)+"";if(it(r))return ur?ur.call(r):"";var e=r+"";return e=="0"&&1/r==-nt?"-0":e}sr.exports=ar});var h=u((ln,lr)=>{var ut=or();function at(r){return r==null?"":ut(r)}lr.exports=at});var fr=u((dn,dr)=>{var st=N(),ot=h(),lt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,dt="\\u0300-\\u036f",ft="\\ufe20-\\ufe2f",ct="\\u20d0-\\u20ff",mt=dt+ft+ct,pt="["+mt+"]",gt=RegExp(pt,"g");function bt(r){return r=ot(r),r&&r.replace(lt,st).replace(gt,"")}dr.exports=bt});var mr=u((fn,cr)=>{var ht=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function xt(r){return r.match(ht)||[]}cr.exports=xt});var gr=u((cn,pr)=>{var Tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function yt(r){return Tt.test(r)}pr.exports=yt});var Ur=u((mn,Nr)=>{var br="\\ud800-\\udfff",wt="\\u0300-\\u036f",vt="\\ufe20-\\ufe2f",Pt="\\u20d0-\\u20ff",Ct=wt+vt+Pt,hr="\\u2700-\\u27bf",xr="a-z\\xdf-\\xf6\\xf8-\\xff",Rt="\\xac\\xb1\\xd7\\xf7",St="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",At="\\u2000-\\u206f",qt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Tr="A-Z\\xc0-\\xd6\\xd8-\\xde",Ot="\\ufe0e\\ufe0f",yr=Rt+St+At+qt,wr="['\u2019]",vr="["+yr+"]",Lt="["+Ct+"]",Pr="\\d+",Mt="["+hr+"]",Cr="["+xr+"]",Rr="[^"+br+yr+Pr+hr+xr+Tr+"]",jt="\\ud83c[\\udffb-\\udfff]",Nt="(?:"+Lt+"|"+jt+")",Ut="[^"+br+"]",Sr="(?:\\ud83c[\\udde6-\\uddff]){2}",Ar="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+Tr+"]",kt="\\u200d",qr="(?:"+Cr+"|"+Rr+")",_t="(?:"+c+"|"+Rr+")",Or="(?:"+wr+"(?:d|ll|m|re|s|t|ve))?",Lr="(?:"+wr+"(?:D|LL|M|RE|S|T|VE))?",Mr=Nt+"?",jr="["+Ot+"]?",Dt="(?:"+kt+"(?:"+[Ut,Sr,Ar].join("|")+")"+jr+Mr+")*",Et="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Zt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",It=jr+Mr+Dt,Vt="(?:"+[Mt,Sr,Ar].join("|")+")"+It,zt=RegExp([c+"?"+Cr+"+"+Or+"(?="+[vr,c,"$"].join("|")+")",_t+"+"+Lr+"(?="+[vr,c+qr,"$"].join("|")+")",c+"?"+qr+"+"+Or,c+"+"+Lr,Zt,Et,Pr,Vt].join("|"),"g");function Wt(r){return r.match(zt)||[]}Nr.exports=Wt});var _r=u((pn,kr)=>{var Gt=mr(),Ft=gr(),Ht=h(),Jt=Ur();function $t(r,e,t){return r=Ht(r),e=t?void 0:e,e===void 0?Ft(r)?Jt(r):Gt(r):r.match(e)||[]}kr.exports=$t});var Er=u((gn,Dr)=>{var Bt=O(),Yt=fr(),Kt=_r(),Qt="['\u2019]",Xt=RegExp(Qt,"g");function ri(r){return function(e){return Bt(Kt(Yt(e).replace(Xt,"")),r,"")}}Dr.exports=ri});var Ir=u((bn,Zr)=>{function ei(r,e,t){var i=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(n);++i<n;)a[i]=r[i+e];return a}Zr.exports=ei});var zr=u((hn,Vr)=>{var ti=Ir();function ii(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:ti(r,e,t)}Vr.exports=ii});var w=u((xn,Wr)=>{var ni="\\ud800-\\udfff",ui="\\u0300-\\u036f",ai="\\ufe20-\\ufe2f",si="\\u20d0-\\u20ff",oi=ui+ai+si,li="\\ufe0e\\ufe0f",di="\\u200d",fi=RegExp("["+di+ni+oi+li+"]");function ci(r){return fi.test(r)}Wr.exports=ci});var Fr=u((Tn,Gr)=>{function mi(r){return r.split("")}Gr.exports=mi});var Xr=u((yn,Qr)=>{var Hr="\\ud800-\\udfff",pi="\\u0300-\\u036f",gi="\\ufe20-\\ufe2f",bi="\\u20d0-\\u20ff",hi=pi+gi+bi,xi="\\ufe0e\\ufe0f",Ti="["+Hr+"]",v="["+hi+"]",P="\\ud83c[\\udffb-\\udfff]",yi="(?:"+v+"|"+P+")",Jr="[^"+Hr+"]",$r="(?:\\ud83c[\\udde6-\\uddff]){2}",Br="[\\ud800-\\udbff][\\udc00-\\udfff]",wi="\\u200d",Yr=yi+"?",Kr="["+xi+"]?",vi="(?:"+wi+"(?:"+[Jr,$r,Br].join("|")+")"+Kr+Yr+")*",Pi=Kr+Yr+vi,Ci="(?:"+[Jr+v+"?",v,$r,Br,Ti].join("|")+")",Ri=RegExp(P+"(?="+P+")|"+Ci+Pi,"g");function Si(r){return r.match(Ri)||[]}Qr.exports=Si});var ee=u((wn,re)=>{var Ai=Fr(),qi=w(),Oi=Xr();function Li(r){return qi(r)?Oi(r):Ai(r)}re.exports=Li});var ie=u((vn,te)=>{var Mi=zr(),ji=w(),Ni=ee(),Ui=h();function ki(r){return function(e){e=Ui(e);var t=ji(e)?Ni(e):void 0,i=t?t[0]:e.charAt(0),n=t?Mi(t,1).join(""):e.slice(1);return i[r]()+n}}te.exports=ki});var ue=u((Pn,ne)=>{var _i=ie(),Di=_i("toUpperCase");ne.exports=Di});var se=u((Cn,ae)=>{var Ei=Er(),Zi=ue(),Ii=Ei(function(r,e,t){return r+(t?" ":"")+Zi(e)});ae.exports=Ii});var me=u(ce=>{"use strict";var Hi=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;ce.validate=function(r){if(!r||r.length>254)return!1;var e=Hi.test(r);if(!e)return!1;var t=r.split("@");if(t[0].length>64)return!1;var i=t[1].split(".");return!i.some(function(n){return n.length>63})}});var oe=A(se());function le(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(le):r}function Vi(r,e){return y(this,null,function*(){var o;let{data:{key:t,params:i}}=r,n,a;try{n=yield e(...i)}catch(s){n=void 0;try{a=s.toString()}catch(f){a="Exception can't be stringified."}}let l={key:t};n!==void 0&&(n=le(n),l.result={type:"string",value:n}),a!==void 0&&(l.error=a),((o=r.source)==null?void 0:o.postMessage).call(o,l,"*")})}function zi(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Vi(e,r.run)),g(d({},r),{json:JSON.stringify(Gi(r),null,2)})}var Wi=`
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
    `,de=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Gi(r){let{name:e,category:t,released:i,description:n,author:a,result:l,params:o,about:s,video:f}=r,{icon:T=de}=r;return T==="glide"&&(T=Wi),{name:e,category:t,released:i,description:n,author:a,result:l,about:s,icon:T,video:f,params:Object.entries(o).map(([ge,be])=>d({name:ge},be))}}var Fi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:de,about:void 0,video:void 0,tests:[],run(){return y(this,null,function*(){})}},x=class{constructor(e={},t=[]){this.definition=d(d({},Fi),e),this.requiredParams=[...t]}with(e,t=[]){return new x(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,oe.default)(t)),this.with({params:g(d({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function a(...l){let o={};if(l.forEach(({value:s},f)=>{o[n[f]]=s}),!i.some(s=>o[s]===void 0))return e(o)}return zi(g(d({},this.definition),{run:a}))}};function fe(r){return new x({name:r})}var pe=A(me()),qn=fe("Email Validator").withCategory("Text").withReleased("direct").withDescription("Indicates whether text is an email.").withBooleanResult().withStringParam("email").withTest({email:"hello@world.co"},!0).run(({email:r})=>r!==void 0&&pe.default.validate(r));})();
//# sourceMappingURL=index.js.map

var me=Object.create;var p=Object.defineProperty,pe=Object.defineProperties,ge=Object.getOwnPropertyDescriptor,xe=Object.getOwnPropertyDescriptors,be=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,he=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable;var S=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,f=(r,e)=>{for(var t in e||(e={}))R.call(e,t)&&S(r,t,e[t]);if(v)for(var t of v(e))Te.call(e,t)&&S(r,t,e[t]);return r},g=(r,e)=>pe(r,xe(e)),ye=r=>p(r,"__esModule",{value:!0});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Ce=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of be(e))!R.call(r,i)&&i!=="default"&&p(r,i,{get:()=>e[i],enumerable:!(t=ge(e,i))||t.enumerable});return r},P=r=>Ce(ye(p(r!=null?me(he(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var A=(r,e,t)=>new Promise((i,u)=>{var o=a=>{try{s(t.next(a))}catch(d){u(d)}},c=a=>{try{s(t.throw(a))}catch(d){u(d)}},s=a=>a.done?i(a.value):Promise.resolve(a.value).then(o,c);s((t=t.apply(r,e)).next())});var O=n((Gi,q)=>{function we(r,e,t,i){var u=-1,o=r==null?0:r.length;for(i&&o&&(t=r[++u]);++u<o;)t=e(t,r[u],u,r);return t}q.exports=we});var j=n((zi,L)=>{function ve(r){return function(e){return r==null?void 0:r[e]}}L.exports=ve});var N=n((Hi,M)=>{var Re=j(),Se={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Pe=Re(Se);M.exports=Pe});var _=n((Vi,U)=>{var Ae=typeof global=="object"&&global&&global.Object===Object&&global;U.exports=Ae});var E=n((Fi,D)=>{var qe=_(),Oe=typeof self=="object"&&self&&self.Object===Object&&self,Le=qe||Oe||Function("return this")();D.exports=Le});var x=n((Ji,k)=>{var je=E(),Me=je.Symbol;k.exports=Me});var W=n((Bi,I)=>{function Ne(r,e){for(var t=-1,i=r==null?0:r.length,u=Array(i);++t<i;)u[t]=e(r[t],t,r);return u}I.exports=Ne});var G=n((Yi,Z)=>{var Ue=Array.isArray;Z.exports=Ue});var F=n(($i,V)=>{var z=x(),H=Object.prototype,_e=H.hasOwnProperty,De=H.toString,m=z?z.toStringTag:void 0;function Ee(r){var e=_e.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(o){}var u=De.call(r);return i&&(e?r[m]=t:delete r[m]),u}V.exports=Ee});var B=n((Ki,J)=>{var ke=Object.prototype,Ie=ke.toString;function We(r){return Ie.call(r)}J.exports=We});var Q=n((Qi,K)=>{var Y=x(),Ze=F(),Ge=B(),ze="[object Null]",He="[object Undefined]",$=Y?Y.toStringTag:void 0;function Ve(r){return r==null?r===void 0?He:ze:$&&$ in Object(r)?Ze(r):Ge(r)}K.exports=Ve});var rr=n((Xi,X)=>{function Fe(r){return r!=null&&typeof r=="object"}X.exports=Fe});var tr=n((rn,er)=>{var Je=Q(),Be=rr(),Ye="[object Symbol]";function $e(r){return typeof r=="symbol"||Be(r)&&Je(r)==Ye}er.exports=$e});var sr=n((en,or)=>{var ir=x(),Ke=W(),Qe=G(),Xe=tr(),rt=1/0,nr=ir?ir.prototype:void 0,ur=nr?nr.toString:void 0;function ar(r){if(typeof r=="string")return r;if(Qe(r))return Ke(r,ar)+"";if(Xe(r))return ur?ur.call(r):"";var e=r+"";return e=="0"&&1/r==-rt?"-0":e}or.exports=ar});var b=n((tn,dr)=>{var et=sr();function tt(r){return r==null?"":et(r)}dr.exports=tt});var lr=n((nn,fr)=>{var it=N(),nt=b(),ut=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,at="\\u0300-\\u036f",ot="\\ufe20-\\ufe2f",st="\\u20d0-\\u20ff",dt=at+ot+st,ft="["+dt+"]",lt=RegExp(ft,"g");function ct(r){return r=nt(r),r&&r.replace(ut,it).replace(lt,"")}fr.exports=ct});var mr=n((un,cr)=>{var mt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pt(r){return r.match(mt)||[]}cr.exports=pt});var gr=n((an,pr)=>{var gt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function xt(r){return gt.test(r)}pr.exports=xt});var Ur=n((on,Nr)=>{var xr="\\ud800-\\udfff",bt="\\u0300-\\u036f",ht="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",yt=bt+ht+Tt,br="\\u2700-\\u27bf",hr="a-z\\xdf-\\xf6\\xf8-\\xff",Ct="\\xac\\xb1\\xd7\\xf7",wt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",vt="\\u2000-\\u206f",Rt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Tr="A-Z\\xc0-\\xd6\\xd8-\\xde",St="\\ufe0e\\ufe0f",yr=Ct+wt+vt+Rt,Cr="['\u2019]",wr="["+yr+"]",Pt="["+yt+"]",vr="\\d+",At="["+br+"]",Rr="["+hr+"]",Sr="[^"+xr+yr+vr+br+hr+Tr+"]",qt="\\ud83c[\\udffb-\\udfff]",Ot="(?:"+Pt+"|"+qt+")",Lt="[^"+xr+"]",Pr="(?:\\ud83c[\\udde6-\\uddff]){2}",Ar="[\\ud800-\\udbff][\\udc00-\\udfff]",l="["+Tr+"]",jt="\\u200d",qr="(?:"+Rr+"|"+Sr+")",Mt="(?:"+l+"|"+Sr+")",Or="(?:"+Cr+"(?:d|ll|m|re|s|t|ve))?",Lr="(?:"+Cr+"(?:D|LL|M|RE|S|T|VE))?",jr=Ot+"?",Mr="["+St+"]?",Nt="(?:"+jt+"(?:"+[Lt,Pr,Ar].join("|")+")"+Mr+jr+")*",Ut="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_t="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Dt=Mr+jr+Nt,Et="(?:"+[At,Pr,Ar].join("|")+")"+Dt,kt=RegExp([l+"?"+Rr+"+"+Or+"(?="+[wr,l,"$"].join("|")+")",Mt+"+"+Lr+"(?="+[wr,l+qr,"$"].join("|")+")",l+"?"+qr+"+"+Or,l+"+"+Lr,_t,Ut,vr,Et].join("|"),"g");function It(r){return r.match(kt)||[]}Nr.exports=It});var Dr=n((sn,_r)=>{var Wt=mr(),Zt=gr(),Gt=b(),zt=Ur();function Ht(r,e,t){return r=Gt(r),e=t?void 0:e,e===void 0?Zt(r)?zt(r):Wt(r):r.match(e)||[]}_r.exports=Ht});var kr=n((dn,Er)=>{var Vt=O(),Ft=lr(),Jt=Dr(),Bt="['\u2019]",Yt=RegExp(Bt,"g");function $t(r){return function(e){return Vt(Jt(Ft(e).replace(Yt,"")),r,"")}}Er.exports=$t});var Wr=n((fn,Ir)=>{function Kt(r,e,t){var i=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(u);++i<u;)o[i]=r[i+e];return o}Ir.exports=Kt});var Gr=n((ln,Zr)=>{var Qt=Wr();function Xt(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:Qt(r,e,t)}Zr.exports=Xt});var T=n((cn,zr)=>{var ri="\\ud800-\\udfff",ei="\\u0300-\\u036f",ti="\\ufe20-\\ufe2f",ii="\\u20d0-\\u20ff",ni=ei+ti+ii,ui="\\ufe0e\\ufe0f",ai="\\u200d",oi=RegExp("["+ai+ri+ni+ui+"]");function si(r){return oi.test(r)}zr.exports=si});var Vr=n((mn,Hr)=>{function di(r){return r.split("")}Hr.exports=di});var Xr=n((pn,Qr)=>{var Fr="\\ud800-\\udfff",fi="\\u0300-\\u036f",li="\\ufe20-\\ufe2f",ci="\\u20d0-\\u20ff",mi=fi+li+ci,pi="\\ufe0e\\ufe0f",gi="["+Fr+"]",y="["+mi+"]",C="\\ud83c[\\udffb-\\udfff]",xi="(?:"+y+"|"+C+")",Jr="[^"+Fr+"]",Br="(?:\\ud83c[\\udde6-\\uddff]){2}",Yr="[\\ud800-\\udbff][\\udc00-\\udfff]",bi="\\u200d",$r=xi+"?",Kr="["+pi+"]?",hi="(?:"+bi+"(?:"+[Jr,Br,Yr].join("|")+")"+Kr+$r+")*",Ti=Kr+$r+hi,yi="(?:"+[Jr+y+"?",y,Br,Yr,gi].join("|")+")",Ci=RegExp(C+"(?="+C+")|"+yi+Ti,"g");function wi(r){return r.match(Ci)||[]}Qr.exports=wi});var ee=n((gn,re)=>{var vi=Vr(),Ri=T(),Si=Xr();function Pi(r){return Ri(r)?Si(r):vi(r)}re.exports=Pi});var ie=n((xn,te)=>{var Ai=Gr(),qi=T(),Oi=ee(),Li=b();function ji(r){return function(e){e=Li(e);var t=qi(e)?Oi(e):void 0,i=t?t[0]:e.charAt(0),u=t?Ai(t,1).join(""):e.slice(1);return i[r]()+u}}te.exports=ji});var ue=n((bn,ne)=>{var Mi=ie(),Ni=Mi("toUpperCase");ne.exports=Ni});var w=n((hn,ae)=>{var Ui=kr(),_i=ue(),Di=Ui(function(r,e,t){return r+(t?" ":"")+_i(e)});ae.exports=Di});var oe=P(w());function Ei(r){return g(f({},r),{json:JSON.stringify(Ii(r),null,2)})}var ki=`
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
    `,se=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Ii(r){let{name:e,category:t,description:i,author:u,result:o,params:c,about:s,video:a}=r,{icon:d=se}=r;return d==="glide"&&(d=ki),{name:e,category:t,description:i,author:u,result:o,about:s,icon:d,video:a,params:Object.entries(c).map(([le,ce])=>f({name:le},ce))}}var Wi={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:se,about:void 0,video:void 0,tests:[],run(){return A(this,null,function*(){})}},h=class{constructor(e={},t=[]){this.definition=f(f({},Wi),e),this.requiredParams=[...t]}with(e,t=[]){return new h(f(f({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[],example:u=e}=this.definition;return this.with({example:u,tests:[...i,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,i){return i===void 0&&(i=(0,oe.default)(t)),this.with({params:g(f({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,u=Object.keys(t);function o(...c){let s={};if(c.forEach(({value:a},d)=>{s[u[d]]=a}),!i.some(a=>s[a]===void 0))return e(s)}return Ei(g(f({},this.definition),{run:o}))}};function de(r){return new h({name:r})}var fe=P(w()),Cn=de("Start Case").withCategory("Text").withDescription('"hello world" \u2192 "Hello World"').withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withExample({text:"helloWorld"}).run(({text:r})=>r===void 0?void 0:(0,fe.default)(r));export{Cn as default};
//# sourceMappingURL=function.js.map

(()=>{var et=Object.create;var b=Object.defineProperty,tt=Object.defineProperties,it=Object.getOwnPropertyDescriptor,nt=Object.getOwnPropertyDescriptors,ut=Object.getOwnPropertyNames,j=Object.getOwnPropertySymbols,at=Object.getPrototypeOf,_=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable;var L=(r,e,t)=>e in r?b(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,f=(r,e)=>{for(var t in e||(e={}))_.call(e,t)&&L(r,t,e[t]);if(j)for(var t of j(e))st.call(e,t)&&L(r,t,e[t]);return r},x=(r,e)=>tt(r,nt(e)),ot=r=>b(r,"__esModule",{value:!0});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var dt=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ut(e))!_.call(r,i)&&i!=="default"&&b(r,i,{get:()=>e[i],enumerable:!(t=it(e,i))||t.enumerable});return r},N=r=>dt(ot(b(r!=null?et(at(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var w=(r,e,t)=>new Promise((i,u)=>{var a=s=>{try{o(t.next(s))}catch(c){u(c)}},d=s=>{try{o(t.throw(s))}catch(c){u(c)}},o=s=>s.done?i(s.value):Promise.resolve(s.value).then(a,d);o((t=t.apply(r,e)).next())});var U=n((ju,I)=>{function ft(r,e,t,i){var u=-1,a=r==null?0:r.length;for(i&&a&&(t=r[++u]);++u<a;)t=e(t,r[u],u,r);return t}I.exports=ft});var k=n((_u,E)=>{function ct(r){return function(e){return r==null?void 0:r[e]}}E.exports=ct});var z=n((Lu,D)=>{var lt=k(),mt={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},pt=lt(mt);D.exports=pt});var F=n((Nu,V)=>{var gt=typeof global=="object"&&global&&global.Object===Object&&global;V.exports=gt});var W=n((Iu,Z)=>{var bt=F(),xt=typeof self=="object"&&self&&self.Object===Object&&self,ht=bt||xt||Function("return this")();Z.exports=ht});var h=n((Uu,G)=>{var yt=W(),Tt=yt.Symbol;G.exports=Tt});var J=n((Eu,H)=>{function wt(r,e){for(var t=-1,i=r==null?0:r.length,u=Array(i);++t<i;)u[t]=e(r[t],t,r);return u}H.exports=wt});var $=n((ku,B)=>{var Pt=Array.isArray;B.exports=Pt});var Q=n((Du,X)=>{var Y=h(),K=Object.prototype,vt=K.hasOwnProperty,Rt=K.toString,m=Y?Y.toStringTag:void 0;function Ct(r){var e=vt.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(a){}var u=Rt.call(r);return i&&(e?r[m]=t:delete r[m]),u}X.exports=Ct});var er=n((zu,rr)=>{var St=Object.prototype,qt=St.toString;function At(r){return qt.call(r)}rr.exports=At});var ur=n((Vu,nr)=>{var tr=h(),Ot=Q(),Mt=er(),jt="[object Null]",_t="[object Undefined]",ir=tr?tr.toStringTag:void 0;function Lt(r){return r==null?r===void 0?_t:jt:ir&&ir in Object(r)?Ot(r):Mt(r)}nr.exports=Lt});var sr=n((Fu,ar)=>{function Nt(r){return r!=null&&typeof r=="object"}ar.exports=Nt});var P=n((Zu,or)=>{var It=ur(),Ut=sr(),Et="[object Symbol]";function kt(r){return typeof r=="symbol"||Ut(r)&&It(r)==Et}or.exports=kt});var v=n((Wu,mr)=>{var dr=h(),Dt=J(),zt=$(),Vt=P(),Ft=1/0,fr=dr?dr.prototype:void 0,cr=fr?fr.toString:void 0;function lr(r){if(typeof r=="string")return r;if(zt(r))return Dt(r,lr)+"";if(Vt(r))return cr?cr.call(r):"";var e=r+"";return e=="0"&&1/r==-Ft?"-0":e}mr.exports=lr});var p=n((Gu,pr)=>{var Zt=v();function Wt(r){return r==null?"":Zt(r)}pr.exports=Wt});var br=n((Hu,gr)=>{var Gt=z(),Ht=p(),Jt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Bt="\\u0300-\\u036f",$t="\\ufe20-\\ufe2f",Yt="\\u20d0-\\u20ff",Kt=Bt+$t+Yt,Xt="["+Kt+"]",Qt=RegExp(Xt,"g");function ri(r){return r=Ht(r),r&&r.replace(Jt,Gt).replace(Qt,"")}gr.exports=ri});var hr=n((Ju,xr)=>{var ei=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ti(r){return r.match(ei)||[]}xr.exports=ti});var Tr=n((Bu,yr)=>{var ii=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ni(r){return ii.test(r)}yr.exports=ni});var Dr=n(($u,kr)=>{var wr="\\ud800-\\udfff",ui="\\u0300-\\u036f",ai="\\ufe20-\\ufe2f",si="\\u20d0-\\u20ff",oi=ui+ai+si,Pr="\\u2700-\\u27bf",vr="a-z\\xdf-\\xf6\\xf8-\\xff",di="\\xac\\xb1\\xd7\\xf7",fi="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ci="\\u2000-\\u206f",li=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Rr="A-Z\\xc0-\\xd6\\xd8-\\xde",mi="\\ufe0e\\ufe0f",Cr=di+fi+ci+li,Sr="['\u2019]",qr="["+Cr+"]",pi="["+oi+"]",Ar="\\d+",gi="["+Pr+"]",Or="["+vr+"]",Mr="[^"+wr+Cr+Ar+Pr+vr+Rr+"]",bi="\\ud83c[\\udffb-\\udfff]",xi="(?:"+pi+"|"+bi+")",hi="[^"+wr+"]",jr="(?:\\ud83c[\\udde6-\\uddff]){2}",_r="[\\ud800-\\udbff][\\udc00-\\udfff]",l="["+Rr+"]",yi="\\u200d",Lr="(?:"+Or+"|"+Mr+")",Ti="(?:"+l+"|"+Mr+")",Nr="(?:"+Sr+"(?:d|ll|m|re|s|t|ve))?",Ir="(?:"+Sr+"(?:D|LL|M|RE|S|T|VE))?",Ur=xi+"?",Er="["+mi+"]?",wi="(?:"+yi+"(?:"+[hi,jr,_r].join("|")+")"+Er+Ur+")*",Pi="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",vi="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ri=Er+Ur+wi,Ci="(?:"+[gi,jr,_r].join("|")+")"+Ri,Si=RegExp([l+"?"+Or+"+"+Nr+"(?="+[qr,l,"$"].join("|")+")",Ti+"+"+Ir+"(?="+[qr,l+Lr,"$"].join("|")+")",l+"?"+Lr+"+"+Nr,l+"+"+Ir,vi,Pi,Ar,Ci].join("|"),"g");function qi(r){return r.match(Si)||[]}kr.exports=qi});var Vr=n((Yu,zr)=>{var Ai=hr(),Oi=Tr(),Mi=p(),ji=Dr();function _i(r,e,t){return r=Mi(r),e=t?void 0:e,e===void 0?Oi(r)?ji(r):Ai(r):r.match(e)||[]}zr.exports=_i});var Zr=n((Ku,Fr)=>{var Li=U(),Ni=br(),Ii=Vr(),Ui="['\u2019]",Ei=RegExp(Ui,"g");function ki(r){return function(e){return Li(Ii(Ni(e).replace(Ei,"")),r,"")}}Fr.exports=ki});var Gr=n((Xu,Wr)=>{function Di(r,e,t){var i=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(u);++i<u;)a[i]=r[i+e];return a}Wr.exports=Di});var R=n((Qu,Hr)=>{var zi=Gr();function Vi(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:zi(r,e,t)}Hr.exports=Vi});var g=n((ra,Jr)=>{var Fi="\\ud800-\\udfff",Zi="\\u0300-\\u036f",Wi="\\ufe20-\\ufe2f",Gi="\\u20d0-\\u20ff",Hi=Zi+Wi+Gi,Ji="\\ufe0e\\ufe0f",Bi="\\u200d",$i=RegExp("["+Bi+Fi+Hi+Ji+"]");function Yi(r){return $i.test(r)}Jr.exports=Yi});var $r=n((ea,Br)=>{function Ki(r){return r.split("")}Br.exports=Ki});var ie=n((ta,te)=>{var Yr="\\ud800-\\udfff",Xi="\\u0300-\\u036f",Qi="\\ufe20-\\ufe2f",rn="\\u20d0-\\u20ff",en=Xi+Qi+rn,tn="\\ufe0e\\ufe0f",nn="["+Yr+"]",C="["+en+"]",S="\\ud83c[\\udffb-\\udfff]",un="(?:"+C+"|"+S+")",Kr="[^"+Yr+"]",Xr="(?:\\ud83c[\\udde6-\\uddff]){2}",Qr="[\\ud800-\\udbff][\\udc00-\\udfff]",an="\\u200d",re=un+"?",ee="["+tn+"]?",sn="(?:"+an+"(?:"+[Kr,Xr,Qr].join("|")+")"+ee+re+")*",on=ee+re+sn,dn="(?:"+[Kr+C+"?",C,Xr,Qr,nn].join("|")+")",fn=RegExp(S+"(?="+S+")|"+dn+on,"g");function cn(r){return r.match(fn)||[]}te.exports=cn});var q=n((ia,ne)=>{var ln=$r(),mn=g(),pn=ie();function gn(r){return mn(r)?pn(r):ln(r)}ne.exports=gn});var ae=n((na,ue)=>{var bn=R(),xn=g(),hn=q(),yn=p();function Tn(r){return function(e){e=yn(e);var t=xn(e)?hn(e):void 0,i=t?t[0]:e.charAt(0),u=t?bn(t,1).join(""):e.slice(1);return i[r]()+u}}ue.exports=Tn});var oe=n((ua,se)=>{var wn=ae(),Pn=wn("toUpperCase");se.exports=Pn});var fe=n((aa,de)=>{var vn=Zr(),Rn=oe(),Cn=vn(function(r,e,t){return r+(t?" ":"")+Rn(e)});de.exports=Cn});var be=n((oa,ge)=>{var jn=9007199254740991,_n=Math.floor;function Ln(r,e){var t="";if(!r||e<1||e>jn)return t;do e%2&&(t+=r),e=_n(e/2),e&&(r+=r);while(e);return t}ge.exports=Ln});var he=n((da,xe)=>{function Nn(r){return function(e){return e==null?void 0:e[r]}}xe.exports=Nn});var Te=n((fa,ye)=>{var In=he(),Un=In("length");ye.exports=Un});var Oe=n((ca,Ae)=>{var we="\\ud800-\\udfff",En="\\u0300-\\u036f",kn="\\ufe20-\\ufe2f",Dn="\\u20d0-\\u20ff",zn=En+kn+Dn,Vn="\\ufe0e\\ufe0f",Fn="["+we+"]",A="["+zn+"]",O="\\ud83c[\\udffb-\\udfff]",Zn="(?:"+A+"|"+O+")",Pe="[^"+we+"]",ve="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",Wn="\\u200d",Ce=Zn+"?",Se="["+Vn+"]?",Gn="(?:"+Wn+"(?:"+[Pe,ve,Re].join("|")+")"+Se+Ce+")*",Hn=Se+Ce+Gn,Jn="(?:"+[Pe+A+"?",A,ve,Re,Fn].join("|")+")",qe=RegExp(O+"(?="+O+")|"+Jn+Hn,"g");function Bn(r){for(var e=qe.lastIndex=0;qe.test(r);)++e;return e}Ae.exports=Bn});var M=n((la,Me)=>{var $n=Te(),Yn=g(),Kn=Oe();function Xn(r){return Yn(r)?Kn(r):$n(r)}Me.exports=Xn});var Le=n((ma,_e)=>{var je=be(),Qn=v(),ru=R(),eu=g(),tu=M(),iu=q(),nu=Math.ceil;function uu(r,e){e=e===void 0?" ":Qn(e);var t=e.length;if(t<2)return t?je(e,r):e;var i=je(e,nu(r/tu(e)));return eu(e)?ru(iu(i),0,r).join(""):i.slice(0,r)}_e.exports=uu});var Ie=n((pa,Ne)=>{var au=/\s/;function su(r){for(var e=r.length;e--&&au.test(r.charAt(e)););return e}Ne.exports=su});var Ee=n((ga,Ue)=>{var ou=Ie(),du=/^\s+/;function fu(r){return r&&r.slice(0,ou(r)+1).replace(du,"")}Ue.exports=fu});var De=n((ba,ke)=>{function cu(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}ke.exports=cu});var Ze=n((xa,Fe)=>{var lu=Ee(),ze=De(),mu=P(),Ve=0/0,pu=/^[-+]0x[0-9a-f]+$/i,gu=/^0b[01]+$/i,bu=/^0o[0-7]+$/i,xu=parseInt;function hu(r){if(typeof r=="number")return r;if(mu(r))return Ve;if(ze(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=ze(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=lu(r);var t=gu.test(r);return t||bu.test(r)?xu(r.slice(2),t?2:8):pu.test(r)?Ve:+r}Fe.exports=hu});var He=n((ha,Ge)=>{var yu=Ze(),We=1/0,Tu=17976931348623157e292;function wu(r){if(!r)return r===0?r:0;if(r=yu(r),r===We||r===-We){var e=r<0?-1:1;return e*Tu}return r===r?r:0}Ge.exports=wu});var Be=n((ya,Je)=>{var Pu=He();function vu(r){var e=Pu(r),t=e%1;return e===e?t?e-t:e:0}Je.exports=vu});var Ke=n((Ta,Ye)=>{var $e=Le(),Ru=M(),Cu=Be(),Su=p(),qu=Math.ceil,Au=Math.floor;function Ou(r,e,t){r=Su(r),e=Cu(e);var i=e?Ru(r):0;if(!e||i>=e)return r;var u=(e-i)/2;return $e(Au(u),t)+r+$e(qu(u),t)}Ye.exports=Ou});var ce=N(fe());function le(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(le):r}function Sn(r,e){return w(this,null,function*(){var o;let{data:{key:t,params:i}}=r,u,a;try{u=yield e(...i)}catch(s){u=void 0;try{a=s.toString()}catch(c){a="Exception can't be stringified."}}let d={key:t};u!==void 0&&(u=le(u),d.result={type:"string",value:u}),a!==void 0&&(d.error=a),((o=r.source)==null?void 0:o.postMessage).call(o,d,"*")})}function qn(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Sn(e,r.run)),x(f({},r),{json:JSON.stringify(On(r),null,2)})}var An=`
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
    `,me=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function On(r){let{name:e,category:t,released:i,description:u,author:a,result:d,params:o,about:s,video:c}=r,{icon:T=me}=r;return T==="glide"&&(T=An),{name:e,category:t,released:i,description:u,author:a,result:d,about:s,icon:T,video:c,params:Object.entries(o).map(([Qe,rt])=>f({name:Qe},rt))}}var Mn={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:me,about:void 0,video:void 0,tests:[],run(){return w(this,null,function*(){})}},y=class{constructor(e={},t=[]){this.definition=f(f({},Mn),e),this.requiredParams=[...t]}with(e,t=[]){return new y(f(f({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,ce.default)(t)),this.with({params:x(f({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,u=Object.keys(t);function a(...d){let o={};if(d.forEach(({value:s},c)=>{o[u[c]]=s}),!i.some(s=>o[s]===void 0))return e(o)}return qn(x(f({},this.definition),{run:a}))}};function pe(r){return new y({name:r})}var Xe=N(Ke()),Pa=pe("Pad Text").withCategory("Text").withReleased("direct").withDescription("Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.").withAuthor("lodash Project","lodash.com").withRequiredStringParam("text").withNumberParam("length").withStringParam("chars","Padding").withStringResult().withTest({text:"abc",length:8},"  abc   ").run(({text:r,length:e,chars:t})=>(0,Xe.default)(r,e,t));})();
//# sourceMappingURL=index.js.map

var dr=Object.create;var c=Object.defineProperty,lr=Object.defineProperties,mr=Object.getOwnPropertyDescriptor,cr=Object.getOwnPropertyDescriptors,fr=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,pr=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty,gr=Object.prototype.propertyIsEnumerable;var P=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,h=(e,r)=>{for(var t in r||(r={}))C.call(r,t)&&P(e,t,r[t]);if(v)for(var t of v(r))gr.call(r,t)&&P(e,t,r[t]);return e},R=(e,r)=>lr(e,cr(r)),br=e=>c(e,"__esModule",{value:!0});var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var hr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of fr(r))!C.call(e,n)&&n!=="default"&&c(e,n,{get:()=>r[n],enumerable:!(t=mr(r,n))||t.enumerable});return e},xr=e=>hr(br(c(e!=null?dr(pr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var x=(e,r,t)=>new Promise((n,u)=>{var a=s=>{try{d(t.next(s))}catch(l){u(l)}},g=s=>{try{d(t.throw(s))}catch(l){u(l)}},d=s=>s.done?n(s.value):Promise.resolve(s.value).then(a,g);d((t=t.apply(e,r)).next())});var A=i((Wi,S)=>{function yr(e,r,t,n){var u=-1,a=e==null?0:e.length;for(n&&a&&(t=e[++u]);++u<a;)t=r(t,e[u],u,e);return t}S.exports=yr});var L=i((Gi,q)=>{function Tr(e){return function(r){return e==null?void 0:e[r]}}q.exports=Tr});var M=i((Fi,O)=>{var wr=L(),vr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Cr=wr(vr);O.exports=Cr});var U=i((zi,j)=>{var Pr=typeof global=="object"&&global&&global.Object===Object&&global;j.exports=Pr});var k=i((Hi,N)=>{var Rr=U(),Sr=typeof self=="object"&&self&&self.Object===Object&&self,Ar=Rr||Sr||Function("return this")();N.exports=Ar});var f=i((Ji,D)=>{var qr=k(),Lr=qr.Symbol;D.exports=Lr});var E=i((Bi,_)=>{function Or(e,r){for(var t=-1,n=e==null?0:e.length,u=Array(n);++t<n;)u[t]=r(e[t],t,e);return u}_.exports=Or});var V=i((Yi,I)=>{var Mr=Array.isArray;I.exports=Mr});var F=i(($i,G)=>{var Z=f(),W=Object.prototype,jr=W.hasOwnProperty,Ur=W.toString,m=Z?Z.toStringTag:void 0;function Nr(e){var r=jr.call(e,m),t=e[m];try{e[m]=void 0;var n=!0}catch(a){}var u=Ur.call(e);return n&&(r?e[m]=t:delete e[m]),u}G.exports=Nr});var H=i((Ki,z)=>{var kr=Object.prototype,Dr=kr.toString;function _r(e){return Dr.call(e)}z.exports=_r});var $=i((Qi,Y)=>{var J=f(),Er=F(),Ir=H(),Vr="[object Null]",Zr="[object Undefined]",B=J?J.toStringTag:void 0;function Wr(e){return e==null?e===void 0?Zr:Vr:B&&B in Object(e)?Er(e):Ir(e)}Y.exports=Wr});var Q=i((Xi,K)=>{function Gr(e){return e!=null&&typeof e=="object"}K.exports=Gr});var ee=i((en,X)=>{var Fr=$(),zr=Q(),Hr="[object Symbol]";function Jr(e){return typeof e=="symbol"||zr(e)&&Fr(e)==Hr}X.exports=Jr});var ae=i((rn,ue)=>{var re=f(),Br=E(),Yr=V(),$r=ee(),Kr=1/0,te=re?re.prototype:void 0,ie=te?te.toString:void 0;function ne(e){if(typeof e=="string")return e;if(Yr(e))return Br(e,ne)+"";if($r(e))return ie?ie.call(e):"";var r=e+"";return r=="0"&&1/e==-Kr?"-0":r}ue.exports=ne});var p=i((tn,se)=>{var Qr=ae();function Xr(e){return e==null?"":Qr(e)}se.exports=Xr});var de=i((nn,oe)=>{var et=M(),rt=p(),tt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,it="\\u0300-\\u036f",nt="\\ufe20-\\ufe2f",ut="\\u20d0-\\u20ff",at=it+nt+ut,st="["+at+"]",ot=RegExp(st,"g");function dt(e){return e=rt(e),e&&e.replace(tt,et).replace(ot,"")}oe.exports=dt});var me=i((un,le)=>{var lt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function mt(e){return e.match(lt)||[]}le.exports=mt});var fe=i((an,ce)=>{var ct=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ft(e){return ct.test(e)}ce.exports=ft});var je=i((sn,Me)=>{var pe="\\ud800-\\udfff",pt="\\u0300-\\u036f",gt="\\ufe20-\\ufe2f",bt="\\u20d0-\\u20ff",ht=pt+gt+bt,ge="\\u2700-\\u27bf",be="a-z\\xdf-\\xf6\\xf8-\\xff",xt="\\xac\\xb1\\xd7\\xf7",yt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Tt="\\u2000-\\u206f",wt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",he="A-Z\\xc0-\\xd6\\xd8-\\xde",vt="\\ufe0e\\ufe0f",xe=xt+yt+Tt+wt,ye="['\u2019]",Te="["+xe+"]",Ct="["+ht+"]",we="\\d+",Pt="["+ge+"]",ve="["+be+"]",Ce="[^"+pe+xe+we+ge+be+he+"]",Rt="\\ud83c[\\udffb-\\udfff]",St="(?:"+Ct+"|"+Rt+")",At="[^"+pe+"]",Pe="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",o="["+he+"]",qt="\\u200d",Se="(?:"+ve+"|"+Ce+")",Lt="(?:"+o+"|"+Ce+")",Ae="(?:"+ye+"(?:d|ll|m|re|s|t|ve))?",qe="(?:"+ye+"(?:D|LL|M|RE|S|T|VE))?",Le=St+"?",Oe="["+vt+"]?",Ot="(?:"+qt+"(?:"+[At,Pe,Re].join("|")+")"+Oe+Le+")*",Mt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",jt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ut=Oe+Le+Ot,Nt="(?:"+[Pt,Pe,Re].join("|")+")"+Ut,kt=RegExp([o+"?"+ve+"+"+Ae+"(?="+[Te,o,"$"].join("|")+")",Lt+"+"+qe+"(?="+[Te,o+Se,"$"].join("|")+")",o+"?"+Se+"+"+Ae,o+"+"+qe,jt,Mt,we,Nt].join("|"),"g");function Dt(e){return e.match(kt)||[]}Me.exports=Dt});var Ne=i((on,Ue)=>{var _t=me(),Et=fe(),It=p(),Vt=je();function Zt(e,r,t){return e=It(e),r=t?void 0:r,r===void 0?Et(e)?Vt(e):_t(e):e.match(r)||[]}Ue.exports=Zt});var De=i((dn,ke)=>{var Wt=A(),Gt=de(),Ft=Ne(),zt="['\u2019]",Ht=RegExp(zt,"g");function Jt(e){return function(r){return Wt(Ft(Gt(r).replace(Ht,"")),e,"")}}ke.exports=Jt});var Ee=i((ln,_e)=>{function Bt(e,r,t){var n=-1,u=e.length;r<0&&(r=-r>u?0:u+r),t=t>u?u:t,t<0&&(t+=u),u=r>t?0:t-r>>>0,r>>>=0;for(var a=Array(u);++n<u;)a[n]=e[n+r];return a}_e.exports=Bt});var Ve=i((mn,Ie)=>{var Yt=Ee();function $t(e,r,t){var n=e.length;return t=t===void 0?n:t,!r&&t>=n?e:Yt(e,r,t)}Ie.exports=$t});var y=i((cn,Ze)=>{var Kt="\\ud800-\\udfff",Qt="\\u0300-\\u036f",Xt="\\ufe20-\\ufe2f",ei="\\u20d0-\\u20ff",ri=Qt+Xt+ei,ti="\\ufe0e\\ufe0f",ii="\\u200d",ni=RegExp("["+ii+Kt+ri+ti+"]");function ui(e){return ni.test(e)}Ze.exports=ui});var Ge=i((fn,We)=>{function ai(e){return e.split("")}We.exports=ai});var Ke=i((pn,$e)=>{var Fe="\\ud800-\\udfff",si="\\u0300-\\u036f",oi="\\ufe20-\\ufe2f",di="\\u20d0-\\u20ff",li=si+oi+di,mi="\\ufe0e\\ufe0f",ci="["+Fe+"]",T="["+li+"]",w="\\ud83c[\\udffb-\\udfff]",fi="(?:"+T+"|"+w+")",ze="[^"+Fe+"]",He="(?:\\ud83c[\\udde6-\\uddff]){2}",Je="[\\ud800-\\udbff][\\udc00-\\udfff]",pi="\\u200d",Be=fi+"?",Ye="["+mi+"]?",gi="(?:"+pi+"(?:"+[ze,He,Je].join("|")+")"+Ye+Be+")*",bi=Ye+Be+gi,hi="(?:"+[ze+T+"?",T,He,Je,ci].join("|")+")",xi=RegExp(w+"(?="+w+")|"+hi+bi,"g");function yi(e){return e.match(xi)||[]}$e.exports=yi});var Xe=i((gn,Qe)=>{var Ti=Ge(),wi=y(),vi=Ke();function Ci(e){return wi(e)?vi(e):Ti(e)}Qe.exports=Ci});var rr=i((bn,er)=>{var Pi=Ve(),Ri=y(),Si=Xe(),Ai=p();function qi(e){return function(r){r=Ai(r);var t=Ri(r)?Si(r):void 0,n=t?t[0]:r.charAt(0),u=t?Pi(t,1).join(""):r.slice(1);return n[e]()+u}}er.exports=qi});var ir=i((hn,tr)=>{var Li=rr(),Oi=Li("toUpperCase");tr.exports=Oi});var ur=i((xn,nr)=>{var Mi=De(),ji=ir(),Ui=Mi(function(e,r,t){return e+(t?" ":"")+ji(r)});nr.exports=Ui});var Ni=xr(ur());function ar(e){return R(h({},e),{json:JSON.stringify(_i(e),null,2)})}var ki=`
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
    `,Di=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function _i(e){let{name:r,category:t,released:n,description:u,author:a,result:g,params:d,about:s,video:l}=e,{icon:b=Di}=e;return b==="glide"&&(b=ki),{name:r,category:t,released:n,description:u,author:a,result:g,about:s,icon:b,video:l,params:Object.entries(d).map(([sr,or])=>h({name:sr},or))}}function Ei(e){let r=e.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&\?]{10,12})/);return r==null?void 0:r[1]}function Ii(e){let r=Ei(e);return r===void 0?void 0:`https://i.ytimg.com/vi/${r}/maxresdefault.jpg`}var Vi=e=>x(void 0,null,function*(){if(e.value!==void 0)return Ii(e.value.toString())}),wn=ar({name:"YouTube Thumbnail",category:"Image",released:"direct",description:"Display video thumbnail images",author:"David Siegel <david@glideapps.com>",params:{videoUrl:{displayName:"Video URL",type:"uri"}},result:{type:"image-uri"},example:{videoUrl:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"},run:Vi,icon:`
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.5 14.4C47.5 14.4 47 11.1 45.6 9.59998C43.8 7.69998 41.7 7.69998 40.8 7.59998C34.1 7.09998 24 7.09998 24 7.09998C24 7.09998 13.9 7.09998 7.2 7.59998C6.3 7.69998 4.2 7.69998 2.4 9.59998C1 11.1 0.5 14.4 0.5 14.4C0.5 14.4 0 18.3 0 22.2V25.8C0 29.7 0.5 33.6 0.5 33.6C0.5 33.6 1 36.9 2.4 38.4C4.2 40.3 6.6 40.3 7.7 40.5C11.5 40.9 24 41 24 41C24 41 34.1 41 40.8 40.5C41.7 40.4 43.8 40.4 45.6 38.5C47 37 47.5 33.7 47.5 33.7C47.5 33.7 48 29.8 48 25.9V22.3C48 18.3 47.5 14.4 47.5 14.4ZM19 30.2V16.7L32 23.5L19 30.2Z" fill="currentColor"/>
</svg>
    `});export{wn as default};
//# sourceMappingURL=function.js.map

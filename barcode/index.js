(()=>{var fr=Object.create;var m=Object.defineProperty,cr=Object.defineProperties,mr=Object.getOwnPropertyDescriptor,pr=Object.getOwnPropertyDescriptors,gr=Object.getOwnPropertyNames,w=Object.getOwnPropertySymbols,br=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,xr=Object.prototype.propertyIsEnumerable;var R=(e,r,t)=>r in e?m(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,x=(e,r)=>{for(var t in r||(r={}))v.call(r,t)&&R(e,t,r[t]);if(w)for(var t of w(r))xr.call(r,t)&&R(e,t,r[t]);return e},P=(e,r)=>cr(e,pr(r)),hr=e=>m(e,"__esModule",{value:!0});var u=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var yr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of gr(r))!v.call(e,i)&&i!=="default"&&m(e,i,{get:()=>r[i],enumerable:!(t=mr(r,i))||t.enumerable});return e},Tr=e=>yr(hr(m(e!=null?fr(br(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var p=(e,r,t)=>new Promise((i,n)=>{var a=o=>{try{s(t.next(o))}catch(d){n(d)}},l=o=>{try{s(t.throw(o))}catch(d){n(d)}},s=o=>o.done?i(o.value):Promise.resolve(o.value).then(a,l);s((t=t.apply(e,r)).next())});var A=u((Gn,S)=>{function Cr(e,r,t,i){var n=-1,a=e==null?0:e.length;for(i&&a&&(t=e[++n]);++n<a;)t=r(t,e[n],n,e);return t}S.exports=Cr});var O=u((Wn,q)=>{function wr(e){return function(r){return e==null?void 0:e[r]}}q.exports=wr});var j=u((Fn,M)=>{var vr=O(),Rr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Pr=vr(Rr);M.exports=Pr});var U=u((Jn,L)=>{var Sr=typeof global=="object"&&global&&global.Object===Object&&global;L.exports=Sr});var _=u((Bn,N)=>{var Ar=U(),qr=typeof self=="object"&&self&&self.Object===Object&&self,Or=Ar||qr||Function("return this")();N.exports=Or});var g=u(($n,V)=>{var Mr=_(),jr=Mr.Symbol;V.exports=jr});var Z=u((Yn,H)=>{function Lr(e,r){for(var t=-1,i=e==null?0:e.length,n=Array(i);++t<i;)n[t]=r(e[t],t,e);return n}H.exports=Lr});var E=u((Kn,D)=>{var Ur=Array.isArray;D.exports=Ur});var G=u((Qn,z)=>{var I=g(),k=Object.prototype,Nr=k.hasOwnProperty,_r=k.toString,c=I?I.toStringTag:void 0;function Vr(e){var r=Nr.call(e,c),t=e[c];try{e[c]=void 0;var i=!0}catch(a){}var n=_r.call(e);return i&&(r?e[c]=t:delete e[c]),n}z.exports=Vr});var F=u((Xn,W)=>{var Hr=Object.prototype,Zr=Hr.toString;function Dr(e){return Zr.call(e)}W.exports=Dr});var Y=u((ei,$)=>{var J=g(),Er=G(),Ir=F(),kr="[object Null]",zr="[object Undefined]",B=J?J.toStringTag:void 0;function Gr(e){return e==null?e===void 0?zr:kr:B&&B in Object(e)?Er(e):Ir(e)}$.exports=Gr});var Q=u((ri,K)=>{function Wr(e){return e!=null&&typeof e=="object"}K.exports=Wr});var ee=u((ti,X)=>{var Fr=Y(),Jr=Q(),Br="[object Symbol]";function $r(e){return typeof e=="symbol"||Jr(e)&&Fr(e)==Br}X.exports=$r});var ae=u((ni,ue)=>{var re=g(),Yr=Z(),Kr=E(),Qr=ee(),Xr=1/0,te=re?re.prototype:void 0,ne=te?te.toString:void 0;function ie(e){if(typeof e=="string")return e;if(Kr(e))return Yr(e,ie)+"";if(Qr(e))return ne?ne.call(e):"";var r=e+"";return r=="0"&&1/e==-Xr?"-0":r}ue.exports=ie});var b=u((ii,oe)=>{var et=ae();function rt(e){return e==null?"":et(e)}oe.exports=rt});var de=u((ui,se)=>{var tt=j(),nt=b(),it=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ut="\\u0300-\\u036f",at="\\ufe20-\\ufe2f",ot="\\u20d0-\\u20ff",st=ut+at+ot,dt="["+st+"]",lt=RegExp(dt,"g");function ft(e){return e=nt(e),e&&e.replace(it,tt).replace(lt,"")}se.exports=ft});var fe=u((ai,le)=>{var ct=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function mt(e){return e.match(ct)||[]}le.exports=mt});var me=u((oi,ce)=>{var pt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function gt(e){return pt.test(e)}ce.exports=gt});var Le=u((si,je)=>{var pe="\\ud800-\\udfff",bt="\\u0300-\\u036f",xt="\\ufe20-\\ufe2f",ht="\\u20d0-\\u20ff",yt=bt+xt+ht,ge="\\u2700-\\u27bf",be="a-z\\xdf-\\xf6\\xf8-\\xff",Tt="\\xac\\xb1\\xd7\\xf7",Ct="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",wt="\\u2000-\\u206f",vt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xe="A-Z\\xc0-\\xd6\\xd8-\\xde",Rt="\\ufe0e\\ufe0f",he=Tt+Ct+wt+vt,ye="['\u2019]",Te="["+he+"]",Pt="["+yt+"]",Ce="\\d+",St="["+ge+"]",we="["+be+"]",ve="[^"+pe+he+Ce+ge+be+xe+"]",At="\\ud83c[\\udffb-\\udfff]",qt="(?:"+Pt+"|"+At+")",Ot="[^"+pe+"]",Re="(?:\\ud83c[\\udde6-\\uddff]){2}",Pe="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+xe+"]",Mt="\\u200d",Se="(?:"+we+"|"+ve+")",jt="(?:"+f+"|"+ve+")",Ae="(?:"+ye+"(?:d|ll|m|re|s|t|ve))?",qe="(?:"+ye+"(?:D|LL|M|RE|S|T|VE))?",Oe=qt+"?",Me="["+Rt+"]?",Lt="(?:"+Mt+"(?:"+[Ot,Re,Pe].join("|")+")"+Me+Oe+")*",Ut="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Nt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_t=Me+Oe+Lt,Vt="(?:"+[St,Re,Pe].join("|")+")"+_t,Ht=RegExp([f+"?"+we+"+"+Ae+"(?="+[Te,f,"$"].join("|")+")",jt+"+"+qe+"(?="+[Te,f+Se,"$"].join("|")+")",f+"?"+Se+"+"+Ae,f+"+"+qe,Nt,Ut,Ce,Vt].join("|"),"g");function Zt(e){return e.match(Ht)||[]}je.exports=Zt});var Ne=u((di,Ue)=>{var Dt=fe(),Et=me(),It=b(),kt=Le();function zt(e,r,t){return e=It(e),r=t?void 0:r,r===void 0?Et(e)?kt(e):Dt(e):e.match(r)||[]}Ue.exports=zt});var Ve=u((li,_e)=>{var Gt=A(),Wt=de(),Ft=Ne(),Jt="['\u2019]",Bt=RegExp(Jt,"g");function $t(e){return function(r){return Gt(Ft(Wt(r).replace(Bt,"")),e,"")}}_e.exports=$t});var Ze=u((fi,He)=>{function Yt(e,r,t){var i=-1,n=e.length;r<0&&(r=-r>n?0:n+r),t=t>n?n:t,t<0&&(t+=n),n=r>t?0:t-r>>>0,r>>>=0;for(var a=Array(n);++i<n;)a[i]=e[i+r];return a}He.exports=Yt});var Ee=u((ci,De)=>{var Kt=Ze();function Qt(e,r,t){var i=e.length;return t=t===void 0?i:t,!r&&t>=i?e:Kt(e,r,t)}De.exports=Qt});var h=u((mi,Ie)=>{var Xt="\\ud800-\\udfff",en="\\u0300-\\u036f",rn="\\ufe20-\\ufe2f",tn="\\u20d0-\\u20ff",nn=en+rn+tn,un="\\ufe0e\\ufe0f",an="\\u200d",on=RegExp("["+an+Xt+nn+un+"]");function sn(e){return on.test(e)}Ie.exports=sn});var ze=u((pi,ke)=>{function dn(e){return e.split("")}ke.exports=dn});var Ke=u((gi,Ye)=>{var Ge="\\ud800-\\udfff",ln="\\u0300-\\u036f",fn="\\ufe20-\\ufe2f",cn="\\u20d0-\\u20ff",mn=ln+fn+cn,pn="\\ufe0e\\ufe0f",gn="["+Ge+"]",y="["+mn+"]",T="\\ud83c[\\udffb-\\udfff]",bn="(?:"+y+"|"+T+")",We="[^"+Ge+"]",Fe="(?:\\ud83c[\\udde6-\\uddff]){2}",Je="[\\ud800-\\udbff][\\udc00-\\udfff]",xn="\\u200d",Be=bn+"?",$e="["+pn+"]?",hn="(?:"+xn+"(?:"+[We,Fe,Je].join("|")+")"+$e+Be+")*",yn=$e+Be+hn,Tn="(?:"+[We+y+"?",y,Fe,Je,gn].join("|")+")",Cn=RegExp(T+"(?="+T+")|"+Tn+yn,"g");function wn(e){return e.match(Cn)||[]}Ye.exports=wn});var Xe=u((bi,Qe)=>{var vn=ze(),Rn=h(),Pn=Ke();function Sn(e){return Rn(e)?Pn(e):vn(e)}Qe.exports=Sn});var rr=u((xi,er)=>{var An=Ee(),qn=h(),On=Xe(),Mn=b();function jn(e){return function(r){r=Mn(r);var t=qn(r)?On(r):void 0,i=t?t[0]:r.charAt(0),n=t?An(t,1).join(""):r.slice(1);return i[e]()+n}}er.exports=jn});var nr=u((hi,tr)=>{var Ln=rr(),Un=Ln("toUpperCase");tr.exports=Un});var ur=u((yi,ir)=>{var Nn=Ve(),_n=nr(),Vn=Nn(function(e,r,t){return e+(t?" ":"")+_n(r)});ir.exports=Vn});var Hn=Tr(ur());function ar(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(ar):e}function Zn(e,r){return p(this,null,function*(){var s;let{data:{key:t,params:i}}=e,n,a;try{n=yield r(...i)}catch(o){n=void 0;try{a=o.toString()}catch(d){a="Exception can't be stringified."}}let l={key:t};n!==void 0&&(n=ar(n),l.result={type:"string",value:n}),a!==void 0&&(l.error=a),((s=e.source)==null?void 0:s.postMessage).call(s,l,"*")})}function or(e){return typeof window!="undefined"&&window.addEventListener("message",r=>Zn(r,e.run)),P(x({},e),{json:JSON.stringify(In(e),null,2)})}var Dn=`
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
    `,En=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function In(e){let{name:r,category:t,description:i,author:n,result:a,params:l,about:s,video:o}=e,{icon:d=En}=e;return d==="glide"&&(d=Dn),{name:r,category:t,description:i,author:n,result:a,about:s,icon:d,video:o,params:Object.entries(l).map(([dr,lr])=>x({name:dr},lr))}}function sr(e,r){let t="?"+Object.entries(r).map(([i,n])=>`${encodeURIComponent(i)}=${encodeURIComponent(n)}`).join("&");return e+t}var C;(function(r){r.UPC_A="UPC_A"})(C||(C={}));var kn=(e,r)=>p(void 0,null,function*(){let{value:t}=e,{value:i=500}=r;if(t!==void 0)return sr("https://mobiledemand-barcode.azurewebsites.net/barcode/image",{content:t,size:i,symbology:C.UPC_A,format:"png",text:!0})}),Ri=or({name:"Barcode",category:"Image",description:"Generates barcode images",about:`
      Uses [ruggedtabletpc.com](https://ruggedtabletpc.com) to generate images of barcodes.

      Only supports 11-digit barcodes for now.
    `,author:"David Siegel <david@glideapps.com>",params:{content:{displayName:"Content",type:"primitive"},size:{displayName:"Size",type:"number"}},example:{content:12345678910,size:250},result:{type:"image-uri"},run:kn,icon:`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4H1V44H3V4Z" fill="currentColor"/>
    <path d="M47 4H45V44H47V4Z" fill="currentColor"/>
    <path d="M8 4H6V39H8V4Z" fill="currentColor"/>
    <path d="M42 4H40V39H42V4Z" fill="currentColor"/>
    <path d="M37 4H35V39H37V4Z" fill="currentColor"/>
    <path d="M18 4H11V39H18V4Z" fill="currentColor"/>
    <path d="M33 4H27V39H33V4Z" fill="currentColor"/>
    <path d="M24 4H21V39H24V4Z" fill="currentColor"/>
    </svg>`});})();
//# sourceMappingURL=index.js.map

var Yr=Object.create;var O=Object.defineProperty,$r=Object.defineProperties,et=Object.getOwnPropertyDescriptor,rt=Object.getOwnPropertyDescriptors,tt=Object.getOwnPropertyNames,ee=Object.getOwnPropertySymbols,it=Object.getPrototypeOf,re=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable;var te=(e,r,t)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,A=(e,r)=>{for(var t in r||(r={}))re.call(r,t)&&te(e,t,r[t]);if(ee)for(var t of ee(r))nt.call(r,t)&&te(e,t,r[t]);return e},I=(e,r)=>$r(e,rt(r)),at=e=>O(e,"__esModule",{value:!0});var ot=(e=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(e,{get:(r,t)=>(typeof require!="undefined"?require:r)[t]}):e)(function(e){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var h=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var ut=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of tt(r))!re.call(e,i)&&i!=="default"&&O(e,i,{get:()=>r[i],enumerable:!(t=et(r,i))||t.enumerable});return e},G=e=>ut(at(O(e!=null?Yr(it(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var ie=(e,r,t)=>new Promise((i,n)=>{var a=s=>{try{o(t.next(s))}catch(l){n(l)}},u=s=>{try{o(t.throw(s))}catch(l){n(l)}},o=s=>s.done?i(s.value):Promise.resolve(s.value).then(a,u);o((t=t.apply(e,r)).next())});var ae=h((_n,ne)=>{function st(e,r,t,i){var n=-1,a=e==null?0:e.length;for(i&&a&&(t=e[++n]);++n<a;)t=r(t,e[n],n,e);return t}ne.exports=st});var ue=h((kn,oe)=>{function ft(e){return function(r){return e==null?void 0:e[r]}}oe.exports=ft});var fe=h((Nn,se)=>{var lt=ue(),ht={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},dt=lt(ht);se.exports=dt});var he=h((Bn,le)=>{var gt=typeof global=="object"&&global&&global.Object===Object&&global;le.exports=gt});var ge=h((On,de)=>{var ct=he(),mt=typeof self=="object"&&self&&self.Object===Object&&self,pt=ct||mt||Function("return this")();de.exports=pt});var q=h((In,ce)=>{var vt=ge(),wt=vt.Symbol;ce.exports=wt});var pe=h((qn,me)=>{function bt(e,r){for(var t=-1,i=e==null?0:e.length,n=Array(i);++t<i;)n[t]=r(e[t],t,e);return n}me.exports=bt});var we=h((Un,ve)=>{var xt=Array.isArray;ve.exports=xt});var ye=h((Zn,Te)=>{var be=q(),xe=Object.prototype,Tt=xe.hasOwnProperty,yt=xe.toString,k=be?be.toStringTag:void 0;function Ct(e){var r=Tt.call(e,k),t=e[k];try{e[k]=void 0;var i=!0}catch(a){}var n=yt.call(e);return i&&(r?e[k]=t:delete e[k]),n}Te.exports=Ct});var Pe=h((Gn,Ce)=>{var Pt=Object.prototype,Rt=Pt.toString;function Et(e){return Rt.call(e)}Ce.exports=Et});var Ae=h((Fn,He)=>{var Re=q(),Ht=ye(),At=Pe(),Lt="[object Null]",Mt="[object Undefined]",Ee=Re?Re.toStringTag:void 0;function Vt(e){return e==null?e===void 0?Mt:Lt:Ee&&Ee in Object(e)?Ht(e):At(e)}He.exports=Vt});var Me=h((jn,Le)=>{function Dt(e){return e!=null&&typeof e=="object"}Le.exports=Dt});var De=h((Qn,Ve)=>{var St=Ae(),_t=Me(),kt="[object Symbol]";function Nt(e){return typeof e=="symbol"||_t(e)&&St(e)==kt}Ve.exports=Nt});var Oe=h((zn,Be)=>{var Se=q(),Bt=pe(),Ot=we(),It=De(),qt=1/0,_e=Se?Se.prototype:void 0,ke=_e?_e.toString:void 0;function Ne(e){if(typeof e=="string")return e;if(Ot(e))return Bt(e,Ne)+"";if(It(e))return ke?ke.call(e):"";var r=e+"";return r=="0"&&1/e==-qt?"-0":r}Be.exports=Ne});var U=h((Wn,Ie)=>{var Ut=Oe();function Zt(e){return e==null?"":Ut(e)}Ie.exports=Zt});var Ue=h((Kn,qe)=>{var Gt=fe(),Ft=U(),jt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Qt="\\u0300-\\u036f",zt="\\ufe20-\\ufe2f",Wt="\\u20d0-\\u20ff",Kt=Qt+zt+Wt,Jt="["+Kt+"]",Xt=RegExp(Jt,"g");function Yt(e){return e=Ft(e),e&&e.replace(jt,Gt).replace(Xt,"")}qe.exports=Yt});var Ge=h((Jn,Ze)=>{var $t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ei(e){return e.match($t)||[]}Ze.exports=ei});var je=h((Xn,Fe)=>{var ri=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ti(e){return ri.test(e)}Fe.exports=ti});var lr=h((Yn,fr)=>{var Qe="\\ud800-\\udfff",ii="\\u0300-\\u036f",ni="\\ufe20-\\ufe2f",ai="\\u20d0-\\u20ff",oi=ii+ni+ai,ze="\\u2700-\\u27bf",We="a-z\\xdf-\\xf6\\xf8-\\xff",ui="\\xac\\xb1\\xd7\\xf7",si="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",fi="\\u2000-\\u206f",li=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ke="A-Z\\xc0-\\xd6\\xd8-\\xde",hi="\\ufe0e\\ufe0f",Je=ui+si+fi+li,Xe="['\u2019]",Ye="["+Je+"]",di="["+oi+"]",$e="\\d+",gi="["+ze+"]",er="["+We+"]",rr="[^"+Qe+Je+$e+ze+We+Ke+"]",ci="\\ud83c[\\udffb-\\udfff]",mi="(?:"+di+"|"+ci+")",pi="[^"+Qe+"]",tr="(?:\\ud83c[\\udde6-\\uddff]){2}",ir="[\\ud800-\\udbff][\\udc00-\\udfff]",V="["+Ke+"]",vi="\\u200d",nr="(?:"+er+"|"+rr+")",wi="(?:"+V+"|"+rr+")",ar="(?:"+Xe+"(?:d|ll|m|re|s|t|ve))?",or="(?:"+Xe+"(?:D|LL|M|RE|S|T|VE))?",ur=mi+"?",sr="["+hi+"]?",bi="(?:"+vi+"(?:"+[pi,tr,ir].join("|")+")"+sr+ur+")*",xi="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ti="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",yi=sr+ur+bi,Ci="(?:"+[gi,tr,ir].join("|")+")"+yi,Pi=RegExp([V+"?"+er+"+"+ar+"(?="+[Ye,V,"$"].join("|")+")",wi+"+"+or+"(?="+[Ye,V+nr,"$"].join("|")+")",V+"?"+nr+"+"+ar,V+"+"+or,Ti,xi,$e,Ci].join("|"),"g");function Ri(e){return e.match(Pi)||[]}fr.exports=Ri});var dr=h(($n,hr)=>{var Ei=Ge(),Hi=je(),Ai=U(),Li=lr();function Mi(e,r,t){return e=Ai(e),r=t?void 0:r,r===void 0?Hi(e)?Li(e):Ei(e):e.match(r)||[]}hr.exports=Mi});var cr=h((ea,gr)=>{var Vi=ae(),Di=Ue(),Si=dr(),_i="['\u2019]",ki=RegExp(_i,"g");function Ni(e){return function(r){return Vi(Si(Di(r).replace(ki,"")),e,"")}}gr.exports=Ni});var pr=h((ra,mr)=>{function Bi(e,r,t){var i=-1,n=e.length;r<0&&(r=-r>n?0:n+r),t=t>n?n:t,t<0&&(t+=n),n=r>t?0:t-r>>>0,r>>>=0;for(var a=Array(n);++i<n;)a[i]=e[i+r];return a}mr.exports=Bi});var wr=h((ta,vr)=>{var Oi=pr();function Ii(e,r,t){var i=e.length;return t=t===void 0?i:t,!r&&t>=i?e:Oi(e,r,t)}vr.exports=Ii});var F=h((ia,br)=>{var qi="\\ud800-\\udfff",Ui="\\u0300-\\u036f",Zi="\\ufe20-\\ufe2f",Gi="\\u20d0-\\u20ff",Fi=Ui+Zi+Gi,ji="\\ufe0e\\ufe0f",Qi="\\u200d",zi=RegExp("["+Qi+qi+Fi+ji+"]");function Wi(e){return zi.test(e)}br.exports=Wi});var Tr=h((na,xr)=>{function Ki(e){return e.split("")}xr.exports=Ki});var Lr=h((aa,Ar)=>{var yr="\\ud800-\\udfff",Ji="\\u0300-\\u036f",Xi="\\ufe20-\\ufe2f",Yi="\\u20d0-\\u20ff",$i=Ji+Xi+Yi,en="\\ufe0e\\ufe0f",rn="["+yr+"]",j="["+$i+"]",Q="\\ud83c[\\udffb-\\udfff]",tn="(?:"+j+"|"+Q+")",Cr="[^"+yr+"]",Pr="(?:\\ud83c[\\udde6-\\uddff]){2}",Rr="[\\ud800-\\udbff][\\udc00-\\udfff]",nn="\\u200d",Er=tn+"?",Hr="["+en+"]?",an="(?:"+nn+"(?:"+[Cr,Pr,Rr].join("|")+")"+Hr+Er+")*",on=Hr+Er+an,un="(?:"+[Cr+j+"?",j,Pr,Rr,rn].join("|")+")",sn=RegExp(Q+"(?="+Q+")|"+un+on,"g");function fn(e){return e.match(sn)||[]}Ar.exports=fn});var Vr=h((oa,Mr)=>{var ln=Tr(),hn=F(),dn=Lr();function gn(e){return hn(e)?dn(e):ln(e)}Mr.exports=gn});var Sr=h((ua,Dr)=>{var cn=wr(),mn=F(),pn=Vr(),vn=U();function wn(e){return function(r){r=vn(r);var t=mn(r)?pn(r):void 0,i=t?t[0]:r.charAt(0),n=t?cn(t,1).join(""):r.slice(1);return i[e]()+n}}Dr.exports=wn});var kr=h((sa,_r)=>{var bn=Sr(),xn=bn("toUpperCase");_r.exports=xn});var Br=h((fa,Nr)=>{var Tn=cr(),yn=kr(),Cn=Tn(function(e,r,t){return e+(t?" ":"")+yn(r)});Nr.exports=Cn});var Gr=h((ha,K)=>{function Ur(e){this.mode=w.MODE_8BIT_BYTE,this.data=e,this.parsedData=[];for(var r=0,t=this.data.length;r<t;r++){var i=[],n=this.data.charCodeAt(r);n>65536?(i[0]=240|(n&1835008)>>>18,i[1]=128|(n&258048)>>>12,i[2]=128|(n&4032)>>>6,i[3]=128|n&63):n>2048?(i[0]=224|(n&61440)>>>12,i[1]=128|(n&4032)>>>6,i[2]=128|n&63):n>128?(i[0]=192|(n&1984)>>>6,i[1]=128|n&63):i[0]=n,this.parsedData.push(i)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}Ur.prototype={getLength:function(e){return this.parsedData.length},write:function(e){for(var r=0,t=this.parsedData.length;r<t;r++)e.put(this.parsedData[r],8)}};function C(e,r){this.typeNumber=e,this.errorCorrectLevel=r,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}C.prototype={addData:function(e){var r=new Ur(e);this.dataList.push(r),this.dataCache=null},isDark:function(e,r){if(e<0||this.moduleCount<=e||r<0||this.moduleCount<=r)throw new Error(e+","+r);return this.modules[e][r]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(e,r){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var t=0;t<this.moduleCount;t++){this.modules[t]=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++)this.modules[t][i]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,r),this.typeNumber>=7&&this.setupTypeNumber(e),this.dataCache==null&&(this.dataCache=C.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,r)},setupPositionProbePattern:function(e,r){for(var t=-1;t<=7;t++)if(!(e+t<=-1||this.moduleCount<=e+t))for(var i=-1;i<=7;i++)r+i<=-1||this.moduleCount<=r+i||(0<=t&&t<=6&&(i==0||i==6)||0<=i&&i<=6&&(t==0||t==6)||2<=t&&t<=4&&2<=i&&i<=4?this.modules[e+t][r+i]=!0:this.modules[e+t][r+i]=!1)},getBestMaskPattern:function(){for(var e=0,r=0,t=0;t<8;t++){this.makeImpl(!0,t);var i=d.getLostPoint(this);(t==0||e>i)&&(e=i,r=t)}return r},createMovieClip:function(e,r,t){var i=e.createEmptyMovieClip(r,t),n=1;this.make();for(var a=0;a<this.modules.length;a++)for(var u=a*n,o=0;o<this.modules[a].length;o++){var s=o*n,l=this.modules[a][o];l&&(i.beginFill(0,100),i.moveTo(s,u),i.lineTo(s+n,u),i.lineTo(s+n,u+n),i.lineTo(s,u+n),i.endFill())}return i},setupTimingPattern:function(){for(var e=8;e<this.moduleCount-8;e++)this.modules[e][6]==null&&(this.modules[e][6]=e%2==0);for(var r=8;r<this.moduleCount-8;r++)this.modules[6][r]==null&&(this.modules[6][r]=r%2==0)},setupPositionAdjustPattern:function(){for(var e=d.getPatternPosition(this.typeNumber),r=0;r<e.length;r++)for(var t=0;t<e.length;t++){var i=e[r],n=e[t];if(this.modules[i][n]==null)for(var a=-2;a<=2;a++)for(var u=-2;u<=2;u++)a==-2||a==2||u==-2||u==2||a==0&&u==0?this.modules[i+a][n+u]=!0:this.modules[i+a][n+u]=!1}},setupTypeNumber:function(e){for(var r=d.getBCHTypeNumber(this.typeNumber),t=0;t<18;t++){var i=!e&&(r>>t&1)==1;this.modules[Math.floor(t/3)][t%3+this.moduleCount-8-3]=i}for(var t=0;t<18;t++){var i=!e&&(r>>t&1)==1;this.modules[t%3+this.moduleCount-8-3][Math.floor(t/3)]=i}},setupTypeInfo:function(e,r){for(var t=this.errorCorrectLevel<<3|r,i=d.getBCHTypeInfo(t),n=0;n<15;n++){var a=!e&&(i>>n&1)==1;n<6?this.modules[n][8]=a:n<8?this.modules[n+1][8]=a:this.modules[this.moduleCount-15+n][8]=a}for(var n=0;n<15;n++){var a=!e&&(i>>n&1)==1;n<8?this.modules[8][this.moduleCount-n-1]=a:n<9?this.modules[8][15-n-1+1]=a:this.modules[8][15-n-1]=a}this.modules[this.moduleCount-8][8]=!e},mapData:function(e,r){for(var t=-1,i=this.moduleCount-1,n=7,a=0,u=this.moduleCount-1;u>0;u-=2)for(u==6&&u--;;){for(var o=0;o<2;o++)if(this.modules[i][u-o]==null){var s=!1;a<e.length&&(s=(e[a]>>>n&1)==1);var l=d.getMask(r,i,u-o);l&&(s=!s),this.modules[i][u-o]=s,n--,n==-1&&(a++,n=7)}if(i+=t,i<0||this.moduleCount<=i){i-=t,t=-t;break}}}};C.PAD0=236;C.PAD1=17;C.createData=function(e,r,t){for(var i=P.getRSBlocks(e,r),n=new Zr,a=0;a<t.length;a++){var u=t[a];n.put(u.mode,4),n.put(u.getLength(),d.getLengthInBits(u.mode,e)),u.write(n)}for(var o=0,a=0;a<i.length;a++)o+=i[a].dataCount;if(n.getLengthInBits()>o*8)throw new Error("code length overflow. ("+n.getLengthInBits()+">"+o*8+")");for(n.getLengthInBits()+4<=o*8&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(!1);for(;!(n.getLengthInBits()>=o*8||(n.put(C.PAD0,8),n.getLengthInBits()>=o*8));)n.put(C.PAD1,8);return C.createBytes(n,i)};C.createBytes=function(e,r){for(var t=0,i=0,n=0,a=new Array(r.length),u=new Array(r.length),o=0;o<r.length;o++){var s=r[o].dataCount,l=r[o].totalCount-s;i=Math.max(i,s),n=Math.max(n,l),a[o]=new Array(s);for(var f=0;f<a[o].length;f++)a[o][f]=255&e.buffer[f+t];t+=s;var p=d.getErrorCorrectPolynomial(l),R=new D(a[o],p.getLength()-1),b=R.mod(p);u[o]=new Array(p.getLength()-1);for(var f=0;f<u[o].length;f++){var E=f+b.getLength()-u[o].length;u[o][f]=E>=0?b.get(E):0}}for(var H=0,f=0;f<r.length;f++)H+=r[f].totalCount;for(var m=new Array(H),y=0,f=0;f<i;f++)for(var o=0;o<r.length;o++)f<a[o].length&&(m[y++]=a[o][f]);for(var f=0;f<n;f++)for(var o=0;o<r.length;o++)f<u[o].length&&(m[y++]=u[o][f]);return m};var w={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3},L={L:1,M:0,Q:3,H:2},M={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},d={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,G18:1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,G15_MASK:1<<14|1<<12|1<<10|1<<4|1<<1,getBCHTypeInfo:function(e){for(var r=e<<10;d.getBCHDigit(r)-d.getBCHDigit(d.G15)>=0;)r^=d.G15<<d.getBCHDigit(r)-d.getBCHDigit(d.G15);return(e<<10|r)^d.G15_MASK},getBCHTypeNumber:function(e){for(var r=e<<12;d.getBCHDigit(r)-d.getBCHDigit(d.G18)>=0;)r^=d.G18<<d.getBCHDigit(r)-d.getBCHDigit(d.G18);return e<<12|r},getBCHDigit:function(e){for(var r=0;e!=0;)r++,e>>>=1;return r},getPatternPosition:function(e){return d.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,r,t){switch(e){case M.PATTERN000:return(r+t)%2==0;case M.PATTERN001:return r%2==0;case M.PATTERN010:return t%3==0;case M.PATTERN011:return(r+t)%3==0;case M.PATTERN100:return(Math.floor(r/2)+Math.floor(t/3))%2==0;case M.PATTERN101:return r*t%2+r*t%3==0;case M.PATTERN110:return(r*t%2+r*t%3)%2==0;case M.PATTERN111:return(r*t%3+(r+t)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var r=new D([1],0),t=0;t<e;t++)r=r.multiply(new D([1,c.gexp(t)],0));return r},getLengthInBits:function(e,r){if(1<=r&&r<10)switch(e){case w.MODE_NUMBER:return 10;case w.MODE_ALPHA_NUM:return 9;case w.MODE_8BIT_BYTE:return 8;case w.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(r<27)switch(e){case w.MODE_NUMBER:return 12;case w.MODE_ALPHA_NUM:return 11;case w.MODE_8BIT_BYTE:return 16;case w.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else if(r<41)switch(e){case w.MODE_NUMBER:return 14;case w.MODE_ALPHA_NUM:return 13;case w.MODE_8BIT_BYTE:return 16;case w.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}else throw new Error("type:"+r)},getLostPoint:function(e){for(var r=e.getModuleCount(),t=0,i=0;i<r;i++)for(var n=0;n<r;n++){for(var a=0,u=e.isDark(i,n),o=-1;o<=1;o++)if(!(i+o<0||r<=i+o))for(var s=-1;s<=1;s++)n+s<0||r<=n+s||o==0&&s==0||u==e.isDark(i+o,n+s)&&a++;a>5&&(t+=3+a-5)}for(var i=0;i<r-1;i++)for(var n=0;n<r-1;n++){var l=0;e.isDark(i,n)&&l++,e.isDark(i+1,n)&&l++,e.isDark(i,n+1)&&l++,e.isDark(i+1,n+1)&&l++,(l==0||l==4)&&(t+=3)}for(var i=0;i<r;i++)for(var n=0;n<r-6;n++)e.isDark(i,n)&&!e.isDark(i,n+1)&&e.isDark(i,n+2)&&e.isDark(i,n+3)&&e.isDark(i,n+4)&&!e.isDark(i,n+5)&&e.isDark(i,n+6)&&(t+=40);for(var n=0;n<r;n++)for(var i=0;i<r-6;i++)e.isDark(i,n)&&!e.isDark(i+1,n)&&e.isDark(i+2,n)&&e.isDark(i+3,n)&&e.isDark(i+4,n)&&!e.isDark(i+5,n)&&e.isDark(i+6,n)&&(t+=40);for(var f=0,n=0;n<r;n++)for(var i=0;i<r;i++)e.isDark(i,n)&&f++;var p=Math.abs(100*f/r/r-50)/5;return t+=p*10,t}},c={glog:function(e){if(e<1)throw new Error("glog("+e+")");return c.LOG_TABLE[e]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return c.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(g=0;g<8;g++)c.EXP_TABLE[g]=1<<g;var g;for(g=8;g<256;g++)c.EXP_TABLE[g]=c.EXP_TABLE[g-4]^c.EXP_TABLE[g-5]^c.EXP_TABLE[g-6]^c.EXP_TABLE[g-8];var g;for(g=0;g<255;g++)c.LOG_TABLE[c.EXP_TABLE[g]]=g;var g;function D(e,r){if(e.length==null)throw new Error(e.length+"/"+r);for(var t=0;t<e.length&&e[t]==0;)t++;this.num=new Array(e.length-t+r);for(var i=0;i<e.length-t;i++)this.num[i]=e[i+t]}D.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var r=new Array(this.getLength()+e.getLength()-1),t=0;t<this.getLength();t++)for(var i=0;i<e.getLength();i++)r[t+i]^=c.gexp(c.glog(this.get(t))+c.glog(e.get(i)));return new D(r,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var r=c.glog(this.get(0))-c.glog(e.get(0)),t=new Array(this.getLength()),i=0;i<this.getLength();i++)t[i]=this.get(i);for(var i=0;i<e.getLength();i++)t[i]^=c.gexp(c.glog(e.get(i))+r);return new D(t,0).mod(e)}};function P(e,r){this.totalCount=e,this.dataCount=r}P.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];P.getRSBlocks=function(e,r){var t=P.getRsBlockTable(e,r);if(t==null)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+r);for(var i=t.length/3,n=[],a=0;a<i;a++)for(var u=t[a*3+0],o=t[a*3+1],s=t[a*3+2],l=0;l<u;l++)n.push(new P(o,s));return n};P.getRsBlockTable=function(e,r){switch(r){case L.L:return P.RS_BLOCK_TABLE[(e-1)*4+0];case L.M:return P.RS_BLOCK_TABLE[(e-1)*4+1];case L.Q:return P.RS_BLOCK_TABLE[(e-1)*4+2];case L.H:return P.RS_BLOCK_TABLE[(e-1)*4+3];default:return}};function Zr(){this.buffer=[],this.length=0}Zr.prototype={get:function(e){var r=Math.floor(e/8);return(this.buffer[r]>>>7-e%8&1)==1},put:function(e,r){for(var t=0;t<r;t++)this.putBit((e>>>r-t-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){var r=Math.floor(this.length/8);this.buffer.length<=r&&this.buffer.push(0),e&&(this.buffer[r]|=128>>>this.length%8),this.length++}};var z=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function W(e){var r=this;if(this.options={padding:4,width:256,height:256,typeNumber:4,color:"#000000",background:"#ffffff",ecl:"M"},typeof e=="string"&&(e={content:e}),e)for(var t in e)this.options[t]=e[t];if(typeof this.options.content!="string")throw new Error("Expected 'content' as string!");if(this.options.content.length===0)throw new Error("Expected 'content' to be non-empty!");if(!(this.options.padding>=0))throw new Error("Expected 'padding' value to be non-negative!");if(!(this.options.width>0)||!(this.options.height>0))throw new Error("Expected 'width' or 'height' value to be higher than zero!");function i(l){switch(l){case"L":return L.L;case"M":return L.M;case"Q":return L.Q;case"H":return L.H;default:throw new Error("Unknwon error correction level: "+l)}}function n(l,f){for(var p=a(l),R=1,b=0,E=0,H=z.length;E<=H;E++){var m=z[E];if(!m)throw new Error("Content too long: expected "+b+" but got "+p);switch(f){case"L":b=m[0];break;case"M":b=m[1];break;case"Q":b=m[2];break;case"H":b=m[3];break;default:throw new Error("Unknwon error correction level: "+f)}if(p<=b)break;R++}if(R>z.length)throw new Error("Content too long");return R}function a(l){var f=encodeURI(l).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return f.length+(f.length!=l?3:0)}var u=this.options.content,o=n(u,this.options.ecl),s=i(this.options.ecl);this.qrcode=new C(o,s),this.qrcode.addData(u),this.qrcode.make()}W.prototype.svg=function(e){var r=this.options||{},t=this.qrcode.modules;typeof e=="undefined"&&(e={container:r.container||"svg"});for(var i=typeof r.pretty!="undefined"?!!r.pretty:!0,n=i?"  ":"",a=i?`\r
`:"",u=r.width,o=r.height,s=t.length,l=u/(s+2*r.padding),f=o/(s+2*r.padding),p=typeof r.join!="undefined"?!!r.join:!1,R=typeof r.swap!="undefined"?!!r.swap:!1,b=typeof r.xmlDeclaration!="undefined"?!!r.xmlDeclaration:!0,E=typeof r.predefined!="undefined"?!!r.predefined:!1,H=E?n+'<defs><path id="qrmodule" d="M0 0 h'+f+" v"+l+' H0 z" style="fill:'+r.color+';shape-rendering:crispEdges;" /></defs>'+a:"",m=n+'<rect x="0" y="0" width="'+u+'" height="'+o+'" style="fill:'+r.background+';shape-rendering:crispEdges;"/>'+a,y="",$="",N=0;N<s;N++)for(var B=0;B<s;B++){var Jr=t[B][N];if(Jr){var x=B*l+r.padding*l,T=N*f+r.padding*f;if(R){var Xr=x;x=T,T=Xr}if(p){var S=l+x,_=f+T;x=Number.isInteger(x)?Number(x):x.toFixed(2),T=Number.isInteger(T)?Number(T):T.toFixed(2),S=Number.isInteger(S)?Number(S):S.toFixed(2),_=Number.isInteger(_)?Number(_):_.toFixed(2),$+="M"+x+","+T+" V"+_+" H"+S+" V"+T+" H"+x+" Z "}else E?y+=n+'<use x="'+x.toString()+'" y="'+T.toString()+'" href="#qrmodule" />'+a:y+=n+'<rect x="'+x.toString()+'" y="'+T.toString()+'" width="'+l+'" height="'+f+'" style="fill:'+r.color+';shape-rendering:crispEdges;"/>'+a}}p&&(y=n+'<path x="0" y="0" style="fill:'+r.color+';shape-rendering:crispEdges;" d="'+$+'" />');var v="";switch(e.container){case"svg":b&&(v+='<?xml version="1.0" standalone="yes"?>'+a),v+='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+u+'" height="'+o+'">'+a,v+=H+m+y,v+="</svg>";break;case"svg-viewbox":b&&(v+='<?xml version="1.0" standalone="yes"?>'+a),v+='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 '+u+" "+o+'">'+a,v+=H+m+y,v+="</svg>";break;case"g":v+='<g width="'+u+'" height="'+o+'">'+a,v+=H+m+y,v+="</g>";break;default:v+=(H+m+y).replace(/^\s+/,"");break}return v};W.prototype.save=function(e,r){var t=this.svg();typeof r!="function"&&(r=function(n,a){});try{var i=ot("fs");i.writeFile(e,t,r)}catch(n){r(n)}};typeof K!="undefined"&&(K.exports=W)});var jr=h((da,Fr)=>{Fr.exports={aqua:/#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,azure:/#f0ffff(ff)?(?!\w)/gi,beige:/#f5f5dc(ff)?(?!\w)/gi,bisque:/#ffe4c4(ff)?(?!\w)/gi,black:/#000000(ff)?(?!\w)|#000(f)?(?!\w)/gi,blue:/#0000ff(ff)?(?!\w)|#00f(f)?(?!\w)/gi,brown:/#a52a2a(ff)?(?!\w)/gi,coral:/#ff7f50(ff)?(?!\w)/gi,cornsilk:/#fff8dc(ff)?(?!\w)/gi,crimson:/#dc143c(ff)?(?!\w)/gi,cyan:/#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,darkblue:/#00008b(ff)?(?!\w)/gi,darkcyan:/#008b8b(ff)?(?!\w)/gi,darkgrey:/#a9a9a9(ff)?(?!\w)/gi,darkred:/#8b0000(ff)?(?!\w)/gi,deeppink:/#ff1493(ff)?(?!\w)/gi,dimgrey:/#696969(ff)?(?!\w)/gi,gold:/#ffd700(ff)?(?!\w)/gi,green:/#008000(ff)?(?!\w)/gi,grey:/#808080(ff)?(?!\w)/gi,honeydew:/#f0fff0(ff)?(?!\w)/gi,hotpink:/#ff69b4(ff)?(?!\w)/gi,indigo:/#4b0082(ff)?(?!\w)/gi,ivory:/#fffff0(ff)?(?!\w)/gi,khaki:/#f0e68c(ff)?(?!\w)/gi,lavender:/#e6e6fa(ff)?(?!\w)/gi,lime:/#00ff00(ff)?(?!\w)|#0f0(f)?(?!\w)/gi,linen:/#faf0e6(ff)?(?!\w)/gi,maroon:/#800000(ff)?(?!\w)/gi,moccasin:/#ffe4b5(ff)?(?!\w)/gi,navy:/#000080(ff)?(?!\w)/gi,oldlace:/#fdf5e6(ff)?(?!\w)/gi,olive:/#808000(ff)?(?!\w)/gi,orange:/#ffa500(ff)?(?!\w)/gi,orchid:/#da70d6(ff)?(?!\w)/gi,peru:/#cd853f(ff)?(?!\w)/gi,pink:/#ffc0cb(ff)?(?!\w)/gi,plum:/#dda0dd(ff)?(?!\w)/gi,purple:/#800080(ff)?(?!\w)/gi,red:/#ff0000(ff)?(?!\w)|#f00(f)?(?!\w)/gi,salmon:/#fa8072(ff)?(?!\w)/gi,seagreen:/#2e8b57(ff)?(?!\w)/gi,seashell:/#fff5ee(ff)?(?!\w)/gi,sienna:/#a0522d(ff)?(?!\w)/gi,silver:/#c0c0c0(ff)?(?!\w)/gi,skyblue:/#87ceeb(ff)?(?!\w)/gi,snow:/#fffafa(ff)?(?!\w)/gi,tan:/#d2b48c(ff)?(?!\w)/gi,teal:/#008080(ff)?(?!\w)/gi,thistle:/#d8bfd8(ff)?(?!\w)/gi,tomato:/#ff6347(ff)?(?!\w)/gi,violet:/#ee82ee(ff)?(?!\w)/gi,wheat:/#f5deb3(ff)?(?!\w)/gi,white:/#ffffff(ff)?(?!\w)|#fff(f)?(?!\w)/gi}});var zr=h((ga,Qr)=>{var J=jr(),X={whitespace:/\s+/g,urlHexPairs:/%[\dA-F]{2}/g,quotes:/"/g};function An(e){return e.trim().replace(X.whitespace," ")}function Ln(e){return encodeURIComponent(e).replace(X.urlHexPairs,Vn)}function Mn(e){return Object.keys(J).forEach(function(r){J[r].test(e)&&(e=e.replace(J[r],r))}),e}function Vn(e){switch(e){case"%20":return" ";case"%3D":return"=";case"%3A":return":";case"%2F":return"/";default:return e.toLowerCase()}}function Y(e){if(typeof e!="string")throw new TypeError("Expected a string, but received "+typeof e);e.charCodeAt(0)===65279&&(e=e.slice(1));var r=Mn(An(e)).replace(X.quotes,"'");return"data:image/svg+xml,"+Ln(r)}Y.toSrcset=function(r){return Y(r).replace(/ /g,"%20")};Qr.exports=Y});var Or=G(Br());function Pn(e){return I(A({},e),{json:JSON.stringify(En(e),null,2)})}var Rn=`
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
    `,Ir=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function En(e){let{name:r,category:t,released:i,description:n,author:a,result:u,params:o,about:s,video:l}=e,{icon:f=Ir}=e;return f==="glide"&&(f=Rn),{name:r,category:t,released:i,description:n,author:a,result:u,about:s,icon:f,video:l,params:Object.entries(o).map(([p,R])=>A({name:p},R))}}var Hn={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:Ir,about:void 0,video:void 0,tests:[],run(){return ie(this,null,function*(){})}},Z=class{constructor(r={},t=[]){this.definition=A(A({},Hn),r),this.requiredParams=[...t]}with(r,t=[]){return new Z(A(A({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){return this.with({category:r})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,t,i){return i===void 0&&(i=(0,Or.default)(t)),this.with({params:I(A({},this.definition.params),{[t]:{type:r,displayName:i}})})}withRequiredParam(r,t,i){return this.withParam(r,t,i).with({},[t])}withPrimitiveParam(r,t){return this.withParam("primitive",r,t)}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredPrimitiveParam(r,t){return this.withRequiredParam("primitive",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}withStringArrayParam(r,t){return this.withParam({kind:"array",items:"string"},r,t)}withRequiredStringArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"string"},r,t)}withNumberArrayParam(r,t){return this.withParam({kind:"array",items:"number"},r,t)}withPrimitiveArrayParam(r,t){return this.withParam({kind:"array",items:"primitive"},r,t)}withRequiredPrimitiveArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"primitive"},r,t)}withExample(r){return this.with({example:r})}run(r){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function a(...u){let o={};if(u.forEach(({value:s},l)=>{o[n[l]]=s}),!i.some(s=>o[s]===void 0))return r(o)}return Pn(I(A({},this.definition),{run:a}))}};function qr(e){return new Z({name:e})}var Wr=G(Gr()),Kr=G(zr()),Dn=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2H2V16H16V2ZM14 14H4V4H14V14Z" fill="currentColor"/>
      <path d="M31 42H29V46H46V44H31V42Z" fill="currentColor"/>
      <path d="M12 6H6V12H12V6Z" fill="currentColor"/>
      <path d="M2 46H16V32H2V46ZM4 34H14V44H4V34Z" fill="currentColor"/>
      <path d="M12 36H6V42H12V36Z" fill="currentColor"/>
      <path d="M32 2V16H46V2H32ZM44 14H34V4H44V14Z" fill="currentColor"/>
      <path d="M42 6H36V12H42V6Z" fill="currentColor"/>
      <path d="M46 18H42V22H46V18Z" fill="currentColor"/>
      <path d="M6 26H2V30H6V26Z" fill="currentColor"/>
      <path d="M23 18H15V20H25V16V14H27V10H25H23H21V6H23V8H30V2H28V6H25V2H24H20H19V12H23V14H19V16H23V18Z" fill="currentColor"/>
      <path d="M5 24H9H11H12V26H8V28H12V30H20V28H14V26V22H11V19H9V22H7V18H2V20H5V24Z" fill="currentColor"/>
      <path d="M24 42V37H20V33H18V39H22V42H18V44H22V46H27V44H24V42Z" fill="currentColor"/>
      <path d="M34 22H30V17H28V24H38V22H36V20H39V18H36H34H32V20H34V22Z" fill="currentColor"/>
      <path d="M32 40H35V42H39V40V38V35H35V38H32V35H30V38H28V30H26V28H24V22H17V26H19V24H22V28V32H26V38V40H28H30H32Z" fill="currentColor"/>
      <path d="M44 27H41H39H34V31H32V27H30V33H36V29H39V32H41V29H44V35H41V41H46V39H43V37H46V29V27V24H44V27Z" fill="currentColor"/>
      </svg>
      `,ma=qr("QR Code").withCategory("Image").withDescription("Generate QR codes from any value.").withAuthor("David Siegel","david@glideapps.com").withIcon(Dn).withVideo("https://www.youtube.com/watch?v=142TGhaTMtI").withReleased("direct").withRequiredPrimitiveParam("content").withNumberParam("size").withImageResult().run(({content:e,size:r=250})=>{let t=new Wr.default({content:e,width:r,height:r,join:!0}).svg();return(0,Kr.default)(t)});export{ma as default};
//# sourceMappingURL=function.js.map

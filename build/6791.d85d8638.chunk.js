(self.webpackChunkcms_nhan_dien_to_chuc=self.webpackChunkcms_nhan_dien_to_chuc||[]).push([[6791],{64059:(M,a,i)=>{/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var l={655:(n,s,c)=>{"use strict";c.d(s,{Z:()=>O});var h=c(609),f=c.n(h)()(function(I){return I[1]});f.push([n.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}",""]);const O=f},609:n=>{"use strict";n.exports=function(s){var c=[];return c.toString=function(){return this.map(function(h){var f=s(h);return h[2]?"@media ".concat(h[2]," {").concat(f,"}"):f}).join("")},c.i=function(h,f,O){typeof h=="string"&&(h=[[null,h,""]]);var I={};if(O)for(var m=0;m<this.length;m++){var x=this[m][0];x!=null&&(I[x]=!0)}for(var p=0;p<h.length;p++){var v=[].concat(h[p]);O&&I[v[0]]||(f&&(v[2]?v[2]="".concat(f," and ").concat(v[2]):v[2]=f),c.push(v))}},c}},62:(n,s,c)=>{"use strict";var h,f=function(){return h===void 0&&(h=Boolean(window&&document&&document.all&&!window.atob)),h},O=function(){var k={};return function(w){if(k[w]===void 0){var _=document.querySelector(w);if(window.HTMLIFrameElement&&_ instanceof window.HTMLIFrameElement)try{_=_.contentDocument.head}catch{_=null}k[w]=_}return k[w]}}(),I=[];function m(k){for(var w=-1,_=0;_<I.length;_++)if(I[_].identifier===k){w=_;break}return w}function x(k,w){for(var _={},R=[],z=0;z<k.length;z++){var D=k[z],$=w.base?D[0]+w.base:D[0],ot=_[$]||0,Z="".concat($," ").concat(ot);_[$]=ot+1;var rt=m(Z),yt={css:D[1],media:D[2],sourceMap:D[3]};rt!==-1?(I[rt].references++,I[rt].updater(yt)):I.push({identifier:Z,updater:J(yt,w),references:1}),R.push(Z)}return R}function p(k){var w=document.createElement("style"),_=k.attributes||{};if(_.nonce===void 0){var R=c.nc;R&&(_.nonce=R)}if(Object.keys(_).forEach(function(D){w.setAttribute(D,_[D])}),typeof k.insert=="function")k.insert(w);else{var z=O(k.insert||"head");if(!z)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");z.appendChild(w)}return w}var v,U=(v=[],function(k,w){return v[k]=w,v.filter(Boolean).join(`
`)});function tt(k,w,_,R){var z=_?"":R.media?"@media ".concat(R.media," {").concat(R.css,"}"):R.css;if(k.styleSheet)k.styleSheet.cssText=U(w,z);else{var D=document.createTextNode(z),$=k.childNodes;$[w]&&k.removeChild($[w]),$.length?k.insertBefore(D,$[w]):k.appendChild(D)}}function et(k,w,_){var R=_.css,z=_.media,D=_.sourceMap;if(z?k.setAttribute("media",z):k.removeAttribute("media"),D&&typeof btoa<"u"&&(R+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(D))))," */")),k.styleSheet)k.styleSheet.cssText=R;else{for(;k.firstChild;)k.removeChild(k.firstChild);k.appendChild(document.createTextNode(R))}}var V=null,it=0;function J(k,w){var _,R,z;if(w.singleton){var D=it++;_=V||(V=p(w)),R=tt.bind(null,_,D,!1),z=tt.bind(null,_,D,!0)}else _=p(w),R=et.bind(null,_,w),z=function(){(function($){if($.parentNode===null)return!1;$.parentNode.removeChild($)})(_)};return R(k),function($){if($){if($.css===k.css&&$.media===k.media&&$.sourceMap===k.sourceMap)return;R(k=$)}else z()}}n.exports=function(k,w){(w=w||{}).singleton||typeof w.singleton=="boolean"||(w.singleton=f());var _=x(k=k||[],w);return function(R){if(R=R||[],Object.prototype.toString.call(R)==="[object Array]"){for(var z=0;z<_.length;z++){var D=m(_[z]);I[D].references--}for(var $=x(R,w),ot=0;ot<_.length;ot++){var Z=m(_[ot]);I[Z].references===0&&(I[Z].updater(),I.splice(Z,1))}_=$}}}},704:(n,s,c)=>{n.exports=c(79)("./src/core.js")},492:(n,s,c)=>{n.exports=c(79)("./src/engine.js")},273:(n,s,c)=>{n.exports=c(79)("./src/ui.js")},209:(n,s,c)=>{n.exports=c(79)("./src/utils.js")},79:n=>{"use strict";n.exports=CKEditor5.dll}},y={};function b(n){var s=y[n];if(s!==void 0)return s.exports;var c=y[n]={id:n,exports:{}};return l[n](c,c.exports,b),c.exports}b.n=n=>{var s=n&&n.__esModule?()=>n.default:()=>n;return b.d(s,{a:s}),s},b.d=(n,s)=>{for(var c in s)b.o(s,c)&&!b.o(n,c)&&Object.defineProperty(n,c,{enumerable:!0,get:s[c]})},b.o=(n,s)=>Object.prototype.hasOwnProperty.call(n,s),b.r=n=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},b.nc=void 0;var u={};(()=>{"use strict";b.r(u),b.d(u,{ClassicEditor:()=>bt});var n=b(273),s=b(492),c=b(209);class h extends n.EditorUI{constructor(C,d){super(C),this.view=d,this._toolbarConfig=(0,n.normalizeToolbarConfig)(C.config.get("toolbar")),this._elementReplacer=new c.ElementReplacer}get element(){return this.view.element}init(C){const d=this.editor,E=this.view,F=d.editing.view,j=E.editable,K=F.document.getRoot();j.name=K.rootName,E.render();const L=j.element;this.setEditableElement(j.name,L),E.editable.bind("isFocused").to(this.focusTracker),F.attachDomRoot(L),C&&this._elementReplacer.replace(C,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const C=this.view,d=this.editor.editing.view;this._elementReplacer.restore(),d.detachDomRoot(C.editable.name),C.destroy()}_initToolbar(){const C=this.view;C.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),C.stickyPanel.limiterElement=C.element,C.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:d})=>d||0),C.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(C.toolbar)}_initPlaceholder(){const C=this.editor,d=C.editing.view,E=d.document.getRoot(),F=C.sourceElement,j=C.config.get("placeholder")||F&&F.tagName.toLowerCase()==="textarea"&&F.getAttribute("placeholder");j&&(0,s.enablePlaceholder)({view:d,element:E,text:j,isDirectHost:!1,keepOnFocus:!0})}}var f=b(62),O=b.n(f),I=b(655),m={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};O()(I.Z,m),I.Z.locals;class x extends n.BoxedEditorUIView{constructor(C,d,E={}){super(C),this.stickyPanel=new n.StickyPanelView(C),this.toolbar=new n.ToolbarView(C,{shouldGroupWhenFull:E.shouldToolbarGroupWhenFull}),this.editable=new n.InlineEditableUIView(C,d)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}var p=b(704);const v=function(A){return A!=null&&typeof A=="object"},U=typeof i.g=="object"&&i.g&&i.g.Object===Object&&i.g;var tt=typeof self=="object"&&self&&self.Object===Object&&self;const et=(U||tt||Function("return this")()).Symbol;var V=Object.prototype,it=V.hasOwnProperty,J=V.toString,k=et?et.toStringTag:void 0;const w=function(A){var C=it.call(A,k),d=A[k];try{A[k]=void 0;var E=!0}catch{}var F=J.call(A);return E&&(C?A[k]=d:delete A[k]),F};var _=Object.prototype.toString;const R=function(A){return _.call(A)};var z="[object Null]",D="[object Undefined]",$=et?et.toStringTag:void 0;const ot=function(A){return A==null?A===void 0?D:z:$&&$ in Object(A)?w(A):R(A)},Z=function(A,C){return function(d){return A(C(d))}}(Object.getPrototypeOf,Object);var rt="[object Object]",yt=Function.prototype,Wt=Object.prototype,gt=yt.toString,Nt=Wt.hasOwnProperty,Ut=gt.call(Object);const Ht=function(A){if(!v(A)||ot(A)!=rt)return!1;var C=Z(A);if(C===null)return!0;var d=Nt.call(C,"constructor")&&C.constructor;return typeof d=="function"&&d instanceof d&&gt.call(d)==Ut},Bt=function(A){return v(A)&&A.nodeType===1&&!Ht(A)};class bt extends(0,p.DataApiMixin)((0,p.ElementApiMixin)(p.Editor)){constructor(C,d={}){if(!xt(C)&&d.initialData!==void 0)throw new c.CKEditorError("editor-create-initial-data",null);super(d),this.config.get("initialData")===void 0&&this.config.set("initialData",function(j){return xt(j)?(0,c.getDataFromElement)(j):j}(C)),xt(C)&&(this.sourceElement=C),this.model.document.createRoot();const E=!this.config.get("toolbar.shouldNotGroupWhenFull"),F=new x(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:E});this.ui=new h(this,F),(0,p.attachToForm)(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(C,d={}){return new Promise(E=>{const F=new this(C,d);E(F.initPlugins().then(()=>F.ui.init(xt(C)?C:null)).then(()=>F.data.init(F.config.get("initialData"))).then(()=>F.fire("ready")).then(()=>F))})}}function xt(A){return Bt(A)}})(),(window.CKEditor5=window.CKEditor5||{}).editorClassic=u})()},25737:(M,a,i)=>{M=i.nmd(M);/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(l,y){M.exports=y(i(21272))})(self,l=>(()=>{var y={703:(s,c,h)=>{"use strict";var f=h(414);function O(){}function I(){}I.resetWarningCache=O,s.exports=function(){function m(v,U,tt,et,V,it){if(it!==f){var J=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw J.name="Invariant Violation",J}}function x(){return m}m.isRequired=m;var p={array:m,bigint:m,bool:m,func:m,number:m,object:m,string:m,symbol:m,any:m,arrayOf:x,element:m,elementType:m,instanceOf:x,node:m,objectOf:x,oneOf:x,oneOfType:x,shape:x,exact:x,checkPropTypes:I,resetWarningCache:O};return p.PropTypes=p,p}},697:(s,c,h)=>{s.exports=h(703)()},414:s=>{"use strict";s.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:s=>{"use strict";s.exports=l}},b={};function u(s){var c=b[s];if(c!==void 0)return c.exports;var h=b[s]={exports:{}};return y[s](h,h.exports,u),h.exports}u.n=s=>{var c=s&&s.__esModule?()=>s.default:()=>s;return u.d(c,{a:c}),c},u.d=(s,c)=>{for(var h in c)u.o(c,h)&&!u.o(s,h)&&Object.defineProperty(s,h,{enumerable:!0,get:c[h]})},u.o=(s,c)=>Object.prototype.hasOwnProperty.call(s,c),u.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var n={};return(()=>{"use strict";u.r(n),u.d(n,{CKEditor:()=>Ot,CKEditorContext:()=>pe});var s=u(787),c=u.n(s),h=u(697),f=u.n(h);const O=function(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")},I=typeof i.g=="object"&&i.g&&i.g.Object===Object&&i.g;var m=typeof self=="object"&&self&&self.Object===Object&&self;const x=I||m||Function("return this")(),p=function(){return x.Date.now()};var v=/\s/;const U=function(t){for(var e=t.length;e--&&v.test(t.charAt(e)););return e};var tt=/^\s+/;const et=function(t){return t&&t.slice(0,U(t)+1).replace(tt,"")},V=x.Symbol;var it=Object.prototype,J=it.hasOwnProperty,k=it.toString,w=V?V.toStringTag:void 0;const _=function(t){var e=J.call(t,w),o=t[w];try{t[w]=void 0;var r=!0}catch{}var g=k.call(t);return r&&(e?t[w]=o:delete t[w]),g};var R=Object.prototype.toString;const z=function(t){return R.call(t)};var D="[object Null]",$="[object Undefined]",ot=V?V.toStringTag:void 0;const Z=function(t){return t==null?t===void 0?$:D:ot&&ot in Object(t)?_(t):z(t)},rt=function(t){return t!=null&&typeof t=="object"};var yt="[object Symbol]";const Wt=function(t){return typeof t=="symbol"||rt(t)&&Z(t)==yt};var gt=NaN,Nt=/^[-+]0x[0-9a-f]+$/i,Ut=/^0b[01]+$/i,Ht=/^0o[0-7]+$/i,Bt=parseInt;const bt=function(t){if(typeof t=="number")return t;if(Wt(t))return gt;if(O(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=O(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=et(t);var o=Ut.test(t);return o||Ht.test(t)?Bt(t.slice(2),o?2:8):Nt.test(t)?gt:+t};var xt="Expected a function",A=Math.max,C=Math.min;const d=function(t,e,o){var r,g,S,P,T,G,B=0,Jt=!1,Pt=!1,ft=!0;if(typeof t!="function")throw new TypeError(xt);function Dt(st){var vt=r,Ft=g;return r=g=void 0,B=st,P=t.apply(Ft,vt)}function Zt(st){var vt=st-G;return G===void 0||vt>=e||vt<0||Pt&&st-B>=S}function Tt(){var st=p();if(Zt(st))return ht(st);T=setTimeout(Tt,function(vt){var Ft=e-(vt-G);return Pt?C(Ft,S-(vt-B)):Ft}(st))}function ht(st){return T=void 0,ft&&r?Dt(st):(r=g=void 0,P)}function pt(){var st=p(),vt=Zt(st);if(r=arguments,g=this,G=st,vt){if(T===void 0)return function(Ft){return B=Ft,T=setTimeout(Tt,e),Jt?Dt(Ft):P}(G);if(Pt)return clearTimeout(T),T=setTimeout(Tt,e),Dt(G)}return T===void 0&&(T=setTimeout(Tt,e)),P}return e=bt(e)||0,O(o)&&(Jt=!!o.leading,S=(Pt="maxWait"in o)?A(bt(o.maxWait)||0,e):S,ft="trailing"in o?!!o.trailing:ft),pt.cancel=function(){T!==void 0&&clearTimeout(T),B=0,r=G=g=T=void 0},pt.flush=function(){return T===void 0?P:ht(p())},pt};var E="Expected a function";const F=function(t,e,o){var r=!0,g=!0;if(typeof t!="function")throw new TypeError(E);return O(o)&&(r="leading"in o?!!o.leading:r,g="trailing"in o?!!o.trailing:g),d(t,e,{leading:r,maxWait:e,trailing:g})},j=function(){this.__data__=[],this.size=0},K=function(t,e){return t===e||t!=t&&e!=e},L=function(t,e){for(var o=t.length;o--;)if(K(t[o][0],e))return o;return-1};var at=Array.prototype.splice;const dt=function(t){var e=this.__data__,o=L(e,t);return!(o<0)&&(o==e.length-1?e.pop():at.call(e,o,1),--this.size,!0)},H=function(t){var e=this.__data__,o=L(e,t);return o<0?void 0:e[o][1]},ut=function(t){return L(this.__data__,t)>-1},nt=function(t,e){var o=this.__data__,r=L(o,t);return r<0?(++this.size,o.push([t,e])):o[r][1]=e,this};function Q(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}Q.prototype.clear=j,Q.prototype.delete=dt,Q.prototype.get=H,Q.prototype.has=ut,Q.prototype.set=nt;const Y=Q,jt=function(){this.__data__=new Y,this.size=0},wt=function(t){var e=this.__data__,o=e.delete(t);return this.size=e.size,o},_t=function(t){return this.__data__.get(t)},lt=function(t){return this.__data__.has(t)};var mt="[object AsyncFunction]",At="[object Function]",X="[object GeneratorFunction]",ct="[object Proxy]";const kt=function(t){if(!O(t))return!1;var e=Z(t);return e==At||e==X||e==mt||e==ct},It=x["__core-js_shared__"];var Rt=function(){var t=/[^.]+$/.exec(It&&It.keys&&It.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();const ao=function(t){return!!Rt&&Rt in t};var lo=Function.prototype.toString;const Ct=function(t){if(t!=null){try{return lo.call(t)}catch{}try{return t+""}catch{}}return""};var uo=/^\[object .+?Constructor\]$/,ho=Function.prototype,fo=Object.prototype,po=ho.toString,go=fo.hasOwnProperty,bo=RegExp("^"+po.call(go).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const mo=function(t){return!(!O(t)||ao(t))&&(kt(t)?bo:uo).test(Ct(t))},ko=function(t,e){return t?.[e]},St=function(t,e){var o=ko(t,e);return mo(o)?o:void 0},Gt=St(x,"Map"),Vt=St(Object,"create"),vo=function(){this.__data__=Vt?Vt(null):{},this.size=0},yo=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e};var xo="__lodash_hash_undefined__",wo=Object.prototype.hasOwnProperty;const jo=function(t){var e=this.__data__;if(Vt){var o=e[t];return o===xo?void 0:o}return wo.call(e,t)?e[t]:void 0};var _o=Object.prototype.hasOwnProperty;const Co=function(t){var e=this.__data__;return Vt?e[t]!==void 0:_o.call(e,t)};var So="__lodash_hash_undefined__";const Eo=function(t,e){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=Vt&&e===void 0?So:e,this};function Mt(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}Mt.prototype.clear=vo,Mt.prototype.delete=yo,Mt.prototype.get=jo,Mt.prototype.has=Co,Mt.prototype.set=Eo;const be=Mt,Oo=function(){this.size=0,this.__data__={hash:new be,map:new(Gt||Y),string:new be}},Po=function(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null},Xt=function(t,e){var o=t.__data__;return Po(e)?o[typeof e=="string"?"string":"hash"]:o.map},To=function(t){var e=Xt(this,t).delete(t);return this.size-=e?1:0,e},Fo=function(t){return Xt(this,t).get(t)},Ao=function(t){return Xt(this,t).has(t)},Io=function(t,e){var o=Xt(this,t),r=o.size;return o.set(t,e),this.size+=o.size==r?0:1,this};function $t(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}$t.prototype.clear=Oo,$t.prototype.delete=To,$t.prototype.get=Fo,$t.prototype.has=Ao,$t.prototype.set=Io;const Ro=$t;var Mo=200;const $o=function(t,e){var o=this.__data__;if(o instanceof Y){var r=o.__data__;if(!Gt||r.length<Mo-1)return r.push([t,e]),this.size=++o.size,this;o=this.__data__=new Ro(r)}return o.set(t,e),this.size=o.size,this};function zt(t){var e=this.__data__=new Y(t);this.size=e.size}zt.prototype.clear=jt,zt.prototype.delete=wt,zt.prototype.get=_t,zt.prototype.has=lt,zt.prototype.set=$o;const zo=zt,Lo=function(t,e){for(var o=-1,r=t==null?0:t.length;++o<r&&e(t[o],o,t)!==!1;);return t},me=function(){try{var t=St(Object,"defineProperty");return t({},"",{}),t}catch{}}(),ke=function(t,e,o){e=="__proto__"&&me?me(t,e,{configurable:!0,enumerable:!0,value:o,writable:!0}):t[e]=o};var Do=Object.prototype.hasOwnProperty;const ve=function(t,e,o){var r=t[e];Do.call(t,e)&&K(r,o)&&(o!==void 0||e in t)||ke(t,e,o)},Yt=function(t,e,o,r){var g=!o;o||(o={});for(var S=-1,P=e.length;++S<P;){var T=e[S],G=r?r(o[T],t[T],T,o,t):void 0;G===void 0&&(G=t[T]),g?ke(o,T,G):ve(o,T,G)}return o},Wo=function(t,e){for(var o=-1,r=Array(t);++o<t;)r[o]=e(o);return r};var No="[object Arguments]";const ye=function(t){return rt(t)&&Z(t)==No};var xe=Object.prototype,Uo=xe.hasOwnProperty,Ho=xe.propertyIsEnumerable;const Bo=ye(function(){return arguments}())?ye:function(t){return rt(t)&&Uo.call(t,"callee")&&!Ho.call(t,"callee")},qt=Array.isArray,Go=function(){return!1};var we=a&&!a.nodeType&&a,je=we&&!0&&M&&!M.nodeType&&M,_e=je&&je.exports===we?x.Buffer:void 0;const Ce=(_e?_e.isBuffer:void 0)||Go;var Vo=9007199254740991,Ko=/^(?:0|[1-9]\d*)$/;const Qo=function(t,e){var o=typeof t;return!!(e=e??Vo)&&(o=="number"||o!="symbol"&&Ko.test(t))&&t>-1&&t%1==0&&t<e};var Zo=9007199254740991;const Se=function(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Zo};var N={};N["[object Float32Array]"]=N["[object Float64Array]"]=N["[object Int8Array]"]=N["[object Int16Array]"]=N["[object Int32Array]"]=N["[object Uint8Array]"]=N["[object Uint8ClampedArray]"]=N["[object Uint16Array]"]=N["[object Uint32Array]"]=!0,N["[object Arguments]"]=N["[object Array]"]=N["[object ArrayBuffer]"]=N["[object Boolean]"]=N["[object DataView]"]=N["[object Date]"]=N["[object Error]"]=N["[object Function]"]=N["[object Map]"]=N["[object Number]"]=N["[object Object]"]=N["[object RegExp]"]=N["[object Set]"]=N["[object String]"]=N["[object WeakMap]"]=!1;const Xo=function(t){return rt(t)&&Se(t.length)&&!!N[Z(t)]},te=function(t){return function(e){return t(e)}};var Ee=a&&!a.nodeType&&a,Kt=Ee&&!0&&M&&!M.nodeType&&M,ee=Kt&&Kt.exports===Ee&&I.process;const Lt=function(){try{var t=Kt&&Kt.require&&Kt.require("util").types;return t||ee&&ee.binding&&ee.binding("util")}catch{}}();var Oe=Lt&&Lt.isTypedArray;const Yo=Oe?te(Oe):Xo;var Jo=Object.prototype.hasOwnProperty;const Pe=function(t,e){var o=qt(t),r=!o&&Bo(t),g=!o&&!r&&Ce(t),S=!o&&!r&&!g&&Yo(t),P=o||r||g||S,T=P?Wo(t.length,String):[],G=T.length;for(var B in t)!e&&!Jo.call(t,B)||P&&(B=="length"||g&&(B=="offset"||B=="parent")||S&&(B=="buffer"||B=="byteLength"||B=="byteOffset")||Qo(B,G))||T.push(B);return T};var qo=Object.prototype;const oe=function(t){var e=t&&t.constructor;return t===(typeof e=="function"&&e.prototype||qo)},Te=function(t,e){return function(o){return t(e(o))}},tr=Te(Object.keys,Object);var er=Object.prototype.hasOwnProperty;const or=function(t){if(!oe(t))return tr(t);var e=[];for(var o in Object(t))er.call(t,o)&&o!="constructor"&&e.push(o);return e},Fe=function(t){return t!=null&&Se(t.length)&&!kt(t)},re=function(t){return Fe(t)?Pe(t):or(t)},rr=function(t,e){return t&&Yt(e,re(e),t)},nr=function(t){var e=[];if(t!=null)for(var o in Object(t))e.push(o);return e};var ir=Object.prototype.hasOwnProperty;const cr=function(t){if(!O(t))return nr(t);var e=oe(t),o=[];for(var r in t)(r!="constructor"||!e&&ir.call(t,r))&&o.push(r);return o},ne=function(t){return Fe(t)?Pe(t,!0):cr(t)},sr=function(t,e){return t&&Yt(e,ne(e),t)};var Ae=a&&!a.nodeType&&a,Ie=Ae&&!0&&M&&!M.nodeType&&M,Re=Ie&&Ie.exports===Ae?x.Buffer:void 0,Me=Re?Re.allocUnsafe:void 0;const ar=function(t,e){if(e)return t.slice();var o=t.length,r=Me?Me(o):new t.constructor(o);return t.copy(r),r},lr=function(t,e){var o=-1,r=t.length;for(e||(e=Array(r));++o<r;)e[o]=t[o];return e},dr=function(t,e){for(var o=-1,r=t==null?0:t.length,g=0,S=[];++o<r;){var P=t[o];e(P,o,t)&&(S[g++]=P)}return S},$e=function(){return[]};var ur=Object.prototype.propertyIsEnumerable,ze=Object.getOwnPropertySymbols;const ie=ze?function(t){return t==null?[]:(t=Object(t),dr(ze(t),function(e){return ur.call(t,e)}))}:$e,hr=function(t,e){return Yt(t,ie(t),e)},Le=function(t,e){for(var o=-1,r=e.length,g=t.length;++o<r;)t[g+o]=e[o];return t},ce=Te(Object.getPrototypeOf,Object),De=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Le(e,ie(t)),t=ce(t);return e}:$e,fr=function(t,e){return Yt(t,De(t),e)},We=function(t,e,o){var r=e(t);return qt(t)?r:Le(r,o(t))},pr=function(t){return We(t,re,ie)},gr=function(t){return We(t,ne,De)},se=St(x,"DataView"),ae=St(x,"Promise"),le=St(x,"Set"),de=St(x,"WeakMap");var Ne="[object Map]",Ue="[object Promise]",He="[object Set]",Be="[object WeakMap]",Ge="[object DataView]",br=Ct(se),mr=Ct(Gt),kr=Ct(ae),vr=Ct(le),yr=Ct(de),Et=Z;(se&&Et(new se(new ArrayBuffer(1)))!=Ge||Gt&&Et(new Gt)!=Ne||ae&&Et(ae.resolve())!=Ue||le&&Et(new le)!=He||de&&Et(new de)!=Be)&&(Et=function(t){var e=Z(t),o=e=="[object Object]"?t.constructor:void 0,r=o?Ct(o):"";if(r)switch(r){case br:return Ge;case mr:return Ne;case kr:return Ue;case vr:return He;case yr:return Be}return e});const ue=Et;var xr=Object.prototype.hasOwnProperty;const wr=function(t){var e=t.length,o=new t.constructor(e);return e&&typeof t[0]=="string"&&xr.call(t,"index")&&(o.index=t.index,o.input=t.input),o},Ve=x.Uint8Array,he=function(t){var e=new t.constructor(t.byteLength);return new Ve(e).set(new Ve(t)),e},jr=function(t,e){var o=e?he(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.byteLength)};var _r=/\w*$/;const Cr=function(t){var e=new t.constructor(t.source,_r.exec(t));return e.lastIndex=t.lastIndex,e};var Ke=V?V.prototype:void 0,Qe=Ke?Ke.valueOf:void 0;const Sr=function(t){return Qe?Object(Qe.call(t)):{}},Er=function(t,e){var o=e?he(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.length)};var Or="[object Boolean]",Pr="[object Date]",Tr="[object Map]",Fr="[object Number]",Ar="[object RegExp]",Ir="[object Set]",Rr="[object String]",Mr="[object Symbol]",$r="[object ArrayBuffer]",zr="[object DataView]",Lr="[object Float32Array]",Dr="[object Float64Array]",Wr="[object Int8Array]",Nr="[object Int16Array]",Ur="[object Int32Array]",Hr="[object Uint8Array]",Br="[object Uint8ClampedArray]",Gr="[object Uint16Array]",Vr="[object Uint32Array]";const Kr=function(t,e,o){var r=t.constructor;switch(e){case $r:return he(t);case Or:case Pr:return new r(+t);case zr:return jr(t,o);case Lr:case Dr:case Wr:case Nr:case Ur:case Hr:case Br:case Gr:case Vr:return Er(t,o);case Tr:return new r;case Fr:case Rr:return new r(t);case Ar:return Cr(t);case Ir:return new r;case Mr:return Sr(t)}};var Ze=Object.create;const Qr=function(){function t(){}return function(e){if(!O(e))return{};if(Ze)return Ze(e);t.prototype=e;var o=new t;return t.prototype=void 0,o}}(),Zr=function(t){return typeof t.constructor!="function"||oe(t)?{}:Qr(ce(t))};var Xr="[object Map]";const Yr=function(t){return rt(t)&&ue(t)==Xr};var Xe=Lt&&Lt.isMap;const Jr=Xe?te(Xe):Yr;var qr="[object Set]";const tn=function(t){return rt(t)&&ue(t)==qr};var Ye=Lt&&Lt.isSet;const en=Ye?te(Ye):tn;var on=1,rn=2,nn=4,Je="[object Arguments]",qe="[object Function]",cn="[object GeneratorFunction]",to="[object Object]",W={};W[Je]=W["[object Array]"]=W["[object ArrayBuffer]"]=W["[object DataView]"]=W["[object Boolean]"]=W["[object Date]"]=W["[object Float32Array]"]=W["[object Float64Array]"]=W["[object Int8Array]"]=W["[object Int16Array]"]=W["[object Int32Array]"]=W["[object Map]"]=W["[object Number]"]=W[to]=W["[object RegExp]"]=W["[object Set]"]=W["[object String]"]=W["[object Symbol]"]=W["[object Uint8Array]"]=W["[object Uint8ClampedArray]"]=W["[object Uint16Array]"]=W["[object Uint32Array]"]=!0,W["[object Error]"]=W[qe]=W["[object WeakMap]"]=!1;const sn=function t(e,o,r,g,S,P){var T,G=o&on,B=o&rn,Jt=o&nn;if(r&&(T=S?r(e,g,S,P):r(e)),T!==void 0)return T;if(!O(e))return e;var Pt=qt(e);if(Pt){if(T=wr(e),!G)return lr(e,T)}else{var ft=ue(e),Dt=ft==qe||ft==cn;if(Ce(e))return ar(e,G);if(ft==to||ft==Je||Dt&&!S){if(T=B||Dt?{}:Zr(e),!G)return B?fr(e,sr(T,e)):hr(e,rr(T,e))}else{if(!W[ft])return S?e:{};T=Kr(e,ft,G)}}P||(P=new zo);var Zt=P.get(e);if(Zt)return Zt;P.set(e,T),en(e)?e.forEach(function(ht){T.add(t(ht,o,r,ht,e,P))}):Jr(e)&&e.forEach(function(ht,pt){T.set(pt,t(ht,o,r,pt,e,P))});var Tt=Pt?void 0:(Jt?B?gr:pr:B?ne:re)(e);return Lo(Tt||e,function(ht,pt){Tt&&(ht=e[pt=ht]),ve(T,pt,t(ht,o,r,pt,e,P))}),T};var an=1,ln=4;const dn=function(t,e){return sn(t,an|ln,e=typeof e=="function"?e:void 0)};var un="[object Object]",hn=Function.prototype,fn=Object.prototype,eo=hn.toString,pn=fn.hasOwnProperty,gn=eo.call(Object);const bn=function(t){if(!rt(t)||Z(t)!=un)return!1;var e=ce(t);if(e===null)return!0;var o=pn.call(e,"constructor")&&e.constructor;return typeof o=="function"&&o instanceof o&&eo.call(o)==gn},mn=function(t){return rt(t)&&t.nodeType===1&&!bn(t)};function fe(t,e=new Set){const o=[t],r=new Set;let g=0;for(;o.length>g;){const S=o[g++];if(!(r.has(S)||kn(S)||e.has(S)))if(r.add(S),S[Symbol.iterator])try{for(const P of S)o.push(P)}catch{}else for(const P in S)P!=="defaultValue"&&o.push(S[P])}return r}function kn(t){const e=Object.prototype.toString.call(t),o=typeof t;return o==="number"||o==="boolean"||o==="string"||o==="symbol"||o==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||t==null||t._watchdogExcluded===!0||t instanceof EventTarget||t instanceof Event}function oo(t,e,o=new Set){if(t===e&&typeof(r=t)=="object"&&r!==null)return!0;var r;const g=fe(t,o),S=fe(e,o);for(const P of g)if(S.has(P))return!0;return!1}class ro{constructor(e){if(this.crashes=[],this.state="initializing",this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._now=Date.now,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=o=>{const r=o.error||o.reason;r instanceof Error&&this._handleError(r,o)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,o){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(o)}off(e,o){this._listeners[e]=this._listeners[e].filter(r=>r!==o)}_fire(e,...o){const r=this._listeners[e]||[];for(const g of r)g.apply(this,[null,...o])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,o){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:o.filename,lineno:o.lineno,colno:o.colno,date:this._now()});const r=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:r}),r?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}class no extends ro{constructor(e,o={}){super(o),this._editor=null,this._throttledSave=F(this._save.bind(this),typeof o.saveInterval=="number"?o.saveInterval:5e3),this._creator=(r,g)=>e.create(r,g),this._destructor=r=>r.destroy()}get editor(){return this._editor}get _item(){return this._editor}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const e=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,e,e.context)}}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,o=this._config,r){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=e,this._config=this._cloneEditorConfiguration(o)||{},this._config.context=r,this._creator(e,this._config))).then(g=>{this._editor=g,g.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=g.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=e}catch(o){console.error(o,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e={};for(const o of this._editor.model.document.getRootNames())e[o]=this._editor.data.get({rootName:o});return e}_isErrorComingFromThisItem(e){return oo(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return dn(e,(o,r)=>mn(o)||r==="context"?o:void 0)}}const q=new Array(256).fill("").map((t,e)=>("0"+e.toString(16)).slice(-2)),Qt=Symbol("MainQueueId");class io extends ro{constructor(e,o={}){super(o),this._watchdogs=new Map,this._watchdogConfig=o,this._context=null,this._contextProps=new Set,this._actionQueues=new vn,this._creator=r=>e.create(r),this._destructor=r=>r.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}get context(){return this._context}create(e={}){return this._actionQueues.enqueue(Qt,()=>(this._contextConfig=e,this._create()))}getItem(e){return this._getWatchdog(e)._item}getItemState(e){return this._getWatchdog(e).state}add(e){const o=co(e);return Promise.all(o.map(r=>this._actionQueues.enqueue(r.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let g;if(this._watchdogs.has(r.id))throw new Error(`Item with the given id is already added: '${r.id}'.`);if(r.type==="editor")return g=new no(this._watchdogConfig),g.setCreator(r.creator),g._setExcludedProperties(this._contextProps),r.destructor&&g.setDestructor(r.destructor),this._watchdogs.set(r.id,g),g.on("error",(S,{error:P,causesRestart:T})=>{this._fire("itemError",{itemId:r.id,error:P}),T&&this._actionQueues.enqueue(r.id,()=>new Promise(G=>{g.on("restart",function B(){g.off("restart",B),this._fire("itemRestart",{itemId:r.id}),G()}.bind(this))}))}),g.create(r.sourceElementOrData,r.config,this._context);throw new Error(`Not supported item type: '${r.type}'.`)})))}remove(e){const o=co(e);return Promise.all(o.map(r=>this._actionQueues.enqueue(r,()=>{const g=this._getWatchdog(r);return this._watchdogs.delete(r),g.destroy()})))}destroy(){return this._actionQueues.enqueue(Qt,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Qt,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(e=>{console.error("An error happened during destroying the context or items.",e)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(e=>(this._context=e,this._contextProps=fe(this._context),Promise.all(Array.from(this._watchdogs.values()).map(o=>(o._setExcludedProperties(this._contextProps),o.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const e=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(o=>o.destroy())).then(()=>this._destructor(e))})}_getWatchdog(e){const o=this._watchdogs.get(e);if(!o)throw new Error(`Item with the given id was not registered: ${e}.`);return o}_isErrorComingFromThisItem(e){for(const o of this._watchdogs.values())if(o._isErrorComingFromThisItem(e))return!1;return oo(this._context,e.context)}}class vn{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._actions=new WeakMap,this._lastActionId=0,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,o){const r=e===Qt;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const g=(r?Promise.all(this._queues.values()):Promise.all([this._queues.get(Qt),this._queues.get(e)])).then(o),S=g.catch(()=>{});return this._queues.set(e,S),g.finally(()=>{this._activeActions--,this._queues.get(e)===S&&this._activeActions===0&&this._onEmptyCallbacks.forEach(P=>P())})}}function co(t){return Array.isArray(t)?t:[t]}const so=c().createContext("contextWatchdog");class pe extends c().Component{constructor(e,o){super(e,o),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}async shouldComponentUpdate(e){return e.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(e.config)),e.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(e.config),!0):this.props.children!==e.children}render(){return c().createElement(so.Provider,{value:this.contextWatchdog},this.props.children)}async componentWillUnmount(){await this._destroyContext()}async _initializeContextWatchdog(e){this.contextWatchdog=new io(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(o,r)=>{this.props.onError(r.error,{phase:"runtime",willContextRestart:r.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(e).catch(o=>{this.props.onError(o,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}pe.defaultProps={isLayoutReady:!0,onError:(t,e)=>console.error(t,e)},pe.propTypes={id:f().string,isLayoutReady:f().bool,context:f().func,watchdogConfig:f().object,config:f().object,onReady:f().func,onError:f().func};const ge="Lock from React integration (@ckeditor/ckeditor5-react)";class Ot extends c().Component{constructor(e){super(e),this.editorDestructionInProgress=null,this.domContainer=c().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:o}=window;if(o){const[r]=o.split(".").map(Number);r<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(e){return!!this.editor&&(e.id!==this.props.id||(this._shouldUpdateEditor(e)&&this.editor.setData(e.data),"disabled"in e&&(e.disabled?this.editor.enableReadOnlyMode(ge):this.editor.disableReadOnlyMode(ge)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return c().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.watchdog||(this.context instanceof io?this.watchdog=new yn(this.context):this.watchdog=new Ot._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((e,o)=>this._createEditor(e,o)),this.watchdog.on("error",(e,{error:o,causesRestart:r})=>{this.props.onError(o,{phase:"runtime",willEditorRestart:r})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(e=>this.props.onError(e,{phase:"initialization",willEditorRestart:!1})))}_createEditor(e,o){return this.props.editor.create(e,o).then(r=>{"disabled"in this.props&&this.props.disabled&&r.enableReadOnlyMode(ge);const g=r.model.document,S=r.editing.view.document;return g.on("change:data",P=>{this.props.onChange&&this.props.onChange(P,r)}),S.on("focus",P=>{this.props.onFocus&&this.props.onFocus(P,r)}),S.on("blur",P=>{this.props.onBlur&&this.props.onBlur(P,r)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(r)}),r})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(e=>{setTimeout(()=>{this.watchdog?this.watchdog.destroy().then(()=>{this.watchdog=null,e()}):e()})})}_shouldUpdateEditor(e){return this.props.data!==e.data&&this.editor.getData()!==e.data}_getConfig(){return this.props.data&&this.props.config.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...this.props.config,initialData:this.props.config.initialData||this.props.data||""}}}class yn{constructor(e){this._contextWatchdog=e,this._id=function(){const o=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0,g=4294967296*Math.random()>>>0,S=4294967296*Math.random()>>>0;return"e"+q[o>>0&255]+q[o>>8&255]+q[o>>16&255]+q[o>>24&255]+q[r>>0&255]+q[r>>8&255]+q[r>>16&255]+q[r>>24&255]+q[g>>0&255]+q[g>>8&255]+q[g>>16&255]+q[g>>24&255]+q[S>>0&255]+q[S>>8&255]+q[S>>16&255]+q[S>>24&255]}()}setCreator(e){this._creator=e}create(e,o){return this._contextWatchdog.add({sourceElementOrData:e,config:o,creator:this._creator,id:this._id,type:"editor"})}on(e,o){this._contextWatchdog.on("itemError",(r,{itemId:g,causesRestart:S,error:P})=>{g===this._id&&o(null,{error:P,causesRestart:S})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}Ot.contextType=so,Ot.propTypes={editor:f().func.isRequired,data:f().string,config:f().object,watchdogConfig:f().object,onChange:f().func,onReady:f().func,onFocus:f().func,onBlur:f().func,onError:f().func,disabled:f().bool,onInit:(t,e)=>{if(t[e])return new Error('The "onInit" property is not supported anymore by the CKEditor component. Use the "onReady" property instead.')}},Ot.defaultProps={config:{},onError:(t,e)=>console.error(t,e)},Ot._EditorWatchdog=no})(),n})())},91753:(M,a,i)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const l=i(92132),y=i(21272),b=i(69106),u=i(41999),n=i(73725),s=y.forwardRef(({children:c,name:h,error:f,hint:O,id:I,required:m=!1,...x},p)=>{const v=u.useId(I),U=y.useMemo(()=>({name:h,id:v,error:f,hint:O,required:m}),[f,v,O,h,m]);return l.jsx(n.Box,{ref:p,...x,children:l.jsx(b.FieldContext.Provider,{value:U,children:c})})});a.Field=s},39859:(M,a,i)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const l=i(92132),y=i(21272),b=i(63891),u=i(69909),n=i(19717),h=(O=>O&&O.__esModule?O:{default:O})(b).default(u.Flex)`
  font-size: 1.6rem;
  padding: 0;
`,f=y.forwardRef(({label:O,children:I,...m},x)=>l.jsxs(h,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...m,as:"button",ref:x,children:[l.jsx(n.VisuallyHidden,{as:"span",children:O}),y.cloneElement(I,{"aria-hidden":!0,focusable:!1})]}));a.FieldAction=f},69106:(M,a,i)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const l=i(21272),y=l.createContext({id:"",required:!1}),b=()=>l.useContext(y);a.FieldContext=y,a.useField=b},83215:(M,a,i)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const l=i(92132),y=i(69106),b=i(48941),u=()=>{const{id:n,error:s}=y.useField();return!s||typeof s!="string"?null:l.jsx(b.Typography,{variant:"pi",as:"p",id:`${n}-error`,textColor:"danger600","data-strapi-field-error":!0,children:s})};a.FieldError=u},67296:(M,a,i)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const l=i(92132),y=i(69106),b=i(48941),u=()=>{const{id:n,hint:s,error:c}=y.useField();return!s||c?null:l.jsx(b.Typography,{variant:"pi",as:"p",id:`${n}-hint`,textColor:"neutral600",children:s})};a.FieldHint=u},80421:(M,a,i)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const l=i(92132),y=i(21272),b=i(63891),u=i(69106),n=i(93788),s=i(73725),c=i(69909),f=(p=>p&&p.__esModule?p:{default:p})(b),O={S:6.5,M:10.5},I=y.forwardRef(({endAction:p,startAction:v,disabled:U=!1,onChange:tt,size:et="M",...V},it)=>{const{id:J,error:k,hint:w,name:_,required:R}=u.useField();let z;k?z=`${J}-error`:w&&(z=`${J}-hint`);const D=Boolean(k),$=ot=>{!U&&tt&&tt(ot)};return l.jsxs(x,{justifyContent:"space-between",hasError:D,disabled:U,children:[v?l.jsx(s.Box,{paddingLeft:3,paddingRight:2,children:v}):null,l.jsx(m,{id:J,name:_,ref:it,"aria-describedby":z,"aria-invalid":D,"aria-disabled":U,disabled:U,"data-disabled":U?"":void 0,hasLeftAction:Boolean(v),hasRightAction:Boolean(p),onChange:$,"aria-required":R,$size:et,...V}),p?l.jsx(s.Box,{paddingLeft:2,paddingRight:3,children:p}):null]})}),m=f.default.input`
  border: none;
  border-radius: ${({theme:p})=>p.borderRadius};
  padding-bottom: ${({$size:p})=>`${O[p]/16}rem`};
  padding-left: ${({theme:p,hasLeftAction:v})=>v?0:p.spaces[4]};
  padding-right: ${({theme:p,hasRightAction:v})=>v?0:p.spaces[4]};
  padding-top: ${({$size:p})=>`${O[p]/16}rem`};
  cursor: ${p=>p["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:p})=>p.colors.neutral800};
  font-weight: 400;
  font-size: ${p=>p.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:p})=>p.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,x=f.default(c.Flex)`
  border: 1px solid ${({theme:p,hasError:v})=>v?p.colors.danger600:p.colors.neutral200};
  border-radius: ${({theme:p})=>p.borderRadius};
  background: ${({theme:p})=>p.colors.neutral0};
  ${n.inputFocusStyle()}

  ${({theme:p,disabled:v})=>v?b.css`
          color: ${p.colors.neutral600};
          background: ${p.colors.neutral150};
        `:void 0}
`;a.FieldInput=I,a.InputWrapper=x},76987:(M,a,i)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const l=i(92132),y=i(21272),b=i(63891),u=i(69106),n=i(14053),s=i(48941),c=i(69909),f=(v=>v&&v.__esModule?v:{default:v})(b),O=n.once(console.warn),I=y.forwardRef(({children:v,action:U,required:tt,...et},V)=>{const{id:it,required:J}=u.useField(),k=J||tt;return tt!==void 0&&O('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),l.jsxs(m,{ref:V,variant:"pi",textColor:"neutral800",htmlFor:it,fontWeight:"bold",as:"label",...et,children:[v,k&&l.jsx(x,{textColor:"danger600",children:"*"}),U&&l.jsx(p,{marginLeft:1,children:U})]})}),m=f.default(s.Typography)`
  display: flex;
  align-items: center;
`,x=f.default(s.Typography)`
  line-height: 0;
`,p=f.default(c.Flex)`
  line-height: 0;

  svg path {
    fill: ${({theme:v})=>v.colors.neutral500};
  }
`;a.FieldLabel=I},79521:(M,a,i)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const l=i(91753),y=i(76987),b=i(80421),u=i(67296),n=i(83215),s=i(69106),c=i(39859);a.Field=l.Field,a.FieldLabel=y.FieldLabel,a.FieldInput=b.FieldInput,a.InputWrapper=b.InputWrapper,a.FieldHint=u.FieldHint,a.FieldError=n.FieldError,a.FieldContext=s.FieldContext,a.useField=s.useField,a.FieldAction=c.FieldAction},12509:(M,a,i)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const l=i(92132),y=i(21272),b=i(63891),u=i(76445),n=i(69909),c=(m=>m&&m.__esModule?m:{default:m})(b),h={size:!0,spacing:!0},f=c.default(n.Flex).withConfig({shouldForwardProp:(m,x)=>!h[m]&&x(m)})`
  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: ${({theme:m,spacing:x})=>u.extractStyleFromTheme(m.spaces,x,void 0)};
  }
`,O=c.default(n.Flex).withConfig({shouldForwardProp:(m,x)=>!h[m]&&x(m)})`
  & > * {
    margin-left: 0;
    margin-right: 0;
  }

  & > * + * {
    margin-left: ${({theme:m,spacing:x})=>u.extractStyleFromTheme(m.spaces,x,void 0)};
  }
`,I=y.forwardRef(({horizontal:m=!1,spacing:x,size:p,...v},U)=>(p&&console.warn('Deprecation warning: Usage of "size" prop in Stack component is deprecated. This is discouraged and will be removed in the next major release. Please use "spacing" instead'),m?l.jsx(O,{ref:U,spacing:x||p,...v}):l.jsx(f,{direction:"column",alignItems:"stretch",ref:U,spacing:x||p,...v})));I.displayName="Stack",a.Stack=I},70505:(M,a,i)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const l=i(12509);a.Stack=l.Stack},48941:(M,a,i)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const l=i(63891),y=i(18415),b=i(76445),n=(h=>h&&h.__esModule?h:{default:h})(l),s={fontSize:!0,fontWeight:!0},c=n.default.span.withConfig({shouldForwardProp:(h,f)=>!s[h]&&f(h)})`
  ${y.variantStyle}
  ${y.ellipsisStyle}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:h,fontWeight:f})=>b.extractStyleFromTheme(h.fontWeights,f,void 0)};
  font-size: ${({theme:h,fontSize:f})=>b.extractStyleFromTheme(h.fontSizes,f,void 0)};
  line-height: ${({theme:h,lineHeight:f})=>b.extractStyleFromTheme(h.lineHeights,f,f)};
  color: ${({theme:h,textColor:f})=>h.colors[f||"neutral800"]};
  text-align: ${({textAlign:h})=>h};
  text-decoration: ${({textDecoration:h})=>h};
  text-transform: ${({textTransform:h})=>h};
`;a.Typography=c},78639:(M,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const i="alpha",l="beta",y="delta",b="epsilon",u="omega",n="pi",s="sigma",c=[i,l,y,b,u,n,s];a.ALPHA=i,a.BETA=l,a.DELTA=y,a.EPSILON=b,a.OMEGA=u,a.PI=n,a.SIGMA=s,a.TEXT_VARIANTS=c},18415:(M,a,i)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const l=i(78639),y=({ellipsis:u=!1})=>u&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,b=({variant:u=l.OMEGA,theme:n})=>{switch(u){case l.ALPHA:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[5]};
        line-height: ${n.lineHeights[2]};
      `;case l.BETA:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[4]};
        line-height: ${n.lineHeights[1]};
      `;case l.DELTA:return`
        font-weight: ${n.fontWeights.semiBold};
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[2]};
      `;case l.EPSILON:return`
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[6]};
      `;case l.OMEGA:return`
        font-size: ${n.fontSizes[2]};
        line-height: ${n.lineHeights[4]};
      `;case l.PI:return`
        font-size: ${n.fontSizes[1]};
        line-height: ${n.lineHeights[3]};
      `;case l.SIGMA:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[0]};
        line-height: ${n.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${n.fontSizes[2]};
      `}};a.ellipsisStyle=y,a.variantStyle=b},19717:(M,a,i)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const l=i(63891),u=(n=>n&&n.__esModule?n:{default:n})(l).default.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;a.VisuallyHidden=u},14053:(M,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const i="[@strapi/design-system]:",l=y=>{const b=y;let u=!1;if(typeof b!="function")throw new TypeError(`${i} once requires a function parameter`);return(...n)=>{u||(b(...n),u=!0)}};a.PREFIX=i,a.once=l},41999:(M,a,i)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const l=i(21272),u=(c=>c&&c.__esModule?c:{default:c})(l).default["useId".toString()]||(()=>{});let n=0;const s=c=>{const[h,f]=l.useState(u());return l.useLayoutEffect(()=>{c||f(O=>O??String(n++))},[c]),c?.toString()??(h||"")};a.useId=s},93788:(M,a,i)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const l=i(63891),y=n=>({theme:s,size:c})=>s.sizes[n][c],b=(n="&")=>({theme:s,hasError:c=!1})=>l.css`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${n}:focus-within {
      border: 1px solid ${c?s.colors.danger600:s.colors.primary600};
      box-shadow: ${c?s.colors.danger600:s.colors.primary600} 0px 0px 0px 2px;
    }
  `,u=({theme:n})=>l.css`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${n.colors.primary600};
    }
  }
`;a.buttonFocusStyle=u,a.getThemeSize=y,a.inputFocusStyle=b},96791:(M,a,i)=>{"use strict";i.r(a),i.d(a,{default:()=>C});var l=i(92132),y=i(21272),b=i(33544),u=i.n(b),n=i(63891),s=i(25737),c=i(43064),h=i(94061),f=i(55506),O=i(51187),I=i.n(O),m=i(34252),x=i(28539),p=i.n(x);const v=async(d,E)=>{if(!E)return;const{plugins:F=[]}=d,j=[...F.map(H=>H.pluginName)],K=[{name:"DocumentList",module:"ckeditor5-list"},{name:"TextPartLanguage",module:"ckeditor5-language"},{name:"Alignment",module:"ckeditor5-alignment"},{name:"Autosave",module:"ckeditor5-autosave"},{name:"BlockQuote",module:"ckeditor5-block-quote"},{name:"CodeBlock",module:"ckeditor5-code-block"},{name:"Heading",module:"ckeditor5-heading"},{name:"HtmlEmbed",module:"ckeditor5-html-embed"},{name:"GeneralHtmlSupport",module:"ckeditor5-html-support"},{name:"HorizontalLine",module:"ckeditor5-horizontal-line"},{name:"MediaEmbed",module:"ckeditor5-media-embed"},{name:"Image",module:"ckeditor5-image"},{name:"Indent",module:"ckeditor5-indent"},{name:"Link",module:"ckeditor5-link"},{name:"RemoveFormat",module:"ckeditor5-remove-format"},{name:"Table",module:"ckeditor5-table"},{name:"WordCount",module:"ckeditor5-word-count"},{name:"FindAndReplace",module:"ckeditor5-find-and-replace"},{name:"SpecialCharacters",module:"ckeditor5-special-characters"},{name:"PageBreak",module:"ckeditor5-page-break"},{name:"SourceEditing",module:"ckeditor5-source-editing"},{name:"Highlight",module:"ckeditor5-highlight"},{name:"Style",module:"ckeditor5-style"}],L=["Bold","Code","Italic","Strikethrough","Subscript","Superscript","Underline"],at=["FontBackgroundColor","FontColor","FontFamily","FontSize"],dt=["List","DocumentList"];await Promise.all(K.filter(({name:H})=>j.includes(H)).map(async({module:H})=>await i(58380)(`./${H}/build/translations/${E}.js`).catch(()=>null))),j.some(H=>L.includes(H))&&await i(89320)(`./${E}.js`).catch(()=>null),j.some(H=>dt.includes(H))&&await i(43053)(`./${E}.js`).catch(()=>null),j.some(H=>at.includes(H))&&await i(53917)(`./${E}.js`).catch(()=>null)},U=async d=>{const E=new URLSearchParams(window.location.search),j=Object.fromEntries(E.entries())["plugins[i18n][locale]"],K=f.j2.getUserInfo().preferedLanguage,{ui:L=K||"en",content:at,textPartLanguage:dt,ignorei18n:H}=d.language||{};if(j){const ut=j.split("-")[0];d.language={ui:typeof d.language=="string"?d.language:L,content:H?at:ut,textPartLanguage:dt},await v(d,d.language.ui),await v(d,d.language.content)}else typeof d.language=="object"?(await v(d,d.language.ui),await v(d,d.language.content)):typeof d.language=="string"?await v(d,d.language):(d.language=K,await v(d,K))},tt=d=>{const{configs:E,configsOverwrite:F}=globalThis.CKEditorConfig||{};let j;return F?j=E:(j=m.A,E&&Object.keys(E).map(L=>{m.A.hasOwnProperty(L)?(j[L].fields={...m.A[L].field,...E[L].field},j[L].styles=E[L].styles||m.A[L].styles,j[L].editorConfig={...m.A[L].editorConfig,...E[L].editorConfig}):j[L]=E[L]})),I()(j[d])},et=(d,{responsiveDimensions:E},F)=>{const j=d.editorConfig?.plugins?[...d.editorConfig.plugins.map(K=>K.pluginName)]:[];j.includes("StrapiMediaLib")&&(d.editorConfig.strapiMediaLib={toggle:F}),j.includes("StrapiUploadAdapter")&&(d.editorConfig.strapiUploadAdapter={uploadUrl:`${strapi.backendURL}/upload`,headers:{Authorization:"Bearer "+f.j2.getToken()},backendUrl:strapi.backendURL,responsive:E}),j.includes("WordCount")&&(d.editorConfig.WordCountPlugin=!0)},V=d=>(0,f.l1)(`/${p()}/config/${d}`,{method:"GET"}),it=async(d,E)=>{const F=tt(d),j=await V("upload");return et(F,j,E),await U(F.editorConfig),{currentConfig:F,uploadPluginConfig:j}},J=(0,n.css)`
  .ck {
    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);
    --ck-color-mention-background: hsla(341, 100%, 30%, 0.1);
    --ck-color-mention-text: hsl(341, 100%, 30%);
    --ck-color-table-caption-background: hsl(0, 0%, 97%);
    --ck-color-table-caption-text: hsl(0, 0%, 20%);
    --ck-highlight-marker-blue: hsl(201, 97%, 72%);
    --ck-highlight-marker-green: hsl(120, 93%, 68%);
    --ck-highlight-marker-pink: hsl(345, 96%, 73%);
    --ck-highlight-marker-yellow: hsl(60, 97%, 73%);
    --ck-highlight-pen-green: hsl(112, 100%, 27%);
    --ck-highlight-pen-red: hsl(0, 85%, 49%);
    --ck-image-style-spacing: 1.5em;
    --ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
    --ck-todo-list-checkmark-size: 16px;
  }

  
  .ck.ck-sticky-panel .ck-sticky-panel__content_sticky {
    top: 64px !important;
  }
  .ck.ck-reset.ck-dropdown__panel.ck-dropdown__panel_sw.ck-dropdown__panel-visible {
    border-radius: 4px;
  }

  .ck-editor__main {
    
    --ck-font-face: "Source Sans Pro", system-ui, Roboto, "Helvetica Neue", "Helvetica", Arial, sans-serif;
    
    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }


    h1 {
      font-size: 2.3em;
    }

    h2 {
      font-size: 1.84em;
    }

    h3 {
      font-size: 1.48em;
    }

    h4 {
      font-size: 1.22em;
    }

    h5 {
      font-size: 1.06em;
    }

    h6 {
      font-size: 1em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.2em;
      padding-top: .8em;
      margin-bottom: .4em
    }

    blockquote,
    ol,
    p,
    ul {
      font-size: 1em;
      line-height: 1.6em;
      padding-top: .2em;
      margin-bottom: var(--ck-spacing-large)
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: 0.75em;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    a {
      text-decoration: none;
      color: #1b3af2;
    }

    a:hover {
      text-decoration: underline;
    }

    .table {
      margin: 0;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub;
    }

    sup {
      vertical-align: super;
    }

    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      transition-property: border-color, box-shadow, max-height;
      transition-timing-function: ease-in-out;
      transition-duration: 0.5s;
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid var(--ck-color-base-border);
        /* border: var(--ck-focus-ring); */
        box-shadow: none;
        transition-property: border-color, box-shadow, max-height;
        transition-timing-function: ease-in-out;
        transition-duration: 0.5s;
      }
    }

    .ck-focused,
    .ck-blurred {
      overflow-y: auto;
      overflow-x: hidden;
      transition: max-height 0.5s ease-in-out;
      ::-webkit-scrollbar {
        width: 7px;
      }
      ::-webkit-scrollbar-track {
        background: var(--ck-scroll-track-background);
        border: none;
      }
      ::-webkit-scrollbar-thumb {
        transition: background 2s;
        background: var(--ck-scroll-thumb-background);
        border: 1px solid var(--ck-scroll-thumb-border-color);
      }
      ::-webkit-scrollbar-thumb:hover {
        transition: background 2s;
        background: var(--ck-scroll-thumb-hover-background);
      }
      ::-webkit-scrollbar-thumb:active {
        background: var(--ck-scroll-thumb-active-background);
      }
    }
  }

  .ck .ck-source-editing-area textarea{
    color: var(--ck-color-text);
    background-color: var(--ck-color-base-background);
    border: 1px solid var(--ck-color-base-border) !important;
    box-shadow: none !important;
  }

  .ck .ck-block-toolbar-button {
    min-width: 0 !important;
    min-height: 0 !important;
    width: 20px !important;
    height: 25px !important;
    margin-left: -2px !important ;
    
    & svg {
      color: var(--ck-color-text) !important;
      position: absolute;
      width: 20px;
      height: 20px;
    }
  }

  .ck-word-count {
    margin-top: 0.3rem;
    display: flex;
    justify-content: end;
    gap: 0.3rem;
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: lowercase;
    /* color: #b3b3c4; */
  }

  .ck[dir=rtl]{
    .ck-block-toolbar-button {
      margin-left: 2px !important ;
    }
    & + div{
      justify-content: flex-start;
      & > .ck-word-count {
          & > div:first-child{
            order: 2;
          }
          & > div:last-child{
            order: 1;
          }
      }
    }
  }
`,k=(0,n.css)`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: #e4e3ff !important;
    --ck-focus-ring: 1px solid rgb(73, 69, 255) !important;
    --ck-color-button-default-hover-background: #F0F0FF !important;

    .ck .ck-color-picker-save {
      & > svg {
        stroke: #7b79ff !important;
      }
    }
  }

  .ck {
    --ck-scroll-track-background: rgb(242, 242, 242);
    --ck-scroll-thumb-background: rgb(236, 236, 236);
    --ck-scroll-thumb-border-color: #cdcdf8;
    --ck-scroll-thumb-hover-background: #f0f0ff;
    --ck-scroll-thumb-active-background: #d9d8ff;

    --ck-color-editor-base-text: #001234;
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #dcdce4;
    --ck-color-base-background: #ffffff;
    --ck-custom-background: #ffffff;
    --ck-custom-foreground: #dedede;
    --ck-custom-border: #dcdce4;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #f0f0ff;
    --ck-color-base-active-focus: #e2e2fd;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);

    --ck-color-focus-border: rgb(73, 69, 255);

    --ck-color-text: #32324d;
    --ck-color-shadow-drop: hsla(250, 31%, 80%, 0.1);
    --ck-color-shadow-inner: hsla(250, 31%, 80%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: var(--ck-custom-background);
    --ck-color-button-default-hover-background: #f0f0ff;
    --ck-color-button-default-active-background: #f6f6f9;
    --ck-color-button-default-active-shadow: #dedefb;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: rgb(73, 69, 255);
    --ck-color-button-on-background: #f0f0ff;
    --ck-color-button-on-hover-background: #e6e9fc;
    --ck-color-button-on-active-background: #f6f6f9;
    --ck-color-button-on-active-shadow: #cdcdf8;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(0, 0%, 97%);
    --ck-color-input-disabled-border: rgb(214, 214, 214);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #f4f4fb;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #271fe2;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #cfcffa;
    --ck-color-widget-hover-border: #c9c9e4;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(209, 89%, 33%);
  }
`,w=(0,n.css)`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: rgba(106, 114, 143, 0.4) !important;
    --ck-focus-ring: 1px solid #4945ff !important;
    --ck-color-button-default-hover-background: #262630 !important;

    .ck .ck-color-picker > svg {
      color: #ffffff !important;
    }
    .ck .ck-color-picker-save {
      & > svg {
        stroke: #ffffff !important;
      }
      & > svg > #primary,
      #primary-2 {
        stroke: #7b79ff !important;
      }
    }
  }

  .ck {
    --ck-scroll-track-background: #3d3d57;
    --ck-scroll-thumb-background: #181826;
    --ck-scroll-thumb-border-color: rgb(70, 70, 70);
    --ck-scroll-thumb-hover-background: #202033;
    --ck-scroll-thumb-active-background: #2b2b45;

    --ck-color-editor-base-text: rgb(236, 236, 236);
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #4a4a6a;
    --ck-color-base-background: #212134;
    --ck-custom-background: #181826;
    --ck-custom-foreground: #26263b;
    --ck-custom-border: #4a4a6a;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-focus-outer-shadow: #212134;

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #2e2e5c;
    --ck-color-base-active-focus: #28284d;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);
    --ck-color-focus-border: #6765bd;
    --ck-color-text: hsl(0, 0%, 93%);
    --ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2);
    --ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: rgb(33, 33, 52);

    --ck-color-button-default-hover-background: #262630;
    --ck-color-button-default-active-background: #3c3c47;
    --ck-color-button-default-active-shadow: #3c3c47;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: #7b79ff;
    --ck-color-button-on-background: #2b2b36;
    --ck-color-button-on-hover-background: #30303b;
    --ck-color-button-on-active-background: #3c3c47;
    --ck-color-button-on-active-shadow: #3c3c47;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(255, 4%, 21%);
    --ck-color-input-disabled-border: hsl(250, 3%, 38%);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #121221;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #ffffff;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #7c7c96;
    --ck-color-widget-hover-border: #666687;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(216, 100%, 75%);
  }

`,_=(0,n.css)`

/* --- expanding --- */

.ck.ck-editor__main .ck-blurred {
    max-height: 200px;
  }
.ck.ck-editor__main .ck-focused {
  	max-height: 700px;
  }

/* --- color-grid --- */

.ck.ck-color-ui-dropdown {
	--ck-color-grid-tile-size: 22px !important;
}
.ck.ck-color-grid__tile{
	width:auto;
}
.ck.ck-color-ui-dropdown .ck-color-grid {
	grid-gap: 2px;
}
.ck.ck-color-ui-dropdown .ck-color-grid .ck-button {
	border-radius: 2px;
}
.ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:hover:not(.ck-disabled),
.ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:focus:not(.ck-disabled) {
	z-index: 1;
	transform: scale(1.1);
	border-radius: 2px;
}

/* --- color-picker --- */

.ck[dir=rtl] .ck-color-input{
  margin: 0 8px 8px 0 !important;
  padding: 3px 5px 0 0 !important;
}

.ck .ck-color-input{
  margin: 0 0 8px 8px ;
  padding: 3px 0 0 6px;
  border-radius:2px ;
  font-size:.77rem !important;
  width: 58px !important;
}
.ck .ck-color-picker{
  margin: 0 3px 8px 3px;
  border-radius:2px !important;
  width: 27px !important;
}
.ck .ck-color-picker-save{
  margin: 0 0 8px 0;
  border-radius:2px !important;
  width:27px !important;
}


/* ---- Style feature config ------------------------------------------------------ */

:root {
	--ck-georgia-serif-font-stack: Georgia,Times,Times New Roman,serif;
}

.ck-content h1.document-title {
	font-family: var(--ck-georgia-serif-font-stack);
	font-size: 50px;
	font-weight: bold;
	border: 0;
}

.ck-content h2.document-subtitle {
	font-family: var(--ck-georgia-serif-font-stack);
	font-size: 20px;
	font-weight: bold;
	color: #d1d1d1;
	letter-spacing: 10px;
}

.ck-content p.callout {
	--border-color: #e91e1e;
	padding: 1.2em 2em;
	border: 1px solid var(--border-color);
	border-left: 10px solid var(--border-color);
	background: #fff9fb;
	border-radius: 5px;
	margin: 1.5em 2em;
	box-shadow: 5px 5px 0 #ffe6ef;
}

.ck-content blockquote.side-quote {
	font-family: var(--ck-georgia-serif-font-stack);
	font-style: normal;
	float: right;
	width: 35%;
	position: relative;
	border: 0;
	overflow: visible;
	z-index: 1;
	margin-left: 1em;
}

.ck-content blockquote.side-quote::before {
	content: "“";
	position: absolute;
	top: -37px;
	left: -10px;
	display: block;
	font-size: 200px;
	color: #e7e7e7;
	z-index: -1;
	line-height: 1;
}

.ck-content blockquote.side-quote p {
	font-size: 2em;
	line-height: 1;
}

.ck-content blockquote.side-quote p:last-child:not(:first-child) {
	font-size: 1.3em;
	text-align: right;
	color: #555;
}

.ck-content span.needs-clarification {
	outline: 1px dashed #c8a24b;
	background: #ffe19c;
	border-radius: 2px;
	position: relative;
}

.ck-content span.needs-clarification::after {
	content: "?";
	display: inline-block;
	color: #fff;
	background: #3b3b3b;
	font-size: 12px;
	vertical-align: super;
	width: 12px;
	height: 12px;
	line-height: 12px;
	border-radius: 10px;
	text-align: center;
	position: absolute;
	right: -6px;
	top: -6px;
	font-weight: bold;
	letter-spacing: initial;
}

.ck-content span.wide-spacing {
	letter-spacing: 0.3em;
}

.ck-content span.small-caps {
	font-variant: small-caps;
}

.ck-content span.spoiler {
	background: #000;
	color: #000;
}

.ck-content span.spoiler:hover {
	background: #000;
	color: #fff;
}

.ck-content pre.stylish-code {
	border-color: transparent;
	margin-left: 2em;
	margin-right: 2em;
	border-radius: 10px;
}

.ck-content pre.stylish-code::before {
	content: "";
	display: block;
	height: 13px;
	background: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCAxMyI+CiAgPGNpcmNsZSBjeD0iNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGMzZCNUMiLz4KICA8Y2lyY2xlIGN4PSIyNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGOUJFNEQiLz4KICA8Y2lyY2xlIGN4PSI0Ny41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiM1NkM0NTMiLz4KPC9zdmc+Cg==);
	margin-bottom: 8px;
	background-repeat: no-repeat;
}

.ck-content pre.stylish-code-dark,
.ck-content pre.stylish-code-bright {
	padding: 1em;
}

.ck-content pre.stylish-code-dark {
	background: #272822;
	box-shadow: 5px 5px 0 #0000001f;
	color: white;
}

.ck-content pre.stylish-code-dark code {
	color: white;
}

.ck-content pre.stylish-code-bright {
	background: #dddfe0;
	color: #000;
	box-shadow: 5px 5px 0 #b3b3b3;
}

.ck-content pre.stylish-code-bright code {
	color: #222;
}

`,z={common:J,light:k,dark:w,additional:_},D=()=>{const d=localStorage.getItem("STRAPI_THEME")||"light",{theme:E,themeOverwrite:F}=globalThis.CKEditorConfig||{},j=F?E:{...z,...E};return(0,n.createGlobalStyle)`
       ${j.common}
       ${j[d]}
       ${j.additional}
   `},$=({isOpen:d,onChange:E,onToggle:F,editor:j,uploadConfig:{responsiveDimensions:K}})=>{const{components:L}=(0,f.tF)(),at=L["media-library"],dt=ut=>{let nt="";ut.map(({name:jt,url:wt,alt:_t,formats:lt,mime:mt})=>{if(mt.includes("image"))if(lt&&K){let At="",X=Object.keys(lt).sort((ct,kt)=>lt[ct].width-lt[kt].width);X.map(ct=>At+=(0,f.vX)(lt[ct].url)+` ${lt[ct].width}w,`),nt+=`<img src="${wt}" alt="${_t}" width="${lt[X[X.length-1]].width}px" srcset="${At}" />`}else nt+=`<img src="${wt}" alt="${_t}" />`;else mt.includes("application/pdf")?nt+=`<a href="${(0,f.vX)(wt)}" download="${jt}">${jt||"Download PDF"}</a>`:mt.includes("video")&&(nt+=`<video controls><source src="${(0,f.vX)(wt)}" type="${mt}"></video>`)});const Q=j.data.processor.toView(nt),Y=j.data.toModel(Q);j.model.insertContent(Y),F()},H=ut=>{const nt=ut.map(Q=>({name:Q.name,alt:Q.alternativeText||Q.name,url:(0,f.vX)(Q.url),mime:Q.mime,formats:Q.formats}));dt(nt)};return d?(0,l.jsx)(at,{onClose:F,onSelectAssets:H}):null};$.defaultProps={isOpen:!1,onChange:()=>{},onToggle:()=>{}},$.propTypes={isOpen:u().bool,onChange:u().func,onToggle:u().func};const ot=$;var Z=i(78885),rt=i(64059);const yt=D(),Wt=(0,n.default)("div")`${({editorStyles:d})=>d}`,gt=({onChange:d,name:E,value:F,disabled:j,preset:K,maxLength:L})=>{const[at,dt]=(0,y.useState)(!1),[H,ut]=(0,y.useState)(!1),[nt,Q]=(0,y.useState)(null),[Y,jt]=(0,y.useState)(null),[wt,_t]=(0,y.useState)(!1),lt=(0,y.useRef)(null),mt=()=>ut(X=>!X),At=X=>X>L?_t(!0):_t(!1);return(0,y.useEffect)(()=>{(async()=>{const{currentConfig:X,uploadPluginConfig:ct}=await it(K,mt);jt(X),Q(ct)})()},[]),(0,l.jsxs)(l.Fragment,{children:[Y&&(0,l.jsx)(yt,{}),(0,l.jsxs)(Wt,{editorStyles:Y?.styles,children:[!Y&&(0,l.jsx)(Ut,{hasRadius:!0,background:"neutral100",children:(0,l.jsx)(c.a,{children:"Loading..."})}),Y&&(0,l.jsx)(s.CKEditor,{editor:window.CKEditor5.editorClassic.ClassicEditor,config:Y?.editorConfig,disabled:j,data:F,onReady:X=>{if(Y.editorConfig.WordCountPlugin){const ct=X.plugins.get("WordCount");ct.on("update",(It,Rt)=>At(Rt.characters)),lt.current?.appendChild(ct.wordCountContainer)}X.plugins.has("ImageUploadEditing")&&X.plugins.get("ImageUploadEditing").on("uploadComplete",(ct,{data:kt,imageElement:It})=>X.model.change(Rt=>Rt.setAttribute("alt",kt.alt,It))),dt(X)},onChange:(X,ct)=>{const kt=ct.getData();d({target:{name:E,value:kt}})}}),Y&&Y.editorConfig.WordCountPlugin&&(0,l.jsx)(Nt,{color:wt?"danger500":"neutral400",ref:lt,children:!at&&(0,l.jsx)(c.a,{small:!0,children:"Loading..."})}),nt&&(0,l.jsx)(ot,{isOpen:H,onToggle:mt,editor:at,uploadConfig:nt})]})]})};gt.defaultProps={value:"",disabled:!1},gt.propTypes={onChange:u().func.isRequired,name:u().string.isRequired,value:u().string,disabled:u().bool};const Nt=(0,n.default)(h.a)`
  display:flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  `,Ut=(0,n.default)(h.a)`
  display:flex;
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
  `,Ht=gt;var Bt=i(54894),bt=i(79521),xt=i(70505);const A=({name:d,attribute:E,onChange:F,value:j,intlLabel:K,labelAction:L,disabled:at,error:dt,description:H,required:ut})=>{const{formatMessage:nt}=(0,Bt.A)(),{preset:Q,maxLengthCharacters:Y,...jt}=E.options;return(0,l.jsx)(bt.Field,{name:d,id:d,error:dt,hint:H&&nt(H),children:(0,l.jsxs)(xt.Stack,{spacing:1,children:[(0,l.jsx)(bt.FieldLabel,{action:L,required:ut,children:nt(K)}),(0,l.jsx)(Ht,{disabled:at,name:d,onChange:F,value:j,preset:Q,maxLength:Y}),(0,l.jsx)(bt.FieldHint,{}),(0,l.jsx)(bt.FieldError,{})]})})};A.defaultProps={description:null,disabled:!1,error:null,labelAction:null,required:!1,value:""},A.propTypes={intlLabel:u().object.isRequired,onChange:u().func.isRequired,attribute:u().object.isRequired,name:u().string.isRequired,description:u().object,disabled:u().bool,error:u().string,labelAction:u().object,required:u().bool,value:u().string};const C=A}}]);

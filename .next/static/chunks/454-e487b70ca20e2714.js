(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[454],{3443:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return o},default:function(){return i}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function l(e){let{type:t,props:n}=e,l=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?l[o]=!!n[e]:l.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:i}=n;return i?l.innerHTML=i.__html||"":o&&(l.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),l}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,l="";if(r){let{children:e}=r.props;l="string"==typeof e?e:Array.isArray(e)?e.join(""):""}l!==document.title&&(document.title=l),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),i=Number(r.content),a=[];for(let t=0,n=r.previousElementSibling;t<i;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&a.push(n)}let u=t.map(l).filter(e=>{for(let t=0,n=a.length;t<n;t++){let n=a[t];if(o(n,e))return a.splice(t,1),!1}return!0});a.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),u.forEach(e=>n.insertBefore(e,r)),r.content=(i-a.length+u.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4244:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return y},initScriptLoader:function(){return m},default:function(){return g}});let r=n(1024),l=n(8533),o=r._(n(4887)),i=l._(n(2265)),a=n(3305),s=n(3443),u=n(4913),c=new Map,f=new Set,d=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:l=null,dangerouslySetInnerHTML:o,children:i="",strategy:a="afterInteractive",onError:u,stylesheets:h}=e,y=n||t;if(y&&f.has(y))return;if(c.has(t)){f.add(y),c.get(t).then(r,u);return}let m=()=>{l&&l(),f.add(y)},v=document.createElement("script"),g=new Promise((e,t)=>{v.addEventListener("load",function(t){e(),r&&r.call(this,t),m()}),v.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(o?(v.innerHTML=o.__html||"",m()):i?(v.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",m()):t&&(v.src=t,c.set(t,g)),Object.entries(e))){if(void 0===r||d.includes(n))continue;let e=s.DOMAttributeNames[n]||n.toLowerCase();v.setAttribute(e,r)}"worker"===a&&v.setAttribute("type","text/partytown"),v.setAttribute("data-nscript",a),h&&p(h),document.body.appendChild(v)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))}):h(e)}function m(e){e.forEach(y),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}()}function v(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:l=null,strategy:s="afterInteractive",onError:c,stylesheets:d,...p}=e,{updateScripts:y,scripts:m,getIsSsr:v,appDir:g,nonce:b}=(0,i.useContext)(a.HeadManagerContext),_=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;_.current||(l&&e&&f.has(e)&&l(),_.current=!0)},[l,t,n]);let w=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!w.current&&("afterInteractive"===s?h(e):"lazyOnload"===s&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))})),w.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(y?(m[s]=(m[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:l,onError:c,...p}]),y(m)):v&&v()?f.add(t||n):v&&!v()&&h(e)),g){if(d&&d.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)return n?(o.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),i.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),i.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===s&&n&&o.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(v,"__nextScript",{value:!0});let g=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2597:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return u},unstable_getImgProps:function(){return s}});let r=n(1024),l=n(3655),o=n(7707),i=n(6964),a=r._(n(5324)),s=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,l.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},u=i.Image},3837:function(e){e.exports={style:{fontFamily:"'__Jost_4112fc', '__Jost_Fallback_4112fc'",fontStyle:"normal"},className:"__className_4112fc",variable:"__variable_4112fc"}},6691:function(e,t,n){e.exports=n(2597)},1396:function(e,t,n){e.exports=n(4724)},4033:function(e,t,n){e.exports=n(290)},3135:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},l=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&l(t,e,n);return o(t,e),t},a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(l,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function a(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?l(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(i,a)}s((r=r.apply(e,t||[])).next())})},s=this&&this.__generator||function(e,t){var n,r,l,o,i={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(l=2&o[0]?r.return:o[0]?r.throw||((l=r.return)&&l.call(r),0):r.next)&&!(l=l.call(r,o[1])).done)return l;switch(r=0,l&&(o=[2&o[0],l.value]),o[0]){case 0:case 1:l=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(l=(l=i.trys).length>0&&l[l.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!l||o[1]>l[0]&&o[1]<l[3])){i.label=o[1];break}if(6===o[0]&&i.label<l[1]){i.label=l[1],l=o;break}if(l&&i.label<l[2]){i.label=l[2],i.ops.push(o);break}l[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=l=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.PayloadAdminBar=void 0;var u=i(n(2265)),c={email:"dev@email.com",id:"12345"};t.PayloadAdminBar=function(e){var t=e.cmsURL,n=void 0===t?"http://localhost:8000":t,l=e.apiPath,o=void 0===l?"/api":l,i=e.adminPath,f=void 0===i?"/admin":i,d=e.collection,p=e.collectionLabels,h=e.id,y=e.logo,m=e.className,v=e.logoProps,g=e.editProps,b=e.createProps,_=e.userProps,w=e.logoutProps,x=e.divProps,E=e.style,S=e.unstyled,O=e.onAuthChange,k=e.classNames,P=e.devMode,M=e.preview,N=e.onPreviewExit,j=e.previewProps,I=(0,u.useState)(),L=I[0],A=I[1];if((0,u.useEffect)(function(){a(void 0,void 0,void 0,function(){var e;return s(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch(""+n+o+"/users/me",{method:"get",credentials:"include"})];case 1:return[4,t.sent().json()];case 2:return(e=t.sent().user)?A(e):!0!==P?A(null):A(c),[3,4];case 3:return console.warn(t.sent()),!0===P&&A(c),[3,4];case 4:return[2]}})})},[n,f,o]),(0,u.useEffect)(function(){"function"==typeof O&&O(L)},[L,O]),L){var C=L.email,H=L.id;return u.default.createElement("div",{className:m,style:r(r({},!0!==S?{fontSize:"small",position:"fixed",display:"flex",minWidth:"0",alignItems:"center",top:0,left:0,width:"100%",padding:"0.5rem",zIndex:99999,boxSizing:"border-box",backgroundColor:"#222",color:"#fff",fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"}:{}),E)},u.default.createElement("a",r({href:""+n+f,className:null==k?void 0:k.logo},v,{style:r({},!0!==S?r({marginRight:"10px",flexShrink:0,display:"flex",height:"20px",textDecoration:"none",color:"inherit",alignItems:"center"},(null==v?void 0:v.style)?r({},v.style):{}):{})}),y||"Payload CMS"),u.default.createElement("a",r({href:""+n+f+"/collections/users/"+H,target:"_blank",rel:"noopener noreferrer",className:null==k?void 0:k.user},_,{style:r({},!0!==S?r({marginRight:"10px",display:"block",minWidth:"50px",overflow:"hidden",textOverflow:"ellipsis",textDecoration:"none",whiteSpace:"nowrap",color:"inherit"},(null==_?void 0:_.style)?r({},_.style):{}):{})}),u.default.createElement("span",{style:r({},!0!==S?{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}:{})},C||"Profile")),u.default.createElement("div",r({className:null==k?void 0:k.controls},x,{style:r({},!0!==S?r({display:"flex",marginRight:"10px",flexShrink:1,flexGrow:1,alignItems:"center",justifyContent:"flex-end"},(null==x?void 0:x.style)?r({},x.style):{}):{})}),d&&h&&u.default.createElement("a",r({href:""+n+f+"/collections/"+d+"/"+h,target:"_blank",rel:"noopener noreferrer",className:null==k?void 0:k.edit},g,{style:r({display:"block"},!0!==S?r({marginRight:"10px",textDecoration:"none",color:"inherit",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",flexShrink:1},(null==g?void 0:g.style)?r({},g.style):{}):{})}),u.default.createElement("span",{style:r({},!0!==S?{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}:{})},"Edit "+((null==p?void 0:p.singular)||"page"))),d&&u.default.createElement("a",r({href:""+n+f+"/collections/"+d+"/create",target:"_blank",rel:"noopener noreferrer",className:null==k?void 0:k.create},b,{style:r({},!0!==S?r({flexShrink:1,display:"block",textDecoration:"none",color:"inherit",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},(null==b?void 0:b.style)?r({},b.style):{}):{})}),u.default.createElement("span",{style:r({},!0!==S?{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}:{})},"New "+((null==p?void 0:p.singular)||"page"))),M&&u.default.createElement("button",r({className:null==k?void 0:k.preview,onClick:N},j,{style:r({},!0!==S?r({marginLeft:"10px",background:"none",border:"none",padding:0,cursor:"pointer",color:"inherit",fontFamily:"inherit",fontSize:"inherit"},(null==j?void 0:j.style)?r({},j.style):{}):{})}),"Exit preview mode")),u.default.createElement("a",r({href:""+n+f+"/logout",target:"_blank",rel:"noopener noreferrer",className:null==k?void 0:k.logout},w,{style:r({},!0!==S?r({textDecoration:"none",color:"inherit",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",display:"block",flexShrink:1},(null==w?void 0:w.style)?r({},w.style):{}):{})}),u.default.createElement("span",{style:r({},!0!==S?{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}:{})},"Logout")))}return null}}}]);
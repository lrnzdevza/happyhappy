exports.id=1224,exports.ids=[1224],exports.modules={10833:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,19918,23)),Promise.resolve().then(r.t.bind(r,82057,23)),Promise.resolve().then(r.t.bind(r,46148,23)),Promise.resolve().then(r.t.bind(r,88359,23)),Promise.resolve().then(r.t.bind(r,51860,23)),Promise.resolve().then(r.t.bind(r,92427,23))},50808:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,42721,23)),Promise.resolve().then(r.bind(r,10198)),Promise.resolve().then(r.bind(r,48301)),Promise.resolve().then(r.bind(r,88572)),Promise.resolve().then(r.bind(r,89881))},10198:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AdminBar:()=>h});var a=r(60080),o=r(9885),n=r.n(o),s=r(57114),i=r(2383),l=r(8693),c=r(55964),d=r(42780),p=r.n(d);let u=()=>a.jsx("span",{children:"Dashboard"}),h=e=>{let{adminBarProps:t}=e||{},r=(0,s.useSelectedLayoutSegments)(),d=r?.[1]==="products"?"products":"pages",[h,m]=n().useState(!1),{user:y}=(0,l.a)();(0,o.useEffect)(()=>{y&&m(!0)},[y]);let g=y?.roles?.includes("admin");return g?a.jsx("div",{className:[p().adminBar,h&&p().show].filter(Boolean).join(" "),children:a.jsx(c.T,{className:p().blockContainer,children:(0,o.createElement)(i.PayloadAdminBar,{...t,collection:d,collectionLabels:{singular:"products"===d?"Product":"Page",plural:"products"===d?"Products":"Pages"},key:y?.id,cmsURL:"https://happy-hearts.payloadcms.app",className:p().payloadAdminBar,classNames:{user:p().user,logo:p().logo,controls:p().controls},logo:a.jsx(u,{}),style:{position:"relative",zIndex:"unset",padding:0,backgroundColor:"transparent"}})})}):null}},39496:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Button:()=>l});var a=r(60080);r(9885);var o=r(11440),n=r.n(o),s=r(92186),i=r.n(s);let l=({el:e="link",label:t,newTab:r,href:o,appearance:s,className:l,onClick:c,type:d="button",disabled:p,invert:u,children:h})=>{let m=e,y=r?{target:"_blank",rel:"noopener noreferrer"}:{},g=[i().button,l,i()[`appearance--${s}`],u&&i()[`${s}--invert`]].filter(Boolean).join(" "),_=(0,a.jsxs)("div",{className:i().content,children:[a.jsx("span",{className:i().label,children:t}),h]});if((c||"submit"===d)&&(m="button"),"link"===m)return a.jsx(n(),{href:o||"",className:g,...y,onClick:c,children:_});let f=m;return a.jsx(f,{href:o,className:g,type:d,...y,onClick:c,disabled:p,children:_})}},48301:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var a=r(60080);r(9885);var o=r(52451),n=r.n(o),s=r(11440),i=r.n(s),l=r(57114),c=r(72866),d=r(39496),p=r(55964),u=r(50544),h=r.n(u);let m=({footer:e})=>{let t=(0,l.usePathname)(),r=e?.navItems||[];return(0,a.jsxs)("footer",{className:c.QE.includes(t)?h().hide:"",children:[a.jsx(p.T,{children:a.jsx("ul",{className:h().inclusions,children:c.mo.map(e=>(0,a.jsxs)("li",{children:[a.jsx(n(),{src:e.icon,alt:e.title,width:36,height:36,className:h().icon}),a.jsx("h5",{className:h().title,children:e.title}),a.jsx("p",{children:e.description})]},e.title))})}),a.jsx("div",{className:h().footer,children:a.jsx(p.T,{children:(0,a.jsxs)("div",{className:h().wrap,children:[a.jsx(i(),{href:"/",children:a.jsx(n(),{src:"/logo-named.svg",alt:"logo",width:170,height:50})}),a.jsx(i(),{href:"https://web3development.co.za",target:"_blank",children:a.jsx("p",{children:e?.copyright})}),a.jsx("div",{className:h().socialLinks,children:r.map(e=>{let t=e?.link?.icon;return a.jsx(d.Button,{el:"link",href:e.link.url,newTab:!0,className:h().socialLinkItem,children:a.jsx(n(),{src:t?.url,alt:e.link.label,width:24,height:24,className:h().socialIcon})},e.link.label)})})]})})})]})}},55964:(e,t,r)=>{"use strict";r.d(t,{T:()=>i});var a=r(60080),o=r(9885),n=r(75512),s=r.n(n);let i=(0,o.forwardRef)((e,t)=>{let{left:r=!0,right:o=!0,className:n,children:i}=e;return a.jsx("div",{ref:t,className:[s().gutter,r&&s().gutterLeft,o&&s().gutterRight,n].filter(Boolean).join(" "),children:i})});i.displayName="Gutter"},88572:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>E});var a=r(60080),o=r(9885),n=r(52451),s=r.n(n),i=r(11440),l=r.n(i),c=r(57114),d=r(72866),p=r(55964),u=r(8693),h=r(39496),m=r(17644),y=r(68944),g=r.n(y);let _=e=>{let{className:t}=e,{cart:r}=(0,m.j)(),[n,s]=(0,o.useState)();return(0,o.useEffect)(()=>{s(r?.items?.length||0)},[r]),a.jsx(l(),{className:[g().cartLink,t].filter(Boolean).join(" "),href:"/cart",children:(0,a.jsxs)(o.Fragment,{children:["Cart","number"==typeof n&&n>0&&(0,a.jsxs)("small",{className:g().quantity,children:["(",n,")"]})]})})};var f=r(42915),x=r(34584),v=r.n(x);let w=({header:e})=>{let t=e?.navItems||[],{user:r}=(0,u.a)();return(0,a.jsxs)("nav",{className:[v().nav,void 0===r&&v().hide].filter(Boolean).join(" "),children:[t.map(({link:e},t)=>a.jsx(f.g,{...e,appearance:"none"},t)),r&&a.jsx(l(),{href:"/account",children:"Account"}),!r&&a.jsx(h.Button,{el:"link",href:"/login",label:"Login",appearance:"primary",onClick:()=>window.location.href="/login"}),r&&a.jsx(_,{})]})};var j=r(82078),b=r.n(j);let E=({header:e})=>{let t=(0,c.usePathname)();return a.jsx("nav",{className:[b().header,d.QE.includes(t)&&b().hide].filter(Boolean).join(" "),children:(0,a.jsxs)(p.T,{className:b().wrap,children:[a.jsx("div",{className:b().logo_container,children:(0,a.jsxs)(l(),{href:"/",children:[a.jsx(s(),{src:"/logo.svg",alt:"logo",width:80,height:50}),a.jsx("p",{className:b().logo_p,children:"Happy Hearts"})]})}),a.jsx(w,{header:e})]})})}},42915:(e,t,r)=>{"use strict";r.d(t,{g:()=>i});var a=r(60080);r(9885);var o=r(11440),n=r.n(o),s=r(39496);let i=({type:e,url:t,newTab:r,reference:o,label:i,appearance:l,children:c,className:d,invert:p})=>{let u="reference"===e&&"object"==typeof o?.value&&o.value.slug?`${o?.relationTo!=="pages"?`/${o?.relationTo}`:""}/${o.value.slug}`:t;return u?!l&&(u||t)?(0,a.jsxs)(n(),{...r?{target:"_blank",rel:"noopener noreferrer"}:{},href:u||t,className:d,children:[i&&i,c&&c]}):a.jsx(s.Button,{className:d,newTab:r,href:u,appearance:l,label:i,invert:p}):null}},8693:(e,t,r)=>{"use strict";r.d(t,{H:()=>s,a:()=>i});var a=r(60080),o=r(9885);let n=(0,o.createContext)({}),s=({children:e})=>{let[t,r]=(0,o.useState)(),[s,i]=(0,o.useState)(),l=(0,o.useCallback)(async e=>{try{let t=await fetch("https://happy-hearts.payloadcms.app/api/users/create",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password,passwordConfirm:e.passwordConfirm})});if(t.ok){let{data:e,errors:a}=await t.json();if(a)throw Error(a[0].message);r(e?.loginUser?.user),i("loggedIn")}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),c=(0,o.useCallback)(async e=>{try{let t=await fetch("https://happy-hearts.payloadcms.app/api/users/login",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})});if(t.ok){let{user:e,errors:a}=await t.json();if(a)throw Error(a[0].message);return r(e),i("loggedIn"),e}throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),d=(0,o.useCallback)(async()=>{try{let e=await fetch("https://happy-hearts.payloadcms.app/api/users/logout",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}});if(e.ok)r(null),i("loggedOut");else throw Error("An error occurred while attempting to logout.")}catch(e){throw Error("An error occurred while attempting to logout.")}},[]);(0,o.useEffect)(()=>{let e=async()=>{try{let e=await fetch("https://happy-hearts.payloadcms.app/api/users/me",{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}});if(e.ok){let{user:t}=await e.json();r(t||null),i(t?"loggedIn":void 0)}else throw Error("An error occurred while fetching your account.")}catch(e){throw r(null),Error("An error occurred while fetching your account.")}};e()},[]);let p=(0,o.useCallback)(async e=>{try{let t=await fetch("https://happy-hearts.payloadcms.app/api/users/forgot-password",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email})});if(t.ok){let{data:e,errors:a}=await t.json();if(a)throw Error(a[0].message);r(e?.loginUser?.user)}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),u=(0,o.useCallback)(async e=>{try{let t=await fetch("https://happy-hearts.payloadcms.app/api/users/reset-password",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e.password,passwordConfirm:e.passwordConfirm,token:e.token})});if(t.ok){let{data:e,errors:a}=await t.json();if(a)throw Error(a[0].message);r(e?.loginUser?.user),i(e?.loginUser?.user?"loggedIn":void 0)}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]);return a.jsx(n.Provider,{value:{user:t,setUser:r,login:c,logout:d,create:l,resetPassword:u,forgotPassword:p,status:s},children:e})},i=()=>(0,o.useContext)(n)},17644:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d,j:()=>l});var a=r(60080),o=r(9885),n=r(8693);let s=(e,t)=>{switch(t.type){case"SET_CART":return t.payload;case"MERGE_CART":{let{payload:r}=t,a=[...e?.items||[],...r?.items||[]].reduce((e,t)=>{let r="string"==typeof t.product?t.product:t?.product?.id,a=e.findIndex(({product:e})=>"string"==typeof e?e===r:e?.id===r);return a>-1?e[a]={...e[a]}:e.push(t),e},[]);return{...e,items:a}}case"ADD_ITEM":{let{payload:r}=t,a="string"==typeof r.product?r.product:r?.product?.id,o=e?.items?.findIndex(({product:e})=>"string"==typeof e?e===a:e?.id===a),n=[...e?.items||[]];return -1===o&&n.push(r),"number"==typeof o&&o>-1&&(n[o]={...n[o],quantity:(r.quantity||0)>0?r.quantity:void 0}),{...e,items:n}}case"DELETE_ITEM":{let{payload:r}=t,a={...e},o=e?.items?.findIndex(({product:e})=>"string"==typeof e?e===r.id:e?.id===r.id);return"number"==typeof o&&a.items&&o>-1&&a.items.splice(o,1),a}case"CLEAR_CART":return{...e,items:[]};default:return e}},i=(0,o.createContext)({}),l=()=>(0,o.useContext)(i),c=e=>Array.isArray(e)&&e.length>0,d=e=>{let{children:t}=e,{user:r,status:l}=(0,n.a)(),[d,p]=(0,o.useReducer)(s,{items:[]}),[u,h]=(0,o.useState)({formatted:"0.00",raw:0}),m=(0,o.useRef)(!1),[y,g]=(0,o.useState)(!1);(0,o.useEffect)(()=>{if(!m.current){m.current=!0;let e=async()=>{let e=localStorage.getItem("cart"),t=JSON.parse(e||"{}");if(t?.items&&t?.items?.length>0){let e=await Promise.all(t.items.map(async({product:e,quantity:t})=>{let r=await fetch(`https://happy-hearts.payloadcms.app/api/products/${e}`),a=await r.json();return{product:a,quantity:t}}));p({type:"SET_CART",payload:{items:e}})}else p({type:"SET_CART",payload:{items:[]}})};e()}},[]),(0,o.useEffect)(()=>{m.current&&("loggedIn"===l&&p({type:"MERGE_CART",payload:r?.cart}),"loggedOut"===l&&p({type:"CLEAR_CART"}))},[r,l]),(0,o.useEffect)(()=>{if(!m.current||void 0===r)return;let e={...d,items:d?.items?.map(e=>e?.product&&"object"==typeof e?.product?{...e,product:e?.product?.id,quantity:"number"==typeof e?.quantity?e?.quantity:0}:null).filter(Boolean)};if(r)try{let t=async()=>{let t=await fetch(`https://happy-hearts.payloadcms.app/api/users/${r.id}`,{credentials:"include",method:"PATCH",body:JSON.stringify({cart:e}),headers:{"Content-Type":"application/json"}});t.ok&&localStorage.setItem("cart","[]")};t()}catch(e){console.error("Error while syncing cart to Payload.")}else localStorage.setItem("cart",JSON.stringify(e));g(!0)},[r,d]);let _=(0,o.useCallback)(e=>{let t=!1,{items:r}=d||{};return Array.isArray(r)&&r.length>0&&(t=!!r.find(({product:t})=>"string"==typeof t?t===e.id:t?.id===e.id)),t},[d]),f=(0,o.useCallback)(e=>{p({type:"ADD_ITEM",payload:e})},[]),x=(0,o.useCallback)(e=>{p({type:"DELETE_ITEM",payload:e})},[]),v=(0,o.useCallback)(()=>{p({type:"CLEAR_CART"})},[]);return(0,o.useEffect)(()=>{if(!m)return;let e=d?.items?.reduce((e,t)=>e+("object"==typeof t.product?JSON.parse(t?.product?.priceJSON||"{}")?.data?.[0]?.unit_amount*("number"==typeof t?.quantity?t?.quantity:0):0),0)||0;h({formatted:(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"}),raw:e})},[d,m]),a.jsx(i.Provider,{value:{cart:d,addItemToCart:f,deleteItemFromCart:x,cartIsEmpty:y&&!c(d?.items),clearCart:v,isProductInCart:_,cartTotal:u,hasInitializedCart:y},children:t&&t})}},94524:(e,t,r)=>{"use strict";r.d(t,{L0:()=>i,hz:()=>s});var a=r(60080),o=r(9885);let n=(0,o.createContext)({categoryFilters:[],setCategoryFilters:()=>[],sort:"",setSort:()=>""}),s=({children:e})=>{let[t,r]=(0,o.useState)([]),[s,i]=(0,o.useState)("-createdAt");return a.jsx(n.Provider,{value:{categoryFilters:t,setCategoryFilters:r,sort:s,setSort:i},children:e})},i=()=>(0,o.useContext)(n)},9876:(e,t,r)=>{"use strict";r.d(t,{f:()=>l,F:()=>c});var a=r(60080),o=r(9885);let n="payload-theme",s=()=>{let e=window.matchMedia("(prefers-color-scheme: dark)"),t="boolean"==typeof e.matches;return t?e.matches?"dark":"light":null},i=(0,o.createContext)({theme:void 0,setTheme:()=>null}),l=({children:e})=>{let[t,r]=(0,o.useState)(void 0),l=(0,o.useCallback)(e=>{if(null===e){window.localStorage.removeItem(n);let e=s();document.documentElement.setAttribute("data-theme",e||""),e&&r(e)}else r(e),window.localStorage.setItem(n,e),document.documentElement.setAttribute("data-theme",e)},[]);return(0,o.useEffect)(()=>{let e="light",t=window.localStorage.getItem(n);if(function(e){return!!e&&["light","dark"].includes(e)}(t))e=t;else{let t=s();t&&(e=t)}document.documentElement.setAttribute("data-theme",e),r(e)},[]),a.jsx(i.Provider,{value:{theme:t,setTheme:l},children:e})},c=()=>(0,o.useContext)(i)},89881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Providers:()=>l});var a=r(60080);r(9885);var o=r(8693),n=r(17644),s=r(94524),i=r(9876);let l=({children:e})=>a.jsx(i.f,{children:a.jsx(o.H,{children:a.jsx(s.hz,{children:a.jsx(n.Z,{children:e})})})})},72866:(e,t,r)=>{"use strict";r.d(t,{QE:()=>o,mo:()=>a});let a=[{title:"Free Shipping",description:"Free shipping for order above $150",icon:"/assets/icons/shipping.svg"},{title:"Money Guarantee",description:"Within 30 days for an exchange",icon:"/assets/icons/dollar.svg"},{title:"Online Support",description:"24 hours a day, 7 days a week",icon:"/assets/icons/support.svg"},{title:"Flexible Payment",description:"Pay with multiple credit cards",icon:"/assets/icons/payment.svg"}],o=["/create-account","/login","/recover-password"]},42780:e=>{e.exports={adminBar:"AdminBar_adminBar__ceGCp",payloadAdminBar:"AdminBar_payloadAdminBar__skl88",show:"AdminBar_show__g8VSt",controls:"AdminBar_controls__qLraR",user:"AdminBar_user__F84n_",logo:"AdminBar_logo__0UGR_",blockContainer:"AdminBar_blockContainer__sOKl5",hr:"AdminBar_hr__FMeNP"},e.exports.__checksum="1fee8b57c1b0"},92186:e=>{e.exports={label:"Button_label__pYjjJ",button:"Button_button__QvmpL",content:"Button_content__rz2Uk","appearance--primary":"Button_appearance--primary__aXtFJ","appearance--secondary":"Button_appearance--secondary__67RnZ","appearance--tertiary":"Button_appearance--tertiary__3eeNV","primary--invert":"Button_primary--invert__abvn4","secondary--invert":"Button_secondary--invert__OpT85","appearance--default":"Button_appearance--default__Hxo2A","appearance--none":"Button_appearance--none__nd_sY"},e.exports.__checksum="2a4c315eeb7e"},68944:e=>{e.exports={cartLink:"CartLink_cartLink__VhF_d",quantity:"CartLink_quantity__8mgwJ"},e.exports.__checksum="a53549638fa9"},50544:e=>{e.exports={footer:"FooterComponent_footer__DpGym",inclusions:"FooterComponent_inclusions__coIk3",icon:"FooterComponent_icon__7RTwE",wrap:"FooterComponent_wrap__5tvbs",logo:"FooterComponent_logo__pBTPf",hr:"FooterComponent_hr__Tj2mn",socialLinks:"FooterComponent_socialLinks___YuUf",socialLinkItem:"FooterComponent_socialLinkItem__H2_G4",socialIcon:"FooterComponent_socialIcon__l7_HP",hide:"FooterComponent_hide__nxJ_z"},e.exports.__checksum="109545371679"},75512:e=>{e.exports={gutter:"Gutter_gutter__QB0_n",gutterLeft:"Gutter_gutterLeft__9iSai",gutterRight:"Gutter_gutterRight__4jfEx"},e.exports.__checksum="94916d64db3c"},82078:e=>{e.exports={header:"HeaderComponent_header__fcrJ1",wrap:"HeaderComponent_wrap__dB0Bq",logo:"HeaderComponent_logo__Jh_5E",hide:"HeaderComponent_hide__CgE6b",logo_container:"HeaderComponent_logo_container__W6Jvz",logo_p:"HeaderComponent_logo_p__NHc30"},e.exports.__checksum="27c1911b8c2c"},34584:e=>{e.exports={nav:"Nav_nav__GahsC",hide:"Nav_hide__HQv51"},e.exports.__checksum="14d6fe718f1d"},28996:(e,t,r)=>{"use strict";r.d(t,{cm:()=>h,Qi:()=>u,wv:()=>p});var a=r(45603);let o=`
  Header {
    navItems {
      link ${(0,a.A)({disableAppearance:!0})}
		}
  }
`,n=`
query Header {
  ${o}
}
`,s=`
  Footer {
    copyright
    navItems {
      link ${(0,a.A)({disableAppearance:!0})}
		}
  }
`,i=`
query Footer {
  ${s}
}
`,l=`
  Settings {
    productsPage {
      slug
    }
  }
`,c=`
query Settings {
  ${l}
}
`;var d=r(20109);async function p(){let e=await fetch(`${d.k}/api/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},cache:"no-store",body:JSON.stringify({query:c})})?.then(e=>{if(!e.ok)throw Error("Error fetching doc");return e.json()})?.then(e=>{if(e?.errors)throw Error(e?.errors[0]?.message||"Error fetching settings");return e.data?.Settings});return e}async function u(){if(!d.k)throw Error("NEXT_PUBLIC_SERVER_URL not found");let e=await fetch(`${d.k}/api/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},cache:"no-store",body:JSON.stringify({query:n})})?.then(e=>{if(!e.ok)throw Error("Error fetching doc");return e.json()})?.then(e=>{if(e?.errors)throw Error(e?.errors[0]?.message||"Error fetching header");return e.data?.Header});return e}async function h(){if(!d.k)throw Error("NEXT_PUBLIC_SERVER_URL not found");let e=await fetch(`${d.k}/api/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:i})}).then(e=>{if(!e.ok)throw Error("Error fetching doc");return e.json()})?.then(e=>{if(e?.errors)throw Error(e?.errors[0]?.message||"Error fetching footer");return e.data?.Footer});return e}},20109:(e,t,r)=>{"use strict";r.d(t,{k:()=>a});let a=process.env.NEXT_BUILD?`http://127.0.0.1:${process.env.PORT||3e3}`:"https://happy-hearts.payloadcms.app"},45603:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=({disableAppearance:e,disableLabel:t}={})=>`{
  ${t?"":"label"}
  ${e?"":"appearance"}
  type
  newTab
  url
  icon {
    url
  }
  reference {
    relationTo
    value {
      ...on Page {
        slug
      }
    }
  }
}`},62208:(e,t,r)=>{"use strict";r.d(t,{T:()=>o});let a={type:"website",siteName:"Payload E-Commerce Template",title:"Payload E-Commerce Template",description:"An open-source e-commerce store built with Payload and Next.js.",images:[{url:"https://payloadcms.com/images/og-image.jpg"}]},o=e=>({...a,...e,images:e?.images?e.images:a.images})},82645:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>A,metadata:()=>N});var a=r(48144),o=r(72925),n=r.n(o);r(53830);var s=r(17536);let i=(0,s.createProxy)(String.raw`/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/_components/AdminBar/index.tsx`),{__esModule:l,$$typeof:c}=i;i.default;let d=i.AdminBar;var p=r(28996);let u=(0,s.createProxy)(String.raw`/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/_components/Footer/FooterComponent/index.tsx`),{__esModule:h,$$typeof:m}=u,y=u.default;async function g(){let e=null;try{e=await (0,p.cm)()}catch(e){console.log(e)}return e?.navItems,a.jsx(a.Fragment,{children:a.jsx(y,{footer:e})})}let _=(0,s.createProxy)(String.raw`/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/_components/Header/HeaderComponent/index.tsx`),{__esModule:f,$$typeof:x}=_,v=_.default;async function w(){let e=null;try{e=await (0,p.Qi)()}catch(e){console.log(e)}return a.jsx(a.Fragment,{children:a.jsx(v,{header:e})})}let j=(0,s.createProxy)(String.raw`/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/_providers/index.tsx`),{__esModule:b,$$typeof:E}=j;j.default;let C=j.Providers;var k=r(82777),T=r.n(k);let S=()=>a.jsx(T(),{id:"theme-script",dangerouslySetInnerHTML:{__html:`
  (function () {
    function getImplicitPreference() {
      var mediaQuery = '(prefers-color-scheme: dark)'
      var mql = window.matchMedia(mediaQuery)
      var hasImplicitPreference = typeof mql.matches === 'boolean'

      if (hasImplicitPreference) {
        return mql.matches ? 'dark' : 'light'
      }

      return null
    }

    function themeIsValid(theme) {
      return theme === 'light' || theme === 'dark'
    }

    var themeToSet = 'light'
    var preference = window.localStorage.getItem('payload-theme')

    if (themeIsValid(preference)) {
      themeToSet = preference
    } else {
      var implicitPreference = getImplicitPreference()

      if (implicitPreference) {
        themeToSet = implicitPreference
      }
    }

    document.documentElement.setAttribute('data-theme', themeToSet)
  })();
  `}});var P=r(62208);async function A({children:e}){return(0,a.jsxs)("html",{lang:"en",suppressHydrationWarning:!0,children:[(0,a.jsxs)("head",{children:[a.jsx(S,{}),a.jsx("link",{rel:"icon",href:"/favicon.ico",sizes:"32x32"}),a.jsx("link",{rel:"icon",href:"/favicon.ico",type:"image/svg+xml"})]}),a.jsx("body",{className:n().variable,children:(0,a.jsxs)(C,{children:[a.jsx(d,{}),a.jsx(w,{}),a.jsx("main",{className:"main",children:e}),a.jsx(g,{})]})})]})}r(69453);let N={metadataBase:new URL("https://happy-hearts.payloadcms.app"),twitter:{card:"summary_large_image",creator:"@payloadcms"},openGraph:(0,P.T)()}},69453:()=>{}};
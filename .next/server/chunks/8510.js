exports.id=8510,exports.ids=[8510],exports.modules={81711:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,41297,23)),Promise.resolve().then(a.t.bind(a,42796,23)),Promise.resolve().then(a.bind(a,39496)),Promise.resolve().then(a.bind(a,32627)),Promise.resolve().then(a.bind(a,26576)),Promise.resolve().then(a.bind(a,5933)),Promise.resolve().then(a.bind(a,94011)),Promise.resolve().then(a.bind(a,70966)),Promise.resolve().then(a.bind(a,74162))},26576:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var s=a(60080);a(9885);var r=a(11440),o=a.n(r),i=a(94524),l=a(36156),n=a.n(l);let c=({category:e})=>{let t=e.media,{setCategoryFilters:a}=(0,i.L0)();return s.jsx(o(),{href:"/products",className:n().card,style:{backgroundImage:`url(${t.url})`},onClick:()=>a([e.id]),children:s.jsx("p",{className:n().title,children:e.title})})}},74162:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var s=a(60080),r=a(9885),o=a(39655),i=a.n(o);let l=({label:e,value:t})=>(0,s.jsxs)("li",{className:i().statBox,children:[s.jsx("h4",{children:t}),s.jsx("p",{children:e})]}),n=()=>{let[e,t]=(0,r.useState)({days:0,hours:0,minutes:0,seconds:0}),a=(0,r.useMemo)(()=>{let e=new Date;return e.setDate(e.getDate()+3),e},[]);return(0,r.useEffect)(()=>{let e=setInterval(()=>{let s=new Date,r=Math.max(Number(a)-Number(s),0);t({days:Math.floor(r/864e5),hours:Math.floor(r%864e5/36e5),minutes:Math.floor(r%36e5/6e4),seconds:Math.floor(r%6e4/1e3)}),0===r&&clearInterval(e)},1e3);return()=>{clearInterval(e)}},[a]),s.jsx("section",{className:i().promotion,children:(0,s.jsxs)("div",{className:i().textBox,children:[s.jsx("h3",{className:i().title,children:"Deals of the Month"}),s.jsx("p",{children:"Get ready for a shopping experience like never before with our Deals of the Month! Every purchase comes with exclusive perks and offers, making this month a celebration of savvy choices and amazing deals. Don't miss out! \uD83C\uDF81\uD83D\uDED2"}),(0,s.jsxs)("ul",{className:i().stats,children:[s.jsx(l,{label:"Days",value:e.days}),s.jsx(l,{label:"Hours",value:e.hours}),s.jsx(l,{label:"Minutes",value:e.minutes}),s.jsx(l,{label:"Seconds",value:e.seconds})]})]})})}},49939:e=>{e.exports={home:"_slug__home__NhNSD"},e.exports.__checksum="689214042866"},36156:e=>{e.exports={card:"CategoryCard_card__oMtep",title:"CategoryCard_title__ecE0J"},e.exports.__checksum="3005485c7f03"},44996:e=>{e.exports={container:"Categories_container__S8cTZ",titleWrapper:"Categories_titleWrapper___0uuc",list:"Categories_list__uukOu"},e.exports.__checksum="513800c29b0e"},39655:e=>{e.exports={promotion:"Promotion_promotion__reLFS",title:"Promotion_title__EjQuV",textBox:"Promotion_textBox__O_JJr",image:"Promotion_image__uZNv_",dealBtn:"Promotion_dealBtn__pgkwW",stats:"Promotion_stats__EyYCY",statBox:"Promotion_statBox__Gv5lB"},e.exports.__checksum="118e861c237f"},26957:e=>{e.exports={hero:"CustomHero_hero__YecJP",heroWrapper:"CustomHero_heroWrapper__JHIPd",heroTextBox:"CustomHero_heroTextBox__zC7_G",links:"CustomHero_links__zV5JV"},e.exports.__checksum="f35ea8f4df1f"},63470:e=>{e.exports={hero:"HighImpact_hero__qkKp_",media:"HighImpact_media__uxa5y",links:"HighImpact_links__yDa_5",caption:"HighImpact_caption__Vmt4w",content:"HighImpact_content__ifEIW"},e.exports.__checksum="cd58124ffd25"},30967:e=>{e.exports={},e.exports.__checksum="73ff4aef96d0"},27791:e=>{e.exports={hero:"MediumImpact_hero__x2eOT",richText:"MediumImpact_richText__NN8m_",links:"MediumImpact_links__jKvJ9",link:"MediumImpact_link__T2op7",media:"MediumImpact_media___5aQS"},e.exports.__checksum="2003c8dbb903"},38242:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>V,dynamic:()=>Y,generateMetadata:()=>q,generateStaticParams:()=>O});var s=a(48144),r=a(53830),o=a.n(r),i=a(59859),l=a(6465);let n={id:"",title:"Home",slug:"home",createdAt:"",updatedAt:"",meta:{title:"Payload E-Commerce Template",description:"An open-source e-commerce store built with Payload and Next.js."},hero:{type:"lowImpact",richText:[{children:[{text:"Payload E-commerce Template"}],type:"h1"},{children:[{text:"Welcome to your e-commerce store! "},{text:"Your database is currently empty.",bold:!0},{text:" To seed your database with a few products and pages, "},{type:"link",linkType:"custom",url:"/admin",children:[{text:"log in to the admin dashboard"}]},{text:' and click "seed your database". If you have already seeded your database, '},{text:"you may need to hard refresh this page to clear the cached request.",bold:!0}]},{children:[{text:"The code for this template is completely open-source and can be found "},{type:"link",linkType:"custom",url:"https://github.com/payloadcms/payload/tree/main/templates/ecommerce",newTab:!0,children:[{text:"here"}]},{text:"."}]}],media:""},layout:[{richText:[{children:[{text:"Seed your database"}],type:"h4"},{children:[{text:"Your database is currently empty. To seed your database, "},{type:"link",linkType:"custom",url:"/admin",children:[{text:"log in to the admin dashboard"}]},{text:' and click "seed your database".'}]}],links:[{link:{type:"custom",url:"/admin",label:"Go to dashboard",appearance:"primary",reference:null}}],blockName:"CTA",blockType:"cta"}]};var c=a(59882),d=a(11933),m=a(27939),h=a(44602),p=a.n(h),u=a(17536);let x=(0,u.createProxy)(String.raw`/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/_components/Categories/CategoryCard/index.tsx`),{__esModule:_,$$typeof:y}=x,j=x.default;var g=a(44996),f=a.n(g);let b=({categories:e})=>(0,s.jsxs)("section",{className:f().container,children:[(0,s.jsxs)("div",{className:f().titleWrapper,children:[s.jsx("h3",{children:"Shop by Categories"}),s.jsx(p(),{href:"/products",children:"Show All"})]}),s.jsx("div",{className:f().list,children:e.map(e=>s.jsx(j,{category:e},e.id))})]});var v=a(53205),k=a(60584),N=a(40702),T=a(26957),P=a.n(T),I=a(56355),C=a(63470),w=a.n(C),D=a(60864),M=a(30967),H=a.n(M),A=a(27791),B=a.n(A);let S={highImpact:({richText:e,media:t,links:a})=>(0,s.jsxs)(v.T,{className:w().hero,children:[(0,s.jsxs)("div",{className:w().content,children:[s.jsx(N.Z,{content:e}),Array.isArray(a)&&a.length>0&&s.jsx("ul",{className:w().links,children:a.map(({link:e},t)=>s.jsx("li",{children:s.jsx(k.g,{...e})},t))})]}),s.jsx("div",{className:w().media,children:"object"==typeof t&&(0,s.jsxs)(r.Fragment,{children:[s.jsx(I.p,{resource:t,imgClassName:w().image,priority:!0}),t?.caption&&s.jsx(N.Z,{content:t.caption,className:w().caption})]})})]}),mediumImpact:e=>{let{richText:t,media:a,links:r}=e;return(0,s.jsxs)(v.T,{className:B().hero,children:[(0,s.jsxs)("div",{className:B().background,children:[s.jsx(N.Z,{className:B().richText,content:t}),Array.isArray(r)&&s.jsx("ul",{className:B().links,children:r.map(({link:e},t)=>s.jsx("li",{children:s.jsx(k.g,{className:B().link,...e})},t))})]}),s.jsx("div",{className:B().media,children:"object"==typeof a&&s.jsx(I.p,{className:B().media,resource:a})})]})},lowImpact:({richText:e})=>s.jsx(v.T,{className:H().lowImpactHero,children:s.jsx("div",{className:H().content,children:s.jsx(D.G,{children:s.jsx(N.Z,{className:H().richText,content:e})})})}),customHero:({richText:e,media:t,links:a})=>{let r=t&&"string"!=typeof t&&`https://happy-hearts.payloadcms.app/media/${t.filename}`;return s.jsx("section",{className:P().hero,children:s.jsx("div",{className:P().heroWrapper,style:{backgroundImage:`url(${r})`},children:(0,s.jsxs)("div",{className:P().heroTextBox,children:[s.jsx(N.Z,{content:e}),Array.isArray(a)&&a.length>0&&s.jsx("ul",{className:P().links,children:a.map(({link:e},t)=>s.jsx("li",{children:s.jsx(k.g,{...e})},t))})]})})})}},E=e=>{let{type:t}=e||{};if(!t||"none"===t)return null;let a=S[t];return a?s.jsx(a,{...e}):null};var W=a(839);let G=(0,u.createProxy)(String.raw`/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/_components/Promotion/index.tsx`),{__esModule:J,$$typeof:Z}=G,F=G.default;var $=a(49939),z=a.n($);let Y="force-dynamic";async function V({params:{slug:e="home"}}){let{isEnabled:t}=(0,i.draftMode)(),a=null,r=null;try{a=await (0,c.D)({collection:"pages",slug:e,draft:t}),r=await (0,d.N)("categories")}catch(e){}if(a||"home"!==e||(a=n),!a)return(0,l.notFound)();let{hero:h,layout:p}=a;return s.jsx(o().Fragment,{children:"home"===e?(0,s.jsxs)("section",{children:[s.jsx(E,{...h}),(0,s.jsxs)(v.T,{className:z().home,children:[s.jsx(b,{categories:r}),s.jsx(F,{})]})]}):(0,s.jsxs)(s.Fragment,{children:[s.jsx(E,{...h}),s.jsx(m.n,{blocks:p,disableTopPadding:!h||h?.type==="none"||h?.type==="lowImpact"})]})})}async function O(){try{let e=await (0,d.N)("pages");return e?.map(({slug:e})=>e)}catch(e){return[]}}async function q({params:{slug:e="home"}}){let{isEnabled:t}=(0,i.draftMode)(),a=null;try{a=await (0,c.D)({collection:"pages",slug:e,draft:t})}catch(e){}return a||"home"!==e||(a=n),(0,W.v)({doc:a})}},839:(e,t,a)=>{"use strict";a.d(t,{v:()=>r});var s=a(62208);let r=async e=>{let{doc:t}=e||{},a="object"==typeof t?.meta?.image&&t?.meta?.image!==null&&"url"in t?.meta?.image&&`https://happy-hearts.payloadcms.app${t.meta.image.url}`;return{title:t?.meta?.title||"Payload",description:t?.meta?.description,openGraph:(0,s.T)({title:t?.meta?.title||"Payload",description:t?.meta?.description,url:Array.isArray(t?.slug)?t?.slug.join("/"):"/",images:a?[{url:a}]:void 0})}}}};
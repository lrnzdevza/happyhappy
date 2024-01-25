(()=>{var e={};e.id=9679,e.ids=[9679],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},73837:e=>{"use strict";e.exports=require("util")},97764:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>h,originalPathname:()=>p,pages:()=>u,routeModule:()=>m,tree:()=>d});var n=r(73137),s=r(54647),a=r(4183),o=r.n(a),l=r(71775),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);r.d(t,i);let c=n.AppPageRouteModule,d=["",{children:["(pages)",{children:["products",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7457)),"/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/(pages)/products/[slug]/page.tsx"]}]},{}]},{}]},{"not-found":[()=>Promise.resolve().then(r.bind(r,45653)),"/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/(pages)/not-found.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,82645)),"/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,51918,23)),"next/dist/client/components/not-found-error"]}],u=["/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/(pages)/products/[slug]/page.tsx"],p="/(pages)/products/[slug]/page",h={require:r,loadChunk:()=>Promise.resolve()},m=new c({definition:{kind:s.x.APP_PAGE,page:"/(pages)/products/[slug]/page",pathname:"/products/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},21051:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,41297,23)),Promise.resolve().then(r.t.bind(r,42796,23)),Promise.resolve().then(r.bind(r,95212)),Promise.resolve().then(r.bind(r,39496)),Promise.resolve().then(r.bind(r,32627)),Promise.resolve().then(r.bind(r,5933)),Promise.resolve().then(r.bind(r,94011)),Promise.resolve().then(r.bind(r,70966)),Promise.resolve().then(r.bind(r,91644)),Promise.resolve().then(r.bind(r,59974))},95212:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AddToCartButton:()=>d});var n=r(60080),s=r(9885),a=r(57114),o=r(17644),l=r(39496),i=r(38064),c=r.n(i);let d=e=>{let{product:t,quantity:r=1,className:i,appearance:d="primary"}=e,{cart:u,addItemToCart:p,isProductInCart:h,hasInitializedCart:m}=(0,o.j)(),[_,x]=(0,s.useState)(),g=(0,a.useRouter)();return(0,s.useEffect)(()=>{x(h(t))},[h,t,u]),n.jsx(l.Button,{href:_?"/cart":void 0,type:_?void 0:"button",label:_?`✓ View in cart`:"Add to cart",el:_?"link":void 0,appearance:d,className:[i,c().addToCartButton,"default"===d&&_&&c().green,!m&&c().hidden].filter(Boolean).join(" "),onClick:_?void 0:()=>{p({product:t,quantity:r}),g.push("/cart")}})}},73185:(e,t,r)=>{"use strict";r.d(t,{h:()=>o});var n=r(60080);r(9885);var s=r(72215),a=r.n(s);let o=e=>{let t=Array.from(Array(e.number||1).keys());return n.jsx("div",{className:a().loading,children:t.map((e,t)=>n.jsx("div",{className:a().shimmer},t))})}},42655:(e,t,r)=>{"use strict";r.d(t,{v:()=>o});var n=r(60080);r(9885);var s=r(8514),a=r.n(s);let o=({message:e,error:t,success:r,warning:s,className:o})=>{let l=e||t||r||s;return l?n.jsx("div",{className:[a().message,o,t&&a().error,r&&a().success,s&&a().warning,!t&&!r&&!s&&a().default].filter(Boolean).join(" "),children:l}):null}},91644:(e,t,r)=>{"use strict";r.r(t),r.d(t,{PaywallBlocks:()=>es});var n=r(60080),s=r(9885),a=r.n(s),o=r(11440),l=r.n(o);let i=`categories {
  title
  id
  breadcrumbs {
    id
    label
  }
}`,c=({disableAppearance:e,disableLabel:t}={})=>`{
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
}`,d=`
mimeType
filename
width
height
alt
caption
`,u=`media {
  ${d}
}`,p=`meta {
  title
  image {
    ${d}
  }
  description
}`,h=`
...on Cta {
  blockType
  invertBackground
  richText
  links {
    link ${c()}
  }
}
`,m=`
...on Content {
  blockType
  invertBackground
  columns {
    size
    richText
    enableLink
    link ${c()}
  }
}
`,_=`
...on MediaBlock {
  blockType
  invertBackground
  position
  ${u}
}
`,x=`
...on Archive {
  blockType
  introContent
  populateBy
  relationTo
  ${i}
  limit
  selectedDocs {
    relationTo
    value {
      ...on Product {
        id
        slug
        title
        priceJSON
        ${p}
      }
    }
  }
  populatedDocs {
    relationTo
    value {
      ...on Product {
        id
        slug
        title
        priceJSON
        ${i}
        ${p}
      }
    }
  }
  populatedDocsTotal
}
`,g=`
  query Product($slug: String, $draft: Boolean) {
    Products(where: { slug: { equals: $slug}}, limit: 1, draft: $draft) {
      docs {
        paywall {
          ${h}
          ${m}
          ${_}
          ${x}
        }
      }
    }
  }
`;var j=r(8693),v=r(5933),y=r(55964),b=r(90962),f=r.n(b),P=r(38437),k=r(86608),T=r.n(k);let B=({children:e})=>n.jsx("p",{className:T().label,children:e});var N=r(74274),C=r.n(N);let w=({children:e})=>n.jsx("p",{className:C().largeBody,children:e});var A=r(42915);let $=e=>e?.map((e,t)=>{if(P.xv.isText(e)){let r=n.jsx("span",{dangerouslySetInnerHTML:{__html:f()(e.text)}});return e.bold&&(r=n.jsx("strong",{children:r},t)),e.code&&(r=n.jsx("code",{children:r},t)),e.italic&&(r=n.jsx("em",{children:r},t)),e.underline&&(r=n.jsx("span",{style:{textDecoration:"underline"},children:r},t)),e.strikethrough&&(r=n.jsx("span",{style:{textDecoration:"line-through"},children:r},t)),n.jsx(s.Fragment,{children:r},t)}if(!e)return null;switch(e.type){case"h1":return n.jsx("h1",{children:$(e?.children)},t);case"h2":return n.jsx("h2",{children:$(e?.children)},t);case"h3":return n.jsx("h3",{children:$(e?.children)},t);case"h4":return n.jsx("h4",{children:$(e?.children)},t);case"h5":return n.jsx("h5",{children:$(e?.children)},t);case"h6":return n.jsx("h6",{children:$(e?.children)},t);case"quote":return n.jsx("blockquote",{children:$(e?.children)},t);case"ul":return n.jsx("ul",{children:$(e?.children)},t);case"ol":return n.jsx("ol",{children:$(e.children)},t);case"li":return n.jsx("li",{children:$(e.children)},t);case"link":return n.jsx(A.g,{type:"internal"===e.linkType?"reference":"custom",url:e.url,reference:e.doc,newTab:!!e?.newTab,children:$(e?.children)},t);case"label":return n.jsx(B,{children:$(e?.children)},t);case"large-body":return n.jsx(w,{children:$(e?.children)},t);default:return n.jsx("p",{children:$(e?.children)},t)}})||[];var D=r(15992),G=r.n(D);let R=({className:e,content:t})=>t?n.jsx("div",{className:[G().richText,e].filter(Boolean).join(" "),children:$(t)}):null;var q=r(99893),M=r.n(q),S=r(57468),H=r.n(S);let W=({top:e="medium",bottom:t="medium",className:r,children:s})=>n.jsx("div",{className:[r,H()[`top-${e}`],H()[`bottom-${t}`]].filter(Boolean).join(" "),children:s});var z=r(29520),F=r.n(z),L=r(3728),O=r.n(L),U=r(88995),E=r(64175),I=r.n(E),J=r(32627),X=r(12281),V=r.n(X);let K=e=>e?.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase();var Y=r(61817),Z=r.n(Y);let Q=e=>{let{id:t,className:r,children:s,invert:a}=e;return n.jsx("div",{id:t,className:[a&&Z().invert,r].filter(Boolean).join(" "),children:s})},ee={cta:({links:e,richText:t,invertBackground:r})=>n.jsx(y.T,{children:n.jsx(W,{className:[F().callToAction,r&&F().invert].filter(Boolean).join(" "),children:(0,n.jsxs)("div",{className:F().wrap,children:[n.jsx("div",{className:F().content,children:n.jsx(R,{className:F().richText,content:t})}),n.jsx("div",{className:F().linkGroup,children:(e||[]).map(({link:e},t)=>n.jsx(A.g,{...e,invert:r},t))})]})})}),content:e=>{let{columns:t}=e;return n.jsx(y.T,{className:O().content,children:n.jsx("div",{className:O().grid,children:t&&t.length>0&&t.map((e,t)=>{let{enableLink:r,richText:s,link:a,size:o}=e;return(0,n.jsxs)("div",{className:[O().column,O()[`column--${o}`]].join(" "),children:[n.jsx(R,{content:s}),r&&n.jsx(A.g,{className:O().link,...a})]},t)})})})},mediaBlock:e=>{let t;let{media:r,position:s="default",staticImage:a}=e;return r&&"object"==typeof r&&(t=r.caption),(0,n.jsxs)("div",{className:I().mediaBlock,children:["fullscreen"===s&&n.jsx("div",{className:I().fullscreen,children:n.jsx(U.p,{resource:r,src:a})}),"default"===s&&n.jsx(y.T,{children:n.jsx(U.p,{resource:r,src:a})}),t&&n.jsx(y.T,{className:I().caption,children:n.jsx(R,{content:t})})]})},archive:e=>{let{introContent:t,id:r,relationTo:s,populateBy:a,limit:o,populatedDocs:l,populatedDocsTotal:i,selectedDocs:c,categories:d}=e;return(0,n.jsxs)("div",{id:`block-${r}`,className:M().archiveBlock,children:[t&&n.jsx(y.T,{className:M().introContent,children:n.jsx(R,{content:t})}),n.jsx(v.CollectionArchive,{populateBy:a,relationTo:s,populatedDocs:l,populatedDocsTotal:i,selectedDocs:c,categories:d,limit:o,sort:"-publishedOn"})]})},relatedProducts:e=>{let{docs:t,relationTo:r}=e;return n.jsx("div",{className:V().relatedProducts,children:(0,n.jsxs)(y.T,{children:[n.jsx("h3",{className:V().title,children:"Related Products"}),n.jsx("div",{className:V().grid,children:t?.map(e=>"string"==typeof e?null:n.jsx(J.Card,{relationTo:r,doc:e,showCategories:!0},e.id))})]})})}},et=e=>{let{disableTopPadding:t,blocks:r}=e,a=r&&Array.isArray(r)&&r.length>0;return a?n.jsx(s.Fragment,{children:r.map((e,s)=>{let{blockName:a,blockType:o}=e;if(o&&o in ee){let l=ee[o],i="invertBackground"in e&&"cta"!==o&&e.invertBackground,c=r[s-1],d=c&&"invertBackground"in c&&c?.invertBackground,u="large",p="large";if(c&&!!i==!!d&&(u="none"),s===r.length-1&&(p="large"),t&&0===s&&(u="none"),l)return n.jsx(Q,{invert:i,children:n.jsx(W,{top:u,bottom:p,children:n.jsx(l,{id:K(a),...e})})},s)}return null})}):null};var er=r(73185),en=r(42655);let es=e=>{let{productSlug:t,disableTopPadding:r}=e,{user:o}=(0,j.a)(),[i,c]=a().useState(!1),[d,u]=a().useState(),p=a().useRef(!1),h=a().useRef(!1);return((0,s.useEffect)(()=>{if(!o||p.current||h.current)return;p.current=!0,h.current=!0;let e=Date.now(),r=async()=>{c(!0);try{let r=await fetch("https://happy-hearts.payloadcms.app/api/graphql",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:g,variables:{slug:t}})})?.then(e=>e.json())?.then(e=>e?.data?.Products.docs[0]?.paywall);r&&u(r);let n=Date.now();n-e<1e3&&await new Promise(t=>setTimeout(t,500-(n-e))),c(!1)}catch(e){console.error(e),c(!1)}};r()},[o,t]),void 0===o)?null:null===o?n.jsx(y.T,{children:n.jsx(W,{bottom:"large",top:"none",children:n.jsx(en.v,{message:(0,n.jsxs)(n.Fragment,{children:["This content is gated behind a paywall. You must be ",n.jsx(l(),{href:`/login?redirect=${encodeURIComponent(window.location.pathname)}`,children:"logged in"})," as an admin or have purchased this product to view this content."]})})})}):i?n.jsx(y.T,{children:n.jsx(W,{bottom:"large",top:"none",children:n.jsx(er.h,{})})}):d&&0!==d.length?n.jsx(et,{blocks:d,disableTopPadding:r}):n.jsx(y.T,{children:n.jsx(W,{bottom:"large",top:"none",children:n.jsx(en.v,{message:"Purchase this product to unlock the content."})})})}},99893:e=>{e.exports={archiveBlock:"ArchiveBlock_archiveBlock__5UEq_",introContent:"ArchiveBlock_introContent__H4Ko0"},e.exports.__checksum="35096ecb5b22"},29520:e=>{e.exports={callToAction:"CallToAction_callToAction__WNeXD",invert:"CallToAction_invert__tvOO1",wrap:"CallToAction_wrap__AK9_4",content:"CallToAction_content__BiisP",linkGroup:"CallToAction_linkGroup__jZg4Y"},e.exports.__checksum="32442875b3b7"},3728:e=>{e.exports={grid:"Content_grid__7xRAI","column--oneThird":"Content_column--oneThird__HyYv1","column--half":"Content_column--half___Gx1x","column--twoThirds":"Content_column--twoThirds__QXm6g","column--full":"Content_column--full__D_eoS",column:"Content_column__bhKOQ",link:"Content_link__5_dJG"},e.exports.__checksum="7ea6d385335b"},64175:e=>{e.exports={mediaBlock:"MediaBlock_mediaBlock__kLxM0",caption:"MediaBlock_caption__vE6Rw"},e.exports.__checksum="9103938fdf7c"},12281:e=>{e.exports={relatedProducts:"RelatedProducts_relatedProducts__eslGx",introContent:"RelatedProducts_introContent__JxRV4",grid:"RelatedProducts_grid__mMGLT",title:"RelatedProducts_title__YIs_C"},e.exports.__checksum="eef56953c79b"},38064:e=>{e.exports={addToCartButton:"AddToCartButton_addToCartButton__ba4Xy",green:"AddToCartButton_green__q21WF",hidden:"AddToCartButton_hidden__ibyZe"},e.exports.__checksum="643c3c8e3b60"},61817:e=>{e.exports={invert:"BackgroundColor_invert__8yPWe"},e.exports.__checksum="043799d422a9"},86608:e=>{e.exports={label:"Label_label__jIJix"},e.exports.__checksum="cf68d07545a2"},74274:e=>{e.exports={largeBody:"LargeBody_largeBody__4csV5"},e.exports.__checksum="b3616a11d61f"},72215:e=>{e.exports={loading:"LoadingShimmer_loading__sK7Rg",shimmer:"LoadingShimmer_shimmer__YtrFI"},e.exports.__checksum="eba6cbe2403e"},8514:e=>{e.exports={message:"Message_message__z1tdG",default:"Message_default__RDDb4",warning:"Message_warning__FT9n8",error:"Message_error__WX2fA",success:"Message_success__Cnnxv"},e.exports.__checksum="21e7800cf184"},15992:e=>{e.exports={richText:"RichText_richText__8IUJ0"},e.exports.__checksum="4b21345af45c"},57468:e=>{e.exports={"top-large":"VerticalPadding_top-large__Fdv3J","top-medium":"VerticalPadding_top-medium__8WZul","bottom-large":"VerticalPadding_bottom-large__W6wnm","bottom-medium":"VerticalPadding_bottom-medium__T9Qsp"},e.exports.__checksum="275c76d22479"},50539:e=>{e.exports={productHero:"Product_productHero__8LRIX",mediaWrapper:"Product_mediaWrapper__cG_a0",image:"Product_image__aUOdh",details:"Product_details__JRDf_",categoryWrapper:"Product_categoryWrapper__oxvyM",category:"Product_category__qCa6r",stock:"Product_stock__vxXKo",separator:"Product_separator__6IR0z",description:"Product_description__Ldu7X"},e.exports.__checksum="34a5634e4b57"},7457:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>N,dynamic:()=>B,generateMetadata:()=>w,generateStaticParams:()=>C});var n=r(48144),s=r(53830),a=r(59859),o=r(6465),l=r(59882),i=r(11933),c=r(27939),d=r(17536);let u=(0,d.createProxy)(String.raw`/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/_components/PaywallBlocks/index.tsx`),{__esModule:p,$$typeof:h}=u;u.default;let m=u.PaywallBlocks,_=(0,d.createProxy)(String.raw`/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/_components/AddToCartButton/index.tsx`),{__esModule:x,$$typeof:g}=_;_.default;let j=_.AddToCartButton;var v=r(53205),y=r(56355),b=r(80623),f=r(50539),P=r.n(f);let k=({product:e})=>{let{title:t,categories:r,meta:{image:a,description:o}={}}=e;return(0,n.jsxs)(v.T,{className:P().productHero,children:[(0,n.jsxs)("div",{className:P().mediaWrapper,children:[!a&&n.jsx("div",{className:P().placeholder,children:"No image"}),a&&"string"!=typeof a&&n.jsx(y.p,{imgClassName:P().image,resource:a,fill:!0})]}),(0,n.jsxs)("div",{className:P().details,children:[n.jsx("h3",{className:P().title,children:t}),(0,n.jsxs)("div",{className:P().categoryWrapper,children:[n.jsx("div",{className:P().categories,children:r?.map((e,t)=>{let{title:a}=e,o=t===r.length-1;return n.jsxs("p",{className:P().category,children:[a||"Generic"," ",!o&&n.jsx(s.Fragment,{children:", \xa0"}),n.jsx("span",{className:P().separator,children:"|"})]},t)})}),n.jsx("p",{className:P().stock,children:" In stock"})]}),n.jsx(b.t,{product:e,button:!1}),(0,n.jsxs)("div",{className:P().description,children:[n.jsx("h6",{children:"Description"}),n.jsx("p",{children:o})]}),n.jsx(j,{product:e,className:P().addToCartButton})]})]})};var T=r(839);let B="force-dynamic";async function N({params:{slug:e}}){let{isEnabled:t}=(0,a.draftMode)(),r=null;try{r=await (0,l.D)({collection:"products",slug:e,draft:t})}catch(e){console.error(e)}r||(0,o.notFound)();let{relatedProducts:s}=r;return(0,n.jsxs)(n.Fragment,{children:[n.jsx(k,{product:r}),r?.enablePaywall&&n.jsx(m,{productSlug:e,disableTopPadding:!0}),n.jsx(c.n,{disableTopPadding:!0,blocks:[{blockType:"relatedProducts",blockName:"Related Product",relationTo:"products",introContent:[{type:"h3",children:[{text:"Related Products"}]}],docs:s}]})]})}async function C(){try{let e=await (0,i.N)("products");return e?.map(({slug:e})=>e)}catch(e){return[]}}async function w({params:{slug:e}}){let{isEnabled:t}=(0,a.draftMode)(),r=null;try{r=await (0,l.D)({collection:"products",slug:e,draft:t})}catch(e){}return(0,T.v)({doc:r})}},80623:(e,t,r)=>{"use strict";r.d(t,{t:()=>l});var n=r(17536);let s=(0,n.createProxy)(String.raw`/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/_components/Price/index.tsx`),{__esModule:a,$$typeof:o}=s;s.default,s.priceFromJSON;let l=s.Price},839:(e,t,r)=>{"use strict";r.d(t,{v:()=>s});var n=r(62208);let s=async e=>{let{doc:t}=e||{},r="object"==typeof t?.meta?.image&&t?.meta?.image!==null&&"url"in t?.meta?.image&&`https://happy-hearts.payloadcms.app${t.meta.image.url}`;return{title:t?.meta?.title||"Payload",description:t?.meta?.description,openGraph:(0,n.T)({title:t?.meta?.title||"Payload",description:t?.meta?.description,url:Array.isArray(t?.slug)?t?.slug.join("/"):"/",images:r?[{url:r}]:void 0})}}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[4650,2560,7190,3497,9859,6465,7,2059,1222,1224,8667,6965,12,9974,6355,702,4613,7617,3466,5416,1933],()=>r(97764));module.exports=n})();
(()=>{var e={};e.id=5366,e.ids=[5366],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},67575:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>g,originalPathname:()=>d,pages:()=>c,routeModule:()=>h,tree:()=>p});var s=r(73137),o=r(54647),a=r(4183),n=r.n(a),i=r(71775),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let u=s.AppPageRouteModule,p=["",{children:["(pages)",{children:["logout",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,69877)),"/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/(pages)/logout/page.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(r.bind(r,45653)),"/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/(pages)/not-found.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,82645)),"/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,51918,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/(pages)/logout/page.tsx"],d="/(pages)/logout/page",g={require:r,loadChunk:()=>Promise.resolve()},h=new u({definition:{kind:o.x.APP_PAGE,page:"/(pages)/logout/page",pathname:"/logout",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},73823:(e,t,r)=>{Promise.resolve().then(r.bind(r,52416))},52416:(e,t,r)=>{"use strict";r.r(t),r.d(t,{LogoutPage:()=>l});var s=r(60080),o=r(9885),a=r(11440),n=r.n(a),i=r(8693);let l=e=>{let{settings:t}=e,{productsPage:r}=t||{},{logout:a}=(0,i.a)(),[l,u]=(0,o.useState)(""),[p,c]=(0,o.useState)("");return(0,o.useEffect)(()=>{let e=async()=>{try{await a(),u("Logged out successfully.")}catch(e){c("You are already logged out.")}};e()},[a]),s.jsx(o.Fragment,{children:(p||l)&&(0,s.jsxs)("div",{children:[s.jsx("h1",{children:p||l}),(0,s.jsxs)("p",{children:["What would you like to do next?","object"==typeof r&&r?.slug&&(0,s.jsxs)(o.Fragment,{children:[" ",s.jsx(n(),{href:`/${r.slug}`,children:"Click here"})," to shop."]})," To log back in, ",s.jsx(n(),{href:"/login",children:"click here"}),"."]})]})})}},94928:e=>{e.exports={logout:"logout_logout__psvE6"},e.exports.__checksum="ce56bea073e9"},69877:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h,metadata:()=>x});var s=r(48144);r(53830);var o=r(28996),a=r(53205),n=r(62208),i=r(17536);let l=(0,i.createProxy)(String.raw`/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/(pages)/logout/LogoutPage/index.tsx`),{__esModule:u,$$typeof:p}=l;l.default;let c=l.LogoutPage;var d=r(94928),g=r.n(d);async function h(){let e=null;try{e=await (0,o.wv)()}catch(e){}return s.jsx(a.T,{className:g().logout,children:s.jsx(c,{settings:e})})}let x={title:"Logout",description:"You have been logged out.",openGraph:(0,n.T)({title:"Logout",url:"/logout"})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[4650,2560,7190,1224,8667,6965],()=>r(67575));module.exports=s})();
"use strict";(()=>{var e={};e.id=7963,e.ids=[7963],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},22977:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>x,originalPathname:()=>m,requestAsyncStorage:()=>c,routeModule:()=>l,serverHooks:()=>w,staticGenerationAsyncStorage:()=>v,staticGenerationBailout:()=>g});var s={};r.r(s),r.d(s,{GET:()=>u}),r(95655);var a=r(83323),o=r(54647),n=r(59859),i=r(6465),p=r(16362);async function u(e){let t=e.cookies.get(p.Q)?.value,{searchParams:r}=new URL(e.url),s=r.get("url"),a=r.get("secret");if(!s)return new Response("No URL provided",{status:404});t||new Response("You are not allowed to preview this page",{status:403});let o=await fetch("https://happy-hearts.payloadcms.app/api/users/me",{headers:{Authorization:`JWT ${t}`}}),u=await o.json();return o.ok&&u?.user?a!==process.env.NEXT_PRIVATE_DRAFT_SECRET?new Response("Invalid token",{status:401}):void((0,n.draftMode)().enable(),(0,i.redirect)(s)):((0,n.draftMode)().disable(),new Response("You are not allowed to preview this page",{status:403}))}let d=a.AppRouteRouteModule,l=new d({definition:{kind:o.x.APP_ROUTE,page:"/api/preview/route",pathname:"/api/preview",filename:"route",bundlePath:"app/api/preview/route"},resolvedPagePath:"/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/api/preview/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:c,staticGenerationAsyncStorage:v,serverHooks:w,headerHooks:x,staticGenerationBailout:g}=l,m="/api/preview/route"},16362:(e,t,r)=>{r.d(t,{Q:()=>s});let s="payload-token"}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[4650,2560,3497,9859,6465,9727],()=>r(22977));module.exports=s})();
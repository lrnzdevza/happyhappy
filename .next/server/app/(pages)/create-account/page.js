(()=>{var e={};e.id=3784,e.ids=[3784],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},64342:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>d,pages:()=>u,routeModule:()=>h,tree:()=>p});var a=t(73137),s=t(54647),n=t(4183),o=t.n(n),c=t(71775),i={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>c[e]);t.d(r,i);let l=a.AppPageRouteModule,p=["",{children:["(pages)",{children:["create-account",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,36389)),"/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/(pages)/create-account/page.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(t.bind(t,45653)),"/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/(pages)/not-found.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,82645)),"/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,51918,23)),"next/dist/client/components/not-found-error"]}],u=["/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/(pages)/create-account/page.tsx"],d="/(pages)/create-account/page",m={require:t,loadChunk:()=>Promise.resolve()},h=new l({definition:{kind:s.x.APP_PAGE,page:"/(pages)/create-account/page",pathname:"/create-account",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},36262:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,25251,23)),Promise.resolve().then(t.t.bind(t,41297,23)),Promise.resolve().then(t.t.bind(t,42796,23)),Promise.resolve().then(t.bind(t,33264)),Promise.resolve().then(t.bind(t,78697))},78697:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>g});var a=t(60080),s=t(9885),n=t(66558),o=t(11440),c=t.n(o),i=t(57114),l=t(39496),p=t(92672),u=t(42655),d=t(8693),m=t(76025),h=t.n(m);let g=()=>{let e=(0,i.useSearchParams)(),r=e.toString()?`?${e.toString()}`:"",{login:t}=(0,d.a)(),o=(0,i.useRouter)(),[m,g]=(0,s.useState)(!1),[x,_]=(0,s.useState)(null),{register:y,handleSubmit:f,formState:{errors:b},watch:v}=(0,n.cI)(),j=(0,s.useRef)({});j.current=v("password","");let w=(0,s.useCallback)(async r=>{let a=await fetch("https://happy-hearts.payloadcms.app/api/users",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}});if(!a.ok){let e=a.statusText||"There was an error creating the account.";_(e);return}let s=e.get("redirect"),n=setTimeout(()=>{g(!0)},1e3);try{await t(r),clearTimeout(n),s?o.push(s):o.push("/"),window.location.href="/"}catch(e){clearTimeout(n),_("There was an error with the credentials provided. Please try again.")}},[t,o,e]);return(0,a.jsxs)("form",{onSubmit:f(w),className:h().form,children:[(0,a.jsxs)("p",{children:["This is where new customers can signup and create a new account. To manage all users, ",a.jsx(c(),{href:"/admin/collections/users",children:"login to the admin dashboard"}),"."]}),a.jsx(u.v,{error:x,className:h().message}),a.jsx(p.I,{name:"email",label:"Email Address",required:!0,register:y,error:b.email,type:"email"}),a.jsx(p.I,{name:"name",label:"Full name",required:!0,register:y,error:b.name,type:"text"}),a.jsx(p.I,{name:"password",type:"password",label:"Password",required:!0,register:y,error:b.password}),a.jsx(p.I,{name:"passwordConfirm",type:"password",label:"Confirm Password",required:!0,register:y,validate:e=>e===j.current||"The passwords do not match",error:b.passwordConfirm}),a.jsx(l.Button,{type:"submit",label:m?"Processing":"Sign up",disabled:m,appearance:"primary",className:h().submit}),(0,a.jsxs)("div",{children:["Already have an account? ",a.jsx(c(),{href:`/login${r}`,children:"Login"})]})]})}},76025:e=>{e.exports={form:"CreateAccountForm_form__KJYsi",submit:"CreateAccountForm_submit__pbvnx",message:"CreateAccountForm_message__I5EmR"},e.exports.__checksum="bc1d4c74d1f1"},8782:e=>{e.exports={createAccount:"create-account_createAccount__YcP3l",formTitle:"create-account_formTitle__2Rzoe",handImg:"create-account_handImg__mGHRh",heroImg:"create-account_heroImg__OrQVJ",logo:"create-account_logo__myQMC",formWrapper:"create-account_formWrapper__nrKMK",formContainer:"create-account_formContainer__4W0qy",params:"create-account_params__j1Cbg"},e.exports.__checksum="49f0c9532775"},36389:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>y,metadata:()=>f});var a=t(48144);t(53830);var s=t(75042),n=t.n(s),o=t(44602),c=t.n(o),i=t(97979),l=t(1978),p=t(62208),u=t(17536);let d=(0,u.createProxy)(String.raw`/Users/lorenzoparisi/Documents/GitHub/happyhappy/src/app/(pages)/create-account/CreateAccountForm/index.tsx`),{__esModule:m,$$typeof:h}=d,g=d.default;var x=t(8782),_=t.n(x);async function y(){return await (0,l.S)({validUserRedirect:`/account?warning=${encodeURIComponent("Cannot create a new account while logged in, please log out and try again.")}`}),(0,a.jsxs)("section",{className:_().createAccount,children:[a.jsx("div",{className:_().heroImg,children:a.jsx(c(),{href:"/",children:a.jsx(n(),{src:"/logo-named.svg",alt:"logo",width:250,height:23,className:_().logo})})}),a.jsx("div",{className:_().formWrapper,children:(0,a.jsxs)("div",{className:_().formContainer,children:[a.jsx(i.n,{className:_().params}),(0,a.jsxs)("div",{className:_().formTitle,children:[a.jsx("h3",{children:"Create Account"}),a.jsx(n(),{src:"/assets/icons/hand.png",alt:"hand",width:30,height:30})]}),a.jsx("p",{children:"Please enter details"}),a.jsx(g,{})]})})]})}let f={title:"Account",description:"Create an account or log in to your existing account.",openGraph:(0,p.T)({title:"Account",url:"/account"})}},1978:(e,r,t)=>{"use strict";t.d(r,{S:()=>n});var a=t(59859),s=t(6465);let n=async e=>{let{nullUserRedirect:r,validUserRedirect:t}=e||{},n=(0,a.cookies)(),o=n.get("payload-token")?.value,c=await fetch("https://happy-hearts.payloadcms.app/api/users/me",{headers:{Authorization:`JWT ${o}`}}),{user:i}=await c.json();return t&&c.ok&&i&&(0,s.redirect)(t),!r||c.ok&&i||(0,s.redirect)(r),{user:i,token:o}}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[4650,2560,7190,3497,9859,6465,9928,6558,1224,8667,6965,7433,2672],()=>t(64342));module.exports=a})();
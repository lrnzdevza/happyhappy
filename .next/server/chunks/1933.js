"use strict";exports.id=1933,exports.ids=[1933],exports.modules={11933:(e,r,t)=>{t.d(r,{N:()=>y});var o=t(13283),s=t(24426),a=t(90488),i=t(36716),n=t(20109),d=t(16362);let u={pages:{query:a.q,key:"Pages"},products:{query:i.bQ,key:"Products"},orders:{query:s.z,key:"Orders"},categories:{query:o.a,key:"Categories"}},y=async(e,r)=>{let o;if(!u[e])throw Error(`Collection ${e} not found`);if(r){let{cookies:e}=await Promise.resolve().then(t.t.bind(t,59859,23));o=e().get(d.Q)}let s=await fetch(`${n.k}/api/graphql`,{method:"POST",headers:{"Content-Type":"application/json",...o?.value&&r?{Authorization:`JWT ${o.value}`}:{}},cache:"no-store",next:{tags:[e]},body:JSON.stringify({query:u[e].query})})?.then(e=>e.json())?.then(r=>{if(r.errors)throw Error(r?.errors?.[0]?.message??"Error fetching docs");return r?.data?.[u[e].key]?.docs});return s}}};
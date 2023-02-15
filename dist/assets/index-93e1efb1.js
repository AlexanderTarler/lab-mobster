(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function a(n){return fetch(n).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}const c=async()=>{const n=await a("https://lab-mobster-backend-production-3867.up.railway.app/mobs/1").then(({name:o,mobId:i})=>({name:o,mobId:i})).catch(o=>{console.log(o)});console.log(n);const r=await a("https://lab-mobster-backend-production-3867.up.railway.app/mobs/1/members").then(o=>o).catch(o=>{console.log(o)});console.log(r),document.querySelector("#app").innerHTML=`
<header>
<h1>${n.name}</h1>
</header>
<main>
<div class="member">${r[0].name}</div>
<div class="member">${r[1].name}</div>
<div class="member">${r[2].name}</div>
<div class="member">${r[3].name}</div>

</main>
</div>`};c();document.querySelector("#app").innerHTML=`
<header>
<h1>Mobster</h1>
</header>
<main>
<div class="member">member</div>
<div class="member">member</div>
<div class="member">member</div>
<div class="member">member</div>
</main>
</div>`;

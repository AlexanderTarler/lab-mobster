(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function c(n){return fetch(n).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}const l=async()=>{const n=await c("https://lab-mobster-backend-production-3867.up.railway.app/mobs/1").then(({name:o,mobId:i})=>({name:o,mobId:i})).catch(o=>{console.log(o)});console.log(n);const t=await c("https://lab-mobster-backend-production-3867.up.railway.app/mobs/1/members").then(o=>o).catch(o=>{console.log(o)});console.log(t)};l();document.querySelector("#app").innerHTML=`
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

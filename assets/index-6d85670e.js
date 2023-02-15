(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function c(o){return fetch(o).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}const l=async()=>{const o=await c("https://lab-mobster-backend-production-3867.up.railway.app/mobs/1").then(({name:r,mobId:n})=>{JSON.stringify({name:r,mobId:n})}).catch(r=>{console.log(r)});console.log(o)};l();document.querySelector("#app").innerHTML=`
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

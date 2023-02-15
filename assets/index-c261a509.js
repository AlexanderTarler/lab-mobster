(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function c(i){let t=0;const o=n=>{t=n,i.innerHTML=`count is ${t}`};i.addEventListener("click",()=>o(t+1)),o(0)}document.querySelector("#app").innerHTML=`
<header>
<h1>Mobster</h1>
</header>
<main>
<div class="member">member</div>
<div class="member">member</div>
<div class="member">member</div>
<div class="member">member</div>
</main>
</div>`;c(document.querySelector("#counter"));

/* empty css                      */import{a as h,i as u}from"./assets/vendor-BUg1UuD4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const b=void 0,L="https://pixabay.com/api/";async function f(r,t=1){const a={key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:t};try{return(await h.get(L,{params:a})).data}catch(n){throw console.error("Error fetching photos:",n),n}}function m(r){const t=document.querySelector(".gallery"),a=r.map(({webformatURL:n,largeImageURL:e,tags:o,likes:s,views:p,comments:y,downloads:g})=>`
      <a class="photo-card" href="${e}">
        <img src="${n}" alt="${o}" loading="lazy" />
        <div class="info">
          <p><b>Likes:</b> ${s}</p>
          <p><b>Views:</b> ${p}</p>
          <p><b>Comments:</b> ${y}</p>
          <p><b>Downloads:</b> ${g}</p>
        </div>
      </a>
    `).join("");t.insertAdjacentHTML("beforeend",a)}function w(){document.querySelector(".gallery").innerHTML=""}function c(r){const t=document.querySelector(".loader");t.style.display=r?"block":"none"}function d(r){const t=document.querySelector('[data-action="load-more"]');t.style.display=r?"block":"none"}let l=1,i="";const S=document.querySelector("#search-form"),q=document.querySelector('[data-action="load-more"]');S.addEventListener("submit",async r=>{if(r.preventDefault(),i=r.target.elements.searchQuery.value.trim(),!!i){l=1,w(),c(!0),d(!1);try{const t=await f(i,l);if(t.hits.length===0){u.info({message:"No images found. Try again."});return}m(t.hits),d(t.hits.length>=40)}catch{u.error({message:"Something went wrong."})}finally{c(!1)}}});q.addEventListener("click",async()=>{l++,c(!0);try{const r=await f(i,l);m(r.hits),d(r.hits.length>=40)}catch{u.error({message:"Error loading more images."})}finally{c(!1)}});
//# sourceMappingURL=index.js.map

/* empty css                      */import{a as L,i as p,S as w}from"./assets/vendor-Db2TdIkw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const S="44728966-7765244b057c0982fa05c31d9",v="https://pixabay.com/api/";async function m(e,r){try{return(await L.get(v,{params:{key:S,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}catch(n){throw console.error("Error fetching images:",n),n}}let a;function h(e){const r=document.querySelector(".gallery");if(!r)return;const n=e.map(o=>`
      <li class="image-container">
        <a href="${o.largeImageURL}">
          <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
        </a>
        <div class="info-bar">
          <p><b>Likes:</b> ${o.likes}</p>
          <p><b>Views:</b> ${o.views}</p>
          <p><b>Comments:</b> ${o.comments}</p>
          <p><b>Downloads:</b> ${o.downloads}</p>
        </div>
      </li>`).join("");r.insertAdjacentHTML("beforeend",n),a==null||a.refresh()}function q(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function g(){var e;(e=document.querySelector(".loader-wrap"))==null||e.classList.remove("disabled")}function b(){var e;(e=document.querySelector(".loader-wrap"))==null||e.classList.add("disabled")}function $(){var e;(e=document.querySelector(".load-more-btn"))==null||e.classList.remove("hidden")}function f(){var e;(e=document.querySelector(".load-more-btn"))==null||e.classList.add("hidden")}function E(e){p.success({message:e,position:"topRight"})}function c(e){p.error({message:e,position:"topRight"})}function P(){a||(a=new w(".gallery a",{captionsData:"alt",captionDelay:250}))}function O(){a==null||a.refresh()}let i=1,y="";const u=document.querySelector(".search-form"),d=document.querySelector(".load-more-btn");u==null||u.addEventListener("submit",async e=>{e.preventDefault();const r=e.target.elements.searchQuery.value.trim();if(r){y=r,i=1,q(),f();try{g();const{hits:n,totalHits:o}=await m(y,i);if(n.length===0){c("No images found. Try again.");return}h(n),E(`Hooray! We found ${o} images.`),P(),n.length<15||i*15>=o?(f(),c("We're sorry, but you've reached the end of search results.")):$()}catch{c("Something went wrong. Please try again.")}finally{b()}}});d==null||d.addEventListener("click",async()=>{i+=1;try{g();const{hits:e,totalHits:r}=await m(y,i);h(e),O(),(e.length<15||i*15>=r)&&(f(),c("We're sorry, but you've reached the end of search results."))}catch{c("Failed to load more images.")}finally{b()}});
//# sourceMappingURL=index.js.map

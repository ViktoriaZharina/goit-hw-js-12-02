/* empty css                      */import{a as f,S as h,i as c}from"./assets/vendor-BH9GyP-n.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))d(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();const o=f.create({baseURL:"https://pixabay.com/api/",params:{key:"44728966-7765244b057c0982fa05c31d9",q:"",image_type:"photo",orientation:"horizontal",safesearch:"true",page:null,per_page:40,totalHits:null}});async function g(t){o.defaults.params.page=1,o.defaults.params.q=t;try{const e=await o.get();return o.defaults.params.totalHits=e.data.totalHits,e.data.hits}catch{console.error("Error")}}async function y(t){o.defaults.params.page+=1,o.defaults.params.q=t;try{return(await o.get()).data.hits}catch{console.error("Error")}}const m={gallery:document.querySelector("#gallery")};function L(t){m.gallery.innerHTML=u(t)}function u(t){return t.map(s=>`<div class="image-container">
      <a href="${s.largeImageURL}">
      <img src="${s.webformatURL}" alt="${s.tags}" /></a>
      <div class="info-bar">
      <div class="info-item">
      <h3 class="item-title">Likes</h3>
      <p class="item-count">${s.likes}</p>
      </div>
      <div class="info-item">
      <h3 class="item-title">Views</h3>
      <p class="item-count">${s.views}</p>
      </div>
      <div class="info-item">
      <h3 class="item-title">Comments</h3>
      <p class="item-count">${s.comments}</p>
      </div>
      <div class="info-item">
      <h3 class="item-title">Downloads</h3>
      <p class="item-count">${s.downloads}</p>
      </div>
      </div>
      </div>`).join("")}function v(t){m.gallery.insertAdjacentHTML("beforeend",u(t))}const p=new h(".image-container a",{captionDelay:250}),r={searchForm:document.querySelector("#search-form"),loader:document.querySelector(".loader-wrap"),gallery:document.querySelector("#gallery"),loaderToLoadMore:document.querySelector(".loader-for-loadmore"),loadMoreBtn:document.querySelector("#load-more-btn")};r.searchForm.addEventListener("submit",b);r.loadMoreBtn.addEventListener("click",M);let n="";async function b(t){if(t.preventDefault(),r.gallery.innerHTML="",r.loader.classList.remove("disabled"),r.loadMoreBtn.classList.add("hidden"),n=t.target.elements.search.value,n.trim()==="")return r.loader.classList.add("disabled"),c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"432px"});try{const e=await g(n);if(e.length===0)return r.loader.classList.add("disabled"),r.loadMoreBtn.classList.add("hidden"),r.searchForm.reset(),c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"432px"});r.loader.classList.add("disabled"),L(e),p.refresh(),o.defaults.params.totalHits<=o.defaults.params.per_page?r.loadMoreBtn.classList.add("hidden"):r.loadMoreBtn.classList.remove("hidden")}catch{console.error("Error")}r.searchForm.reset()}async function M(t){r.loadMoreBtn.classList.remove("disabled");try{const e=await y(n);r.loaderToLoadMore.classList.add("disabled");const s=Math.ceil(o.defaults.params.totalHits/o.defaults.params.per_page);if(v(e),p.refresh(),w(),o.defaults.params.page>=s)return r.loadMoreBtn.classList.add("hidden"),c.info({message:"We`re sorry, but you`ve reached the end of search results.",position:"topRight",maxWidth:"432px"})}catch{console.error("Error")}}function w(){const t=document.querySelector(".image-container"),e=t.getBoundingClientRect().height;t&&window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map

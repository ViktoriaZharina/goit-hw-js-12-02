/* empty css                      */import{S as u,i as d}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function f(o){const i=`https://pixabay.com/api/?${new URLSearchParams({key:"44728966-7765244b057c0982fa05c31d9",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(i).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function p(o,r){const i=o.map(e=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <div class="full-image">
                    <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
                    <ul class="image-button">
                        <li><p>Likes</p><p>${e.likes}</p></li>
                        <li><p>Views</p><p>${e.views}</p></li>
                        <li><p>Comments</p><p>${e.comments}</p></li>
                        <li><p>Downloads</p><p>${e.downloads}</p></li>
                    </ul>
                </div>
            </a>
        </li>
    `).join("");r.innerHTML=i,new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function l(o,r){d[r]({message:o,messageColor:"white",position:"topRight",backgroundColor:"red"})}const m=document.querySelector("form"),c=document.querySelector(".gallery"),n=document.querySelector(".spinner");m.addEventListener("submit",o=>{o.preventDefault(),c.innerHTML="",n.classList.remove("is-hidden");const r=o.target.elements.search_input.value.trim();if(r===""){l("All form fields must be filled in","warning"),n.classList.add("is-hidden");return}f(r).then(i=>{if(i.total===0){l("Sorry, there are no images matching your search query. Please try again!","error");return}p(i.hits,c)}).catch(i=>{console.error("Error fetching images:",i),l("An error occurred while fetching images. Please try again later.","error")}).finally(()=>{o.target.reset(),n.classList.add("is-hidden")})});
//# sourceMappingURL=index.js.map

import{i as a,a as t,b as o,g as r}from"./search-CS_od1dN.js";a();t();o();const c=document.querySelector("main"),d=parseInt(c?.dataset.modulo||"1",10);l(d);function l(s){const i=document.getElementById("classesGrid");if(!i)return;const n=r(s);if(n.length===0){i.innerHTML="<p>No hay clases disponibles</p>";return}i.innerHTML=n.map(e=>`
    <a href="clase-${e.id}.html" class="class-nav-card">
      <div class="class-nav-number">${e.id}</div>
      <div class="class-nav-content">
        <h3>${e.titulo}</h3>
        <p>${m(e)}</p>
      </div>
      <div class="class-nav-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </a>
  `).join("")}function m(s){return s.descripcion?s.descripcion:s.temas.slice(0,4).map(n=>n.titulo).join(", ")+(s.temas.length>4?"...":"")}

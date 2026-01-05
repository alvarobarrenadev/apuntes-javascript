import{i as d,a as r}from"./footer-BfRR1JS6.js";const a="/apuntes-javascript/",l=[{title:"Conceptos Básicos",desc:"Fundamentos, variables, tipos de datos y operadores esenciales.",icon:"fa-bolt",link:`${a}src/pages/modulo-1/`},{title:"Funciones",desc:"Control de flujo, scope, closures y funciones flecha.",icon:"fa-code",link:`${a}src/pages/modulo-2/`},{title:"Arrays y Objetos",desc:"Estructuras de datos, métodos de iteración y algoritmos.",icon:"fa-layer-group",link:`${a}src/pages/modulo-3/`},{title:"POO y Prototipos",desc:"Modelo de objetos, herencia prototípica y clases ES6.",icon:"fa-cube",link:`${a}src/pages/modulo-4/`},{title:"Módulos ES6",desc:"Organización de código con Import/Export y bundlers.",icon:"fa-box-open",link:`${a}src/pages/modulo-5/`},{title:"El DOM",desc:"Manipulación dinámica del HTML y CSS desde JavaScript.",icon:"fa-sitemap",link:`${a}src/pages/modulo-6/`},{title:"Eventos",desc:"Gestión de interacción, listeners y propagación.",icon:"fa-computer-mouse",link:`${a}src/pages/modulo-7/`},{title:"Storage",desc:"Persistencia de datos: LocalStorage, Session y Cookies.",icon:"fa-database"},{title:"Asincronía",desc:"Event Loop, Callbacks, Promesas y Async/Await.",icon:"fa-stopwatch"},{title:"Fetch API",desc:"Consumo de APIs REST, métodos HTTP y manejo de errores.",icon:"fa-globe"}];function p(o,t="modulesGrid"){const e=document.getElementById(t);if(!e){console.error(`No se encontró el elemento con id "${t}"`);return}o.forEach((i,c)=>{if(c===0){const s=document.createElement("h2");s.className="section-divider",s.textContent="JavaScript Inicial",e.appendChild(s)}if(c===5){const s=document.createElement("h2");s.className="section-divider",s.textContent="JavaScript Avanzado",e.appendChild(s)}const n=u(i,c);e.appendChild(n)})}function u(o,t){const e=document.createElement("div");return e.className="module-card",o.link&&(e.onclick=()=>window.location.href=o.link,e.style.cursor="pointer"),e.innerHTML=`
    <div class="card-header">
      <div class="card-icon">
        <i class="fa-solid ${o.icon}"></i>
      </div>
      <span class="card-badge">MOD ${t+1}</span>
    </div>
    <div>
      <h3 class="card-title">${o.title}</h3>
      <p class="card-desc">${o.desc}</p>
    </div>
    <div class="card-arrow">
      <i class="fa-solid fa-arrow-right"></i>
    </div>
  `,e}d();r();p(l);

import{i}from"./theme-BuTP1Vkp.js";const n="/apuntes-javascript/",d=[{title:"Conceptos Básicos",desc:"Fundamentos, variables, tipos de datos y operadores esenciales.",icon:"fa-bolt",count:3,link:`${n}src/pages/modulo-1/`},{title:"Funciones",desc:"Control de flujo, scope, closures y funciones flecha.",icon:"fa-code",count:4},{title:"Arrays y Objetos",desc:"Estructuras de datos, métodos de iteración y algoritmos.",icon:"fa-layer-group",count:7},{title:"POO y Prototipos",desc:"Modelo de objetos, herencia prototípica y clases ES6.",icon:"fa-cube",count:4},{title:"Módulos ES6",desc:"Organización de código con Import/Export y bundlers.",icon:"fa-box-open",count:1},{title:"El DOM",desc:"Manipulación dinámica del HTML y CSS desde JavaScript.",icon:"fa-sitemap",count:6},{title:"Eventos",desc:"Gestión de interacción, listeners y propagación.",icon:"fa-computer-mouse",count:4},{title:"Storage",desc:"Persistencia de datos: LocalStorage, Session y Cookies.",icon:"fa-database",count:3},{title:"Asincronía",desc:"Event Loop, Callbacks, Promesas y Async/Await.",icon:"fa-stopwatch",count:2},{title:"Fetch API",desc:"Consumo de APIs REST, métodos HTTP y manejo de errores.",icon:"fa-globe",count:4}];function r(o,c="modulesGrid"){const e=document.getElementById(c);if(!e){console.error(`No se encontró el elemento con id "${c}"`);return}o.forEach((s,t)=>{const a=l(s,t);e.appendChild(a)})}function l(o,c){const e=document.createElement("div");return e.className="module-card",o.link&&(e.onclick=()=>window.location.href=o.link,e.style.cursor="pointer"),e.innerHTML=`
    <div class="card-header">
      <div class="card-icon">
        <i class="fa-solid ${o.icon}"></i>
      </div>
      <span class="card-badge">MOD ${c+1}</span>
    </div>
    <div>
      <h3 class="card-title">${o.title}</h3>
      <p class="card-desc">${o.desc}</p>
    </div>
    <div class="card-arrow">
      <i class="fa-solid fa-arrow-right"></i>
    </div>
  `,e}i();r(d);

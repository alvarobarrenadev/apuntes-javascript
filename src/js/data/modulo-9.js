export const modulo9Data = {
  titulo: "Asincronía y Promesas",
  descripcion: "Domina el control de flujo asíncrono en JavaScript mediante Promesas, Async/Await y peticiones a servidores.",
  icono: "fa-clock",
  clases: [
    {
      id: 37,
      titulo: "Introducción a las Promesas",
      descripcion: "Aprende qué son las promesas, sus estados y cómo gestionarlas para manejar operaciones asíncronas.",
      temas: [
        {
          titulo: "¿Qué es una Promesa?",
          contenido: "Una Promesa es un objeto que representa la terminación o el fracaso de una operación asíncrona. Es esencial para manejar tareas que toman tiempo, como peticiones a servidores, sin bloquear la ejecución del código.",
          puntosClave: [
            "**Asincronía**: Permite que el código siga ejecutándose mientras espera una respuesta.",
            "**Estados de una Promesa**: Pending (pendiente), Fulfilled (resuelta/completada), Rejected (rechazada).",
            "**Uso común**: Peticiones a APIs, operaciones de base de datos, timers, etc."
          ]
        },
        {
          titulo: "Creando una Promesa",
          contenido: "Utilizamos el constructor `new Promise` que recibe una función ejecutora con dos argumentos: `resolve` y `reject`.",
          codigo: `const miPromesa = new Promise((resolve, reject) => {
  // Simular operación asíncrona
  const exito = true;

  if (exito) {
    resolve("Operación exitosa"); // Cambia estado a Fulfilled
  } else {
    reject("Hubo un error"); // Cambia estado a Rejected
  }
});`
        },
        {
          titulo: "Consumiendo Promesas: then, catch, finally",
          contenido: "Para manejar el resultado de una promesa, utilizamos los métodos `.then()`, `.catch()` y `.finally()`.",
          puntosClave: [
            "**then(callback)**: Se ejecuta cuando la promesa se resuelve exitosamente. Recibe el valor devuelto por `resolve`.",
            "**catch(callback)**: Se ejecuta si la promesa es rechazada o hay un error. Recibe el motivo del `reject`.",
            "**finally(callback)**: Se ejecuta siempre al finalizar, independientemente del resultado (útil para limpieza)."
          ],
          codigo: `miPromesa
  .then((mensaje) => {
    console.log(mensaje); // "Operación exitosa"
  })
  .catch((error) => {
    console.error(error); // "Hubo un error"
  })
  .finally(() => {
    console.log("Promesa finalizada"); // Se ejecuta siempre
  });`
        },
        {
          titulo: "Encadenamiento de Promesas",
          contenido: "Los métodos `.then()` devuelven una nueva promesa, permitiendo encadenar operaciones secuenciales.",
          codigo: `const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

esperar(1000)
  .then(() => {
    console.log("Pasó 1 segundo");
    return 5; // Pasamos este valor al siguiente .then
  })
  .then((numero) => {
    console.log(\`El número es \${numero}\`);
    // Podemos devolver otra promesa
    return esperar(2000);
  })
  .then(() => {
    console.log("Pasaron 2 segundos más");
  })
  .catch((err) => console.error("Error en la cadena:", err));`
        },
        {
          titulo: "Métodos Estáticos: Resolve y Reject",
          contenido: "Podemos crear promesas ya resueltas o rechazadas inmediatamente usando `Promise.resolve()` y `Promise.reject()`.",
          codigo: `// Levantar una promesa resuelta inmediatamente
Promise.resolve("Datos en caché")
  .then(data => console.log(data));

// Rechazar una promesa inmediatamente (útil para validaciones)
function validarEdad(edad) {
  if (edad < 18) {
    return Promise.reject("Menor de edad"); // Rompe la cadena y va al catch
  }
  return Promise.resolve("Acceso autorizado");
}

validarEdad(15)
  .then(msg => console.log(msg))
  .catch(err => console.error(err)); // "Menor de edad"`
        }
      ]
    },
    {
      id: 38,
      titulo: "Funciones de Carrera y Argumentos",
      descripcion: "Domina la ejecución de promesas en paralelo con Promise.all, race, any y allSettled, y aprende a pasar argumentos a promesas.",
      temas: [
        {
          titulo: "Promesas en Serie vs. Paralelo",
          contenido: "Hasta ahora ejecutábamos promesas en serie (una tras otra). Sin embargo, cuando las operaciones son independientes, es más eficiente ejecutarlas en paralelo.",
          puntosClave: [
            "**Serie**: Una promesa espera a que termine la anterior. Útil cuando una depende del resultado de otra.",
            "**Paralelo**: Se lanzan todas a la vez. Útil para optimizar tiempo cuando no hay dependencias entre ellas."
          ]
        },
        {
          titulo: "Promise.all()",
          contenido: "Recibe un array de promesas y devuelve una nueva promesa que se resuelve cuando **todas** las promesas del array se han resuelto. Si una falla, `Promise.all` falla inmediatamente. El resultado es un array con los valores devueltos, en el mismo orden.",
          codigo: `const p1 = new Promise(resolve => setTimeout(() => resolve(1), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve(2), 2000));

Promise.all([p1, p2])
  .then(resultados => {
    console.log(resultados); // [1, 2]
  })
  .catch(error => console.error("Una falló:", error));`
        },
        {
          titulo: "Promise.race()",
          contenido: "Recibe un array de promesas y se resuelve o rechaza tan pronto como **la primera** de ellas se resuelva o rechace.",
          codigo: `const lenta = new Promise(resolve => setTimeout(() => resolve("Lenta"), 2000));
const rapida = new Promise(resolve => setTimeout(() => resolve("Rápida"), 500));

Promise.race([lenta, rapida])
  .then(ganadora => console.log(ganadora)); // "Rápida"`
        },
        {
          titulo: "Promise.any()",
          contenido: "Similar a race, pero espera a la primera que se **resuelva exitosamente**. Ignora los rechazos a menos que **todas** fallen (AggregateError).",
          codigo: `const pError = Promise.reject("Falló");
const pOk = new Promise(resolve => setTimeout(() => resolve("Éxito"), 100));

Promise.any([pError, pOk])
  .then(result => console.log(result)); // "Éxito"`
        },
        {
          titulo: "Promise.allSettled()",
          contenido: "Espera a que **todas** las promesas terminen, independientemente de si tuvieron éxito o fallaron. Devuelve un array de objetos con el estado (`status`) y el resultado (`value` o `reason`) de cada una.",
          codigo: `Promise.allSettled([p1, pError])
  .then(resultados => console.log(resultados));
/*
[
  { status: "fulfilled", value: 1 },
  { status: "rejected", reason: "Falló" }
]
*/`
        },
        {
          titulo: "Pasar Argumentos a Promesas",
          contenido: "Para pasar argumentos a una promesa (como IDs o fechas), envolvemos la construcción de la promesa en una función que acepte esos argumentos.",
          codigo: `// Función que devuelve una promesa
const buscarUsuario = (nombre) => {
  return new Promise((resolve, reject) => {
    console.log(\`Buscando a \${nombre}...\`);
    setTimeout(() => {
      resolve({ id: 1, nombre: nombre });
    }, 1000);
  });
};

buscarUsuario("Alvaro")
  .then(user => console.log(user));`
        },
        {
          titulo: "Encadenamiento con Dependencia de Datos",
          contenido: "Un patrón muy potente es usar el resultado de una promesa como argumento para la siguiente. Al convertir las promesas en funciones (Factories), podemos inyectar datos dinámicos en cada paso de la cadena.",
          codigo: `const buscarUsuario = (nombre) => {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: 1, nombre }), 500);
  });
};

const buscarActividad = (user, fecha) => {
  return new Promise(resolve => {
    setTimeout(() => resolve([\`Actividad de \${user.nombre} el \${fecha}\`]), 500);
  });
};

buscarUsuario("Alvaro")
  .then(user => {
    console.log("Usuario encontrado:", user);
    // Pasamos el usuario de la anterior promesa + un dato nuevo
    return buscarActividad(user, "2023-10-20");
  })
  .then(actividades => {
    console.log(actividades); // ["Actividad de Alvaro el 2023-10-20"]
  });`
        }
      ]
    }
  ]
};

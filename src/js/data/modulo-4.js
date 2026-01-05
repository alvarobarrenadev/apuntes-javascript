export const modulo4Data = {
  titulo: "Prototipos y Clases",
  descripcion: "Domina la Programación Orientada a Objetos en JavaScript: prototipos, clases, herencia y encapsulamiento.",
  icono: "fa-sitemap",
  clases: [
    // =====================
    // CLASE 15: PROTOTIPOS
    // =====================
    {
      id: 15,
      titulo: "Prototipos en JavaScript",
      descripcion: "Entiende la base del lenguaje: la herencia prototípica, la cadena de prototipos y cómo los objetos delegan responsabilidades.",
      temas: [
        {
          titulo: "Introducción a los Prototipos",
          contenido: "JavaScript es un lenguaje basado en prototipos, no en clases (aunque existan como azúcar sintáctico). A diferencia de los lenguajes clásicos orientados a objetos donde se definen clases y se crean instancias, en JS los objetos delegan el comportamiento a otros objetos: sus prototipos.",
          puntosClave: [
            "Los tipos primitivos (number, string) son valores simples.",
            "Los objetos, arrays y funciones son tipos por referencia.",
            "Cada objeto tiene un enlace interno a otro objeto llamado **prototipo**.",
            "Si buscas una propiedad en un objeto y no la tiene, JS la busca en su prototipo."
          ]
        },
        {
          titulo: "¿Qué es un Prototipo?",
          contenido: "Es un objeto 'molde' del cual otros objetos heredan propiedades y métodos. Es una delegación: si yo no sé hacer algo, ¿mi prototipo sabe hacerlo?",
          codigo: `const persona = {
  saludar: function() {
    console.log("Hola!");
  }
};

const alumno = Object.create(persona);
alumno.saludar(); // "Hola!" (Delegado al prototipo persona)`
        },
        {
          titulo: "La Cadena de Prototipos",
          contenido: "Cuando accedes a una propiedad, JS la busca en el objeto. Si no está, sube al prototipo. Si no está, sube al prototipo del prototipo... hasta llegar a `null` (el final de la cadena).",
          codigo: `// alumno -> persona -> Object.prototype -> null
console.log(alumno.toString()); 
// alumno no tiene toString
// persona no tiene toString
// Object.prototype SÍ tiene toString => Se ejecuta`
        },
        {
          titulo: "Verificar Prototipos",
          contenido: "Podemos comprobar si un objeto forma parte de la cadena de prototipos de otro con `isPrototypeOf`.",
          codigo: `const persona = { ... };
const alumno = Object.create(persona);

// ¿Es persona el prototipo de alumno?
console.log(persona.isPrototypeOf(alumno)); // true
console.log(Object.prototype.isPrototypeOf(alumno)); // true`
        },,
        {
          titulo: "Propiedades `__proto__` vs `prototype`",
          contenido: "Es fácil confundirse con estos términos:",
          puntosClave: [
            "`__proto__`: Es la propiedad (getter/setter) en cada instancia que apunta a su prototipo real.",
            "`prototype`: Es la propiedad de las **funciones constructoras** que se usará como prototipo para las instancias creadas con `new`.",
            "Ejemplo: `Persona.prototype` es el objeto que será el `__proto__` de `new Persona()`."
          ]
        },
        {
          titulo: "Asignar Prototipos",
          contenido: "Existen varias formas de trabajar con prototipos, algunas recomendadas y otras obsoletas.",
          metodosArray: [ // Usando estructura similar a modulo-3 para listas
            {
              metodo: "Object.create()",
              descripcion: "La forma recomendada. Crea un nuevo objeto usando otro como prototipo.",
              codigo: `const prototipo = { a: 1 };
const objeto = Object.create(prototipo);`
            },
            {
              metodo: "Funciones Constructoras",
              descripcion: "La forma clásica antes de ES6.",
              codigo: `function Persona(nombre) { this.nombre = nombre; }
const p = new Persona('Ana');`
            },
            {
              metodo: "__proto__ (No recomendado)",
              descripcion: "Modificar directamente la cadena de prototipos es lento y mala práctica.",
              codigo: `objeto.__proto__ = otroObjeto; // ❌ Evitar`
            },
            {
              metodo: "Object.setPrototypeOf()",
              descripcion: "Estándar pero lento si se usa dinámicamente.",
              codigo: `Object.setPrototypeOf(objeto, prototipo);`
            }
          ]
        },
        {
          titulo: "Prototipos son Dinámicos",
          contenido: "Si modificas el prototipo, todos los objetos que delegan en él ven los cambios inmediatamente, incluso si fueron creados antes de la modificación.",
          codigo: `const padre = { saludo: "Hola" };
const hijo = Object.create(padre);

console.log(hijo.saludo); // "Hola"

padre.saludo = "Adiós";
console.log(hijo.saludo); // "Adiós" (El cambio se refleja)`
        },
        {
          titulo: "Sobrescribir Métodos (Shadowing)",
          contenido: "Si un objeto define una propiedad que ya existe en su prototipo, la 'tapa' o sobrescribe para sí mismo, sin afectar al prototipo ni a otros objetos.",
          codigo: `const animal = {
  hacerRuido() { console.log("Sonido genérico"); }
};

const perro = Object.create(animal);
perro.hacerRuido = function() { console.log("Guau!"); };

perro.hacerRuido(); // "Guau!" (Propio)
animal.hacerRuido(); // "Sonido genérico" (Original)`
        }
      ]
    },

    // =====================
    // CLASE 16: CLASES EN JAVASCRIPT
    // =====================
    {
      id: 16,
      titulo: "Clases en JavaScript",
      descripcion: "Aprende la sintaxis moderna (ES6) para crear clases, constructores, métodos, encapsulamiento y herencia.",
      temas: [
        {
          titulo: "¿Qué son las Clases en JS?",
          contenido: "Introducidas en ES6 (2015), son una mejora sintáctica sobre los prototipos. Por debajo siguen usando prototipos, pero ofrecen una sintaxis más clara y familiar para programadores de otros lenguajes (Java, C#, Python).",
          codigo: `class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    return \`Hola, soy \${this.nombre}\`;
  }
}

const user = new Usuario('Álvaro');`
        },
        {
          titulo: "El Constructor",
          contenido: "Es un método especial para crear e inicializar un objeto creado con una clase. Solo puede haber uno por clase.",
          puntosClave: [
            "Se ejecuta automáticamente al hacer `new Clase()`.",
            "Se usa para inicializar propiedades (`this.propiedad = valor`).",
            "Si no lo defines, JS agrega uno vacío por defecto."
          ]
        },
        {
          titulo: "Métodos de Instancia y Prototipo",
          contenido: "Los métodos definidos en la clase se agregan automáticamente al `prototype`, no a la instancia, lo cual es eficiente en memoria.",
          codigo: `class Persona {
  // Se guarda en Persona.prototype
  hablar() { ... }
}

// Equivalente antiguo:
function Persona() {}
Persona.prototype.hablar = function() { ... }`
        },
        {
          titulo: "Propiedades y Métodos Privados",
          contenido: "Ahora podemos definir propiedades verdaderamente privadas usando el prefijo `#`. Solo son accesibles desde dentro de la clase.",
          codigo: `class CuentaBancaria {
  #saldo; // Declaración obligatoria

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  verSaldo() {
    return this.#saldo; // ✅ Acceso interno permitido
  }
}

const cuenta = new CuentaBancaria(100);
// console.log(cuenta.#saldo); // ❌ Error: Private field`
        },
        {
          titulo: "Getters y Setters",
          contenido: "Permiten interceptar el acceso y la asignación de propiedades. Son útiles para validaciones o propiedades calculadas.",
          codigo: `class Usuario {
  constructor(edad) {
    this._edad = edad;
  }

  get edad() {
    return this._edad;
  }

  set edad(valor) {
    if (valor < 0) throw new Error("Edad no válida");
    this._edad = valor;
  }
}

const u = new Usuario(25);
u.edad = -5; // ❌ Lanza Error
u.edad = 30; // ✅ Llama al setter`
        },
        {
          titulo: "Métodos Estáticos",
          contenido: "Son métodos que pertenecen a la clase, no a las instancias. Se llaman directamente sobre la clase, como `Math.max()`.",
          codigo: `class Utilidades {
  static sumar(a, b) {
    return a + b;
  }
}

console.log(Utilidades.sumar(5, 10)); // 15
// const u = new Utilidades();
// u.sumar(1, 2); // ❌ Error, no existe en la instancia`
        },
        {
          titulo: "Herencia con `extends`",
          contenido: "Permite crear una clase que hereda propiedades y métodos de otra. Se usa la palabra clave `super` para llamar al constructor o métodos del padre.",
          codigo: `class Animal {
  constructor(nombre) { this.nombre = nombre; }
  comer() { console.log("Comiendo..."); }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre); // ¡Obligatorio llamar a super() antes de usar this!
    this.raza = raza;
  }

  ladrar() { console.log("Guau!"); }
}

const p = new Perro('Toby', 'Mastín');
p.comer(); // Heredado
p.ladrar(); // Propio`
        }
      ]
    },

    // =====================
    // CLASE 17: EJERCICIOS CON CLASES (I)
    // =====================
    {
      id: 17,
      titulo: "Ejercicios Prácticos I",
      descripcion: "Practica lo aprendido creando sistemas reales: Calculadora, Automóvil y Televisor.",
      temas: [
        {
          titulo: "Manejo de Errores (Try / Catch)",
          contenido: "Antes de realizar los ejercicios, es fundamental aprender a manejar situaciones inesperadas (como dividir por cero o recibir texto inválido) para evitar que el programa se detenga. Usamos `try`, `catch` y `throw`.",
          puntosClave: [
            "`throw new Error('msg')`: Detiene la ejecución y lanza un error manualmente.",
            "`try { ... }`: Bloque de código donde intentamos ejecutar algo 'peligroso'.",
            "`catch (err) { ... }`: Bloque que captura el error si ocurre en el `try`.",
            "`finally`: Bloque que se ejecuta siempre (opcional)."
          ],
          codigo: `function dividir(a, b) {
  if (b === 0) throw new Error("No se puede dividir por 0");
  return a / b;
}

try {
  dividir(10, 0);
} catch (error) {
  console.error("Error capturado:", error.message);
} finally {
  console.log("Operación terminada");
}`
        },
        {
          titulo: "Ejercicio 1: Calculadora",
          contenido: "Crea una clase `Calculadora` con métodos para sumar, restar, multiplicar y dividir. Maneja errores como la división por cero o inputs no numéricos.",
          codigo: `class Calculadora {
  #resultado = 0;

  constructor() {
    this.#resultado = 0;
  }

  get resultado() {
    return this.#resultado;
  }

  sumar(num) {
    this.#validarNumero(num);
    this.#resultado += num;
  }

  restar(num) {
    this.#validarNumero(num);
    this.#resultado -= num;
  }

  multiplicar(num) {
    this.#validarNumero(num);
    this.#resultado *= num;
  }

  dividir(num) {
    this.#validarNumero(num);
    if (num === 0) throw new Error("No se puede dividir por cero");
    this.#resultado /= num;
  }

  reiniciar() {
    this.#resultado = 0;
  }

  #validarNumero(num) {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error("Debe introducir un número válido");
    }
  }
}`
        },
        {
          titulo: "Ejercicio 2: Automóvil",
          contenido: "Modela un `Auto` con propiedades como marca, modelo, encendido, velocidad. Implementa métodos para arrancar, apagar, acelerar y frenar con validaciones lógicas.",
          codigo: `class Auto {
  #encendido = false;
  #velocidad = 0;
  
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  arrancar() {
    this.#encendido = true;
  }

  apagar() {
    if (this.#velocidad > 0) {
      console.log("No se puede apagar en movimiento");
      return;
    }
    this.#encendido = false;
  }

  acelerar() {
    if (!this.#encendido) {
      console.log("El auto está apagado");
      return;
    }
    this.#velocidad += 10;
  }

  frenar() {
    if (this.#velocidad <= 0) {
      console.log("El auto ya está detenido");
      return;
    }
    this.#velocidad -= 10;
  }

  toString() {
    return \`\${this.marca} \${this.modelo} - \${this.#encendido ? 'ON' : 'OFF'} (\${this.#velocidad} km/h)\`;
  }
}`
        },
        {
          titulo: "Ejercicio 3: Televisor",
          contenido: "Crea una clase `Televisor` con control de canales, volumen y encendido. Implementa lógica circular para los canales y límites para el volumen.",
          codigo: `class Televisor {
  #encendido = false;
  #canal = 0;
  #volumen = 0;

  constructor(marca, canalesMaximos = 100) {
    this.marca = marca;
    this.canalesMaximos = canalesMaximos;
  }

  prender() { this.#encendido = true; }
  apagar() { this.#encendido = false; }

  cambiarCanal(canal) {
    if (!this.#encendido) return;
    if (canal < 0 || canal > this.canalesMaximos) {
      console.log("Canal no existe");
      return;
    }
    this.#canal = canal;
  }

  canalSiguiente() {
    if (!this.#encendido) return;
    if (this.#canal === this.canalesMaximos) {
      this.#canal = 0; // Vuelta al principio
    } else {
      this.#canal++;
    }
  }

  subirVolumen() {
    if (!this.#encendido) return;
    if (this.#volumen < 100) this.#volumen++;
  }

  // ... resto de métodos (bajarVolumen, canalAnterior)
}`
        }
      ]
    },

    // =====================
    // CLASE 18: EJERCICIOS CON CLASES (II)
    // =====================
    {
      id: 18,
      titulo: "Ejercicios Prácticos II",
      descripcion: "Ejercicios avanzados integrando múltiples clases y estructuras de datos más complejas: Anotador y Billetera Virtual.",
      temas: [
        {
          titulo: "Ejercicio 4: Anotador de Notas",
          contenido: "Crea una clase `Anotador` que gestione una lista de notas. Debe permitir agregar, actualizar, obtener y eliminar notas mediante un ID (índice en este caso).",
          codigo: `class Anotador {
  constructor(titulo) {
    this.titulo = titulo;
    this.notas = [];
  }

  agregarNota(nota) {
    this.notas.push(nota);
  }

  actualizarNota(id, nuevaNota) {
    if (this.notas[id]) {
      this.notas[id] = nuevaNota;
    }
  }

  obtenerNota(id) {
    return this.notas[id];
  }

  eliminarNota(id) {
    // Splice elimina 1 elemento en la posición id
    this.notas.splice(id, 1);
  }

  listarNotas() {
    return this.notas.reduce((acc, nota, index) => {
      return acc + \`\${index + 1}. \${nota}\\n\`;
    }, \`=== \${this.titulo} ===\\n\`);
  }
}`
        },
        {
          titulo: "Ejercicio 5: Billetera Virtual",
          contenido: "El ejercicio final consiste en modelar una Billetera (Wallet) que contenga Movimientos. Practicaremos la composición de clases (una clase usando otra).",
          codigo: `class Movimiento {
  constructor(descripcion, cantidad, fecha, tipo, categoria) {
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.fecha = new Date(fecha);
    this.tipo = tipo; // 'gasto' o 'ganancia'
    this.categoria = categoria;
  }
}

class Wallet {
  constructor() {
    this.monto = 0; // Saldo actual
    this.operaciones = [];
  }

  agregarMovimiento(movimiento) {
    this.operaciones.push(movimiento);
    
    if (movimiento.tipo === 'gasto') {
      this.monto -= movimiento.cantidad;
    } else if (movimiento.tipo === 'ganancia') {
      this.monto += movimiento.cantidad;
    }
  }

  obtenerGastosPorMes(mes) {
    return this.operaciones.filter(op => 
      op.tipo === 'gasto' && op.fecha.getMonth() === mes
    );
  }

  calcularTotalPorCategoria(categoria) {
    return this.operaciones
      .filter(op => op.categoria === categoria)
      .reduce((total, op) => {
        return op.tipo === 'ganancia' 
          ? total + op.cantidad 
          : total - op.cantidad;
      }, 0);
  }
}`
        }
      ]
    }
  ]
};

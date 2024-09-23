"use strict";

/************************
 *  Operador spread (...)
 * */

/** Objeto sencillo. */
let persona1 = {
  nombre: "Feo",
  apellido1: "De Verdad",
};

/** Copia de objeto (no referencia). */

let persona2 = { ...persona1, apellido2: "De la buena" };

/** Copia por refencia. */

let persona3 = persona1;

/** Se modifica persona3 y no persona (al menos directamente). */

persona3.ciudad = "Petrer";

/* console.log(persona1);
console.log(persona2);
console.log(persona3); */

/********************
 *   Arrays.
 * */

/** Declaración.  */

let cosas = new Array();
let tresTipos = new Array(11, "Feo", true);
let tresTiposDos = [11, "hola", true];
let masCosas = [];

/** Spread también funciona con arrays. */

/* let animales = ["perro", "gato", "feo"];
console.log(animales);
let copiaDeAnimales = [...animales];
console.log(copiaDeAnimales); */

/** 
            ¡¡CUIDADO!!
Métodos que modifican el array original y otros no.
Algunos devuelven un elemento u otro valor.
Incluso los hay que no hacen nada.

forEach(función) 	  → ejecuta la función para cada elemento.
map(función) 		    → ejecuta la función para cada elemento (devuelve).
every(función) 		  → si la función se cumple siempre.
some(función) 		  → si la función se cumple para alguno.
filter(función) 		→ devuelve un nuevo array con elementos que cumplen la función.

Estos métodos reciben una función (principalmente flecha) como parámetro
denominada callback. En esta ocasión, reciben tres parámetros opcionales en este orden:
  → el valor del elemento del array,
  → el índice del elemento y
  → el propio array.

*/

const horda = [
  "Orcos",
  "No-muerto",
  "Tauren",
  "Trol",
  "Elfo de sangre",
  "Goblin",
];

const alianza = [
  "Humanos",
  "Enanos",
  "Elfos de la noche",
  "Gnomo",
  "Draenei",
  "Huargen",
];

/* let resultadoForeach = horda.forEach((valor, indice, array) => {
  console.log(
    `La posición número ${indice} de la Horda es para ${valor} con foreach.`
  );
  return valor;
});

let resultadoMap = horda.map((valor, indice, array) => {
  console.log(
    `La posición número ${indice} de la Horda es para ${valor} con map.`
  );
  return valor;
}); */

/* console.log(`El resultado con foreach es: ${resultadoForeach}`);
console.log(`El resultado con map es: ${resultadoMap}`); */

const existen = horda.some((valor, indice, array) => {
  return valor === "Humanos"; // Hay que devolver un valor siempre.
});

/* console.log(existen);
console.log(`Los Humanos ${existen ? "existen" : "no existen"} en la Orda.`); */

/** Se pueden recorrer varios arrays directamente. */

/* [...horda, ...alianza].map((valor, indice) => {
  console.log(`Posición ${indice} = ${valor}.`);
}); */

// ¿Qué tipo de objeto mostraría este código por consola?

/* console.log(
  [...horda, ...alianza].map((valor, indice) => {
    return `Posición ${indice} = ${valor}.`;
  })
); */

/***********************************************
 *  Tratamiento de arrays como funciones puras.
 * */

const feos = ["Rodrigo", "Juan", "Artura", "Javier"];

/*** Recorrer un objeto (no se modifica pero hay que utilizar map). */

// Sólo necesito el valor, por lo que puedo omitir el resto de parámetros.
// Además, puedo denominarlo como prefiera.
/* const feos2 = feos.map((feo) => {
  console.log(feo);
  return feo;
});

console.log(feos2); */

/*** Añadir un nuevo valor al objeto (uso de spread operator). */

/* const nuevoFeo = "Juan Carlos";
const feos3 = [...feos, nuevoFeo];

console.log(feos3); */

/*** Eliminar un elemento del objeto (filter). */

/* const feos4 = feos.filter((feo) => {
  return feo !== nuevoFeo;
});

console.log(feos4); */

/***  Actualizar un elemento del objeto. */

/* const nuevoValor = "Arturo";
const valorCambiar = "Artura";
const feos5 = feos.map((feo) => {
  if (feo === valorCambiar) {
    return nuevoValor;
  } else {
    return feo;
  }
});

console.log(feos5); */

/**********************************
 *  Desestructuración de objetos.
 * */

let nombre = persona1.nombre;
let apellido1 = persona1.apellido1;

//let {nombre, apellido1} = persona;

/** Funciona con arrays aunque de forma posicional. */

let sorpresa = ["Luke", "yo", "soy", "tu", "padre"];
let [sustantivo, pronombre, verbo] = sorpresa;

/* console.log(sustantivo);
console.log(pronombre);
console.log(verbo); */

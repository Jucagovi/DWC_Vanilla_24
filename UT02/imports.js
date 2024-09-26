"use strict";

/************************************
 *  El uso de módulos en JavaScript.
 * */

// Importa el elemento suma de Calculadora.js.
import { sumar } from "./bibliotecas/calculadora.js";

// Importa varios elementos de una vez.
import { restar, multiplicar, multi } from "./bibliotecas/calculadora.js";

// Importa asiganándole un alias.
import { sumar as add } from "./bibliotecas/calculadora.js";

// Importa todos los elementos en un objeto.
import * as Feo from "./bibliotecas/calculadora.js";

//Ejecución de funciones importadas.

/* console.log(sumar(5, 5));
console.log(add(5, 5));
console.log(Feo.restar(5, 5));
console.log(Feo.dividir(85, 0));
console.log(multi(5, 5)); */

/*****************************************************************
 *  El objeto Window.
 *
 *  Automatización de tareas.
 *
 *  setInterval(función,tiempo,parámetros)  → Repite una acción.
 *  setTimeout(función,tiempo, parámetros)  → Programa una acción.
 *  clearTimeout/clearInterval(id) 	        → Elimina acción.
 *
 */

let idMostrar = 0;
let idDespedir = 0;

const mostrarMensaje = (mensaje) => {
  console.log(`${Date.now()} Mostrando ${mensaje}.`);
};

const mostrarDespedida = (mensaje) => {
  console.log(mensaje);
};

// Función sin parámetros.
/* const idMostrar = setInterval(mostrarMensaje, 1000); */

// Función con parámetros.
/* idMostrar = setInterval(mostrarMensaje, 1000, "¡Hola, feos!"); */

// Función flecha. Versión recomendable a partir de ahora.
/* idMostrar = setInterval(() => {
  mostrarMensaje("¡Hola desde una función flecha!");
}, 1000); */

// Mostrar el identificador del setInterval.
console.log(`El identificador del setInterval es: ${idMostrar}`);

// Realizar una tarea transcurrido un tiempo.
/* idDespedir = setTimeout(mostrarDespedida, 5000, "¡Adiós, feos!"); */

// Versión con función flecha (USAR SIEMPRE).
/* idDespedir = setTimeout(() => {
  mostrarDespedida("¡Adiós desde una función flecha, feos!");
}, 5000); */

// Detener el intervalo anterior.
/* idDespedir = setTimeout(() => {
  clearInterval(idMostrar);
}, 10000); */

/************************************************************
 *   Interactuar con el usuario (NO UTILIZAR EN LO SUCESIVO).
 *
 *  alert() 	→ Abre ventana de información.
 *  confirm() 	→ Abre una ventana de confirmación.
 *  prompt() 	→ Recoge información del usuario.
 *
 * */

//alert("¡Hola, feos"); // Los navegadores suelen bloquearlos. No se puede confiar el ellos.

/* const decision = confirm(
  "¿Está seguro de borrar este registro de la base de datos?"
);

console.log(`El usuario ha decidio que ${decision}.`); // Es booleano. */

/* const informacion = prompt("¿Cuál es tu arma de destrucción masiva favorita?");

console.log(`Mi arma de destrucción masiva favorita es ${informacion}`); */

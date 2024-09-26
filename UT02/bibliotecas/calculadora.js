"use strict";

function sumar(x, y) {
  return x + y;
}

function restar(x, y) {
  return x - y;
}

function multiplicar(x, y) {
  return x * y;
}

// Exporta directamente la función Dividir.
export function dividir(x, y) {
  return y === 0 ? "No se puede dividir entre cero, idiota." : x / y;
}

// Exporta los elementos situados entre las llaves.
export { sumar, restar, multiplicar };
// Exporta el elemento con un seudónimo.
export { multiplicar as multi };

// Utilizar una única manera de exportación para evitar confusiones.

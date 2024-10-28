"use strict";

// Se importan las funciones necesarias de la biblioteca.

import {
  anadirBoton,
  anadirEvento,
  saludarNombre,
} from "../../bibliotecas/biblioteca.js";

window.onload = () => {
  /*****************************************************************
   * Delegación de eventos
   * *****/

  // Seleccion de los elementos del DOM para los ejemplos.
  const botones = document.getElementsByClassName("boton");
  const contenedor = document.getElementById("contenedor");

  document.getElementById("nuevo").addEventListener("click", () => {
    anadirBoton(contenedor);
  });

  anadirEvento(botones);

  /*****************************************************************
   * Los nuevos botones se crean sin evento. ¿Solución?
   *    --> poner el evento tras su creación (anadirEvento).
   *    --> añadir el evento durante su creación.
   ***/

  /**************************************************************************
   * Solución al problema: usar delegación de eventos (evento al contenedor).
   ***/
  /* contenedor.addEventListener(
    // Se utiliza la delegación de eventos.
    "click",
    (evento) => {
      console.log(evento.target);
    },
    false
  ); */
}; // Fin del window.onload.

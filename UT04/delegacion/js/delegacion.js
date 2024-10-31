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

  contenedor.addEventListener(
    "click",
    (evento) => {
      if (evento.target.tagName === "BUTTON") {
        console.log(evento.target);
      }
    },
    false
  );

  // Se transforma elementos en un Array (de este modo puedo usar map).
  /*  Array.from(botones).map((boton) => {
    boton.addEventListener("click", (evento) => {
      console.log(evento.target);
    });
  }); */

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

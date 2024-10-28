"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const comenzar = document.getElementById("comenzar");
  const detener = document.getElementById("detener");
  const saludos = document.getElementById("saludos");

  let id = null;

  comenzar.addEventListener(
    "click",
    (event) => {
      if (!id) {
        id = setInterval(() => {
          saludos.innerHTML += `<h1>¡Hola Feo! ${Date.now()}</h1>`;
        }, 1000);
      }
    },
    false
  );

  detener.addEventListener(
    "click",
    (event) => {
      clearInterval(id);
      id = null;
    },
    false
  );
}); // Fin de DOMContentLoaded.

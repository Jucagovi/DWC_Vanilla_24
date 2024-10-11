"use strict";

const parrafos = document.getElementsByTagName("p");
//console.log(parrafos);
const enlaces = document.getElementsByTagName("a");
//console.log(enlaces);
const segundoParrafo = document.body.firstElementChild.nextElementSibling;
//console.log(segundoParrafo);

const idTimeOut = setTimeout(() => {
  const info = document.getElementById("info");
  info.innerHTML += `<p>Se han encontrado <strong>${parrafos.length}</strong> parrafos en el documento.</p>`;
  info.innerHTML += `<p>El contendio del segundo párrafo es:${
    segundoParrafo?.innerHTML
      ? segundoParrafo.innerHTML
      : "No hay segundo párrafo"
  }.</p>`;
  info.innerHTML += `<p>El contenido desde el objeto iterable es: ${
    parrafos[134]?.innerHTML ? parrafos[1].innerHTML : "No existe el párrafo"
  }.</p>`;
  info.innerHTML += `<p>Se han encontrado <strong>${enlaces.length}</strong> enlaces en esta web.</p>`;
}, 2000);

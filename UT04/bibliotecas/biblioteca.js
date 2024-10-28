"use strict";

/*****************************************
 * Funciones para la sección de "eventos".
 ***/

function decirAdios() {
  console.log(`¡¡¡Adiós Feo!!!`);
}

const saludar = () => {
  console.log(`¡¡¡Hola mundo!!!`);
};

function saludarNombre(feo) {
  console.log(`¡¡¡Hola ${feo}!!!`);
}

const mostrarEtiqueta = (evento) => {
  return evento.target.tagName;
};

/*****************************************
 * Funciones para la sección de "delegacon".
 ***/

const anadirBoton = (objeto) => {
  // Se añade el botón al contenedor.
  objeto.innerHTML += "<button class='boton'>Botón nuevo</button>";
};

const anadirEvento = (elementos) => {
  // Se transforma elementos en un Array (de este modo puedo usar map).
  Array.from(elementos).map((elemento) => {
    elemento.addEventListener("click", (evento) => {
      console.log(evento.target);
    });
  });
};

export {
  decirAdios,
  saludar,
  saludarNombre,
  anadirBoton,
  anadirEvento,
  mostrarEtiqueta,
};

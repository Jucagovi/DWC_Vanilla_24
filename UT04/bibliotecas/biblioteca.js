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

/** Expresiones regulares en JavaScript.
 *
 *    RegExp      -> constructor de expresiones regulares,
 *                   recibe como parámetro un patrón a validar (string)
 *    / patrón /  -> constructor de expresionies regulares,
 *                   versión corta
 *    expNombre   -> objeto de expresión regular devuelto por RegExp
 *    .test       -> método del objeto expresión regular
 *                   que evalua si el patrón coicide con el string pasado
 *                   como parámetro (true) o no coincide (false).
 */

const validarFormulario = () => {
  //var expNombre = new RegExp("^[a-zA-Z][a-zA-Z0-9-_.]{2,20}$");
  var expNombre = /^[a-zA-Z][a-zA-Z0-9-_\.]{2,20}$/;
  let nombre = document.getElementById("nombre");
  if (expNombre.test(nombre.value)) {
    document.getElementById("error").innerHTML = "El nombre es correcto.";
    // Envío el formulario con formulario.submit o lo gestiono a través de una función.
  } else {
    document.getElementById("error").innerHTML =
      "Escriba un nombre con entre 3 y 20 caracteres y debe comenzar con una letra.";
    // No envío el formulario.
  }
};

export {
  decirAdios,
  saludar,
  saludarNombre,
  anadirBoton,
  anadirEvento,
  validarFormulario,
};

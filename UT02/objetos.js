"use strict";

/******** OBJETOS *******/

/***************************************
 *  Definición de objetos (propiedades).
 * */

// Objeto vacío.
var nadie = {};
// Objeto con propiedades.
var persona = {
  nombre: "Feo",
  apellido1: "De Verdad",
  // Puede haber JSON anidados.
  direccion: {
    calle: "La de siempre",
    numero: 5,
    telefono: 123456789,
  },
  aficiones: ["Videojuegos", "Rugby", "Cría de berberechos"],
};

/* console.log(nadie);
console.log(persona); */

/*****************************************
 * Acceso a las propiedades (y "métodos").
 * */

/* console.log(persona.nombre);
console.log(persona["apellido1"]);
console.log(
  `Que vive en la calle ${persona.direccion.calle} en el número ${persona["direccion"].numero}.`
);
console.log(persona.aficiones);

persona.apellido2 = "De la buena";
console.log(persona); */

/*********************************
 * Definición de objetos (métodos)
 * */

/* persona.getNombreCompleto = function () {
  return `${this.nombre} ${this.apellido1}`;
};

console.log(persona);
console.log(persona.getNombreCompleto); // Se imprime por consola el objeto function.
console.log(persona.getNombreCompleto()); // Se ejecuta la función y se imprime su devolución. */

/*****************************
 * "Constructores" de objetos.
 * */

/* function creaPersona(nom, ape1) {
  return {
    nombre: nom,
    apellido1: ape1,
    direccion: {
      calle: "La de siempre",
      numero: 5,
      telefono: 123456789,
    },
    aficiones: ["Videojuegos", "Rugby", "Cría de berberechos"],
    getNombreCompleto: function () {
      return this.nombre + " " + this.apellido1;
    },
    saluda: function (persona) {
      let saludo;
      if (typeof persona.getNombreCompleto !== "undefined") {
        saludo = `Hola, ${persona.getNombreCompleto()}.`;
      } else {
        return "Hola, colega.";
      }
      return saludo;
    },
  };
}
var persona2 = creaPersona("Feo", "De Verdad");
var persona3 = creaPersona("Bruce", "Wayne");
console.log(persona2.saluda(persona3)); // Hola Bruce Wayne
console.log(persona2.saluda({})); // Hola colega */

/*******************************
 *  Recorrer objetos con for in.
 * */

/* for (var clave in persona) {
  // Se comrpueba que el JSON realmente tenga esa propiedad.
  if (persona.hasOwnProperty(clave)) {
    // Se muestra en pantalla la clave junto a su valor y el tipo de datos.
    console.log(
      `La clave es ${clave} y el valor es ${
        persona[clave]
      } y es del tipo ${typeof persona[clave]}.`
    );
  }
} */

/**********************************
 * Encadenamiento opcional (React).
 * */

// Sólo accede a calle si dirección existe.
//console.log(persona.direccion?.calle);

/******************************************************
 * Conversión de objetos a cadena de texto y viceversa.
 * */

// Se accede al prototipo del objeto JSON para utilizar dos de sus métodos.

/* // Se convierte a texto.
let textoDesdeJSON = JSON.stringify(persona);
// Se convierte a JSON.
let JSONreconstruido = JSON.parse(textoDesdeJSON);

console.log(textoDesdeJSON);
console.log(JSONreconstruido); */

/*******************************************
 * Desestructuración de objetos (iterables).
 * */

/* let { nombre, apellido1 } = persona;

console.log(nombre);
console.log(persona);

//Es posible cambiar el nombre y poner valores por defecto.

let { nombre: nom, apellido1: cognom1, malnom = "Ninguno" } = persona;

console.log(nom);
console.log(cognom1);
console.log(malnom); */

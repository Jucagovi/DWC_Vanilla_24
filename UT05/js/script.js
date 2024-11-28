"use strict";

/* 
AJAX (Asynchronous JavaScript And XML)
-------------------------------------------------------------------------
  • XHTML y CSS para la presentación de la página,
  • DOM para la manipulación dinámica de elementos de la página,
  • formatos de intercambio de información como JSON o XML,
  • el objeto XMLHttpRequest para el intercambio asíncrono de información,
  • JavaScript para aplicar las anteriores tecnologías.

  Ventajas  -> reducir cantidad de información a enviar,
            -> mayor dinamismo en la UI y
            -> mayor control de las respuestas del servidor.
 */

import { mostrar } from "../bibliotecas/manipularDOM.js";

window.onload = () => {
  // Se recogen los elementos de la web que necesitaré en lo sucesivo.
  let contenedor = document.getElementById("contenedor");
  let feo = 1;

  // *** Código asíncrono *******************************************

  /* console.log(`A. Se va a sumar uno a la variable feo = ${feo}.`);
  feo++;
  console.log(`B. Proceso terminado.`);
  console.log(`C. El valor de feo es ${feo}.`); */

  // Se simula un retraso a través de setTimeOut().

  /* console.log(`A. Se va a sumar uno a la variable feo = ${feo}.`);
  setTimeout(() => {
    feo++;
    console.log(`B. Proceso terminado.`);
  }, 1000);
  console.log(`C. El valor de feo es ${feo}.`); */

  /*** Promesas *****************************************************
   *
   * const promesa = new Promise ( (resolver, rechazar) => { código asíncrono } );
   *
   * Recibe como parámetro dos "return":
   *    --> resolver (cuando la promesa ha finalizado de forma correcta).
   *    --> rechazar (cuando la promesa ha finalizadp de forma errónea).
   *
   * Estados de una promesa:
   *    --> Pendiente   (pending)
   *    --> Completada  (fullfiled)
   *    --> Rechazada   (rejected)
   *    --> Arreglada   (settled) Una promesa sólo se puede hacer una vez y entra en este estado.
   *
   */

  /******************************
   * ¿Cómo funciona una promise?
   *
   * Se crea un objeto del tipo promise.
   *  */

  /* const promesa_fea = new Promise((resolver) => {
    resolver("Hola desde una promesa."); // Ejemplo con código síncrono.
  }); */

  // Se imprime el objeto de tipo promise.

  /* console.log(promesa_fea); */
  /* console.log(promesa_fea.value); // undefined --> Hay que consumir esa promesa. */

  // Se consume el contenido del objeto promise.

  /* promesa_fea.then((datos) => {
    console.log(datos);
  }); */

  // *** Arreglando el código con una promise (con resolve) *******************************

  /*  const promesa = new Promise((resolver) => {
    setTimeout(() => {
      feo++;
      console.log(`B. Proceso terminado`);
      resolver(feo); // Devuelve la variable "feo" tras actuar sobre ella.
    }, 1000);
  });

  console.log(`A. Se va a sumar uno a la variable feo = ${feo}`);
  promesa.then((datos) => {
    console.log(`C. El valor de feo es: ${datos}`);
  }); */

  // *** Promesa con resolve y reject ************************************

  //feo = `burro`; // Se cambia el valor para que falle.

  /* const promesa = new Promise((resolver, rechazar) => {
    setTimeout(() => {
      if (feo++) {
        console.log(`B. Proceso terminado`);
        resolver(feo); // Añadir la respuesta de la promesa.
      } else {
        rechazar(new Error(`El valor de feo no es válido.`)); // Se rechaza la respuesta.
      }
    }, 1000);
  });

  console.log(`A. Se va a sumar uno a la variable feo = ${feo}`);
  promesa
    .then((datos) => {
      console.log(`C. El valor de feo es: ${datos}`);
    })
    .catch((error) => {
      console.log(error.message);
    }); */

  // ****************** API fetch (solicitudes externas al objeto window) ***************************
  //
  //  fetch(acceso).then(respuesta)[.then(datos)].catch(error);
  //
  //  Parámetros:
  //    acceso    --> origen de los datos (url, API, JSON...),
  //    cabeceras --> indica las características de la transferencia de datos.
  //
  //  Propiedades interesantes:
  //    status    --> código de estado (en número),
  //    ok        --> booleano que indica si la respuesta fue exitosa (en el rango 200-299 de estado),
  //    headers   --> objeto Headers asociado a la respuesta.
  //
  //  Métodos interesantes:
  //    blob()    --> devuelve una promesa que se resuelve con un BLOB (binario),
  //    fromData  --> devuelve una promesa que se resuelve con un objeto de fomulario,
  //    json()    --> devuelve una promesa que se resuelve con un objeto JSON,
  //    text()    --> devuelve una promesa que se resuelve con una cadena de texto.

  // Fuentes de obtención de datos.
  const fichero = "./assets/feos.json";
  const fichero_falso = "guapos.json";
  const url = "https://swapi.py4e.com/api/planets/";
  const url_alternativa = "https://swapi.dev/api/planets";

  // Petición fuera del objeto window (pero en el mismo servidor).
  /* fetch(fichero) // Se realiza la petición a través del objeto XMLHttpRequest.
    .then((respuesta) => {
      console.log(respuesta); // Se obtiene una promesa como respuesta.
      return respuesta.json(); // Se consume la promesa en formato JSON.
    })
    .then((datos) => {
      // Se pasa a la siguiente función callback.
      console.log(datos); // Se hace algo con los datos.
    }); */

  /*  fetch(fichero_falso)
    .then((respuesta) => {
      console.log(respuesta);
      return respuesta.json(); // Esta conversión dará error.
    })
    .then((datos) => {
      console.log(datos);
    })
    .catch((error) => {
      // Se recoge el error y se gestiona.
      console.log(`Ha habido algún error: ${error.message}`);
    }); */

  /** Petición a un servidor externo. ********************** */
  /*  fetch(url)
    .then((respuesta) => {
      console.log("Conexión realizada con éxito.");
      console.log(respuesta);
      //return respuesta.text();
      return respuesta.json();
    })
    .then((datos) => {
      console.log("Mostrando los datos...");
      console.log(datos);
      //console.log(datos.results);
      //mostrar(datos.results, contenedor);
    }); */

  // Otra forma de trabajar con promesas.
  /* fetch(url)
    .then((respuesta) => {
      return respuesta.text(); // Devuelvo una cadena de texto.
    })
    .then((datos) => {
      console.log(datos);
      //console.log(JSON.parse(datos)); // La convierto a JSON.
    })
    .catch((error) => {
      // Problemas con la gestión de errores según el servidor.
      console.error(error);
    }); */

  // Petición simplificada ¡¡¡Cuidado con la sintaxis y el return!!!
  /* fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      console.log(datos);
    })
    .catch((error) => {
      console.error(error);
    }); */
}; // Fin del window.load.

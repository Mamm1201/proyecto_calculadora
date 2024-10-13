/* Creamos dos constantes inmutables */
const pantalla =
  document.querySelector(".pantalla"); /* Guardar lo que se hace en pantalla */
const botones =
  document.querySelectorAll(
    ".boton"
  ); /* Guardar todo lo que oprima en botones */

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    /*console.log(boton.textContent);*/
    const botonIn = boton.textContent;

    if (boton.id === "borrar") {
      if (
        pantalla.textContent.length === 1 ||
        pantalla.textContent === "Error"
      ) {
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }

    if (boton.id === "igual") {
      try {
        /* Validar si los caracteres o la expresión matematica termina 
        con un operador "+,-,*,/,0 antes de evaluar la operación" */
        if (/[\+\-\*\/]$/.test(pantalla.textContent)) {
          throw new Error("Operador al final");
        }
        if (/\/0$/.test(pantalla.textContent)) {
          throw new Error("Cero al final");
        }
        pantalla.textContent = eval(pantalla.textContent);
      } catch {
        pantalla.textContent = "¡Error!";
      }
      return;
    }

    if (pantalla.textContent === "0" || pantalla.textContent === "¡Error!") {
      pantalla.textContent = botonIn;
    } else {
      pantalla.textContent += botonIn;
    }
    if (boton.id === "limpiar") {
      pantalla.textContent = "0";
      return;
    }
  });
});

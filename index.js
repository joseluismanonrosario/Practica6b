let nombre = prompt("Cual es tu nombre");
let apellido = prompt("Cual es tu apellido");
let anoNacimiento = Number(prompt("En que año naciste"));
let edad = 2026 - anoNacimiento;
let esMayorEdad = edad > 18 ? "es mayor de edad" : "es menor de edad";

let mensaje = `Hola ${nombre} ${apellido} usted nacio ${anoNacimiento} y tienes ${edad}, y usted ${esMayorEdad}`;

let mensaje2 =
  "Hola" +
  nombre +
  " " +
  apellido +
  " usted nacio " +
  anoNacimiento +
  " y tienes " +
  edad +
  ", y usted " +
  esMayorEdad;

alert(mensaje);
alert(mensaje2);

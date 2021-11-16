"use strict"

var costoSinIva = 32000;
var costoIva = 3200;
var domicilio = 3000;
var costoTotal = costoSinIva + costoIva + domicilio;
/* mostrar cual es valor final del producto */
console.log("el costo total es de: $" + costoTotal);

console.log("el limite para usar un entero es: " + Number.MAX_SAFE_INTEGER);
var numMaximo = Number.MAX_SAFE_INTERGER;
/* la siguinete operacion  genera un error por sobrepasar el numero maximo disponible */
console.log(numMaximo + 1);
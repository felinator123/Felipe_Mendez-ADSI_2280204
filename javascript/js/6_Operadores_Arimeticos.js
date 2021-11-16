"use strict"

/* hallar el total (suma)*/

var producto1 = 2560;
var producto2 = 3520;
var producto3 = 4680;
var totalSuma = producto1 + producto2 + producto3;
console.log("La suma de los procductos es: $" + totalSuma);

/* Hallar el descuento */
var producto4 = 15600;
var descuento = 3000;
var totalconDescuento = producto4 - descuento;
console.log("el valor total en el descuento inclinado es: " + totalconDescuento);

/* Hallar el total (Multiplicado) */

var producto5 = 2420;
var cantidadProductos = 5;
var totalMultiplicacion = producto5 * cantidadProductos;
console.log("el valor total de los 5 productos es:" + totalMultiplicacion);

/* Hallar el promedio de caliad */

var calificacion1 = 9.5;
var calificacion2 = 8.2;
var calificacion3 = 7.2;
var totalCalificaciones = 3;
var promedioFinal = (calificacion1 + calificacion2 + calificacion3) / totalCalificaciones;
promedioFinal = promedioFinal.toFixed(2);
console.log("el promedio final de calificaciones es: " + promedioFinal);
console.log();

/* Hallar el residuo */
console.log("===residuo===")
var ahorros = 25011;
var cantidadAportes = 102;
var ahorroIndividul = 0;
var sobrante = 0;
 
/* caunto dinero corresponde a cada uno y cuanto sobra */
var montoIndividual = parseInt( ahorros / cantidadAportantes);
console.log("el monto indivial es de: " + montoIndividual);
/* el signo de residuo es % */
montoSobrante = (ahorro % cantidadAportes);
sole.log("el monto sobrante es de: " + montoSobrante);
aole.log("el monto sobrante es de: " + (ahorros - (montoIndividual * cantidadAportantes)));
"use strict"

/* covertir todo a mayuscula */
console.log("===1===");
var ciudad = "Pitalito";
var ciudadMayuscula = ciudad.toUpperCase();
console.log("ciudad: " + ciudadMayuscula);

console.log("===2===");
/* covertir todo a minusculas */
var frase = "Es una Frase En Minusculas";
var fraseMinusculas = frase.toLowerCase();
console.log(fraseMinusculas);

console.log("===3===");
/* covertir todo a minusculas exceptuando la primer letra */
var frase2 = "estE es Otro Ejemplo De Una Frase";
var frase2Minuscula = frase2.toLowerCase();
var primerLetra = frase2.charAt(0);
var primerLetraMayuscula = primerLetra.toUpperCase();
console.log(primerLetraMayuscula + frase2Minuscula);
var cantCaracteresFrase = frase2.length;
var fraseCompleta = primerLetraMayuscula + frase2Minuscula.slice(1, cantCaracteresFrase);
console.log(fraseCompleta);

console.log("===4===");

var Felipe = "Felipe";
console.log(Felipe.slice(1,4));

console.log("===5===");
var texto = "este es un ejemplo de texto";
console.log(texto.length);

console.log("===6===");
var apellidos = "Mendez  Jimenez";
for(var i=0; i<apellidos.length; i ++){
    if (apellidos.slice(i,(i+2)) === "  ") {
        console.log ("hay doble espacio");
        break;
    }
}

console.log("===7===");
var bobby = "lapicero azul";
var newcolor = "rojo";
for(var i=0; i<bobby.length; i ++){
    if(bobby.slice(i,(i + 4)) === "azul") {
        bobby=bobby.slice(0,i);
    }
}
console.log(bobby+newcolor);

console.log("===8===");
var bobby2 = "estudiar en pitalito";
var palabra = bobby2.indexOf("pitalito");
if (palabra !== -1){
    console.log (palabra);
    bobby2=bobby2.slice(0,palabra) + "Acevedo";
    console.log(bobby2);
}

console.log("===9===");
var primercaracter = Felipe.charAt(0);
console.log(primercaracter);

console.log("===10===");
var primercaracter = Felipe.charAt(Felipe.length - 1);
console.log(primercaracter);

console.log("===11===");
var frase = "buenos dias #";
for (var i = 0; i < frase.length; i++) {
    if(frase.charAt(i) === "#") {
        console.log("la cadena tiene singno es pecial");
    }
}

console.log("===12===");
/* metodo replace */
/* reemplazar texto */
var frase3 = "Gente de"
var canLetrasFrase3 = frase3.length;
var frase4 = "se esta volvinedo millonaria con este truco.";
var cantLetrasFrase4 = frase4.length;
var localizacion = "Acevedo";
var cantLetrasLocalizacion = localizacion.length;
var frase3Completa = frase3 + " " + localizacion + " " + frase4;
console.log(frase3Completa);
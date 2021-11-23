/* operador condicional */
"use strict"

/* condicional */
var edad = 18;
if(edad>= 18); {
    console.log("bienvenido. dirijidas a la mesa de votracion");
}

/* condicionakl */
/* anbiente 1: 20 personas */
/* ambiente 2: 40 personas */
/* bioauditorio: 100 personas */
/* informar si no hay ambiente con capacidad suficinete */
/* informar si hay surgido un error */

console.log("===condicional compuestos");
var personas =60;
console.log("el numero de personas es de:"+ personas)
if (personas<=20){
    console.log("use el ambuiente uno");
}
else if(personas>20 && personas<=40){
    console.log("use el ambiente dos");
}
else if(personas>40 && personas<=100){
    console.log("use el bioauditorio");
}
else if(personas>100){
    console.log("no hay ningun ambiente con capacidad para todos las personas");
}
else{
    console.log("a surgido un error")
}
/* sistema para de terminar el descuento del usuario */
/* si el usuario es menor a 10 años o mayor a 70 años tiene
 si descuneto sobre el valor del tiqute del 10% si el destino es cartajena
 tiene descuento adicional del 10% si la aerolinea es latam a dicho destinto, estos usuarios
 tiene descuento adicional del 10% */
var adadUsuario = 71;
var aerolineaUsuario = "latam";
var destinoUsuario = "san Andres";
var valorTiquete = 25000;
var descunto = .10;
var valorDescunto = (valorTiquete * .10);

if(edadUsuario <= 10 || edadUsuario >=70){
    valorTiquete = (valorTiquete -valorDescunto);
    if (destinoUsuario === "cartagena") {
        valorTiquete = (valorTiquete - valorDescunto);
        if (aerolineaUsuario === "latam"){
            valorTiquete = (valorTiquete -valorDescunto);
        }
    }
}console.log("valor del tiqute: $" + valorTiquete);
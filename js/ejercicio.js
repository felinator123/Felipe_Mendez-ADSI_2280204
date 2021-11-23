
"use strict"

console.log(" PRODUCTO MAS COSTOSO Y PRODUCTO MENOS COSTOSO");
var salchichon = 8000;
var huevos = 2000;
var arroz = 3000;
var pollo= 5000;

if (salchichon > huevos && salchichon > arroz && salchichon > pollo) {
    console.log("El producto más costoso es el salchichon con precio de : " + salchichon);
}
else if (huevos > salchichon && huevos > arroz && huevos > pollo) {
    console.log("El producto más costoso es los huevos con precio de: " + huevos);
}
else if (arroz > salchichon && arroz > huevos && arroz > pollo) {
    console.log("El producto más costoso es es arroz con precio de: " + arroz);
}
else if (pollo > salchichon && pollo > huevos && pollo > arroz) {
    console.log("El producto más costoso es el pollo con precio de: " + pollo);
}
if (salchichon < huevos && producto1 < arroz && salchichon < pollo) {
    console.log("El producto menos costoso es el salchichon con precio de: " + salchichon);
}
else if (huevos < salchichon && huevos < arroz && huevos < pollo) {
    console.log("El producto menos costoso son los huevos con precio de: " + huevos);
}  
else if (arroz < salchichon && arroz < huevos && arroz < pollo) {
    console.log("El producto menos costoso es el arroz con precio de: " + arroz);
}    
else if (pollo < salchichon && producto4 < huevos && pollo < arroz) {
    console.log("El producto menos costoso es el pollo con precio de: " + pollo);
}  
console.log("USUARIO Y CONTRASEÑA");

var usuario_Bd = "Felipe";
var contraseña_Bd = "32141";
var usuario_input = "Felipe";
var contraseña_input = "32141";

if (usuario_Bd === usuario_input && contraseña_Bd === contraseña_input ) {
    console.log("Bienvenido sr. Felipe");
}
else if(usuario_Bd === usuario_input && contraseña_Bd !== contraseña_input){
    console.log(" contraseña incorrecta.");
}
else if (usuario_Bd !== usuario_input && contraseña_Bd === contraseña_input){
    console.log("usuario incorrecto.");
}
else {
    console.log("acceso denegado usuario y contraseña incorrectos.");
}


console.log(" DESCUENTOS");

var compra1 = 100000;
var compra1 = 200000;
var compra3 = 300000;
var compraTotal = 600000;
var descuento1 = compra1*0.03;
var descuento2 = compra1*0.05;
var descuento3 = compra1*0.08;


console.log("valor total sin descuento: $"+ compra1);

if(compraTotal>100000 && compraTotal<200000){
    console.log("descuento $:"+ descuento1);
    console.log("valor total con descuento: $" + (compra1-descuento1));
 
}
else if( compraTotal>200000 && compraTotal<300000){
    console.log(" descuento: " + descuento2);
    console.log("valor total con descuento: $" + (compra1-descuento2));
}
else if( compraTotal>300000){
    console.log(" descuento $:" + descuento3);
    console.log("valor total con descuento: $" + (compra1-descuento3));

}
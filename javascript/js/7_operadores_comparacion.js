"use strict"
/* operadores de comparacion
>......mayor que
<......menor que
>=.....mayor o igual que
<=.....menor o igual que 
!=.....distinto sin importar tipo dato
==.....igual sin importar tipo de dato
===....estrictamente igual, incluyendo tipo  de dato 
!==....distinto (si no son estrictamente iguales)  */


/* quien o cupo el primer puesto */
var nota1 = 8.1;
var nota2 = 8.5;

/* condisionales  */
if (nota1> nota2){ 
    console.log("la nota mas alta fue de: " + nota1);
}
else if(nota2 > nota2){
    console.log("la nota mas alta fue de: " + nota2);
}
else if(nota1 === nota2){
    console.log("las dos notas tienen el mismo error"); 
}
else {
    console.log("Haga surgido un error. verifique, por favor.");
}
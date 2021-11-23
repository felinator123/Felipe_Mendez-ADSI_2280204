"use strict"

/* Generar un consecutivo del 1 al 20 */
for (var i=1; i <=20; i++){
    console.log(i);
}

/* Generar en pantalla
aprediz 1:
aprediz 2:
apresiz 3:...hasta el 20
 */
for (i = 0; i <= 20; i++) {
    console.log("Aprendiz N." + i);
}

/* recorrionedo caractares */

var aprediz1 = new Array();
aprediz1[0] = 1;aprediz1[0] = 1;
aprediz1[1] = "Yeimi katherin";
aprediz1[2] = "Peña Ariza";
aprediz1[3] = 18;
aprediz1[4] = "B. Lilla del Prao";
aprediz1[5] = 156;

/* forma 2 */
var aprediz2 = new Array(2, "Luisa Fernanda","Ramirez Montoya", 19, "B.simon Bolivar", 157);

var aprediz3 = [3, "Jesus Nicolas", "Ayerve Guarnizo", 17, "B. las palmitas", 1]

console.log("Aprendiz N. 1");
for (i = 0; i <= aprendiz1.length - 1; i++) {
    console.log(aprendiz1[i]);
}
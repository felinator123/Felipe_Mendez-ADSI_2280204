-console.log("===fecha y hora===");
var currentTime= new Date();
var HoraActual= currentTime.getHours();
console.log("la hora actual por defecto del sistema es : "+ HoraActual);
if(HoraActual> 12 ){
console.log("La hora actual en formato 12 horas es: "+ (HoraActual-12)+ "PM");
}else if(HoraActual < 12){
    console.log("La hora actual en formato 12 horas es: "+ HoraActual+ "AM");
}
else if(HoraActual=12){
    console.log("La hora actual en formato 12 horas es: "+ HoraActual+ " del medio dia");

};

console.log("===Definir un sistema que les permita saber cuántos días faltan para su próximo cumpleaños.===");

//estableciuendo las 2 fechas
var cumpleaños= new Date( "june 29 2022");
var fechaHoy=new Date();
//hallando los milisegundos
var msfechahoy=fechaHoy.getTime();
var msCumpleaños=cumpleaños.getTime();
//hallando la diferencia entre ambas fechas
var msDIFF= msCumpleaños-msfechahoy;
//establecemos los dias de diferencia
var diasDIFF= msDIFF/(1000*60*60*24);

diasDIFF= Math.floor(diasDIFF); 
console.log("faltan "+ diasDIFF +" dias para mi cumpleaños, ahorren para el regalo");

console.log("===Definir un sistema que cargue la fecha y si ese día el usuario cumple años arrojar un mensaje ===");

var fechaCumpleañosEstevan= new Date("december 9 2021");
var mescumpleañosEstevan=fechaCumpleañosEstevan.getMonth();
var diacumpleañosEstevan=fechaCumpleañosEstevan.getDate();
var fechaHoycumpleañosdia = fechaHoy.getDate();
var fechaHoycumpleañosmes= fechaHoy.getMonth();
console.log("hoy es el dia "+fechaHoycumpleañosdia+" del mes "+(fechaHoycumpleañosmes+1));

if(mescumpleañosEstevan===fechaHoycumpleañosmes && diacumpleañosEstevan===fechaHoycumpleañosdia ){
console.log("feliz cumpleaños Estevan")
}else{console.log("nadie cumple años hoy")};
 console.log("===Cuantos años voy a cumplir===");

 var fechaNacimiento= new Date("junio 29 2003");
 var anioActual= fechaHoy.getFullYear();
 var anioNac=fechaNacimiento.getFullYear();
 var anioDIFF=anioActual-anioNac;
 console.log("yo naci en el "+ anioNac);
 console.log("y estamos en el "+anioActual);

 console.log("asi que tengo "+ anioDIFF);

 console.log("asi que voy a cumplir "+ (anioDIFF+1));

 console.log("===ejemplo extra===");

 var today = new Date();


 var aniohoy=today.getDate();
 var meshoy=today.getMonth();
 console.log("hoy es el dia "+aniohoy+" del mes " +(meshoy+1));

 var diadehoy=today;
 var cumplefelipe= new Date("june 29 2022");
 var milisegundosdiadehoy=diadehoy.getTime();
 var milisegundoscumplefelipe=cumplefelipe.getTime();
 var diferenciamilis=milisegundoscumplefelipe-milisegundosdiadehoy;
 var diasdiferencia= diferenciamilis/(1000*60*60*24);

 alert(Math.floor(diasdiferencia));

 /* seterminar si ya venncio el plazo */

 var fechaHoraLimite = new Date(Date.UTC(2021, 11, 9, 8, 50, 0));
 fechaHoraLimite.setHours(8);
console.log("Fecha y Hora de vencimineto: " + fechaHoraLimite);

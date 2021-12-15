"use strict"

function llamarHora(){
    var fechaActual = new Date();
    var horaActual = fechaActual.getHours();
    var minutosAtual = fechaActual.getMinutes();
    if (horaActual < 10) {
        horaActual = horaActual -12;
    }
    if (horaActual < 10) {
        horaActual = "0" + horaActual;
    }
    if (minutosAtual < 10) {
        minutosAtual = "0" + minutosAtual;
    }
    alert("Hora Actual; " + horaActual + minutosAtual);
}
function presentacion (nombre,titulado){
    alert("Bienvenido. Nombre: " + nombre + "Titulo: " + titulado);
}

function validarDescuento(compra){
    var total = 0;
    if (compra >= 10000){
        total = compra * .90;
    }
    else if (compra >= 50000 && compra <= 9999){
        total = compra * .95;
    }
    else {
        total = compra;
    }
    return total;
}

function calculoDescuento(compra) {
    alert("costo total: " + validarDescuento(compra));
}
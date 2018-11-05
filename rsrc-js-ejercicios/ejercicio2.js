// Pequenya funcion para alerts
function mi_alert(evento){
    var keynum=evento.which;
    var pLog= document.getElementById("pLog");
    pLog.innerHTML=String.fromCharCode(keynum);
}

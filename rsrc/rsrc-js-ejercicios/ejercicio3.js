// Pequenya funcion para alerts

var noHayNadieSalundando=true;

function comenzarSaludos(){
    if (noHayNadieSalundando){	
        noHayNadieSalundando=false;
        setInterval(function(){
            if(!noHayNadieSalundando){
                alert("Hello");
                }
            }, 3000);
        }
    else{
        console.log("hayAlguienSaludando ya en marcha");
    }
}

function pararSaludos(){
    noHayNadieSalundando=true;
}

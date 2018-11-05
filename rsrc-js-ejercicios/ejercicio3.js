// Pequenya funcion para alerts

var semaforo=false;

function comenzarSaludos(){
    if (!semaforo){	
	semaforo=true;
	setInterval(function(){
	    if(semaforo){
		alert("Hello");
	    }
	}, 3000);
    }
    else{
	console.log("Semaforo ya en marcha");
    }
}

function pararSaludos(){
    semaforo=false;
}

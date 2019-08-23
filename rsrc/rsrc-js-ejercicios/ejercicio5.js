// Pequenya funcion para alerts

var semaforo=false;
var intervalId;
console.log(intervalId);

function cronoContinuar(){
    if (!semaforo){	

	semaforo=true;
	if (intervalId==null){
	    intervalId= setInterval(function(){
		if(semaforo){
		    var pSegundos = document.getElementById("crono");
		    var segundos=parseInt(pSegundos.innerHTML);
		    segundos++;
		    pSegundos.innerHTML=segundos;
		}
	    }, 1000);
	}
	document.getElementById("bContinuar").disabled=true;
    }
    else{
	console.log("Contador ya en marcha");
    }
}

function cronoParar(){
    document.getElementById("bContinuar").disabled=false;
    document.getElementById("bContinuar").value="Continuar";    
    semaforo=false;
}

function cronoReiniciar(){
    semaforo=false;
    window.clearInterval(intervalId);
    intervalId = null;
    document.getElementById("bContinuar").value="Empezar";
    document.getElementById("bContinuar").disabled=false;
    document.getElementById("crono").innerHTML="0";
}

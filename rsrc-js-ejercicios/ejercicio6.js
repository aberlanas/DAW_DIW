// Pequenya funcion para alerts

var tabla= new Array(100);

function celdaTocada(celda){
    console.log(celda.id);
    tabla[celda.id]=0;
    
}

function coloreaTabla(){
    console.log("coloreando");
    var x;
    for (x=0;x<100;x++){
	var celda = document.getElementById(String(x));
	if (tabla[x] == 1){
	    celda.style.background="#888888";
	}else if (tabla[x] == 0){
	    celda.style.background="#000000";
	}
	
    }
}


function comienzo(){
    var x;
    for (x=0;x<100;x++){
	tabla[x]=1;
    }
    setInterval(function(){
	coloreaTabla();
    }, 1000);
}

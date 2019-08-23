// Pequenya funcion para alerts

var tabla= new Array(100);

function celdaTocada(celda){
    console.log(celda.id);
    tabla[celda.id]=0;
    celdaColorines();
    celdaColorines();
    coloreaTabla();
}

function colorinGenerador(){
    return Math.floor(Math.random()*16777215).toString(16);
}

/*
function vigilaColor(celda){
    await sleep(3000);
    tabla[celda]=colorinGenerador();
    coloreaTabla();
}
*/

function celdaColorines(){
    var libre = false;
    var celdaRand = 0;
    var coloringo = "000000";
    while (!libre){
        celdaRand = Math.floor(Math.random()*100);
        if (tabla[celdaRand]==0){
            celdaRand = Math.floor(Math.random()*100);
        }else{
            tabla[celdaRand]=colorinGenerador();
            libre = true;
        }
    }
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
        }else{
            celda.style.background="#"+tabla[x];
        }
        
    }
}


function comienzo(){
    var x;
    for (x=0;x<100;x++){
        tabla[x]=1;
    }
    // Coloreamos la tabla entera
    coloreaTabla();

}

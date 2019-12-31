// This script is licensed under GPL v3
//
// author : Angel Berlanas Vicente
// email  : <berlanas_ang@gva.es>

let puntuaciones = new Object();
puntuaciones.rojo = 0;
puntuaciones.verde = 0;
puntuaciones.azul =0;
puntuaciones.amarillo = 0;

const maxCanciones = 78;

let vPaths = [];
let vCanciones = [];

function zoomIn() {
    console.log(this);
    let textoEscondido = this.querySelector(".escondido");
    console.log(textoEscondido);
    textoEscondido.classList.toggle("escondido");
}

function buildBoard() {

    for (i = 0;i<maxCanciones;i++){
        let item = document.createElement("cancion");
        item.innerHTML = i+1;
        document.querySelector("canciones").appendChild(item);
        item.dataset.numero=i+1;
        vCanciones.push(i+1);

    }
}


function sortObject(obj) {
    var arr = [];
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            arr.push({
                'key': prop,
                'value': obj[prop]
            });
        }
    }
    arr.sort(function(a, b) { return b.value - a.value; });
    //arr.sort(function(a, b) { a.value.toLowerCase().localeCompare(b.value.toLowerCase()); }); //use this to sort as strings
    return arr; // returns array
}

function refrescaMarcador(){
    let marcador=document.querySelector("marcador");
    marcador.innerHTML="";
    let marcadorOrdenado= sortObject(puntuaciones);
    marcadorOrdenado.forEach(item => {
        console.log(item);
        let podium=document.createElement("podium");
        podium.classList.add(item.key);
        podium.innerText=item.value;
        marcador.appendChild(podium);
    });
}

function dameCancion(){
    console.log(" - Dame Cancion");

    let randomCancion = Math.floor(Math.random() * vCanciones.length-1) + 1 ;
    let nextCancion = vCanciones[randomCancion];

    vCanciones.splice(randomCancion,1);

    document.querySelector("resultado").textContent=nextCancion;
}

function marcaCancion(equipo){

    let auxCancion = parseInt(document.querySelector("resultado").innerHTML);
    let auxDivCancion = document.querySelector(`[data-numero="${auxCancion}"]`);
    auxDivCancion.classList.add(equipo);
    
}

function sumaPuntos(){
    let auxPuntos = document.querySelector("input[name='puntos']").value;
    let equipo = this.dataset.equipo;
    
    puntuaciones[equipo] += parseInt(auxPuntos);

    refrescaMarcador();
    marcaCancion(this.dataset.equipo);

}

function playLargo(){
    let auxCancion = document.querySelector("resultado").innerHTML;
    document.querySelector("audio").src="canciones/"+auxCancion+".mp3";

    document.querySelector("audio").play();
    document.querySelector("audio").removeEventListener("canplaythrough",paratediez, false); 
}

function paratediez() {
    setTimeout(function(){
        document.querySelector("audio").pause();
    },10000);
}

function playCorto(){
    let auxCancion = document.querySelector("resultado").innerHTML;
    document.querySelector("audio").src="canciones/"+auxCancion+".mp3";
    document.querySelector("audio").play();

    document.querySelector("audio").addEventListener("canplaythrough",paratediez, false); 

}

function bindEvents(){
    console.log(" * Asociando Eventos");
    // Boton de tirar
    document.querySelector("btirar").addEventListener("click",dameCancion);

    document.querySelector("bazul").addEventListener("click",sumaPuntos);
    document.querySelector("bverde").addEventListener("click",sumaPuntos);
    document.querySelector("brojo").addEventListener("click",sumaPuntos);
    document.querySelector("bamarillo").addEventListener("click",sumaPuntos);

    document.querySelector("bcorto").addEventListener("click",playCorto);
    document.querySelector("blargo").addEventListener("click",playLargo);
}


function init() {
    buildBoard();
    bindEvents();
}

window.onload = init;
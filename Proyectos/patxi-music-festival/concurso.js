// This script is licensed under GPL v3
//
// author : Angel Berlanas Vicente
// email  : <berlanas_ang@gva.es>

let puntRojo = 0;
let puntVerde = 0;
let puntAmarillo = 0;
let puntAzul = 0;

function zoomIn() {
    console.log(this);
    let textoEscondido = this.querySelector(".escondido");
    console.log(textoEscondido);
    textoEscondido.classList.toggle(".escondido");
}

function replenishBoard(json) {

    console.log(json);

    json.Sheet1.forEach(cancion => {

        let item = document.createElement("cancion");

        item.innerHTML = cancion.numero;

        let escondidos = document.createElement("p");
        escondidos.classList.toggle("escondido");
        escondidos.innerHTML = cancion.cancion + "<br>" + cancion.interprete + "<br>" + cancion.alumno;
        item.appendChild(escondidos);

        item.dataset.cancion = cancion.cancion;
        item.dataset.interprete = cancion.interprete;


        item.dataset.corto = 10;


        // Zona de eventos
        item.addEventListener("mouseover", zoomIn);


        document.querySelector("canciones").appendChild(item);

    });
}


function buildBoard() {
    fetch('canciones.json')
        .then(response => response.json())
        .then(auxjson => {
            json = auxjson;
            replenishBoard(json);
        });
}



function snow(num, speed) {
    if (num > 0) {
        setTimeout(function() {
            $('#drop_' + randomInt(1, 250)).addClass('animate');
            num--;
            snow(num, speed);
        }, speed);
    }
};

function snowDrop(num, position) {
    if (num > 0) {
        var drop = '<div class="drop snow" id="drop_' + num + '"></div>';

        $('body').append(drop);
        $('#drop_' + num).css('left', position);
        num--;
        snowDrop(num, randomInt(60, 1280));
    }
};

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};



function init() {
    buildBoard();
    buildScore();

    //make snow
    snowDrop(150, randomInt(1035, 1280));
    snow(150, 150);
}

window.onload = init;
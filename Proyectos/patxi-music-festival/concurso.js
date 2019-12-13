// This script is licensed under GPL v3
//
// author : Angel Berlanas Vicente
// email  : <berlanas_ang@gva.es>


function zoomIn(){
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
	escondidos.innerHTML=cancion.cancion+"<br>"+cancion.interprete+"<br>"+cancion.alumno;
	item.appendChild(escondidos);
	
        item.dataset.cancion = cancion.cancion;
	item.dataset.interprete = cancion.interprete;
	
	
        item.dataset.corto = 10;


	// Zona de eventos
	item.addEventListener("mouseover",zoomIn);
	
	
        document.querySelector("canciones").appendChild(item);

    });
}


function buildBoard(){
fetch('canciones.json')
    .then(response=>response.json())
    .then(auxjson => {
	json=auxjson;
	replenishBoard(json);
    });
}

function init() {
    buildBoard();
}

window.onload = init;

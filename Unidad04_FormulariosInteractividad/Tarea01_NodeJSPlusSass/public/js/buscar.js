
const fuentesUrl = "http://mapas.valencia.es/lanzadera/opendata/cia_fuentes/JSON";

const fetchPromesa = fetch(fuentesUrl);

function filtroLetra(elemento){
    //console.log(elemento);
    let letra=document.querySelector(`input[name="calle"]`).value;
    return elemento.properties.calle.startsWith(letra);
}

function buscar(){

    fetchPromesa.then(response => {
	return response.json();
    }).then(respuesta =>{
	const resultado=respuesta.features.filter(filtroLetra);
	console.log(resultado);
    });

}

function init(){

    document.querySelector(`input[type="button"]`).addEventListener("click",buscar);
	
}


window.onload=init;
    

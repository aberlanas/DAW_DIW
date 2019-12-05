
const fuentesUrl = "http://mapas.valencia.es/lanzadera/opendata/cia_fuentes/JSON";


function filtroLetra(elemento){
    //console.log(elemento);
    let letra=document.querySelector(`input[name="calle"]`).value;
    return elemento.properties.calle.startsWith(letra);
}

function toUpp(){
    document.querySelector(`input[name="calle"]`).value=document.querySelector(`input[name="calle"]`).value.toUpperCase();
}

function buscar(){

    const fetchPromesa = fetch(fuentesUrl);

    fetchPromesa.then(response => {
	return response.json();
    }).then(respuesta =>{
	const resultado=respuesta.features.filter(filtroLetra);
	console.log(resultado);

	let listado=document.createElement("ul");
	resultado.forEach(fuente=>{
	    console.log(fuente.properties.calle);
	    let calleli=document.createElement("li");
	    calleli.innerHTML=fuente.properties.calle+" -- ["+fuente.geometry.coordinates+"]";
	    listado.appendChild(calleli);	    
	});
	document.querySelector(".resultados").innerHTML="";
	document.querySelector(".resultados").appendChild(listado);
    });

}

function init(){

    document.querySelector(`input[type="button"]`).addEventListener("click",buscar);
    document.querySelector(`input[type="text"]`).addEventListener("input",toUpp);
}


window.onload=init;
    

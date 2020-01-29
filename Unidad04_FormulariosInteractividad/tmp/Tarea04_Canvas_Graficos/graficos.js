function buildGrafico(){
    console.info(" * Construyendo grafico ");
}

function loadListeners(){
    document.querySelector("input[name='grafiqueame']").addEventListener("click",buildGrafico);
}


function init(){
    console.log(" * Init ");
    loadListeners();
    
}

window.onload=init;
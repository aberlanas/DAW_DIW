
let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://mapas.valencia.es/lanzadera/opendata/OI-OBRAS-EJECUTADAS/JSON');
xhr.onload = function() {
    if (xhr.status === 200) {
        // Si todo ha ido bien
        // asignamos la respuesta a una variable
        jsonResponse = xhr.responseText;

        // ahora aun se trata de un texto, 
        // vamos a transformarla en objeto
        jsonObjeto = JSON.parse(jsonResponse);

        // Veamoslo en consola si se quiere 
        //console.log(jsonObjeto.features);

        // Recorremos hora todos elementos de obras ejecutadas
        jsonObjeto.features.forEach(element => {
            // Le hacemos un console.log
            //console.log(element);

            // Obtenemos la tabla de obras
            var tbl = document.getElementById("tablaObras");

            // Creamos un tr
            var tr = document.createElement('tr');

            // Creamos un td
            var td = document.createElement('td');

            // Creamos un txt con el contenido obtenido
            var txt = document.createTextNode(element.properties.titulo);
            //console.log(element.properties.titulo);

            // Anyadimos en cascada los elementos
            td.appendChild(txt);
            tr.appendChild(td);
            tbl.appendChild(tr);

        });
        
        }
    else {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send();
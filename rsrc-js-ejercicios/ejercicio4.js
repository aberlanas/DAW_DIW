// Pequenya funcion para alerts

var DNIString="TRWAGMYFPDXBNJZSQVHLCKE";

function dniPorLetra(evento){
    var keynum = evento.which;
    var letra = String.fromCharCode(keynum).toUpperCase();
    var indice = DNIString.indexOf(letra);
    var pTexto = document.getElementById("pTexto");
    var pTextoContent="";
    var x=indice;
    while (x<=99){
	console.log(x);
	pTextoContent+=x+"<br>";
	x=x+23;
    }
    pTexto.innerHTML=pTextoContent;
}

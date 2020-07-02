<?php
require_once "biblioteca.php";

cabecera("Inicio");
if (isset($_REQUEST["nombre"])) {
    print "<p>Nombre: $_REQUEST[nombre]</p>";
}
?>

<form autocomplete="off" action="index.php">
  <div class="autocomplete" style="width:300px;">
    <input id="myInput" type="text" name="nombre" placeholder="Escriba un nombre">
  </div>
  <input type="submit">
</form>

<script>

function autocomplete(inp) {
  /*the autocomplete function takes one argument, the text field element*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      var resultado;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) return false;
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
     	
      // Migrando a JS 2020.

      // Establecemos la URL del fetch
      let apiURL = "ajax-backend.php";

      // Creamos un objeto formData para enviarle
      // los parametros a PHP en $_REQUEST de una manera
      // estandar.
      let formData = new FormData();
      formData.append('term',val);
      
      // Realizamos una peticion con fetch.
      // si funciona -> Obtenemos el objeto json en res.json()
      // y enese momento ya tenemos el array (response)
      fetch(apiURL,{
      		method: 'POST',
		      body: formData
      }).then(res=> res.json())
	      .then(response => {

          // Una vez tenemos response recoremos el array por cada uno de los autores.
          // construyendo el eleento, asignandole valor y comportamiento (eventos).
		      response.forEach((autor) => {
	          console.log(autor)
	          b = document.createElement("DIV");
            b.innerHTML = autor;
            //insert a input field that will hold the current array item's value:
            b.innerHTML += "<input type='hidden' value='" + autor + "'>";
	          //execute a function when someone clicks on the item value (DIV element):
            b.addEventListener("click", function(e) {
              //insert the value for the autocomplete text field:
              inp.value = this.getElementsByTagName("input")[0].value;
              //close the list of autocompleted values,
              //(or any other open lists of autocompleted values:
              closeAllLists();
	          });
            // Lo anyadimos a la lista.
			      a.appendChild(b);
 	        });
	      });
	   });
	
      
  
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"));
</script>

<?php
pie();

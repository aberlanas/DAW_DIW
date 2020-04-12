const registralo = () =>{
    console.log("Se ha registrado");
    const formulario = document.querySelector('form');
    const formData = new FormData(formulario);
    console.log(formData.get("nombre"));
    console.log(formData.get("cookies"));

    const resultado = fetch('/api/registraUsuarios',formData).then(
        (response ) => {
        return response.json();
        }
        ).then( 
        (miJson) => {
        console.log(miJson);
        }
        );
    }


const init = () => {
    document.querySelector('input[type="button"]').addEventListener("click",registralo);
}

window.onload=init();
const registralo = () =>{
    console.log("Se ha registrado");
    const formulario = document.querySelector('form');
    let formData = new FormData(formulario);
    //formData.method="POST";
    
    console.log(formData.get("nombre"));
    console.log(formData.get("cookies"));
    console.log(formData.get("method"));

    fetch('/api/registraUsuarios',{
            method:'POST',
            body:formData}).then(
        (response ) => {
        return response.json();
        }
        ).then( 
        (miJson) => {
        console.log(miJson);
        console.log(formData.get("nombre"));
        }
        );
    
    };

const init = () => {
    document.querySelector('input[type="button"]').addEventListener("click",registralo);
}

window.onload=init();
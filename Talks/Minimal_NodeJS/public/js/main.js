function registralo(ev) {
  ev.preventDefault();

  console.log("Se ha registrado");
  let formulario = document.querySelector("form");
  let formData = new FormData(formulario);
  let url = "/api/users/register";
  //formData.method="POST";

  console.log(formData.get("nombre"));
  console.log(formData.get("cookies"));

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(formData), 
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
}

function init() {
  document
    .querySelector('input[type="submit"]')
    .addEventListener("click", registralo);
}

window.onload = init;

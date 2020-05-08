function registralo(ev) {
  ev.preventDefault();

  console.log("Se ha registrado");
  let formulario = document.querySelector("form");
  let formData = new FormData(formulario);
  let url = "/api/users/register";

  let info = {
    name: formData.get("name"),
    cookies: formData.get("cookies")
  }
  
  fetch(url, {
    method: 'POST',
    body:  JSON.stringify(info),
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

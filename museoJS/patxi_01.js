let datos = [
    {nombre: "Nacho", telefono: "966112233", edad: 41},
    {nombre: "Ana", telefono: "911223344", edad: 36},    
    {nombre: "Mario", telefono: "611998877", edad: 15},    
    {nombre: "Laura", telefono: "633663366", edad: 17}]; 

// Funcion nuevaPersona(persona) usando una promesa 
let promesaNuevaPersona = persona => {
    return new Promise((resolve, reject) => {
        let resultado = datos.filter(per => persona.telefono == per.telefono);
        if (resultado.length == 0){
            datos.push(persona);
            resolve(persona);
        }else{
            reject(persona.telefono);
        }
    });
};
    
/* Funcion borrarPersona(telefono) usando una promesa */ 
let promesaBorrarPersona = telefono => {
    return new Promise((resolve, reject) => {
        let resultado = datos.every(persona => persona.telefono != telefono);
        if (resultado){
            reject(telefono);
        }else{
            let p = datos.filter( (persona) => persona.telefono == telefono );
            datos = datos.filter( (persona) => persona.telefono != telefono );
            resolve(p); 
        }
    });
};


// Programa principal
let nuevaPersona = (persona) => promesaNuevaPersona(persona).then(resultado => {
    console.log("Nueva persona insertada: ", resultado);
    return resultado;
}).catch(error => {
    console.log("Error: el teléfono %o ya existe",error);
});

let borrarPersona = (telefono) => promesaBorrarPersona(telefono).then(resultado => {
    console.log("Persona eliminada: ", resultado);
}).catch(error => {
    console.log("Error: no se encontraron coincidencias con el telefono %o",error);
});

setTimeout( () =>{
    nuevaPersona({nombre: "Juan", telefono:"965661564", edad: 60});
    nuevaPersona({nombre: "Rodolfo", telefono:"910011001", edad: 20});
    nuevaPersona({nombre: "Maria", telefono:"910011001", edad: 22});
    
    },100);

setTimeout( () =>{
    borrarPersona("910011002");
    borrarPersona("910011001");
    },100);

setTimeout( () => console.log(datos),100);

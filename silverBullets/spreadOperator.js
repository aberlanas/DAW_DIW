/*
  This script author is Ruben Saiz
  A FP Student from IES La Senia

  You can follow their work here:

  https://github.com/MiYazJE/

*/

function get100() {
    return fetch(pokemonsURL)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        return json.results

    })
    .catch(err => console.log(err));
}

async function init() {
    
    pokemons = await get100();
    pokemons = [...pokemons];
    
    pokemons.forEach(element => {
        console.log(element)
    });
    
}

let pokemonsURL = "http://pokeapi.co/api/v2/pokemon/";
let pokemons =[];
window.onload = init;

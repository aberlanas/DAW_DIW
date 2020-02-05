/*
  This script author is Raul Gomez
  A FP Student from IES La Senia

  You can follow their work here:

  https://github.com/RaulGomez99
*/

function get100() {

    return fetch('http://pokeapi.co/api/v2/pokemon/')
    .then(res => {
        return res.json();
    }).then(resjson => {
        console.log(resjson);
        return resjson;
    }).catch(err => {
        console.log(err);
    });
}


 function getThisPokemon(url) {
    
    return  fetch(url)
    .then( res => {
        return  res.json();
    }).then( resjson => {
        return  resjson;
    }).catch(err => {
        console.log(err);
    })
}

function crearFichas(pokemons) {

    console.log(pokemons)
}

async function init() {
    
    pokemonsURL = await get100();

    pokemonsURL.results.forEach(pokemon => {
        pokemons.push(getThisPokemon(pokemon.url));
    })

    Promise.all(pokemons).then(pokes=>{
        pokemons = pokes;
        crearFichas(pokemons)
    })
}

let pokemonsURL;
let pokemons =[];

window.onload = init;

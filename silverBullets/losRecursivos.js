function get100() {
    return fetch(urlActual)
        .then(res => res.json())
        .then(json => {
            urlActual = json.next;
            return json.results

        })
        .catch(err => console.log(err));
}

async function init() {

    if (urlActual == null) {
        pokemons.forEach(pokemon => console.log(pokemon))
        return;
    }

    let newPokemons = await get100();
    newPokemons.forEach(pokemon => pokemons.push(pokemon));

    init();
}

let pokemonsURL = "http://pokeapi.co/api/v2/pokemon/";
let urlActual = pokemonsURL;
let pokemons = [];
window.onload = init;

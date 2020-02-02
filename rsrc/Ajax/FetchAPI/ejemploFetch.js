// Some useful values

const url = "https://api.chess.com/pub/player/aberlanas/games"

function init(){

    let header = {
	method: 'GET'
    };

    fetch(url,header)
	.then((res) => {
	    return res.json();
	})
	.then((data) => {
	    console.log(data);
	    // DO STUFF HERE
	    data.games.forEach(game =>{
		console.log(game);
		let divGame = document.createElement("div");
		let negras = document.createElement("a");
		negras.setAttribute("href",game.black);
		negras.innerText="Negras";
		divGame.appendChild(negras);
		document.querySelector("body").appendChild(divGame);
	    });
	    
	});
    
}

window.onload=init;

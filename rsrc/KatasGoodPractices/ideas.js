
// Format 

console.log("%c Esto es un comentario super majo",'font-size:30px');


// Warnings

console.warn(" Aviso ");


// Error

console.error(" Error" );


// Info

console.info(" Informacionutil");

// Testing

console.assert(p.classList.contains('angelClass'));


// DOM Elements

console.log(p);
console.dir(p);


// Grouping things 

console.group(`${dog.name}`)

console.groupEnd(`${dog.name}`);


// Timing
//
console.time('Fetching data');
fetch('https://api.github.com/users/aberlanas/')
	.then(data => data.json())
	.then(data => {
		console.timeEnd('Fetching data');
		console.log(data);
	});

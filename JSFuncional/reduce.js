#!/usr/bin/node

const alumnos = [
	[ "toni" , 30 ] , 
	["kevin", 25 ] ,
	["luciano",31] 
	];

console.log(alumnos);

console.log(alumnos.reduce((suma,alumno) => suma+=alumno[0]+"," , "Los alumnos son: "));

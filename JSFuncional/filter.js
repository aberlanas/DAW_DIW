#!/usr/bin/node

const alumnos = [ "toni","kevin","luciano"];

console.log(alumnos);

console.log(alumnos.filter(alumno => {
	return alumno.startsWith('k') ;
	}
));

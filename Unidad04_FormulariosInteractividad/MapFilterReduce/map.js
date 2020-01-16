#!/usr/bin/node 


console.log("Hola Mundo");

function multiplica(a){
    return a*a;
}

console.log([2,3,4,5,"a",7,8].map(multiplica));

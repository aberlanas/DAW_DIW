#!/usr/bin/node

const bebidas = [ "cafe","te","cerveza"];
const bebidas2 = bebidas.map(bebida => [bebida,"yo"]).flat();
console.log(bebidas);
console.log(bebidas2);
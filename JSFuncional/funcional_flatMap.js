#!/usr/bin/node

const bebidas = [ "😣","🙄","😍"];
const bebidas2 = bebidas.map(bebida => [bebida,"yo",33]).flat();
console.log(bebidas);
console.log(bebidas2);
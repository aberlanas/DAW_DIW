const alfabeto = [ 'A','B','C','D','E','F'];
const numeros = [ '1','2','3','4','5','6'];

const a = alfabeto[0];

const [a, b] = alfabeto;

const [a,,c];

const [a,,c,...resto] = alfabeto;

console.log(a);
console.log(b);


///

cons newArray = [...alfabeto,...numeros];
alfabeto.concat(numeros);

// Funciones


function multiplicaYSuma(a,b){
        return(a*b,a+b);
}

const resultado = multiplicaYSuma(2,3)

const [mult,suma] = multiplicaYSuma(2,3)

const [ mult,suma, division="no division"]

// Objetos a lo loco


// URL
// https://www.youtube.com/watch?v=NIq3qLaHCIs
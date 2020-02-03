// Ejemplo de herencia en JS

class Dios{
    let nombre = "Sin nombre";
    static loa = " Salve ";

    constructor({nombre}){
	this.nombre = nombre;
    }

    salve(){
	return `${Dios.loa} ${this.nombre}`;
    }
}

class Profundo extends Dios{

    let lugar = "";

    constructor({ nombre, lugar}){
	super({nombre});
	this.lugar = lugar;
    }

    salve(){
	return `${super.salve()}, desde las Profundidades de ${this.lugar}`;
    }
}

const diosito = new Profundo({nombre:"Cthulhu",lugar:"Ryleh"});
console.log(diosito.salve());

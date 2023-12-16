class Torta {
    constructor(sabor, cobertura, relleno) {
        this.sabor = sabor;
        this.cobertura = cobertura;
        this.relleno = relleno;
    }

    describir() {
        console.log("Soy una Torta de " + this.sabor, " , mi relleno es de "+ this.relleno + ", Mi cobertura es "+ this.cobertura);
    }
}


let torta1 = new Torta ("chocolate", "crema", "dulce de lenche")

let torta2 = new Torta ("Vainilla", "frutos rojas", "chocolate")

tortaliteral = {
    sabor: "Frutilla",
    relleno: {
        capa1:  {ingrediente: "mani", ingrediente2: "crema"},
        capa2:  "dulce de leche",
    },
    cobertura: "mermelada"
}

console.log(tortaliteral);

console.log((torta1));

torta1.describir()
torta2.describir()

console.log((tortaliteral.relleno.capa1));
console.log(tortaliteral.relleno.capa1.ingrediente);
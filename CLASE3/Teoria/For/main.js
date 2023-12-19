const paisesDeAmerica = ["Argentina", "Bolivia", "uruguay", "brasil", "Chile"]
//Agregar un país a la lista de países de América.
paisesDeAmerica.push("Venezuela");
for (let i= 0; i< paisesDeAmerica.length; i++){
    console.log(paisesDeAmerica);
}



const paises = ["Argentina", "Bolivia", "uruguay", "brasil", "Chile", "italia", "francia", "EEUU", "Australia"]

for (let pais of paises) {
    //Código que se ejecuta para cada iteración del bucle.
    console.log(pais);
}


const productos = [
    {id: 1, nombre: "PC",      precio: 1000, categoria: "Tecnologia", stock: 10},
    {id: 2, nombre: "CELULAR", precio: 1500, categoria: "Tecnologia", stock: 50},
    {id: 3, nombre: "TV 55",   precio: 800, categoria: "entretenimiento", stock: 5},
    {id: 4, nombre: "VENTILADOR", precio: 400, categoria: "aire", stock: 40},
    {id: 5, nombre: "BICICLETA", precio: 80, categoria: "recreativo", stock: 8},
]

for (let producto of productos) {
    //Código que se ejecuta para cada iteración del bucle.
    console.log(producto);
}
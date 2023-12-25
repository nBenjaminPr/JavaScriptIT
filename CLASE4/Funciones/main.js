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

const botonesAgregar = document.getElementsByClassName("btn-agregar")

for (let boton of botonesAgregar) {
    //Código que se ejecuta para cada iteración del bucle.
    boton.addEventListener ("click" , function() {
        console.log("Agregamos el producto: ", boton.productos);
    
})
}

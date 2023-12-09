let A = true
let B = false
let C = true
let D = true

console.log( "------------");

let resultado = ((A && (B || C)) && D)

console.log( resultado );




let edad = -45

if ((typeof edad === "numbre") && (edad > 0) && (edad >= 18)){
    console.log("La persona es mayor");
}else if ((typeof edad === "numbre") && (edad > 0) && (edad < 18)){

    console.log("La persona es menor");

}else{
    console.log("Verifica los datos");
}


let color = "rojo"


if (color === "rojo" || color === "amarillo" || color === "azul"){

    console.log("el color es primario");
}else if (color === "azul"){

} else {
    console.log("El color NO es primario");
}

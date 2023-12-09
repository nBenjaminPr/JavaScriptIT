// for ( let i = 0; i <= 10; i=i+1){

//     console.log(i);

// }

let tabla = 1;
// let resultado = 0;
// for (let i = 1; i <= 10; i = i + 1) {
//     resultado = i * tabla;
//     console.log(tabla + " x " + i + " = " + resultado);
// }

let resultado = 0;
for (let j = 1; j <= 10; j = j + 1) {
    let tabla = j;
    console.log("-----------");
    console.log("Tabla del " + j);
    for (let i = 1; i <= 10; i = i + 1) {
        resultado = i * tabla;
        console.log(tabla + " x " + i + " = " + resultado);
    }
}



// let i = 0 (es el valor inicial)
// i <= 10 ( si es verdadero se ejecuta el bloque de codigo)
// i=i+1 (operacion de salto = se suma 1 a i) i++ o i += 1
// 
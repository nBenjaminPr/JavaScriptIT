let edad = prompt("ingrese tu edad")


// palabra_clave (parametro "EVALUA UN VERDADERO O FALSO") {
//     codigo a ejecutar
// }

// 5 == "5" (igualdad es debil)
// 5 === "5" (igualdad es estricta) se compara los string

if (edad >= 18) {
    let nombre = prompt ("ingresu nombre")
    if (nombre === "Pedro"){
        console.log("Hola", nombre);
    }else{
        console.warn ("Tiene 20 pero no sos pedro")
    }
}else if (edad <= -1) {
    console.error("No llegaste flaco")
} else {
    console.error ("Sos menor de edad")
}



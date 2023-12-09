let nombre = prompt ("ingrese su nombre o ESC para salir")

while (nombre !== "ESC") {
    switch (nombre) {
        case "jorge":
            alert ("Bienvenido!! " + nombre)
            break;
    
        default:
            alert ("Usuario desconocido " )
            break;
    }

    nombre = prompt ("ingrese su nombre o ESC para salir")
}
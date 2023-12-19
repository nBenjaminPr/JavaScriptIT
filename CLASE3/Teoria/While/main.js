const paises = ["Argentina", "Bolivia", "uruguay", "brasil", "Chile", "italia", "francia", "EEUU", "Australia"]

let continuar = true

while (continuar === true) {
    let paisAbuscar = prompt ("Ingresa el pais a buscar")
    let indice = paises.indexOf(paisAbuscar)
    if (indice > -1) {
        console.log( "El pais ingresado lo tenemos: ", indice);
        continuar = false
    }else{
        alert("Ese país no existe, intenta de nuevo");
    }
}

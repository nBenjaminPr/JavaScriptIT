let edad = prompt("ingrese tu edad")

if (edad >= 20) {
    let nombre = prompt ("ingresu nombre")
    if (nombre === "Pedro"){
        console.log("Hola", nombre);
    }else{
        console.warn ("Tiene 20 pero no sos pedro")
    }
}else {
    console.error("Eres menor de 20 años")
}
let dia = 8;
let nombreDelDia = " ";

switch (dia) {
    case 1:
        nombreDelDia = "lunes"
        break;

        case 2:
            nombreDelDia = "martes"
            break;

            case 3:
                nombreDelDia = "miercoles"
                break;

                case 4:
                    nombreDelDia = "jueves"
                    break;

                    case 5:
                        nombreDelDia = "viernes"
                        break;

                        case 6:
                            nombreDelDia = "sabado"
                            break;

                            case 7:
                                nombreDelDia = "domingo"
                                break;

    default:
        nombreDelDia = "dia no valido"
        break;
}

console.log();("hoy es: ", nombreDelDia);




let estadoCivil = 2;
let tipoDeEstado = "";

switch (estadoCivil) {
    case 1:
        tipoDeEstado = "soltero"
        
        break;

        case 2:
        tipoDeEstado = "divorciado"
        
        break;

        case 3:
        tipoDeEstado = "viudo"
        
        break;

        case 4:
        tipoDeEstado = "casado"
        
        break;


    default:
        estadoCivil = "estado no valido"
        break;
}

console.log("Su estado civil es ", tipoDeEstado); 


let color = "rojo"

switch (color) {
    case "rojo":
        console.log("el color es primario");
        break;
        case "azul":
        console.log("el color es primario");
        break;
        case "amarillo":
        console.log("el color es primario");
        break;

    default:
        console.log("el color no es primario");
        break;
}
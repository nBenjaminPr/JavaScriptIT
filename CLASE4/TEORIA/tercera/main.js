// lo que esta en scope local solo existe dentro del scope. Este es prioritario 
// lo que esta en scope global existe cualquier scope (locales)

let nombre = "pepegrillo" //es global por que no esta en un bloque
let nombre2 = "mariano" 

{
    let nombre2 = "juanchito"
    console.log(nombre);
    console.log(nombre2); //es local y tiene que estar dentro del bloque.

}


{

}


console.log(nombre2);

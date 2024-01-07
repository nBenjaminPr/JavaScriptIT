//bloque de codigo o ambito local
function suma1(a,b) {
    
    return a + b

}
console.log(suma1(2,2)); 


//funcion anonima
const suma2 = function (a,b) {
    return a + b
} 

console.log(suma2 (3,2)); 


// arrow function
const suma3 = ( a,b ) => {
    return a+b;
}
console.log(suma3 (4,2)); 


//retorno implicito por linea unica
const suma4 = ( a,b ) => a+b;  
console.log(suma4 (5,2)); 


//si tengo un solo parametro puedo omitir lo ()
const suma5 = ( a) => a *2;  
console.log(suma5(4)); 
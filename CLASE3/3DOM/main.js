let ahora = new Date ()

console.log(ahora);

let fecha2 = new Date (2023,11,16)

// console.log((ahora.getDay()));
// console.log(ahora.getDate());
// console.log(ahora.getMonth());

// console.log(fecha2);


let casiNavidad = new Date ( 2023,11,24,23,59,59)

let milisParanavidad = casiNavidad-ahora

console.log(milisParanavidad);

let milisPorDia = 24*60*60*1000

console.log(milisPorDia);

let diasParaNavidad = milisParanavidad / milisPorDia
console.log(diasParaNavidad);
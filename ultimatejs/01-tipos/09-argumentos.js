function suma(a, b){
    console.log(arguments);
    return a + b
}

let resultado = suma(1000,500);
console.log(resultado);
console.log(suma(10,5,8,8,9,10));

console.log(typeof suma);
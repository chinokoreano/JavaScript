

function getMenorMayor(arr){
    let menor=arr[0];
    let mayor=arr[0];
    
    for(numero of arr){
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    
   return [menor, mayor];
}
let array =[10,5,30,100,3,-1];
let numeros =getMenorMayor(array);
console.log(numeros);
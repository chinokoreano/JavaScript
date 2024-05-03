

function cuantosPositivos(arr){
    let positivos=0;
    let negativos=0;
    
    for(numero of arr){
        /*if(numero >0)
        {
            positivos++;
        }
        else{
            negativos++
        }*/

        numero >0 ? positivos++:negativos++;
    }
    
   return [positivos, negativos];
}
let array =[10,5,30,100,-3,-1];
let resultado =cuantosPositivos(array);
console.log(resultado);
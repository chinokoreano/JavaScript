/*function cualEsMayor(a,b){
    if(a>b) 
    {
        return a;
    }else if (b>a)
    {
        return b;
    }
}*/

function cualEsMayor(a,b){
    return (a>b) ? a : b;
}


let mayor = cualEsMayor(500,100);
console.log(mayor);

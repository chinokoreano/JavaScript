function getByIdx(arr, idx){
    if (idx < 0 || arr.length <= idx){
        return 'elemento no existe';
    }
    return(arr[idx]);
}

let resultado = getByIdx([100,200],0);
console.log(resultado);

let array=[
    {
        id:1,
        name:'carlitos'
    },
    {
        id:2,
        name:'chinito'
    },
    {
        id:3,
        name:'kalu'
    },
]
let pairs = [
    [1,{name:'Carlos'}],
    [2,{name:'Chino'}],
    [3,{name:'Kalu'}]
]
function toCollection(arr)
{
    let collection = [];
    for(idx in arr)
    {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
        
    }
    return collection;
}
let resultado = toCollection(pairs);
console.log(resultado);
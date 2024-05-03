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

function toPairs(arr)
{
    let pairs = [];
    for(idx in arr)
    {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id,elemento];
        
    }
    return pairs;
}
let resultado = toPairs(array);
console.log(resultado);
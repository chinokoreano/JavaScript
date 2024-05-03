function precioFinal(precio, impuesto)
{
    let precioVenta=0;
    precioVenta = precio * (1+impuesto);
    return precioVenta;
}


let resultado = precioFinal(19.90, 0.15);
console.log(resultado);
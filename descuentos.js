//const precioOriginal = 100;
//const descuento = 10;

function calcularPrecioDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
   
    const precioConDescuento = 
    (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
   
    const priceValue = inputPrice.value; 

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value 

    const precioConDescuento = calcularPrecioDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
     resultP.innerText = "Tu precio con descuento es: $$" + precioConDescuento;

}



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,

// })


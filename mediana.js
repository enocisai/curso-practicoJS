n



const lista1 = [
   100, 200, 70000, 2500, 4000000, 70, 834
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2===0) {
        return true;

    }else { 
        return false;
    }

}
//const isEven = (myNumber) => (myNumber === 2)

let mediana;

if (esPar(lista1.length)){
    const element1 = lista1[mitadLista1];
    const element2= lista1[mitadLista1 + 1];
}else {
    mediana = lista1[mitadLista1];

}
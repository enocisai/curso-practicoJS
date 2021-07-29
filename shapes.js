
//Cuadrado

console.group ("El cuadrado")
 let medida = " centimetros cuadrados"
function perimetroCuadro(lado){
    return lado * 4 + medida;
}


function areaCuadro(lado) {
    return lado * lado + medida;

}














console.groupEnd();
















//Triangulo 
console.group ("Triangulo");

function perimetroTriangulo(lado1,lado2,base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return base * altura /2;
}
console.groupEnd();




const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
 const diametro = diametroCirculo(radio);
 return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}



////Conectar con HTML 

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadro(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadro(value);
    alert(area);
}
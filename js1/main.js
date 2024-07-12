// let numero1 = parseInt(prompt("dime un numero "));
// let signo = prompt("(/,*,-,+) que operacion quieres hacer: ");
// let numero2 = parseInt(prompt("dime otro numero: "));


// if (signo == "/") {
//   let resultado = numero1 / numero2;
//   document.write("el resultado es: " + resultado);
// } else if (signo == "*") {
//   let resultado = numero1 * numero2;
//   document.write("el resultado es: " + resultado);
// } else if (signo == "-") {
//   let resultado = numero1 - numero2;
//   document.write("el resultado es: " + resultado);
// } else if (signo == "+") {
//   let resultado = numero1 + numero2;
//   document.write("el resultado es: " + resultado);
// } else {
//   document.write("Error");
// }

// let numero1 = parseInt(prompt("dime un numero"));
// let simbolo = prompt("(/, *, -, +,) elige un simbolo");
// let numero2 = parseInt(prompt("dime otro numero"));
// let resultado;

// if (simbolo == "*") {
//     resultado = numero1 * numero2;
//     document.write("el resultado es:" + resultado);
// } else if (simbolo == "/") {
//     resultado = numero1 / numero2;
//     document.write("el resultado es:" + resultado);
// } else if (simbolo == "-") {
//     resultado = numero1 - numero2;
//     document.write("el resultado es:" + resultado);
// } else if (simbolo == "+") {
//     resultado = numero1 + numero2;
//     document.write("el resultado es:" + resultado);
// } else {
//     document.write("Algo no ha salido biien!")
// }

// switch (interruptor)

// decir un numero del 1 al 4 y mostrasr la estacion del año correspondiente

//else if... else if... etc --- si el numero es 1 , entonces muestra "Primavera"

// En vez de tantos else id, puedes usar SWITCH

let x = parseInt(prompt("primer numero"));
let signo = prompt("escoge un simbolo(/,*,+,-,%)")
let y = parseInt(prompt("segundo numero"));

if (!(isNaN(x)) && !(isNaN(y))) {



switch (signo) {

    case "*":
        alert("la opercaion da: " + (x * y));
        break;

    case "/":
        alert("la opercaion da: " + (x / y));
        break;

    case "-":
        alert("la opercaion da: " + (x - y));
        break;

    case "%":
        alert("la opercaion da: " + (x % y));
        break;

    case "+":
        alert("la opercaion da: " + (x + y));
        break;

     default:
        alert("Algo no ha salido bien")   
}
} else{
    alert("No te Salio bien men")
}
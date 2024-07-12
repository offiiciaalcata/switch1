// comentariO de una linea con dos barras: //
/*
comentario de multilinea como CSS
*/

// formula area del circulo: pi * radio al cuadrado
let saludo = "los de Cet somos los mejores!"
const pi = 3.1416;

// let radio = 25;

// pi= 63.58;

// radio = 13;

let radio = prompt("introduce el radio")
//formas de visualaizar (muy basicas)
//texto de pagina
document.write(pi);

document.write("<br>" + radio);

//ventana pop-up
// alert("hola mundo");

//para  desarollar web seria consola
console.log("hola desde la consola")


//formula de calculo are del circulo
document.write("<br>" + "area del circulo por radio" + radio +":");
document.write("<br><br>" + pi*radio*radio);

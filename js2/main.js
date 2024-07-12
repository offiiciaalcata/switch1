// string = "cadena texto"
// numero = 19
// boolean = true

// var, let , const

// let numero = 15;

// let numero, numero2, numero3 = 29;
// numero = 23;
// numero2 = 18;
// numero3 = 9;
// alert(numero);
// alert(numero2);
// alert(numero3);
 
// let numero1 = 23;
// let numero2 = 39;

// let numero = null;

// let numero = 5;
// // si pongo let = "pedro"; SALDRA NaN (Not A Number)
// let numero2 = 6;
// alert(numero * numero2);
//  prompt("dime tu nombre")
// let nombre = prompt("dime tu nombre")
// alert(nombre)

// let nombre = prompt("dime tu nombre")
// alert("holaa" + nombre)


//Operadores de ASIGNACION
// let numero = 10;
// numero /= 5; //esto es division 
// numero += 5; //esto es suma
// numero -= 5; //esto es resta 
// numero *= 5; //esto es multiplicacion
// numero %= 6; //esto es resto
// numero **= 2 //esto es exponenciacion 
// document.write(numero);

//Operadores de ARITMETICOS
// let numero1 = 10;
// let numero2 = 5;
// numero1--;
// numero1++;
// resultado = numero1--
// resultado = numero1 / numero2;
// resultado= numero1**numero2 // asi se eleva a la quinta
// resultado = numero1-numero2;
// resultado = numero1&numero2; el resto de 10 dividio entre 5 es 0
// resultado = -numero1; pasa a negativo
// resultado = numero1-numero2;
// alert(resultado)

//Concatenacion se basa en unir strings
// saludo = 53;
// pregunta = 8;
// frase = "" + saludo + pregunta;
// document.write(frase)

//Para usar concat hay que hacer esto 
// numero1 = "53";
// numero2 = 8;
// frase = numero1.concat(numero2)
// document.write(frase)

//CONCATENAR CON CLAVES
// nombre = " lucas dalto";
// frase = " soy " + nombre + " y estoy caminando "
// document.write(frase)

//Segunda forma
// nombre = " lucas dalto";
// frase = ` soy ${nombre} y estoy caminando`;
// document.write(frase)
// nombre = " lucas dalto";
// frase = " mi nombre es 'rafa' y soy un crack ";
// document.write(frase)

//Operadores de Comparacion
// let numero = 23;
// let numero2 = 13;
// let texto = "23"
// let texto2 = "texto2"
// document.write(texto === numero)
// let numero = 23;
// let numero2 = 13;
// let texto = "23"
// let texto2 = "texto2"
// document.write(texto == numero)
// let numero = 23;
// let numero2 = 13;
// let texto = "23"
// let texto2 = "texto2"
// document.write(texto != numero)
// let numero = 23;
// let numero2 = 13;
// let texto = "23"
// let texto2 = "texto2"
// document.write(texto !== numero)

//Operadores de Comparacion con numeros (<)-(>)
// let numero = 23;
// let numero2 = 13;
// document.write(numero > numero2)

// let numero = 23;
// let numero2 = 13;
// document.write(numero < numero2)

// let numero = 23;
// let numero2 = 13;
// document.write(numero >= numero2)

// let numero = 23;
// let numero2 = 13;
// document.write(numero <= numero2)

// let numero = 23;
// let numero2 = 23;
// document.write(numero >= numero2)

// let numero = 23;
// let numero2 = 23;
// document.write(numero <= numero2)

// let numero = 23;
// let numero2 = 23;
// document.write(numero > numero2)

// let numero = 23;
// let numero2 = 23;
// document.write(numero < numero2)

// let numero = 23;
// let numero2 = 23;
// let resultado = numero > numero2
// document.write(resultado)

//Operadores Logicos
// let valor = true;
// let valor2 = true;

// let resultado = valor && valor2;

// let resultado2 = valor || valor2;

// let resultado3 = !valor;

// let resultado = true;

// document.write(false && true);

// document.write(false && false);

// document.write(true && true);

// document.write(true && false);

//ASI FUNCIONA AND (&&)
// numero1 = 12;
// numero2 = 24;
// afirmacion1 = numero1 > numero2;
// afirmacion2 = numero1 != numero2;
// document.write(afirmacion1 && afirmacion2);

//ASI FUNCIONA OR (||)
// numero1 = 12;
// numero2 = 24;
// afirmacion1 = numero1 > numero2;
// afirmacion2 = numero1 == numero2;
// document.write(afirmacion1 || afirmacion2);

//ASI FUNCIONA EL NO LOGICO (!)
// numero1 = 12;
// numero2 = 24;
// afirmacion1 = numero1 < numero2;
// afirmacion2 = numero1 == numero2;
// document.write(!false); Da verdadero

// numero1 = 12;
// numero2 = 24;
// afirmacion1 = numero1 < numero2;
// afirmacion2 = numero1 == numero2;
// document.write(!true); Da falso
// hoy hace sol y es fiesta iremos a la costa brava
//Si tenemos menos de 40 euros, no salimos
// o bien si nos invita un amigo si que vamos, pasando lo anterior
// o nada mas perguntar al amigo si no tenemos suficiente dinero

let sol = prompt("hace sol? (s/n)");

let tenemosFiesta = prompt("tenemos fiesta (s/n)");

let tenemosDinero = parseInt(prompt("caunto dinero tenemos?"));//convertir a numerico



//Opción Inma
// o nada mas perguntar al amigo si no tenemos suficiente dinero
if (sol == "s" && tenemosFiesta == "s" && tenemosDinero >= 40) {
    document.write("Bien! Coge el bañador!");
}
else if(sol == "s" && tenemosFiesta == "s" && tenemosDinero < 40){
    let nosInvitan = prompt("nos invitan?(s/n)")
            if (nosInvitan == "s") {
                 document.write("Bien! Coge el bañador!");
            } else{
                document.write("sigue estudiando javascript");
            }   
}  
else{
    document.write("sigue estudiando javascript");
} 


//Opción Kevin//
let nosInvitan = prompt("nos invitan?(s/n)") 
if ((sol == "s" && tenemosFiesta == "s" && tenemosDinero >= 40) || nosInvitan == "s") {
    // document.write("<br>Bien! Coge el bañador!");
} else{
    document.write("sigue estudiando javascript");
}


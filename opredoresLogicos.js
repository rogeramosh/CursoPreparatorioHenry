
//&& CONJINCIÓN Y >MAYOR QUE, < MENOR QUE

function  mayorYmenor(num){
    if (num>2 &&num<20)console.log(true); else console.log(false);
        
    
}
mayorYmenor(10);
mayorYmenor(25);

//&&, CONJUNCIÓN
function mayorYmenorYpar(num){
    if(num>100 && num<200 && num % 2 ===0) console.log(true); else console.log(false);
}
mayorYmenorYpar(90);

//OR DISYUNCIÓN

function operadorOr(str){
    if (str === "Henry" || str.length<2) console.log(true); else console.log(false);
}
operadorOr("n");

//NEGACIÓN
function negacion(permiso){
    if(permiso !== false)console.log("Tiene permiso");else console.log("No tiene permiso");
}
negacion(false);

//FUNCIÓN COMPLEJA
function condicionCompleja(num){
    if(num >9 && num % 2 === 0 || num ===3) console.log(true); else console.log(false);
}

condicionCompleja(8)
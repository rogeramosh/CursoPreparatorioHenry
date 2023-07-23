function viajar(destino){

    if(destino==="Brasil"){
        console.log("sigue a la izquierda a "+ destino);
    }
    else if(destino==="Venezuela")
     console.log("sigue a la derecha a " + destino);
    else
     console.log("Vuélvase atrás hacia "+ destino);
}
viajar("Colombia")

function puedeManejar(edad){
    if(edad<18)
        console.log("Una persona de " +edad + " años, No pueden conducir, se considera  menore de edad");
    else if(edad>50)
        console.log("Una persona de "+edad + "años, no deben conducir, se considera de la tercera edad.");
    else 
        console.log("Puede Conducir una persona de "+ edad+"años");
    }
puedeManejar(51);
    

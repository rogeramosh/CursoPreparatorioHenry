var listaDeCompras = [];
listaDeCompras[3]= "Tomates";
listaDeCompras[1]= "Lechuga";
console.log(listaDeCompras[1]);
console.log(listaDeCompras);
console.log(listaDeCompras.length);

var colores = ["amarillo", "azul"];

//iNCLUIR ITEMS
colores.push("Rojo");
colores.unshift("Verde");
colores.shift();
colores.pop()
console.log(colores);
var Pintores = ["Picasso", "Velasquez", "Van Gogh", "Dali"];
Pintores.includes("Dali");
var inlcuye = Pintores.includes("Dali");
console.log(inlcuye);
console.log(Pintores);

var numeros = [7,6,8,9];
console.log(numeros.every((num)=> {return num>5}));

REturn


function Verificacion(numerica){
    return numerica.every((elemento)=> {return elemento>5 })
}
var numerica1 = [10,6,8,9];

console.log(Verificacion(numerica1));


var textos = ["casa", "perro","45","string"];
console.log(textos.every((text)=>  typeof text=== "string"));// true


function todosSonStrings(arreglo) {
    return arreglo.every((elemento) => typeof elemento === 'string');
  }
  
  // Ejemplo de uso:
  var arreglo1 = ['Hola', 'Mundo', '123', 'JavaScript'];
  var arreglo2 = ['Uno', 'Dos', 3, 'Cuatro'];
  
  console.log(todosSonStrings(arreglo1)); // Devolverá true
  console.log(todosSonStrings(arreglo2)); // Devolverá false

// Verificar longitud de texto con function

var frases= ["solano", "lotescampestres", "fincasgrandes"]
function longitudeTextos(texto){
    return frases.every((text)=> {return text.length>5})
}

console.log(longitudeTextos(frases));

// Verificar longitud de texto con var
var frases = ["sol", "lotescampestres", "fincasgrandes"];

  var frasesMax= frases.every((text)=> {return text.length>5})
  console.log(frasesMax);



// METODOS SPLIT & jOIN

var palabra = "rogel";
console.log(palabra);
var palabraArreglo = palabra.split('');
console.log(palabraArreglo);
palabraArreglo.pop();
palabraArreglo.push("r");
console.log(palabraArreglo)
var palabra = palabraArreglo.join('');
console.log(palabra);

//METODO FOREACH

var palabras= ["casa","cama","sol"]
palabras.forEach( (fra)=> console.log(fra))


var palabras= ["cama","cama","sol","casa"]
palabras.forEach( (fra)=> {
    if(fra === "cama") {console.log(fra)}
})

//Método map

var palabras = ["casa","lote","edificio","oficina"]
palabras.forEach((tex)=> console.log(tex));
var palabrasMio = palabras.map((text)=>{return text+"mio"})
console.log(palabrasMio);

let ultimo= palabrasMio[palabrasMio.length-1]

console.log(palabras.indexOf("edificio"))
//__________________________________________________________


// bucles for y while

var lista= [1,2,3,4,5]

for(var i=0; i<lista.length; i++){
    console.log(lista[i]);

}

var letras=["a","b","c","d","e"];
for(var i=0;i<letras.length;i++){
    if(letras[i]==="d") console.log(letras[i]+"  en i="+i)
   
}

//--------------------------------------------------------
//Agregar palabra a un arreglo con WHILE

var MiArreglo= []
while (MiArreglo.length<5){
    MiArreglo.push("yes")
}

console.log(MiArreglo);
var texto = MiArreglo.join('');
console.log(texto);


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


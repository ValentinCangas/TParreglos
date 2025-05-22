
//EJERCICIO 1

//1
/*
let frutas = ["manzana", "sandia", "ananá"]
console.log(frutas)
//2
 frutas.push("banana");
console.log(frutas)
//3
frutas.unshift("naranja")
console.log(frutas)
//4
frutas.pop("banana")
console.log(frutas)
//5
frutas.shift("naranja")
console.log(frutas)
*/
//EJERCICIO 2

//1
/*
let nombre = ["agustin", "bautista", "maximo"]
console.log(nombre.length)
 
//2
nombre.push("luciano", "federico")
console.log(nombre.length)


//EJERCICIO 3

//1
let numeros = ["10", "50", "5"]

//2
for (let indice = 0; indice < numeros.length; indice++){
  console.log(numeros[indice]) 
}

//EJERCICIO 4

//1
let numbers = [20, 25, 30]

//2
let suma = 0
for (let indice = 0; indice < numbers.length; indice++){
  suma = suma + numbers[indice]
}

//3
console.log("suma de lementos", suma)
*/

//EJERCICIO 5

//1
let arreglo = []

for (let index = 1; index < 6; index++) {
  arreglo.push(prompt("escibe palabra N°" + index))
  
}

console.log(arreglo[index])
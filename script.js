//1
let colores =  ["azul", "verde", "rojo", "negro","blanco"]

console.log(colores);

//2
 console.log("primerColor", colores[0])

console.log ("ultimoColor", colores[colores.length - 1] )  

//3
console.log("cantidad de colores", colores.length)

//4
colores.push("violeta")
console.log("color al final", colores)

//5
colores.unshift("gris")
console.log("color al principio", colores)

//6
colores.pop("violeta")
console.log("violeta eliminado", colores) 

//7
colores.shift("gris")
console.log("gris eliminado", colores)
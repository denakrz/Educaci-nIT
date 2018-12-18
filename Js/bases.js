// Variables: 
// az AZ 09 _ $
// 1. no puedo utilizar un numero como primir caracter del nombre de la variable
// 2. no puedo utilizar palabras reservadas, ej: switch, if, var, etc
// utilizar camelCase

var apellido; // declaración de variable
apellido = "Krzyny"; // asignar un valor a una variable declarada

var nombres = ["a", "b", "c", 20, true] // array -> variable con varios valores, pueden ser de diferente tipo

var personaX = {
    nombre: "Juan",
    edad: 39,
    materias: ["Angular", "React", "Vue"]
}; // objeto

console.log(personaX.nombre); // estilo propiedad
console.log(personaX["nombre"]); // estilo array asociativo
console.log(personaX.materias[1]); // debería mostrar sólo React

// posibles tipos de valores que puede tener una variable:
/*
Primitivos
1. Números: Infinity, NaN
2. Cadenas: "Hola", 'Hola', 'Hola mi nombre es ${variable/JS}'
3. Boleanos: true o false
4. undefined: normalmente es JS quien asigna este tipo de datos a variables
5. null: puesto x el programador

Complejos
6. array: variable con varios valores
7. objetos: conjunto de variables -> arrays asociativos
8. expresiones regulares:
9. tipos objetos del lenguaje:
10. funciones:
*/

// Hoisting :
//cuando el motor corta todas las definiciones y las pone arriba --> sólo de tipo declarativas.

// Declaración de una función (tipo declarativo)
function sumar (a, b){
    alert (a + b)
}
//llamado de una función
sumar(10,20);
sumar2(100,20);

sumar();

// Declaración de una función (tipo expresión)
var saludar = function(){ // le asigno una función anónima
    alert("Hola a todos"); 
};

saludar();
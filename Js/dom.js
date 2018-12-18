// Modelos de objetos del documento (DOM)

// variable global
//var nodo_caja = document.getElementById("caja1");
var nodo_caja = document.querySelector("#example1"); // selector CSS
console.log(nodo_caja);

// manipular el elemento capturado: 
nodo_caja.style.border = "3px solid red";
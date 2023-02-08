console.log("Entro index.js");

let titutlo1 = document.getElementById ("titutlo1");


let titutlo2 = document.getElementById ("titutlo2");

titulo1.innerText="Modificado desde JS";
titulo1.className = "text-green";
console.log(titulo1.classList); // De esta manera se pueden ver ,las clases.
// agregar nueva clase desde JS
//Agregar clase a la lista actual
titulo1.classList.add("text-green"); // esto se usa para concatenar los elemnetos .add
titulo1.classList.add("text-orange");

//titutlo2.style.color="orange"

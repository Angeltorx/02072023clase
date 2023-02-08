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

titulo2.style.color="blue"
titulo2.style.fontSize="13px"

let titulo3a =document.getElementById("titulo3a");
let titulo3b =document.getElementById("titulo3b");
let titulo3c =document.getElementById("titulo3c");
let titulo3d =document.getElementById("titulo3d");
let titulo3e =document.getElementById("titulo3e");

let conjuntoTitulos_h3= document.getElementsByTagName("h3");

//conjuntoTitulos_h3.classList.add("text-blue");
console.log("conjuntoTitulos_h3");

let contenedorElementos = document.getElementById("contenedorElementos");
let parrafoNuevo=document.createElement("p")
parrafoNuevo.innerHTML ="Hola";
contenedorElementos.appendChild(parrafoNuevo);
let parrafoNuevo2=document.createElement("p")
parrafoNuevo2.innerHTML ="Mundo";
contenedorElementos.appendChild(parrafoNuevo2);

let acumulador = 2; //debe ir aparte para quese tome en la ecuacion

function clickButton() {
    console.log("Gracias!");
    acumulador++;
    console.log(acumulador);
    let emojiTexto = document.getElementById("emojiTexto");
    emojiTexto.innerText="El mejor trebol";
    let emoji = document.getElementById("emoji");
    emoji.style.fontSize=acumulador+"2rem";
}



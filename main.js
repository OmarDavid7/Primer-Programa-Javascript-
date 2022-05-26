//escuchar al boton 

const boton = document.getElementById("boton");
boton.addEventListener('click', preguntarNombre);

//escuchar a las referencias heading 

const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");


//preguntar el nombre del usuario 

function preguntarNombre(){

    const nombre = prompt("Introduce tu nombre");
    mostrarNombre(nombre);

}

function mostrarNombre(nombre){
    h1.textContent = nombre;
    h2.textContent = "Hola 😍";
}
const nav= document.querySelector("#navbar__menu");
const abrir = document.querySelector("#navbar__item_abrir");
const cerrar = document.querySelector("#navbar__item_cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})


cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})



let form = document.getElementById("form");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let contrasena = document.getElementById("contrasena1");
let parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    if(nombre.value.length < 3 || nombre.value.length > 15){
        alert("Nombre inválido (debe tener entre 3 y 15 caracteres)");
    }
})
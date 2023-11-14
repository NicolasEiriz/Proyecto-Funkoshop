const nav= document.querySelector("#navbar__menu");
const abrir = document.querySelector("#navbar__item_abrir");
const cerrar = document.querySelector("#navbar__item_cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})


cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


let nombre = document.getElementById("nombre");
let sku = document.getElementById("sku");
let precio = document.getElementById("precio");
let stock = document.getElementById("stock");
let descuento = document.getElementById("descuento");
let parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    if(nombre.value.length < 10 || nombre.value.length > 30){
        alert("Nombre inválido (debe tener entre 10 y 30 caracteres)");
    }

    if(sku.value.length < 10 || sku.value.length > 15){
        alert("SKU inválido (debe tener entre 10 y 15 caracteres)");
    }

    if(precio.value <= 0){
        alert("Precio inválido (debe ser mayor a 0)");
    }

    if(stock.value < 0){
        alert("Stock inválido (debe ser mayor o igual a 0)");
    }

    if(descuento.value < 0){
        alert("Stock inválido (debe ser mayor o igual a 0)");
    }
})

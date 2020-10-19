document.addEventListener('DOMContentLoaded', iniciarMenu);

function iniciarMenu() {
"use strict"

document.querySelector(".menuDesplegable").addEventListener("click", menu);
function menu() {
    document.querySelector(".botonera").classList.toggle("columna");
}

}
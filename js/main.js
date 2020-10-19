document.addEventListener('DOMContentLoaded', iniciarPagina);

function iniciarPagina() {
    "use strict"

    //############################ CAPTCHA ########################

    function crearCaptcha() {
        let random = Math.floor((Math.random() * 100000000));
        document.querySelector("#captcha").innerHTML = random;
    }

    function Validar() {
        let captcha = document.querySelector("#captcha").innerHTML;
        let numero = document.querySelector("#validar").value;
        let registrado = document.querySelector("#registrado");
        if (captcha == numero) {
            registrado.innerHTML = "Registrado!";
        }
        else {
            registrado.innerHTML = "No registrado, intente de nuevo!";
        }
    }

    crearCaptcha();

    let botonvalidar = document.querySelector("#resgistrate");
    botonvalidar.addEventListener("click", Validar);


}
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
    console.log(Validar());

    crearCaptcha();

    let botonvalidar = document.querySelector("#resgistrate");
    botonvalidar.addEventListener("click", Validar);


    //############################### TABLA DINAMICA ########################

    let baseURL = 'https://web-unicen.herokuapp.com/api/groups/';
    let groupID = 'Grupo007';
    let collectionID = 'resultados';

    function enviarInformacion() {
        let local = document.querySelector("#equipoLocal").value;
        let resultado = document.querySelector("#resultado").value;
        let visitante = document.querySelector("#equipoVisitante").value;

        if (local.length === 0 || resultado.length === 0 || visitante.length === 0) {
            let contenedor = document.querySelector("#error");
            contenedor.innerHTML = "Ingrese el item que falta";
            return;
        }
        else {
            let contenedor = document.querySelector("#error");
            contenedor.innerHTML = " ";
        }
        let filas = {
            "thing": {
                "Local": local,
                "Resultado": resultado,
                "Visitante": visitante
            }
        };
        fetch(baseURL + groupID + "/" + collectionID, {
            "method": "POST",
            "mode": 'cors',
            "headers": { "Content-Type": "application/json" },
            "body": JSON.stringify(filas)
        }).then(function (r) {
            if (!r.ok) {
                console.log("error")
            }
            return r.json()
        }).then(function () {
            mostrarInformacion();
        }).catch(function (e) {
            console.log(e)
        })

    }
    console.log(enviarInformacion());
    
    document.querySelector("#enviar").addEventListener('click', enviarInformacion);

    function mostrarInformacion() {
        fetch(baseURL + groupID + "/" + collectionID, {
            "method": "GET",
            "mode": 'cors',
        }).then(function (r) {
            if (!r.ok) {
                console.log("error")
            }
            return r.json()
        }).then(function (json) {
            let tabla = document.querySelector("#tablaDeportiva");
            tabla.innerHTML = " ";
            console.log(json);
            for (let fila of json.resultados) {
                tabla.innerHTML +=
                    `<tr id='${fila._id}'>
                    <td>${fila.thing.Local}</td>
                    <td>${fila.thing.Resultado}</td>
                    <td>${fila.thing.Visitante}</td>
                    <td><button class='boton-borrar'>Borrar</button></td>
                    <td><button class='boton-editar'>Editar</button></td>
                 </tr>`
                agregarEventosBorrar();
                agregarEventosEditar();
            }
            console.log(tabla);
        }).catch(function (e) {
            console.log(e)
        })
    }

    mostrarInformacion();

    function agregarEventosBorrar() {
        let botonBorrar = document.querySelectorAll(".boton-borrar");
        for (let i = 0; i < botonBorrar.length; i++) {
            botonBorrar[i].addEventListener("click", Borrar);
        }
    }

    function Borrar(event) {
        fetch(baseURL + groupID + "/" + collectionID + "/" + event.target.parentNode.parentNode.id, {
            method: "DELETE",
            mode: 'cors',
        }).then(function (r) {
            if (!r.ok) {
                console.log("error")
            }
            return r.json();
        }).then(function () {
            mostrarInformacion();
        })
    }

    function agregarEventosEditar() {
        let botonBorrar = document.querySelectorAll(".boton-editar");
        for (let i = 0; i < botonBorrar.length; i++) {
            botonBorrar[i].addEventListener("click", Editar);
        }
    }

    function Editar(event) {
        let editarLocal = document.querySelector("#editarEquipoLocal").value;
        let editarResultado = document.querySelector("#editarResultado").value;
        let editarVisitante = document.querySelector("#editarEquipoVisitante").value;

        if (editarLocal.length === 0 || editarResultado.length === 0 || editarVisitante.length === 0) {
            let contenedor = document.querySelector("#errorEditar");
            contenedor.innerHTML = "Ingrese el item que falta";
            return;
        }
        else {
            let contenedor = document.querySelector("#errorEditar");
            contenedor.innerHTML = " ";
        }
        let fila = {
            "thing": {
                "Local": editarLocal,
                "Resultado": editarResultado,
                "Visitante": editarVisitante
            }
        };
        fetch(baseURL + groupID + "/" + collectionID + "/" + event.target.parentNode.parentNode.id, {
            "method": "PUT",
            "mode": 'cors',
            "headers": { "Content-Type": "application/json" },
            "body": JSON.stringify(fila)
        }).then(function (r) {
            if (!r.ok) {
                console.log("error")
            }
            return r.json()
        }).then(function () {
            mostrarInformacion();
        }).catch(function (e) {
            console.log(e)
        })

    }

    document.querySelector("#agregar3").addEventListener('click', function () {
        enviarInformacion();
        enviarInformacion();
        enviarInformacion();

    });
}
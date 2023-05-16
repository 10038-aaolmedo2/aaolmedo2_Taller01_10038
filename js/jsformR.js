function validarTexto(input) {
    var regex = /^[a-zA-Z0-9]+$/;
    var valor = input.value;
    if (!regex.test(valor)) {
        input.value = valor.replace(/[^a-zA-Z0-9]/g, '');
    }
}

function validarNumeros(input) {
    var regex = /^[0-9]+$/;
    var valor = input.value;
    if (!regex.test(valor)) {
        input.value = valor.replace(/[^0-9]/g, '');
    }
}

function mostrarOcultarCampo() {
    var campoOculto = document.getElementById("campoOculto");
    var checkbox = document.getElementById("mostrarCampo");

    if (checkbox.checked) {
        campoOculto.style.display = "block";
    } else {
        campoOculto.style.display = "none";
    }
}

function mostrarOcultarCampo2() {
    var campoOculto = document.getElementById("campoOculto2");
    var checkbox = document.getElementById("mostrarCampo2");

    if (checkbox.checked) {
        campoOculto.style.display = "block";
    } else {
        campoOculto.style.display = "none";
    }
}

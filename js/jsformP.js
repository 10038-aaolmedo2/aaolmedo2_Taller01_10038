function validarTexto(input) {
    var regex = /^[A-Za-z]+$/;
    var valor = input.value;
    if (!regex.test(valor)) {
        input.value = valor.replace(/[^A-Za-z]/g, '');
    }
}

function borrarFormulario() {
    document.getElementById("formProducto").reset();
}



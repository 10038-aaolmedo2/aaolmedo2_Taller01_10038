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

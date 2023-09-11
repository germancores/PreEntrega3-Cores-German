function validarFormulario() {
    let formularioValido = false;

    while (!formularioValido) {
        let nombre = prompt("Ingrese su nombre:");
        let apellido = prompt("Ingrese su apellido:");
        let email = prompt("Ingrese su correo electrónico:");
        let mensaje = prompt("Ingrese su mensaje:");

        // Se Valida que el nombre no esté vacío
        if (!nombre || nombre.trim() === " ") {
            alert("Por favor, ingrese su nombre.");
        }
        // Se valida que el apellido no esté vacío
       else if (!apellido || apellido.trim() === " ") {
            alert("Por favor, ingrese su apellido.");
        }
        // Se Valida que el email sea válido
        else if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
            alert("Por favor, ingrese un correo electrónico válido.");
        }
        // Se validar que el mensaje no esté vacío
        else if (!mensaje || mensaje.trim() === " ") {
            alert("Por favor, ingrese un mensaje.");
        }
        // Si todo está correcto, puedes enviar el formulario
        else {
            formularioValido = true;
            alert("Formulario enviado correctamente.");
        }
    }
}

validarFormulario();
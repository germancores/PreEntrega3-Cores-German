const LOCAL_STORAGE_NAME = "formularios";

const actualizarListaEnStorage = (list = []) => {
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(list));
};

const recuperarListaEnStorage = () => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME)) || [];
};

let formularios = recuperarListaEnStorage();

console.table(formularios);

const miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombre = document
        .getElementById("exampleFormControlInput1")
        .value.trim()
        .toLowerCase();
    let apellido = document
        .getElementById("exampleFormControlInput2")
        .value.trim()
        .toLowerCase();
    let email = document.getElementById("exampleInputEmail1").value.trim();
    let comentario = document
        .getElementById("exampleFormControlTextarea1")
        .value.trim();

    if (validarFormulario(nombre, apellido, email, comentario)) {
        miFormulario.reset();
        Swal.fire({
            title: "¿Seguro que desea enviar este formulario?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Si, enviar",
            denyButtonText: `No mejor no`
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "El formulario se ha enviado con exito",
                    icon: "success"
                });
            } else if (result.isDenied) {
                Swal.fire({
                    title: "¡El formulario no se ha enviado!",
                    text: "Asegurate de ingresar los inputs correctamente",
                    icon: "error"
                });
            }
          });
}

});

const validarFormulario = (
    nombre = "",
    apellido = "",
    email = "",
    comentario = ""
) => {
    if (!nombre || nombre.trim() === "") {
        Swal.fire({
            title: "Por favor, ingrese su nombre.",
            icon: "warning"
        });
        return false;
    }
    if (!apellido || apellido.trim() === "") {
        Swal.fire({
            title: "Por favor, ingrese su apellido.",
            icon: "warning"
        });
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        Swal.fire({
            title: "Por favor, ingrese un correo electrónico válido.",
            icon: "warning"
        });
        return false;
    }
    if (!comentario || comentario.trim() === "") {
        Swal.fire({
            title: "Por favor, ingrese un comentario.",
            icon: "warning"
        });
        return false;
    }

    let unFormulario = new Formulario(nombre, apellido, email, comentario);
    formularios.push(unFormulario);
    actualizarListaEnStorage(formularios);
    return true;
}
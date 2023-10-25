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
        alert("Formulario enviado satisfactoriamente!");
    } else {
        alert("Verifica los inputs ingresados!");
    }

});

const validarFormulario = (
    nombre = "",
    apellido = "",
    email = "",
    comentario = ""
) => {
    if (!nombre || nombre.trim() === "") {
        alert("Por favor, ingrese su nombre.");
        return false;
    }
    if (!apellido || apellido.trim() === "") {
        alert("Por favor, ingrese su apellido.");
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }
    if (!comentario || comentario.trim() === "") {
        alert("Por favor, ingrese un comentario.");
        return false;
    }

    let unFormulario = new Formulario(nombre, apellido, email, comentario);
    formularios.push(unFormulario);
    actualizarListaEnStorage(formularios);
    return true;
}



// let cantidad = prompt('Ingresar cantidad de formularios a realizar.')
// function crearYValidarFormularios(cantidad) {
//     const formularios = Array.from({ length: cantidad }, () => new Formulario());

//     return formularios.map((formulario, index) => {
//         formulario.pedirDatos();

//         if (formulario.validar()) {
//             return {
//                 numero: index + 1,
//                 nombre: formulario.nombre,
//                 apellido: formulario.apellido,
//                 email: formulario.email,
//                 mensaje: formulario.mensaje,
//             };
//         }
//         return null;
//     }).filter(formulario => formulario !== null);
// }

// const formulariosValidos = crearYValidarFormularios(cantidad);

// console.log("Formularios válidos:");
// formulariosValidos.forEach(formulario => {
//     console.log(`Formulario ${formulario.numero}:`);
//     console.log("Nombre:", formulario.nombre);
//     console.log("Apellido:", formulario.apellido);
//     console.log("Correo Electrónico:", formulario.email);
//     console.log("Mensaje:", formulario.mensaje);
//     console.log("-------------------------");
// });
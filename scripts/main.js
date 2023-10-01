class Formulario {
    constructor() {
        this.nombre = "";
        this.apellido = "";
        this.email = "";
        this.mensaje = "";
    }

    pedirDatos() {
        this.nombre = prompt("Ingrese su nombre:");
        this.apellido = prompt("Ingrese su apellido:");
        this.email = prompt("Ingrese su correo electrónico:");
        this.mensaje = prompt("Ingrese su mensaje:");
    }

    validar() {
        if (!this.nombre || this.nombre.trim() === "") {
            alert("Por favor, ingrese su nombre.");
            return false;
        }
        if (!this.apellido || this.apellido.trim() === "") {
            alert("Por favor, ingrese su apellido.");
            return false;
        }
        if (!this.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return false;
        }
        if (!this.mensaje || this.mensaje.trim() === "") {
            alert("Por favor, ingrese un mensaje.");
            return false;
        }
        return true;
    }
}

let cantidad = prompt('Ingresar cantidad de formularios a realizar.')
function crearYValidarFormularios(cantidad) {
    const formularios = Array.from({ length: cantidad }, () => new Formulario());

    return formularios.map((formulario, index) => {
        formulario.pedirDatos();

        if (formulario.validar()) {
            return {
                numero: index + 1,
                nombre: formulario.nombre,
                apellido: formulario.apellido,
                email: formulario.email,
                mensaje: formulario.mensaje,
            };
        }
        return null;
    }).filter(formulario => formulario !== null);
}

const formulariosValidos = crearYValidarFormularios(cantidad);

console.log("Formularios válidos:");
formulariosValidos.forEach(formulario => {
    console.log(`Formulario ${formulario.numero}:`);
    console.log("Nombre:", formulario.nombre);
    console.log("Apellido:", formulario.apellido);
    console.log("Correo Electrónico:", formulario.email);
    console.log("Mensaje:", formulario.mensaje);
    console.log("-------------------------");
});
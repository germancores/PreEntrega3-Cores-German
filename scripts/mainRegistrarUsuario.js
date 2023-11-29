const URL_API = 'http://localhost:3000';

const getUsersFromServer = async () => {
  // Obtiene la lista de usuarios registrados desde el servidor.
  const response = await fetch(`${URL_API}/usuariosRegistrados`);
  const data = await response.json();
  return data;
};

const registerUserOnServer = async (usuario) => {
  // Registra un nuevo usuario en el servidor mediante una solicitud POST.
  const response = await fetch(`${URL_API}/usuariosRegistrados`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuario),
  });
  const data = await response.json();
  return data;
};

const miFormulario = document.getElementById("registerFormUser");
miFormulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  // Obtiene los valores del formulario.
  const nombre = document.getElementById("nombreUsuario").value.trim().toLowerCase();
  const repetirNombre = document.getElementById("repetirNombreUsuario").value.trim().toLowerCase();
  const contrasena = document.getElementById("contrasenaUsuario").value.trim();
  const repetirContrasena = document.getElementById("repetirContrasena").value.trim();

  // Intenta registrar al usuario y realiza acciones según el resultado.
  if (await registrarUsuario(nombre, repetirNombre, contrasena, repetirContrasena)) {
    miFormulario.reset();
    // Muestra una alerta de éxito y redirige al usuario a la página de login. 
    //Esta seccion presenta un error que no me aparece en consola ni en ninguna parte y nose como resolver ya que no encuentro el error. El error me impide la redireccion de la pagina
    Swal.fire({
      title: "¡Usuario registrado satisfactoriamente!",
      text: "será redirigido al login automáticamente",
      icon: "success"
    }).then(() => {
      window.location.href = "/pages/ingresar.html";
    })

  }
});

const validarFormulario = (
  nombre = "",
  repetirNombre = "",
  contrasena = "",
  repetirContrasena = ""
) => {
  // Realiza diversas validaciones y muestra alertas en caso de errores.
  // Retorna true si el formulario es válido, false si hay errores.
  const isNombreValido = nombre.length > 0;
  const isRepetirNombreValido = repetirNombre.length > 0;
  const areNombresIguales = nombre === repetirNombre;
  const isContrasenaValida = contrasena.length > 0;
  const isRepetirContrasenaValida = repetirContrasena.length > 0;
  const areContrasenasIguales = contrasena === repetirContrasena;

  if (
    !isNombreValido
      ? Swal.fire({
        title: "El Nombre de usuario es requerido.",
        icon: "warning"
      })
      : !isRepetirNombreValido
        ? Swal.fire({
          title: "Repetir nombre de usuario es requerido.",
          icon: "warning"
        })
        : !areNombresIguales
          ? Swal.fire({
            title: "El campo nombre de usuario y repetir nombre de usuario deben ser iguales.",
            icon: "warning"
          })
          : !isContrasenaValida
            ? Swal.fire({
              title: "La contraseña es requerida",
              icon: "warning"
            })
            : !isRepetirContrasenaValida
              ? Swal.fire({
                title: "Repetir contraseña es requerida",
                icon: "warning"
              })
              : !areContrasenasIguales
                ? Swal.fire({
                  title: "El campo contraseña y repetir contraseña de usuario deben ser iguales",
                  icon: "warning"
                })
                : false
  ) {
    return false;
  }

  return true;
};

const isExisteUsuario = async (identificador = "") => {
  // Obtiene la lista de usuarios y verifica si hay alguno con el mismo nombre.
  const usuarios = await getUsersFromServer();
  return usuarios.some(
    (unUsuario) =>
      unUsuario.nombre.toLowerCase() === identificador.toLowerCase()
  );
};
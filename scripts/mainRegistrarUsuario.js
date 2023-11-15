const miFormulario = document.getElementById("registerFormUser");
miFormulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombreUsuario").value.trim().toLowerCase();
  const repetirNombre = document.getElementById("repetirNombreUsuario").value.trim().toLowerCase();
  const contrasena = document.getElementById("contrasenaUsuario").value.trim();
  const repetirContrasena = document.getElementById("repetirContrasena").value.trim();

  if (registrarUsuario(nombre, repetirNombre, contrasena, repetirContrasena)) {
    miFormulario.reset();
    Swal.fire({
      title: "¡Usuario registrado satisfactoriamente!",
      text: "sera reenviado al login automaticamente",
      icon: "success"
    });
    setTimeout(() => {
      window.location = "/pages/ingresar.html";
    }, 2000);
  } else {
    !nombre.length > 0
      ? Swal.fire({
        title: "El Nombre de usuario es requerido.",
        icon: "warning"
      })
      : !repetirNombre.length > 0
        ? Swal.fire({
          title: "Repetir nombre de usuario es requerido.",
          icon: "warning"
        })
        : !nombre === repetirNombre
          ? Swal.fire({
            title: "El campo nombre de usuario y repetir nombre de usuario deben ser iguales.",
            icon: "warning"
          })
          : !contrasena.length > 0
            ? Swal.fire({
              title: "La contraseña es requerida",
              icon: "warning"
            })
            : !repetirContrasena.length > 0
              ? Swal.fire({
                title: "Repetir contraseña es requerida",
                icon: "warning"
              })
              : !contrasena === repetirContrasena
                ? Swal.fire({
                  title: "El campo contraseña y repetir contraseña de usuario deben ser iguales",
                  icon: "warning"
                })
                : false
  }

});

const validarFormulario = (
  nombre = "",
  repetirNombre = "",
  contrasena = "",
  repetirContrasena = ""
) => {
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

const registrarUsuario = (
  nombre,
  repetirNombre,
  contrasena,
  repetirContrasena
) => {
  const tieneErrores = validarFormulario(nombre, repetirNombre, contrasena, repetirContrasena);
  if (!tieneErrores) {
    return false;
  }

  if (isExisteUsuario(usuarios, nombre) ? Swal.fire({
    title: "El nombre de usuario ingresado ya existe!",
    icon: "warning"
  }) : false) {
    return false;
  }

  const unUsuario = new Usuario(nombre, contrasena);
  usuarios.push(unUsuario);
  actualizarListaEnStorage(usuarios);
  return true;
};
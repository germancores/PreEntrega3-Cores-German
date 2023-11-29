const miFormulario = document.getElementById("loginFormUser");
miFormulario.addEventListener("submit", (e) => {
  e.preventDefault();
  // Obtiene los valores del formulario.
  let nombre = document.getElementById("nombreUsuario").value;
  let contrasena = document.getElementById("contrasena").value;

  // Valida el formulario y muestra alerta en caso de errores.
  if (!validarFormulario(nombre, contrasena)) {
    Swal.fire({
      title: "Debes completar todos los campos",
      icon: "warning"
    });
    return false;
  }

  // Obtiene un usuario con el nombre proporcionado.
  const unUsuario = getUsuario(usuarios, nombre);
  console.log("--> usuario recuperado", unUsuario);
  // Verifica si el usuario existe.
  if (!unUsuario) {
    Swal.fire({
      title: "El usuario con el nombre ingresado es inexistente",
      icon: "error"
    });
    return false;
  }

  // Verifica si la contraseña ingresada es correcta.
  if (!unUsuario.isPassword(contrasena)) {
    Swal.fire({
      title: "La contraseña ingresada no es correcta",
      icon: "error"
    });
    return false;
  }

  // Marca al usuario como autenticado, registra el inicio de sesión y redirige a la página principal.
  unUsuario.isLoged = true;
  registrarInicio(unUsuario);
  window.location = "/index.html"
});


const validarFormulario = (nombre, contrasena) => {
  // Realiza validaciones y muestra alertas en caso de errores.
  // Retorna true si el formulario es válido, false si hay errores.
  if (nombre.length == 0) {
    Swal.fire({
      title: "El Nombre de usuario es requerido.",
      icon: "warning"
    });
    return false;
  }

  if (contrasena.length == 0) {
    Swal.fire({
      title: "La contraseña es requerida",
      icon: "warning"
    });
    return false;
  }

  return true;
};
const miFormulario = document.getElementById("loginFormUser");
miFormulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let nombre = document.getElementById("nombreUsuario").value;
  let contrasena = document.getElementById("contrasena").value;

  if (!validarFormulario(nombre, contrasena)) {
    Swal.fire({
      title: "Debes completar todos los campos",
      icon: "warning"
    });
    return false;
  }
  

  const unUsuario = getUsuario(usuarios, nombre);
  console.log("--> usuario recuperado", unUsuario);
  if (!unUsuario) {
    Swal.fire({
      title: "El usuario con el nombre ingresado es inexistente",
      icon: "error"
    });
    return false;
  }

  if (!unUsuario.isPassword(contrasena)) {
    Swal.fire({
      title: "La contraseña ingresada no es correcta",
      icon: "error"
    });
    return false;
  }

  unUsuario.isLoged = true;
  registrarInicio(unUsuario);
  window.location = "/index.html"
});


const validarFormulario = (nombre, contrasena) => {
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
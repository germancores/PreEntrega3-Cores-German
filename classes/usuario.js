// Definición de la clase Usuario
class Usuario {
  // Constructor que recibe un nombre y una contraseña para crear una instancia de Usuario.
  constructor(nombre, contrasena) {
    this.nombre = nombre;
    this.contrasena = contrasena;
    this.isLoged = false;
    this.session = [];
  }

  // Método toString que devuelve el nombre del usuario como una cadena.
  toString = () => {
    return this.nombre;
  };

  // Método isPassword que verifica si la contraseña proporcionada coincide con la contraseña del usuario.
  isPassword = (password = "") => {
    return this.contrasena === password;
  };
}

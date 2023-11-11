class Usuario {
  constructor(nombre, contrasena) {
    this.nombre = nombre;
    this.contrasena = contrasena;
    this.isLoged = false;
    this.session = [];
  }

  toString = () => {
    return this.nombre;
  };

  isPassword = (password = "") => {
    return this.contrasena === password;
  };
}

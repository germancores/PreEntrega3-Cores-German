// Definición de la clase Formulario
class Formulario {
  // Constructor que recibe nombre, apellido, email, y comentario para crear una instancia de Formulario.
  constructor(nombre, apellido, email, comentario) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.comentario = comentario;
  }

  // Método toString que devuelve el nombre del usuario como una cadena.
  toString = () => {
    return this.nombre;
  };
}

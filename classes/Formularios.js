class Formulario {
    constructor(nombre, apellido, email, comentario) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.comentario = comentario;
    }
  
    toString = () => {
      return this.nombre;
    };
  }
  
const LOCAL_STORAGE_NAME = "usuarios";

const actualizarListaEnStorage = (list = []) => {
  localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(list));
};

const recuperarListaEnStorage = () => {
  const recuperados = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
  if (recuperados) {
    return recuperados.map((e) => {
      return new Usuario(e.nombre, e.contrasena);
    });
  }
  return [];
};

let usuarios = recuperarListaEnStorage();

const isExisteUsuario = (usuarios = [], identificador = "") => {
  return usuarios.some(
    (unUsuario) =>
      unUsuario.nombre.toLowerCase() === identificador.toLowerCase()
  );
};

const getUsuario = (usuarios = [], identificador = "") => {
  return usuarios.find((unUsuario) => unUsuario.nombre === identificador);
};

const USER_LOGED_KEY = "usuarioLogueda";
const registrarInicio = (unUsuario) => {
  sessionStorage.setItem(USER_LOGED_KEY, JSON.stringify(unUsuario));
};

const recuperarUsuarioLogueado = () => {
  return JSON.parse(sessionStorage.getItem(USER_LOGED_KEY)) || false;
};

const USER_LOGED = recuperarUsuarioLogueado();

const isLogedUser = () => {
  return !!USER_LOGED;
}
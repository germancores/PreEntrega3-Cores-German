const LOCAL_STORAGE_NAME = "usuarios";

const actualizarListaEnStorage = async (list = []) => {
  localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(list));
};

const recuperarListaEnStorage = async () => {
  const recuperados = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
  if (recuperados) {
    return recuperados.map((e) => {
      return new Usuario(e.nombre, e.contrasena);
    });
  }
  return [];
};

const cargarUsuarios = async () => {
  try {
    usuarios = await recuperarListaEnStorage();
  } catch (error) {
    console.error("Error al cargar usuarios:", error);
  }
};

let usuarios;

cargarUsuarios();

const getUsuario = async (identificador = "") => {
  return usuarios.find((unUsuario) => unUsuario.nombre === identificador);
};

const USER_LOGED_KEY = "usuarioLogueda";
const registrarInicio = async (unUsuario) => {
  sessionStorage.setItem(USER_LOGED_KEY, JSON.stringify(unUsuario));
};

const recuperarUsuarioLogueado = async () => {
  return JSON.parse(sessionStorage.getItem(USER_LOGED_KEY)) || false;
};
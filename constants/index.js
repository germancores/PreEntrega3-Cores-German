// Constante que define el nombre bajo el cual se almacenarán los datos de usuarios en el LocalStorage del navegador.
const LOCAL_STORAGE_NAME = "usuarios";

// Función asíncrona que actualiza la lista de usuarios en el LocalStorage.
const actualizarListaEnStorage = async (list = []) => {
  localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(list));
};

// Función asíncrona que recupera la lista de usuarios del LocalStorage y la convierte en instancias de la clase Usuario.
const recuperarListaEnStorage = async () => {
  const recuperados = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
  if (recuperados) {
    return recuperados.map((e) => {
      return new Usuario(e.nombre, e.contrasena);
    });
  }
  return [];
};

// Cargar usuarios al inicio.
const cargarUsuarios = async () => {
  try {
    // Intenta cargar la lista de usuarios desde el LocalStorage.
    usuarios = await recuperarListaEnStorage();
  } catch (error) {
    console.error("Error al cargar usuarios:", error);
  }
};

// Variable que almacenará la lista de usuarios.
let usuarios;

// Inicia el proceso de carga de usuarios.
cargarUsuarios();

// Función asíncrona que devuelve el objeto Usuario correspondiente a un identificador proporcionado.
const getUsuario = async (identificador = "") => {
  return usuarios.find((unUsuario) => unUsuario.nombre === identificador);
};

// Constante que define el nombre bajo el cual se almacenará el usuario logueado en el sessionStorage.
const USER_LOGED_KEY = "usuarioLogueda";
// Función asíncrona que registra el inicio de sesión de un usuario almacenándolo en el sessionStorage.
const registrarInicio = async (unUsuario) => {
  sessionStorage.setItem(USER_LOGED_KEY, JSON.stringify(unUsuario));
};

// Función asíncrona que recupera el usuario logueado almacenado en el sessionStorage.
const recuperarUsuarioLogueado = async () => {
  return JSON.parse(sessionStorage.getItem(USER_LOGED_KEY)) || false;
};
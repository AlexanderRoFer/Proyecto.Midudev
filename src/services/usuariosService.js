// Servicio de usuarios y roles.
// Permite gestionar accesos y responsabilidades dentro del sistema.

const { usuarios } = require('../data/store');

function listarUsuarios() {
  return usuarios;
}

function obtenerUsuarioPorId(id) {
  return usuarios.find((usuario) => usuario.id === Number(id));
}

function crearUsuario(usuario) {
  const nuevoUsuario = {
    id: usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1,
    nombre: usuario.nombre,
    rol: usuario.rol || 'operador',
    email: usuario.email,
    estado: usuario.estado || 'activo'
  };

  usuarios.push(nuevoUsuario);
  return nuevoUsuario;
}

module.exports = {
  listarUsuarios,
  obtenerUsuarioPorId,
  crearUsuario
};

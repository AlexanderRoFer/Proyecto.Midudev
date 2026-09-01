// Servicio para gestionar la lógica de clientes.
// Este servicio encapsula las reglas del negocio de clientes como:
// - consultar clientes
// - crear nuevos registros
// - filtrar por estado

const { clientes } = require('../data/store');

function listarClientes() {
  return clientes;
}

function obtenerClientePorId(id) {
  return clientes.find((cliente) => cliente.id === Number(id));
}

function crearCliente(cliente) {
  const nuevoCliente = {
    id: clientes.length ? clientes[clientes.length - 1].id + 1 : 1,
    nombre: cliente.nombre,
    documento: cliente.documento,
    telefono: cliente.telefono,
    email: cliente.email,
    direccion: cliente.direccion || '',
    estado: cliente.estado || 'activo'
  };

  clientes.push(nuevoCliente);
  return nuevoCliente;
}

module.exports = {
  listarClientes,
  obtenerClientePorId,
  crearCliente
};

// Servicio de soporte y gestión de solicitudes.
// Aquí se registran las solicitudes de instalación, mantenimiento y fallas.

const { soporte, clientes } = require('../data/store');

function listarSoporte() {
  return soporte;
}

function obtenerSoportePorId(id) {
  return soporte.find((item) => item.id === Number(id));
}

function crearSoporte(solicitud) {
  const clienteExiste = clientes.some((cliente) => cliente.id === Number(solicitud.clienteId));

  if (!clienteExiste) {
    throw new Error('El cliente indicado no existe');
  }

  const tiposPermitidos = ['instalacion', 'mantenimiento', 'falla', 'revision'];
  if (!tiposPermitidos.includes(solicitud.tipo)) {
    throw new Error('El tipo de solicitud no es válido');
  }

  const nuevaSolicitud = {
    id: soporte.length ? soporte[soporte.length - 1].id + 1 : 1,
    clienteId: Number(solicitud.clienteId),
    tipo: solicitud.tipo,
    prioridad: solicitud.prioridad || 'media',
    estado: solicitud.estado || 'abierta',
    descripcion: solicitud.descripcion || ''
  };

  soporte.push(nuevaSolicitud);
  return nuevaSolicitud;
}

module.exports = {
  listarSoporte,
  obtenerSoportePorId,
  crearSoporte
};

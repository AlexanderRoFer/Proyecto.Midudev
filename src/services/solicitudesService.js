// Servicio de solicitudes y soporte.
// Aquí se gestionan instalaciones, mantenimientos y fallas reportadas por el cliente.

const { solicitudes } = require('../data/store');

function listarSolicitudes() {
  return solicitudes;
}

function crearSolicitud(solicitud) {
  const nuevaSolicitud = {
    id: solicitudes.length ? solicitudes[solicitudes.length - 1].id + 1 : 1,
    clienteId: Number(solicitud.clienteId),
    tipo: solicitud.tipo,
    prioridad: solicitud.prioridad || 'media',
    estado: solicitud.estado || 'abierta',
    descripcion: solicitud.descripcion || ''
  };

  solicitudes.push(nuevaSolicitud);
  return nuevaSolicitud;
}

module.exports = {
  listarSolicitudes,
  crearSolicitud
};

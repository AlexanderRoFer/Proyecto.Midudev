// Servicio de asignaciones de equipos.
// Esta lógica relaciona un servicio, un equipo y el cliente al que se le entrega el hardware.

const { asignaciones, servicios, equipos, clientes } = require('../data/store');

function listarAsignaciones() {
  return asignaciones;
}

function obtenerAsignacionPorId(id) {
  return asignaciones.find((asignacion) => asignacion.id === Number(id));
}

function crearAsignacion(asignacion) {
  const servicioExiste = servicios.some((servicio) => servicio.id === Number(asignacion.servicioId));
  const equipoExiste = equipos.some((equipo) => equipo.id === Number(asignacion.equipoId));
  const clienteExiste = clientes.some((cliente) => cliente.id === Number(asignacion.clienteId));

  if (!servicioExiste) {
    throw new Error('El servicio indicado no existe');
  }

  if (!equipoExiste) {
    throw new Error('El equipo indicado no existe');
  }

  if (!clienteExiste) {
    throw new Error('El cliente indicado no existe');
  }

  const nuevaAsignacion = {
    id: asignaciones.length ? asignaciones[asignaciones.length - 1].id + 1 : 1,
    servicioId: Number(asignacion.servicioId),
    equipoId: Number(asignacion.equipoId),
    clienteId: Number(asignacion.clienteId),
    estado: asignacion.estado || 'asignado',
    fechaAsignacion: asignacion.fechaAsignacion || new Date().toISOString().slice(0, 10)
  };

  asignaciones.push(nuevaAsignacion);
  return nuevaAsignacion;
}

module.exports = {
  listarAsignaciones,
  obtenerAsignacionPorId,
  crearAsignacion
};

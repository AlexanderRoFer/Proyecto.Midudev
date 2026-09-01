// Servicio de servicios asociados a clientes y contratos.
// Este módulo conecta el plan, el contrato y el estado de cada servicio activo o pendiente.

const { servicios, contratos, planes } = require('../data/store');

function listarServicios() {
  return servicios;
}

function obtenerServicioPorId(id) {
  return servicios.find((servicio) => servicio.id === Number(id));
}

function crearServicio(servicio) {
  const contratoExiste = contratos.some((contrato) => contrato.id === Number(servicio.contratoId));
  const planExiste = planes.some((plan) => plan.id === Number(servicio.planId));

  if (!contratoExiste) {
    throw new Error('El contrato indicado no existe');
  }

  if (!planExiste) {
    throw new Error('El plan indicado no existe');
  }

  const nuevoServicio = {
    id: servicios.length ? servicios[servicios.length - 1].id + 1 : 1,
    contratoId: Number(servicio.contratoId),
    planId: Number(servicio.planId),
    tipo: servicio.tipo,
    estado: servicio.estado || 'pendiente',
    fechaInicio: servicio.fechaInicio || new Date().toISOString().slice(0, 10)
  };

  servicios.push(nuevoServicio);
  return nuevoServicio;
}

module.exports = {
  listarServicios,
  obtenerServicioPorId,
  crearServicio
};

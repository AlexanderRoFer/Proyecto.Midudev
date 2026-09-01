// Servicio de contratos.
// Aquí se centraliza la lógica relacionada con la contratación de servicios.

const { contratos, planes } = require('../data/store');

function listarContratos() {
  return contratos;
}

function obtenerContratoPorId(id) {
  return contratos.find((contrato) => contrato.id === Number(id));
}

function crearContrato(contrato) {
  const plan = planes.find((item) => item.id === Number(contrato.planId));

  if (!plan) {
    throw new Error('El plan indicado no existe');
  }

  const nuevoContrato = {
    id: contratos.length ? contratos[contratos.length - 1].id + 1 : 1,
    clienteId: Number(contrato.clienteId),
    planId: Number(contrato.planId),
    fechaInicio: contrato.fechaInicio,
    fechaFin: contrato.fechaFin,
    estado: contrato.estado || 'pendiente'
  };

  contratos.push(nuevoContrato);
  return nuevoContrato;
}

module.exports = {
  listarContratos,
  obtenerContratoPorId,
  crearContrato
};

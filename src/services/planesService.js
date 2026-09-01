// Servicio de planes de servicio.
// Define la oferta comercial que puede asociarse a un contrato.

const { planes } = require('../data/store');

function listarPlanes() {
  return planes;
}

function obtenerPlanPorId(id) {
  return planes.find((plan) => plan.id === Number(id));
}

function crearPlan(plan) {
  const nuevoPlan = {
    id: planes.length ? planes[planes.length - 1].id + 1 : 1,
    nombre: plan.nombre,
    tipoServicio: plan.tipoServicio,
    precio: Number(plan.precio),
    velocidad: plan.velocidad || 'N/A'
  };

  planes.push(nuevoPlan);
  return nuevoPlan;
}

module.exports = {
  listarPlanes,
  obtenerPlanPorId,
  crearPlan
};

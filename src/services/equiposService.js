// Servicio de inventario y equipos.
// Este módulo controla disponibilidad y asignación de equipos al cliente y servicio.

const { equipos } = require('../data/store');

function listarEquipos() {
  return equipos;
}

function obtenerEquipoPorId(id) {
  return equipos.find((equipo) => equipo.id === Number(id));
}

function crearEquipo(equipo) {
  const nuevoEquipo = {
    id: equipos.length ? equipos[equipos.length - 1].id + 1 : 1,
    tipo: equipo.tipo,
    marca: equipo.marca,
    modelo: equipo.modelo,
    serial: equipo.serial,
    estado: equipo.estado || 'disponible',
    clienteId: equipo.clienteId || null
  };

  equipos.push(nuevoEquipo);
  return nuevoEquipo;
}

module.exports = {
  listarEquipos,
  obtenerEquipoPorId,
  crearEquipo
};

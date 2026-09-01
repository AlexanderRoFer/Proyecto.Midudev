// Servicio de trazabilidad o historial del servicio.
// Registra eventos importantes de cada conexión, instalación o mantenimiento.

const { historial } = require('../data/store');

function listarHistorial() {
  return historial;
}

function obtenerHistorialPorServicio(servicioId) {
  return historial.filter((registro) => registro.servicioId === Number(servicioId));
}

function registrarEvento(evento) {
  const nuevoEvento = {
    id: historial.length ? historial[historial.length - 1].id + 1 : 1,
    servicioId: Number(evento.servicioId),
    evento: evento.evento,
    fecha: evento.fecha || new Date().toISOString().slice(0, 10),
    responsable: evento.responsable || 'Sistema',
    detalle: evento.detalle || ''
  };

  historial.push(nuevoEvento);
  return nuevoEvento;
}

module.exports = {
  listarHistorial,
  obtenerHistorialPorServicio,
  registrarEvento
};

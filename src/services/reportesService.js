// Servicio de reportes operativos.
// Genera indicadores básicos para entender el estado del negocio.

const { clientes, contratos, equipos, solicitudes } = require('../data/store');

function obtenerReporteOperativo() {
  const clientesActivos = clientes.filter((cliente) => cliente.estado === 'activo').length;
  const contratosActivos = contratos.filter((contrato) => contrato.estado === 'activo').length;
  const equiposDisponibles = equipos.filter((equipo) => equipo.estado === 'disponible').length;
  const equiposAsignados = equipos.filter((equipo) => equipo.estado === 'asignado').length;
  const solicitudesAbiertas = solicitudes.filter((solicitud) => solicitud.estado === 'abierta' || solicitud.estado === 'en_proceso').length;

  return {
    clientesActivos,
    contratosActivos,
    equiposDisponibles,
    equiposAsignados,
    solicitudesAbiertas,
    totalClientes: clientes.length,
    totalContratos: contratos.length,
    totalEquipos: equipos.length,
    totalSolicitudes: solicitudes.length
  };
}

module.exports = {
  obtenerReporteOperativo
};

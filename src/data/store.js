// Este archivo simula una base de datos local para la primera etapa del sistema.
// Está pensado para que el proyecto funcione sin dependencias externas y sin complicar la lógica de negocio.

const clientes = [
  {
    id: 1,
    nombre: 'Ana Gómez',
    documento: '1010101010',
    telefono: '3001112233',
    email: 'ana@empresa.com',
    direccion: 'Calle 10 # 20-30',
    estado: 'activo'
  },
  {
    id: 2,
    nombre: 'Luis Torres',
    documento: '2020202020',
    telefono: '3102223344',
    email: 'luis@empresa.com',
    direccion: 'Carrera 15 # 30-40',
    estado: 'pendiente'
  }
];

const contratos = [
  {
    id: 1,
    clienteId: 1,
    planId: 1,
    fechaInicio: '2026-01-10',
    fechaFin: '2027-01-10',
    estado: 'activo'
  },
  {
    id: 2,
    clienteId: 2,
    planId: 2,
    fechaInicio: '2026-05-01',
    fechaFin: '2027-05-01',
    estado: 'pendiente'
  }
];

const planes = [
  { id: 1, nombre: 'Internet 100', tipoServicio: 'internet', precio: 49000, velocidad: '100 Mbps' },
  { id: 2, nombre: 'Combo Plus', tipoServicio: 'combo', precio: 85000, velocidad: '200 Mbps' },
  { id: 3, nombre: 'Televisión HD', tipoServicio: 'tv', precio: 32000, velocidad: 'N/A' }
];

const equipos = [
  { id: 1, tipo: 'router', marca: 'TP-Link', modelo: 'Archer C6', serial: 'R-001', estado: 'asignado', clienteId: 1 },
  { id: 2, tipo: 'ont', marca: 'ZTE', modelo: 'F670', serial: 'O-110', estado: 'disponible', clienteId: null },
  { id: 3, tipo: 'decoder', marca: 'Samsung', modelo: 'Tizen TV', serial: 'D-200', estado: 'en_reparacion', clienteId: null }
];

const solicitudes = [
  {
    id: 1,
    clienteId: 1,
    tipo: 'instalacion',
    prioridad: 'alta',
    estado: 'abierta',
    descripcion: 'Instalación del servicio de internet en barrio norte.'
  },
  {
    id: 2,
    clienteId: 2,
    tipo: 'mantenimiento',
    prioridad: 'media',
    estado: 'en_proceso',
    descripcion: 'Revisión del router y señal de Wi-Fi.'
  }
];

const usuarios = [
  {
    id: 1,
    nombre: 'María López',
    rol: 'admin',
    email: 'maria@empresa.com',
    estado: 'activo'
  },
  {
    id: 2,
    nombre: 'Carlos Ruiz',
    rol: 'tecnico',
    email: 'carlos@empresa.com',
    estado: 'activo'
  }
];

const historial = [
  {
    id: 1,
    servicioId: 1,
    evento: 'Instalación completada',
    fecha: '2026-01-12',
    responsable: 'María López',
    detalle: 'Se activó el servicio con equipo asignado.'
  },
  {
    id: 2,
    servicioId: 1,
    evento: 'Revisión de mantenimiento',
    fecha: '2026-06-20',
    responsable: 'Carlos Ruiz',
    detalle: 'Se verificó la calidad de la señal y el equipo.'
  }
];

const servicios = [
  {
    id: 1,
    contratoId: 1,
    planId: 1,
    tipo: 'internet',
    estado: 'activo',
    fechaInicio: '2026-01-12'
  },
  {
    id: 2,
    contratoId: 2,
    planId: 2,
    tipo: 'combo',
    estado: 'pendiente',
    fechaInicio: '2026-05-05'
  }
];

const asignaciones = [
  {
    id: 1,
    servicioId: 1,
    equipoId: 1,
    clienteId: 1,
    estado: 'asignado',
    fechaAsignacion: '2026-01-12'
  },
  {
    id: 2,
    servicioId: 2,
    equipoId: 2,
    clienteId: 2,
    estado: 'pendiente',
    fechaAsignacion: '2026-05-05'
  }
];

const soporte = [
  {
    id: 1,
    clienteId: 1,
    tipo: 'instalacion',
    prioridad: 'alta',
    estado: 'abierta',
    descripcion: 'Instalación de fibra recién contratada'
  },
  {
    id: 2,
    clienteId: 2,
    tipo: 'mantenimiento',
    prioridad: 'media',
    estado: 'en_proceso',
    descripcion: 'Revisión de señal y router'
  }
];

module.exports = {
  clientes,
  contratos,
  planes,
  equipos,
  solicitudes,
  usuarios,
  historial,
  servicios,
  asignaciones,
  soporte
};

// Punto de entrada de la aplicación.
// Esta API sirve como base educativa para el proyecto ISP y cada endpoint representa un servicio funcional.

const express = require('express');
const morgan = require('morgan');

const { listarClientes, obtenerClientePorId, crearCliente } = require('./services/clientesService');
const { listarContratos, obtenerContratoPorId, crearContrato } = require('./services/contratosService');
const { listarPlanes, obtenerPlanPorId, crearPlan } = require('./services/planesService');
const { listarEquipos, obtenerEquipoPorId, crearEquipo } = require('./services/equiposService');
const { listarSolicitudes, crearSolicitud } = require('./services/solicitudesService');
const { listarServicios, obtenerServicioPorId, crearServicio } = require('./services/serviciosService');
const { listarAsignaciones, obtenerAsignacionPorId, crearAsignacion } = require('./services/asignacionesService');
const { listarSoporte, obtenerSoportePorId, crearSoporte } = require('./services/soporteService');
const { listarUsuarios, obtenerUsuarioPorId, crearUsuario } = require('./services/usuariosService');
const { listarHistorial, obtenerHistorialPorServicio, registrarEvento } = require('./services/historialService');
const { obtenerReporteOperativo } = require('./services/reportesService');

const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (req, res) => {
  res.json({
    ok: true,
    message: 'Proyecto ISP ejecutándose correctamente',
    version: '1.0.0'
  });
});

// Servicio de clientes.
app.get('/api/clientes', (req, res) => {
  res.json(listarClientes());
});

app.get('/api/clientes/:id', (req, res) => {
  const cliente = obtenerClientePorId(req.params.id);

  if (!cliente) {
    return res.status(404).json({ message: 'Cliente no encontrado' });
  }

  return res.json(cliente);
});

app.post('/api/clientes', (req, res) => {
  try {
    const nuevoCliente = crearCliente(req.body);
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Servicio de contratos.
app.get('/api/contratos', (req, res) => {
  res.json(listarContratos());
});

app.get('/api/contratos/:id', (req, res) => {
  const contrato = obtenerContratoPorId(req.params.id);

  if (!contrato) {
    return res.status(404).json({ message: 'Contrato no encontrado' });
  }

  return res.json(contrato);
});

app.post('/api/contratos', (req, res) => {
  try {
    const nuevoContrato = crearContrato(req.body);
    res.status(201).json(nuevoContrato);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Servicio de planes de servicio.
app.get('/api/planes', (req, res) => {
  res.json(listarPlanes());
});

app.get('/api/planes/:id', (req, res) => {
  const plan = obtenerPlanPorId(req.params.id);

  if (!plan) {
    return res.status(404).json({ message: 'Plan no encontrado' });
  }

  return res.json(plan);
});

app.post('/api/planes', (req, res) => {
  try {
    const nuevoPlan = crearPlan(req.body);
    res.status(201).json(nuevoPlan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Servicio de inventario y equipos.
app.get('/api/equipos', (req, res) => {
  res.json(listarEquipos());
});

app.get('/api/equipos/estado', (req, res) => {
  const { equipos } = require('./data/store');
  const porEstado = Object.values(
    equipos.reduce((acc, equipo) => {
      acc[equipo.estado] = acc[equipo.estado] || { estado: equipo.estado, cantidad: 0 };
      acc[equipo.estado].cantidad += 1;
      return acc;
    }, {})
  );

  res.json(porEstado);
});

app.get('/api/equipos/:id', (req, res) => {
  const equipo = obtenerEquipoPorId(req.params.id);

  if (!equipo) {
    return res.status(404).json({ message: 'Equipo no encontrado' });
  }

  return res.json(equipo);
});

app.post('/api/equipos', (req, res) => {
  try {
    const nuevoEquipo = crearEquipo(req.body);
    res.status(201).json(nuevoEquipo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Servicio de solicitudes / soporte.
app.get('/api/solicitudes', (req, res) => {
  res.json(listarSolicitudes());
});

app.post('/api/solicitudes', (req, res) => {
  try {
    const nuevaSolicitud = crearSolicitud(req.body);
    res.status(201).json(nuevaSolicitud);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Servicio de servicios y contratos asociados.
app.get('/api/servicios', (req, res) => {
  res.json(listarServicios());
});

app.get('/api/servicios/:id', (req, res) => {
  const servicio = obtenerServicioPorId(req.params.id);

  if (!servicio) {
    return res.status(404).json({ message: 'Servicio no encontrado' });
  }

  return res.json(servicio);
});

app.post('/api/servicios', (req, res) => {
  try {
    const nuevoServicio = crearServicio(req.body);
    res.status(201).json(nuevoServicio);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Servicio de asignación de equipos a servicios.
app.get('/api/asignaciones', (req, res) => {
  res.json(listarAsignaciones());
});

app.get('/api/asignaciones/:id', (req, res) => {
  const asignacion = obtenerAsignacionPorId(req.params.id);

  if (!asignacion) {
    return res.status(404).json({ message: 'Asignación no encontrada' });
  }

  return res.json(asignacion);
});

app.post('/api/asignaciones', (req, res) => {
  try {
    const nuevaAsignacion = crearAsignacion(req.body);
    res.status(201).json(nuevaAsignacion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Servicio de soporte y gestión de solicitudes.
app.get('/api/soporte', (req, res) => {
  res.json(listarSoporte());
});

app.get('/api/soporte/:id', (req, res) => {
  const soporte = obtenerSoportePorId(req.params.id);

  if (!soporte) {
    return res.status(404).json({ message: 'Solicitud no encontrada' });
  }

  return res.json(soporte);
});

app.post('/api/soporte', (req, res) => {
  try {
    const nuevaSolicitud = crearSoporte(req.body);
    res.status(201).json(nuevaSolicitud);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Servicio de usuarios y roles.
app.get('/api/usuarios', (req, res) => {
  res.json(listarUsuarios());
});

app.get('/api/usuarios/:id', (req, res) => {
  const usuario = obtenerUsuarioPorId(req.params.id);

  if (!usuario) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  return res.json(usuario);
});

app.post('/api/usuarios', (req, res) => {
  try {
    const nuevoUsuario = crearUsuario(req.body);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Servicio de trazabilidad.
app.get('/api/historial', (req, res) => {
  res.json(listarHistorial());
});

app.get('/api/historial/:servicioId', (req, res) => {
  const historialServicio = obtenerHistorialPorServicio(req.params.servicioId);

  if (!historialServicio.length) {
    return res.status(404).json({ message: 'No existe historial para ese servicio' });
  }

  return res.json(historialServicio);
});

app.post('/api/historial', (req, res) => {
  try {
    const nuevoEvento = registrarEvento(req.body);
    res.status(201).json(nuevoEvento);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Servicio de reportes operativos.
app.get('/api/reportes/operativos', (req, res) => {
  res.json(obtenerReporteOperativo());
});

app.get('/api/reportes/inventario', (req, res) => {
  const { equipos } = require('./data/store');
  const totalEquipos = equipos.length;
  const disponibles = equipos.filter((equipo) => equipo.estado === 'disponible').length;
  const asignados = equipos.filter((equipo) => equipo.estado === 'asignado').length;
  const enReparacion = equipos.filter((equipo) => equipo.estado === 'en_reparacion').length;

  res.json({
    totalEquipos,
    disponibles,
    asignados,
    enReparacion,
    stockCritico: disponibles <= 1
  });
});

app.get('/api/equipos/estado', (req, res) => {
  const { equipos } = require('./data/store');
  const porEstado = Object.values(
    equipos.reduce((acc, equipo) => {
      acc[equipo.estado] = acc[equipo.estado] || { estado: equipo.estado, cantidad: 0 };
      acc[equipo.estado].cantidad += 1;
      return acc;
    }, {})
  );

  res.json(porEstado);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor ISP escuchando en http://localhost:${port}`);
  });
}

module.exports = app;

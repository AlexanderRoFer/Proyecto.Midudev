const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');

const app = require('../src/app');

test('GET /health responde con ok true', async () => {
  const response = await request(app).get('/health');
  assert.equal(response.status, 200);
  assert.equal(response.body.ok, true);
});

test('GET /api/clientes devuelve lista de clientes', async () => {
  const response = await request(app).get('/api/clientes');
  assert.equal(response.status, 200);
  assert.ok(Array.isArray(response.body));
});

test('GET /api/reportes/operativos devuelve métricas básicas', async () => {
  const response = await request(app).get('/api/reportes/operativos');
  assert.equal(response.status, 200);
  assert.ok(response.body.totalClientes >= 0);
  assert.ok(response.body.totalSolicitudes >= 0);
});

test('GET /api/planes devuelve planes disponibles', async () => {
  const response = await request(app).get('/api/planes');
  assert.equal(response.status, 200);
  assert.ok(Array.isArray(response.body));
  assert.ok(response.body.length >= 1);
});

test('GET /api/usuarios devuelve usuarios del sistema', async () => {
  const response = await request(app).get('/api/usuarios');
  assert.equal(response.status, 200);
  assert.ok(Array.isArray(response.body));
});

test('GET /api/historial devuelve trazabilidad del servicio', async () => {
  const response = await request(app).get('/api/historial');
  assert.equal(response.status, 200);
  assert.ok(Array.isArray(response.body));
});

test('GET /api/servicios devuelve servicios asociados a contratos', async () => {
  const response = await request(app).get('/api/servicios');
  assert.equal(response.status, 200);
  assert.ok(Array.isArray(response.body));
  assert.ok(response.body.length >= 1);
});

test('POST /api/servicios crea un nuevo servicio para un contrato', async () => {
  const response = await request(app)
    .post('/api/servicios')
    .send({
      contratoId: 1,
      planId: 1,
      tipo: 'internet',
      estado: 'activo'
    });

  assert.equal(response.status, 201);
  assert.equal(response.body.tipo, 'internet');
  assert.equal(response.body.estado, 'activo');
});

test('GET /api/asignaciones devuelve asignaciones actuales', async () => {
  const response = await request(app).get('/api/asignaciones');
  assert.equal(response.status, 200);
  assert.ok(Array.isArray(response.body));
});

test('POST /api/asignaciones crea una asignación de equipo a servicio', async () => {
  const response = await request(app)
    .post('/api/asignaciones')
    .send({
      servicioId: 1,
      equipoId: 2,
      clienteId: 1,
      estado: 'asignado'
    });

  assert.equal(response.status, 201);
  assert.equal(response.body.servicioId, 1);
  assert.equal(response.body.equipoId, 2);
  assert.equal(response.body.estado, 'asignado');
});

test('GET /api/soporte devuelve solicitudes registradas', async () => {
  const response = await request(app).get('/api/soporte');
  assert.equal(response.status, 200);
  assert.ok(Array.isArray(response.body));
});

test('POST /api/soporte crea una solicitud de soporte', async () => {
  const response = await request(app)
    .post('/api/soporte')
    .send({
      clienteId: 1,
      tipo: 'instalacion',
      prioridad: 'alta',
      estado: 'abierta',
      descripcion: 'Instalación de internet en nueva sede.'
    });

  assert.equal(response.status, 201);
  assert.equal(response.body.tipo, 'instalacion');
  assert.equal(response.body.clienteId, 1);
  assert.equal(response.body.estado, 'abierta');
});

test('GET /api/reportes/inventario devuelve métricas de equipos y stock', async () => {
  const response = await request(app).get('/api/reportes/inventario');
  assert.equal(response.status, 200);
  assert.ok(response.body.totalEquipos >= 0);
  assert.ok(response.body.disponibles >= 0);
});

test('GET /api/equipos/estado devuelve equipos por estado', async () => {
  const response = await request(app).get('/api/equipos/estado');
  assert.equal(response.status, 200);
  assert.ok(Array.isArray(response.body));
});

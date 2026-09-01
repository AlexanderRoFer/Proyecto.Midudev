# Proyecto ISP - Paso a paso

Este repositorio funciona como base de trabajo para la primera etapa de un sistema de gestión operativa para una empresa de telecomunicaciones.

## Objetivo

Desarrollar una versión funcional inicial con:

- gestión de clientes
- contratos y planes
- inventario de equipos
- solicitudes de instalación y mantenimiento
- reportes operativos básicos

## Estructura del proyecto

- `docs/diagramas.md`: diagramas de negocio y arquitectura
- `src/app.js`: punto de entrada del backend
- `src/services/`: lógica de negocio por dominio
- `src/data/store.js`: datos en memoria para simular la base de datos
- `test/`: pruebas mínimas de verificación

## Pasos de ejecución

### Paso 1: diagramas y análisis

Revisa el archivo `docs/diagramas.md` para entender:

- entidades del negocio
- flujo de instalación
- relación entre clientes, contratos, servicios y equipos

### Paso 2: levantar el proyecto

```bash
npm install
npm start
```

La API quedará disponible en:

- http://localhost:3000/health
- http://localhost:3000/api/clientes
- http://localhost:3000/api/contratos
- http://localhost:3000/api/equipos
- http://localhost:3000/api/solicitudes
- http://localhost:3000/api/reportes/operativos

### Paso 3: ejecutar pruebas

```bash
npm test
```

## Servicios incluidos

### Clientes
Gestiona información personal, ubicación y contacto de cada cliente.

### Contratos
Asocia clientes con planes y servicios activos.

### Inventario
Controla equipos, disponibilidad y asignación.

### Solicitudes
Mantiene instalaciones, mantenimientos y fallas.

### Reportes
Entrega métricas operativas clave para el negocio.

## Siguiente evolución sugerida

Este proyecto es una base inicial. La siguiente etapa podría incluir:

- persistencia real en PostgreSQL
- autenticación JWT
- documentación Swagger
- frontend con React
- despliegue con Vercel/Render

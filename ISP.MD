# Proyecto ISP - Plan de desarrollo inicial

## 1. Objetivo del proyecto

Desarrollar un sistema para la gestión operativa de una empresa de telecomunicaciones enfocada en la venta, instalación, mantenimiento y atención de servicios de internet y televisión. El sistema debe permitir:

- Registrar clientes y sus datos de contacto.
- Gestionar contratos y planes de servicios.
- Administrar equipos asociados a cada cliente y servicio.
- Controlar la trazabilidad de cada servicio y su historial.
- Gestionar solicitudes de instalación, mantenimiento, fallas y revisiones.
- Medir inventario por equipo, stock y asignación.
- Generar reportes operativos y de negocio.
- Preparar la base para futuras integraciones de activación/desactivación de equipos mediante VLAN o gestión remota.

---

## 2. Alcance inicial del proyecto

### Módulos básicos a construir en la primera etapa

1. Clientes
   - Registro de clientes.
   - Datos personales, ubicación, contacto y documentos.
   - Estado del cliente.
   - Historial de servicios asociados.

2. Contratos
   - Contratación de servicio por cliente.
   - Tipo de servicio: internet, televisión, combo, etc.
   - Fechas de inicio, renovación y fin.
   - Estado del contrato: activo, suspendido, cancelado, pendiente.

3. Planes de servicio
   - Definición de planes con velocidad, precio, beneficios y cobertura.
   - Relación con el tipo de producto/servicio.
   - Asociación a contratos y clientes.

4. Equipos utilizados
   - Inventario de equipos: routers, ONTs, decodificadores, switches, acces points, etc.
   - Estado del equipo: disponible, asignado, dañado, en reparación, retirado.
   - Relación con cliente y servicio.

5. Trazabilidad de servicios y equipos
   - Cada servicio debe quedar ligado a un cliente, un contrato, un plan y un equipo.
   - Registro de historial de instalación, cambios, mantenimiento, retiro o reemplazo.
   - Auditoría de eventos por fecha, responsable y tipo de operación.

6. Inventario
   - Control de stock por tipo de equipo.
   - Asignación y devolución.
   - Reportes de disponibilidad y rotación.

7. Gestión de solicitudes
   - Solicitudes de instalación.
   - Solicitudes de mantenimiento.
   - Reportes de fallas.
   - Seguimiento por prioridad, estado y responsable.

8. Reportes y medición de operación
   - Servicios activos por zona.
   - Mantenimientos pendientes.
   - Equipos asignados versus stock disponible.
   - Indicadores clave: clientes activos, contratos vigentes, tasa de atención, equipos en inventario.

---

## 3. Paso a paso del desarrollo

### Fase 1: Levantamiento y análisis del negocio (5 a 7 días)

Objetivo: comprender la lógica operativa de la empresa y definir el alcance real del sistema.

Actividades:
- Definir tipos de clientes y perfiles.
- Identificar servicios ofrecidos.
- Mapear procesos: venta, instalación, soporte, mantenimiento, retiro.
- Determinar entidades principales: cliente, contrato, plan, servicio, equipo, solicitud.
- Definir indicadores clave para reportes.
- Validar reglas del negocio con el usuario final.

Entregables:
- Documento de requisitos funcionales.
- Diagrama de entidades y relación.
- Mapa de procesos.

---

### Fase 2: Diseño de la base de datos y arquitectura (5 a 8 días)

Objetivo: construir la estructura de datos que soporte la trazabilidad, el inventario y los reportes.

Entidades sugeridas:
- clientes
- contratos
- planes_servicio
- servicios
- equipos
- inventario
- asignaciones_equipo
- solicitudes
- historial_servicio
- usuarios
- roles
- bitácora_actividades

Relaciones principales:
- Cliente -> muchos contratos
- Contrato -> muchos servicios
- Servicio -> un plan
- Servicio -> muchos equipos asociados
- Equipo -> muchas asignaciones
- Solicitud -> un cliente, servicio o equipo

Entregables:
- Modelo entidad-relación.
- Estructura de tablas.
- Reglas de negocio definidas.

---

### Fase 3: Desarrollo del backend y APIs (12 a 18 días)

Objetivo: crear la capa lógica para gestionar clientes, contratos, planes, equipos, solicitudes e inventario.

Operaciones a desarrollar:
- CRUD de clientes
- CRUD de contratos
- CRUD de planes
- CRUD de equipos
- Asignación/desasignación de equipos
- Registro de historial de servicio
- Gestión de solicitudes
- Cambio de estado de contratos y servicios
- Consultas de reportes básicos
- Autenticación y autorización por roles

Tecnologías recomendadas:
- Node.js + NestJS o Express
- C# + ASP.NET Core (también viable para empresas con entorno Microsoft)
- PostgreSQL como base de datos principal
- JWT para autenticación
- Swagger/OpenAPI para documentación de APIs

---

### Fase 4: Desarrollo del frontend (10 a 15 días)

Objetivo: crear una interfaz funcional para que los usuarios gestionen la operación diaria.

Módulos esperados en la interfaz:
- Dashboard general
- Gestión de clientes
- Gestión de contratos
- Gestión de planes
- Inventario de equipos
- Registro de solicitudes
- Historial de servicios
- Reportes operativos

Herramientas sugeridas:
- React + Vite
- Next.js (si se quiere más robustez para aplicación web enterprise)
- Tailwind CSS o Bootstrap para diseño rápido y limpio

---

### Fase 5: Integración de reportes y trazabilidad (5 a 7 días)

Objetivo: dar seguimiento operativo y comprobación real del estado de los servicios.

Reportes clave:
- Clientes activos por zona
- Servicios activos por plan
- Inventario disponible por tipo de equipo
- Equipos asignados a clientes
- Solicitudes abiertas por prioridad
- Histórico de mantenimiento y fallas
- Mantenimientos programados

Se recomienda:
- Generación de reportes en backend
- Exportación a CSV/PDF
- Gráficos con Chart.js o Recharts

---

### Fase 6: Pruebas funcionales y corrección (5 a 7 días)

Objetivo: validar que cada proceso opere correctamente antes de puesta en marcha.

Tipos de pruebas:
- Pruebas de CRUD
- Pruebas de flujo de instalación
- Pruebas de asignación de equipos
- Pruebas de inventario
- Pruebas de reportes
- Pruebas de roles y permisos
- Validación de errores y estados no esperados

---

### Fase 7: Despliegue y puesta en producción (3 a 5 días)

Objetivo: dejar la solución disponible para uso inicial operativo.

Opciones:
- Vercel o Netlify para frontend
- Render, Railway, Azure App Service o VPS para backend
- PostgreSQL en Neon, Supabase, Azure Database o servidor propio
- CI/CD con GitHub Actions

---

## 4. Tiempos estimados generales

| Fase | Tiempo estimado |
| --- | --- |
| Levantamiento y análisis | 5 a 7 días |
| Diseño de base de datos y arquitectura | 5 a 8 días |
| Backend y APIs | 12 a 18 días |
| Frontend | 10 a 15 días |
| Reportes y trazabilidad | 5 a 7 días |
| Pruebas y corrección | 5 a 7 días |
| Despliegue | 3 a 5 días |
| Total estimado inicial | 45 a 67 días |

> Este tiempo puede variar según la complejidad del negocio, cantidad de reportes, diseño final y número de roles/usuarios del sistema.

---

## 5. Secciones / operaciones del sistema por área

### Área de clientes
- Registro y actualización de clientes
- Seguimiento por estado
- Búsqueda por nombre, documento, dirección o teléfono
- Historial de servicios asociados

### Área de contratos y servicios
- Crear contratos y asociar planes
- Activar, inactivar o suspender servicios
- Validar vencimientos y renovaciones
- Ver la cobertura de cada plan

### Área de equipos e inventario
- Registrar equipos
- Gestionar stock físico
- Asignar equipos a clientes
- Revisar disponibilidad real
- Registrar reparación o baja

### Área de solicitudes y soporte
- Solicitudes de instalación
- Solicitudes de mantenimiento
- Reportes de falla
- Prioridades y tiempos de atención
- Historial de solución por cada caso

### Área de reportes
- Clientes activos
- Servicios por plan
- Inventario total
- Equipos por zona
- Mantenimientos pendientes
- Tiempos de resolución

---

## 6. Estructura recomendada de la solución

### Frontend
- React + Vite o Next.js
- Tailwind CSS
- Componentes reutilizables por módulo
- Layout con dashboard, menú lateral y gestión por tabla

### Backend
- Node.js + NestJS
- PostgreSQL
- JWT
- Swagger para documentación
- Manejo de errores centralizado

### Base de datos
- PostgreSQL
- Estructura relacional para trazabilidad
- Tablas con campos de auditoría: creado_por, actualizado_por, fecha_creacion, fecha_actualizacion

### Infraestructura
- GitHub para control de versiones
- GitHub Actions para despliegue continuo
- Docker opcional para entorno de desarrollo y pruebas
- Nginx, Azure App Service o VPS para producción

---

## 7. Tecnologías recomendadas para este proyecto

### Stack recomendado para inicio
- Frontend: React + Vite + Tailwind CSS
- Backend: Node.js + NestJS
- Base de datos: PostgreSQL
- Autenticación: JWT o Auth0 / Keycloak
- API docs: Swagger / OpenAPI
- Control de versiones: Git + GitHub
- Deployment: Vercel + Render / Railway / Azure
- Reportes: Chart.js, Recharts o exportación PDF/CSV

### Opción alternativa para entornos Microsoft
- Frontend: React o Blazor
- Backend: C# + ASP.NET Core
- Base de datos: SQL Server o PostgreSQL
- Identity para autenticación
- Reporting Services / Power BI para reportes avanzados

### Herramientas útiles adicionales
- Postman para pruebas de API
- Docker para entorno local
- GitHub Actions para automatización
- ESLint + Prettier para calidad de código

---

## 8. Recomendación de diseño funcional para la etapa inicial

Para el arranque del proyecto, recomiendo una arquitectura modular y escalable, con estas 6 piezas principales:

1. Administración de clientes
2. Administración de contratos y servicios
3. Inventario y asignación de equipos
4. Gestión de instalaciones y mantenimientos
5. Reportes y trazabilidad
6. Seguridad y usuarios

Esto permitirá construir una base sólida sin perder la capacidad de evolucionar hacia integraciones más complejas como:

- Activación y desactivación de equipos por VLAN
- Control remoto de equipos
- Automatización de tareas de provisioning
- Monitoreo de red y estados de servicio
- Integración con CRM y soporte técnico

---

## 9. Futura expansión (próxima etapa)

La segunda etapa del proyecto podría incluir:

- Gestión remota de equipos por VLAN
- Activación/desactivación automática mediante scripts o integración con infraestructura de red
- Identificación del equipo en red y validación de acceso
- Control de estados por servicio y por nodo de red
- Registro de cambios de configuración
- Integración con monitoreo de red o NMS

Esta evolución no debe bloquear el desarrollo inicial, pero sí debe planearse desde el inicio en la definición de los datos y de la trazabilidad.

---

## 10. Conclusión

El proyecto debe arrancar con una base sólida de gestión operativa para clientes, contratos, planes, equipos y trazabilidad de servicios. Es importante definir bien las reglas de negocio y la relación entre clientes, servicios y equipos, porque eso garantizará que más adelante se pueda integrar activación/desactivación de equipos por VLAN o gestión remota sin reestructurar todo el sistema.

La recomendación principal es empezar por:
- clientes
- contratos
- planes de servicio
- equipos
- trazabilidad de servicios
- reportes
- inventario
- solicitudes y mantenimiento

Con esta estructura, el sistema puede crecer de manera ordenada y profesional.

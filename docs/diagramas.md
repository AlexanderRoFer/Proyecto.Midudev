# Diagramas del paso 1

Este archivo contiene los diagramas iniciales del sistema de gestión ISP.

## 1. Diagrama entidad-relación

```mermaid
erDiagram
    CLIENTE ||--o{ CONTRATO : tiene
    CLIENTE ||--o{ SOLICITUD : realiza
    CONTRATO ||--o{ SERVICIO : incluye
    SERVICIO }o--|| PLAN : usa
    SERVICIO ||--o{ EQUIPO : asigna
    SERVICIO ||--o{ HISTORIAL : registra
    PLAN ||--o{ SERVICIO : define
    EQUIPO ||--o{ ASIGNACION : se_asigna
    CLIENTE ||--o{ DIRECCION : tiene

    CLIENTE {
      int id
      string nombre
      string documento
      string telefono
      string email
      string estado
    }

    CONTRATO {
      int id
      int clienteId
      int planId
      date fechaInicio
      date fechaFin
      string estado
    }

    PLAN {
      int id
      string nombre
      string tipoServicio
      float precio
      string velocidad
    }

    SERVICIO {
      int id
      int contratoId
      int planId
      string tipo
      string estado
    }

    EQUIPO {
      int id
      string tipo
      string marca
      string modelo
      string estado
      string serial
    }

    SOLICITUD {
      int id
      int clienteId
      string tipo
      string prioridad
      string estado
      string descripcion
    }

    HISTORIAL {
      int id
      int servicioId
      string evento
      date fecha
      string responsable
    }
```

## 2. Diagrama de flujo de instalación

```mermaid
flowchart TD
    A[Cliente solicita servicio] --> B[Registrar cliente]
    B --> C[Crear contrato]
    C --> D[Seleccionar plan]
    D --> E[Validar disponibilidad]
    E --> F[Asignar equipo]
    F --> G[Registrar solicitud de instalación]
    G --> H[Instalación y validación]
    H --> I[Activar servicio]
    I --> J[Guardar historial]
    J --> K[Servicio activo]
```

## 3. Diagrama de arquitectura del sistema

```mermaid
flowchart LR
    U[Usuario / Operador] --> FE[Frontend React]
    FE --> API[Backend Express]
    API --> SVC[Servicios por dominio]
    SVC --> DATA[Datos en memoria / persistencia futura]
    API --> REP[Reportes operativos]
    DATA --> DB[(PostgreSQL)]
```

## 4. Resumen funcional por módulo

- Clientes: registro, consulta y seguimiento.
- Contratos: creación, activación y vencimiento.
- Planes: definición de precios y velocidad.
- Equipos: inventario, estado y asignación.
- Solicitudes: instalación, mantenimiento y fallas.
- Reportes: estado operativo y métricas.

## 5. Observación de diseño

La base del sistema está pensada para crecer con PostgreSQL, autenticación JWT y capa de reportes. El objetivo en esta etapa es mantener el modelo simple, trazable y documentado.

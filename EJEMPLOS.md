# API REST Básica

Una API REST simple construida con Node.js y Express para gestionar usuarios.

## Características

- ✅ Operaciones CRUD (Crear, Leer, Actualizar, Eliminar)
- ✅ Manejo de errores básico
- ✅ Respuestas en formato JSON
- ✅ Validación de entrada

## Instalación

```bash
npm install
```

## Uso

Inicia el servidor:

```bash
npm start
```

La API estará disponible en `http://localhost:3000`

## Endpoints

### GET /
```bash
curl http://localhost:3000
```

### GET /api/usuarios
Obtener todos los usuarios:
```bash
curl http://localhost:3000/api/usuarios
```

### GET /api/usuarios/:id
Obtener un usuario específico:
```bash
curl http://localhost:3000/api/usuarios/1
```

### POST /api/usuarios
Crear un nuevo usuario:
```bash
curl -X POST http://localhost:3000/api/usuarios \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Carlos", "email": "carlos@example.com"}'
```

### PUT /api/usuarios/:id
Actualizar un usuario:
```bash
curl -X PUT http://localhost:3000/api/usuarios/1 \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Juan Actualizado", "email": "juan.nuevo@example.com"}'
```

### DELETE /api/usuarios/:id
Eliminar un usuario:
```bash
curl -X DELETE http://localhost:3000/api/usuarios/1
```

## Estructura del Proyecto

```
.
├── package.json      # Dependencias y scripts
├── server.js         # Servidor principal
└── EJEMPLOS.md       # Este archivo
```

## Próximos Pasos

Para mejorar la API, considera:
- Usar base de datos (MongoDB, PostgreSQL, etc.)
- Implementar autenticación
- Agregar validación más robusta
- Implementar logging
- Agregar tests
- Usar variables de entorno

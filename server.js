const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Base de datos simulada
let usuarios = [
  { id: 1, nombre: 'Juan', email: 'juan@example.com' },
  { id: 2, nombre: 'María', email: 'maria@example.com' }
];

// Rutas GET
app.get('/', (req, res) => {
  res.json({ mensaje: 'Bienvenido a la API REST' });
});

// Obtener todos los usuarios
app.get('/api/usuarios', (req, res) => {
  res.json(usuarios);
});

// Obtener usuario por ID
app.get('/api/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  
  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  
  res.json(usuario);
});

// Rutas POST
app.post('/api/usuarios', (req, res) => {
  const { nombre, email } = req.body;
  
  if (!nombre || !email) {
    return res.status(400).json({ error: 'Nombre y email son requeridos' });
  }
  
  const nuevoUsuario = {
    id: usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1,
    nombre,
    email
  };
  
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

// Rutas PUT
app.put('/api/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  
  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  
  if (req.body.nombre) usuario.nombre = req.body.nombre;
  if (req.body.email) usuario.email = req.body.email;
  
  res.json(usuario);
});

// Rutas DELETE
app.delete('/api/usuarios/:id', (req, res) => {
  const index = usuarios.findIndex(u => u.id === parseInt(req.params.id));
  
  if (index === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  
  const usuarioEliminado = usuarios.splice(index, 1);
  res.json({ mensaje: 'Usuario eliminado', usuario: usuarioEliminado[0] });
});

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ API REST ejecutándose en http://localhost:${PORT}`);
});

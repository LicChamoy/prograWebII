const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('La base de datos aun no explota :D'))
  .catch((err) => console.error('Trono la bd,', err));

// Rutas de los controladores
const usuariosRoutes = require('./routes/usuarios');
const publicacionesRoutes = require('./routes/publicaciones');
const etiquetasRoutes = require('./routes/etiquetas');
const comentariosRoutes = require('./routes/comentarios');
const authRoutes = require('./routes/auth');

// Middlewares
const authMiddleware = require('./middleware/authMiddleware');
const adminMiddleware = require('./middleware/adminMiddleware');

// Rutas
app.use('/usuarios', usuariosRoutes);
app.use('/publicaciones', publicacionesRoutes);
app.use('/etiquetas', etiquetasRoutes);
app.use('/comentarios', comentariosRoutes);

app.use('/comentarios/reportados', authMiddleware, adminMiddleware, comentariosRoutes);
app.use('/auth', authRoutes);

// Configuración del puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto: ${PORT}`));

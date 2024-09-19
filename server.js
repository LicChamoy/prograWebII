const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('La base de datos aun no explota :D'))
  .catch((err) => console.error('Trono la bd,',err));

const usuariosRoutes = require('./routes/usuarios');
const publicacionesRoutes = require('./routes/publicaciones');
const etiquetasRoutes = require('./routes/etiquetas');
const comentariosRoutes = require('./routes/comentarios');

app.use('/usuarios', usuariosRoutes);
app.use('/publicaciones', publicacionesRoutes);
app.use('/etiquetas', etiquetasRoutes);
app.use('/publicaciones', comentariosRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Puerto: ${PORT}`));

const express = require('express');
const router = express.Router();
const Publicacion = require('../models/Publicacion');

// Crear una nueva publicación
router.post('/', async (req, res) => {
  try {
    const { idUsuario, titulo, contenido, etiquetas } = req.body;
    const nuevaPublicacion = new Publicacion({ idUsuario, titulo, contenido, etiquetas });
    await nuevaPublicacion.save();
    res.status(201).json({ mensaje: 'Publicación creada con éxito', publicacion: nuevaPublicacion });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtener todas las publicaciones
router.get('/', async (req, res) => {
  try {
    const publicaciones = await Publicacion.find().populate('idUsuario', 'nombreUsuario');
    res.json(publicaciones);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtener publicación por ID
router.get('/:idPublicacion', async (req, res) => {
  try {
    const publicacion = await Publicacion.findById(req.params.idPublicacion).populate('idUsuario', 'nombreUsuario');
    if (!publicacion) return res.status(404).json({ mensaje: 'Publicación no encontrada' });
    res.json(publicacion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

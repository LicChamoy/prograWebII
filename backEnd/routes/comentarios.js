const express = require('express');
const router = express.Router();
const Comentario = require('../models/Comentario');

// Crear un nuevo comentario en una publicación
router.post('/:idPublicacion/comentarios', async (req, res) => {
  try {
    const { idUsuario, contenido } = req.body;
    const nuevoComentario = new Comentario({ idPublicacion: req.params.idPublicacion, idUsuario, contenido });
    await nuevoComentario.save();
    res.status(201).json({ mensaje: 'Comentario agregado con éxito', comentario: nuevoComentario });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtener todos los comentarios de una publicación
router.get('/:idPublicacion/comentarios', async (req, res) => {
  try {
    const comentarios = await Comentario.find({ idPublicacion: req.params.idPublicacion });
    res.json(comentarios);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

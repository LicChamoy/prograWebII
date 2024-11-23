const express = require('express');
const router = express.Router();
const Comentario = require('../models/Comentario');
const Usuario = require('../models/Usuario');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

// Reportar un comentario como inapropiado
router.patch('/:idComentario/reportar', async (req, res) => {
  try {
    const comentario = await Comentario.findByIdAndUpdate(
      req.params.idComentario,
      { reportado: true },
      { new: true }
    );

    if (!comentario) {
      return res.status(404).json({ mensaje: 'Comentario no encontrado' });
    }

    res.json({ mensaje: 'Comentario reportado con éxito', comentario });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener todos los comentarios reportados
router.get('/reportados', async (req, res) => {
  try {
    const comentariosReportados = await Comentario.find({ reportado: true });
    res.json(comentariosReportados);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Eliminar un comentario (solo administradores)
router.delete('/:idComentario', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const comentarioEliminado = await Comentario.findByIdAndDelete(req.params.idComentario);

    if (!comentarioEliminado) {
      return res.status(404).json({ mensaje: 'Comentario no encontrado' });
    }

    res.json({ mensaje: 'Comentario eliminado con éxito', comentario: comentarioEliminado });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Quitar el reporte de un comentario (solo administradores)
router.patch('/:idComentario/quitarReporte', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const comentario = await Comentario.findByIdAndUpdate(
      req.params.idComentario,
      { reportado: false },
      { new: true }
    );

    if (!comentario) {
      return res.status(404).json({ mensaje: 'Comentario no encontrado' });
    }

    res.json({ mensaje: 'Reporte del comentario eliminado con éxito', comentario });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

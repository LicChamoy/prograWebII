const express = require('express');
const router = express.Router();
const Etiqueta = require('../models/Etiqueta');

// Crear nueva etiqueta
router.post('/', async (req, res) => {
  try {
    const { nombreEtiqueta } = req.body;
    const nuevaEtiqueta = new Etiqueta({ nombreEtiqueta });
    await nuevaEtiqueta.save();
    res.status(201).json({ mensaje: 'Etiqueta creada con éxito', etiqueta: nuevaEtiqueta });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtener todas las etiquetas
router.get('/', async (req, res) => {
  try {
    const etiquetas = await Etiqueta.find();
    res.json(etiquetas);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtener etiquetas más populares
router.get('/populares', async (req, res) => {
  try {
    const etiquetasPopulares = await Etiqueta.aggregate([
      { $match: {} }, // Filtro opcional
      { $lookup: { from: 'publicaciones', localField: 'nombreEtiqueta', foreignField: 'etiquetas', as: 'usos' } },
      { $addFields: { totalUsos: { $size: '$usos' } } },
      { $sort: { totalUsos: -1 } },
      { $limit: 3 }
    ]);

    res.json(etiquetasPopulares);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener etiquetas populares.' });
  }
});

module.exports = router;

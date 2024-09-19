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

module.exports = router;

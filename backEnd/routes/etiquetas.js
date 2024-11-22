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
  } catch (error) {
    // Detectar error de duplicado
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Esa etiqueta ya existe.' });
    }
    res.status(500).json({ error: 'Ocurrió un error al crear la etiqueta.' });
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

router.get('/populares', async (req, res) => {
  try {
    // Agrega un pipeline de agregación para contar usos en publicaciones
    const etiquetasPopulares = await Publicacion.aggregate([
      { $unwind: '$etiquetas' }, // Descompone el array de etiquetas en múltiples documentos
      { $group: { _id: '$etiquetas', usos: { $sum: 1 } } }, // Cuenta las veces que aparece cada etiqueta
      { $sort: { usos: -1 } }, // Ordena por usos descendentes
      { $limit: 3 } // Limita a las 3 etiquetas más populares
    ]);

    // Opcional: Traer el nombre de las etiquetas
    const etiquetasConNombre = await Etiqueta.find({
      _id: { $in: etiquetasPopulares.map((e) => e._id) }
    });

    const resultado = etiquetasPopulares.map((etiqueta) => ({
      _id: etiqueta._id,
      usos: etiqueta.usos,
      nombreEtiqueta: etiquetasConNombre.find((e) => e._id.toString() === etiqueta._id.toString())?.nombreEtiqueta
    }));

    res.json(resultado);
  } catch (err) {
    res.status(500).json({ error: 'Ocurrió un error al obtener etiquetas populares' });
  }
});


module.exports = router;

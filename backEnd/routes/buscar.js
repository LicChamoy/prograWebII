const express = require('express');
const router = express.Router();
const Publicacion = require('../models/Publicacion'); // Asegúrate de que esta ruta sea correcta

router.get('/', async (req, res) => {
  try {
    const { keyword } = req.query;
    if (!keyword) {
      return res.status(400).json({ mensaje: 'Debe proporcionar una palabra clave para la búsqueda.' });
    }

    const publicaciones = await Publicacion.find({
      $or: [
        { titulo: { $regex: keyword, $options: 'i' } },
        { contenido: { $regex: keyword, $options: 'i' } }
      ]
    }).populate('idUsuario', 'nombreUsuario').populate('comentarios');

    res.json(publicaciones);
  } catch (err) {
    console.error('Error al realizar la búsqueda:', err);
    res.status(500).json({ error: 'Ocurrió un error al realizar la búsqueda.' });
  }
});

module.exports = router;

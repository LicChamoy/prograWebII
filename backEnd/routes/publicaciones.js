const express = require('express');
const router = express.Router();
const Publicacion = require('../models/Publicacion');
const Comentario = require('../models/Comentario');
const Etiqueta = require('../models/Etiqueta');

// Crear una nueva publicación
router.post('/', async (req, res) => {
  try {
    const { idUsuario, titulo, contenido, etiquetas } = req.body;
    const nuevaPublicacion = new Publicacion({ idUsuario, titulo, contenido, etiquetas });
    await nuevaPublicacion.save();

    // Incrementar el contador de usos de cada etiqueta
    await Etiqueta.updateMany(
      { _id: { $in: etiquetas } },
      { $inc: { usos: 1 } } // Incrementa el campo 'usos' en 1 para cada etiqueta
    );

    res.status(201).json({ mensaje: 'Publicación creada con éxito', publicacion: nuevaPublicacion });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtener todas las publicaciones
router.get('/', async (req, res) => {
  try {
    const publicaciones = await Publicacion.find(); // Encuentra todas las publicaciones en la base de datos
    res.json(publicaciones); // Devolvemos el array de publicaciones
  } catch (error) {
    // Imprime el error completo en la consola para mayor visibilidad
    console.error('Error al obtener las publicaciones:', error);

    // Devuelve detalles adicionales en la respuesta
    res.status(500).json({
      message: 'Error al obtener las publicaciones',
      error: error.message, // Mensaje del error
      stack: error.stack, // Pila de la excepción
    });
  }
});

router.get('/:idPublicacion', async (req, res) => {
  try {
    const publicacion  = await Publicacion.findById(req.params.idPublicacion)
      .populate('idUsuario', 'nombreUsuario')
      .populate({
        path: 'comentarios',
        populate: { path: 'idUsuario', select: 'nombreUsuario' }
      });

    if (!publicacion ) {
      return res.status(404).json({ mensaje: 'Publicación no encontrada' });
    }

    res.json({ publicacion  }); 
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener la publicación en la solicitud al servidor' });
  }
});

// Obtener publicaciones por nombre de etiqueta
router.get('/por-nombre', async (req, res) => {
  try {
    const { nombreEtiqueta } = req.query; // Obtener el nombre de la etiqueta desde el query string

    // Buscar la etiqueta por nombre
    const etiqueta = await Etiqueta.findOne({ nombreEtiqueta });
    if (!etiqueta) {
      return res.status(404).json({ mensaje: 'Etiqueta no encontrada' });
    }

    // Usar el ID de la etiqueta para buscar las publicaciones que contienen esa etiqueta
    const publicaciones = await Publicacion.find({ etiquetas: etiqueta._id })
      .populate('idUsuario', 'nombreUsuario'); // Opcional: incluir información del usuario

    if (publicaciones.length === 0) {
      return res.status(404).json({ mensaje: 'No se encontraron publicaciones para esa etiqueta' });
    }

    res.json(publicaciones);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// Crear un nuevo comentario en una publicación
const mongoose = require('mongoose');

router.post('/:idPublicacion/comentarios', async (req, res) => {
  try {
    const { idUsuario, contenido } = req.body;

    const nuevoComentario = new Comentario({ idPublicacion: req.params.idPublicacion, idUsuario, contenido });
    
    await nuevoComentario.save();
    res.status(201).json({ mensaje: 'Comentario agregado con éxito', comentario: nuevoComentario });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

// Obtener todos los comentarios de una publicación
router.get('/:idPublicacion/comentarios', async (req, res) => {
  try {
    const comentarios = await Comentario.find({ idPublicacion: req.params.idPublicacion })
    .populate('idUsuario', 'nombreUsuario')
    .exec();
    
    res.json(comentarios);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
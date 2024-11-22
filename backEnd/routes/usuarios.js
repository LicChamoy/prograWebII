const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// Registrar usuario
router.post('/', async (req, res) => {
  try {
    const { nombreUsuario, email, password } = req.body;

    // Verificar si el nombre de usuario o correo ya están registrados
    const usuarioExistente = await Usuario.findOne({
      $or: [{ nombreUsuario }, { email }],
    });

    if (usuarioExistente) {
      return res.status(400).json({ error: 'El nombre de usuario o correo ya están registrados.' });
    }

    // Crear el nuevo usuario
    const nuevoUsuario = new Usuario({ nombreUsuario, email, password });
    await nuevoUsuario.save();

    // Respuesta exitosa
    res.status(201).json({ mensaje: 'Usuario registrado con éxito', usuario: nuevoUsuario });
  } catch (err) {
    res.status(500).json({ error: 'Error al registrar usuario.' });
  }
});


// Obtener perfil de usuario
router.get('/:idUsuario', async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.idUsuario);
    if (!usuario) return res.status(404).json({ mensaje: 'El usuario no existe' });
    res.json(usuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

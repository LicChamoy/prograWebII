const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// Registrar usuario
router.post('/', async (req, res) => {
  try {
    const { nombreUsuario, email, password } = req.body;
    const nuevoUsuario = new Usuario({ nombreUsuario, email, password });
    await nuevoUsuario.save();
    res.status(201).json({ mensaje: 'Usuario registrado con éxito', usuario: nuevoUsuario });
  } catch (err) {
    res.status(400).json({ error: err.message });
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

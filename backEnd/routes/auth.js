const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
  const { nombreUsuario, email, password } = req.body;

  // Determinar si se ha proporcionado un nombre de usuario o un correo electrónico
  const loginField = email || nombreUsuario;

  try {
    // Buscar al usuario por nombre de usuario o correo electrónico
    const usuario = await Usuario.findOne({
      $or: [{ nombreUsuario: loginField }, { email: loginField }],
    });

    if (!usuario) {
      return res.status(404).json({ mensaje: 'El usuario no existe' });
    }

    // Comparar la contraseña ingresada con la almacenada
    if (usuario.password !== password) {
      return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }

    // Generar un token JWT
    const token = jwt.sign(
      { id: usuario._id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Respuesta exitosa con el token
    res.json({ mensaje: 'Inicio de sesión exitoso', token });
  } catch (err) {
    res.status(500).json({ error: 'Error del servidor', detalles: err.message });
  }
});

module.exports = router;

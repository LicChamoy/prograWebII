const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

// Middleware para verificar el token y agregar el usuario a la solicitud
const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ mensaje: 'Acceso no autorizado. No se proporcionó token.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const usuario = await Usuario.findById(decoded.id);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado.' });
    }

    req.usuarioId = usuario._id;
    req.usuario = usuario;

    next();
  } catch (err) {
    res.status(401).json({ mensaje: 'Token inválido o expirado.' });
  }
};

// Middleware para verificar si el usuario es administrador
const adminMiddleware = (req, res, next) => {
  if (!req.usuario || !req.usuario.esAdmin) {
    return res.status(403).json({ mensaje: 'Acceso denegado. No eres un administrador.' });
  }

  next();
};

// Exportar ambos middlewares
module.exports = {
  authMiddleware,
  adminMiddleware,
};

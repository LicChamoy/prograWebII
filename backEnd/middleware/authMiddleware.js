const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario'); // Asegúrate de importar el modelo correcto

// Middleware para verificar el token y agregar el usuario a la solicitud
const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); // Extraer el token del header

  if (!token) {
    return res.status(401).json({ mensaje: 'Acceso no autorizado. No se proporcionó token.' });
  }

  try {
    // Verificar y decodificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Buscar el usuario en la base de datos usando el id del token
    const usuario = await Usuario.findById(decoded.id);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado.' });
    }

    // Agregar el usuario al objeto de solicitud
    req.usuarioId = usuario._id;
    req.usuario = usuario;

    next(); // Llamar al siguiente middleware o ruta
  } catch (err) {
    res.status(401).json({ mensaje: 'Token inválido o expirado.' });
  }
};

// Middleware para verificar si el usuario es administrador
const adminMiddleware = (req, res, next) => {
    if (!req.usuario || !req.usuario.esAdmin) {
      return res.status(403).json({ mensaje: 'Acceso denegado. No eres un administrador.' });
    }
  
    next(); // Si el usuario es administrador, continuar con la solicitud
  };
  
  module.exports = adminMiddleware;
  
module.exports = authMiddleware;

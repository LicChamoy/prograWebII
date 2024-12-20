const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombreUsuario: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fechaRegistro: { type: Date, default: Date.now },
  esAdmin: { type: Boolean, default: false }
});

module.exports = mongoose.model('Usuario', usuarioSchema);

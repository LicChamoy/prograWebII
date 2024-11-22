const mongoose = require('mongoose');

const etiquetaSchema = new mongoose.Schema({
  nombreEtiqueta: { type: String, required: true, unique: true },
  usos: { type: Number, default: 0 } // Nuevo campo para contar los usos
});

module.exports = mongoose.model('Etiqueta', etiquetaSchema);

const mongoose = require('mongoose');

const etiquetaSchema = new mongoose.Schema({
  nombreEtiqueta: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Etiqueta', etiquetaSchema);

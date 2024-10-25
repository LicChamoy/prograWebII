const mongoose = require('mongoose');

const publicacionSchema = new mongoose.Schema({
  idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  titulo: { type: String, required: true },
  contenido: { type: String, required: true },
  fechaPublicacion: { type: Date, default: Date.now },
  etiquetas: [{ type: String }]
});

module.exports = mongoose.model('Publicacion', publicacionSchema);

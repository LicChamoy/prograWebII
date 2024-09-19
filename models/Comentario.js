const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
  idPublicacion: { type: mongoose.Schema.Types.ObjectId, ref: 'Publicacion', required: true },
  idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  contenido: { type: String, required: true },
  fechaComentario: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comentario', comentarioSchema);

import React from 'react';

const PublicacionForm = () => {
  return (
    <div className="publicacion-contenedor-crear">
      <div className="publicacion-crear">
        <div className="pub-opciones">
          <textarea
            id="input-pub-titulo"
            placeholder="Título para tu pregunta aquí..."
          ></textarea>
          <textarea
            id="input-pub-contenido"
            placeholder="Publica tu pregunta aquí..."
          ></textarea>
          <label htmlFor="etiqueta">Selecciona una etiqueta:</label>
          <select name="etiquetas" id="etiqueta">
            <option value="1" selected>
              Etiqueta1
            </option>
            <option value="2">Etiqueta2</option>
            <option value="3">Etiqueta3</option>
          </select>
        </div>
        <div className="pub-opciones-btn">
          <button id="btn-crearPublicacion">Publicar</button>
        </div>
      </div>
    </div>
  );
};

export default PublicacionForm;

import React from 'react';

const Etiqueta = () => {
  return (
    <div className="etiqueta-contenedor-crear">
      <div className="etiqueta-crear">
        <div className="eti-opciones">
          <label htmlFor="input-eti-etiqueta">Registra una nueva etiqueta:</label>
          <input id="input-eti-etiqueta" type="text" placeholder="Nombre de la etiqueta..." />
        </div>
        <div className="eti-opciones-btn">
          <button id="btn-crearEtiqueta">Crear etiqueta</button>
        </div>
      </div>
    </div>
  );
};

export default Etiqueta;
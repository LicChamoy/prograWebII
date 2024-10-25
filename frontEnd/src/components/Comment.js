import React from 'react';

const Comment = () => {
  return (
    <div className="comentario-contenedor">
      <div className="comentario">
        <div className="texto-detalle">
          <div className="superior">
            <img src="../img/admin.png" alt="imagenUsuario" />
            <h5 id="usuarioCom">Anonimo ∼</h5>
            <h5 id="hora">hace 5 horas</h5>
          </div>
          <h5 id="comentarioUsu">Aquí irá la respuesta a la publicación con dudas de algún tema en específico.</h5>
        </div>
      </div>
      <div className="opcionesCom">
        <div className="botonCom" id="likesCom">
          <label htmlFor="likeCom">
            <i className="fa-solid fa-up-long" style={{ color: '#ffffff' }} />
            0 
          </label>
          <label htmlFor="dislikeCom">
            <i className="fa-solid fa-down-long" style={{ color: '#ffffff' }} />
          </label>
        </div>
        <label htmlFor="comentarioCom">
          <div className="botonCom" id="comentarioCom">
            <i className="fa-solid fa-comment" style={{ color: '#ffffff' }} />
            1
          </div>
        </label>
        <label htmlFor="agregarCom">
          <div className="botonCom" id="agregarCom">
            <i className="fa-solid fa-plus" style={{ color: '#ffffff' }} />
            Añadir comentario
          </div>
        </label>
      </div>
    </div>
  );
};

export default Comment;

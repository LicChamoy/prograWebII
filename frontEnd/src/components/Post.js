import React from 'react';
import '../styles/post.css';

const Post = () => {
  return (
    <div className="publicacion">
      <div className="publicacion-detalle">
        <div className="texto-detalle">
          <div className="superior">
            <img src="../img/admin.png" alt="imagenUsuario" />
            <h5 id="discusion">/preguntaReact ∼</h5>
            <h5 id="hora">hace 7 horas</h5>
          </div>
          <h5 id="usuario">Chamoi</h5>
        </div>
        <div className="publicacion-contenido">
          Aquí irá la duda correspondiente al tema seleccionado o etiqueta de la publicación.
        </div>
        <div className="opciones">
          <div className="boton" id="likes">
            <label htmlFor="like">
              <i className="fa-solid fa-up-long" style={{ color: '#ffffff' }} />
              0 
            </label>
            <label htmlFor="dislike">
              <i className="fa-solid fa-down-long" style={{ color: '#ffffff' }} />
            </label>
          </div>
          <label htmlFor="comentario">
            <div className="boton" id="comentario">
              <i className="fa-solid fa-comment" style={{ color: '#ffffff' }} />
              1
            </div>
          </label>
          <label htmlFor="agregar">
            <div className="boton" id="agregar">
              <i className="fa-solid fa-plus" style={{ color: '#ffffff' }} />
              Añadir comentario
            </div>
          </label>
        </div>
        <Comment />
      </div>
    </div>
  );
};

export default Post;

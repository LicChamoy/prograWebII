// Post.jsx
import React from 'react';
import Comment from './Comment';
import '../styles/post.css';

const Post = ({ publicacion }) => {
  if (!publicacion) {
    return <div>Publicación no disponible.</div>;
  }

  const { titulo, contenido, etiquetas, fechaPublicacion } = publicacion;
  const fecha = new Date(fechaPublicacion).toLocaleDateString();

  return (
    <div className="publicacion">
      <div className="publicacion-detalle">
        <div className="texto-detalle">
          <div className="superior">
            <img src="../img/admin.png" alt="imagenUsuario" />
            <h5>/preguntaReact ∼</h5>
            <h5>{fecha}</h5>
          </div>
          <h5>{titulo}</h5>
        </div>
        <div className="publicacion-contenido">
          {contenido}
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
          <div className="boton" id="comentario">
            <i className="fa-solid fa-comment" style={{ color: '#ffffff' }} />
            1
          </div>
          <div className="boton" id="agregar">
            <i className="fa-solid fa-plus" style={{ color: '#ffffff' }} />
            Añadir comentario
          </div>
        </div>
        <Comment />
      </div>
    </div>
  );
};

export default Post;

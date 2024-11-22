// Post.jsx
import React from 'react';
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
      </div>
    </div>
  );
};

export default Post;

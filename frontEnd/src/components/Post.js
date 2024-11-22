// Post.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/post.css';

const Post = ({ publicacion }) => {
  if (!publicacion) {
    return <div>Publicación no disponible.</div>;
  }

  const { _id, titulo, contenido, etiquetas, fechaPublicacion } = publicacion;
  const fecha = new Date(fechaPublicacion).toLocaleDateString();

  return (
    <div className="publicacion">
      <div className="publicacion-detalle">
        <div className="texto-detalle">
          <div className="superior">
            <img src="../img/admin.png" alt="imagenUsuario" />
            <h5>{fecha}</h5>
          </div>
          {/* Usamos Link para envolver el título */}
          <Link to={`/publicaciones/${_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <h5>{titulo}</h5>
          </Link>
        </div>
        <div className="publicacion-contenido">
          {contenido}
        </div>
      </div>
    </div>
  );
};

export default Post;

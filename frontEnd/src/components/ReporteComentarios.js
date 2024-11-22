import React from 'react';
import '../styles/reporteEstilos.css';

const ReporteComentarios = () => {
  const comments = [
    { id: 1, user: 'Anónimo ∼', time: 'hace 5 horas', text: 'Aquí irá el comentario de un usuario que se reportó.' },
    { id: 2, user: 'Anónimo ∼', time: 'hace 7 horas', text: 'Aquí irá el comentario de un usuario que se reportó.' }
  ];

  return (
    <div className="comentario-contenedor-reporte">
      {comments.map((comment) => (
        <div className="comentario-reporte" key={comment.id}>
          <div className="superior-com">
            <img src="../img/admin.png" alt="imagenUsuario" />
            <h5 id="usuarioCom">{comment.user}</h5>
            <h5 id="hora">{comment.time}</h5>
          </div>
          <div className="inferior-com">
            <h5 id="comentarioUsu">{comment.text}</h5>
          </div>
          <div className="opciones-com">
            <label htmlFor={`borrar-com-${comment.id}`}>
              <div className="borrar-com" id={`borrar-com-${comment.id}`}>
                Borrar comentario
              </div>
            </label>
            <label htmlFor={`ignorar-com-${comment.id}`}>
              <div className="ignorar-com" id={`ignorar-com-${comment.id}`}>
                Ignorar
              </div>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReporteComentarios;

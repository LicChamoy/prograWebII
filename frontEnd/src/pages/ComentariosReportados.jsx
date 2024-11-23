import React, { useState, useEffect } from 'react';

const ComentariosReportados = () => {
  const [comentarios, setComentarios] = useState([]);
  const [error, setError] = useState('');

  // Obtener los comentarios reportados desde la API
  const obtenerComentariosReportados = async () => {
    try {
      const response = await fetch('http://localhost:5000/comentarios/reportados', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Asegúrate de enviar el token
        },
      });

      if (response.ok) {
        const data = await response.json();
        setComentarios(data);
      } else {
        setError('Error al obtener los comentarios reportados.');
      }
    } catch (err) {
      setError('Error al conectar con el servidor.');
    }
  };

  // Función para eliminar un comentario
  const eliminarComentario = async (idComentario) => {
    try {
      const response = await fetch(`http://localhost:5000/comentarios/${idComentario}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        obtenerComentariosReportados(); // Refrescar la lista después de eliminar
      } else {
        setError('No se pudo eliminar el comentario.');
      }
    } catch (err) {
      setError('Error al eliminar el comentario.');
    }
  };

  // Función para quitar el reporte de un comentario
  const quitarReporte = async (idComentario) => {
    try {
      const response = await fetch(`http://localhost:5000/comentarios/${idComentario}/quitarReporte`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        obtenerComentariosReportados(); // Refrescar la lista después de quitar el reporte
      } else {
        setError('No se pudo quitar el reporte.');
      }
    } catch (err) {
      setError('Error al quitar el reporte.');
    }
  };

  useEffect(() => {
    obtenerComentariosReportados(); // Cargar los comentarios cuando se monta el componente
  }, []);

  return (
    <div>
      <h2>Comentarios Reportados</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        {comentarios.length > 0 ? (
          comentarios.map((comentario) => (
            <div key={comentario._id} style={{ marginBottom: '20px' }}>
              <div>
                <h5>{comentario.usuario.nombreUsuario}</h5>
                <p>{comentario.contenido}</p>
                <p><strong>Fecha:</strong> {new Date(comentario.fechaPublicacion).toLocaleDateString()}</p>
              </div>
              <button onClick={() => eliminarComentario(comentario._id)} style={{ marginRight: '10px' }}>
                Eliminar
              </button>
              <button onClick={() => quitarReporte(comentario._id)}>
                Quitar Reporte
              </button>
            </div>
          ))
        ) : (
          <p>No hay comentarios reportados.</p>
        )}
      </div>
    </div>
  );
};

export default ComentariosReportados;

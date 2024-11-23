// ComentarioReportado.js
import React from 'react';

const ComentarioReportado = ({ comentario }) => {
    const manejarEliminarComentario = async () => {
        try {
            const response = await fetch(`http://localhost:5000/comentarios/${comentario._id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });

            if (!response.ok) {
                throw new Error('Error al eliminar el comentario');
            }

            alert('Comentario eliminado con éxito');
            // Redireccionar o actualizar estado
        } catch (err) {
            console.error('Error al eliminar el comentario:', err);
        }
    };

    const manejarQuitarReporte = async () => {
        try {
            const response = await fetch(`http://localhost:5000/comentarios/${comentario._id}/quitarReporte`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });

            if (!response.ok) {
                throw new Error('Error al quitar el reporte');
            }

            alert('Reporte eliminado con éxito');
            // Actualizar estado para reflejar el cambio
        } catch (err) {
            console.error('Error al quitar el reporte:', err);
        }
    };

    return (
        <div className="comentario-reportado">
            <div className="comentario-info">
                <h3>{comentario.idUsuario.nombreUsuario || 'Usuario grosero'}</h3>
                <p>{comentario.contenido}</p>
                <p><strong>Fecha:</strong> {new Date(comentario.fechaComentario).toLocaleString()}</p>
            </div>
            <div className="comentario-acciones">
                <button onClick={manejarEliminarComentario}>Eliminar Comentario</button>
                <button onClick={manejarQuitarReporte}>Quitar Reporte</button>
            </div>
        </div>
    );
};

export default ComentarioReportado;

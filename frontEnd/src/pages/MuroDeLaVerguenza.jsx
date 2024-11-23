import React, { useEffect, useState } from 'react';
import ComentarioReportado from '../components/ComentarioReportado';
import '../styles/muro.css';

const MuroDeLaVerguenza = () => {
    const [comentariosReportados, setComentariosReportados] = useState([]);

    // Obtener todos los comentarios reportados
    useEffect(() => {
        const fetchComentariosReportados = async () => {
            try {
                const response = await fetch('http://localhost:5000/comentarios/reportados');
                const data = await response.json();
                setComentariosReportados(data);
            } catch (err) {
                console.error('Error al obtener los comentarios reportados:', err);
            }
        };

        fetchComentariosReportados();
    }, []);

    return (
        <div className="muro-verguenza">
            <h1>Muro de la Vergüenza: Comentarios Reportados</h1>
            <div className="comentarios-lista">
                {comentariosReportados.length > 0 ? (
                    comentariosReportados.map((comentario) => (
                        <ComentarioReportado key={comentario._id} comentario={comentario} />
                    ))
                ) : (
                    <p>No hay comentarios reportados.</p>
                )}
            </div>
        </div>
    );
};

export default MuroDeLaVerguenza;

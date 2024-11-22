import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; 
import Navbar from '../components/Navbar';
import '../styles/post.css';
import '../styles/menu.css';

const PostPage = () => {
    const { id } = useParams();
    const [publicacion, setPublicacion] = useState(null);
    const [comentarios, setComentarios] = useState([]);
    const [nuevoComentario, setNuevoComentario] = useState('');

    useEffect(() => {
        const fetchPublicacion = async () => {
            try {
                const response = await fetch(`http://localhost:5000/publicaciones/${id}`);
                const data = await response.json();
                setPublicacion(data.publicacion);
                setComentarios(data.comentarios);
            } catch (err) {
                console.error('Error al obtener la publicación:', err);
            }
        };

        fetchPublicacion();
    }, [id]);

    const manejarComentarioChange = (e) => setNuevoComentario(e.target.value);

    const manejarComentarioSubmit = async (e) => {
        e.preventDefault();
        if (nuevoComentario.trim() === '') return;
    
        try {
            const token = localStorage.getItem('token'); // Obtener el token del usuario
    
            if (!token) {
              throw new Error('No se encontró el token. El usuario no está autenticado.');
            }

            const decodedToken = jwtDecode(token);
            const idUsuario = decodedToken.id;
            
            const response = await fetch(`http://localhost:5000/publicaciones/${id}/comentarios`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    contenido: nuevoComentario,
                    // Asegúrate de incluir el idUsuario
                    idUsuario: idUsuario,  // Esto debe ser dinámico si el usuario está autenticado
                }),
            });
            if (!response.ok) {
                throw new Error('Error al agregar el comentario');
            }
    
            const data = await response.json();
            setComentarios([...comentarios, data.comentario]);
            setNuevoComentario('');
        } catch (err) {
            console.error('Error al agregar el comentario:', err);
        }
    };
    
    const manejarReporteComentario = async (idComentario) => {
        try {
            const token = localStorage.getItem('token'); // Obtener el token del usuario
            const response = await fetch(`http://localhost:5000/comentarios/${idComentario}/reportar`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Error al reportar el comentario');
            }

            const data = await response.json();
            setComentarios((prev) =>
                prev.map((comentario) =>
                    comentario._id === idComentario
                        ? { ...comentario, reportado: true }
                        : comentario
                )
            );
        } catch (err) {
            console.error('Error al reportar el comentario:', err);
        }
    };    if (!publicacion) {
        return <div>Cargando publicación...</div>;
    }

    return (
        <div>
            {/* Menu */}
            <Navbar />

            {/* Div contenedor de todo */}
            <div className="contenedor">
                {/* Contenedor de la publicación */}
                <div className="publicacion">
                    <div className="publicacion-detalle">
                        <div className="texto-detalle">
                            <div className="superior">
                                <img src="../img/admin.png" alt="imagenUsuario" />
                                <h5 id="discusion">/{publicacion.titulo} ∼</h5>
                                <h5 id="hora">{new Date(publicacion.fechaPublicacion).toLocaleString()}</h5> {/* Fecha de creación */}
                            </div>
                            <h5 id="usuario">{publicacion.idUsuario.nombreUsuario}</h5> {/* Nombre del usuario */}
                        </div>
                        <div className="publicacion-contenido">
                            {publicacion.contenido} {/* Contenido de la publicación */}
                        </div>
                        <div className="opciones">
                            <label htmlFor="comentario">
                                <div className="boton-pub" id="comentario">
                                    <i className="fa-solid fa-comment" style={{ color: '#ffffff' }} id="comentario"></i>
                                    {comentarios.length} {/* Número de comentarios */}
                                </div>
                            </label>
                        </div>

                        {/* Formulario para añadir un comentario */}
                        <div className="comentario-formulario">
                            <textarea
                                value={nuevoComentario}
                                onChange={manejarComentarioChange}
                                placeholder="Añadir un comentario"
                            />
                            <button onClick={manejarComentarioSubmit}>Añadir comentario</button>
                        </div>

                        {/* Mostrar comentarios */}
                        <div className="comentario-contenedor">
                            {comentarios.map((comentario) => (
                                <div key={comentario._id} className="comentario">
                                    <div className="texto-detalle">
                                        <div className="superior">
                                            <img src="../img/admin.png" alt="imagenUsuario" />
                                            <h5 id="usuarioCom">{comentario.idUsuario.nombreUsuario} ∼</h5>
                                            <h5 id="hora">{new Date(comentario.fechaComentario).toLocaleString()}</h5> {/* Fecha del comentario */}
                                        </div>
                                        <h5 id="comentarioUsu">{comentario.contenido}</h5> {/* Contenido del comentario */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Div contenedor de todo */}
        </div>
    );
};

export default PostPage;

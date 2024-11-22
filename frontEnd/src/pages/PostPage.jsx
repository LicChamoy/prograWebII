import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
            const response = await fetch(`http://localhost:5000/publicaciones/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ contenido: nuevoComentario }),
            });

            const data = await response.json();
            setComentarios([...comentarios, data.comentario]);
            setNuevoComentario('');
        } catch (err) {
            console.error('Error al agregar el comentario:', err);
        }
    };

    if (!publicacion) {
        return <div>Cargando publicación...</div>;
    }

    return (
        <div>
            {/* Menu */}
            <nav className="navbar">
                <div className="imagen">
                    <img src="../img/logo.png" alt="Logo" />
                </div>
                <div className="busqueda">
                    <div className="cuadro">
                        <label htmlFor="buscar">
                            <input type="text" placeholder="Buscar..." id="buscar" />
                            <i className="fa-solid fa-magnifying-glass" style={{ color: '#ffffff' }} />
                        </label>
                    </div>
                </div>
                <div className="perfil">
                    <label htmlFor="perfil">
                        <div className="imagen" id="perfil">
                            <img src="../img/admin.png" alt="Foto de perfil" />
                        </div>
                        <h5>Chamoi</h5>
                    </label>
                </div>
                <div className="cerrarSesion-contenedor">
                    <label htmlFor="cerrarSesion">
                        <div className="cerrarSesion" id="cerrarSesion">
                            <h5>Cerrar sesión</h5>
                        </div>
                    </label>
                </div>
            </nav>

            {/* Div contenedor de todo */}
            <div className="contenedor">
                {/* Contenedor de la publicación */}
                <div className="publicacion">
                    <div className="publicacion-detalle">
                        <div className="texto-detalle">
                            <div className="superior">
                                <img src="../img/admin.png" alt="imagenUsuario" />
                                <h5 id="discusion">/{publicacion.titulo} ∼</h5>
                                <h5 id="hora">{new Date(publicacion.createdAt).toLocaleString()}</h5> {/* Fecha de creación */}
                            </div>
                            <h5 id="usuario">{publicacion.idUsuario.nombreUsuario}</h5> {/* Nombre del usuario */}
                        </div>
                        <div className="publicacion-contenido">
                            {publicacion.contenido} {/* Contenido de la publicación */}
                        </div>
                        <div className="opciones">
                            <div className="boton-pub" id="likes">
                                <label htmlFor="like">
                                    <i className="fa-solid fa-up-long" style={{ color: '#ffffff' }} id="like"></i>
                                    0 {/* Aquí podrías usar el conteo de likes */}
                                </label>
                                <label htmlFor="dislike">
                                    <i className="fa-solid fa-down-long" style={{ color: '#ffffff' }} id="dislike"></i>
                                </label>
                            </div>
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
                                            <h5 id="hora">{new Date(comentario.createdAt).toLocaleString()}</h5> {/* Fecha del comentario */}
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

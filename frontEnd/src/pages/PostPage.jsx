import React from 'react';
import '../styles/post.css';
import '../styles/menu.css';

const PostPage = () => {
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
            {/* Menu */}

            {/* Div contenedor de todo */}
            <div className="contenedor">
                {/* Contenedor de la parte de etiquetas */}
                <div className="izquierda">
                    <label htmlFor="home">
                        <div className="etiqueta" id="home">
                            <i className="fa-solid fa-house" />
                            Home
                        </div>
                    </label>
                    <label htmlFor="etiquetas">
                        <div className="etiqueta" id="etiquetas">
                            <i className="fa-solid fa-tag fa-flip-horizontal" />
                            Etiquetas
                        </div>
                    </label>
                    <div className="etiqueta">Etiquetas populares</div>
                    <label htmlFor="react">
                        <div className="etiqueta" id="react">
                            <i className="fa-solid fa-tag fa-flip-horizontal" />
                            React
                        </div>
                    </label>
                    <label htmlFor="js">
                        <div className="etiqueta" id="js">
                            <i className="fa-solid fa-tag fa-flip-horizontal" />
                            JavaScript
                        </div>
                    </label>
                </div>
                {/* Contenedor de la parte de etiquetas */}

                {/* Contenedor de la publicación */}
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
                    </div>
                </div>
                {/* Contenedor de la publicación */}
            </div>
            {/* Div contenedor de todo */}
        </div>
    );
};

export default PostPage;

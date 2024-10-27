import React, { useEffect } from 'react';
import '../styles/post.css';
import '../styles/menu.css';

const PostPage = () => {

    useEffect(() => {
        // Crear el elemento <script>
        const script = document.createElement('script');
        script.src = '../js/postbtns.js'; // Cambia la ruta si es necesario
        script.async = true;

        // Agregar el script al body
        document.body.appendChild(script);

        // Limpiar el script al desmontar el componente
        return () => {
            document.body.removeChild(script);
        };

    }, []); // Ejecutar solo una vez al montar

    useEffect(() => {
        // Crear el elemento <script>
        const script = document.createElement('script');
        script.src = '../js/menubtns.js'; // Cambia la ruta si es necesario
        script.async = true;

        // Agregar el script al body
        document.body.appendChild(script);

        // Limpiar el script al desmontar el componente
        return () => {
            document.body.removeChild(script);
        };

    }, []); // Ejecutar solo una vez al montar

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
                            <div className="boton-pub" id="likes">
                                <label htmlFor="like">
                                    <i className="fa-solid fa-up-long" style={{ color: '#ffffff' }} id="like"></i>
                                    0
                                </label>
                                <label htmlFor="dislike">
                                    <i className="fa-solid fa-down-long" style={{ color: '#ffffff' }} id="dislike"></i>
                                </label>
                            </div>
                            <label htmlFor="comentario">
                                <div className="boton-pub" id="comentario">
                                    <i className="fa-solid fa-comment" style={{ color: '#ffffff' }} id="comentario"></i>
                                    1
                                </div>
                            </label>
                            <label htmlFor="agregar">
                                <div className="boton-pub" id="agregar">
                                    <i className="fa-solid fa-plus" style={{ color: '#ffffff' }} id="agregar"></i>
                                    Añadir comentario
                                </div>
                            </label>
                        </div>
                        <div className="comentario-contenedor">
                            <div className="comentario">
                                <div className="texto-detalle">
                                    <div className="superior">
                                        <img src="../img/admin.png" alt="imagenUsuario"/>
                                            <h5 id="usuarioCom">Anonimo ∼</h5>
                                            <h5 id="hora">hace 5 horas</h5>
                                    </div>
                                    <h5 id="comentarioUsu">Aquí irá la respuesta a la publicación con dudas de algún tema en específico.</h5>
                                </div>
                            </div>
                            <div className="opcionesCom">
                                <div className="botonCom" id="likesCom">
                                    <label htmlFor="likeCom">
                                        <i className="fa-solid fa-up-long" style={{ color: '#ffffff' }} id="likeCom"></i>
                                        0
                                    </label>
                                    <label htmlFor="dislikeCom">
                                        <i className="fa-solid fa-down-long" style={{ color: '#ffffff' }} id="dislikeCom"></i>
                                    </label>
                                </div>

                                <label htmlFor="comentarioCom">
                                    <div className="botonCom" id="comentarioCom">
                                        <i className="fa-solid fa-comment" style={{ color: '#ffffff' }} id="comentarioCom"></i>
                                        1
                                    </div>
                                </label>

                                <label htmlFor="agregarCom">
                                    <div className="botonCom" id="agregarCom">
                                        <i className="fa-solid fa-plus" style={{ color: '#ffffff' }} id="agregarCom"></i>
                                        Añadir comentario
                                    </div>
                                </label>
                            </div>
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

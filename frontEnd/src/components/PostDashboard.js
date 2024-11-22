import React from 'react';

function Post({ usuario, hora, contenido }) {
    return (
        <div className="publicacion-detalle-dashboard">
            <div className="texto-detalle-dashboard">
                <div className="superior-dashboard">
                    <img src="admin.png" alt="imagenUsuario" />
                    <h5 id="discusion">{`/preguntaReact ∼`}</h5>
                    <h5 id="hora">{hora}</h5>
                </div>
                <h5 id="usuario">{usuario}</h5>
            </div>
            <div className="publicacion-contenido-dashboard">
                {contenido}
            </div>
        </div>
    );
}

export default Post;

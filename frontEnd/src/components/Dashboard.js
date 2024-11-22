import React from 'react';
import Post from './PostDashboard';

function Dashboard() {
    const publicaciones = [
        { id: 1, usuario: 'Chamoi', hora: 'hace 7 horas', contenido: 'Aquí irá la duda correspondiente al tema seleccionado o etiqueta de la publicación.' },
        { id: 2, usuario: 'Chamoi', hora: 'hace 7 horas', contenido: 'Aquí irá la duda correspondiente al tema seleccionado o etiqueta de la publicación.' },
        { id: 3, usuario: 'Chamoi', hora: 'hace 7 horas', contenido: 'Aquí irá la duda correspondiente al tema seleccionado o etiqueta de la publicación.' },
    ];

    return (
        <div className="publicacion-dashboard">
            {publicaciones.map((post) => (
                <Post key={post.id} usuario={post.usuario} hora={post.hora} contenido={post.contenido} />
            ))}
        </div>
    );
}

export default Dashboard;
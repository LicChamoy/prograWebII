<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Post from '../components/Post';
import '../styles/dashboard.css';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  // Cargar los posts desde la base de datos al montar el componente
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/publicaciones'); // Asegúrate de que la URL sea correcta
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error al obtener las publicaciones:', error);
      }
    };

    fetchPosts();
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <div className="contenedor">
      {/* Menú de navegación */}
      <Navbar />

      {/* Contenedor de la parte principal */}
      <div className="contenedor-principal">
        {/* Barra lateral */}
        <Sidebar />

        {/* Publicaciones */}
        <div className="publicaciones">
          {posts.map((post) => (
            <Post key={post._id} publicacion={post} /> // Le pasamos los datos de cada post
          ))}
        </div>
      </div>
    </div>
  );
};
=======
import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import PostDashboard from '../components/PostDashboard';
import '../styles/menu.css';
import '../styles/dashboardEstilo.css';

function Dashboard() {
    return (
        <div>
            {/* Barra de navegación */}
            <Navbar />

            {/* Contenedor principal */}
            <div className="contenedor">
                {/* Barra lateral */}
                <Sidebar />

                {/* Dashboard de publicaciones */}
                <PostDashboard />
            </div>
        </div>
    );
}
>>>>>>> e7f8d968c872e0f5f570e942c7f951ba549c585b

export default Dashboard;

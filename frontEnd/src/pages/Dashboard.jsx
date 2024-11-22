import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Post from '../components/Post';
import '../styles/dashboard.css';
import '../styles/menu.css';

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
    <div>
      {/* Menú de navegación */}
      <Navbar />

      {/* Contenedor de la parte principal */}
      <div>
        {/* Barra lateral */}
        <Sidebar />

        {/* Publicaciones */}
        <div>
          {posts.map((post) => (
            <Post key={post._id} publicacion={post} /> // Le pasamos los datos de cada post
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

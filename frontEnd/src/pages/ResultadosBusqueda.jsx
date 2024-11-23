// pages/ResultadosBusqueda.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Post from '../components/Post';  // Asegúrate de importar el componente Post

const ResultadosBusqueda = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const location = useLocation();

  // Función para obtener los resultados de la búsqueda desde la query string
  const obtenerResultadosBusqueda = async (keyword) => {
    try {
      const response = await fetch(`http://localhost:5000/buscar?keyword=${keyword}`);
      if (response.ok) {
        const data = await response.json();
        setPublicaciones(data);  // Guardar las publicaciones en el estado
      } else {
        console.error('Error al obtener los resultados');
      }
    } catch (err) {
      console.error('Error al realizar la búsqueda:', err);
    }
  };

  useEffect(() => {
    // Extraer el query parameter `keyword` de la URL
    const queryParams = new URLSearchParams(location.search);
    const keyword = queryParams.get('keyword');
    if (keyword) {
      obtenerResultadosBusqueda(keyword);  // Llamar la función para obtener los resultados
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <div>
      <Sidebar />
        <div>
          <h2>Resultados de Búsqueda</h2>
              {publicaciones.length > 0 ? (
                <div>
                  {publicaciones.map((publicacion) => (
                    <Post key={publicacion._id} publicacion={publicacion} />  // Usamos el componente Post aquí
                  ))}
                </div>
              ) : (
                <p>No se encontraron publicaciones que coincidan con la búsqueda.</p>
              )}
        </div>
      </div>

    </div>
  );
};

export default ResultadosBusqueda;

import React from 'react';
import Navbar from '../components/Navbar'; // Menú de navegación
import Sidebar from '../components/Sidebar'; // Barra lateral
import PublicacionForm from '../components/PublicacionCrear'; // Formulario para crear publicaciones
import '../styles/crearPublicacionEstilos.css';
import '../styles/menu.css';

const PublicacionDashboard = () => {
  return (
    <div>
      {/* Menú de navegación */}
      <Navbar />

      {/* Contenedor principal */}
        {/* Barra lateral */}
        <Sidebar />

        {/* Formulario para crear publicación */}
        <PublicacionForm />
    </div>
  );
};

export default PublicacionDashboard;

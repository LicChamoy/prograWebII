import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ReporteComentarios from '../components/ReporteComentarios';
import '../styles/reporteEstilos.css';
import '../styles/menu.css';

const ReportesDashboard = () => {
  return (
    <div>
      {/* Menú de navegación */}
      <Navbar />

      {/* Contenedor principal */}
        {/* Barra lateral */}
        <Sidebar />

        {/* Sección de comentarios */}
        <ReporteComentarios />
    </div>
  );
};

export default ReportesDashboard;

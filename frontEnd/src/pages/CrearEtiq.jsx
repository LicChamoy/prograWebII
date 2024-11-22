import React from 'react';
import Navbar from '../components/Navbar'; // Menú de navegación
import Sidebar from '../components/Sidebar'; // Barra lateral
import EtiquetaForm from '../components/Etiqueta'; // Formulario para crear etiquetas
import '../styles/crearEtiquetaEstilos.css';
import '../styles/menu.css';

const EtiquetasDashboard = () => {
  return (
    <div>
    {/* Menú de navegación */}
    <Navbar />

    {/* Contenedor principal */}
      {/* Barra lateral */}
      <Sidebar />
      
      {/* Formulario para crear etiquetas */}
      <EtiquetaForm />
    </div>
  );
};

export default EtiquetasDashboard;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [etiquetasPopulares, setEtiquetasPopulares] = useState([]);
  const navigate = useNavigate();

  // Obtener etiquetas populares desde el backend
  useEffect(() => {
    const fetchEtiquetasPopulares = async () => {
      try {
        const response = await fetch('http://localhost:5000/etiquetas/populares');
        const data = await response.json();
        setEtiquetasPopulares(data); // Asume que el backend devuelve las etiquetas populares
      } catch (error) {
        console.error('Error al obtener etiquetas populares:', error);
      }
    };

    fetchEtiquetasPopulares();
  }, []);

  return (
    <div className="izquierda">
      <div className="etiqueta" id="home" onClick={() => navigate('/Dashboard')}>
        <i className="fa-solid fa-house" />
        Home
      </div>
      <div className="etiqueta" id="etiquetas" onClick={() => navigate('/Etiqueta')}>
        <i className="fa-solid fa-tag fa-flip-horizontal" />
        Etiquetas
      </div>
      <div className="etiqueta">Etiquetas populares</div>
      {etiquetasPopulares.length > 0 ? (
        etiquetasPopulares.map((etiqueta) => (
          <div
            key={etiqueta._id}
            className="etiqueta"
            onClick={() => navigate(`/Etiqueta/${etiqueta.nombreEtiqueta}`)}
          >
            <i className="fa-solid fa-tag fa-flip-horizontal" />
            {etiqueta.nombreEtiqueta}  {/* Mostrar nombre de la etiqueta */}
          </div>
        ))
      ) : (
        <p className="etiqueta">Cargando etiquetas populares...</p>
      )}
    </div>
  );
};

export default Sidebar;

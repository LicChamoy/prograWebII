import React, { useState, useEffect } from 'react';
import '../styles/etiqueta.css';


// Componente para crear una nueva etiqueta
const CrearEtiqueta = ({ onEtiquetaCreada }) => {
  const [nombreEtiqueta, setNombreEtiqueta] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState(false);

  const manejarCambio = (e) => {
    setNombreEtiqueta(e.target.value);
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();

    if (nombreEtiqueta.trim() === '') {
      setMensaje('El nombre de la etiqueta no puede estar vacío.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/etiquetas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombreEtiqueta }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setMensaje(errorData.error); // Mostrar mensaje de error desde el backend
        setError(true);
        return;
      }

      const data = await response.json();
      setMensaje(`Etiqueta "${data.etiqueta.nombreEtiqueta}" creada con éxito.`);
      setNombreEtiqueta(''); // Limpiar el campo de entrada

      // Notificar al componente principal que se creó una nueva etiqueta
      onEtiquetaCreada(data.etiqueta);
    } catch (error) {
      setMensaje('Ocurrió un error al crear la etiqueta.');
      console.error(error);
    }
  };

  return (
    <div className="etiqueta-crear">
      <div className="eti-opciones">
        <label htmlFor="input-eti-etiqueta">Registra una nueva etiqueta:</label>
        <input
          id="input-eti-etiqueta"
          type="text"
          placeholder="Nombre de la etiqueta..."
          value={nombreEtiqueta}
          onChange={manejarCambio}
        />
      </div>
      <div className="eti-opciones-btn">
        <button id="btn-crearEtiqueta" onClick={manejarEnvio}>
          Crear etiqueta
        </button>
      </div>
      {mensaje && <p className={error ? 'mensaje-error' : 'mensaje-exito'}>{mensaje}</p>}
    </div>
  );
};

// Componente para mostrar las etiquetas existentes
const MostrarEtiquetas = ({ etiquetas }) => {
  return (
    <div className="etiquetas-existentes">
      <h3>Etiquetas existentes</h3>
      {etiquetas.length > 0 ? (
        <ul>
          {etiquetas.map((etiqueta) => (
            <li key={etiqueta._id}>{etiqueta.nombreEtiqueta}</li>
          ))}
        </ul>
      ) : (
        <p>No hay etiquetas registradas.</p>
      )}
    </div>
  );
};

// Componente principal
const Etiqueta = () => {
  const [etiquetas, setEtiquetas] = useState([]);

  // Obtener etiquetas existentes al cargar el componente
  useEffect(() => {
    const fetchEtiquetas = async () => {
      try {
        const response = await fetch('http://localhost:5000/etiquetas');
        const data = await response.json();
        setEtiquetas(data); // Asume que el backend devuelve un arreglo de etiquetas
      } catch (error) {
        console.error('Error al obtener las etiquetas:', error);
      }
    };

    fetchEtiquetas();
  }, []);

  const agregarEtiqueta = (nuevaEtiqueta) => {
    setEtiquetas((prev) => [...prev, nuevaEtiqueta]);
  };

  return (
    <div className="etiqueta-contenedor-crear">
      {/* Mostrar etiquetas */}
      <MostrarEtiquetas etiquetas={etiquetas} />

      {/* Crear etiquetas */}
      <CrearEtiqueta onEtiquetaCreada={agregarEtiqueta} />
    </div>
  );
};

export default Etiqueta;

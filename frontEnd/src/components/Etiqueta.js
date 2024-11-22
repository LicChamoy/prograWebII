import React, { useState, useEffect } from 'react';

const Etiqueta = () => {
  const [nombreEtiqueta, setNombreEtiqueta] = useState('');
  const [mensaje, setMensaje] = useState('');
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
        setMensaje('No se pudieron cargar las etiquetas existentes.');
      }
    };

    fetchEtiquetas();
  }, []);

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
        setMensaje(`Error: ${errorData.error}`);
        return;
      }

      const data = await response.json();
      setMensaje(`Etiqueta "${data.etiqueta.nombreEtiqueta}" creada con éxito.`);
      setNombreEtiqueta(''); // Limpiar el campo de entrada

      // Actualizar el listado de etiquetas
      setEtiquetas((prev) => [...prev, data.etiqueta]);
    } catch (error) {
      setMensaje('Ocurrió un error al crear la etiqueta.');
      console.error(error);
    }
  };

  return (
    <div className="etiqueta-contenedor-crear">
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
        {mensaje && <p>{mensaje}</p>}
      </div>

      {/* Sección de etiquetas existentes */}
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
    </div>
  );
};

export default Etiqueta;

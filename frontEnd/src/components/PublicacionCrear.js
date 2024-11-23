import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import '../styles/crearPublicacionEstilos.css';

const PublicacionForm = () => {
  const [idUsuario, setIdUsuario] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [etiquetas, setEtiquetas] = useState([]);
  const [etiquetaSeleccionada, setEtiquetaSeleccionada] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Cargar etiquetas desde la base de datos
  useEffect(() => {
    const cargarUsuario = () => {
      const token = localStorage.getItem('token'); // Obtén el token desde el almacenamiento local
      if (token) {
        try {
          const decoded = jwtDecode(token); // Decodifica el token
          setIdUsuario(decoded.id); // Establece el ID del usuario
        } catch (err) {
          console.error('Error al decodificar el token:', err);
          setMensaje('Error al obtener el usuario. Inicia sesión nuevamente.');
        }
      } else {
        setMensaje('No se encontró un token. Inicia sesión.');
      }
    };
  
    cargarUsuario();
  }, []);
  
  // Manejar cambios en los inputs
  const manejarTitulo = (e) => setTitulo(e.target.value);
  const manejarContenido = (e) => setContenido(e.target.value);
  const manejarEtiquetaSeleccionada = (e) => setEtiquetaSeleccionada(e.target.value);

  // Manejar el envío del formulario
  const manejarEnvio = async (e) => {
    e.preventDefault();


    if (!idUsuario) {
      setMensaje('Error: No se detectó un usuario autenticado. Por favor, inicia sesión.');
      return;
    }

    // Validar datos
    if (!titulo || !contenido || !etiquetaSeleccionada) {
      setMensaje('Por favor, completa todos los campos.');
      return;
    }

    try {

      const response = await fetch('http://localhost:5000/publicaciones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          idUsuario,
          titulo,
          contenido,
          etiquetas: [etiquetaSeleccionada], // Enviar la etiqueta seleccionada
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setMensaje(`Error en front: ${errorData.error}`);
        return;
      }

      const data = await response.json();
      setMensaje(`Publicación creada con éxito: "${data.publicacion.titulo}"`);
      setTitulo('');
      setContenido('');
      setEtiquetaSeleccionada('');
    } catch (err) {
      setMensaje('Ocurrió un error al guardar la publicación.');
      console.error(err);
    }
  };

  return (
    <div className="publicacion-contenedor-crear">
      <form onSubmit={manejarEnvio} className="publicacion-crear">
        <div className="pub-opciones">
          <textarea
            id="input-pub-titulo"
            placeholder="Título para tu pregunta aquí..."
            value={titulo}
            onChange={manejarTitulo}
          ></textarea>
          <textarea
            id="input-pub-contenido"
            placeholder="Publica tu pregunta aquí..."
            value={contenido}
            onChange={manejarContenido}
          ></textarea>
          <label htmlFor="etiqueta">Selecciona una etiqueta:</label>
          <select
            name="etiquetas"
            id="etiqueta"
            value={etiquetaSeleccionada}
            onChange={manejarEtiquetaSeleccionada}
          >
            {etiquetas.map((etiqueta) => (
              <option key={etiqueta._id} value={etiqueta._id}>
                {etiqueta.nombreEtiqueta}
              </option>
            ))}
          </select>
        </div>
        <div className="pub-opciones-btn">
          <button id="btn-crearPublicacion" type="submit">
            Publicar
          </button>
        </div>
        {mensaje && <p className="mensaje">{mensaje}</p>}
      </form>
    </div>
  );
};

export default PublicacionForm;

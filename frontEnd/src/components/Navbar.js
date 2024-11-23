import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/menu.css';

const Navbar = () => {
  const [usuario, setUsuario] = useState(null); // Estado para los datos del usuario
  const [keyword, setKeyword] = useState(''); // Estado para almacenar el texto de búsqueda
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]); // Estado para los resultados de búsqueda
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        // Obtener el token desde localStorage
        const token = localStorage.getItem('token');
        if (!token) {
          setUsuario(null);
          return;
        }

        // Decodificar el token para obtener el ID del usuario
        const decoded = jwtDecode(token);

        // Obtener detalles del usuario desde el backend
        const response = await fetch(`http://localhost:5000/usuarios/${decoded.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          const data = await response.json();
          setUsuario(data); // Guardar datos del usuario
        } else {
          console.error('Error al obtener los datos del usuario');
          setUsuario(null);
        }
      } catch (err) {
        console.error('Error al procesar el token:', err);
        setUsuario(null);
      }
    };

    fetchUsuario();
  }, []);

  const cerrarSesion = () => {
    // Eliminar el token de localStorage
    localStorage.removeItem('token');
    setUsuario(null);
    navigate('/login'); // Redirigir al login
  };

  // Función para manejar la búsqueda
  const manejarBusqueda = async () => {
    try {
      const response = await fetch(`http://localhost:5000/buscar?keyword=${keyword}`);
  
      if (!response.ok) {
        console.error('Error en la respuesta del servidor:', response.statusText);
        return;
      }
  
      const data = await response.json();
      setResultadosBusqueda(data);
      navigate('/resultados-busqueda');
    } catch (err) {
      console.error('Error al realizar la búsqueda:', err);
    }
  };
    

  return (
    <nav className="navbar">
      <div className="imagen">
        <Link to="/dashboard">
          <img src="../img/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="busqueda">
        <div className="cuadro">
          <label htmlFor="buscar">
            <input
              type="text"
              placeholder="Buscar..."
              id="buscar"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)} // Actualizar el estado del texto de búsqueda
            />
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ color: '#ffffff' }}
              onClick={manejarBusqueda} // Ejecutar la búsqueda al hacer clic
            />
          </label>
        </div>
      </div>
      <div className="perfil">
        {usuario ? (
          <label htmlFor="perfil">
            <div className="imagen" id="perfil">
              <img src="../img/admin.png" alt="Foto de perfil" />
            </div>
            <h5>{usuario.nombreUsuario}</h5>
          </label>
        ) : (
          <button onClick={() => navigate('/login')} className="login-button">
            Iniciar sesión
          </button>
        )}
      </div>
      <div className="cerrarSesion-contenedor">
        {usuario && (
          <label htmlFor="cerrarSesion">
            <div className="cerrarSesion" id="cerrarSesion" onClick={cerrarSesion}>
              <h5>Cerrar sesión</h5>
            </div>
          </label>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import '../styles/menu.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="imagen">
        <img src="../img/logo.png" alt="Logo" />
      </div>
      <div className="busqueda">
        <div className="cuadro">
          <label htmlFor="buscar">
            <input type="text" placeholder="Buscar..." id="buscar" />
            <i className="fa-solid fa-magnifying-glass" style={{ color: '#ffffff' }} />
          </label>
        </div>
      </div>
      <div className="perfil">
        <label htmlFor="perfil">
          <div className="imagen" id="perfil">
            <img src="../img/admin.png" alt="Foto de perfil" />
          </div>
          <h5>Chamoi</h5>
        </label>
      </div>
      <div className="cerrarSesion-contenedor">
        <label htmlFor="cerrarSesion">
          <div className="cerrarSesion" id="cerrarSesion">
            <h5>Cerrar sesión</h5>
          </div>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;

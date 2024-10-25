import React, { useState } from 'react';
import '../styles/login.css';

const Login = () => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    //const usuario = {
    //  nombre_usuario: nombreUsuario,
    //  password: password,
    //};

    //console.log('Datos del usuario:', usuario);
    // fetch('http://localhost:5000/usuarios/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(usuario),
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="login-container">
        <div className="data" style={{ justifyContent: 'center', alignContent: 'center', textAlign: 'center' }}>
          <br />
          <img id="logo" src="../img/logo.png" alt="logo" style={{ width: '60px' }} />
          <br />
          <p>Inicio de sesión</p>
          <br />
          <input
            type="text"
            placeholder="Usuario"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
            id="nombre_usuario"
          />
          <br />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
          <br />
        </div>
        <br />
        <input type="submit" value="Iniciar sesión" />
        <br />
        <p>¿No tienes una cuenta?<br /><br /><a href="/registro">Regístrate</a></p>
      </form>
    </div>
  );
};

export default Login;

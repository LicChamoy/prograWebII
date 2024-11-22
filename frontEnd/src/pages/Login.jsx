import React, { useState } from 'react';
import '../styles/login.css';

const Login = () => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Determinar si enviar el email o nombre de usuario
    const usuario = {
      nombreUsuario: nombreUsuario, // Si se usa nombre de usuario
      email: email, // Si se usa email
      password: password,
    };

    // Realizar la solicitud al backend para el login
    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      const data = await response.json();

      if (response.ok) {
        // Si la respuesta es exitosa guarda el token
        console.log('Token recibido:', data.token); // aber si se muestra el token xd
        localStorage.setItem('token', data.token);

        // Redirigir al usuario al dashboard
        console.log('yawe');
        //window.location.href = '/dashboard';
      } else {
        // Si hubo un error en la autenticación, muestra el mensaje
        setMensajeError(data.mensaje || 'Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error:', error);
      setMensajeError('Error de conexión con el servidor');
    }
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
            placeholder="Correo electrónico o Nombre de Usuario"
            value={email || nombreUsuario}  // Si se tiene email, usa email, si no usa nombreUsuario
            onChange={(e) => {
              // Verifica si el valor tiene formato de email o no
              if (e.target.value.includes('@')) {
                setEmail(e.target.value);  // Si es un correo, se guarda en email
                setNombreUsuario('');  // Limpiar el nombre de usuario
              } else {
                setNombreUsuario(e.target.value);  // Si no es correo, se guarda en nombreUsuario
                setEmail('');  // Limpiar el email
              }
            }}
            id="loginField"
            required
          />
          <br />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            required
          />
          <br />
        </div>
        {mensajeError && <p style={{ color: 'red' }}>{mensajeError}</p>}
        <br />
        <input type="submit" value="Iniciar sesión" />
        <br />
        <p>¿No tienes una cuenta?<br /><br /><a href="/register">Regístrate</a></p>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/registro.css';

const Register = () => {
    const [nombreUsu, setNombreUsu] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mensajeError, setMensajeError] = useState('');
    const navigate = useNavigate(); // Hook de redireccion

    const handleRegister = async () => {
        // Resetear mensajes de error
        setMensajeError('');

        // Validar campos
        if (!nombreUsu || !email || !password) {
            setMensajeError('Por favor, completa todos los campos.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombreUsuario: nombreUsu, email, password }),
            });

            if (response.ok) {
                // Redirigir a la página de inicio de sesión
                navigate('/login');
            } else {
                const data = await response.json();
                setMensajeError(data.error || 'Error al registrar usuario.');
            }
        } catch (error) {
            setMensajeError('Error de conexión con el servidor.');
        }
    };

    return (
        <div className="contenedor-registro">
            <div className="letras">
                <img src="../img/logo.png" alt="Logo" />
                <h5>Únete a Stack Underflow</h5>
            </div>

            {mensajeError && <p className="mensaje-error">{mensajeError}</p>} {/* Mostrar errores */}

            <div className="nombre">
                <h4>Nombre de usuario: </h4>
                <input
                    className="inputs"
                    type="text"
                    id="nombreUsu"
                    value={nombreUsu}
                    onChange={(e) => setNombreUsu(e.target.value)}
                />
            </div>
            <div className="email">
                <h4>Email: </h4>
                <input
                    className="inputs"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="password">
                <h4>Contraseña: </h4>
                <input
                    className="inputs"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="boton-registro" onClick={handleRegister}>
                <h4>Registrarse</h4>
            </div>
            <div className="iniciar-sesion">
                <h6>¿Ya tienes una cuenta? <a href="login">Inicia sesión</a></h6>
            </div>
        </div>
    );
};

export default Register;

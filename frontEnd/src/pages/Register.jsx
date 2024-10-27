import React from 'react';
import '../styles/registro.css';

const Register = () => {
    return (
        <div className="contenedor-registro">
            <div className="letras">
                <img src="../img/logo.png" alt="Logo" />
                <h5>Únete a Stack Underflow</h5>
            </div>

            <div className="nombre">
                <h4>Nombre de usuario: </h4>
                <input className="inputs" type="text" id="nombreUsu" />
            </div>
            <div className="email">
                <h4>Email: </h4>
                <input className="inputs" type="email" id="email" />
            </div>
            <div className="password">
                <h4>Contraseña: </h4>
                <input className="inputs" type="password" id="password" />
            </div>
            <label htmlFor="btnRegistrar" id="registrarBtn">
                <div className="boton-registro" id="btnRegistrar">
                    <h4>Registrarse</h4>
                </div>
            </label>
            <div className="iniciar-sesion">
                <h6>¿Ya tienes una cuenta?<a href="login">Inicia sesión</a></h6>
            </div>
        </div>
    );
};

export default Register;

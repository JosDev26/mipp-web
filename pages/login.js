import React from 'react';
import Head from 'next/head';
import sheet from './styles/login.css';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="login-container">
        <div className="left-panel">
          <div className="sun-icon" />
          <h1>“Modulo Inteligente de<br />Permisos de Personal +”</h1>
          <div className="city-sketch" />
        </div>

        <div className="right-panel">
          <div className="logos">
            <img src="public/" alt="CTPMN Logo" />
            <img src="/assets/mipp-logo.png" alt="MIPP Logo" />
          </div>

          <h2>Inicio de Sesión</h2>

          <form className="login-form">
            <label>Identificación</label>
            <input type="text" placeholder="Identificación" />

            <label>Contraseña</label>
            <input type="password" placeholder="Contraseña" />

            <a href="#" className="forgot-password">¿Olvidó su contraseña?</a>

            <button type="submit">Iniciar sesión</button>
          </form>
        </div>
      </div>
    </>
  );
}

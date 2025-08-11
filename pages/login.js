import React, { useState } from 'react';
import Head from 'next/head';
import sheet from '@/styles/login.css';
import { supabase } from '../src/app/supabaseClient';

export default function Login() {
  const [identificacion, setIdentificacion] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    // Buscar usuario en la tabla users por cédula y contraseña
    const { data, error } = await supabase
      .from("users")
      .select("user_id, user_password")
      .eq("user_id", identificacion)
      .single();
    console.log("Resultado de consulta a Supabase:", { data, error });
    if (error || !data) {
      setError("Credenciales incorrectas");
      return;
    }
    // Validar contraseña manualmente (por si hay problemas de tipo o espacios)
    if (String(data.user_password).trim() !== String(password).trim()) {
      setError("Credenciales incorrectas");
      return;
    }
  // Guardar userId en localStorage
  localStorage.setItem("userId", data.user_id);
  console.log("userId guardado en localStorage:", data.user_id);
  // Verificar inmediatamente después
  console.log("Valor actual en localStorage:", localStorage.getItem("userId"));
  // Redirigir y forzar recarga para asegurar que el userId esté disponible
  window.location.replace("/funcionario");
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="login-body">
        <div className="login-container">
          <div className="left-panel">
            <div className="sun-icon"/>
            <h1>“Modulo Inteligente de<br />Permisos de Personal +”</h1>
            <div className="city-sketch" />
          </div>
          <div className="right-panel">
            <div className="logos">
              <img src="/assets/tpmn-logo.png" alt="CTPMN Logo" />
              <img src="/assets/mipp-logo.png" alt="MIPP Logo" />
            </div>
            <h2>Inicio de Sesión</h2>
            <form className="login-form" onSubmit={handleLogin}>
              <label>Identificación</label>
              <input
                type="text"
                placeholder="Identificación"
                value={identificacion}
                onChange={e => setIdentificacion(e.target.value)}
              />
              <label>Contraseña</label>
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <a href="#" className="forgot-password">¿Olvidó su contraseña?</a>
              {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
              <button type="submit">Iniciar sesión</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
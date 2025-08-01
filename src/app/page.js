"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify"; // Import toast
import 'react-toastify/dist/ReactToastify.css';
// import bcrypt from "bcryptjs";
// import { supabase } from "./supabaseClient";
import sheet from "../app/login.css"


export default function Page() {
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    const identification = e.target.identification.value;
    const password = e.target.password.value;
    try {
      // Validación básica
      if (!identification.trim() || !password) {
        toast.error("Por favor, ingrese identificación y contraseña.");
        setLoading(false);
        return;
      }
      // Llamar a la API de login
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identification, password }),
      });
      const result = await res.json();
      if (result.success) {
        toast.success("¡Inicio de sesión exitoso!");
        // Guardar estado de login, nombre y apellido, y redirigir a /home
        if (typeof window !== "undefined") {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("userName", result.user?.user_fname || "");
          localStorage.setItem("userLastName", result.user?.user_flname || "");
          window.location.href = "/home";
        }
      } else {
        toast.error(result.error || "Identificación o contraseña incorrecta.");
      }
    } catch (err) {
      toast.error("Error inesperado: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="login-container">
      {/* Sección izquierda - Fondo rojo con ilustraciones */}
      <div className="left-section">
        {/* Sol en la esquina superior izquierda */}
        <div className="sun-container">
          <Image src="/images/Sol.png" alt="Sol" className="sun-image" width={160} height={160} quality={100} priority />
        </div>

        {/* Título principal */}
        <div className="title-container">
          <div className="title-content">
            <h1 className="main-title">"Modulo Inteligente de Permisos de Personal +"</h1>
          </div>
        </div>

        {/* Ilustración de edificios en la parte inferior */}
        <div className="buildings-container">
          <Image src="/images/edificios.png" alt="edificios" className="edificios-image" width={600} height={160} quality={100} />
        </div>
      </div>

      {/* Sección derecha - Formulario de login */}
      <div className="right-section">
        {/* Header con logos */}
        <div className="header-logos">
          <div className="logo-tpmn">
            <Image src="/images/logoCTPMN.png" alt="TPMN Logo" className="tpmn-logo" width={200} height={100} quality={100} />
          </div>
          <div className="logo-mipp">
            <Image src="/images/logoMIPP.png" alt="MIPP+ Logo" className="mipp-logo" width={200} height={100} quality={100} />
          </div>
        </div>

        {/* Formulario de login centrado */}
        <div className="form-container">
          <div className="form-wrapper">
            <div className="form-header">
              <h2 className="form-title">Inicio de Sesión</h2>
            </div>

            <form className="login-form" onSubmit={handleLogin}>
              <div className="input-group">
                <label htmlFor="identification" className="input-label">
                  Identificación
                </label>
                <div className="input-wrapper">
                  <div className="input-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <input id="identification" name="identification" type="text" className="form-input" placeholder="" required autoComplete="username" />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="password" className="input-label">
                  Contraseña
                </label>
                <div className="input-wrapper">
                  <div className="input-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <circle cx="12" cy="16" r="1"></circle>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <input id="password" name="password" type="password" className="form-input" placeholder="" required autoComplete="current-password" />
                </div>
              </div>

              <div className="forgot-password">
                <Link href="/forget" className="forgot-link">
                  ¿Olvidó su contraseña?
                </Link>
              </div>

              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? "Ingresando..." : "Iniciar sesión"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

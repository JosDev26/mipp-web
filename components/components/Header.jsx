import "../../styles/admin.css"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header({ activePage = "administrador" }) {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = () => {
    setLoggingOut(true);
    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("isLoggedIn");
        router.replace("/");
      }
    }, 1500); // Simula un pequeño tiempo de cierre
  };

  if (loggingOut) {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #5e111d 0%, #4d0a14ff 100%)",
        zIndex: 9999,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%"
      }}>
        <div style={{
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(0, 180, 216, 0.15)",
          padding: "2.5rem 2rem",
          minWidth: "320px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <div className="loader" style={{
              border: "6px solid #f3f3f3",
              borderTop: "6px solid #5e111d",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              animation: "spin 1s linear infinite"
            }} />
            <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>
          <h2 style={{ color: "#5e111d", textAlign: "center", fontWeight: "bold" }}>
            No cierres el navegador<br />mientras se está cerrando la sesión...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <header className="header">
      <div className="logo">
        <h1>MIPP+</h1>
      </div>
      <div className="user-controls">
        <div className="role-toggles">
          <button className={`role-btn ${activePage === "administrador" ? "active" : ""}`}>Administrador</button>
          <button className={`role-btn ${activePage === "funcionario" ? "active" : ""}`}>Funcionario</button>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          <span className="logout-icon">👤</span>
          Cerrar Sesión
        </button>
      </div>
    </header>
  );
}


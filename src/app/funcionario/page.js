"use client"

import Header from "../../../components/components/Header";
import { FaFileAlt, FaCog, FaBuilding, FaUsers } from "react-icons/fa";

export default function FuncionarioPage() {
  return (
    <>
      <Header activePage="funcionario" />
      <main style={{
        minHeight: "100vh",
        background: "#f7f7f7",
        padding: "0 0 40px 0"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 48,
          marginBottom: 24
        }}>
          <span style={{ color: "#444", fontSize: 20 }}>Bienvenido/a,</span>
          <span style={{ color: "#b71c1c", fontWeight: 700, fontSize: 28, margin: "8px 0" }}>Josué Gutiérrez</span>
          <span style={{ color: "#666", fontSize: 18, marginBottom: 24 }}>
            ¿Qué deseas hacer hoy?
          </span>
        </div>
        <div className="dashboard-cards" style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 32
        }}>
          <div className="dashboard-card" style={cardStyle}>
            <FaFileAlt size={48} color="#b71c1c" style={{ marginBottom: 12 }} />
            <div style={{ fontWeight: 600, textAlign: "center" }}>
              Ver Permisos de Salida,<br />Ausencia, Tardía o Incapacidad
            </div>
          </div>
          <div className="dashboard-card" style={cardStyle}>
            <FaCog size={48} color="#7c4dff" style={{ marginBottom: 12 }} />
            <div style={{ fontWeight: 600, textAlign: "center" }}>
              Ver Justificaciones.
            </div>
          </div>
          <div className="dashboard-card" style={cardStyle}>
            <FaBuilding size={48} color="#00bcd4" style={{ marginBottom: 12 }} />
            <div style={{ fontWeight: 600, textAlign: "center" }}>
              Gestionar Reportes de<br />Problemas y Daños.
            </div>
          </div>
          <div className="dashboard-card" style={cardStyle}>
            <FaUsers size={48} color="#512da8" style={{ marginBottom: 12 }} />
            <div style={{ fontWeight: 600, textAlign: "center" }}>
              Administración de Personal
            </div>
          </div>
        </div>
        {/* Historial */}
        <div style={{
          margin: "48px auto 0 auto",
          maxWidth: 600,
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
          padding: 32
        }}>
          <h3 style={{ color: "#1a237e", fontWeight: 700, marginBottom: 16 }}>Historial.</h3>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ color: "#b71c1c", fontWeight: 600, fontSize: 16 }}>
                <th style={thStyle}>Fecha de solicitud</th>
                <th style={thStyle}>Motivo de solicitud</th>
                <th style={thStyle}>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>26/07/2025</td>
                <td style={tdStyle}>Exámenes rutinarios de sangre</td>
                <td style={{ ...tdStyle, color: "#bfa100", fontWeight: 600 }}>Pendiente</td>
              </tr>
              <tr>
                <td style={tdStyle}>18/06/2025</td>
                <td style={tdStyle}>Accidente automovilístico</td>
                <td style={{ ...tdStyle, color: "#2e7d32", fontWeight: 600 }}>Aprobado</td>
              </tr>
              <tr>
                <td style={tdStyle}>15/06/2025</td>
                <td style={tdStyle}>Enfermedad repentina</td>
                <td style={{ ...tdStyle, color: "#b71c1c", fontWeight: 600 }}>Denegado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

const cardStyle = {
  background: "#fff",
  borderRadius: 16,
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  padding: "32px 28px",
  minWidth: 260,
  minHeight: 150,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "box-shadow 0.2s",
  margin: 8
};

const thStyle = {
  padding: "8px 12px",
  borderBottom: "2px solid #eee",
  textAlign: "left"
};

const tdStyle = {
  padding: "8px 12px",
  borderBottom: "1px solid #eee"
};

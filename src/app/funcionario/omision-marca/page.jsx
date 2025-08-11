"use client";

import Link from "next/link";
import Header from "../../../../components/components/Header";
import "../../../../styles/admin.css";
import { useState } from "react";

export default function OmisionMarcaPage() {
  const [fecha, setFecha] = useState("");
  const [tipo, setTipo] = useState("");
  const [justificacion, setJustificacion] = useState("");

  // Simulación de datos de usuario (puedes reemplazar por props o contexto)
  const nombre = "Josué Gutiérrez Herrera";
  const cedula = "402705923";
  const centro = "CTP Mercedes Norte";
  const puesto = "Auxiliar Administrativo";
  const instancia = "Personal docente";
  const fechaOmitida = "22/4/25";
  const hora = "3:38";
  const mes = "Abril";
  const anno = "2025";
  const lugar = "Heredia, Mercedes Norte.";

  return (
    <div className="app-container funcionario">
      <Header activePage="funcionario" />
      <div className="omision-container">
        <Link href="/funcionario" className="volver-link">&lt; Volver</Link>
        <div className="omision-header-bar">
          <span className="omision-title">Justificación de Omisión de Marca</span>
          <div className="omision-logos">
            <img src="/images/logoMIPP.png" alt="MIPP+" style={{ height: 40, marginRight: 16 }} />
            <img src="/images/logoCTPMN.png" alt="CTP" style={{ height: 40, marginRight: 16 }} />
            <img src="/images/escudo.png" alt="Escudo" style={{ height: 40 }} />
          </div>
        </div>
        <div className="omision-form-box">
          <div className="omision-row omision-user-row">
            <span>Quien se suscribe</span>
            <input value={nombre} readOnly className="omision-input" />
            <span>, con cédula de identidad</span>
            <input value={cedula} readOnly className="omision-input" style={{ width: 110 }} />
            <span>, quien labora en la institución educativa</span>
            <input value={centro} readOnly className="omision-input" style={{ width: 170 }} />
            <span>, en el puesto de</span>
            <input value={puesto} readOnly className="omision-input" style={{ width: 160 }} />
            <span>en instancia de</span>
            <input value={instancia} readOnly className="omision-input" style={{ width: 140 }} />
            <span>Justifica:</span>
          </div>
          <div className="omision-row omision-fecha-row">
            <span className="omision-label omision-label-rojo">Omisión de marca:</span>
            <span className="omision-label">Fecha: {fechaOmitida}</span>
          </div>
          <div className="omision-row">
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <label className="omision-label">Fecha</label>
              <input type="date" className="omision-input" value={fecha} onChange={e => setFecha(e.target.value)} style={{ width: 120 }} />
            </div>
            <div style={{ marginLeft: 40 }}>
              <label className="omision-label">Tipo</label>
              <label className="omision-radio"><input type="radio" name="tipo" value="Entrada" checked={tipo === "Entrada"} onChange={e => setTipo(e.target.value)} /> Entrada</label>
              <label className="omision-radio"><input type="radio" name="tipo" value="Salida" checked={tipo === "Salida"} onChange={e => setTipo(e.target.value)} /> Salida</label>
              <label className="omision-radio"><input type="radio" name="tipo" value="Todo el día" checked={tipo === "Todo el día"} onChange={e => setTipo(e.target.value)} /> Todo el día</label>
              <label className="omision-radio"><input type="radio" name="tipo" value="Salida anticipada" checked={tipo === "Salida anticipada"} onChange={e => setTipo(e.target.value)} /> Salida anticipada</label>
            </div>
          </div>
          <div className="omision-row">
            <label className="omision-label">Justificación:</label>
            <textarea className="omision-textarea" value={justificacion} onChange={e => setJustificacion(e.target.value)} />
          </div>
          <div className="omision-row omision-footer-row">
            <span className="omision-footer">Presento la justificación a las <b>{hora}</b> del mes <b>{mes}</b>, del año {anno} en {lugar}</span>
            <button className="omision-submit">Enviar solicitud</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .omision-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 30px 0 0 0;
        }
        .volver-link {
          color: #8b1538;
          font-weight: 600;
          text-decoration: none;
          font-size: 1.1rem;
          margin-bottom: 18px;
          display: inline-block;
        }
        .omision-header-bar {
          background: #8b1538;
          color: #fff;
          border-radius: 10px 10px 0 0;
          padding: 18px 0 18px 0;
          text-align: center;
          font-size: 1.7rem;
          font-weight: 700;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }
        .omision-title {
          flex: 1;
        }
        .omision-logos img {
          vertical-align: middle;
        }
        .omision-form-box {
          background: #fff;
          border-radius: 0 0 10px 10px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          padding: 32px 32px 24px 32px;
        }
        .omision-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }
        .omision-user-row span, .omision-user-row input {
          margin-right: 7px;
          margin-bottom: 7px;
        }
        .omision-input {
          background: #f5f5f5;
          border: 1px solid #ccc;
          border-radius: 6px;
          padding: 4px 10px;
          font-size: 1rem;
          min-width: 60px;
        }
        .omision-label {
          font-weight: 600;
          margin-right: 10px;
        }
        .omision-label-rojo {
          color: #8b1538;
          font-weight: 700;
          margin-right: 10px;
        }
        .omision-radio {
          margin-right: 18px;
          font-weight: 500;
        }
        .omision-radio input[type="radio"] {
          accent-color: #8b1538;
          margin-right: 4px;
        }
        .omision-textarea {
          width: 100%;
          min-height: 90px;
          border-radius: 6px;
          border: 1px solid #ccc;
          padding: 8px 10px;
          font-size: 1rem;
          resize: vertical;
        }
        .omision-footer-row {
          justify-content: space-between;
          align-items: center;
        }
        .omision-footer {
          color: #444;
          font-size: 1rem;
        }
        .omision-submit {
          background: #8b1538;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 12px 32px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s;
        }
        .omision-submit:hover {
          background: #a91b47;
        }
        @media (max-width: 900px) {
          .omision-form-box {
            padding: 18px 8px 18px 8px;
          }
        }
        @media (max-width: 600px) {
          .omision-header-bar {
            font-size: 1.1rem;
            flex-direction: column;
            gap: 8px;
          }
          .omision-form-box {
            padding: 8px 2px 8px 2px;
          }
        }
      `}</style>
    </div>
  );
}

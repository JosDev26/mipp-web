"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Instruments() {
  const [instruments, setInstruments] = useState([]);
  useEffect(() => {
    async function fetchInstruments() {
      const { data } = await supabase.from("instruments").select();
      setInstruments(data || []);
    }
    fetchInstruments();
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f3f4f6",
      fontFamily: "Inter, sans-serif",
      padding: 0,
      margin: 0
    }}>
      <div className="main-card-responsive" style={{
        maxWidth: 600,
        width: "100%",
        margin: "0 16px",
        padding: 24,
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)"
      }}>
        <h2 style={{ marginBottom: 24, fontWeight: 600, fontSize: 28, color: "#222" }}>
          Instrumentos
        </h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {instruments && instruments.length > 0 ? (
            instruments.map((inst) => (
              <InstrumentItem key={inst.id} inst={inst} />
            ))
          ) : (
            <li style={{ color: "#888", fontSize: 16 }}>No hay instrumentos disponibles.</li>
          )}
        </ul>
        <style>{`
          .instrument-item {
            transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s cubic-bezier(.4,2,.6,1);
          }
          .instrument-item:hover {
            transform: translateY(-4px) scale(1.025);
            box-shadow: 0 4px 18px rgba(0,0,0,0.10);
            background: #eef2fa;
          }
          @media (max-width: 700px) {
            .main-card-responsive {
              max-width: 98vw;
              padding: 12px;
            }
            .instrument-item {
              padding: 12px 10px !important;
              font-size: 15px !important;
            }
          }
          @media (max-width: 400px) {
            .main-card-responsive {
              padding: 4px;
            }
            .instrument-item {
              font-size: 13px !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

function getWikipediaUrl(name) {
  // Reemplaza espacios por guiones bajos y codifica el nombre para la URL
  const encodedName = encodeURIComponent(name.replace(/ /g, "_"));
  return `https://es.wikipedia.org/wiki/${encodedName}`;
}

function InstrumentItem({ inst }) {
  const handleClick = () => {
    window.open(getWikipediaUrl(inst.name), "_blank", "noopener,noreferrer");
  };

  return (
    <li
      className="instrument-item"
      style={{
        padding: "16px 20px",
        marginBottom: 16,
        background: "#f7f8fa",
        borderRadius: 8,
        boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer"
      }}
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-label={`Ver instrumento ${inst.name}`}
      onKeyPress={e => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
    >
      <span style={{ fontSize: 18, fontWeight: 500, color: "#333", display: "flex", alignItems: "center" }}>
        <span style={{
          background: "#e0e7ff",
          color: "#3730a3",
          fontSize: 13,
          fontWeight: 600,
          borderRadius: 6,
          padding: "2px 8px",
          marginRight: 10,
          letterSpacing: 0.5
        }}>
          #{inst.id}
        </span>
        {inst.name}
      </span>
      {inst.description && (
        <span style={{ fontSize: 14, color: "#666", marginTop: 4 }}>
          {inst.description}
        </span>
      )}
    </li>
  );
}
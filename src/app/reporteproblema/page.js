"use client";
import React, { useEffect, useState } from "react";
import sheet from "../permissionform/permission.css";
import { supabase } from "../supabaseClient";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

export default function ReporteProblemaForm() {
  const [userData, setUserData] = useState({
    name: "",
    id: "",
    position: "",
    instancia: "",
    center: ""
  });
  const [userError, setUserError] = useState("");
  const [reporte, setReporte] = useState("");
  const [lugar, setLugar] = useState("");
  const [tipo, setTipo] = useState("");
  const [now, setNow] = useState(new Date());
  const getNowCR = () => new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Costa_Rica' }));
  const [nowCR, setNowCR] = useState(getNowCR());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    const timerCR = setInterval(() => setNowCR(getNowCR()), 1000);
    return () => { clearInterval(timer); clearInterval(timerCR); };
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userIdStr = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
        if (!userIdStr) {
          setUserError("No hay sesión activa. Por favor, inicie sesión para autocompletar sus datos.");
          return;
        }
        const { data, error } = await supabase
          .from("users")
          .select("user_fname, user_sname, user_flname, user_slname, user_id, user_position, user_instance, user_center")
          .eq("user_id", userIdStr)
          .single();
        if (error) throw error;
        if (data) {
          const fullName = [data.user_fname, data.user_sname, data.user_flname, data.user_slname].filter(Boolean).join(" ");
          setUserData({
            name: fullName,
            id: data.user_id || "",
            position: data.user_position || "",
            instancia: data.user_instance || "",
            center: data.user_center || "CTP Mercedes Norte"
          });
        }
      } catch (err) {
        setUserError("Error al cargar los datos del usuario: " + (err.message || err));
      }
    };
    fetchUserData();
  }, []);

  const monthName = (d) => {
    const s = new Intl.DateTimeFormat('es-CR', { month: 'long', timeZone: 'America/Costa_Rica' }).format(d);
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const toTimeInputSeconds = (d) => {
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  };

  return (
    <div className="permission-form-container">
      {userError && (
        <div style={{ background: '#ffeaea', color: '#a00', padding: 12, borderRadius: 6, marginBottom: 16, textAlign: 'center', fontWeight: 600 }}>
          {userError}
        </div>
      )}
      <header className="permission-header">
        <button className="back-button" onClick={() => history.back()}><ChevronLeft size={18}/> Volver</button>
        <div className="logos">
          <Image src="/images/logoMIPP.png" alt="MIPP+" className="logo-mipp" width={120} height={40} />
          <Image src="/images/logoCTPMN.png" alt="CTP Mercedes Norte" className="logo-mep" width={160} height={40} />
        </div>
      </header>
      <h1 className="form-title">Reporte de Problema de Infraestructura o Daño Material</h1>
      <form className="permission-form">
        <div className="form-row">
          <span>
            Quien se suscribe <input type="text" value={userData.name} readOnly style={{width:180}} />
            , con cédula de identidad <input type="text" value={userData.id} readOnly style={{width:120}} />
            , quien labora en la institución educativa <input type="text" value={userData.center} readOnly style={{width:160}} />
            , en el puesto de <input type="text" value={userData.position} readOnly style={{width:160}} />
            , en instancia de <input type="text" value={userData.instancia} readOnly style={{width:140}} />
            . Reporta:
          </span>
        </div>
        <div className="form-row">
          <label style={{width:'60%'}}>Reporte:
            <textarea value={reporte} onChange={e => setReporte(e.target.value)} style={{width:'100%', minHeight:100}} />
          </label>
          <label style={{width:'35%', marginLeft:'5%'}}>Lugar: (Sea Específico)
            <input type="text" value={lugar} onChange={e => setLugar(e.target.value)} style={{width:'100%'}} />
          </label>
        </div>
        <div className="form-row">
          <label style={{color:'#8b1538', fontWeight:600, marginTop:10}}>
            Tipo de reporte: problema infraestructura, daño material, falta de material
            <select value={tipo} onChange={e => setTipo(e.target.value)} style={{marginLeft:10}}>
              <option value="">Seleccione una opción ▼</option>
              <option value="infraestructura">Problema infraestructura</option>
              <option value="danio_material">Daño material</option>
              <option value="falta_material">Falta de material</option>
            </select>
          </label>
        </div>
        <div className="form-row" style={{marginTop:30}}>
          <span>
            Presento el reporte a las <input type="text" value={toTimeInputSeconds(nowCR)} readOnly style={{ width: 40 }} /> del mes <input type="text" value={monthName(nowCR)} readOnly style={{ width: 60 }} /> del año {nowCR.getFullYear()} en Heredia, Mercedes Norte.
          </span>
        </div>
        <div className="form-row" style={{ textAlign: "right" }}>
          <button type="submit" className="submit-button">Enviar Reporte</button>
        </div>
      </form>
    </div>
  );
}
